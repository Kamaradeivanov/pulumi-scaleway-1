// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Scaleway.Outputs
{

    [OutputType]
    public sealed class KubernetesClusterBetaDefaultPoolNode
    {
        public readonly string? Name;
        public readonly string? PublicIp;
        public readonly string? PublicIpV6;
        public readonly string? Status;

        [OutputConstructor]
        private KubernetesClusterBetaDefaultPoolNode(
            string? name,

            string? publicIp,

            string? publicIpV6,

            string? status)
        {
            Name = name;
            PublicIp = publicIp;
            PublicIpV6 = publicIpV6;
            Status = status;
        }
    }
}