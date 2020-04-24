// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package scaleway

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// **DEPRECATED**: This resource is deprecated and will be removed in `v2.0+`.
// Please use `.getInstanceImage` instead or `.getMarketplaceImageBeta` depending on your usage.
//
// Use this data source to get the ID of a registered Image for use with the
// `.Server` resource.
func GetImage(ctx *pulumi.Context, args *GetImageArgs, opts ...pulumi.InvokeOption) (*GetImageResult, error) {
	var rv GetImageResult
	err := ctx.Invoke("scaleway:index/getImage:getImage", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getImage.
type GetImageArgs struct {
	// any supported Scaleway architecture, e.g. `x8664`, `arm`
	Architecture string `pulumi:"architecture"`
	// Return most recent image if multiple exist. Can not be used together with name_filter.
	MostRecent *bool `pulumi:"mostRecent"`
	// Exact name of desired Image
	Name *string `pulumi:"name"`
	// Regexp to match Image name by
	NameFilter *string `pulumi:"nameFilter"`
}

// A collection of values returned by getImage.
type GetImageResult struct {
	// architecture of the Image, e.g. `arm` or `x8664`
	Architecture string `pulumi:"architecture"`
	// date when image was created
	CreationDate string `pulumi:"creationDate"`
	// id is the provider-assigned unique ID for this managed resource.
	Id         string  `pulumi:"id"`
	MostRecent *bool   `pulumi:"mostRecent"`
	Name       string  `pulumi:"name"`
	NameFilter *string `pulumi:"nameFilter"`
	// uuid of the organization owning this Image
	Organization string `pulumi:"organization"`
	// is this a public image
	Public bool `pulumi:"public"`
}