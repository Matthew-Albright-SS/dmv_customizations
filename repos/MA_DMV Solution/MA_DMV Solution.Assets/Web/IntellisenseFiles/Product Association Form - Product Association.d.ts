declare namespace Form.productassociation.Main {
    namespace ProductAssociation {
        namespace Tabs {
            interface Productassociationdynamicproperties extends XrmBase.SectionCollectionBase {
                get(name: "product_association_dynamic_properties_section"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "associatedproduct"): XrmBase.LookupAttribute<"product">;
            get(name: "productid"): XrmBase.LookupAttribute<"product">;
            get(name: "productisrequired"): XrmBase.OptionSetAttribute<productassociate_productisrequired>;
            get(name: "quantity"): XrmBase.NumberAttribute;
            get(name: "uomid"): XrmBase.LookupAttribute<"uom">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "associatedproduct"): XrmBase.LookupControl<"product">;
            get(name: "product_association_dynamic_properties"): XrmBase.SubGridControl<"dynamicproperty">;
            get(name: "productid"): XrmBase.LookupControl<"product">;
            get(name: "productisrequired"): XrmBase.OptionSetControl<productassociate_productisrequired>;
            get(name: "quantity"): XrmBase.NumberControl;
            get(name: "uomid"): XrmBase.LookupControl<"uom">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "product_association_dynamic_properties"): XrmBase.PageTab<Tabs.Productassociationdynamicproperties>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface ProductAssociation extends XrmBase.PageBase<ProductAssociation.Attributes, ProductAssociation.Tabs, ProductAssociation.Controls> {
        getAttribute(attributeName: "productid"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "associatedproduct"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "quantity"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "productisrequired"): XrmBase.OptionSetAttribute<productassociate_productisrequired>;
        getAttribute(attributeName: "uomid"): XrmBase.LookupAttribute<"uom">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "productid"): XrmBase.LookupControl<"product">;
        getControl(controlName: "associatedproduct"): XrmBase.LookupControl<"product">;
        getControl(controlName: "quantity"): XrmBase.NumberControl;
        getControl(controlName: "productisrequired"): XrmBase.OptionSetControl<productassociate_productisrequired>;
        getControl(controlName: "uomid"): XrmBase.LookupControl<"uom">;
        getControl(controlName: "product_association_dynamic_properties"): XrmBase.SubGridControl<"dynamicproperty">;
        getControl(controlName: string): undefined;
    }
}
