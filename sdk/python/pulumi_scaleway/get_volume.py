# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class GetVolumeResult:
    """
    A collection of values returned by getVolume.
    """
    def __init__(__self__, id=None, name=None, server=None, size_in_gb=None, type=None):
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        if server and not isinstance(server, str):
            raise TypeError("Expected argument 'server' to be a str")
        __self__.server = server
        """
        The ID of the Server which this Volume is currently attached to.
        """
        if size_in_gb and not isinstance(size_in_gb, float):
            raise TypeError("Expected argument 'size_in_gb' to be a float")
        __self__.size_in_gb = size_in_gb
        """
        (Required) size of the volume in GB
        """
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        __self__.type = type
        """
        The type of volume this is, such as `l_ssd`.
        """
class AwaitableGetVolumeResult(GetVolumeResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetVolumeResult(
            id=self.id,
            name=self.name,
            server=self.server,
            size_in_gb=self.size_in_gb,
            type=self.type)

def get_volume(name=None,opts=None):
    """
    Gets information about a Volume.




    :param str name: Exact name of the Volume.
    """
    __args__ = dict()


    __args__['name'] = name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('scaleway:index/getVolume:getVolume', __args__, opts=opts).value

    return AwaitableGetVolumeResult(
        id=__ret__.get('id'),
        name=__ret__.get('name'),
        server=__ret__.get('server'),
        size_in_gb=__ret__.get('sizeInGb'),
        type=__ret__.get('type'))