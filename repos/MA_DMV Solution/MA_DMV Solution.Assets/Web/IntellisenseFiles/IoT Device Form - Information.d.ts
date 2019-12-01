declare namespace Form.msdyn_iotdevice.Main {
    namespace Information {
        namespace Tabs {
            interface _1bcff70d56154084953f2196583d6e79 extends XrmBase.SectionCollectionBase {
                get(name: "{a9378ebb-2fcc-41b7-8039-b2b2a89490e2}"): XrmBase.PageSection;
                get(name: "DeviceStatusSection"): XrmBase.PageSection;
                get(name: "DeviceSettingsSection"): XrmBase.PageSection;
                get(name: "Connected Device Readings"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface DeviceData extends XrmBase.SectionCollectionBase {
                get(name: "Device Data"): XrmBase.PageSection;
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
            interface CommandsTab extends XrmBase.SectionCollectionBase {
                get(name: "CommandsSection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface RegistrationHistory extends XrmBase.SectionCollectionBase {
                get(name: "RegistrationHistorySection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_account"): XrmBase.LookupAttribute<"account">;
            get(name: "msdyn_category"): XrmBase.LookupAttribute<"msdyn_iotdevicecategory">;
            get(name: "msdyn_connectionstate"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_deviceid"): XrmBase.StringAttribute;
            get(name: "msdyn_devicereportedproperties"): XrmBase.StringAttribute;
            get(name: "msdyn_devicesettings"): XrmBase.StringAttribute;
            get(name: "msdyn_iotproviderinstance"): XrmBase.LookupAttribute<"msdyn_iotproviderinstance">;
            get(name: "msdyn_issimulated"): XrmBase.OptionSetAttribute<msdyn_iotdevice_msdyn_issimulated>;
            get(name: "msdyn_lastactivitytime"): XrmBase.DateAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_registrationmessage"): XrmBase.StringAttribute;
            get(name: "msdyn_registrationstatus"): XrmBase.OptionSetAttribute<msdyn_iotdevice_msdyn_registrationstatus>;
            get(name: "msdyn_tags"): XrmBase.StringAttribute;
            get(name: "msdyn_timezone"): XrmBase.NumberAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "CommandsGrid"): XrmBase.SubGridControl<"msdyn_iotdevicecommand">;
            get(name: "DeviceDataHistory"): XrmBase.SubGridControl<"msdyn_iotdevicedatahistory">;
            get(name: "msdyn_account"): XrmBase.LookupControl<"account">;
            get(name: "msdyn_category"): XrmBase.LookupControl<"msdyn_iotdevicecategory">;
            get(name: "msdyn_connectionstate"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_deviceid"): XrmBase.StringControl;
            get(name: "msdyn_devicereportedproperties"): XrmBase.StringControl;
            get(name: "msdyn_devicesettings"): XrmBase.StringControl;
            get(name: "msdyn_iotproviderinstance"): XrmBase.LookupControl<"msdyn_iotproviderinstance">;
            get(name: "msdyn_issimulated"): XrmBase.OptionSetControl<msdyn_iotdevice_msdyn_issimulated>;
            get(name: "msdyn_lastactivitytime"): XrmBase.DateControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_registrationmessage"): XrmBase.StringControl;
            get(name: "msdyn_registrationstatus"): XrmBase.OptionSetControl<msdyn_iotdevice_msdyn_registrationstatus>;
            get(name: "msdyn_tags"): XrmBase.StringControl;
            get(name: "msdyn_timezone"): XrmBase.BaseControl;
            get(name: "RegistrationHistory"): XrmBase.SubGridControl<"msdyn_iotdeviceregistrationhistory">;
            get(name: "WebResource_PowerBIDevice"): XrmBase.WebResourceControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{1bcff70d-5615-4084-953f-2196583d6e79}"): XrmBase.PageTab<Tabs._1bcff70d56154084953f2196583d6e79>;
            get(name: "Device Data"): XrmBase.PageTab<Tabs.DeviceData>;
            get(name: "DeviceInsightsTab"): XrmBase.PageTab<Tabs.DeviceInsightsTab>;
            get(name: "CommandsTab"): XrmBase.PageTab<Tabs.CommandsTab>;
            get(name: "RegistrationHistory"): XrmBase.PageTab<Tabs.RegistrationHistory>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_account"): XrmBase.LookupAttribute<"account">;
        getAttribute(attributeName: "msdyn_category"): XrmBase.LookupAttribute<"msdyn_iotdevicecategory">;
        getAttribute(attributeName: "msdyn_timezone"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_deviceid"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_issimulated"): XrmBase.OptionSetAttribute<msdyn_iotdevice_msdyn_issimulated>;
        getAttribute(attributeName: "msdyn_iotproviderinstance"): XrmBase.LookupAttribute<"msdyn_iotproviderinstance">;
        getAttribute(attributeName: "msdyn_registrationstatus"): XrmBase.OptionSetAttribute<msdyn_iotdevice_msdyn_registrationstatus>;
        getAttribute(attributeName: "msdyn_registrationmessage"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_connectionstate"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_lastactivitytime"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_devicereportedproperties"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_devicesettings"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_tags"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_account"): XrmBase.LookupControl<"account">;
        getControl(controlName: "msdyn_category"): XrmBase.LookupControl<"msdyn_iotdevicecategory">;
        getControl(controlName: "msdyn_timezone"): XrmBase.BaseControl;
        getControl(controlName: "msdyn_deviceid"): XrmBase.StringControl;
        getControl(controlName: "msdyn_issimulated"): XrmBase.OptionSetControl<msdyn_iotdevice_msdyn_issimulated>;
        getControl(controlName: "msdyn_iotproviderinstance"): XrmBase.LookupControl<"msdyn_iotproviderinstance">;
        getControl(controlName: "msdyn_registrationstatus"): XrmBase.OptionSetControl<msdyn_iotdevice_msdyn_registrationstatus>;
        getControl(controlName: "msdyn_registrationmessage"): XrmBase.StringControl;
        getControl(controlName: "msdyn_connectionstate"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_lastactivitytime"): XrmBase.DateControl;
        getControl(controlName: "msdyn_devicereportedproperties"): XrmBase.StringControl;
        getControl(controlName: "msdyn_devicesettings"): XrmBase.StringControl;
        getControl(controlName: "msdyn_tags"): XrmBase.StringControl;
        getControl(controlName: "WebResource_PowerBIDevice"): XrmBase.WebResourceControl;
        getControl(controlName: "DeviceDataHistory"): XrmBase.SubGridControl<"msdyn_iotdevicedatahistory">;
        getControl(controlName: "CommandsGrid"): XrmBase.SubGridControl<"msdyn_iotdevicecommand">;
        getControl(controlName: "RegistrationHistory"): XrmBase.SubGridControl<"msdyn_iotdeviceregistrationhistory">;
        getControl(controlName: string): undefined;
    }
}
