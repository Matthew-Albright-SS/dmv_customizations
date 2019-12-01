declare namespace Form.position.Main {
    namespace Position {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "General"): XrmBase.PageSection;
                get(name: "Description"): XrmBase.PageSection;
                get(name: "Users"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "parentpositionid"): XrmBase.LookupAttribute<"position">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "description"): XrmBase.StringControl;
            get(name: "Members"): XrmBase.SubGridControl<"systemuser">;
            get(name: "name"): XrmBase.StringControl;
            get(name: "parentpositionid"): XrmBase.LookupControl<"position">;
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
    interface Position extends XrmBase.PageBase<Position.Attributes, Position.Tabs, Position.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "parentpositionid"): XrmBase.LookupAttribute<"position">;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "parentpositionid"): XrmBase.LookupControl<"position">;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "Members"): XrmBase.SubGridControl<"systemuser">;
        getControl(controlName: string): undefined;
    }
}
