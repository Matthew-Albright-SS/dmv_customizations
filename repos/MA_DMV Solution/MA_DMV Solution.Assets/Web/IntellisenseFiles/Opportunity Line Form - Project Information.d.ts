declare namespace Form.opportunityproduct.Main {
    namespace ProjectInformation {
        namespace Tabs {
            interface ProjectGeneralTab extends XrmBase.SectionCollectionBase {
                get(name: "ProjectSection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface ProductGeneralTab extends XrmBase.SectionCollectionBase {
                get(name: "opportunity product information"): XrmBase.PageSection;
                get(name: "pricing"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "baseamount"): XrmBase.NumberAttribute;
            get(name: "extendedamount"): XrmBase.NumberAttribute;
            get(name: "ispriceoverridden"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "isproductoverridden"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "manualdiscountamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_billingmethod"): XrmBase.OptionSetAttribute<msdyn_billingmethod>;
            get(name: "msdyn_budgetamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_linetype"): XrmBase.OptionSetAttribute<msdyn_linetype>;
            get(name: "opportunityid"): XrmBase.LookupAttribute<"opportunity">;
            get(name: "priceperunit"): XrmBase.NumberAttribute;
            get(name: "productdescription"): XrmBase.StringAttribute;
            get(name: "productid"): XrmBase.LookupAttribute<"product">;
            get(name: "producttypecode"): XrmBase.OptionSetAttribute<qooiproduct_producttype>;
            get(name: "quantity"): XrmBase.NumberAttribute;
            get(name: "tax"): XrmBase.NumberAttribute;
            get(name: "uomid"): XrmBase.LookupAttribute<"uom">;
            get(name: "volumediscountamount"): XrmBase.NumberAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "baseamount"): XrmBase.NumberControl;
            get(name: "extendedamount"): XrmBase.NumberControl;
            get(name: "ispriceoverridden"): XrmBase.OptionSetControl<any>;
            get(name: "isproductoverridden"): XrmBase.OptionSetControl<any>;
            get(name: "manualdiscountamount"): XrmBase.NumberControl;
            get(name: "msdyn_billingmethod"): XrmBase.OptionSetControl<msdyn_billingmethod>;
            get(name: "msdyn_budgetamount"): XrmBase.NumberControl;
            get(name: "msdyn_linetype"): XrmBase.OptionSetControl<msdyn_linetype>;
            get(name: "opportunityid"): XrmBase.LookupControl<"opportunity">;
            get(name: "priceperunit"): XrmBase.NumberControl;
            get(name: "productdescription"): XrmBase.StringControl;
            get(name: "productid"): XrmBase.LookupControl<"product">;
            get(name: "producttypecode"): XrmBase.OptionSetControl<qooiproduct_producttype>;
            get(name: "quantity"): XrmBase.NumberControl;
            get(name: "tax"): XrmBase.NumberControl;
            get(name: "uomid"): XrmBase.LookupControl<"uom">;
            get(name: "volumediscountamount"): XrmBase.NumberControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "ProjectGeneralTab"): XrmBase.PageTab<Tabs.ProjectGeneralTab>;
            get(name: "ProductGeneralTab"): XrmBase.PageTab<Tabs.ProductGeneralTab>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface ProjectInformation extends XrmBase.PageBase<ProjectInformation.Attributes, ProjectInformation.Tabs, ProjectInformation.Controls> {
        getAttribute(attributeName: "producttypecode"): XrmBase.OptionSetAttribute<qooiproduct_producttype>;
        getAttribute(attributeName: "opportunityid"): XrmBase.LookupAttribute<"opportunity">;
        getAttribute(attributeName: "productdescription"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_budgetamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_billingmethod"): XrmBase.OptionSetAttribute<msdyn_billingmethod>;
        getAttribute(attributeName: "isproductoverridden"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "productid"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "uomid"): XrmBase.LookupAttribute<"uom">;
        getAttribute(attributeName: "msdyn_linetype"): XrmBase.OptionSetAttribute<msdyn_linetype>;
        getAttribute(attributeName: "ispriceoverridden"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "quantity"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "priceperunit"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "extendedamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "volumediscountamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "baseamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "manualdiscountamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "tax"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "producttypecode"): XrmBase.OptionSetControl<qooiproduct_producttype>;
        getControl(controlName: "opportunityid"): XrmBase.LookupControl<"opportunity">;
        getControl(controlName: "productdescription"): XrmBase.StringControl;
        getControl(controlName: "msdyn_budgetamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_billingmethod"): XrmBase.OptionSetControl<msdyn_billingmethod>;
        getControl(controlName: "isproductoverridden"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "productid"): XrmBase.LookupControl<"product">;
        getControl(controlName: "uomid"): XrmBase.LookupControl<"uom">;
        getControl(controlName: "msdyn_linetype"): XrmBase.OptionSetControl<msdyn_linetype>;
        getControl(controlName: "ispriceoverridden"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "quantity"): XrmBase.NumberControl;
        getControl(controlName: "priceperunit"): XrmBase.NumberControl;
        getControl(controlName: "extendedamount"): XrmBase.NumberControl;
        getControl(controlName: "volumediscountamount"): XrmBase.NumberControl;
        getControl(controlName: "baseamount"): XrmBase.NumberControl;
        getControl(controlName: "manualdiscountamount"): XrmBase.NumberControl;
        getControl(controlName: "tax"): XrmBase.NumberControl;
        getControl(controlName: string): undefined;
    }
}
