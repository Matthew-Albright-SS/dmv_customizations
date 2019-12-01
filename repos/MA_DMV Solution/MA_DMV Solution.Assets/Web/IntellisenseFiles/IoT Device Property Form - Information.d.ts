declare namespace Form.msdyn_iotdeviceproperty.Main {
    namespace Information {
        namespace Tabs {
            interface _8a17d0c479fc45e08ea090216679a8a0 extends XrmBase.SectionCollectionBase {
                get(name: "{8a17d0c4-79fc-45e0-8ea0-90216679a8a0}_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_devicecategory"): XrmBase.LookupAttribute<"msdyn_iotdevicecategory">;
            get(name: "msdyn_istag"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_property"): XrmBase.LookupAttribute<"msdyn_iotpropertydefinition">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_devicecategory"): XrmBase.LookupControl<"msdyn_iotdevicecategory">;
            get(name: "msdyn_istag"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_property"): XrmBase.LookupControl<"msdyn_iotpropertydefinition">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{8a17d0c4-79fc-45e0-8ea0-90216679a8a0}"): XrmBase.PageTab<Tabs._8a17d0c479fc45e08ea090216679a8a0>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_devicecategory"): XrmBase.LookupAttribute<"msdyn_iotdevicecategory">;
        getAttribute(attributeName: "msdyn_property"): XrmBase.LookupAttribute<"msdyn_iotpropertydefinition">;
        getAttribute(attributeName: "msdyn_istag"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_devicecategory"): XrmBase.LookupControl<"msdyn_iotdevicecategory">;
        getControl(controlName: "msdyn_property"): XrmBase.LookupControl<"msdyn_iotpropertydefinition">;
        getControl(controlName: "msdyn_istag"): XrmBase.OptionSetControl<any>;
        getControl(controlName: string): undefined;
    }
}
