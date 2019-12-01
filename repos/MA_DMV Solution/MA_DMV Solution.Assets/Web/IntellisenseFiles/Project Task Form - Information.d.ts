declare namespace Form.msdyn_projecttask.Main {
    namespace Information {
        namespace Tabs {
            interface _7a08287e9b254ee0a2dd288055bd63a7 extends XrmBase.SectionCollectionBase {
                get(name: "{4fdeb155-c726-4210-a41f-97ce03bd0a9d}"): XrmBase.PageSection;
                get(name: "notes_section"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab2 extends XrmBase.SectionCollectionBase {
                get(name: "tab_2_section_1"): XrmBase.PageSection;
                get(name: "tab_2_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_duration"): XrmBase.NumberAttribute;
            get(name: "msdyn_effort"): XrmBase.NumberAttribute;
            get(name: "msdyn_parenttask"): XrmBase.LookupAttribute<"msdyn_projecttask">;
            get(name: "msdyn_project"): XrmBase.LookupAttribute<"msdyn_project">;
            get(name: "msdyn_scheduleddurationminutes"): XrmBase.NumberAttribute;
            get(name: "msdyn_scheduledend"): XrmBase.DateAttribute;
            get(name: "msdyn_scheduledstart"): XrmBase.DateAttribute;
            get(name: "msdyn_subject"): XrmBase.StringAttribute;
            get(name: "msdyn_transactioncategory"): XrmBase.LookupAttribute<"msdyn_transactioncategory">;
            get(name: "msdyn_wbsid"): XrmBase.StringAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_duration"): XrmBase.NumberControl;
            get(name: "msdyn_effort"): XrmBase.NumberControl;
            get(name: "msdyn_parenttask"): XrmBase.LookupControl<"msdyn_projecttask">;
            get(name: "msdyn_project"): XrmBase.LookupControl<"msdyn_project">;
            get(name: "msdyn_scheduleddurationminutes"): XrmBase.NumberControl;
            get(name: "msdyn_scheduledend"): XrmBase.DateControl;
            get(name: "msdyn_scheduledstart"): XrmBase.DateControl;
            get(name: "msdyn_subject"): XrmBase.StringControl;
            get(name: "msdyn_transactioncategory"): XrmBase.LookupControl<"msdyn_transactioncategory">;
            get(name: "msdyn_wbsid"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{7a08287e-9b25-4ee0-a2dd-288055bd63a7}"): XrmBase.PageTab<Tabs._7a08287e9b254ee0a2dd288055bd63a7>;
            get(name: "tab_2"): XrmBase.PageTab<Tabs.Tab2>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_subject"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_transactioncategory"): XrmBase.LookupAttribute<"msdyn_transactioncategory">;
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_duration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_project"): XrmBase.LookupAttribute<"msdyn_project">;
        getAttribute(attributeName: "msdyn_wbsid"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_scheduledstart"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_parenttask"): XrmBase.LookupAttribute<"msdyn_projecttask">;
        getAttribute(attributeName: "msdyn_scheduledend"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_effort"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_scheduleddurationminutes"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_subject"): XrmBase.StringControl;
        getControl(controlName: "msdyn_transactioncategory"): XrmBase.LookupControl<"msdyn_transactioncategory">;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "msdyn_duration"): XrmBase.NumberControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_project"): XrmBase.LookupControl<"msdyn_project">;
        getControl(controlName: "msdyn_wbsid"): XrmBase.StringControl;
        getControl(controlName: "msdyn_scheduledstart"): XrmBase.DateControl;
        getControl(controlName: "msdyn_parenttask"): XrmBase.LookupControl<"msdyn_projecttask">;
        getControl(controlName: "msdyn_scheduledend"): XrmBase.DateControl;
        getControl(controlName: "msdyn_effort"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_scheduleddurationminutes"): XrmBase.NumberControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
