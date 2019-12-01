declare namespace Form.goalrollupquery.Main {
    namespace Information {
        namespace Tabs {
            interface Rule extends XrmBase.SectionCollectionBase {
                get(name: "section 1"): XrmBase.PageSection;
                get(name: "criteria"): XrmBase.PageSection;
                get(name: "Rule Conditions"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "queryentitytype"): XrmBase.OptionSetAttribute<participatingquery_entitytypecode>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "name"): XrmBase.StringControl;
            get(name: "name_uc"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "queryeditor_uc"): XrmBase.BaseControl;
            get(name: "queryentitytype"): XrmBase.OptionSetControl<participatingquery_entitytypecode>;
            get(name: "queryentitytype_uc"): XrmBase.BaseControl;
            get(name: "ruleconditioncontrol"): XrmBase.IFrameControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "rule"): XrmBase.PageTab<Tabs.Rule>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "queryentitytype"): XrmBase.OptionSetAttribute<participatingquery_entitytypecode>;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "queryentitytype"): XrmBase.OptionSetControl<participatingquery_entitytypecode>;
        getControl(controlName: "name_uc"): XrmBase.StringControl;
        getControl(controlName: "queryentitytype_uc"): XrmBase.BaseControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "ruleconditioncontrol"): XrmBase.IFrameControl;
        getControl(controlName: "queryeditor_uc"): XrmBase.BaseControl;
        getControl(controlName: string): undefined;
    }
}
