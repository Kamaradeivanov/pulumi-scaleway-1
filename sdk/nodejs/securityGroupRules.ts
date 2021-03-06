// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Creates and manages Scaleway Compute Instance security group rules. For more information, see [the documentation](https://developers.scaleway.com/en/products/instance/api/#security-groups-8d7f89).
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-scaleway/blob/master/website/docs/r/instance_security_group_rules.html.markdown.
 */
export class SecurityGroupRules extends pulumi.CustomResource {
    /**
     * Get an existing SecurityGroupRules resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecurityGroupRulesState, opts?: pulumi.CustomResourceOptions): SecurityGroupRules {
        return new SecurityGroupRules(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'scaleway:index/securityGroupRules:SecurityGroupRules';

    /**
     * Returns true if the given object is an instance of SecurityGroupRules.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecurityGroupRules {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecurityGroupRules.__pulumiType;
    }

    /**
     * Inbound rules for this set of security group rules
     */
    public readonly inboundRules!: pulumi.Output<outputs.SecurityGroupRulesInboundRule[] | undefined>;
    /**
     * Outbound rules for this set of security group rules
     */
    public readonly outboundRules!: pulumi.Output<outputs.SecurityGroupRulesOutboundRule[] | undefined>;
    /**
     * The security group associated with this volume
     */
    public readonly securityGroupId!: pulumi.Output<string>;

    /**
     * Create a SecurityGroupRules resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecurityGroupRulesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SecurityGroupRulesArgs | SecurityGroupRulesState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as SecurityGroupRulesState | undefined;
            inputs["inboundRules"] = state ? state.inboundRules : undefined;
            inputs["outboundRules"] = state ? state.outboundRules : undefined;
            inputs["securityGroupId"] = state ? state.securityGroupId : undefined;
        } else {
            const args = argsOrState as SecurityGroupRulesArgs | undefined;
            if (!args || args.securityGroupId === undefined) {
                throw new Error("Missing required property 'securityGroupId'");
            }
            inputs["inboundRules"] = args ? args.inboundRules : undefined;
            inputs["outboundRules"] = args ? args.outboundRules : undefined;
            inputs["securityGroupId"] = args ? args.securityGroupId : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(SecurityGroupRules.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SecurityGroupRules resources.
 */
export interface SecurityGroupRulesState {
    /**
     * Inbound rules for this set of security group rules
     */
    readonly inboundRules?: pulumi.Input<pulumi.Input<inputs.SecurityGroupRulesInboundRule>[]>;
    /**
     * Outbound rules for this set of security group rules
     */
    readonly outboundRules?: pulumi.Input<pulumi.Input<inputs.SecurityGroupRulesOutboundRule>[]>;
    /**
     * The security group associated with this volume
     */
    readonly securityGroupId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SecurityGroupRules resource.
 */
export interface SecurityGroupRulesArgs {
    /**
     * Inbound rules for this set of security group rules
     */
    readonly inboundRules?: pulumi.Input<pulumi.Input<inputs.SecurityGroupRulesInboundRule>[]>;
    /**
     * Outbound rules for this set of security group rules
     */
    readonly outboundRules?: pulumi.Input<pulumi.Input<inputs.SecurityGroupRulesOutboundRule>[]>;
    /**
     * The security group associated with this volume
     */
    readonly securityGroupId: pulumi.Input<string>;
}
