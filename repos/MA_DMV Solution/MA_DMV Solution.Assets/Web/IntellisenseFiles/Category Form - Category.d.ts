declare namespace Form.category.Main {
    namespace Category {
        namespace Tabs {
            interface AssociatedCategories extends XrmBase.SectionCollectionBase {
                get(name: "Associated Categories"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "categorynumber"): XrmBase.StringAttribute;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "parentcategoryid"): XrmBase.LookupAttribute<"category">;
            get(name: "sequencenumber"): XrmBase.NumberAttribute;
            get(name: "title"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "AssociatedCategoriesGrid"): XrmBase.SubGridControl<"category">;
            get(name: "categorynumber"): XrmBase.StringControl;
            get(name: "description"): XrmBase.StringControl;
            get(name: "parentcategoryid"): XrmBase.LookupControl<"category">;
            get(name: "sequencenumber"): XrmBase.NumberControl;
            get(name: "title"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "AssociatedCategories"): XrmBase.PageTab<Tabs.AssociatedCategories>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Category extends XrmBase.PageBase<Category.Attributes, Category.Tabs, Category.Controls> {
        getAttribute(attributeName: "title"): XrmBase.StringAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "sequencenumber"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "parentcategoryid"): XrmBase.LookupAttribute<"category">;
        getAttribute(attributeName: "categorynumber"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "title"): XrmBase.StringControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "sequencenumber"): XrmBase.NumberControl;
        getControl(controlName: "parentcategoryid"): XrmBase.LookupControl<"category">;
        getControl(controlName: "categorynumber"): XrmBase.StringControl;
        getControl(controlName: "AssociatedCategoriesGrid"): XrmBase.SubGridControl<"category">;
        getControl(controlName: string): undefined;
    }
}
