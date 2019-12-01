declare namespace Form.knowledgebaserecord.Main {
    namespace KnowledgeBaseArticles {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "privateurl"): XrmBase.StringAttribute;
            get(name: "publicurl"): XrmBase.StringAttribute;
            get(name: "title"): XrmBase.StringAttribute;
            get(name: "uniqueid"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "privateurl"): XrmBase.StringControl;
            get(name: "publicurl"): XrmBase.StringControl;
            get(name: "title"): XrmBase.StringControl;
            get(name: "uniqueid"): XrmBase.StringControl;
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
    interface KnowledgeBaseArticles extends XrmBase.PageBase<KnowledgeBaseArticles.Attributes, KnowledgeBaseArticles.Tabs, KnowledgeBaseArticles.Controls> {
        getAttribute(attributeName: "uniqueid"): XrmBase.StringAttribute;
        getAttribute(attributeName: "title"): XrmBase.StringAttribute;
        getAttribute(attributeName: "privateurl"): XrmBase.StringAttribute;
        getAttribute(attributeName: "publicurl"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "uniqueid"): XrmBase.StringControl;
        getControl(controlName: "title"): XrmBase.StringControl;
        getControl(controlName: "privateurl"): XrmBase.StringControl;
        getControl(controlName: "publicurl"): XrmBase.StringControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
