declare namespace Form.team.Main {
    namespace Team {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "General"): XrmBase.PageSection;
                get(name: "Description"): XrmBase.PageSection;
                get(name: "TeamMembers"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "administratorid"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "azureactivedirectoryobjectid"): any;
            get(name: "businessunitid"): XrmBase.LookupAttribute<"businessunit">;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "teamtype"): XrmBase.OptionSetAttribute<team_type>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "administratorid"): XrmBase.LookupControl<"systemuser">;
            get(name: "azureactivedirectoryobjectid"): XrmBase.StringControl;
            get(name: "businessunitid"): XrmBase.LookupControl<"businessunit">;
            get(name: "description"): XrmBase.StringControl;
            get(name: "Members"): XrmBase.SubGridControl<"systemuser">;
            get(name: "name"): XrmBase.StringControl;
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
    interface Team extends XrmBase.PageBase<Team.Attributes, Team.Tabs, Team.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "businessunitid"): XrmBase.LookupAttribute<"businessunit">;
        getAttribute(attributeName: "administratorid"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "teamtype"): XrmBase.OptionSetAttribute<team_type>;
        getAttribute(attributeName: "azureactivedirectoryobjectid"): any;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "businessunitid"): XrmBase.LookupControl<"businessunit">;
        getControl(controlName: "administratorid"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "teamtype"): XrmBase.OptionSetControl<team_type>;
        getControl(controlName: "azureactivedirectoryobjectid"): XrmBase.StringControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "Members"): XrmBase.SubGridControl<"systemuser">;
        getControl(controlName: string): undefined;
    }
}
