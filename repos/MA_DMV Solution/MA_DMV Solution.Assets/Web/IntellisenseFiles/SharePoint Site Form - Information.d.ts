declare namespace Form.sharepointsite.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "section 1"): XrmBase.PageSection;
                get(name: "url option"): XrmBase.PageSection;
                get(name: "url validation"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "absoluteurl"): XrmBase.StringAttribute;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "isgridpresent"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "ispowerbisite"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "lastvalidated"): XrmBase.DateAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "parentsite"): XrmBase.LookupAttribute<"sharepointsite">;
            get(name: "relativeurl"): XrmBase.StringAttribute;
            get(name: "validationstatus"): XrmBase.OptionSetAttribute<sharepoint_validationstatus>;
            get(name: "validationstatuserrorcode"): XrmBase.OptionSetAttribute<sharepoint_validationstatusreason>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "absoluteurl"): XrmBase.StringControl;
            get(name: "description"): XrmBase.StringControl;
            get(name: "isgridpresent"): XrmBase.OptionSetControl<any>;
            get(name: "ispowerbisite"): XrmBase.OptionSetControl<any>;
            get(name: "lastvalidated"): XrmBase.DateControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "parentsite"): XrmBase.LookupControl<"sharepointsite">;
            get(name: "relativeurl"): XrmBase.StringControl;
            get(name: "urloption"): XrmBase.OptionSetControl<any>;
            get(name: "validationstatus"): XrmBase.OptionSetControl<sharepoint_validationstatus>;
            get(name: "validationstatuserrorcode"): XrmBase.OptionSetControl<sharepoint_validationstatusreason>;
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
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "absoluteurl"): XrmBase.StringAttribute;
        getAttribute(attributeName: "parentsite"): XrmBase.LookupAttribute<"sharepointsite">;
        getAttribute(attributeName: "relativeurl"): XrmBase.StringAttribute;
        getAttribute(attributeName: "isgridpresent"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "ispowerbisite"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "validationstatus"): XrmBase.OptionSetAttribute<sharepoint_validationstatus>;
        getAttribute(attributeName: "lastvalidated"): XrmBase.DateAttribute;
        getAttribute(attributeName: "validationstatuserrorcode"): XrmBase.OptionSetAttribute<sharepoint_validationstatusreason>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "urloption"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "absoluteurl"): XrmBase.StringControl;
        getControl(controlName: "parentsite"): XrmBase.LookupControl<"sharepointsite">;
        getControl(controlName: "relativeurl"): XrmBase.StringControl;
        getControl(controlName: "isgridpresent"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "ispowerbisite"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "validationstatus"): XrmBase.OptionSetControl<sharepoint_validationstatus>;
        getControl(controlName: "lastvalidated"): XrmBase.DateControl;
        getControl(controlName: "validationstatuserrorcode"): XrmBase.OptionSetControl<sharepoint_validationstatusreason>;
        getControl(controlName: string): undefined;
    }
}
