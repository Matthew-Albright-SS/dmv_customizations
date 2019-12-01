declare namespace Form.salesliterature.Main {
    namespace SalesLiterature {
        namespace Tabs {
            interface Generalinformation extends XrmBase.SectionCollectionBase {
                get(name: "sales literature information"): XrmBase.PageSection;
                get(name: "sales_attachments"): XrmBase.PageSection;
                get(name: "related"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "literaturetypecode"): XrmBase.OptionSetAttribute<salesliterature_literaturetypecode>;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "subjectid"): XrmBase.LookupAttribute<"subject">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "Competitors"): XrmBase.SubGridControl<"competitor">;
            get(name: "description"): XrmBase.StringControl;
            get(name: "literaturetypecode"): XrmBase.OptionSetControl<salesliterature_literaturetypecode>;
            get(name: "name"): XrmBase.StringControl;
            get(name: "Products"): XrmBase.SubGridControl<"product">;
            get(name: "SalesAttachments"): XrmBase.SubGridControl<"salesliteratureitem">;
            get(name: "subjectid"): XrmBase.LookupControl<"subject">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "general_information"): XrmBase.PageTab<Tabs.Generalinformation>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface SalesLiterature extends XrmBase.PageBase<SalesLiterature.Attributes, SalesLiterature.Tabs, SalesLiterature.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "subjectid"): XrmBase.LookupAttribute<"subject">;
        getAttribute(attributeName: "literaturetypecode"): XrmBase.OptionSetAttribute<salesliterature_literaturetypecode>;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "subjectid"): XrmBase.LookupControl<"subject">;
        getControl(controlName: "literaturetypecode"): XrmBase.OptionSetControl<salesliterature_literaturetypecode>;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "SalesAttachments"): XrmBase.SubGridControl<"salesliteratureitem">;
        getControl(controlName: "Products"): XrmBase.SubGridControl<"product">;
        getControl(controlName: "Competitors"): XrmBase.SubGridControl<"competitor">;
        getControl(controlName: string): undefined;
    }
}
