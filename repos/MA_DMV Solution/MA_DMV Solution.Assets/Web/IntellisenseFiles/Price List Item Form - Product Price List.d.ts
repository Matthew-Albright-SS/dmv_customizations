declare namespace Form.productpricelevel.Main {
    namespace ProductPriceList {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "price list item information"): XrmBase.PageSection;
                get(name: "Currency"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface PricingInformation extends XrmBase.SectionCollectionBase {
                get(name: "pricing"): XrmBase.PageSection;
                get(name: "rounding"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "amount"): XrmBase.NumberAttribute;
            get(name: "discounttypeid"): XrmBase.LookupAttribute<"discounttype">;
            get(name: "percentage"): XrmBase.NumberAttribute;
            get(name: "pricelevelid"): XrmBase.LookupAttribute<"pricelevel">;
            get(name: "pricingmethodcode"): XrmBase.OptionSetAttribute<productpricelevel_pricingmethodcode>;
            get(name: "productid"): XrmBase.LookupAttribute<"product">;
            get(name: "quantitysellingcode"): XrmBase.OptionSetAttribute<productpricelevel_quantitysellingcode>;
            get(name: "roundingoptionamount"): XrmBase.NumberAttribute;
            get(name: "roundingoptioncode"): XrmBase.OptionSetAttribute<productpricelevel_roundingoptioncode>;
            get(name: "roundingpolicycode"): XrmBase.OptionSetAttribute<productpricelevel_roundingpolicycode>;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: "uomid"): XrmBase.LookupAttribute<"uom">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "amount"): XrmBase.NumberControl;
            get(name: "discounttypeid"): XrmBase.LookupControl<"discounttype">;
            get(name: "percentage"): XrmBase.NumberControl;
            get(name: "pricelevelid"): XrmBase.LookupControl<"pricelevel">;
            get(name: "pricingmethodcode"): XrmBase.OptionSetControl<productpricelevel_pricingmethodcode>;
            get(name: "productid"): XrmBase.LookupControl<"product">;
            get(name: "quantitysellingcode"): XrmBase.OptionSetControl<productpricelevel_quantitysellingcode>;
            get(name: "roundingoptionamount"): XrmBase.NumberControl;
            get(name: "roundingoptioncode"): XrmBase.OptionSetControl<productpricelevel_roundingoptioncode>;
            get(name: "roundingpolicycode"): XrmBase.OptionSetControl<productpricelevel_roundingpolicycode>;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: "uomid"): XrmBase.LookupControl<"uom">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "general"): XrmBase.PageTab<Tabs.General>;
            get(name: "Pricing information"): XrmBase.PageTab<Tabs.PricingInformation>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface ProductPriceList extends XrmBase.PageBase<ProductPriceList.Attributes, ProductPriceList.Tabs, ProductPriceList.Controls> {
        getAttribute(attributeName: "pricelevelid"): XrmBase.LookupAttribute<"pricelevel">;
        getAttribute(attributeName: "productid"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "uomid"): XrmBase.LookupAttribute<"uom">;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "discounttypeid"): XrmBase.LookupAttribute<"discounttype">;
        getAttribute(attributeName: "quantitysellingcode"): XrmBase.OptionSetAttribute<productpricelevel_quantitysellingcode>;
        getAttribute(attributeName: "pricingmethodcode"): XrmBase.OptionSetAttribute<productpricelevel_pricingmethodcode>;
        getAttribute(attributeName: "amount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "percentage"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "roundingpolicycode"): XrmBase.OptionSetAttribute<productpricelevel_roundingpolicycode>;
        getAttribute(attributeName: "roundingoptioncode"): XrmBase.OptionSetAttribute<productpricelevel_roundingoptioncode>;
        getAttribute(attributeName: "roundingoptionamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "pricelevelid"): XrmBase.LookupControl<"pricelevel">;
        getControl(controlName: "productid"): XrmBase.LookupControl<"product">;
        getControl(controlName: "uomid"): XrmBase.LookupControl<"uom">;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "discounttypeid"): XrmBase.LookupControl<"discounttype">;
        getControl(controlName: "quantitysellingcode"): XrmBase.OptionSetControl<productpricelevel_quantitysellingcode>;
        getControl(controlName: "pricingmethodcode"): XrmBase.OptionSetControl<productpricelevel_pricingmethodcode>;
        getControl(controlName: "amount"): XrmBase.NumberControl;
        getControl(controlName: "percentage"): XrmBase.NumberControl;
        getControl(controlName: "roundingpolicycode"): XrmBase.OptionSetControl<productpricelevel_roundingpolicycode>;
        getControl(controlName: "roundingoptioncode"): XrmBase.OptionSetControl<productpricelevel_roundingoptioncode>;
        getControl(controlName: "roundingoptionamount"): XrmBase.NumberControl;
        getControl(controlName: string): undefined;
    }
}
