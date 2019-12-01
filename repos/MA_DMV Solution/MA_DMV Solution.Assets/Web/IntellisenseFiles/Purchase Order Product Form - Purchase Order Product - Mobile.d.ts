declare namespace Form.msdyn_purchaseorderproduct.Main {
    namespace PurchaseOrderProductMobile {
        namespace Tabs {
            interface Fstabgeneral extends XrmBase.SectionCollectionBase {
                get(name: "fstab_general_section_general"): XrmBase.PageSection;
                get(name: "{5ae19875-5712-4cb9-b3b7-f7583e96ae65}_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Fstabproductassociatesto extends XrmBase.SectionCollectionBase {
                get(name: "fstab_product_associates_to_section"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Fstabother extends XrmBase.SectionCollectionBase {
                get(name: "tab_4_section_1"): XrmBase.PageSection;
                get(name: "tab_4_section_2"): XrmBase.PageSection;
                get(name: "tab_4_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_associatetobooking"): XrmBase.LookupAttribute<"bookableresourcebooking">;
            get(name: "msdyn_associatetowarehouse"): XrmBase.LookupAttribute<"msdyn_warehouse">;
            get(name: "msdyn_associatetoworkorder"): XrmBase.LookupAttribute<"msdyn_workorder">;
            get(name: "msdyn_dateexpected"): XrmBase.DateAttribute;
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_itemstatus"): XrmBase.OptionSetAttribute<msdyn_purchaseorderproductstatus>;
            get(name: "msdyn_lineorder"): XrmBase.NumberAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_product"): XrmBase.LookupAttribute<"product">;
            get(name: "msdyn_purchaseorder"): XrmBase.LookupAttribute<"msdyn_purchaseorder">;
            get(name: "msdyn_qtybilled"): XrmBase.NumberAttribute;
            get(name: "msdyn_qtyreceived"): XrmBase.NumberAttribute;
            get(name: "msdyn_quantity"): XrmBase.NumberAttribute;
            get(name: "msdyn_totalcost"): XrmBase.NumberAttribute;
            get(name: "msdyn_unit"): XrmBase.LookupAttribute<"uom">;
            get(name: "msdyn_unitcost"): XrmBase.NumberAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_associatetobooking"): XrmBase.LookupControl<"bookableresourcebooking">;
            get(name: "msdyn_associatetowarehouse"): XrmBase.LookupControl<"msdyn_warehouse">;
            get(name: "msdyn_associatetoworkorder"): XrmBase.LookupControl<"msdyn_workorder">;
            get(name: "msdyn_dateexpected"): XrmBase.DateControl;
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_itemstatus"): XrmBase.OptionSetControl<msdyn_purchaseorderproductstatus>;
            get(name: "msdyn_lineorder"): XrmBase.NumberControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_product"): XrmBase.LookupControl<"product">;
            get(name: "msdyn_purchaseorder"): XrmBase.LookupControl<"msdyn_purchaseorder">;
            get(name: "msdyn_qtybilled"): XrmBase.NumberControl;
            get(name: "msdyn_qtyreceived"): XrmBase.NumberControl;
            get(name: "msdyn_quantity"): XrmBase.BaseControl;
            get(name: "msdyn_totalcost"): XrmBase.NumberControl;
            get(name: "msdyn_unit"): XrmBase.LookupControl<"uom">;
            get(name: "msdyn_unitcost"): XrmBase.NumberControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "fstab_general"): XrmBase.PageTab<Tabs.Fstabgeneral>;
            get(name: "fstab_product_associates_to"): XrmBase.PageTab<Tabs.Fstabproductassociatesto>;
            get(name: "fstab_other"): XrmBase.PageTab<Tabs.Fstabother>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface PurchaseOrderProductMobile extends XrmBase.PageBase<PurchaseOrderProductMobile.Attributes, PurchaseOrderProductMobile.Tabs, PurchaseOrderProductMobile.Controls> {
        getAttribute(attributeName: "msdyn_purchaseorder"): XrmBase.LookupAttribute<"msdyn_purchaseorder">;
        getAttribute(attributeName: "msdyn_product"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "msdyn_itemstatus"): XrmBase.OptionSetAttribute<msdyn_purchaseorderproductstatus>;
        getAttribute(attributeName: "msdyn_unit"): XrmBase.LookupAttribute<"uom">;
        getAttribute(attributeName: "msdyn_quantity"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "msdyn_dateexpected"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_qtyreceived"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_qtybilled"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_unitcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_totalcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_associatetowarehouse"): XrmBase.LookupAttribute<"msdyn_warehouse">;
        getAttribute(attributeName: "msdyn_associatetoworkorder"): XrmBase.LookupAttribute<"msdyn_workorder">;
        getAttribute(attributeName: "msdyn_associatetobooking"): XrmBase.LookupAttribute<"bookableresourcebooking">;
        getAttribute(attributeName: "msdyn_lineorder"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_purchaseorder"): XrmBase.LookupControl<"msdyn_purchaseorder">;
        getControl(controlName: "msdyn_product"): XrmBase.LookupControl<"product">;
        getControl(controlName: "msdyn_itemstatus"): XrmBase.OptionSetControl<msdyn_purchaseorderproductstatus>;
        getControl(controlName: "msdyn_unit"): XrmBase.LookupControl<"uom">;
        getControl(controlName: "msdyn_quantity"): XrmBase.BaseControl;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "msdyn_dateexpected"): XrmBase.DateControl;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "msdyn_qtyreceived"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_qtybilled"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_unitcost"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_totalcost"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_associatetowarehouse"): XrmBase.LookupControl<"msdyn_warehouse">;
        getControl(controlName: "msdyn_associatetoworkorder"): XrmBase.LookupControl<"msdyn_workorder">;
        getControl(controlName: "msdyn_associatetobooking"): XrmBase.LookupControl<"bookableresourcebooking">;
        getControl(controlName: "msdyn_lineorder"): XrmBase.NumberControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
