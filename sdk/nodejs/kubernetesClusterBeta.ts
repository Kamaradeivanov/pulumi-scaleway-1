// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Creates and manages Scaleway Kubernetes clusters. For more information, see [the documentation](https://developers.scaleway.com/en/products/k8s/api/).
 * 
 * ## Examples
 * 
 * ### Basic
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as scaleway from "@pulumi/scaleway";
 * 
 * const jack = new scaleway.KubernetesClusterBeta("jack", {
 *     cni: "calico",
 *     defaultPool: {
 *         nodeType: "GP1-XS",
 *         size: 3,
 *     },
 *     version: "1.16.1",
 * });
 * ```
 * 
 * ## nodes
 * 
 * - `name` - The name of the node.
 * - `publicIp` - The public IPv4.
 * - `publicIpV6` - The public IPv6.
 * - `status` - The status of the node.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-scaleway/blob/master/website/docs/r/k8s_cluster_beta.html.markdown.
 */
export class KubernetesClusterBeta extends pulumi.CustomResource {
    /**
     * Get an existing KubernetesClusterBeta resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KubernetesClusterBetaState, opts?: pulumi.CustomResourceOptions): KubernetesClusterBeta {
        return new KubernetesClusterBeta(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'scaleway:index/kubernetesClusterBeta:KubernetesClusterBeta';

    /**
     * Returns true if the given object is an instance of KubernetesClusterBeta.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KubernetesClusterBeta {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KubernetesClusterBeta.__pulumiType;
    }

    /**
     * The list of admission plugins to enable on the cluster
     */
    public readonly admissionPlugins!: pulumi.Output<string[] | undefined>;
    /**
     * Kubernetes API server URL
     */
    public /*out*/ readonly apiserverUrl!: pulumi.Output<string>;
    /**
     * The auto upgrade configuration for the cluster
     */
    public readonly autoUpgrade!: pulumi.Output<outputs.KubernetesClusterBetaAutoUpgrade>;
    /**
     * The autoscaler configuration for the cluster
     */
    public readonly autoscalerConfig!: pulumi.Output<outputs.KubernetesClusterBetaAutoscalerConfig>;
    /**
     * The CNI plugin of the cluster
     */
    public readonly cni!: pulumi.Output<string>;
    /**
     * The date and time of the creation of the Kubernetes cluster
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * Default pool created for the cluster on creation
     */
    public readonly defaultPool!: pulumi.Output<outputs.KubernetesClusterBetaDefaultPool>;
    /**
     * The description of the cluster
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Enable the dashboard on the cluster
     */
    public readonly enableDashboard!: pulumi.Output<boolean | undefined>;
    /**
     * The list of feature gates to enable on the cluster
     */
    public readonly featureGates!: pulumi.Output<string[] | undefined>;
    /**
     * The ingress to be deployed on the cluster
     */
    public readonly ingress!: pulumi.Output<string | undefined>;
    /**
     * The kubeconfig configuration file of the Kubernetes cluster
     */
    public /*out*/ readonly kubeconfig!: pulumi.Output<outputs.KubernetesClusterBetaKubeconfig>;
    /**
     * The name of the cluster
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The organization_id you want to attach the resource to
     */
    public readonly organizationId!: pulumi.Output<string>;
    /**
     * The region you want to attach the resource to
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * The status of the cluster
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * The tags associated with the cluster
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    /**
     * The date and time of the last update of the Kubernetes cluster
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;
    /**
     * True if an upgrade is available
     */
    public /*out*/ readonly upgradeAvailable!: pulumi.Output<boolean>;
    /**
     * The version of the cluster
     */
    public readonly version!: pulumi.Output<string>;
    /**
     * Wildcard DNS pointing to all the ready nodes
     */
    public /*out*/ readonly wildcardDns!: pulumi.Output<string>;

    /**
     * Create a KubernetesClusterBeta resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KubernetesClusterBetaArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KubernetesClusterBetaArgs | KubernetesClusterBetaState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as KubernetesClusterBetaState | undefined;
            inputs["admissionPlugins"] = state ? state.admissionPlugins : undefined;
            inputs["apiserverUrl"] = state ? state.apiserverUrl : undefined;
            inputs["autoUpgrade"] = state ? state.autoUpgrade : undefined;
            inputs["autoscalerConfig"] = state ? state.autoscalerConfig : undefined;
            inputs["cni"] = state ? state.cni : undefined;
            inputs["createdAt"] = state ? state.createdAt : undefined;
            inputs["defaultPool"] = state ? state.defaultPool : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["enableDashboard"] = state ? state.enableDashboard : undefined;
            inputs["featureGates"] = state ? state.featureGates : undefined;
            inputs["ingress"] = state ? state.ingress : undefined;
            inputs["kubeconfig"] = state ? state.kubeconfig : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["organizationId"] = state ? state.organizationId : undefined;
            inputs["region"] = state ? state.region : undefined;
            inputs["status"] = state ? state.status : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["updatedAt"] = state ? state.updatedAt : undefined;
            inputs["upgradeAvailable"] = state ? state.upgradeAvailable : undefined;
            inputs["version"] = state ? state.version : undefined;
            inputs["wildcardDns"] = state ? state.wildcardDns : undefined;
        } else {
            const args = argsOrState as KubernetesClusterBetaArgs | undefined;
            if (!args || args.cni === undefined) {
                throw new Error("Missing required property 'cni'");
            }
            if (!args || args.defaultPool === undefined) {
                throw new Error("Missing required property 'defaultPool'");
            }
            if (!args || args.version === undefined) {
                throw new Error("Missing required property 'version'");
            }
            inputs["admissionPlugins"] = args ? args.admissionPlugins : undefined;
            inputs["autoUpgrade"] = args ? args.autoUpgrade : undefined;
            inputs["autoscalerConfig"] = args ? args.autoscalerConfig : undefined;
            inputs["cni"] = args ? args.cni : undefined;
            inputs["defaultPool"] = args ? args.defaultPool : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["enableDashboard"] = args ? args.enableDashboard : undefined;
            inputs["featureGates"] = args ? args.featureGates : undefined;
            inputs["ingress"] = args ? args.ingress : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["organizationId"] = args ? args.organizationId : undefined;
            inputs["region"] = args ? args.region : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["version"] = args ? args.version : undefined;
            inputs["apiserverUrl"] = undefined /*out*/;
            inputs["createdAt"] = undefined /*out*/;
            inputs["kubeconfig"] = undefined /*out*/;
            inputs["status"] = undefined /*out*/;
            inputs["updatedAt"] = undefined /*out*/;
            inputs["upgradeAvailable"] = undefined /*out*/;
            inputs["wildcardDns"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(KubernetesClusterBeta.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering KubernetesClusterBeta resources.
 */
export interface KubernetesClusterBetaState {
    /**
     * The list of admission plugins to enable on the cluster
     */
    readonly admissionPlugins?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Kubernetes API server URL
     */
    readonly apiserverUrl?: pulumi.Input<string>;
    /**
     * The auto upgrade configuration for the cluster
     */
    readonly autoUpgrade?: pulumi.Input<inputs.KubernetesClusterBetaAutoUpgrade>;
    /**
     * The autoscaler configuration for the cluster
     */
    readonly autoscalerConfig?: pulumi.Input<inputs.KubernetesClusterBetaAutoscalerConfig>;
    /**
     * The CNI plugin of the cluster
     */
    readonly cni?: pulumi.Input<string>;
    /**
     * The date and time of the creation of the Kubernetes cluster
     */
    readonly createdAt?: pulumi.Input<string>;
    /**
     * Default pool created for the cluster on creation
     */
    readonly defaultPool?: pulumi.Input<inputs.KubernetesClusterBetaDefaultPool>;
    /**
     * The description of the cluster
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Enable the dashboard on the cluster
     */
    readonly enableDashboard?: pulumi.Input<boolean>;
    /**
     * The list of feature gates to enable on the cluster
     */
    readonly featureGates?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ingress to be deployed on the cluster
     */
    readonly ingress?: pulumi.Input<string>;
    /**
     * The kubeconfig configuration file of the Kubernetes cluster
     */
    readonly kubeconfig?: pulumi.Input<inputs.KubernetesClusterBetaKubeconfig>;
    /**
     * The name of the cluster
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The organization_id you want to attach the resource to
     */
    readonly organizationId?: pulumi.Input<string>;
    /**
     * The region you want to attach the resource to
     */
    readonly region?: pulumi.Input<string>;
    /**
     * The status of the cluster
     */
    readonly status?: pulumi.Input<string>;
    /**
     * The tags associated with the cluster
     */
    readonly tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The date and time of the last update of the Kubernetes cluster
     */
    readonly updatedAt?: pulumi.Input<string>;
    /**
     * True if an upgrade is available
     */
    readonly upgradeAvailable?: pulumi.Input<boolean>;
    /**
     * The version of the cluster
     */
    readonly version?: pulumi.Input<string>;
    /**
     * Wildcard DNS pointing to all the ready nodes
     */
    readonly wildcardDns?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a KubernetesClusterBeta resource.
 */
export interface KubernetesClusterBetaArgs {
    /**
     * The list of admission plugins to enable on the cluster
     */
    readonly admissionPlugins?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The auto upgrade configuration for the cluster
     */
    readonly autoUpgrade?: pulumi.Input<inputs.KubernetesClusterBetaAutoUpgrade>;
    /**
     * The autoscaler configuration for the cluster
     */
    readonly autoscalerConfig?: pulumi.Input<inputs.KubernetesClusterBetaAutoscalerConfig>;
    /**
     * The CNI plugin of the cluster
     */
    readonly cni: pulumi.Input<string>;
    /**
     * Default pool created for the cluster on creation
     */
    readonly defaultPool: pulumi.Input<inputs.KubernetesClusterBetaDefaultPool>;
    /**
     * The description of the cluster
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Enable the dashboard on the cluster
     */
    readonly enableDashboard?: pulumi.Input<boolean>;
    /**
     * The list of feature gates to enable on the cluster
     */
    readonly featureGates?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ingress to be deployed on the cluster
     */
    readonly ingress?: pulumi.Input<string>;
    /**
     * The name of the cluster
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The organization_id you want to attach the resource to
     */
    readonly organizationId?: pulumi.Input<string>;
    /**
     * The region you want to attach the resource to
     */
    readonly region?: pulumi.Input<string>;
    /**
     * The tags associated with the cluster
     */
    readonly tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The version of the cluster
     */
    readonly version: pulumi.Input<string>;
}
