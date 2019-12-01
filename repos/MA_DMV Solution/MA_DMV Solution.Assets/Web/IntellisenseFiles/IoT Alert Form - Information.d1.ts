declare namespace Form.msdyn_iotalert.Main {
    namespace Information {
        namespace Tabs {
            interface b4d9bb281bd14896aa83a8cd2a781dde extends XrmBase.SectionCollectionBase {
                get(name: "AssetSection"): XrmBase.PageSection;
                get(name: "HierarchySection"): XrmBase.PageSection;
                get(name: "Connected Device Readings"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface DeviceCommandsTab extends XrmBase.SectionCollectionBase {
                get(name: "DeviceCommandsSection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface DeviceInsightsTab extends XrmBase.SectionCollectionBase {
                get(name: "DeviceInsightsSection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_alertdata"): XrmBase.StringAttribute;
            get(name: "msdyn_alerttime"): XrmBase.DateAttribute;
            get(name: "msdyn_alerttoken"): XrmBase.StringAttribute;
            get(name: "msdyn_alerttype"): XrmBase.OptionSetAttribute<msdyn_iotalert_msdyn_alerttype>;
            get(name: "msdyn_alerturl"): XrmBase.StringAttribute;
            get(name: "msdyn_customerasset"): XrmBase.LookupAttribute<"msdyn_customerasset">;
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_device"): XrmBase.LookupAttribute<"msdyn_iotdevice">;
            get(name: "msdyn_deviceid"): XrmBase.StringAttribute;
            get(name: "msdyn_parentalert"): XrmBase.LookupAttribute<"msdyn_iotalert">;
            get(name: "msdyn_parentalerttoken"): XrmBase.StringAttribute;
            get(name: "statuscode"): XrmBase.OptionSetAttribute<msdyn_iotalert_statuscode>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "DeviceCommandsGrid"): XrmBase.SubGridControl<"msdyn_iotdevicecommand">;
            get(name: "msdyn_alertdata"): XrmBase.StringControl;
            get(name: "msdyn_alerttime"): XrmBase.DateControl;
            get(name: "msdyn_alerttoken"): XrmBase.StringControl;
            get(name: "msdyn_alerttype"): XrmBase.OptionSetControl<msdyn_iotalert_msdyn_alerttype>;
            get(name: "msdyn_alerturl"): XrmBase.StringControl;
            get(name: "msdyn_customerasset"): XrmBase.LookupControl<"msdyn_customerasset">;
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_device"): XrmBase.LookupControl<"msdyn_iotdevice">;
            get(name: "msdyn_deviceid"): XrmBase.StringControl;
            get(name: "msdyn_parentalert"): XrmBase.LookupControl<"msdyn_iotalert">;
            get(name: "msdyn_parentalerttoken"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "statuscode"): XrmBase.OptionSetControl<msdyn_iotalert_statuscode>;
            get(name: "WebResource_PowerBIAlert"): XrmBase.WebResourceControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{b4d9bb28-1bd1-4896-aa83-a8cd2a781dde}"): XrmBase.PageTab<Tabs.b4d9bb281bd14896aa83a8cd2a781dde>;
            get(name: "DeviceCommandsTab"): XrmBase.PageTab<Tabs.DeviceCommandsTab>;
            get(name: "DeviceInsightsTab"): XrmBase.PageTab<Tabs.DeviceInsightsTab>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_alerttype"): XrmBase.OptionSetAttribute<msdyn_iotalert_msdyn_alerttype>;
        getAttribute(attributeName: "msdyn_alerttoken"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_alerttime"): XrmBase.DateAttribute;
        getAttribute(attributeName: "statuscode"): XrmBase.OptionSetAttribute<msdyn_iotalert_statuscode>;
        getAttribute(attributeName: "msdyn_alerturl"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_alertdata"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_customerasset"): XrmBase.LookupAttribute<"msdyn_customerasset">;
        getAttribute(attributeName: "msdyn_device"): XrmBase.LookupAttribute<"msdyn_iotdevice">;
        getAttribute(attributeName: "msdyn_deviceid"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_parentalert"): XrmBase.LookupAttribute<"msdyn_iotalert">;
        getAttribute(attributeName: "msdyn_parentalerttoken"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "msdyn_alerttype"): XrmBase.OptionSetControl<msdyn_iotalert_msdyn_alerttype>;
        getControl(controlName: "msdyn_alerttoken"): XrmBase.StringControl;
        getControl(controlName: "msdyn_alerttime"): XrmBase.DateControl;
        getControl(controlName: "statuscode"): XrmBase.OptionSetControl<msdyn_iotalert_statuscode>;
        getControl(controlName: "msdyn_alerturl"): XrmBase.StringControl;
        getControl(controlName: "msdyn_alertdata"): XrmBase.StringControl;
        getControl(controlName: "msdyn_customerasset"): XrmBase.LookupControl<"msdyn_customerasset">;
        getControl(controlName: "msdyn_device"): XrmBase.LookupControl<"msdyn_iotdevice">;
        getControl(controlName: "msdyn_deviceid"): XrmBase.StringControl;
        getControl(controlName: "msdyn_parentalert"): XrmBase.LookupControl<"msdyn_iotalert">;
        getControl(controlName: "msdyn_parentalerttoken"): XrmBase.StringControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "WebResource_PowerBIAlert"): XrmBase.WebResourceControl;
        getControl(controlName: "DeviceCommandsGrid"): XrmBase.SubGridControl<"msdyn_iotdevicecommand">;
        getControl(controlName: string): undefined;
    }
}
