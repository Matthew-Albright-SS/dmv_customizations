declare namespace Form.msdyn_purchaseorderreceiptproduct.Main {
    namespace Information {
        namespace Tabs {
            interface Tab3 extends XrmBase.SectionCollectionBase {
                get(name: "tab_3_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab4 extends XrmBase.SectionCollectionBase {
                get(name: "tab_4_section_1"): XrmBase.PageSection;
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
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_purchaseorder"): XrmBase.LookupAttribute<"msdyn_purchaseorder">;
            get(name: "msdyn_purchaseorderbill"): XrmBase.LookupAttribute<"msdyn_purchaseorderbill">;
            get(name: "msdyn_purchaseorderproduct"): XrmBase.LookupAttribute<"msdyn_purchaseorderproduct">;
            get(name: "msdyn_purchaseorderreceipt"): XrmBase.LookupAttribute<"msdyn_purchaseorderreceipt">;
            get(name: "msdyn_quantity"): XrmBase.NumberAttribute;
            get(name: "msdyn_totalcost"): XrmBase.NumberAttribute;
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
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_purchaseorder"): XrmBase.LookupControl<"msdyn_purchaseorder">;
            get(name: "msdyn_purchaseorderbill"): XrmBase.LookupControl<"msdyn_purchaseorderbill">;
            get(name: "msdyn_purchaseorderproduct"): XrmBase.LookupControl<"msdyn_purchaseorderproduct">;
            get(name: "msdyn_purchaseorderreceipt"): XrmBase.LookupControl<"msdyn_purchaseorderreceipt">;
            get(name: "msdyn_quantity"): XrmBase.NumberControl;
            get(name: "msdyn_totalcost"): XrmBase.NumberControl;
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
            get(name: "tab_3"): XrmBase.PageTab<Tabs.Tab3>;
            get(name: "tab_4"): XrmBase.PageTab<Tabs.Tab4>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_purchaseorder"): XrmBase.LookupAttribute<"msdyn_purchaseorder">;
        getAttribute(attributeName: "msdyn_purchaseorderreceipt"): XrmBase.LookupAttribute<"msdyn_purchaseorderreceipt">;
        getAttribute(attributeName: "msdyn_purchaseorderproduct"): XrmBase.LookupAttribute<"msdyn_purchaseorderproduct">;
        getAttribute(attributeName: "msdyn_purchaseorderbill"): XrmBase.LookupAttribute<"msdyn_purchaseorderbill">;
        getAttribute(attributeName: "msdyn_quantity"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_unitcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "msdyn_totalcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_associatetoworkorder"): XrmBase.LookupAttribute<"msdyn_workorder">;
        getAttribute(attributeName: "msdyn_associatetowarehouse"): XrmBase.LookupAttribute<"msdyn_warehouse">;
        getAttribute(attributeName: "msdyn_associatetobooking"): XrmBase.LookupAttribute<"bookableresourcebooking">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_purchaseorder"): XrmBase.LookupControl<"msdyn_purchaseorder">;
        getControl(controlName: "msdyn_purchaseorderreceipt"): XrmBase.LookupControl<"msdyn_purchaseorderreceipt">;
        getControl(controlName: "msdyn_purchaseorderproduct"): XrmBase.LookupControl<"msdyn_purchaseorderproduct">;
        getControl(controlName: "msdyn_purchaseorderbill"): XrmBase.LookupControl<"msdyn_purchaseorderbill">;
        getControl(controlName: "msdyn_quantity"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_unitcost"): XrmBase.NumberControl;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "msdyn_totalcost"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_associatetoworkorder"): XrmBase.LookupControl<"msdyn_workorder">;
        getControl(controlName: "msdyn_associatetowarehouse"): XrmBase.LookupControl<"msdyn_warehouse">;
        getControl(controlName: "msdyn_associatetobooking"): XrmBase.LookupControl<"bookableresourcebooking">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
