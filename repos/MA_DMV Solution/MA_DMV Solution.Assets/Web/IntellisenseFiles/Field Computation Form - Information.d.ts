declare namespace Form.msdyn_fieldcomputation.Main {
    namespace Information {
        namespace Tabs {
            interface b74a34505dc5412aa7ca2847a660f299 extends XrmBase.SectionCollectionBase {
                get(name: "{7b7b4cf3-6d9f-4da9-8e24-a71b75677633}"): XrmBase.PageSection;
                get(name: "{b74a3450-5dc5-412a-a7ca-2847a660f299}_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_computedfield"): XrmBase.OptionSetAttribute<msdyn_computablefields>;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_productid"): XrmBase.LookupAttribute<"product">;
            get(name: "msdyn_propertyid"): XrmBase.LookupAttribute<"dynamicproperty">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_computedfield"): XrmBase.OptionSetControl<msdyn_computablefields>;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_productid"): XrmBase.LookupControl<"product">;
            get(name: "msdyn_propertyid"): XrmBase.LookupControl<"dynamicproperty">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{b74a3450-5dc5-412a-a7ca-2847a660f299}"): XrmBase.PageTab<Tabs.b74a34505dc5412aa7ca2847a660f299>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_computedfield"): XrmBase.OptionSetAttribute<msdyn_computablefields>;
        getAttribute(attributeName: "msdyn_productid"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "msdyn_propertyid"): XrmBase.LookupAttribute<"dynamicproperty">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_computedfield"): XrmBase.OptionSetControl<msdyn_computablefields>;
        getControl(controlName: "msdyn_productid"): XrmBase.LookupControl<"product">;
        getControl(controlName: "msdyn_propertyid"): XrmBase.LookupControl<"dynamicproperty">;
        getControl(controlName: string): undefined;
    }
}
