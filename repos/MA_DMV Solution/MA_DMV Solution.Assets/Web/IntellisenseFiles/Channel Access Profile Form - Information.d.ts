declare namespace Form.channelaccessprofile.Main {
    namespace Information {
        namespace Tabs {
            interface EntityPermissions extends XrmBase.SectionCollectionBase {
                get(name: "tab_2_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface ChannelAccess extends XrmBase.SectionCollectionBase {
                get(name: "tab_3_section_1"): XrmBase.PageSection;
                get(name: "tab_3_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface KnowledgeSettings extends XrmBase.SectionCollectionBase {
                get(name: "tab_4_section_1"): XrmBase.PageSection;
                get(name: "tab_4_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Note extends XrmBase.SectionCollectionBase {
                get(name: "notes"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "emailaccess"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "facebookaccess"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "phoneaccess"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "rateknowledgearticles"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "submitfeedback"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "twitteraccess"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "viewarticlerating"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "viewknowledgearticles"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "webaccess"): XrmBase.OptionSetAttribute<boolean>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "emailaccess"): XrmBase.OptionSetControl<any>;
            get(name: "facebookaccess"): XrmBase.OptionSetControl<any>;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "phoneaccess"): XrmBase.OptionSetControl<any>;
            get(name: "RateKnowledgeArticles"): XrmBase.OptionSetControl<any>;
            get(name: "Role_Control"): XrmBase.IFrameControl;
            get(name: "SubmitFeedback"): XrmBase.OptionSetControl<any>;
            get(name: "twitteraccess"): XrmBase.OptionSetControl<any>;
            get(name: "ViewArticleRating"): XrmBase.OptionSetControl<any>;
            get(name: "ViewKnowledgeArticles"): XrmBase.OptionSetControl<any>;
            get(name: "webaccess"): XrmBase.OptionSetControl<any>;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "EntityPermissions"): XrmBase.PageTab<Tabs.EntityPermissions>;
            get(name: "ChannelAccess"): XrmBase.PageTab<Tabs.ChannelAccess>;
            get(name: "KnowledgeSettings"): XrmBase.PageTab<Tabs.KnowledgeSettings>;
            get(name: "Note"): XrmBase.PageTab<Tabs.Note>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "phoneaccess"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "emailaccess"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "facebookaccess"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "webaccess"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "twitteraccess"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "viewknowledgearticles"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "rateknowledgearticles"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "viewarticlerating"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "submitfeedback"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "Role_Control"): XrmBase.IFrameControl;
        getControl(controlName: "phoneaccess"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "emailaccess"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "facebookaccess"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "webaccess"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "twitteraccess"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "ViewKnowledgeArticles"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "RateKnowledgeArticles"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "ViewArticleRating"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "SubmitFeedback"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
