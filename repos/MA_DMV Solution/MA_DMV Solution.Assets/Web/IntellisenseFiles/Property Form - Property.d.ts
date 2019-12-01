declare namespace Form.dynamicproperty.Main {
    namespace Property {
        namespace Tabs {
            interface Dynamicpropertysummary extends XrmBase.SectionCollectionBase {
                get(name: "dynamic_property_properties_1"): XrmBase.PageSection;
                get(name: "dynamic_property_properties_31"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Dynamicpropertyproperties extends XrmBase.SectionCollectionBase {
                get(name: "dynamic_property_properties_2"): XrmBase.PageSection;
                get(name: "dynamic_property_properties_3"): XrmBase.PageSection;
                get(name: "dynamic_property_properties_41"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "datatype"): XrmBase.OptionSetAttribute<dynamicproperty_datatypecode>;
            get(name: "defaultvaluedecimal"): XrmBase.NumberAttribute;
            get(name: "defaultvaluedouble"): XrmBase.NumberAttribute;
            get(name: "defaultvalueinteger"): XrmBase.NumberAttribute;
            get(name: "defaultvalueoptionset"): XrmBase.LookupAttribute<"dynamicpropertyoptionsetitem">;
            get(name: "defaultvaluestring"): XrmBase.StringAttribute;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "ishidden"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "isreadonly"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "isrequired"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "maxlengthstring"): XrmBase.NumberAttribute;
            get(name: "maxvaluedecimal"): XrmBase.NumberAttribute;
            get(name: "maxvaluedouble"): XrmBase.NumberAttribute;
            get(name: "maxvalueinteger"): XrmBase.NumberAttribute;
            get(name: "minvaluedecimal"): XrmBase.NumberAttribute;
            get(name: "minvaluedouble"): XrmBase.NumberAttribute;
            get(name: "minvalueinteger"): XrmBase.NumberAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "precision"): XrmBase.NumberAttribute;
            get(name: "regardingobjectid"): XrmBase.LookupAttribute<"product">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "datatype"): XrmBase.OptionSetControl<dynamicproperty_datatypecode>;
            get(name: "defaultvaluedecimal"): XrmBase.NumberControl;
            get(name: "defaultvaluedouble"): XrmBase.NumberControl;
            get(name: "defaultvalueinteger"): XrmBase.NumberControl;
            get(name: "defaultvalueoptionset"): XrmBase.LookupControl<"dynamicpropertyoptionsetitem">;
            get(name: "defaultvaluestring"): XrmBase.StringControl;
            get(name: "description"): XrmBase.StringControl;
            get(name: "grid_DynamicPropertyOptionSetItem"): XrmBase.SubGridControl<"dynamicpropertyoptionsetitem">;
            get(name: "ishidden"): XrmBase.OptionSetControl<any>;
            get(name: "isreadonly"): XrmBase.OptionSetControl<any>;
            get(name: "isrequired"): XrmBase.OptionSetControl<any>;
            get(name: "maxlengthstring"): XrmBase.NumberControl;
            get(name: "maxvaluedecimal"): XrmBase.NumberControl;
            get(name: "maxvaluedouble"): XrmBase.NumberControl;
            get(name: "maxvalueinteger"): XrmBase.NumberControl;
            get(name: "minvaluedecimal"): XrmBase.NumberControl;
            get(name: "minvaluedouble"): XrmBase.NumberControl;
            get(name: "minvalueinteger"): XrmBase.NumberControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "precision"): XrmBase.NumberControl;
            get(name: "regardingobjectid"): XrmBase.LookupControl<"product">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "dynamic_property_summary"): XrmBase.PageTab<Tabs.Dynamicpropertysummary>;
            get(name: "dynamic_property_properties"): XrmBase.PageTab<Tabs.Dynamicpropertyproperties>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Property extends XrmBase.PageBase<Property.Attributes, Property.Tabs, Property.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "isreadonly"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "isrequired"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "ishidden"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "regardingobjectid"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "datatype"): XrmBase.OptionSetAttribute<dynamicproperty_datatypecode>;
        getAttribute(attributeName: "defaultvaluedecimal"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "defaultvaluedouble"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "defaultvalueinteger"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "defaultvaluestring"): XrmBase.StringAttribute;
        getAttribute(attributeName: "defaultvalueoptionset"): XrmBase.LookupAttribute<"dynamicpropertyoptionsetitem">;
        getAttribute(attributeName: "maxlengthstring"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "minvaluedecimal"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "maxvaluedecimal"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "minvaluedouble"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "maxvaluedouble"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "minvalueinteger"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "maxvalueinteger"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "precision"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "isreadonly"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "isrequired"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "ishidden"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "regardingobjectid"): XrmBase.LookupControl<"product">;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "datatype"): XrmBase.OptionSetControl<dynamicproperty_datatypecode>;
        getControl(controlName: "defaultvaluedecimal"): XrmBase.NumberControl;
        getControl(controlName: "defaultvaluedouble"): XrmBase.NumberControl;
        getControl(controlName: "defaultvalueinteger"): XrmBase.NumberControl;
        getControl(controlName: "defaultvaluestring"): XrmBase.StringControl;
        getControl(controlName: "defaultvalueoptionset"): XrmBase.LookupControl<"dynamicpropertyoptionsetitem">;
        getControl(controlName: "grid_DynamicPropertyOptionSetItem"): XrmBase.SubGridControl<"dynamicpropertyoptionsetitem">;
        getControl(controlName: "maxlengthstring"): XrmBase.NumberControl;
        getControl(controlName: "minvaluedecimal"): XrmBase.NumberControl;
        getControl(controlName: "maxvaluedecimal"): XrmBase.NumberControl;
        getControl(controlName: "minvaluedouble"): XrmBase.NumberControl;
        getControl(controlName: "maxvaluedouble"): XrmBase.NumberControl;
        getControl(controlName: "minvalueinteger"): XrmBase.NumberControl;
        getControl(controlName: "maxvalueinteger"): XrmBase.NumberControl;
        getControl(controlName: "precision"): XrmBase.NumberControl;
        getControl(controlName: string): undefined;
    }
}
