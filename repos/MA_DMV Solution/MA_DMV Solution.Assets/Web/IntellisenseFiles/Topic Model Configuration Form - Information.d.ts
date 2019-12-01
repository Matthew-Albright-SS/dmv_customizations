declare namespace Form.topicmodelconfiguration.Main {
    namespace Information {
        namespace Tabs {
            interface _29b1cfcba9924bb4b0e04a95c5d252b2 extends XrmBase.SectionCollectionBase {
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface c9b62e5d9925479d87badbe9fa64b47b extends XrmBase.SectionCollectionBase {
                get(name: "{5e0987a5-6dec-4225-bbb4-7cc1f9dd8347}"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "datafilter"): XrmBase.StringAttribute;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "timefilter"): XrmBase.OptionSetAttribute<topicmodelconfiguration_timefilter>;
            get(name: "timefilterduration"): XrmBase.NumberAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "datafilter"): XrmBase.BaseControl;
            get(name: "description"): XrmBase.StringControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "textanalyticsentitymappings"): XrmBase.SubGridControl<"textanalyticsentitymapping">;
            get(name: "timefilter"): XrmBase.OptionSetControl<topicmodelconfiguration_timefilter>;
            get(name: "timefilterduration"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{29b1cfcb-a992-4bb4-b0e0-4a95c5d252b2}"): XrmBase.PageTab<Tabs._29b1cfcba9924bb4b0e04a95c5d252b2>;
            get(name: "{c9b62e5d-9925-479d-87ba-dbe9fa64b47b}"): XrmBase.PageTab<Tabs.c9b62e5d9925479d87badbe9fa64b47b>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "datafilter"): XrmBase.StringAttribute;
        getAttribute(attributeName: "timefilter"): XrmBase.OptionSetAttribute<topicmodelconfiguration_timefilter>;
        getAttribute(attributeName: "timefilterduration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "datafilter"): XrmBase.BaseControl;
        getControl(controlName: "timefilter"): XrmBase.OptionSetControl<topicmodelconfiguration_timefilter>;
        getControl(controlName: "timefilterduration"): XrmBase.StringControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "textanalyticsentitymappings"): XrmBase.SubGridControl<"textanalyticsentitymapping">;
        getControl(controlName: string): undefined;
    }
}
