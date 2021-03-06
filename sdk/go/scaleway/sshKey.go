// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package scaleway

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// **DEPRECATED**: This resource is deprecated and will be removed in `v2.0+`.
// Please use `accountSshKey` instead.
//
// Manages user SSH Keys to access servers provisioned on scaleway.
// For additional details please refer to [API documentation](https://developer.scaleway.com/#users-user-get).
type SshKey struct {
	pulumi.CustomResourceState

	// The ssh key
	Key pulumi.StringOutput `pulumi:"key"`
}

// NewSshKey registers a new resource with the given unique name, arguments, and options.
func NewSshKey(ctx *pulumi.Context,
	name string, args *SshKeyArgs, opts ...pulumi.ResourceOption) (*SshKey, error) {
	if args == nil || args.Key == nil {
		return nil, errors.New("missing required argument 'Key'")
	}
	if args == nil {
		args = &SshKeyArgs{}
	}
	var resource SshKey
	err := ctx.RegisterResource("scaleway:index/sshKey:SshKey", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetSshKey gets an existing SshKey resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSshKey(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *SshKeyState, opts ...pulumi.ResourceOption) (*SshKey, error) {
	var resource SshKey
	err := ctx.ReadResource("scaleway:index/sshKey:SshKey", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering SshKey resources.
type sshKeyState struct {
	// The ssh key
	Key *string `pulumi:"key"`
}

type SshKeyState struct {
	// The ssh key
	Key pulumi.StringPtrInput
}

func (SshKeyState) ElementType() reflect.Type {
	return reflect.TypeOf((*sshKeyState)(nil)).Elem()
}

type sshKeyArgs struct {
	// The ssh key
	Key string `pulumi:"key"`
}

// The set of arguments for constructing a SshKey resource.
type SshKeyArgs struct {
	// The ssh key
	Key pulumi.StringInput
}

func (SshKeyArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*sshKeyArgs)(nil)).Elem()
}
