declare namespace Form.goal.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "information"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface _349a439d6ed5bae87c7d3721869367ca extends XrmBase.SectionCollectionBase {
                get(name: "{3a5c2dc2-2ee7-848c-83eb-a2b1e4d1c703}"): XrmBase.PageSection;
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
            interface _242FCD832A50478E922AF4641920DDE0 extends XrmBase.SectionCollectionBase {
                get(name: "{8ECDE6CB-085B-46D1-97A9-E357C5799076}"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "actualdecimal"): XrmBase.NumberAttribute;
            get(name: "actualinteger"): XrmBase.NumberAttribute;
            get(name: "actualmoney"): XrmBase.NumberAttribute;
            get(name: "consideronlygoalownersrecords"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "customrollupfielddecimal"): XrmBase.NumberAttribute;
            get(name: "customrollupfieldinteger"): XrmBase.NumberAttribute;
            get(name: "customrollupfieldmoney"): XrmBase.NumberAttribute;
            get(name: "fiscalperiod"): XrmBase.OptionSetAttribute<goal_fiscalperiod>;
            get(name: "fiscalyear"): XrmBase.OptionSetAttribute<goal_fiscalyear>;
            get(name: "goalenddate"): XrmBase.DateAttribute;
            get(name: "goalownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "goalstartdate"): XrmBase.DateAttribute;
            get(name: "inprogressdecimal"): XrmBase.NumberAttribute;
            get(name: "inprogressinteger"): XrmBase.NumberAttribute;
            get(name: "inprogressmoney"): XrmBase.NumberAttribute;
            get(name: "isfiscalperiodgoal"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "lastrolledupdate"): XrmBase.DateAttribute;
            get(name: "metricid"): XrmBase.LookupAttribute<"metric">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "parentgoalid"): XrmBase.LookupAttribute<"goal">;
            get(name: "percentage"): XrmBase.NumberAttribute;
            get(name: "rolluponlyfromchildgoals"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "rollupqueryactualdecimalid"): XrmBase.LookupAttribute<"goalrollupquery">;
            get(name: "rollupqueryactualintegerid"): XrmBase.LookupAttribute<"goalrollupquery">;
            get(name: "rollupqueryactualmoneyid"): XrmBase.LookupAttribute<"goalrollupquery">;
            get(name: "rollupquerycustomdecimalid"): XrmBase.LookupAttribute<"goalrollupquery">;
            get(name: "rollupquerycustomintegerid"): XrmBase.LookupAttribute<"goalrollupquery">;
            get(name: "rollupquerycustommoneyid"): XrmBase.LookupAttribute<"goalrollupquery">;
            get(name: "rollupqueryinprogressdecimalid"): XrmBase.LookupAttribute<"goalrollupquery">;
            get(name: "rollupqueryinprogressintegerid"): XrmBase.LookupAttribute<"goalrollupquery">;
            get(name: "rollupqueryinprogressmoneyid"): XrmBase.LookupAttribute<"goalrollupquery">;
            get(name: "stretchtargetdecimal"): XrmBase.NumberAttribute;
            get(name: "stretchtargetinteger"): XrmBase.NumberAttribute;
            get(name: "stretchtargetmoney"): XrmBase.NumberAttribute;
            get(name: "targetdecimal"): XrmBase.NumberAttribute;
            get(name: "targetinteger"): XrmBase.NumberAttribute;
            get(name: "targetmoney"): XrmBase.NumberAttribute;
            get(name: "title"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "actualdecimal"): XrmBase.NumberControl;
            get(name: "actualinteger"): XrmBase.NumberControl;
            get(name: "actualmoney"): XrmBase.NumberControl;
            get(name: "child_goals"): XrmBase.SubGridControl<"goal">;
            get(name: "consideronlygoalownersrecords"): XrmBase.OptionSetControl<any>;
            get(name: "customrollupfielddecimal"): XrmBase.NumberControl;
            get(name: "customrollupfieldinteger"): XrmBase.NumberControl;
            get(name: "customrollupfieldmoney"): XrmBase.NumberControl;
            get(name: "fiscalperiod"): XrmBase.OptionSetControl<goal_fiscalperiod>;
            get(name: "fiscalyear"): XrmBase.OptionSetControl<goal_fiscalyear>;
            get(name: "goalenddate"): XrmBase.DateControl;
            get(name: "goalownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "goalstartdate"): XrmBase.DateControl;
            get(name: "inprogressdecimal"): XrmBase.NumberControl;
            get(name: "inprogressinteger"): XrmBase.NumberControl;
            get(name: "inprogressmoney"): XrmBase.NumberControl;
            get(name: "isfiscalperiodgoal"): XrmBase.OptionSetControl<any>;
            get(name: "lastrolledupdate"): XrmBase.DateControl;
            get(name: "metricid"): XrmBase.LookupControl<"metric">;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser">;
            get(name: "parentgoalid"): XrmBase.LookupControl<"goal">;
            get(name: "participatingrecordcontrol"): XrmBase.BaseControl;
            get(name: "percentage"): XrmBase.NumberControl;
            get(name: "rolluponlyfromchildgoals"): XrmBase.OptionSetControl<any>;
            get(name: "rollupqueryactualdecimalid"): XrmBase.LookupControl<"goalrollupquery">;
            get(name: "rollupqueryactualintegerid"): XrmBase.LookupControl<"goalrollupquery">;
            get(name: "rollupqueryactualmoneyid"): XrmBase.LookupControl<"goalrollupquery">;
            get(name: "rollupquerycustomdecimalid"): XrmBase.LookupControl<"goalrollupquery">;
            get(name: "rollupquerycustomintegerid"): XrmBase.LookupControl<"goalrollupquery">;
            get(name: "rollupquerycustommoneyid"): XrmBase.LookupControl<"goalrollupquery">;
            get(name: "rollupqueryinprogressdecimalid"): XrmBase.LookupControl<"goalrollupquery">;
            get(name: "rollupqueryinprogressintegerid"): XrmBase.LookupControl<"goalrollupquery">;
            get(name: "rollupqueryinprogressmoneyid"): XrmBase.LookupControl<"goalrollupquery">;
            get(name: "stretchtargetdecimal"): XrmBase.NumberControl;
            get(name: "stretchtargetinteger"): XrmBase.NumberControl;
            get(name: "stretchtargetmoney"): XrmBase.NumberControl;
            get(name: "targetdecimal"): XrmBase.NumberControl;
            get(name: "targetinteger"): XrmBase.NumberControl;
            get(name: "targetmoney"): XrmBase.NumberControl;
            get(name: "title"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "general"): XrmBase.PageTab<Tabs.General>;
            get(name: "{349a439d-6ed5-bae8-7c7d-3721869367ca}"): XrmBase.PageTab<Tabs._349a439d6ed5bae87c7d3721869367ca>;
            get(name: "notes"): XrmBase.PageTab<Tabs.Notes>;
            get(name: "{242FCD83-2A50-478E-922A-F4641920DDE0}"): XrmBase.PageTab<Tabs._242FCD832A50478E922AF4641920DDE0>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "title"): XrmBase.StringAttribute;
        getAttribute(attributeName: "parentgoalid"): XrmBase.LookupAttribute<"goal">;
        getAttribute(attributeName: "metricid"): XrmBase.LookupAttribute<"metric">;
        getAttribute(attributeName: "goalownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "isfiscalperiodgoal"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "fiscalperiod"): XrmBase.OptionSetAttribute<goal_fiscalperiod>;
        getAttribute(attributeName: "fiscalyear"): XrmBase.OptionSetAttribute<goal_fiscalyear>;
        getAttribute(attributeName: "goalstartdate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "goalenddate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "targetmoney"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "stretchtargetmoney"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "targetinteger"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "stretchtargetinteger"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "targetdecimal"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "stretchtargetdecimal"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "actualmoney"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "percentage"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "inprogressmoney"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "customrollupfieldmoney"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "actualinteger"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "inprogressinteger"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "customrollupfieldinteger"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "actualdecimal"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "inprogressdecimal"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "customrollupfielddecimal"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "lastrolledupdate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "rolluponlyfromchildgoals"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "consideronlygoalownersrecords"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "rollupqueryactualmoneyid"): XrmBase.LookupAttribute<"goalrollupquery">;
        getAttribute(attributeName: "rollupqueryinprogressmoneyid"): XrmBase.LookupAttribute<"goalrollupquery">;
        getAttribute(attributeName: "rollupquerycustommoneyid"): XrmBase.LookupAttribute<"goalrollupquery">;
        getAttribute(attributeName: "rollupqueryactualintegerid"): XrmBase.LookupAttribute<"goalrollupquery">;
        getAttribute(attributeName: "rollupqueryinprogressintegerid"): XrmBase.LookupAttribute<"goalrollupquery">;
        getAttribute(attributeName: "rollupquerycustomintegerid"): XrmBase.LookupAttribute<"goalrollupquery">;
        getAttribute(attributeName: "rollupqueryactualdecimalid"): XrmBase.LookupAttribute<"goalrollupquery">;
        getAttribute(attributeName: "rollupqueryinprogressdecimalid"): XrmBase.LookupAttribute<"goalrollupquery">;
        getAttribute(attributeName: "rollupquerycustomdecimalid"): XrmBase.LookupAttribute<"goalrollupquery">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "title"): XrmBase.StringControl;
        getControl(controlName: "parentgoalid"): XrmBase.LookupControl<"goal">;
        getControl(controlName: "metricid"): XrmBase.LookupControl<"metric">;
        getControl(controlName: "goalownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "isfiscalperiodgoal"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "fiscalperiod"): XrmBase.OptionSetControl<goal_fiscalperiod>;
        getControl(controlName: "fiscalyear"): XrmBase.OptionSetControl<goal_fiscalyear>;
        getControl(controlName: "goalstartdate"): XrmBase.DateControl;
        getControl(controlName: "goalenddate"): XrmBase.DateControl;
        getControl(controlName: "targetmoney"): XrmBase.NumberControl;
        getControl(controlName: "stretchtargetmoney"): XrmBase.NumberControl;
        getControl(controlName: "targetinteger"): XrmBase.NumberControl;
        getControl(controlName: "stretchtargetinteger"): XrmBase.NumberControl;
        getControl(controlName: "targetdecimal"): XrmBase.NumberControl;
        getControl(controlName: "stretchtargetdecimal"): XrmBase.NumberControl;
        getControl(controlName: "child_goals"): XrmBase.SubGridControl<"goal">;
        getControl(controlName: "actualmoney"): XrmBase.NumberControl;
        getControl(controlName: "percentage"): XrmBase.NumberControl;
        getControl(controlName: "inprogressmoney"): XrmBase.NumberControl;
        getControl(controlName: "customrollupfieldmoney"): XrmBase.NumberControl;
        getControl(controlName: "actualinteger"): XrmBase.NumberControl;
        getControl(controlName: "inprogressinteger"): XrmBase.NumberControl;
        getControl(controlName: "customrollupfieldinteger"): XrmBase.NumberControl;
        getControl(controlName: "actualdecimal"): XrmBase.NumberControl;
        getControl(controlName: "inprogressdecimal"): XrmBase.NumberControl;
        getControl(controlName: "customrollupfielddecimal"): XrmBase.NumberControl;
        getControl(controlName: "lastrolledupdate"): XrmBase.DateControl;
        getControl(controlName: "rolluponlyfromchildgoals"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "consideronlygoalownersrecords"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "rollupqueryactualmoneyid"): XrmBase.LookupControl<"goalrollupquery">;
        getControl(controlName: "rollupqueryinprogressmoneyid"): XrmBase.LookupControl<"goalrollupquery">;
        getControl(controlName: "rollupquerycustommoneyid"): XrmBase.LookupControl<"goalrollupquery">;
        getControl(controlName: "rollupqueryactualintegerid"): XrmBase.LookupControl<"goalrollupquery">;
        getControl(controlName: "rollupqueryinprogressintegerid"): XrmBase.LookupControl<"goalrollupquery">;
        getControl(controlName: "rollupquerycustomintegerid"): XrmBase.LookupControl<"goalrollupquery">;
        getControl(controlName: "rollupqueryactualdecimalid"): XrmBase.LookupControl<"goalrollupquery">;
        getControl(controlName: "rollupqueryinprogressdecimalid"): XrmBase.LookupControl<"goalrollupquery">;
        getControl(controlName: "rollupquerycustomdecimalid"): XrmBase.LookupControl<"goalrollupquery">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "participatingrecordcontrol"): XrmBase.BaseControl;
        getControl(controlName: string): undefined;
    }
}
