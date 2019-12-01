declare namespace Form.knowledgesearchmodel.Main {
    namespace Information {
        namespace Tabs {
            interface _5b6ae5e58f544363b90648722f438b65 extends XrmBase.SectionCollectionBase {
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface _6a04c119906c4d8d84d6a470e79cbfcc extends XrmBase.SectionCollectionBase {
                get(name: "{87c466a2-37f3-4cde-a484-c6c75eff544d}"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "maxkeywords"): XrmBase.NumberAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "sourceentity"): XrmBase.OptionSetAttribute<knowledgesearchmodel_sourceentity>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "description"): XrmBase.StringControl;
            get(name: "maxkeywords"): XrmBase.NumberControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "sourceentity"): XrmBase.OptionSetControl<knowledgesearchmodel_sourceentity>;
            get(name: "textanalyticsentitymappings"): XrmBase.SubGridControl<"textanalyticsentitymapping">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{5b6ae5e5-8f54-4363-b906-48722f438b65}"): XrmBase.PageTab<Tabs._5b6ae5e58f544363b90648722f438b65>;
            get(name: "{6a04c119-906c-4d8d-84d6-a470e79cbfcc}"): XrmBase.PageTab<Tabs._6a04c119906c4d8d84d6a470e79cbfcc>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "sourceentity"): XrmBase.OptionSetAttribute<knowledgesearchmodel_sourceentity>;
        getAttribute(attributeName: "maxkeywords"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "sourceentity"): XrmBase.OptionSetControl<knowledgesearchmodel_sourceentity>;
        getControl(controlName: "maxkeywords"): XrmBase.NumberControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "textanalyticsentitymappings"): XrmBase.SubGridControl<"textanalyticsentitymapping">;
        getControl(controlName: string): undefined;
    }
}
