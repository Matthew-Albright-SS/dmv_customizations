declare namespace Form.msdyn_rmaproduct.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_changeownership"): XrmBase.LookupAttribute<"account">;
            get(name: "msdyn_credittoaccount"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_customerasset"): XrmBase.LookupAttribute<"msdyn_customerasset">;
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_itemstatus"): XrmBase.OptionSetAttribute<msdyn_rmaproductstatus>;
            get(name: "msdyn_lineorder"): XrmBase.NumberAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_pricelist"): XrmBase.LookupAttribute<"pricelevel">;
            get(name: "msdyn_processingaction"): XrmBase.OptionSetAttribute<msdyn_rmaprocessingaction>;
            get(name: "msdyn_product"): XrmBase.LookupAttribute<"product">;
            get(name: "msdyn_qtyprocessed"): XrmBase.NumberAttribute;
            get(name: "msdyn_qtyreceived"): XrmBase.NumberAttribute;
            get(name: "msdyn_quantitytoreturn"): XrmBase.NumberAttribute;
            get(name: "msdyn_returntovendor"): XrmBase.LookupAttribute<"account">;
            get(name: "msdyn_returntowarehouse"): XrmBase.LookupAttribute<"msdyn_warehouse">;
            get(name: "msdyn_rma"): XrmBase.LookupAttribute<"msdyn_rma">;
            get(name: "msdyn_taxable"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_totalamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_unit"): XrmBase.LookupAttribute<"uom">;
            get(name: "msdyn_unitamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_woproduct"): XrmBase.LookupAttribute<"msdyn_workorderproduct">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_changeownership"): XrmBase.LookupControl<"account">;
            get(name: "msdyn_credittoaccount"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_customerasset"): XrmBase.LookupControl<"msdyn_customerasset">;
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_itemstatus"): XrmBase.OptionSetControl<msdyn_rmaproductstatus>;
            get(name: "msdyn_lineorder"): XrmBase.NumberControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_pricelist"): XrmBase.LookupControl<"pricelevel">;
            get(name: "msdyn_processingaction"): XrmBase.OptionSetControl<msdyn_rmaprocessingaction>;
            get(name: "msdyn_product"): XrmBase.LookupControl<"product">;
            get(name: "msdyn_qtyprocessed"): XrmBase.NumberControl;
            get(name: "msdyn_qtyreceived"): XrmBase.NumberControl;
            get(name: "msdyn_quantitytoreturn"): XrmBase.NumberControl;
            get(name: "msdyn_returntovendor"): XrmBase.LookupControl<"account">;
            get(name: "msdyn_returntowarehouse"): XrmBase.LookupControl<"msdyn_warehouse">;
            get(name: "msdyn_rma"): XrmBase.LookupControl<"msdyn_rma">;
            get(name: "msdyn_taxable"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_totalamount"): XrmBase.NumberControl;
            get(name: "msdyn_unit"): XrmBase.LookupControl<"uom">;
            get(name: "msdyn_unitamount"): XrmBase.NumberControl;
            get(name: "msdyn_woproduct"): XrmBase.LookupControl<"msdyn_workorderproduct">;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
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
        getAttribute(attributeName: "msdyn_rma"): XrmBase.LookupAttribute<"msdyn_rma">;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_quantitytoreturn"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_woproduct"): XrmBase.LookupAttribute<"msdyn_workorderproduct">;
        getAttribute(attributeName: "msdyn_unit"): XrmBase.LookupAttribute<"uom">;
        getAttribute(attributeName: "msdyn_product"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "msdyn_qtyreceived"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_customerasset"): XrmBase.LookupAttribute<"msdyn_customerasset">;
        getAttribute(attributeName: "msdyn_qtyprocessed"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_pricelist"): XrmBase.LookupAttribute<"pricelevel">;
        getAttribute(attributeName: "msdyn_returntowarehouse"): XrmBase.LookupAttribute<"msdyn_warehouse">;
        getAttribute(attributeName: "msdyn_itemstatus"): XrmBase.OptionSetAttribute<msdyn_rmaproductstatus>;
        getAttribute(attributeName: "msdyn_changeownership"): XrmBase.LookupAttribute<"account">;
        getAttribute(attributeName: "msdyn_processingaction"): XrmBase.OptionSetAttribute<msdyn_rmaprocessingaction>;
        getAttribute(attributeName: "msdyn_unitamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_returntovendor"): XrmBase.LookupAttribute<"account">;
        getAttribute(attributeName: "msdyn_totalamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "msdyn_credittoaccount"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_taxable"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_lineorder"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_rma"): XrmBase.LookupControl<"msdyn_rma">;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "msdyn_quantitytoreturn"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_woproduct"): XrmBase.LookupControl<"msdyn_workorderproduct">;
        getControl(controlName: "msdyn_unit"): XrmBase.LookupControl<"uom">;
        getControl(controlName: "msdyn_product"): XrmBase.LookupControl<"product">;
        getControl(controlName: "msdyn_qtyreceived"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_customerasset"): XrmBase.LookupControl<"msdyn_customerasset">;
        getControl(controlName: "msdyn_qtyprocessed"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_pricelist"): XrmBase.LookupControl<"pricelevel">;
        getControl(controlName: "msdyn_returntowarehouse"): XrmBase.LookupControl<"msdyn_warehouse">;
        getControl(controlName: "msdyn_itemstatus"): XrmBase.OptionSetControl<msdyn_rmaproductstatus>;
        getControl(controlName: "msdyn_changeownership"): XrmBase.LookupControl<"account">;
        getControl(controlName: "msdyn_processingaction"): XrmBase.OptionSetControl<msdyn_rmaprocessingaction>;
        getControl(controlName: "msdyn_unitamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_returntovendor"): XrmBase.LookupControl<"account">;
        getControl(controlName: "msdyn_totalamount"): XrmBase.NumberControl;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "msdyn_credittoaccount"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_taxable"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_lineorder"): XrmBase.NumberControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
