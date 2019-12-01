declare namespace Form.rollupfield.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "{41a22d3a-56ec-4317-812a-ac5c92764cd5}"): XrmBase.PageSection;
                get(name: "{27578c24-6dcb-7649-ba95-913c229c39eb}"): XrmBase.PageSection;
                get(name: "{6ad1c698-2e2e-8a08-b43a-b66815b9eb06}"): XrmBase.PageSection;
                get(name: "{d65a4472-a959-3b9c-c416-d79c56e4a44b}"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "dateattribute"): XrmBase.StringAttribute;
            get(name: "entityfordateattribute"): XrmBase.OptionSetAttribute<rollupfield_dateentitytypecode>;
            get(name: "goalattribute"): XrmBase.StringAttribute;
            get(name: "sourceattribute"): XrmBase.StringAttribute;
            get(name: "sourceentity"): XrmBase.OptionSetAttribute<rollupfield_sourceentitytypecode>;
            get(name: "sourcestate"): XrmBase.NumberAttribute;
            get(name: "sourcestatus"): XrmBase.NumberAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "dateattribute"): XrmBase.OptionSetControl<any>;
            get(name: "dateattribute_UC"): XrmBase.BaseControl;
            get(name: "entityfordateattribute"): XrmBase.OptionSetControl<any>;
            get(name: "entityfordateattribute_UC"): XrmBase.BaseControl;
            get(name: "goalattribute"): XrmBase.OptionSetControl<any>;
            get(name: "goalattribute_UC"): XrmBase.BaseControl;
            get(name: "sourceattribute"): XrmBase.OptionSetControl<any>;
            get(name: "sourceattribute_UC"): XrmBase.BaseControl;
            get(name: "sourceentity"): XrmBase.OptionSetControl<rollupfield_sourceentitytypecode>;
            get(name: "sourceentity_UC"): XrmBase.BaseControl;
            get(name: "sourcestate"): XrmBase.OptionSetControl<any>;
            get(name: "sourcestate_UC"): XrmBase.BaseControl;
            get(name: "sourcestatus"): XrmBase.OptionSetControl<any>;
            get(name: "sourcestatus_UC"): XrmBase.BaseControl;
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
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "goalattribute"): XrmBase.StringAttribute;
        getAttribute(attributeName: "sourceentity"): XrmBase.OptionSetAttribute<rollupfield_sourceentitytypecode>;
        getAttribute(attributeName: "sourceattribute"): XrmBase.StringAttribute;
        getAttribute(attributeName: "sourcestate"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "sourcestatus"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "entityfordateattribute"): XrmBase.OptionSetAttribute<rollupfield_dateentitytypecode>;
        getAttribute(attributeName: "dateattribute"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "goalattribute"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "goalattribute_UC"): XrmBase.BaseControl;
        getControl(controlName: "sourceentity"): XrmBase.OptionSetControl<rollupfield_sourceentitytypecode>;
        getControl(controlName: "sourceattribute"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "sourceentity_UC"): XrmBase.BaseControl;
        getControl(controlName: "sourceattribute_UC"): XrmBase.BaseControl;
        getControl(controlName: "sourcestate"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "sourcestatus"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "sourcestate_UC"): XrmBase.BaseControl;
        getControl(controlName: "sourcestatus_UC"): XrmBase.BaseControl;
        getControl(controlName: "entityfordateattribute"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "dateattribute"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "entityfordateattribute_UC"): XrmBase.BaseControl;
        getControl(controlName: "dateattribute_UC"): XrmBase.BaseControl;
        getControl(controlName: string): undefined;
    }
}
