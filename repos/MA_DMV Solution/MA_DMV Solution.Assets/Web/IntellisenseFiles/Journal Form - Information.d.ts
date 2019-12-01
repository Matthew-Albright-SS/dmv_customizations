declare namespace Form.msdyn_journal.Main {
    namespace Information {
        namespace Tabs {
            interface _89b13559b90e4eaaa6be47e4ebb36524 extends XrmBase.SectionCollectionBase {
                get(name: "{89b13559-b90e-4eaa-a6be-47e4ebb36524}_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface TimeEntryCorrectionsTab extends XrmBase.SectionCollectionBase {
                get(name: "TimeEntryCorrectionParameters"): XrmBase.PageSection;
                get(name: "tab_3_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface ExpenseCorrectionsTab extends XrmBase.SectionCollectionBase {
                get(name: "ExpenseCorrectionParameters"): XrmBase.PageSection;
                get(name: "tab_4_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface JounalLinesTab extends XrmBase.SectionCollectionBase {
                get(name: "JournalLinesSection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_bookableresource"): XrmBase.LookupAttribute<"bookableresource">;
            get(name: "msdyn_date"): XrmBase.DateAttribute;
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_expensecategory"): XrmBase.LookupAttribute<"msdyn_expensecategory">;
            get(name: "msdyn_isposted"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_journaltype"): XrmBase.OptionSetAttribute<msdyn_journal_msdyn_journaltype>;
            get(name: "msdyn_project"): XrmBase.LookupAttribute<"msdyn_project">;
            get(name: "msdyn_projecttask"): XrmBase.LookupAttribute<"msdyn_projecttask">;
            get(name: "msdyn_resourcecategory"): XrmBase.LookupAttribute<"bookableresourcecategory">;
            get(name: "msdyn_transactiondate"): XrmBase.DateAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "statuscode"): XrmBase.OptionSetAttribute<msdyn_journal_statuscode>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "Expenses"): XrmBase.SubGridControl<"msdyn_expense">;
            get(name: "JournalLinesGrid"): XrmBase.SubGridControl<"msdyn_journalline">;
            get(name: "msdyn_bookableresource"): XrmBase.LookupControl<"bookableresource">;
            get(name: "msdyn_date"): XrmBase.DateControl;
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_expensecategory"): XrmBase.LookupControl<"msdyn_expensecategory">;
            get(name: "msdyn_isposted"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_journaltype"): XrmBase.OptionSetControl<msdyn_journal_msdyn_journaltype>;
            get(name: "msdyn_project"): XrmBase.LookupControl<"msdyn_project">;
            get(name: "msdyn_projecttask"): XrmBase.LookupControl<"msdyn_projecttask">;
            get(name: "msdyn_resourcecategory"): XrmBase.LookupControl<"bookableresourcecategory">;
            get(name: "msdyn_transactiondate"): XrmBase.DateControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "statuscode"): XrmBase.OptionSetControl<msdyn_journal_statuscode>;
            get(name: "TimeEntries"): XrmBase.SubGridControl<"msdyn_timeentry">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{89b13559-b90e-4eaa-a6be-47e4ebb36524}"): XrmBase.PageTab<Tabs._89b13559b90e4eaaa6be47e4ebb36524>;
            get(name: "TimeEntryCorrectionsTab"): XrmBase.PageTab<Tabs.TimeEntryCorrectionsTab>;
            get(name: "ExpenseCorrectionsTab"): XrmBase.PageTab<Tabs.ExpenseCorrectionsTab>;
            get(name: "JounalLinesTab"): XrmBase.PageTab<Tabs.JounalLinesTab>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_journaltype"): XrmBase.OptionSetAttribute<msdyn_journal_msdyn_journaltype>;
        getAttribute(attributeName: "msdyn_isposted"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "statuscode"): XrmBase.OptionSetAttribute<msdyn_journal_statuscode>;
        getAttribute(attributeName: "msdyn_project"): XrmBase.LookupAttribute<"msdyn_project">;
        getAttribute(attributeName: "msdyn_projecttask"): XrmBase.LookupAttribute<"msdyn_projecttask">;
        getAttribute(attributeName: "msdyn_date"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_bookableresource"): XrmBase.LookupAttribute<"bookableresource">;
        getAttribute(attributeName: "msdyn_resourcecategory"): XrmBase.LookupAttribute<"bookableresourcecategory">;
        getAttribute(attributeName: "msdyn_expensecategory"): XrmBase.LookupAttribute<"msdyn_expensecategory">;
        getAttribute(attributeName: "msdyn_transactiondate"): XrmBase.DateAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "msdyn_journaltype"): XrmBase.OptionSetControl<msdyn_journal_msdyn_journaltype>;
        getControl(controlName: "msdyn_isposted"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "statuscode"): XrmBase.OptionSetControl<msdyn_journal_statuscode>;
        getControl(controlName: "msdyn_project"): XrmBase.LookupControl<"msdyn_project">;
        getControl(controlName: "msdyn_projecttask"): XrmBase.LookupControl<"msdyn_projecttask">;
        getControl(controlName: "msdyn_date"): XrmBase.DateControl;
        getControl(controlName: "msdyn_bookableresource"): XrmBase.LookupControl<"bookableresource">;
        getControl(controlName: "msdyn_resourcecategory"): XrmBase.LookupControl<"bookableresourcecategory">;
        getControl(controlName: "TimeEntries"): XrmBase.SubGridControl<"msdyn_timeentry">;
        getControl(controlName: "msdyn_expensecategory"): XrmBase.LookupControl<"msdyn_expensecategory">;
        getControl(controlName: "msdyn_transactiondate"): XrmBase.DateControl;
        getControl(controlName: "Expenses"): XrmBase.SubGridControl<"msdyn_expense">;
        getControl(controlName: "JournalLinesGrid"): XrmBase.SubGridControl<"msdyn_journalline">;
        getControl(controlName: string): undefined;
    }
}
