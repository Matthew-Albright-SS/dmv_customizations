declare namespace Form.productsubstitute.Main {
    namespace ProductSubstitute {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "direction"): XrmBase.OptionSetAttribute<productsellingrelationshipdirection>;
            get(name: "productid"): XrmBase.LookupAttribute<"product">;
            get(name: "salesrelationshiptype"): XrmBase.OptionSetAttribute<productsellingrelationshiptype>;
            get(name: "substitutedproductid"): XrmBase.LookupAttribute<"product">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "direction"): XrmBase.OptionSetControl<productsellingrelationshipdirection>;
            get(name: "productid"): XrmBase.LookupControl<"product">;
            get(name: "salesrelationshiptype"): XrmBase.OptionSetControl<productsellingrelationshiptype>;
            get(name: "substitutedproductid"): XrmBase.LookupControl<"product">;
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
    interface ProductSubstitute extends XrmBase.PageBase<ProductSubstitute.Attributes, ProductSubstitute.Tabs, ProductSubstitute.Controls> {
        getAttribute(attributeName: "productid"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "substitutedproductid"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "salesrelationshiptype"): XrmBase.OptionSetAttribute<productsellingrelationshiptype>;
        getAttribute(attributeName: "direction"): XrmBase.OptionSetAttribute<productsellingrelationshipdirection>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "productid"): XrmBase.LookupControl<"product">;
        getControl(controlName: "substitutedproductid"): XrmBase.LookupControl<"product">;
        getControl(controlName: "salesrelationshiptype"): XrmBase.OptionSetControl<productsellingrelationshiptype>;
        getControl(controlName: "direction"): XrmBase.OptionSetControl<productsellingrelationshipdirection>;
        getControl(controlName: string): undefined;
    }
}
