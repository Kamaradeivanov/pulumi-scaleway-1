// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";

export interface BaremetalServerBetaIp {
    address?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    reverse?: pulumi.Input<string>;
}

export interface DatabaseInstanceBetaReadReplica {
    ip?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
}

export interface InstanceSecurityGroupInboundRule {
    action: pulumi.Input<string>;
    ip?: pulumi.Input<string>;
    ipRange?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    portRange?: pulumi.Input<string>;
    protocol?: pulumi.Input<string>;
}

export interface InstanceSecurityGroupOutboundRule {
    action: pulumi.Input<string>;
    ip?: pulumi.Input<string>;
    ipRange?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    portRange?: pulumi.Input<string>;
    protocol?: pulumi.Input<string>;
}

export interface InstanceSecurityGroupRulesInboundRule {
    action: pulumi.Input<string>;
    ip?: pulumi.Input<string>;
    ipRange?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    portRange?: pulumi.Input<string>;
    protocol?: pulumi.Input<string>;
}

export interface InstanceSecurityGroupRulesOutboundRule {
    action: pulumi.Input<string>;
    ip?: pulumi.Input<string>;
    ipRange?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    portRange?: pulumi.Input<string>;
    protocol?: pulumi.Input<string>;
}

export interface InstanceServerRootVolume {
    deleteOnTermination?: pulumi.Input<boolean>;
    sizeInGb?: pulumi.Input<number>;
    volumeId?: pulumi.Input<string>;
}

export interface InstanceServerUserData {
    key: pulumi.Input<string>;
    value: pulumi.Input<string>;
}

export interface KubernetesClusterBetaAutoUpgrade {
    enable: pulumi.Input<boolean>;
    maintenanceWindowDay: pulumi.Input<string>;
    maintenanceWindowStartHour: pulumi.Input<number>;
}

export interface KubernetesClusterBetaAutoscalerConfig {
    balanceSimilarNodeGroups?: pulumi.Input<boolean>;
    disableScaleDown?: pulumi.Input<boolean>;
    estimator?: pulumi.Input<string>;
    expander?: pulumi.Input<string>;
    expendablePodsPriorityCutoff?: pulumi.Input<number>;
    ignoreDaemonsetsUtilization?: pulumi.Input<boolean>;
    scaleDownDelayAfterAdd?: pulumi.Input<string>;
}

export interface KubernetesClusterBetaDefaultPool {
    autohealing?: pulumi.Input<boolean>;
    autoscaling?: pulumi.Input<boolean>;
    containerRuntime?: pulumi.Input<string>;
    createdAt?: pulumi.Input<string>;
    maxSize?: pulumi.Input<number>;
    minSize?: pulumi.Input<number>;
    nodeType: pulumi.Input<string>;
    nodes?: pulumi.Input<pulumi.Input<inputs.KubernetesClusterBetaDefaultPoolNode>[]>;
    placementGroupId?: pulumi.Input<string>;
    poolId?: pulumi.Input<string>;
    size: pulumi.Input<number>;
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    updatedAt?: pulumi.Input<string>;
    waitForPoolReady?: pulumi.Input<boolean>;
}

export interface KubernetesClusterBetaDefaultPoolNode {
    name?: pulumi.Input<string>;
    publicIp?: pulumi.Input<string>;
    publicIpV6?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}

export interface KubernetesClusterBetaKubeconfig {
    clusterCaCertificate?: pulumi.Input<string>;
    configFile?: pulumi.Input<string>;
    host?: pulumi.Input<string>;
    token?: pulumi.Input<string>;
}

export interface KubernetesNodePoolBetaNode {
    name?: pulumi.Input<string>;
    publicIp?: pulumi.Input<string>;
    publicIpV6?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}

export interface LoadbalancerBackendBetaHealthCheckHttp {
    code?: pulumi.Input<number>;
    method?: pulumi.Input<string>;
    uri: pulumi.Input<string>;
}

export interface LoadbalancerBackendBetaHealthCheckHttps {
    code?: pulumi.Input<number>;
    method?: pulumi.Input<string>;
    uri: pulumi.Input<string>;
}

export interface LoadbalancerBackendBetaHealthCheckTcp {

}

export interface LoadbalancerCertificateBetaCustomCertificate {
    certificateChain: pulumi.Input<string>;
}

export interface LoadbalancerCertificateBetaLetsencrypt {
    commonName: pulumi.Input<string>;
    subjectAlternativeNames?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface LoadbalancerFrontendBetaAcl {
    action: pulumi.Input<inputs.LoadbalancerFrontendBetaAclAction>;
    match: pulumi.Input<inputs.LoadbalancerFrontendBetaAclMatch>;
    name?: pulumi.Input<string>;
    organizationId?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}

export interface LoadbalancerFrontendBetaAclAction {
    type: pulumi.Input<string>;
}

export interface LoadbalancerFrontendBetaAclMatch {
    httpFilter?: pulumi.Input<string>;
    httpFilterValues?: pulumi.Input<pulumi.Input<string>[]>;
    invert?: pulumi.Input<boolean>;
    ipSubnets?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface ServerVolume {
    sizeInGb: pulumi.Input<number>;
    /**
     * type of server
     */
    type: pulumi.Input<string>;
    volumeId?: pulumi.Input<string>;
}
