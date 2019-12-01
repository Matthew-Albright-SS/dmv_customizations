declare namespace Form.category.Main {
    namespace CategoryMainInteractive {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
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
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface CategoryMainInteractive extends XrmBase.PageBase<CategoryMainInteractive.Attributes, CategoryMainInteractive.Tabs, CategoryMainInteractive.Controls> {
        getAttribute(attributeName: "title"): XrmBase.StringAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "sequencenumber"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "parentcategoryid"): XrmBase.LookupAttribute<"category">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "title"): XrmBase.StringControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "sequencenumber"): XrmBase.NumberControl;
        getControl(controlName: "parentcategoryid"): XrmBase.LookupControl<"category">;
        getControl(controlName: string): undefined;
    }
}
