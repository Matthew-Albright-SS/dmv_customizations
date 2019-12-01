declare namespace Form.msdyn_expense.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_amount"): XrmBase.NumberAttribute;
            get(name: "msdyn_expensecategory"): XrmBase.LookupAttribute<"msdyn_expensecategory">;
            get(name: "msdyn_expensestatus"): XrmBase.OptionSetAttribute<msdyn_expensestatus>;
            get(name: "msdyn_externaldescription"): XrmBase.StringAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_price"): XrmBase.NumberAttribute;
            get(name: "msdyn_project"): XrmBase.LookupAttribute<"msdyn_project">;
            get(name: "msdyn_quantity"): XrmBase.NumberAttribute;
            get(name: "msdyn_salestaxamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_totalamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_transactiondate"): XrmBase.DateAttribute;
            get(name: "msdyn_unit"): XrmBase.LookupAttribute<"uom">;
            get(name: "msdyn_unitgroup"): XrmBase.LookupAttribute<"uomschedule">;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_amount"): XrmBase.NumberControl;
            get(name: "msdyn_expensecategory"): XrmBase.LookupControl<"msdyn_expensecategory">;
            get(name: "msdyn_expensestatus"): XrmBase.OptionSetControl<msdyn_expensestatus>;
            get(name: "msdyn_externaldescription"): XrmBase.StringControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_price"): XrmBase.NumberControl;
            get(name: "msdyn_project"): XrmBase.LookupControl<"msdyn_project">;
            get(name: "msdyn_quantity"): XrmBase.NumberControl;
            get(name: "msdyn_salestaxamount"): XrmBase.NumberControl;
            get(name: "msdyn_totalamount"): XrmBase.NumberControl;
            get(name: "msdyn_transactiondate"): XrmBase.DateControl;
            get(name: "msdyn_unit"): XrmBase.LookupControl<"uom">;
            get(name: "msdyn_unitgroup"): XrmBase.LookupControl<"uomschedule">;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_transactiondate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_project"): XrmBase.LookupAttribute<"msdyn_project">;
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_expensecategory"): XrmBase.LookupAttribute<"msdyn_expensecategory">;
        getAttribute(attributeName: "msdyn_unitgroup"): XrmBase.LookupAttribute<"uomschedule">;
        getAttribute(attributeName: "msdyn_unit"): XrmBase.LookupAttribute<"uom">;
        getAttribute(attributeName: "msdyn_quantity"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_price"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "msdyn_amount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_salestaxamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_totalamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_externaldescription"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_expensestatus"): XrmBase.OptionSetAttribute<msdyn_expensestatus>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_transactiondate"): XrmBase.DateControl;
        getControl(controlName: "msdyn_project"): XrmBase.LookupControl<"msdyn_project">;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_expensecategory"): XrmBase.LookupControl<"msdyn_expensecategory">;
        getControl(controlName: "msdyn_unitgroup"): XrmBase.LookupControl<"uomschedule">;
        getControl(controlName: "msdyn_unit"): XrmBase.LookupControl<"uom">;
        getControl(controlName: "msdyn_quantity"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_price"): XrmBase.NumberControl;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "msdyn_amount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_salestaxamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_totalamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_externaldescription"): XrmBase.StringControl;
        getControl(controlName: "msdyn_expensestatus"): XrmBase.OptionSetControl<msdyn_expensestatus>;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
