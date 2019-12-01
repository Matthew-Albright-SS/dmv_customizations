declare namespace Form.msdyn_customerasset.Main {
    namespace CustomerAsset {
        namespace Tabs {
            interface b3f360611f164bbbbd7444fac42c9094 extends XrmBase.SectionCollectionBase {
                get(name: "{216040c1-499b-4120-8175-2efb7536e940}"): XrmBase.PageSection;
                get(name: "ConnectedDeviceAttributes"): XrmBase.PageSection;
                get(name: "fstab_summary_location"): XrmBase.PageSection;
                get(name: "{b3f36061-1f16-4bbb-bd74-44fac42c9094}_section_7"): XrmBase.PageSection;
                get(name: "{576663bb-ea91-486d-8f88-da4cd98df0eb}"): XrmBase.PageSection;
                get(name: "Connected Device Readings"): XrmBase.PageSection;
                get(name: "{b3f36061-1f16-4bbb-bd74-44fac42c9094}_section_3"): XrmBase.PageSection;
                get(name: "Asset_WorkOrder"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface CommandsTab extends XrmBase.SectionCollectionBase {
                get(name: "CommandsSection"): XrmBase.PageSection;
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
            get(name: "msdyn_account"): XrmBase.LookupAttribute<"account">;
            get(name: "msdyn_customerassetcategory"): XrmBase.LookupAttribute<"msdyn_customerassetcategory">;
            get(name: "msdyn_deviceid"): XrmBase.StringAttribute;
            get(name: "msdyn_latitude"): XrmBase.NumberAttribute;
            get(name: "msdyn_longitude"): XrmBase.NumberAttribute;
            get(name: "msdyn_masterasset"): XrmBase.LookupAttribute<"msdyn_customerasset">;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_parentasset"): XrmBase.LookupAttribute<"msdyn_customerasset">;
            get(name: "msdyn_product"): XrmBase.LookupAttribute<"product">;
            get(name: "msdyn_registrationstatus"): XrmBase.OptionSetAttribute<msdyn_customerasset_msdyn_registrationstatus>;
            get(name: "msdyn_workorderproduct"): XrmBase.LookupAttribute<"msdyn_workorderproduct">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "Asset_SubAsset"): XrmBase.SubGridControl<"msdyn_customerasset">;
            get(name: "Asset_WorkOrder"): XrmBase.SubGridControl<"msdyn_workorder">;
            get(name: "CommandsGrid"): XrmBase.SubGridControl<"msdyn_iotdevicecommand">;
            get(name: "ConnectedDevices"): XrmBase.SubGridControl<"connection">;
            get(name: "msdyn_account"): XrmBase.LookupControl<"account">;
            get(name: "msdyn_customerassetcategory"): XrmBase.LookupControl<"msdyn_customerassetcategory">;
            get(name: "msdyn_deviceid"): XrmBase.StringControl;
            get(name: "msdyn_latitude"): XrmBase.NumberControl;
            get(name: "msdyn_longitude"): XrmBase.NumberControl;
            get(name: "msdyn_masterasset"): XrmBase.LookupControl<"msdyn_customerasset">;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_parentasset"): XrmBase.LookupControl<"msdyn_customerasset">;
            get(name: "msdyn_product"): XrmBase.LookupControl<"product">;
            get(name: "msdyn_registrationstatus"): XrmBase.OptionSetControl<msdyn_customerasset_msdyn_registrationstatus>;
            get(name: "msdyn_workorderproduct"): XrmBase.LookupControl<"msdyn_workorderproduct">;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "WebResource_PowerBIConnectedDevices"): XrmBase.WebResourceControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{b3f36061-1f16-4bbb-bd74-44fac42c9094}"): XrmBase.PageTab<Tabs.b3f360611f164bbbbd7444fac42c9094>;
            get(name: "CommandsTab"): XrmBase.PageTab<Tabs.CommandsTab>;
            get(name: "DeviceInsightsTab"): XrmBase.PageTab<Tabs.DeviceInsightsTab>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface CustomerAsset extends XrmBase.PageBase<CustomerAsset.Attributes, CustomerAsset.Tabs, CustomerAsset.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_customerassetcategory"): XrmBase.LookupAttribute<"msdyn_customerassetcategory">;
        getAttribute(attributeName: "msdyn_account"): XrmBase.LookupAttribute<"account">;
        getAttribute(attributeName: "msdyn_parentasset"): XrmBase.LookupAttribute<"msdyn_customerasset">;
        getAttribute(attributeName: "msdyn_masterasset"): XrmBase.LookupAttribute<"msdyn_customerasset">;
        getAttribute(attributeName: "msdyn_product"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "msdyn_workorderproduct"): XrmBase.LookupAttribute<"msdyn_workorderproduct">;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_deviceid"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_registrationstatus"): XrmBase.OptionSetAttribute<msdyn_customerasset_msdyn_registrationstatus>;
        getAttribute(attributeName: "msdyn_latitude"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_longitude"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_customerassetcategory"): XrmBase.LookupControl<"msdyn_customerassetcategory">;
        getControl(controlName: "msdyn_account"): XrmBase.LookupControl<"account">;
        getControl(controlName: "msdyn_parentasset"): XrmBase.LookupControl<"msdyn_customerasset">;
        getControl(controlName: "msdyn_masterasset"): XrmBase.LookupControl<"msdyn_customerasset">;
        getControl(controlName: "msdyn_product"): XrmBase.LookupControl<"product">;
        getControl(controlName: "msdyn_workorderproduct"): XrmBase.LookupControl<"msdyn_workorderproduct">;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_deviceid"): XrmBase.StringControl;
        getControl(controlName: "msdyn_registrationstatus"): XrmBase.OptionSetControl<msdyn_customerasset_msdyn_registrationstatus>;
        getControl(controlName: "msdyn_latitude"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_longitude"): XrmBase.NumberControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "ConnectedDevices"): XrmBase.SubGridControl<"connection">;
        getControl(controlName: "WebResource_PowerBIConnectedDevices"): XrmBase.WebResourceControl;
        getControl(controlName: "Asset_SubAsset"): XrmBase.SubGridControl<"msdyn_customerasset">;
        getControl(controlName: "Asset_WorkOrder"): XrmBase.SubGridControl<"msdyn_workorder">;
        getControl(controlName: "CommandsGrid"): XrmBase.SubGridControl<"msdyn_iotdevicecommand">;
        getControl(controlName: string): undefined;
    }
}
