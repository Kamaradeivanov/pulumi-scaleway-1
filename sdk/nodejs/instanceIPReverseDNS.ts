// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Manages Scaleway Compute Instance IPs Reverse DNS.
 * 
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-scaleway/blob/master/website/docs/r/instance_ip_reverse_dns.html.markdown.
 */
export class InstanceIPReverseDNS extends pulumi.CustomResource {
    /**
     * Get an existing InstanceIPReverseDNS resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InstanceIPReverseDNSState, opts?: pulumi.CustomResourceOptions): InstanceIPReverseDNS {
        return new InstanceIPReverseDNS(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'scaleway:index/instanceIPReverseDNS:InstanceIPReverseDNS';

    /**
     * Returns true if the given object is an instance of InstanceIPReverseDNS.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InstanceIPReverseDNS {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InstanceIPReverseDNS.__pulumiType;
    }

    /**
     * The IP ID or IP address
     */
    public readonly ipId!: pulumi.Output<string>;
    /**
     * The reverse DNS for this IP
     */
    public readonly reverse!: pulumi.Output<string>;
    /**
     * The zone you want to attach the resource to
     */
    public readonly zone!: pulumi.Output<string>;

    /**
     * Create a InstanceIPReverseDNS resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InstanceIPReverseDNSArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InstanceIPReverseDNSArgs | InstanceIPReverseDNSState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as InstanceIPReverseDNSState | undefined;
            inputs["ipId"] = state ? state.ipId : undefined;
            inputs["reverse"] = state ? state.reverse : undefined;
            inputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as InstanceIPReverseDNSArgs | undefined;
            if (!args || args.ipId === undefined) {
                throw new Error("Missing required property 'ipId'");
            }
            if (!args || args.reverse === undefined) {
                throw new Error("Missing required property 'reverse'");
            }
            inputs["ipId"] = args ? args.ipId : undefined;
            inputs["reverse"] = args ? args.reverse : undefined;
            inputs["zone"] = args ? args.zone : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(InstanceIPReverseDNS.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering InstanceIPReverseDNS resources.
 */
export interface InstanceIPReverseDNSState {
    /**
     * The IP ID or IP address
     */
    readonly ipId?: pulumi.Input<string>;
    /**
     * The reverse DNS for this IP
     */
    readonly reverse?: pulumi.Input<string>;
    /**
     * The zone you want to attach the resource to
     */
    readonly zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a InstanceIPReverseDNS resource.
 */
export interface InstanceIPReverseDNSArgs {
    /**
     * The IP ID or IP address
     */
    readonly ipId: pulumi.Input<string>;
    /**
     * The reverse DNS for this IP
     */
    readonly reverse: pulumi.Input<string>;
    /**
     * The zone you want to attach the resource to
     */
    readonly zone?: pulumi.Input<string>;
}
