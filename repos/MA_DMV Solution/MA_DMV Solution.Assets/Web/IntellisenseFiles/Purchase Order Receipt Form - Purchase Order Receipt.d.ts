declare namespace Form.msdyn_purchaseorderreceipt.Main {
    namespace PurchaseOrderReceipt {
        namespace Tabs {
            interface Fstabreceiptproducts extends XrmBase.SectionCollectionBase {
                get(name: "fstab_products_section_related"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_datereceived"): XrmBase.DateAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_note"): XrmBase.StringAttribute;
            get(name: "msdyn_purchaseorder"): XrmBase.LookupAttribute<"msdyn_purchaseorder">;
            get(name: "msdyn_receivedby"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "msdyn_shipvia"): XrmBase.LookupAttribute<"msdyn_shipvia">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_datereceived"): XrmBase.DateControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_note"): XrmBase.StringControl;
            get(name: "msdyn_purchaseorder"): XrmBase.LookupControl<"msdyn_purchaseorder">;
            get(name: "msdyn_receivedby"): XrmBase.LookupControl<"systemuser">;
            get(name: "msdyn_shipvia"): XrmBase.LookupControl<"msdyn_shipvia">;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "RECEIPT_PRODUCTS"): XrmBase.SubGridControl<"msdyn_purchaseorderreceiptproduct">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "fstab_receipt_products"): XrmBase.PageTab<Tabs.Fstabreceiptproducts>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface PurchaseOrderReceipt extends XrmBase.PageBase<PurchaseOrderReceipt.Attributes, PurchaseOrderReceipt.Tabs, PurchaseOrderReceipt.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_purchaseorder"): XrmBase.LookupAttribute<"msdyn_purchaseorder">;
        getAttribute(attributeName: "msdyn_shipvia"): XrmBase.LookupAttribute<"msdyn_shipvia">;
        getAttribute(attributeName: "msdyn_receivedby"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "msdyn_datereceived"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_note"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_purchaseorder"): XrmBase.LookupControl<"msdyn_purchaseorder">;
        getControl(controlName: "msdyn_shipvia"): XrmBase.LookupControl<"msdyn_shipvia">;
        getControl(controlName: "msdyn_receivedby"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "msdyn_datereceived"): XrmBase.DateControl;
        getControl(controlName: "msdyn_note"): XrmBase.StringControl;
        getControl(controlName: "RECEIPT_PRODUCTS"): XrmBase.SubGridControl<"msdyn_purchaseorderreceiptproduct">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
