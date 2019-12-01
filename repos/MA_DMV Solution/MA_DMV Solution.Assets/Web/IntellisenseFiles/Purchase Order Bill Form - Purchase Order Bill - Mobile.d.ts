declare namespace Form.msdyn_purchaseorderbill.Main {
    namespace PurchaseOrderBillMobile {
        namespace Tabs {
            interface Fstabother extends XrmBase.SectionCollectionBase {
                get(name: "tab_3_section_1"): XrmBase.PageSection;
                get(name: "tab_3_section_2"): XrmBase.PageSection;
                get(name: "tab_3_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Fstabsubgrids extends XrmBase.SectionCollectionBase {
                get(name: "fstab_sub_grids_section"): XrmBase.PageSection;
                get(name: "fstab_sub_grids_section_2"): XrmBase.PageSection;
                get(name: "fstab_sub_grids_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_billdate"): XrmBase.DateAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_note"): XrmBase.StringAttribute;
            get(name: "msdyn_paymentterm"): XrmBase.LookupAttribute<"msdyn_paymentterm">;
            get(name: "msdyn_purchaseorder"): XrmBase.LookupAttribute<"msdyn_purchaseorder">;
            get(name: "msdyn_shippingamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_subtotal"): XrmBase.NumberAttribute;
            get(name: "msdyn_taxamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_taxcode"): XrmBase.LookupAttribute<"msdyn_taxcode">;
            get(name: "msdyn_totalamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_vendorinvoicenumber"): XrmBase.StringAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_billdate"): XrmBase.DateControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_note"): XrmBase.StringControl;
            get(name: "msdyn_paymentterm"): XrmBase.LookupControl<"msdyn_paymentterm">;
            get(name: "msdyn_purchaseorder"): XrmBase.LookupControl<"msdyn_purchaseorder">;
            get(name: "msdyn_shippingamount"): XrmBase.NumberControl;
            get(name: "msdyn_subtotal"): XrmBase.NumberControl;
            get(name: "msdyn_taxamount"): XrmBase.NumberControl;
            get(name: "msdyn_taxcode"): XrmBase.LookupControl<"msdyn_taxcode">;
            get(name: "msdyn_totalamount"): XrmBase.NumberControl;
            get(name: "msdyn_vendorinvoicenumber"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "fstab_other"): XrmBase.PageTab<Tabs.Fstabother>;
            get(name: "fstab_sub_grids"): XrmBase.PageTab<Tabs.Fstabsubgrids>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface PurchaseOrderBillMobile extends XrmBase.PageBase<PurchaseOrderBillMobile.Attributes, PurchaseOrderBillMobile.Tabs, PurchaseOrderBillMobile.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_purchaseorder"): XrmBase.LookupAttribute<"msdyn_purchaseorder">;
        getAttribute(attributeName: "msdyn_vendorinvoicenumber"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_billdate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_subtotal"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_shippingamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_paymentterm"): XrmBase.LookupAttribute<"msdyn_paymentterm">;
        getAttribute(attributeName: "msdyn_taxcode"): XrmBase.LookupAttribute<"msdyn_taxcode">;
        getAttribute(attributeName: "msdyn_taxamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_totalamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "msdyn_note"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_purchaseorder"): XrmBase.LookupControl<"msdyn_purchaseorder">;
        getControl(controlName: "msdyn_vendorinvoicenumber"): XrmBase.StringControl;
        getControl(controlName: "msdyn_billdate"): XrmBase.DateControl;
        getControl(controlName: "msdyn_subtotal"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_shippingamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_paymentterm"): XrmBase.LookupControl<"msdyn_paymentterm">;
        getControl(controlName: "msdyn_taxcode"): XrmBase.LookupControl<"msdyn_taxcode">;
        getControl(controlName: "msdyn_taxamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_totalamount"): XrmBase.NumberControl;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "msdyn_note"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
