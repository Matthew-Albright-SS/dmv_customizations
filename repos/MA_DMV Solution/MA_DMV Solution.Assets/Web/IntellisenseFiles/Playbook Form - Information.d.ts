declare namespace Form.msdyn_playbookinstance.Main {
    namespace Information {
        namespace Tabs {
            interface _0a307c0396bd41f78800ebf2860aaa98 extends XrmBase.SectionCollectionBase {
                get(name: "{547dca32-5c99-4bf5-95d8-95ae479d4963}"): XrmBase.PageSection;
                get(name: "{0a307c03-96bd-41f7-8800-ebf2860aaa98}_section_4"): XrmBase.PageSection;
                get(name: "{0a307c03-96bd-41f7-8800-ebf2860aaa98}_section_5"): XrmBase.PageSection;
                get(name: "{0a307c03-96bd-41f7-8800-ebf2860aaa98}_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "createdon"): XrmBase.DateAttribute;
            get(name: "msdyn_activitiesassociated"): XrmBase.NumberAttribute;
            get(name: "msdyn_activitiesclosed"): XrmBase.NumberAttribute;
            get(name: "msdyn_categoryid"): XrmBase.LookupAttribute<"msdyn_playbookcategory">;
            get(name: "msdyn_estimatedclose"): XrmBase.DateAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_playbooktemplateid"): XrmBase.LookupAttribute<"msdyn_playbooktemplate">;
            get(name: "msdyn_trackprogress"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "regarding"): XrmBase.LookupAttribute<"account" | "contact" | "invoice" | "lead" | "opportunity" | "quote" | "salesorder">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "createdon"): XrmBase.DateControl;
            get(name: "msdyn_activitiesassociated"): XrmBase.NumberControl;
            get(name: "msdyn_activitiesclosed"): XrmBase.BaseControl;
            get(name: "msdyn_categoryid"): XrmBase.LookupControl<"msdyn_playbookcategory">;
            get(name: "msdyn_estimatedclose"): XrmBase.DateControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_playbooktemplateid"): XrmBase.LookupControl<"msdyn_playbooktemplate">;
            get(name: "msdyn_trackprogress"): XrmBase.OptionSetControl<any>;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "PlaybookActivities"): XrmBase.SubGridControl<"activitypointer">;
            get(name: "regarding"): XrmBase.LookupControl<"account" | "contact" | "invoice" | "lead" | "opportunity" | "quote" | "salesorder">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{0a307c03-96bd-41f7-8800-ebf2860aaa98}"): XrmBase.PageTab<Tabs._0a307c0396bd41f78800ebf2860aaa98>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_activitiesassociated"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_activitiesclosed"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_estimatedclose"): XrmBase.DateAttribute;
        getAttribute(attributeName: "createdon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "regarding"): XrmBase.LookupAttribute<"account" | "contact" | "invoice" | "lead" | "opportunity" | "quote" | "salesorder">;
        getAttribute(attributeName: "msdyn_playbooktemplateid"): XrmBase.LookupAttribute<"msdyn_playbooktemplate">;
        getAttribute(attributeName: "msdyn_categoryid"): XrmBase.LookupAttribute<"msdyn_playbookcategory">;
        getAttribute(attributeName: "msdyn_trackprogress"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_activitiesassociated"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_activitiesclosed"): XrmBase.BaseControl;
        getControl(controlName: "msdyn_estimatedclose"): XrmBase.DateControl;
        getControl(controlName: "createdon"): XrmBase.DateControl;
        getControl(controlName: "regarding"): XrmBase.LookupControl<"account" | "contact" | "invoice" | "lead" | "opportunity" | "quote" | "salesorder">;
        getControl(controlName: "msdyn_playbooktemplateid"): XrmBase.LookupControl<"msdyn_playbooktemplate">;
        getControl(controlName: "msdyn_categoryid"): XrmBase.LookupControl<"msdyn_playbookcategory">;
        getControl(controlName: "msdyn_trackprogress"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "PlaybookActivities"): XrmBase.SubGridControl<"activitypointer">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
