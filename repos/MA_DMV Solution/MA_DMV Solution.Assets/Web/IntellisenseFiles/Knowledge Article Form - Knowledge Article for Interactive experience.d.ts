declare namespace Form.knowledgearticle.Main {
    namespace KnowledgeArticleForInteractiveExperience {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "Knowledge Information"): XrmBase.PageSection;
                get(name: "Content"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Summary extends XrmBase.SectionCollectionBase {
                get(name: "Portal Settings"): XrmBase.PageSection;
                get(name: "Publish Settings"): XrmBase.PageSection;
                get(name: "Timeline"): XrmBase.PageSection;
                get(name: "ref_pan_Related"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Analytics extends XrmBase.SectionCollectionBase {
                get(name: "Views"): XrmBase.PageSection;
                get(name: "Feedback"): XrmBase.PageSection;
                get(name: "Cases"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "articlepublicnumber"): XrmBase.StringAttribute;
            get(name: "content"): XrmBase.StringAttribute;
            get(name: "createdby"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "createdon"): XrmBase.DateAttribute;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "expirationdate"): XrmBase.DateAttribute;
            get(name: "isinternal"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "keywords"): XrmBase.StringAttribute;
            get(name: "knowledgearticleviews"): XrmBase.NumberAttribute;
            get(name: "languagelocaleid"): XrmBase.LookupAttribute<"languagelocale">;
            get(name: "majorversionnumber"): XrmBase.NumberAttribute;
            get(name: "minorversionnumber"): XrmBase.NumberAttribute;
            get(name: "modifiedby"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "modifiedon"): XrmBase.DateAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "parentarticlecontentid"): XrmBase.LookupAttribute<"knowledgearticle">;
            get(name: "primaryauthorid"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "publishon"): XrmBase.DateAttribute;
            get(name: "rating"): XrmBase.NumberAttribute;
            get(name: "rootarticleid"): XrmBase.LookupAttribute<"knowledgearticle">;
            get(name: "statuscode"): XrmBase.OptionSetAttribute<knowledgearticle_statuscode>;
            get(name: "subjectid"): XrmBase.LookupAttribute<"subject">;
            get(name: "title"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "articlepublicnumber"): XrmBase.StringControl;
            get(name: "AssociatedProductsGrid"): XrmBase.BaseControl;
            get(name: "content"): XrmBase.BaseControl;
            get(name: "creadedon"): XrmBase.DateControl;
            get(name: "createdname"): XrmBase.LookupControl<"systemuser">;
            get(name: "description"): XrmBase.StringControl;
            get(name: "expirationdate"): XrmBase.DateControl;
            get(name: "Feedback"): XrmBase.SubGridControl<"feedback">;
            get(name: "header_majorversionnumber"): XrmBase.NumberControl;
            get(name: "header_minorversionnumber"): XrmBase.NumberControl;
            get(name: "isinternal"): XrmBase.OptionSetControl<any>;
            get(name: "keywords"): XrmBase.StringControl;
            get(name: "knowledgearticleviews"): XrmBase.NumberControl;
            get(name: "KnowledgearticleviewsGrid"): XrmBase.SubGridControl<"knowledgearticleviews">;
            get(name: "languagelocaleid"): XrmBase.LookupControl<"languagelocale">;
            get(name: "modifiedname"): XrmBase.LookupControl<"systemuser">;
            get(name: "modifiedon"): XrmBase.DateControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "primaryauthorid"): XrmBase.LookupControl<"systemuser">;
            get(name: "publishon"): XrmBase.DateControl;
            get(name: "rating"): XrmBase.NumberControl;
            get(name: "relatedarticlequickform"): XrmBase.BaseControl;
            get(name: "RelatedCasesGrid"): XrmBase.SubGridControl<"knowledgearticleincident">;
            get(name: "RelatedCategoriesGrid"): XrmBase.BaseControl;
            get(name: "RelatedTranslationsGrid"): XrmBase.BaseControl;
            get(name: "relatedversionsquickform"): XrmBase.BaseControl;
            get(name: "statuscode"): XrmBase.OptionSetControl<knowledgearticle_statuscode>;
            get(name: "subjectid"): XrmBase.LookupControl<"subject">;
            get(name: "title"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "general"): XrmBase.PageTab<Tabs.General>;
            get(name: "summary"): XrmBase.PageTab<Tabs.Summary>;
            get(name: "analytics"): XrmBase.PageTab<Tabs.Analytics>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface KnowledgeArticleForInteractiveExperience extends XrmBase.PageBase<KnowledgeArticleForInteractiveExperience.Attributes, KnowledgeArticleForInteractiveExperience.Tabs, KnowledgeArticleForInteractiveExperience.Controls> {
        getAttribute(attributeName: "title"): XrmBase.StringAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "keywords"): XrmBase.StringAttribute;
        getAttribute(attributeName: "content"): XrmBase.StringAttribute;
        getAttribute(attributeName: "isinternal"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "statuscode"): XrmBase.OptionSetAttribute<knowledgearticle_statuscode>;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "articlepublicnumber"): XrmBase.StringAttribute;
        getAttribute(attributeName: "primaryauthorid"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "languagelocaleid"): XrmBase.LookupAttribute<"languagelocale">;
        getAttribute(attributeName: "majorversionnumber"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "minorversionnumber"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "createdby"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "createdon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "modifiedby"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "modifiedon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "subjectid"): XrmBase.LookupAttribute<"subject">;
        getAttribute(attributeName: "publishon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "expirationdate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "parentarticlecontentid"): XrmBase.LookupAttribute<"knowledgearticle">;
        getAttribute(attributeName: "rootarticleid"): XrmBase.LookupAttribute<"knowledgearticle">;
        getAttribute(attributeName: "knowledgearticleviews"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "rating"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "title"): XrmBase.StringControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "keywords"): XrmBase.StringControl;
        getControl(controlName: "content"): XrmBase.BaseControl;
        getControl(controlName: "isinternal"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "statuscode"): XrmBase.OptionSetControl<knowledgearticle_statuscode>;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "articlepublicnumber"): XrmBase.StringControl;
        getControl(controlName: "primaryauthorid"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "languagelocaleid"): XrmBase.LookupControl<"languagelocale">;
        getControl(controlName: "header_majorversionnumber"): XrmBase.NumberControl;
        getControl(controlName: "header_minorversionnumber"): XrmBase.NumberControl;
        getControl(controlName: "createdname"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "creadedon"): XrmBase.DateControl;
        getControl(controlName: "modifiedname"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "modifiedon"): XrmBase.DateControl;
        getControl(controlName: "subjectid"): XrmBase.LookupControl<"subject">;
        getControl(controlName: "publishon"): XrmBase.DateControl;
        getControl(controlName: "expirationdate"): XrmBase.DateControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "relatedversionsquickform"): XrmBase.BaseControl;
        getControl(controlName: "RelatedTranslationsGrid"): XrmBase.BaseControl;
        getControl(controlName: "RelatedCategoriesGrid"): XrmBase.BaseControl;
        getControl(controlName: "relatedarticlequickform"): XrmBase.BaseControl;
        getControl(controlName: "AssociatedProductsGrid"): XrmBase.BaseControl;
        getControl(controlName: "knowledgearticleviews"): XrmBase.NumberControl;
        getControl(controlName: "KnowledgearticleviewsGrid"): XrmBase.SubGridControl<"knowledgearticleviews">;
        getControl(controlName: "rating"): XrmBase.NumberControl;
        getControl(controlName: "Feedback"): XrmBase.SubGridControl<"feedback">;
        getControl(controlName: "RelatedCasesGrid"): XrmBase.SubGridControl<"knowledgearticleincident">;
        getControl(controlName: string): undefined;
    }
}
