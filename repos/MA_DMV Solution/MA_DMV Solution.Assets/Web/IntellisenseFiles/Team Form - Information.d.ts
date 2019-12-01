declare namespace Form.team.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "section 1"): XrmBase.PageSection;
                get(name: "desc"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "administratorid"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "businessunitid"): XrmBase.LookupAttribute<"businessunit">;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "queueid"): XrmBase.LookupAttribute<"queue">;
            get(name: "teamtype"): XrmBase.OptionSetAttribute<team_type>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "administratorid"): XrmBase.LookupControl<"systemuser">;
            get(name: "businessunitid"): XrmBase.LookupControl<"businessunit">;
            get(name: "description"): XrmBase.StringControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "queueid"): XrmBase.LookupControl<"queue">;
            get(name: "teamtype"): XrmBase.OptionSetControl<team_type>;
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
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "businessunitid"): XrmBase.LookupAttribute<"businessunit">;
        getAttribute(attributeName: "administratorid"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "queueid"): XrmBase.LookupAttribute<"queue">;
        getAttribute(attributeName: "teamtype"): XrmBase.OptionSetAttribute<team_type>;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "businessunitid"): XrmBase.LookupControl<"businessunit">;
        getControl(controlName: "administratorid"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "queueid"): XrmBase.LookupControl<"queue">;
        getControl(controlName: "teamtype"): XrmBase.OptionSetControl<team_type>;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
