declare namespace Form.msdyn_iotpropertydefinition.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "General"): XrmBase.PageSection;
                get(name: "ChildParameters"): XrmBase.PageSection;
                get(name: "Commands"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_additionalproperties"): XrmBase.StringAttribute;
            get(name: "msdyn_editable"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_parentproperty"): XrmBase.LookupAttribute<"msdyn_iotpropertydefinition">;
            get(name: "msdyn_type"): XrmBase.OptionSetAttribute<msdyn_iotpropertydefinition_msdyn_type>;
            get(name: "msdyn_visible"): XrmBase.OptionSetAttribute<boolean>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "ChildParameters"): XrmBase.SubGridControl<"msdyn_iotpropertydefinition">;
            get(name: "IoTDeviceCommandDefinitions"): XrmBase.SubGridControl<"msdyn_iotdevicecommanddefinition">;
            get(name: "msdyn_additionalproperties"): XrmBase.StringControl;
            get(name: "msdyn_editable"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_parentproperty"): XrmBase.LookupControl<"msdyn_iotpropertydefinition">;
            get(name: "msdyn_type"): XrmBase.OptionSetControl<msdyn_iotpropertydefinition_msdyn_type>;
            get(name: "msdyn_visible"): XrmBase.OptionSetControl<any>;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "General"): XrmBase.PageTab<Tabs.General>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_type"): XrmBase.OptionSetAttribute<msdyn_iotpropertydefinition_msdyn_type>;
        getAttribute(attributeName: "msdyn_parentproperty"): XrmBase.LookupAttribute<"msdyn_iotpropertydefinition">;
        getAttribute(attributeName: "msdyn_editable"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_visible"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_additionalproperties"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_type"): XrmBase.OptionSetControl<msdyn_iotpropertydefinition_msdyn_type>;
        getControl(controlName: "msdyn_parentproperty"): XrmBase.LookupControl<"msdyn_iotpropertydefinition">;
        getControl(controlName: "msdyn_editable"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_visible"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_additionalproperties"): XrmBase.StringControl;
        getControl(controlName: "ChildParameters"): XrmBase.SubGridControl<"msdyn_iotpropertydefinition">;
        getControl(controlName: "IoTDeviceCommandDefinitions"): XrmBase.SubGridControl<"msdyn_iotdevicecommanddefinition">;
        getControl(controlName: string): undefined;
    }
}
