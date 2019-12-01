declare namespace Form.msdyn_payment.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_account"): XrmBase.LookupAttribute<"account">;
            get(name: "msdyn_amount"): XrmBase.NumberAttribute;
            get(name: "msdyn_checknumber"): XrmBase.StringAttribute;
            get(name: "msdyn_date"): XrmBase.DateAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_paymentmethod"): XrmBase.LookupAttribute<"msdyn_paymentmethod">;
            get(name: "msdyn_paymenttype"): XrmBase.OptionSetAttribute<msdyn_paymenttype>;
            get(name: "msdyn_unappliedamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_workorder"): XrmBase.LookupAttribute<"msdyn_workorder">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_account"): XrmBase.LookupControl<"account">;
            get(name: "msdyn_amount"): XrmBase.NumberControl;
            get(name: "msdyn_checknumber"): XrmBase.StringControl;
            get(name: "msdyn_date"): XrmBase.DateControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_paymentmethod"): XrmBase.LookupControl<"msdyn_paymentmethod">;
            get(name: "msdyn_paymenttype"): XrmBase.OptionSetControl<msdyn_paymenttype>;
            get(name: "msdyn_unappliedamount"): XrmBase.NumberControl;
            get(name: "msdyn_workorder"): XrmBase.LookupControl<"msdyn_workorder">;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
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
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_account"): XrmBase.LookupAttribute<"account">;
        getAttribute(attributeName: "msdyn_date"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_paymentmethod"): XrmBase.LookupAttribute<"msdyn_paymentmethod">;
        getAttribute(attributeName: "msdyn_paymenttype"): XrmBase.OptionSetAttribute<msdyn_paymenttype>;
        getAttribute(attributeName: "msdyn_amount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_checknumber"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_unappliedamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_workorder"): XrmBase.LookupAttribute<"msdyn_workorder">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_account"): XrmBase.LookupControl<"account">;
        getControl(controlName: "msdyn_date"): XrmBase.DateControl;
        getControl(controlName: "msdyn_paymentmethod"): XrmBase.LookupControl<"msdyn_paymentmethod">;
        getControl(controlName: "msdyn_paymenttype"): XrmBase.OptionSetControl<msdyn_paymenttype>;
        getControl(controlName: "msdyn_amount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_checknumber"): XrmBase.StringControl;
        getControl(controlName: "msdyn_unappliedamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_workorder"): XrmBase.LookupControl<"msdyn_workorder">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
