declare namespace Form.msdyn_quoteinvoicingproduct.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "tab_2_section_1"): XrmBase.PageSection;
                get(name: "tab_2_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "exchangerate"): XrmBase.NumberAttribute;
            get(name: "msdyn_amount"): XrmBase.NumberAttribute;
            get(name: "msdyn_lineorder"): XrmBase.NumberAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_product"): XrmBase.LookupAttribute<"product">;
            get(name: "msdyn_quantity"): XrmBase.NumberAttribute;
            get(name: "msdyn_quoteinvoicingsetup"): XrmBase.LookupAttribute<"msdyn_quoteinvoicingsetup">;
            get(name: "msdyn_unit"): XrmBase.LookupAttribute<"uom">;
            get(name: "msdyn_unitprice"): XrmBase.NumberAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "exchangerate"): XrmBase.NumberControl;
            get(name: "msdyn_amount"): XrmBase.NumberControl;
            get(name: "msdyn_lineorder"): XrmBase.NumberControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_product"): XrmBase.LookupControl<"product">;
            get(name: "msdyn_quantity"): XrmBase.NumberControl;
            get(name: "msdyn_quoteinvoicingsetup"): XrmBase.LookupControl<"msdyn_quoteinvoicingsetup">;
            get(name: "msdyn_unit"): XrmBase.LookupControl<"uom">;
            get(name: "msdyn_unitprice"): XrmBase.NumberControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "General"): XrmBase.PageTab<Tabs.General>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_product"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "msdyn_quantity"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "exchangerate"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_unit"): XrmBase.LookupAttribute<"uom">;
        getAttribute(attributeName: "msdyn_unitprice"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_amount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_lineorder"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_quoteinvoicingsetup"): XrmBase.LookupAttribute<"msdyn_quoteinvoicingsetup">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_product"): XrmBase.LookupControl<"product">;
        getControl(controlName: "msdyn_quantity"): XrmBase.NumberControl;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "exchangerate"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_unit"): XrmBase.LookupControl<"uom">;
        getControl(controlName: "msdyn_unitprice"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_amount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_lineorder"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_quoteinvoicingsetup"): XrmBase.LookupControl<"msdyn_quoteinvoicingsetup">;
        getControl(controlName: string): undefined;
    }
}
