declare namespace Form.msdyn_iotdevicecategory.Main {
    namespace Information {
        namespace Tabs {
            interface CommandDefinitions extends XrmBase.SectionCollectionBase {
                get(name: "Commands Section"): XrmBase.PageSection;
                get(name: "Command Definitions_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface PropertiesTab extends XrmBase.SectionCollectionBase {
                get(name: "PropertiesSection"): XrmBase.PageSection;
                get(name: "tab_3_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface DeviceTagsTab extends XrmBase.SectionCollectionBase {
                get(name: "DeviceTagsSection"): XrmBase.PageSection;
                get(name: "tab_4_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "Commands"): XrmBase.SubGridControl<"msdyn_iotdevicecommanddefinition">;
            get(name: "DevicePropertiesGrid"): XrmBase.SubGridControl<"msdyn_iotdeviceproperty">;
            get(name: "DevicesGrid"): XrmBase.SubGridControl<"msdyn_iotdevice">;
            get(name: "DeviceTagsGrid"): XrmBase.SubGridControl<"msdyn_iotdeviceproperty">;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "Command Definitions"): XrmBase.PageTab<Tabs.CommandDefinitions>;
            get(name: "PropertiesTab"): XrmBase.PageTab<Tabs.PropertiesTab>;
            get(name: "DeviceTagsTab"): XrmBase.PageTab<Tabs.DeviceTagsTab>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "DevicesGrid"): XrmBase.SubGridControl<"msdyn_iotdevice">;
        getControl(controlName: "Commands"): XrmBase.SubGridControl<"msdyn_iotdevicecommanddefinition">;
        getControl(controlName: "DevicePropertiesGrid"): XrmBase.SubGridControl<"msdyn_iotdeviceproperty">;
        getControl(controlName: "DeviceTagsGrid"): XrmBase.SubGridControl<"msdyn_iotdeviceproperty">;
        getControl(controlName: string): undefined;
    }
}
