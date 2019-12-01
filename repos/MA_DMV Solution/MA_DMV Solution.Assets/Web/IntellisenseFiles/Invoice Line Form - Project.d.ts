declare namespace Form.invoicedetail.Main {
    namespace Project {
        namespace Tabs {
            interface ProjectTab extends XrmBase.SectionCollectionBase {
                get(name: "tab_4_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface MilestonesTab extends XrmBase.SectionCollectionBase {
                get(name: "tab_9_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface ChargeableTransactionsTab extends XrmBase.SectionCollectionBase {
                get(name: "TransactionsSection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface ComplimentaryTransactionsTab extends XrmBase.SectionCollectionBase {
                get(name: "tab_6_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface NonChargeableTransactionsTab extends XrmBase.SectionCollectionBase {
                get(name: "tab_7_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface ProductTab extends XrmBase.SectionCollectionBase {
                get(name: "invoice detail information"): XrmBase.PageSection;
                get(name: "pricing"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface HiddenFields extends XrmBase.SectionCollectionBase {
                get(name: "tab_8_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Delivery extends XrmBase.SectionCollectionBase {
                get(name: "delivery information"): XrmBase.PageSection;
                get(name: "fulfillment"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Address extends XrmBase.SectionCollectionBase {
                get(name: "ship to address"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface HiddenTabDeprecated extends XrmBase.SectionCollectionBase {
                get(name: "HiddenTab_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "actualdeliveryon"): XrmBase.DateAttribute;
            get(name: "baseamount"): XrmBase.NumberAttribute;
            get(name: "extendedamount"): XrmBase.NumberAttribute;
            get(name: "ispriceoverridden"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "isproductoverridden"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "manualdiscountamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_billingmethod"): XrmBase.OptionSetAttribute<msdyn_billingmethod>;
            get(name: "msdyn_chargeableamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_complimentaryamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_contractlineamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_invoicedtilldate"): XrmBase.NumberAttribute;
            get(name: "msdyn_nonchargeableamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_project"): XrmBase.LookupAttribute<"msdyn_project">;
            get(name: "priceperunit"): XrmBase.NumberAttribute;
            get(name: "productdescription"): XrmBase.StringAttribute;
            get(name: "productid"): XrmBase.LookupAttribute<"product">;
            get(name: "producttypecode"): XrmBase.OptionSetAttribute<qooiproduct_producttype>;
            get(name: "quantity"): XrmBase.NumberAttribute;
            get(name: "quantitybackordered"): XrmBase.NumberAttribute;
            get(name: "quantitycancelled"): XrmBase.NumberAttribute;
            get(name: "quantityshipped"): XrmBase.NumberAttribute;
            get(name: "salesorderdetailid"): XrmBase.LookupAttribute<"salesorderdetail">;
            get(name: "salesrepid"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "shipto_city"): XrmBase.StringAttribute;
            get(name: "shipto_country"): XrmBase.StringAttribute;
            get(name: "shipto_fax"): XrmBase.StringAttribute;
            get(name: "shipto_freighttermscode"): XrmBase.OptionSetAttribute<invoicedetail_shipto_freighttermscode>;
            get(name: "shipto_line1"): XrmBase.StringAttribute;
            get(name: "shipto_line2"): XrmBase.StringAttribute;
            get(name: "shipto_line3"): XrmBase.StringAttribute;
            get(name: "shipto_name"): XrmBase.StringAttribute;
            get(name: "shipto_postalcode"): XrmBase.StringAttribute;
            get(name: "shipto_stateorprovince"): XrmBase.StringAttribute;
            get(name: "shipto_telephone"): XrmBase.StringAttribute;
            get(name: "tax"): XrmBase.NumberAttribute;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: "uomid"): XrmBase.LookupAttribute<"uom">;
            get(name: "volumediscountamount"): XrmBase.NumberAttribute;
            get(name: "willcall"): XrmBase.OptionSetAttribute<boolean>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "actualdeliveryon"): XrmBase.DateControl;
            get(name: "baseamount"): XrmBase.NumberControl;
            get(name: "ChargeableTransactionsGrid"): XrmBase.SubGridControl<"msdyn_invoicelinetransaction">;
            get(name: "ComplimentaryTransactionsGrid"): XrmBase.SubGridControl<"msdyn_invoicelinetransaction">;
            get(name: "extendedamount"): XrmBase.NumberControl;
            get(name: "ispriceoverridden"): XrmBase.OptionSetControl<any>;
            get(name: "isproductoverridden"): XrmBase.OptionSetControl<any>;
            get(name: "manualdiscountamount"): XrmBase.NumberControl;
            get(name: "MilestonesGrid"): XrmBase.SubGridControl<"msdyn_invoicelinetransaction">;
            get(name: "msdyn_billingmethod"): XrmBase.OptionSetControl<msdyn_billingmethod>;
            get(name: "msdyn_chargeableamount"): XrmBase.NumberControl;
            get(name: "msdyn_complimentaryamount"): XrmBase.NumberControl;
            get(name: "msdyn_contractlineamount"): XrmBase.NumberControl;
            get(name: "msdyn_invoicedtilldate"): XrmBase.NumberControl;
            get(name: "msdyn_nonchargeableamount"): XrmBase.NumberControl;
            get(name: "msdyn_project"): XrmBase.LookupControl<"msdyn_project">;
            get(name: "NonChargeableTransactionsGrid"): XrmBase.SubGridControl<"msdyn_invoicelinetransaction">;
            get(name: "priceperunit"): XrmBase.NumberControl;
            get(name: "productdescription"): XrmBase.StringControl;
            get(name: "productid"): XrmBase.LookupControl<"product">;
            get(name: "producttypecode"): XrmBase.OptionSetControl<qooiproduct_producttype>;
            get(name: "quantity"): XrmBase.NumberControl;
            get(name: "quantitybackordered"): XrmBase.NumberControl;
            get(name: "quantitycancelled"): XrmBase.NumberControl;
            get(name: "quantityshipped"): XrmBase.NumberControl;
            get(name: "salesorderdetailid"): XrmBase.LookupControl<"salesorderdetail">;
            get(name: "salesrepid"): XrmBase.LookupControl<"systemuser">;
            get(name: "shipto_city"): XrmBase.StringControl;
            get(name: "shipto_country"): XrmBase.StringControl;
            get(name: "shipto_fax"): XrmBase.StringControl;
            get(name: "shipto_freighttermscode"): XrmBase.OptionSetControl<invoicedetail_shipto_freighttermscode>;
            get(name: "shipto_line1"): XrmBase.StringControl;
            get(name: "shipto_line2"): XrmBase.StringControl;
            get(name: "shipto_line3"): XrmBase.StringControl;
            get(name: "shipto_name"): XrmBase.StringControl;
            get(name: "shipto_postalcode"): XrmBase.StringControl;
            get(name: "shipto_stateorprovince"): XrmBase.StringControl;
            get(name: "shipto_telephone"): XrmBase.StringControl;
            get(name: "tax"): XrmBase.NumberControl;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: "uomid"): XrmBase.LookupControl<"uom">;
            get(name: "volumediscountamount"): XrmBase.NumberControl;
            get(name: "willcall"): XrmBase.OptionSetControl<any>;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "ProjectTab"): XrmBase.PageTab<Tabs.ProjectTab>;
            get(name: "MilestonesTab"): XrmBase.PageTab<Tabs.MilestonesTab>;
            get(name: "ChargeableTransactionsTab"): XrmBase.PageTab<Tabs.ChargeableTransactionsTab>;
            get(name: "ComplimentaryTransactionsTab"): XrmBase.PageTab<Tabs.ComplimentaryTransactionsTab>;
            get(name: "NonChargeableTransactionsTab"): XrmBase.PageTab<Tabs.NonChargeableTransactionsTab>;
            get(name: "ProductTab"): XrmBase.PageTab<Tabs.ProductTab>;
            get(name: "HiddenFields"): XrmBase.PageTab<Tabs.HiddenFields>;
            get(name: "delivery"): XrmBase.PageTab<Tabs.Delivery>;
            get(name: "address"): XrmBase.PageTab<Tabs.Address>;
            get(name: "HiddenTab_Deprecated"): XrmBase.PageTab<Tabs.HiddenTabDeprecated>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Project extends XrmBase.PageBase<Project.Attributes, Project.Tabs, Project.Controls> {
        getAttribute(attributeName: "productdescription"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_contractlineamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_project"): XrmBase.LookupAttribute<"msdyn_project">;
        getAttribute(attributeName: "msdyn_invoicedtilldate"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_billingmethod"): XrmBase.OptionSetAttribute<msdyn_billingmethod>;
        getAttribute(attributeName: "baseamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "isproductoverridden"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "productid"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "uomid"): XrmBase.LookupAttribute<"uom">;
        getAttribute(attributeName: "ispriceoverridden"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "priceperunit"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "volumediscountamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "quantity"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "manualdiscountamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "tax"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "extendedamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_nonchargeableamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_complimentaryamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_chargeableamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "salesorderdetailid"): XrmBase.LookupAttribute<"salesorderdetail">;
        getAttribute(attributeName: "producttypecode"): XrmBase.OptionSetAttribute<qooiproduct_producttype>;
        getAttribute(attributeName: "actualdeliveryon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "salesrepid"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "quantityshipped"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "quantitybackordered"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "quantitycancelled"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "willcall"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "shipto_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_postalcode"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_line1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_country"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_line2"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_telephone"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_line3"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_fax"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_city"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_freighttermscode"): XrmBase.OptionSetAttribute<invoicedetail_shipto_freighttermscode>;
        getAttribute(attributeName: "shipto_stateorprovince"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "productdescription"): XrmBase.StringControl;
        getControl(controlName: "msdyn_contractlineamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_project"): XrmBase.LookupControl<"msdyn_project">;
        getControl(controlName: "msdyn_invoicedtilldate"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_billingmethod"): XrmBase.OptionSetControl<msdyn_billingmethod>;
        getControl(controlName: "baseamount"): XrmBase.NumberControl;
        getControl(controlName: "MilestonesGrid"): XrmBase.SubGridControl<"msdyn_invoicelinetransaction">;
        getControl(controlName: "ChargeableTransactionsGrid"): XrmBase.SubGridControl<"msdyn_invoicelinetransaction">;
        getControl(controlName: "ComplimentaryTransactionsGrid"): XrmBase.SubGridControl<"msdyn_invoicelinetransaction">;
        getControl(controlName: "NonChargeableTransactionsGrid"): XrmBase.SubGridControl<"msdyn_invoicelinetransaction">;
        getControl(controlName: "isproductoverridden"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "productid"): XrmBase.LookupControl<"product">;
        getControl(controlName: "uomid"): XrmBase.LookupControl<"uom">;
        getControl(controlName: "ispriceoverridden"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "priceperunit"): XrmBase.NumberControl;
        getControl(controlName: "volumediscountamount"): XrmBase.NumberControl;
        getControl(controlName: "quantity"): XrmBase.NumberControl;
        getControl(controlName: "manualdiscountamount"): XrmBase.NumberControl;
        getControl(controlName: "tax"): XrmBase.NumberControl;
        getControl(controlName: "extendedamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_nonchargeableamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_complimentaryamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_chargeableamount"): XrmBase.NumberControl;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "salesorderdetailid"): XrmBase.LookupControl<"salesorderdetail">;
        getControl(controlName: "producttypecode"): XrmBase.OptionSetControl<qooiproduct_producttype>;
        getControl(controlName: "actualdeliveryon"): XrmBase.DateControl;
        getControl(controlName: "salesrepid"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "quantityshipped"): XrmBase.NumberControl;
        getControl(controlName: "quantitybackordered"): XrmBase.NumberControl;
        getControl(controlName: "quantitycancelled"): XrmBase.NumberControl;
        getControl(controlName: "willcall"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "shipto_name"): XrmBase.StringControl;
        getControl(controlName: "shipto_postalcode"): XrmBase.StringControl;
        getControl(controlName: "shipto_line1"): XrmBase.StringControl;
        getControl(controlName: "shipto_country"): XrmBase.StringControl;
        getControl(controlName: "shipto_line2"): XrmBase.StringControl;
        getControl(controlName: "shipto_telephone"): XrmBase.StringControl;
        getControl(controlName: "shipto_line3"): XrmBase.StringControl;
        getControl(controlName: "shipto_fax"): XrmBase.StringControl;
        getControl(controlName: "shipto_city"): XrmBase.StringControl;
        getControl(controlName: "shipto_freighttermscode"): XrmBase.OptionSetControl<invoicedetail_shipto_freighttermscode>;
        getControl(controlName: "shipto_stateorprovince"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
