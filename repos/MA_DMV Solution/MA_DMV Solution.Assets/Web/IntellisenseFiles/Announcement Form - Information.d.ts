declare namespace Form.businessunitnewsarticle.Main {
    namespace Information {
        namespace Tabs {
            interface Announcement extends XrmBase.SectionCollectionBase {
                get(name: "announcement information"): XrmBase.PageSection;
                get(name: "additional settings"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "activeuntil"): XrmBase.DateAttribute;
            get(name: "articletitle"): XrmBase.StringAttribute;
            get(name: "articleurl"): XrmBase.StringAttribute;
            get(name: "newsarticle"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "activeuntil"): XrmBase.DateControl;
            get(name: "articletitle"): XrmBase.StringControl;
            get(name: "articleurl"): XrmBase.StringControl;
            get(name: "newsarticle"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "announcement"): XrmBase.PageTab<Tabs.Announcement>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "articletitle"): XrmBase.StringAttribute;
        getAttribute(attributeName: "newsarticle"): XrmBase.StringAttribute;
        getAttribute(attributeName: "articleurl"): XrmBase.StringAttribute;
        getAttribute(attributeName: "activeuntil"): XrmBase.DateAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "articletitle"): XrmBase.StringControl;
        getControl(controlName: "newsarticle"): XrmBase.StringControl;
        getControl(controlName: "articleurl"): XrmBase.StringControl;
        getControl(controlName: "activeuntil"): XrmBase.DateControl;
        getControl(controlName: string): undefined;
    }
}
