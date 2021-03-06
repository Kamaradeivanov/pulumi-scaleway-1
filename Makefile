PROJECT_NAME := scaleway Package
include build/common.mk

PACK             := scaleway
PACKDIR          := sdk
ORG              := pulumi
PROJECT          := github.com/${ORG}/pulumi-${PACK}
NODE_MODULE_NAME := @pulumi/${PACK}
TF_NAME          := ${PACK}

TFGEN           := pulumi-tfgen-${PACK}
PROVIDER        := pulumi-resource-${PACK}
VERSION         := $(shell scripts/get-version)
PYPI_VERSION    := $(shell scripts/get-py-version)

DOTNET_PREFIX  := $(firstword $(subst -, ,${VERSION:v%=%})) # e.g. 1.5.0
DOTNET_SUFFIX  := $(word 2,$(subst -, ,${VERSION:v%=%}))    # e.g. alpha.1

ifeq ($(strip ${DOTNET_SUFFIX}),)
	DOTNET_VERSION := $(strip ${DOTNET_PREFIX})
else
	DOTNET_VERSION := $(strip ${DOTNET_PREFIX})-$(strip ${DOTNET_SUFFIX})
endif

TESTPARALLELISM := 4

OS := $(shell uname)
EMPTY_TO_AVOID_SED := ""

prepare::
	@if test -z "${NAME}"; then echo "NAME not set"; exit 1; fi
	@if test -z "${PROJECT}"; then echo "REPOSITORY not set"; exit 1; fi
	@if test ! -d "provider/cmd/pulumi-tfgen-x${EMPTY_TO_AVOID_SED}yz"; then "Project already prepared"; exit 1; fi

	mv "provider/cmd/pulumi-tfgen-x${EMPTY_TO_AVOID_SED}yz" provider/cmd/pulumi-tfgen-${NAME}
	mv "provider/cmd/pulumi-resource-x${EMPTY_TO_AVOID_SED}yz" provider/cmd/pulumi-resource-${NAME}

	if [[ "${OS}" != "Darwin" ]]; then \
		find ./ ! -path './.git/*' -type f -exec sed -i 's,github.com/pulumi/pulumi-[x]yz,${PROJECT},g' {} \; &> /dev/null; \
		find ./ ! -path './.git/*' -type f -exec sed -i 's/[x]yz/${NAME}/g' {} \; &> /dev/null; \
	fi

	# In MacOS the -i parameter needs an empty string to execute in place.
	if [[ "${OS}" == "Darwin" ]]; then \
		find ./ ! -path './.git/*' -type f -exec sed -i '' 's,github.com/pulumi/pulumi-[x]yz,${PROJECT},g' {} \; &> /dev/null; \
		find ./ ! -path './.git/*' -type f -exec sed -i '' 's/[x]yz/${NAME}/g' {} \; &> /dev/null; \
	fi

build:: tfgen provider build_node build_python build_go build_dotnet

build_node:: tfgen provider
	cd provider && ./bin/$(TFGEN) nodejs --overlays overlays/nodejs --out ../${PACKDIR}/nodejs/
	cd ${PACKDIR}/nodejs/ && \
        yarn install && \
        yarn run tsc && \
        cp ../../README.md ../../LICENSE package.json yarn.lock ./bin/ && \
		sed -i.bak -e "s/\$${VERSION}/$(VERSION)/g" ./bin/package.json

build_python:: tfgen provider
	cd provider && ./bin/$(TFGEN) python --overlays overlays/python --out ../${PACKDIR}/python/
	cd ${PACKDIR}/python/ && \
        cp ../../README.md . && \
        $(PYTHON) setup.py clean --all 2>/dev/null && \
        rm -rf ./bin/ ../python.bin/ && cp -R . ../python.bin && mv ../python.bin ./bin && \
        sed -i.bak -e "s/\$${VERSION}/$(PYPI_VERSION)/g" -e "s/\$${PLUGIN_VERSION}/$(VERSION)/g" ./bin/setup.py && \
        rm ./bin/setup.py.bak && \
        cd ./bin && $(PYTHON) setup.py build sdist

build_go:: tfgen provider
	cd provider && ./bin/$(TFGEN) go --overlays overlays/go --out ../${PACKDIR}/go/

build_dotnet:: tfgen provider
	cd provider && ./bin/$(TFGEN) dotnet --overlays overlays/dotnet --out ../${PACKDIR}/dotnet/
	cd ${PACKDIR}/dotnet/ && \
        dotnet build /p:Version=${DOTNET_VERSION}

generate_schema:: tfgen
	./provider/bin/$(TFGEN) schema --out ./provider/cmd/${PROVIDER}

tfgen::
	cd provider && go build -o ./bin/${TFGEN} -ldflags "-X github.com/${ORG}/pulumi-${PACK}/provider/pkg/version.Version=${VERSION}" ${PROJECT}/provider/cmd/${TFGEN}

provider:: generate_schema
	cd provider && go generate cmd/${PROVIDER}/main.go
	cd provider && go install -ldflags "-X ${PROJECT}/provider/pkg/version.Version=${VERSION}" ${PROJECT}/provider/cmd/${PROVIDER}

install::
	[ ! -e "$(PULUMI_NODE_MODULES)/$(NODE_MODULE_NAME)" ] || rm -rf "$(PULUMI_NODE_MODULES)/$(NODE_MODULE_NAME)"
	mkdir -p "$(PULUMI_NODE_MODULES)/$(NODE_MODULE_NAME)"
	cp -r ${PACKDIR}/nodejs/bin/. "$(PULUMI_NODE_MODULES)/$(NODE_MODULE_NAME)"
	rm -rf "$(PULUMI_NODE_MODULES)/$(NODE_MODULE_NAME)/node_modules"
	cd "$(PULUMI_NODE_MODULES)/$(NODE_MODULE_NAME)" && \
		yarn install --offline --production && \
		(yarn unlink > /dev/null 2>&1 || true) && \
		yarn link
	cd ${PACKDIR}/python/bin && $(PIP) install --user -e .
	echo "Copying NuGet packages to ${PULUMI_NUGET}"
	[ ! -e "$(PULUMI_NUGET)" ] || rm -rf "$(PULUMI_NUGET)/*"
	find . -name '*.nupkg' -exec cp -p {} ${PULUMI_NUGET} \;

test_all::
	cd examples && $(GO_TEST) .

test_fast::
	cd examples && $(GO_TEST_FAST) .

.PHONY: publish_tgz
publish_tgz:
	$(call STEP_MESSAGE)
	./scripts/publish_tgz.sh

.PHONY: publish_packages
publish_packages:
	$(call STEP_MESSAGE)
	$$(go env GOPATH)/src/github.com/pulumi/scripts/ci/publish-tfgen-package .
	$$(go env GOPATH)/src/github.com/pulumi/scripts/ci/build-package-docs.sh ${PACK}

.PHONY: check_clean_worktree
check_clean_worktree:
	$$(go env GOPATH)/src/github.com/pulumi/scripts/ci/check-worktree-is-clean.sh

# The travis_* targets are entrypoints for CI.
.PHONY: travis_cron travis_push travis_pull_request travis_api
travis_cron: all
travis_push: only_build check_clean_worktree publish_tgz only_test publish_packages
travis_pull_request: all check_clean_worktree
travis_api: all
