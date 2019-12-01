declare namespace Form.textanalyticsentitymapping.Main {
    namespace Information {
        namespace Tabs {
            interface c01c55a7b832422fb7684bda9674e00f extends XrmBase.SectionCollectionBase {
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "entitypicklist"): XrmBase.OptionSetAttribute<textanalyticsentitymapping_entity>;
            get(name: "fieldpicklist"): XrmBase.OptionSetAttribute<textanalyticsentitymapping_fields>;
            get(name: "istextmatchmapping"): XrmBase.OptionSetAttribute<boolean>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "entitypicklist"): XrmBase.OptionSetControl<textanalyticsentitymapping_entity>;
            get(name: "entitypicklist_UC"): XrmBase.BaseControl;
            get(name: "fieldpicklist"): XrmBase.OptionSetControl<textanalyticsentitymapping_fields>;
            get(name: "fieldpicklist_UC"): XrmBase.BaseControl;
            get(name: "istextmatchmapping"): XrmBase.OptionSetControl<any>;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{c01c55a7-b832-422f-b768-4bda9674e00f}"): XrmBase.PageTab<Tabs.c01c55a7b832422fb7684bda9674e00f>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "istextmatchmapping"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "entitypicklist"): XrmBase.OptionSetAttribute<textanalyticsentitymapping_entity>;
        getAttribute(attributeName: "fieldpicklist"): XrmBase.OptionSetAttribute<textanalyticsentitymapping_fields>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "istextmatchmapping"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "entitypicklist"): XrmBase.OptionSetControl<textanalyticsentitymapping_entity>;
        getControl(controlName: "entitypicklist_UC"): XrmBase.BaseControl;
        getControl(controlName: "fieldpicklist"): XrmBase.OptionSetControl<textanalyticsentitymapping_fields>;
        getControl(controlName: "fieldpicklist_UC"): XrmBase.BaseControl;
        getControl(controlName: string): undefined;
    }
}
