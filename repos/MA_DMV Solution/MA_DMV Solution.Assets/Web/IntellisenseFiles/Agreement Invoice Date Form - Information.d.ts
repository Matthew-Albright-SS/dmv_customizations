declare namespace Form.msdyn_agreementinvoicedate.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_agreement"): XrmBase.LookupAttribute<"msdyn_agreement">;
            get(name: "msdyn_invoicedate"): XrmBase.DateAttribute;
            get(name: "msdyn_invoicesetup"): XrmBase.LookupAttribute<"msdyn_agreementinvoicesetup">;
            get(name: "msdyn_invoicestatus"): XrmBase.OptionSetAttribute<msdyn_agreementinvoicestatus>;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_agreement"): XrmBase.LookupControl<"msdyn_agreement">;
            get(name: "msdyn_invoicedate"): XrmBase.DateControl;
            get(name: "msdyn_invoicesetup"): XrmBase.LookupControl<"msdyn_agreementinvoicesetup">;
            get(name: "msdyn_invoicestatus"): XrmBase.OptionSetControl<msdyn_agreementinvoicestatus>;
            get(name: "msdyn_name"): XrmBase.StringControl;
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
        getAttribute(attributeName: "msdyn_invoicesetup"): XrmBase.LookupAttribute<"msdyn_agreementinvoicesetup">;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_agreement"): XrmBase.LookupAttribute<"msdyn_agreement">;
        getAttribute(attributeName: "msdyn_invoicedate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_invoicestatus"): XrmBase.OptionSetAttribute<msdyn_agreementinvoicestatus>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_invoicesetup"): XrmBase.LookupControl<"msdyn_agreementinvoicesetup">;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_agreement"): XrmBase.LookupControl<"msdyn_agreement">;
        getControl(controlName: "msdyn_invoicedate"): XrmBase.DateControl;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_invoicestatus"): XrmBase.OptionSetControl<msdyn_agreementinvoicestatus>;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
