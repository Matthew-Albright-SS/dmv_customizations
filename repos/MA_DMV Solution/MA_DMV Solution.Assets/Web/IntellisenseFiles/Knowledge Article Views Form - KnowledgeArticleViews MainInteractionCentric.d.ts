declare namespace Form.knowledgearticleviews.Main {
    namespace KnowledgeArticleViewsMainInteractionCentric {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "knowledgearticleview"): XrmBase.NumberAttribute;
            get(name: "location"): XrmBase.OptionSetAttribute<knowledgearticleviews_location>;
            get(name: "viewdate"): XrmBase.DateAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "knowledgearticleview"): XrmBase.NumberControl;
            get(name: "location"): XrmBase.OptionSetControl<knowledgearticleviews_location>;
            get(name: "viewdate"): XrmBase.DateControl;
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
    interface KnowledgeArticleViewsMainInteractionCentric extends XrmBase.PageBase<KnowledgeArticleViewsMainInteractionCentric.Attributes, KnowledgeArticleViewsMainInteractionCentric.Tabs, KnowledgeArticleViewsMainInteractionCentric.Controls> {
        getAttribute(attributeName: "viewdate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "location"): XrmBase.OptionSetAttribute<knowledgearticleviews_location>;
        getAttribute(attributeName: "knowledgearticleview"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "viewdate"): XrmBase.DateControl;
        getControl(controlName: "location"): XrmBase.OptionSetControl<knowledgearticleviews_location>;
        getControl(controlName: "knowledgearticleview"): XrmBase.NumberControl;
        getControl(controlName: string): undefined;
    }
}
