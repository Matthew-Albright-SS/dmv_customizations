declare namespace Form.territory.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "territory information"): XrmBase.PageSection;
                get(name: "description"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Subterritoriestab extends XrmBase.SectionCollectionBase {
                get(name: "territory_tab1_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "managerid"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "parentterritoryid"): XrmBase.LookupAttribute<"territory">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "description"): XrmBase.StringControl;
            get(name: "managerid"): XrmBase.LookupControl<"systemuser">;
            get(name: "name"): XrmBase.StringControl;
            get(name: "parentterritoryid"): XrmBase.LookupControl<"territory">;
            get(name: "territories_subgrid"): XrmBase.SubGridControl<"territory">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "general"): XrmBase.PageTab<Tabs.General>;
            get(name: "subterritories_tab"): XrmBase.PageTab<Tabs.Subterritoriestab>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "managerid"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "parentterritoryid"): XrmBase.LookupAttribute<"territory">;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "managerid"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "parentterritoryid"): XrmBase.LookupControl<"territory">;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "territories_subgrid"): XrmBase.SubGridControl<"territory">;
        getControl(controlName: string): undefined;
    }
}
