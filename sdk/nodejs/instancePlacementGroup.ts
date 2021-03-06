// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Creates and manages Compute Instance Placement Groups. For more information, see [the documentation](https://developers.scaleway.com/en/products/instance/api/#placement-groups-d8f653).
 * 
 * ## Example Usage
 * 
 * 
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as scaleway from "@pulumi/scaleway";
 * 
 * const availabilityGroup = new scaleway.InstancePlacementGroup("availabilityGroup", {});
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-scaleway/blob/master/website/docs/r/instance_placement_group.html.markdown.
 */
export class InstancePlacementGroup extends pulumi.CustomResource {
    /**
     * Get an existing InstancePlacementGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InstancePlacementGroupState, opts?: pulumi.CustomResourceOptions): InstancePlacementGroup {
        return new InstancePlacementGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'scaleway:index/instancePlacementGroup:InstancePlacementGroup';

    /**
     * Returns true if the given object is an instance of InstancePlacementGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InstancePlacementGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InstancePlacementGroup.__pulumiType;
    }

    /**
     * The name of the placement group
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The organization_id you want to attach the resource to
     */
    public readonly organizationId!: pulumi.Output<string>;
    /**
     * One of the two policy_mode may be selected: enforced or optional.
     */
    public readonly policyMode!: pulumi.Output<string | undefined>;
    /**
     * Is true when the policy is respected.
     */
    public /*out*/ readonly policyRespected!: pulumi.Output<boolean>;
    /**
     * The operating mode is selected by a policy_type
     */
    public readonly policyType!: pulumi.Output<string | undefined>;
    /**
     * The zone you want to attach the resource to
     */
    public readonly zone!: pulumi.Output<string>;

    /**
     * Create a InstancePlacementGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: InstancePlacementGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InstancePlacementGroupArgs | InstancePlacementGroupState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as InstancePlacementGroupState | undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["organizationId"] = state ? state.organizationId : undefined;
            inputs["policyMode"] = state ? state.policyMode : undefined;
            inputs["policyRespected"] = state ? state.policyRespected : undefined;
            inputs["policyType"] = state ? state.policyType : undefined;
            inputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as InstancePlacementGroupArgs | undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["organizationId"] = args ? args.organizationId : undefined;
            inputs["policyMode"] = args ? args.policyMode : undefined;
            inputs["policyType"] = args ? args.policyType : undefined;
            inputs["zone"] = args ? args.zone : undefined;
            inputs["policyRespected"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(InstancePlacementGroup.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering InstancePlacementGroup resources.
 */
export interface InstancePlacementGroupState {
    /**
     * The name of the placement group
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The organization_id you want to attach the resource to
     */
    readonly organizationId?: pulumi.Input<string>;
    /**
     * One of the two policy_mode may be selected: enforced or optional.
     */
    readonly policyMode?: pulumi.Input<string>;
    /**
     * Is true when the policy is respected.
     */
    readonly policyRespected?: pulumi.Input<boolean>;
    /**
     * The operating mode is selected by a policy_type
     */
    readonly policyType?: pulumi.Input<string>;
    /**
     * The zone you want to attach the resource to
     */
    readonly zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a InstancePlacementGroup resource.
 */
export interface InstancePlacementGroupArgs {
    /**
     * The name of the placement group
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The organization_id you want to attach the resource to
     */
    readonly organizationId?: pulumi.Input<string>;
    /**
     * One of the two policy_mode may be selected: enforced or optional.
     */
    readonly policyMode?: pulumi.Input<string>;
    /**
     * The operating mode is selected by a policy_type
     */
    readonly policyType?: pulumi.Input<string>;
    /**
     * The zone you want to attach the resource to
     */
    readonly zone?: pulumi.Input<string>;
}
