declare namespace Form.msdyn_inventoryjournal.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_allocatedtoworkorder"): XrmBase.LookupAttribute<"msdyn_workorder">;
            get(name: "msdyn_inventoryadjustmentproduct"): XrmBase.LookupAttribute<"msdyn_inventoryadjustmentproduct">;
            get(name: "msdyn_journaltype"): XrmBase.OptionSetAttribute<msdyn_inventoryjournaltype>;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_originatingjournal"): XrmBase.LookupAttribute<"msdyn_inventoryjournal">;
            get(name: "msdyn_product"): XrmBase.LookupAttribute<"product">;
            get(name: "msdyn_purchaseorderproduct"): XrmBase.LookupAttribute<"msdyn_purchaseorderproduct">;
            get(name: "msdyn_purchaseorderreceiptproduct"): XrmBase.LookupAttribute<"msdyn_purchaseorderreceiptproduct">;
            get(name: "msdyn_quantity"): XrmBase.NumberAttribute;
            get(name: "msdyn_reversal"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_rmareceiptproduct"): XrmBase.LookupAttribute<"msdyn_rmareceiptproduct">;
            get(name: "msdyn_transactiontype"): XrmBase.OptionSetAttribute<msdyn_inventorytransactiontype>;
            get(name: "msdyn_unit"): XrmBase.LookupAttribute<"uom">;
            get(name: "msdyn_warehouse"): XrmBase.LookupAttribute<"msdyn_warehouse">;
            get(name: "msdyn_workorderproduct"): XrmBase.LookupAttribute<"msdyn_workorderproduct">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_allocatedtoworkorder"): XrmBase.LookupControl<"msdyn_workorder">;
            get(name: "msdyn_inventoryadjustmentproduct"): XrmBase.LookupControl<"msdyn_inventoryadjustmentproduct">;
            get(name: "msdyn_journaltype"): XrmBase.OptionSetControl<msdyn_inventoryjournaltype>;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_originatingjournal"): XrmBase.LookupControl<"msdyn_inventoryjournal">;
            get(name: "msdyn_product"): XrmBase.LookupControl<"product">;
            get(name: "msdyn_purchaseorderproduct"): XrmBase.LookupControl<"msdyn_purchaseorderproduct">;
            get(name: "msdyn_purchaseorderreceiptproduct"): XrmBase.LookupControl<"msdyn_purchaseorderreceiptproduct">;
            get(name: "msdyn_quantity"): XrmBase.NumberControl;
            get(name: "msdyn_reversal"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_rmareceiptproduct"): XrmBase.LookupControl<"msdyn_rmareceiptproduct">;
            get(name: "msdyn_transactiontype"): XrmBase.OptionSetControl<msdyn_inventorytransactiontype>;
            get(name: "msdyn_unit"): XrmBase.LookupControl<"uom">;
            get(name: "msdyn_warehouse"): XrmBase.LookupControl<"msdyn_warehouse">;
            get(name: "msdyn_workorderproduct"): XrmBase.LookupControl<"msdyn_workorderproduct">;
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
        getAttribute(attributeName: "msdyn_transactiontype"): XrmBase.OptionSetAttribute<msdyn_inventorytransactiontype>;
        getAttribute(attributeName: "msdyn_unit"): XrmBase.LookupAttribute<"uom">;
        getAttribute(attributeName: "msdyn_journaltype"): XrmBase.OptionSetAttribute<msdyn_inventoryjournaltype>;
        getAttribute(attributeName: "msdyn_quantity"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_product"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "msdyn_workorderproduct"): XrmBase.LookupAttribute<"msdyn_workorderproduct">;
        getAttribute(attributeName: "msdyn_warehouse"): XrmBase.LookupAttribute<"msdyn_warehouse">;
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_inventoryadjustmentproduct"): XrmBase.LookupAttribute<"msdyn_inventoryadjustmentproduct">;
        getAttribute(attributeName: "msdyn_purchaseorderproduct"): XrmBase.LookupAttribute<"msdyn_purchaseorderproduct">;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_purchaseorderreceiptproduct"): XrmBase.LookupAttribute<"msdyn_purchaseorderreceiptproduct">;
        getAttribute(attributeName: "msdyn_reversal"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_allocatedtoworkorder"): XrmBase.LookupAttribute<"msdyn_workorder">;
        getAttribute(attributeName: "msdyn_originatingjournal"): XrmBase.LookupAttribute<"msdyn_inventoryjournal">;
        getAttribute(attributeName: "msdyn_rmareceiptproduct"): XrmBase.LookupAttribute<"msdyn_rmareceiptproduct">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_transactiontype"): XrmBase.OptionSetControl<msdyn_inventorytransactiontype>;
        getControl(controlName: "msdyn_unit"): XrmBase.LookupControl<"uom">;
        getControl(controlName: "msdyn_journaltype"): XrmBase.OptionSetControl<msdyn_inventoryjournaltype>;
        getControl(controlName: "msdyn_quantity"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_product"): XrmBase.LookupControl<"product">;
        getControl(controlName: "msdyn_workorderproduct"): XrmBase.LookupControl<"msdyn_workorderproduct">;
        getControl(controlName: "msdyn_warehouse"): XrmBase.LookupControl<"msdyn_warehouse">;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_inventoryadjustmentproduct"): XrmBase.LookupControl<"msdyn_inventoryadjustmentproduct">;
        getControl(controlName: "msdyn_purchaseorderproduct"): XrmBase.LookupControl<"msdyn_purchaseorderproduct">;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_purchaseorderreceiptproduct"): XrmBase.LookupControl<"msdyn_purchaseorderreceiptproduct">;
        getControl(controlName: "msdyn_reversal"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_allocatedtoworkorder"): XrmBase.LookupControl<"msdyn_workorder">;
        getControl(controlName: "msdyn_originatingjournal"): XrmBase.LookupControl<"msdyn_inventoryjournal">;
        getControl(controlName: "msdyn_rmareceiptproduct"): XrmBase.LookupControl<"msdyn_rmareceiptproduct">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
