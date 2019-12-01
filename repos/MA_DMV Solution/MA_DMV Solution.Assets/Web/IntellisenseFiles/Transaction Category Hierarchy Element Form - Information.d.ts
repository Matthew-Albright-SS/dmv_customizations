declare namespace Form.msdyn_transactioncategoryhierarchyelement.Main {
    namespace Information {
        namespace Tabs {
            interface _2f7899c789814aa1823ff08673e0cddb extends XrmBase.SectionCollectionBase {
                get(name: "{2f7899c7-8981-4aa1-823f-f08673e0cddb}_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_childcategory"): XrmBase.LookupAttribute<"msdyn_transactioncategory">;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_parentcategory"): XrmBase.LookupAttribute<"msdyn_transactioncategory">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_childcategory"): XrmBase.LookupControl<"msdyn_transactioncategory">;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_parentcategory"): XrmBase.LookupControl<"msdyn_transactioncategory">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{2f7899c7-8981-4aa1-823f-f08673e0cddb}"): XrmBase.PageTab<Tabs._2f7899c789814aa1823ff08673e0cddb>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_parentcategory"): XrmBase.LookupAttribute<"msdyn_transactioncategory">;
        getAttribute(attributeName: "msdyn_childcategory"): XrmBase.LookupAttribute<"msdyn_transactioncategory">;
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_parentcategory"): XrmBase.LookupControl<"msdyn_transactioncategory">;
        getControl(controlName: "msdyn_childcategory"): XrmBase.LookupControl<"msdyn_transactioncategory">;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
