declare namespace Form.msdyn_project.Main {
    namespace Information {
        namespace Tabs {
            interface Summary extends XrmBase.SectionCollectionBase {
                get(name: "{31843965-2614-4dec-b525-872d76e16b92}"): XrmBase.PageSection;
                get(name: "{ac4158d2-008d-4b6d-8e11-58c9ab47b14b}_section_4"): XrmBase.PageSection;
                get(name: "{ac4158d2-008d-4b6d-8e11-58c9ab47b14b}_section_5"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface ScheduleTab extends XrmBase.SectionCollectionBase {
                get(name: "Schedule_Section"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Team extends XrmBase.SectionCollectionBase {
                get(name: "{ac4158d2-008d-4b6d-8e11-58c9ab47b14b}_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface AssignmentsTab extends XrmBase.SectionCollectionBase {
                get(name: "Assignments_Section"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface ReconciliationTab extends XrmBase.SectionCollectionBase {
                get(name: "Reconciliation_Section"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface EstimatesTab extends XrmBase.SectionCollectionBase {
                get(name: "Estimates_Section"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface TrackingTab extends XrmBase.SectionCollectionBase {
                get(name: "Tracking_Section"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Status extends XrmBase.SectionCollectionBase {
                get(name: "Status_section_1"): XrmBase.PageSection;
                get(name: "Status_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Sales extends XrmBase.SectionCollectionBase {
                get(name: "Sales"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface ExpenseEstimatesTab extends XrmBase.SectionCollectionBase {
                get(name: "Expense_Estimates_Section"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_actualend"): XrmBase.DateAttribute;
            get(name: "msdyn_actualexpensecost"): XrmBase.NumberAttribute;
            get(name: "msdyn_actualhours"): XrmBase.NumberAttribute;
            get(name: "msdyn_actuallaborcost"): XrmBase.NumberAttribute;
            get(name: "msdyn_actualstart"): XrmBase.DateAttribute;
            get(name: "msdyn_comments"): XrmBase.StringAttribute;
            get(name: "msdyn_contractorganizationalunitid"): XrmBase.LookupAttribute<"msdyn_organizationalunit">;
            get(name: "msdyn_costperformence"): XrmBase.OptionSetAttribute<msdyn_project_msdyn_costperformence>;
            get(name: "msdyn_customer"): XrmBase.LookupAttribute<"account">;
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_istemplate"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_overallprojectstatus"): XrmBase.OptionSetAttribute<msdyn_project_msdyn_overallprojectstatus>;
            get(name: "msdyn_plannedexpensecost"): XrmBase.NumberAttribute;
            get(name: "msdyn_plannedhours"): XrmBase.NumberAttribute;
            get(name: "msdyn_plannedlaborcost"): XrmBase.NumberAttribute;
            get(name: "msdyn_projectmanager"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "msdyn_projecttemplate"): XrmBase.LookupAttribute<"msdyn_project">;
            get(name: "msdyn_scheduledend"): XrmBase.DateAttribute;
            get(name: "msdyn_scheduledstart"): XrmBase.DateAttribute;
            get(name: "msdyn_scheduleperformance"): XrmBase.OptionSetAttribute<msdyn_project_msdyn_scheduleperformance>;
            get(name: "msdyn_statusupdatedon"): XrmBase.DateAttribute;
            get(name: "msdyn_subject"): XrmBase.StringAttribute;
            get(name: "msdyn_totalactualcost"): XrmBase.NumberAttribute;
            get(name: "msdyn_totalplannedcost"): XrmBase.NumberAttribute;
            get(name: "msdyn_workhourtemplate"): XrmBase.LookupAttribute<"msdyn_workhourtemplate">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "Assignments"): XrmBase.BaseControl;
            get(name: "Estimates"): XrmBase.BaseControl;
            get(name: "ExpenseEstimates"): XrmBase.BaseControl;
            get(name: "msdyn_actualend"): XrmBase.DateControl;
            get(name: "msdyn_actualexpensecost"): XrmBase.NumberControl;
            get(name: "msdyn_actualhours"): XrmBase.NumberControl;
            get(name: "msdyn_actuallaborcost"): XrmBase.NumberControl;
            get(name: "msdyn_actualstart"): XrmBase.DateControl;
            get(name: "msdyn_comments"): XrmBase.StringControl;
            get(name: "msdyn_contractorganizationalunitid"): XrmBase.LookupControl<"msdyn_organizationalunit">;
            get(name: "msdyn_costperformence"): XrmBase.OptionSetControl<msdyn_project_msdyn_costperformence>;
            get(name: "msdyn_customer"): XrmBase.LookupControl<"account">;
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_istemplate"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_overallprojectstatus"): XrmBase.OptionSetControl<msdyn_project_msdyn_overallprojectstatus>;
            get(name: "msdyn_plannedexpensecost"): XrmBase.NumberControl;
            get(name: "msdyn_plannedhours"): XrmBase.NumberControl;
            get(name: "msdyn_plannedlaborcost"): XrmBase.NumberControl;
            get(name: "msdyn_projectmanager"): XrmBase.LookupControl<"systemuser">;
            get(name: "msdyn_projecttemplate"): XrmBase.LookupControl<"msdyn_project">;
            get(name: "msdyn_scheduledend"): XrmBase.DateControl;
            get(name: "msdyn_scheduledstart"): XrmBase.DateControl;
            get(name: "msdyn_scheduleperformance"): XrmBase.OptionSetControl<msdyn_project_msdyn_scheduleperformance>;
            get(name: "msdyn_statusupdatedon"): XrmBase.DateControl;
            get(name: "msdyn_subject"): XrmBase.StringControl;
            get(name: "msdyn_totalactualcost"): XrmBase.NumberControl;
            get(name: "msdyn_totalplannedcost"): XrmBase.NumberControl;
            get(name: "msdyn_workhourtemplate"): XrmBase.LookupControl<"msdyn_workhourtemplate">;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "ProjectContract"): XrmBase.SubGridControl<"salesorderdetail">;
            get(name: "ProjectQuote"): XrmBase.SubGridControl<"quotedetail">;
            get(name: "Reconciliation"): XrmBase.BaseControl;
            get(name: "Schedule"): XrmBase.BaseControl;
            get(name: "SchedulePerformanceCost"): XrmBase.SubGridControl<"msdyn_projecttask">;
            get(name: "SchedulePerformanceEffort"): XrmBase.SubGridControl<"msdyn_projecttask">;
            get(name: "SubGrid_TeamMember"): XrmBase.SubGridControl<"msdyn_projectteam">;
            get(name: "Tracking"): XrmBase.BaseControl;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "Summary"): XrmBase.PageTab<Tabs.Summary>;
            get(name: "Schedule_Tab"): XrmBase.PageTab<Tabs.ScheduleTab>;
            get(name: "Team"): XrmBase.PageTab<Tabs.Team>;
            get(name: "Assignments_Tab"): XrmBase.PageTab<Tabs.AssignmentsTab>;
            get(name: "Reconciliation_Tab"): XrmBase.PageTab<Tabs.ReconciliationTab>;
            get(name: "Estimates_Tab"): XrmBase.PageTab<Tabs.EstimatesTab>;
            get(name: "Tracking_Tab"): XrmBase.PageTab<Tabs.TrackingTab>;
            get(name: "Status"): XrmBase.PageTab<Tabs.Status>;
            get(name: "Sales"): XrmBase.PageTab<Tabs.Sales>;
            get(name: "Expense_Estimates_Tab"): XrmBase.PageTab<Tabs.ExpenseEstimatesTab>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_projecttemplate"): XrmBase.LookupAttribute<"msdyn_project">;
        getAttribute(attributeName: "msdyn_subject"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_customer"): XrmBase.LookupAttribute<"account">;
        getAttribute(attributeName: "msdyn_workhourtemplate"): XrmBase.LookupAttribute<"msdyn_workhourtemplate">;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "msdyn_contractorganizationalunitid"): XrmBase.LookupAttribute<"msdyn_organizationalunit">;
        getAttribute(attributeName: "msdyn_projectmanager"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_istemplate"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_overallprojectstatus"): XrmBase.OptionSetAttribute<msdyn_project_msdyn_overallprojectstatus>;
        getAttribute(attributeName: "msdyn_scheduledstart"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_scheduledend"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_plannedhours"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_plannedlaborcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_plannedexpensecost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_totalplannedcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_actualstart"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_actualend"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_actualhours"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_actuallaborcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_actualexpensecost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_totalactualcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_comments"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_scheduleperformance"): XrmBase.OptionSetAttribute<msdyn_project_msdyn_scheduleperformance>;
        getAttribute(attributeName: "msdyn_statusupdatedon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_costperformence"): XrmBase.OptionSetAttribute<msdyn_project_msdyn_costperformence>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_projecttemplate"): XrmBase.LookupControl<"msdyn_project">;
        getControl(controlName: "msdyn_subject"): XrmBase.StringControl;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "msdyn_customer"): XrmBase.LookupControl<"account">;
        getControl(controlName: "msdyn_workhourtemplate"): XrmBase.LookupControl<"msdyn_workhourtemplate">;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "msdyn_contractorganizationalunitid"): XrmBase.LookupControl<"msdyn_organizationalunit">;
        getControl(controlName: "msdyn_projectmanager"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_istemplate"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_overallprojectstatus"): XrmBase.OptionSetControl<msdyn_project_msdyn_overallprojectstatus>;
        getControl(controlName: "msdyn_scheduledstart"): XrmBase.DateControl;
        getControl(controlName: "msdyn_scheduledend"): XrmBase.DateControl;
        getControl(controlName: "msdyn_plannedhours"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_plannedlaborcost"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_plannedexpensecost"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_totalplannedcost"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_actualstart"): XrmBase.DateControl;
        getControl(controlName: "msdyn_actualend"): XrmBase.DateControl;
        getControl(controlName: "msdyn_actualhours"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_actuallaborcost"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_actualexpensecost"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_totalactualcost"): XrmBase.NumberControl;
        getControl(controlName: "Schedule"): XrmBase.BaseControl;
        getControl(controlName: "SubGrid_TeamMember"): XrmBase.SubGridControl<"msdyn_projectteam">;
        getControl(controlName: "Assignments"): XrmBase.BaseControl;
        getControl(controlName: "Reconciliation"): XrmBase.BaseControl;
        getControl(controlName: "Estimates"): XrmBase.BaseControl;
        getControl(controlName: "Tracking"): XrmBase.BaseControl;
        getControl(controlName: "msdyn_comments"): XrmBase.StringControl;
        getControl(controlName: "msdyn_scheduleperformance"): XrmBase.OptionSetControl<msdyn_project_msdyn_scheduleperformance>;
        getControl(controlName: "msdyn_statusupdatedon"): XrmBase.DateControl;
        getControl(controlName: "msdyn_costperformence"): XrmBase.OptionSetControl<msdyn_project_msdyn_costperformence>;
        getControl(controlName: "SchedulePerformanceEffort"): XrmBase.SubGridControl<"msdyn_projecttask">;
        getControl(controlName: "SchedulePerformanceCost"): XrmBase.SubGridControl<"msdyn_projecttask">;
        getControl(controlName: "ProjectContract"): XrmBase.SubGridControl<"salesorderdetail">;
        getControl(controlName: "ProjectQuote"): XrmBase.SubGridControl<"quotedetail">;
        getControl(controlName: "ExpenseEstimates"): XrmBase.BaseControl;
        getControl(controlName: string): undefined;
    }
}
