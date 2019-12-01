declare namespace Form.knowledgearticleincident.Main {
    namespace KnowledgeArticleIncident {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "incidentid"): XrmBase.LookupAttribute<"incident">;
            get(name: "issenttocustomer"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "knowledgeusage"): XrmBase.OptionSetAttribute<knowledgearticleincident_knowledgeusage>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "incidentid"): XrmBase.LookupControl<"incident">;
            get(name: "issenttocustomer"): XrmBase.OptionSetControl<any>;
            get(name: "knowledgeusage"): XrmBase.OptionSetControl<knowledgearticleincident_knowledgeusage>;
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
    interface KnowledgeArticleIncident extends XrmBase.PageBase<KnowledgeArticleIncident.Attributes, KnowledgeArticleIncident.Tabs, KnowledgeArticleIncident.Controls> {
        getAttribute(attributeName: "incidentid"): XrmBase.LookupAttribute<"incident">;
        getAttribute(attributeName: "knowledgeusage"): XrmBase.OptionSetAttribute<knowledgearticleincident_knowledgeusage>;
        getAttribute(attributeName: "issenttocustomer"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "incidentid"): XrmBase.LookupControl<"incident">;
        getControl(controlName: "knowledgeusage"): XrmBase.OptionSetControl<knowledgearticleincident_knowledgeusage>;
        getControl(controlName: "issenttocustomer"): XrmBase.OptionSetControl<any>;
        getControl(controlName: string): undefined;
    }
}
