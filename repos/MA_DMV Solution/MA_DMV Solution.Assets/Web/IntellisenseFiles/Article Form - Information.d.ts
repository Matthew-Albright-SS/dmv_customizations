declare namespace Form.kbarticle.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "article information"): XrmBase.PageSection;
                get(name: "Article Keywords"): XrmBase.PageSection;
                get(name: "kb-article description"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Notes extends XrmBase.SectionCollectionBase {
                get(name: "notes"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface b641b7d4753cc99a5978977e6912e856 extends XrmBase.SectionCollectionBase {
                get(name: "{493d7206-6935-e73d-75cc-44dc53d021e8}"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "articlexml"): XrmBase.StringAttribute;
            get(name: "keywords"): XrmBase.StringAttribute;
            get(name: "languagecode"): XrmBase.NumberAttribute;
            get(name: "subjectid"): XrmBase.LookupAttribute<"subject">;
            get(name: "title"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "ArticleComments"): XrmBase.SubGridControl<"kbarticlecomment">;
            get(name: "articlexmlcontrol"): XrmBase.BaseControl;
            get(name: "keywords"): XrmBase.StringControl;
            get(name: "languagecode"): XrmBase.BaseControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "subjectid"): XrmBase.LookupControl<"subject">;
            get(name: "title"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "general"): XrmBase.PageTab<Tabs.General>;
            get(name: "notes"): XrmBase.PageTab<Tabs.Notes>;
            get(name: "{b641b7d4-753c-c99a-5978-977e6912e856}"): XrmBase.PageTab<Tabs.b641b7d4753cc99a5978977e6912e856>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "title"): XrmBase.StringAttribute;
        getAttribute(attributeName: "subjectid"): XrmBase.LookupAttribute<"subject">;
        getAttribute(attributeName: "keywords"): XrmBase.StringAttribute;
        getAttribute(attributeName: "languagecode"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "articlexml"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "title"): XrmBase.StringControl;
        getControl(controlName: "subjectid"): XrmBase.LookupControl<"subject">;
        getControl(controlName: "keywords"): XrmBase.StringControl;
        getControl(controlName: "languagecode"): XrmBase.BaseControl;
        getControl(controlName: "articlexmlcontrol"): XrmBase.BaseControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "ArticleComments"): XrmBase.SubGridControl<"kbarticlecomment">;
        getControl(controlName: string): undefined;
    }
}
