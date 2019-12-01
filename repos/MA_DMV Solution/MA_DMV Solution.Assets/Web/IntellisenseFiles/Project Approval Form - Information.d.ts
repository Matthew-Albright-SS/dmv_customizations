declare namespace Form.msdyn_projectapproval.Main {
    namespace Information {
        namespace Tabs {
            interface _6d5860c6aeb24d179db3226a9d6466f5 extends XrmBase.SectionCollectionBase {
                get(name: "{d55b3080-93d0-497a-a1c6-823d788e066a}"): XrmBase.PageSection;
                get(name: "_column_2_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_billingtype"): XrmBase.OptionSetAttribute<msdyn_billingtype>;
            get(name: "msdyn_costquantity"): XrmBase.NumberAttribute;
            get(name: "msdyn_expenseentry"): XrmBase.LookupAttribute<"msdyn_expense">;
            get(name: "msdyn_externalcomments"): XrmBase.StringAttribute;
            get(name: "msdyn_hasreceipt"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_salesprice"): XrmBase.NumberAttribute;
            get(name: "msdyn_salesquantity"): XrmBase.NumberAttribute;
            get(name: "msdyn_submittedby"): XrmBase.LookupAttribute<"bookableresource">;
            get(name: "msdyn_timeentry"): XrmBase.LookupAttribute<"msdyn_timeentry">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "ExpenseEntryDetail"): XrmBase.BaseControl;
            get(name: "msdyn_billingtype"): XrmBase.OptionSetControl<msdyn_billingtype>;
            get(name: "msdyn_costquantity"): XrmBase.NumberControl;
            get(name: "msdyn_expenseentry"): XrmBase.LookupControl<"msdyn_expense">;
            get(name: "msdyn_externalcomments"): XrmBase.StringControl;
            get(name: "msdyn_hasreceipt"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_salesprice"): XrmBase.NumberControl;
            get(name: "msdyn_salesquantity"): XrmBase.NumberControl;
            get(name: "msdyn_submittedby"): XrmBase.LookupControl<"bookableresource">;
            get(name: "msdyn_timeentry"): XrmBase.LookupControl<"msdyn_timeentry">;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "TimeEntryDetail"): XrmBase.BaseControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{6d5860c6-aeb2-4d17-9db3-226a9d6466f5}"): XrmBase.PageTab<Tabs._6d5860c6aeb24d179db3226a9d6466f5>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_billingtype"): XrmBase.OptionSetAttribute<msdyn_billingtype>;
        getAttribute(attributeName: "msdyn_costquantity"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_salesquantity"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_timeentry"): XrmBase.LookupAttribute<"msdyn_timeentry">;
        getAttribute(attributeName: "msdyn_salesprice"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_hasreceipt"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_expenseentry"): XrmBase.LookupAttribute<"msdyn_expense">;
        getAttribute(attributeName: "msdyn_externalcomments"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_submittedby"): XrmBase.LookupAttribute<"bookableresource">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_billingtype"): XrmBase.OptionSetControl<msdyn_billingtype>;
        getControl(controlName: "msdyn_costquantity"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_salesquantity"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_timeentry"): XrmBase.LookupControl<"msdyn_timeentry">;
        getControl(controlName: "msdyn_salesprice"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_hasreceipt"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_expenseentry"): XrmBase.LookupControl<"msdyn_expense">;
        getControl(controlName: "msdyn_externalcomments"): XrmBase.StringControl;
        getControl(controlName: "msdyn_submittedby"): XrmBase.LookupControl<"bookableresource">;
        getControl(controlName: "TimeEntryDetail"): XrmBase.BaseControl;
        getControl(controlName: "ExpenseEntryDetail"): XrmBase.BaseControl;
        getControl(controlName: string): undefined;
    }
}
