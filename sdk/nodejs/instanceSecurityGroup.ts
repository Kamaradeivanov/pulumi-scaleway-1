// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Creates and manages Scaleway Compute Instance security groups. For more information, see [the documentation](https://developers.scaleway.com/en/products/instance/api/#security-groups-8d7f89).
 * 
 * ## Examples
 * 
 * ### Basic
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as scaleway from "@pulumi/scaleway";
 * 
 * const allowAll = new scaleway.InstanceSecurityGroup("allowAll", {});
 * const web = new scaleway.InstanceSecurityGroup("web", {
 *     inboundDefaultPolicy: "drop", // By default we drop incomming trafic that do not match any inboundRule
 *     inboundRules: [
 *         {
 *             action: "accept",
 *             ip: "212.47.225.64",
 *             port: 22,
 *         },
 *         {
 *             action: "accept",
 *             port: 80,
 *         },
 *         {
 *             action: "accept",
 *             portRange: "22-23",
 *             protocol: "UDP",
 *         },
 *     ],
 * });
 * ```
 * 
 * ### Web server with banned IP and restricted internet access
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as scaleway from "@pulumi/scaleway";
 * 
 * const web = new scaleway.InstanceSecurityGroup("web", {
 *     inboundDefaultPolicy: "drop", // By default we drop incomming trafic that do not match any inbound_rule.
 *     inboundRules: [
 *         {
 *             action: "drop",
 *             ip: "1.1.1.1", // Banned IP
 *         },
 *         {
 *             action: "accept",
 *             ip: "212.47.225.64",
 *             port: 22,
 *         },
 *         {
 *             action: "accept",
 *             port: 443,
 *         },
 *     ],
 *     outboundDefaultPolicy: "drop", // By default we drop outgoing trafic that do not match any outbound_rule.
 *     outboundRules: [{
 *         action: "accept",
 *         ip: "8.8.8.8", // Only allow outgoing conection to this IP.
 *     }],
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-scaleway/blob/master/website/docs/r/instance_security_group.html.markdown.
 */
export class InstanceSecurityGroup extends pulumi.CustomResource {
    /**
     * Get an existing InstanceSecurityGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InstanceSecurityGroupState, opts?: pulumi.CustomResourceOptions): InstanceSecurityGroup {
        return new InstanceSecurityGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'scaleway:index/instanceSecurityGroup:InstanceSecurityGroup';

    /**
     * Returns true if the given object is an instance of InstanceSecurityGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InstanceSecurityGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InstanceSecurityGroup.__pulumiType;
    }

    /**
     * The description of the security group
     */
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly externalRules!: pulumi.Output<boolean | undefined>;
    /**
     * Default inbound traffic policy for this security group
     */
    public readonly inboundDefaultPolicy!: pulumi.Output<string | undefined>;
    /**
     * Inbound rules for this security group
     */
    public readonly inboundRules!: pulumi.Output<outputs.InstanceSecurityGroupInboundRule[] | undefined>;
    /**
     * The name of the security group
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The organization_id you want to attach the resource to
     */
    public readonly organizationId!: pulumi.Output<string>;
    /**
     * Default outbound traffic policy for this security group
     */
    public readonly outboundDefaultPolicy!: pulumi.Output<string | undefined>;
    /**
     * Outbound rules for this security group
     */
    public readonly outboundRules!: pulumi.Output<outputs.InstanceSecurityGroupOutboundRule[] | undefined>;
    /**
     * The zone you want to attach the resource to
     */
    public readonly zone!: pulumi.Output<string>;

    /**
     * Create a InstanceSecurityGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: InstanceSecurityGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InstanceSecurityGroupArgs | InstanceSecurityGroupState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as InstanceSecurityGroupState | undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["externalRules"] = state ? state.externalRules : undefined;
            inputs["inboundDefaultPolicy"] = state ? state.inboundDefaultPolicy : undefined;
            inputs["inboundRules"] = state ? state.inboundRules : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["organizationId"] = state ? state.organizationId : undefined;
            inputs["outboundDefaultPolicy"] = state ? state.outboundDefaultPolicy : undefined;
            inputs["outboundRules"] = state ? state.outboundRules : undefined;
            inputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as InstanceSecurityGroupArgs | undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["externalRules"] = args ? args.externalRules : undefined;
            inputs["inboundDefaultPolicy"] = args ? args.inboundDefaultPolicy : undefined;
            inputs["inboundRules"] = args ? args.inboundRules : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["organizationId"] = args ? args.organizationId : undefined;
            inputs["outboundDefaultPolicy"] = args ? args.outboundDefaultPolicy : undefined;
            inputs["outboundRules"] = args ? args.outboundRules : undefined;
            inputs["zone"] = args ? args.zone : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(InstanceSecurityGroup.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering InstanceSecurityGroup resources.
 */
export interface InstanceSecurityGroupState {
    /**
     * The description of the security group
     */
    readonly description?: pulumi.Input<string>;
    readonly externalRules?: pulumi.Input<boolean>;
    /**
     * Default inbound traffic policy for this security group
     */
    readonly inboundDefaultPolicy?: pulumi.Input<string>;
    /**
     * Inbound rules for this security group
     */
    readonly inboundRules?: pulumi.Input<pulumi.Input<inputs.InstanceSecurityGroupInboundRule>[]>;
    /**
     * The name of the security group
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The organization_id you want to attach the resource to
     */
    readonly organizationId?: pulumi.Input<string>;
    /**
     * Default outbound traffic policy for this security group
     */
    readonly outboundDefaultPolicy?: pulumi.Input<string>;
    /**
     * Outbound rules for this security group
     */
    readonly outboundRules?: pulumi.Input<pulumi.Input<inputs.InstanceSecurityGroupOutboundRule>[]>;
    /**
     * The zone you want to attach the resource to
     */
    readonly zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a InstanceSecurityGroup resource.
 */
export interface InstanceSecurityGroupArgs {
    /**
     * The description of the security group
     */
    readonly description?: pulumi.Input<string>;
    readonly externalRules?: pulumi.Input<boolean>;
    /**
     * Default inbound traffic policy for this security group
     */
    readonly inboundDefaultPolicy?: pulumi.Input<string>;
    /**
     * Inbound rules for this security group
     */
    readonly inboundRules?: pulumi.Input<pulumi.Input<inputs.InstanceSecurityGroupInboundRule>[]>;
    /**
     * The name of the security group
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The organization_id you want to attach the resource to
     */
    readonly organizationId?: pulumi.Input<string>;
    /**
     * Default outbound traffic policy for this security group
     */
    readonly outboundDefaultPolicy?: pulumi.Input<string>;
    /**
     * Outbound rules for this security group
     */
    readonly outboundRules?: pulumi.Input<pulumi.Input<inputs.InstanceSecurityGroupOutboundRule>[]>;
    /**
     * The zone you want to attach the resource to
     */
    readonly zone?: pulumi.Input<string>;
}
