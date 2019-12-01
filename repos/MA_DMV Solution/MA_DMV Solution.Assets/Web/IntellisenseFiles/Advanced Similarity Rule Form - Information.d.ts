declare namespace Form.advancedsimilarityrule.Main {
    namespace Information {
        namespace Tabs {
            interface _67e8b341a89a42079bcc4c1f9cc8b89d extends XrmBase.SectionCollectionBase {
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface _3D17A623BFEB49F983C4B5A02B96CAC0 extends XrmBase.SectionCollectionBase {
                get(name: "{0CBFC71F-6EFF-4583-9B38-7A9AE69C3AE1}"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "filterresultbystatus"): XrmBase.OptionSetAttribute<advancedsimilarityrule_filterresultbystatus>;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "noisekeyphraseslist"): XrmBase.StringAttribute;
            get(name: "sourceentity"): XrmBase.OptionSetAttribute<advancedsimilarityrule_sourceentity>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "description"): XrmBase.StringControl;
            get(name: "filterresultbystatus"): XrmBase.OptionSetControl<advancedsimilarityrule_filterresultbystatus>;
            get(name: "filterresultbystatus_UC"): XrmBase.BaseControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "noisekeyphraseslist"): XrmBase.StringControl;
            get(name: "sourceentity"): XrmBase.OptionSetControl<advancedsimilarityrule_sourceentity>;
            get(name: "sourceentity_UC"): XrmBase.BaseControl;
            get(name: "textanalyticsentitymappings"): XrmBase.SubGridControl<"textanalyticsentitymapping">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{67e8b341-a89a-4207-9bcc-4c1f9cc8b89d}"): XrmBase.PageTab<Tabs._67e8b341a89a42079bcc4c1f9cc8b89d>;
            get(name: "{3D17A623-BFEB-49F9-83C4-B5A02B96CAC0}"): XrmBase.PageTab<Tabs._3D17A623BFEB49F983C4B5A02B96CAC0>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "sourceentity"): XrmBase.OptionSetAttribute<advancedsimilarityrule_sourceentity>;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "noisekeyphraseslist"): XrmBase.StringAttribute;
        getAttribute(attributeName: "filterresultbystatus"): XrmBase.OptionSetAttribute<advancedsimilarityrule_filterresultbystatus>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "sourceentity"): XrmBase.OptionSetControl<advancedsimilarityrule_sourceentity>;
        getControl(controlName: "sourceentity_UC"): XrmBase.BaseControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "noisekeyphraseslist"): XrmBase.StringControl;
        getControl(controlName: "filterresultbystatus"): XrmBase.OptionSetControl<advancedsimilarityrule_filterresultbystatus>;
        getControl(controlName: "filterresultbystatus_UC"): XrmBase.BaseControl;
        getControl(controlName: "textanalyticsentitymappings"): XrmBase.SubGridControl<"textanalyticsentitymapping">;
        getControl(controlName: string): undefined;
    }
}
