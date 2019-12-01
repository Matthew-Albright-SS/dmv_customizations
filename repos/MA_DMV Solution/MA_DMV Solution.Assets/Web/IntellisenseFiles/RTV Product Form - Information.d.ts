declare namespace Form.msdyn_rtvproduct.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_lineorder"): XrmBase.NumberAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_product"): XrmBase.LookupAttribute<"product">;
            get(name: "msdyn_quantity"): XrmBase.NumberAttribute;
            get(name: "msdyn_rma"): XrmBase.LookupAttribute<"msdyn_rma">;
            get(name: "msdyn_rmaproduct"): XrmBase.LookupAttribute<"msdyn_rmaproduct">;
            get(name: "msdyn_rtv"): XrmBase.LookupAttribute<"msdyn_rtv">;
            get(name: "msdyn_totalcreditamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_unit"): XrmBase.LookupAttribute<"uom">;
            get(name: "msdyn_unitcreditamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_warehouse"): XrmBase.LookupAttribute<"msdyn_warehouse">;
            get(name: "msdyn_workorder"): XrmBase.LookupAttribute<"msdyn_workorder">;
            get(name: "msdyn_workorderproduct"): XrmBase.LookupAttribute<"msdyn_workorderproduct">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_lineorder"): XrmBase.NumberControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_product"): XrmBase.LookupControl<"product">;
            get(name: "msdyn_quantity"): XrmBase.NumberControl;
            get(name: "msdyn_rma"): XrmBase.LookupControl<"msdyn_rma">;
            get(name: "msdyn_rmaproduct"): XrmBase.LookupControl<"msdyn_rmaproduct">;
            get(name: "msdyn_rtv"): XrmBase.LookupControl<"msdyn_rtv">;
            get(name: "msdyn_totalcreditamount"): XrmBase.NumberControl;
            get(name: "msdyn_unit"): XrmBase.LookupControl<"uom">;
            get(name: "msdyn_unitcreditamount"): XrmBase.NumberControl;
            get(name: "msdyn_warehouse"): XrmBase.LookupControl<"msdyn_warehouse">;
            get(name: "msdyn_workorder"): XrmBase.LookupControl<"msdyn_workorder">;
            get(name: "msdyn_workorderproduct"): XrmBase.LookupControl<"msdyn_workorderproduct">;
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
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_rtv"): XrmBase.LookupAttribute<"msdyn_rtv">;
        getAttribute(attributeName: "msdyn_unit"): XrmBase.LookupAttribute<"uom">;
        getAttribute(attributeName: "msdyn_product"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "msdyn_quantity"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_warehouse"): XrmBase.LookupAttribute<"msdyn_warehouse">;
        getAttribute(attributeName: "msdyn_rma"): XrmBase.LookupAttribute<"msdyn_rma">;
        getAttribute(attributeName: "msdyn_workorder"): XrmBase.LookupAttribute<"msdyn_workorder">;
        getAttribute(attributeName: "msdyn_rmaproduct"): XrmBase.LookupAttribute<"msdyn_rmaproduct">;
        getAttribute(attributeName: "msdyn_workorderproduct"): XrmBase.LookupAttribute<"msdyn_workorderproduct">;
        getAttribute(attributeName: "msdyn_lineorder"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_unitcreditamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_totalcreditamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_rtv"): XrmBase.LookupControl<"msdyn_rtv">;
        getControl(controlName: "msdyn_unit"): XrmBase.LookupControl<"uom">;
        getControl(controlName: "msdyn_product"): XrmBase.LookupControl<"product">;
        getControl(controlName: "msdyn_quantity"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_warehouse"): XrmBase.LookupControl<"msdyn_warehouse">;
        getControl(controlName: "msdyn_rma"): XrmBase.LookupControl<"msdyn_rma">;
        getControl(controlName: "msdyn_workorder"): XrmBase.LookupControl<"msdyn_workorder">;
        getControl(controlName: "msdyn_rmaproduct"): XrmBase.LookupControl<"msdyn_rmaproduct">;
        getControl(controlName: "msdyn_workorderproduct"): XrmBase.LookupControl<"msdyn_workorderproduct">;
        getControl(controlName: "msdyn_lineorder"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_unitcreditamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_totalcreditamount"): XrmBase.NumberControl;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
