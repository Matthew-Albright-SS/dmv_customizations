declare namespace Form.msdyn_iotdevicecommand.Main {
    namespace Information {
        namespace Tabs {
            interface c820dae9b78d4bbd8fbedd255869040b extends XrmBase.SectionCollectionBase {
                get(name: "{5e35860a-0cc6-4e8a-9288-9e77ddb50b1e}"): XrmBase.PageSection;
                get(name: "{c820dae9-b78d-4bbd-8fbe-dd255869040b}_section_2"): XrmBase.PageSection;
                get(name: "IoTAlert"): XrmBase.PageSection;
                get(name: "MessageSection"): XrmBase.PageSection;
                get(name: "{c820dae9-b78d-4bbd-8fbe-dd255869040b}_section_5"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_command"): XrmBase.LookupAttribute<"msdyn_iotdevicecommanddefinition">;
            get(name: "msdyn_commandstatus"): XrmBase.OptionSetAttribute<msdyn_iotdevicecommand_msdyn_commandstatus>;
            get(name: "msdyn_commandstatusreason"): XrmBase.StringAttribute;
            get(name: "msdyn_customerasset"): XrmBase.LookupAttribute<"msdyn_customerasset">;
            get(name: "msdyn_device"): XrmBase.LookupAttribute<"msdyn_iotdevice">;
            get(name: "msdyn_deviceid"): XrmBase.StringAttribute;
            get(name: "msdyn_message"): XrmBase.StringAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_parentalert"): XrmBase.LookupAttribute<"msdyn_iotalert">;
            get(name: "msdyn_sendtoallconnecteddevices"): XrmBase.OptionSetAttribute<boolean>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_command"): XrmBase.LookupControl<"msdyn_iotdevicecommanddefinition">;
            get(name: "msdyn_commandstatus"): XrmBase.OptionSetControl<msdyn_iotdevicecommand_msdyn_commandstatus>;
            get(name: "msdyn_commandstatusreason"): XrmBase.StringControl;
            get(name: "msdyn_customerasset"): XrmBase.LookupControl<"msdyn_customerasset">;
            get(name: "msdyn_device"): XrmBase.LookupControl<"msdyn_iotdevice">;
            get(name: "msdyn_deviceid"): XrmBase.StringControl;
            get(name: "msdyn_message"): XrmBase.StringControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_parentalert"): XrmBase.LookupControl<"msdyn_iotalert">;
            get(name: "msdyn_sendtoallconnecteddevices"): XrmBase.OptionSetControl<any>;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{c820dae9-b78d-4bbd-8fbe-dd255869040b}"): XrmBase.PageTab<Tabs.c820dae9b78d4bbd8fbedd255869040b>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_customerasset"): XrmBase.LookupAttribute<"msdyn_customerasset">;
        getAttribute(attributeName: "msdyn_sendtoallconnecteddevices"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_device"): XrmBase.LookupAttribute<"msdyn_iotdevice">;
        getAttribute(attributeName: "msdyn_deviceid"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_parentalert"): XrmBase.LookupAttribute<"msdyn_iotalert">;
        getAttribute(attributeName: "msdyn_command"): XrmBase.LookupAttribute<"msdyn_iotdevicecommanddefinition">;
        getAttribute(attributeName: "msdyn_message"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_commandstatus"): XrmBase.OptionSetAttribute<msdyn_iotdevicecommand_msdyn_commandstatus>;
        getAttribute(attributeName: "msdyn_commandstatusreason"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_customerasset"): XrmBase.LookupControl<"msdyn_customerasset">;
        getControl(controlName: "msdyn_sendtoallconnecteddevices"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_device"): XrmBase.LookupControl<"msdyn_iotdevice">;
        getControl(controlName: "msdyn_deviceid"): XrmBase.StringControl;
        getControl(controlName: "msdyn_parentalert"): XrmBase.LookupControl<"msdyn_iotalert">;
        getControl(controlName: "msdyn_command"): XrmBase.LookupControl<"msdyn_iotdevicecommanddefinition">;
        getControl(controlName: "msdyn_message"): XrmBase.StringControl;
        getControl(controlName: "msdyn_commandstatus"): XrmBase.OptionSetControl<msdyn_iotdevicecommand_msdyn_commandstatus>;
        getControl(controlName: "msdyn_commandstatusreason"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
