declare namespace Form.dynamicpropertyoptionsetitem.Main {
    namespace PropertyOptionSetItem {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "dynamicpropertyoptionsetiteminformation"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "dynamicpropertyoptiondescription"): XrmBase.StringAttribute;
            get(name: "dynamicpropertyoptionname"): XrmBase.StringAttribute;
            get(name: "dynamicpropertyoptionvalue"): XrmBase.NumberAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "dynamicpropertyoptiondescription"): XrmBase.StringControl;
            get(name: "dynamicpropertyoptionname"): XrmBase.StringControl;
            get(name: "dynamicpropertyoptionvalue"): XrmBase.NumberControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "general"): XrmBase.PageTab<Tabs.General>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface PropertyOptionSetItem extends XrmBase.PageBase<PropertyOptionSetItem.Attributes, PropertyOptionSetItem.Tabs, PropertyOptionSetItem.Controls> {
        getAttribute(attributeName: "dynamicpropertyoptionname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "dynamicpropertyoptionvalue"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "dynamicpropertyoptiondescription"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "dynamicpropertyoptionname"): XrmBase.StringControl;
        getControl(controlName: "dynamicpropertyoptionvalue"): XrmBase.NumberControl;
        getControl(controlName: "dynamicpropertyoptiondescription"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
