declare namespace Form.salesliteratureitem.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "document information"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "abstract"): XrmBase.StringAttribute;
            get(name: "authorname"): XrmBase.StringAttribute;
            get(name: "documentbody"): XrmBase.StringAttribute;
            get(name: "filename"): XrmBase.StringAttribute;
            get(name: "filesize"): XrmBase.NumberAttribute;
            get(name: "keywords"): XrmBase.StringAttribute;
            get(name: "mimetype"): XrmBase.StringAttribute;
            get(name: "mode"): XrmBase.StringAttribute;
            get(name: "salesliteratureid"): XrmBase.LookupAttribute<"salesliterature">;
            get(name: "salesliteratureitemid"): any;
            get(name: "title"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "abstract"): XrmBase.StringControl;
            get(name: "authorname"): XrmBase.StringControl;
            get(name: "documentbody"): XrmBase.BaseControl;
            get(name: "filename"): XrmBase.BaseControl;
            get(name: "filesize"): XrmBase.BaseControl;
            get(name: "keywords"): XrmBase.StringControl;
            get(name: "mimetype"): XrmBase.BaseControl;
            get(name: "mode"): XrmBase.BaseControl;
            get(name: "salesliteratureid"): XrmBase.LookupControl<"salesliterature">;
            get(name: "salesliteratureitemid"): XrmBase.BaseControl;
            get(name: "title"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "general"): XrmBase.PageTab<Tabs.General>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "title"): XrmBase.StringAttribute;
        getAttribute(attributeName: "authorname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "keywords"): XrmBase.StringAttribute;
        getAttribute(attributeName: "abstract"): XrmBase.StringAttribute;
        getAttribute(attributeName: "salesliteratureid"): XrmBase.LookupAttribute<"salesliterature">;
        getAttribute(attributeName: "filename"): XrmBase.StringAttribute;
        getAttribute(attributeName: "mode"): XrmBase.StringAttribute;
        getAttribute(attributeName: "mimetype"): XrmBase.StringAttribute;
        getAttribute(attributeName: "filesize"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "documentbody"): XrmBase.StringAttribute;
        getAttribute(attributeName: "salesliteratureitemid"): any;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "title"): XrmBase.StringControl;
        getControl(controlName: "authorname"): XrmBase.StringControl;
        getControl(controlName: "keywords"): XrmBase.StringControl;
        getControl(controlName: "abstract"): XrmBase.StringControl;
        getControl(controlName: "salesliteratureid"): XrmBase.LookupControl<"salesliterature">;
        getControl(controlName: "documentbody"): XrmBase.BaseControl;
        getControl(controlName: "filename"): XrmBase.BaseControl;
        getControl(controlName: "mode"): XrmBase.BaseControl;
        getControl(controlName: "mimetype"): XrmBase.BaseControl;
        getControl(controlName: "filesize"): XrmBase.BaseControl;
        getControl(controlName: "salesliteratureitemid"): XrmBase.BaseControl;
        getControl(controlName: string): undefined;
    }
}
