declare namespace Form.duplicaterule.Main {
    namespace Information {
        namespace Tabs {
            interface Rule extends XrmBase.SectionCollectionBase {
                get(name: "section 1"): XrmBase.PageSection;
                get(name: "description"): XrmBase.PageSection;
                get(name: "criteria"): XrmBase.PageSection;
                get(name: "Rule Conditions"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Administration extends XrmBase.SectionCollectionBase {
                get(name: "section 1_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Notes extends XrmBase.SectionCollectionBase {
                get(name: "notes"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "baseentitytypecode"): XrmBase.OptionSetAttribute<duplicaterule_baseentitytypecode>;
            get(name: "createdby"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "createdon"): XrmBase.DateAttribute;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "excludeinactiverecords"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "iscasesensitive"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "matchingentitytypecode"): XrmBase.OptionSetAttribute<duplicaterule_matchingentitytypecode>;
            get(name: "modifiedby"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "modifiedon"): XrmBase.DateAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "statuscode"): XrmBase.OptionSetAttribute<duplicaterule_statuscode>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "baseentitytypecode"): XrmBase.OptionSetControl<duplicaterule_baseentitytypecode>;
            get(name: "createdby"): XrmBase.LookupControl<"systemuser">;
            get(name: "createdon"): XrmBase.DateControl;
            get(name: "description"): XrmBase.StringControl;
            get(name: "excludeinactiverecords"): XrmBase.OptionSetControl<any>;
            get(name: "iscasesensitive"): XrmBase.OptionSetControl<any>;
            get(name: "matchingentitytypecode"): XrmBase.OptionSetControl<duplicaterule_matchingentitytypecode>;
            get(name: "modifiedby"): XrmBase.LookupControl<"systemuser">;
            get(name: "modifiedon"): XrmBase.DateControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "ruleconditioncontrol"): XrmBase.IFrameControl;
            get(name: "statuscode"): XrmBase.OptionSetControl<duplicaterule_statuscode>;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "rule"): XrmBase.PageTab<Tabs.Rule>;
            get(name: "administration"): XrmBase.PageTab<Tabs.Administration>;
            get(name: "notes"): XrmBase.PageTab<Tabs.Notes>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "statuscode"): XrmBase.OptionSetAttribute<duplicaterule_statuscode>;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "baseentitytypecode"): XrmBase.OptionSetAttribute<duplicaterule_baseentitytypecode>;
        getAttribute(attributeName: "matchingentitytypecode"): XrmBase.OptionSetAttribute<duplicaterule_matchingentitytypecode>;
        getAttribute(attributeName: "iscasesensitive"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "excludeinactiverecords"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "createdby"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "createdon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "modifiedby"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "modifiedon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "statuscode"): XrmBase.OptionSetControl<duplicaterule_statuscode>;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "baseentitytypecode"): XrmBase.OptionSetControl<duplicaterule_baseentitytypecode>;
        getControl(controlName: "matchingentitytypecode"): XrmBase.OptionSetControl<duplicaterule_matchingentitytypecode>;
        getControl(controlName: "iscasesensitive"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "excludeinactiverecords"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "ruleconditioncontrol"): XrmBase.IFrameControl;
        getControl(controlName: "createdby"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "createdon"): XrmBase.DateControl;
        getControl(controlName: "modifiedby"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "modifiedon"): XrmBase.DateControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
