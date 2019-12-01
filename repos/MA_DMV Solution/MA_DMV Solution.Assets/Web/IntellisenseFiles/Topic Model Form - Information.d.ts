declare namespace Form.topicmodel.Main {
    namespace Information {
        namespace Tabs {
            interface _27d0b9239d79470d924a80c3367d5556 extends XrmBase.SectionCollectionBase {
                get(name: "{2af8ca63-6895-463a-b9e4-f22012ab5b84}"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface _5CC8F085E24847E6956C383F40B24D2B extends XrmBase.SectionCollectionBase {
                get(name: "{5BF12C70-CEAD-4BCD-BD01-5C5FC0D28E78}"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "buildrecurrence"): XrmBase.StringAttribute;
            get(name: "configurationused"): XrmBase.LookupAttribute<"topicmodelconfiguration">;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "maxtopics"): XrmBase.NumberAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "sourceentity"): XrmBase.OptionSetAttribute<topicmodel_sourceentity>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "buildrecurrence"): XrmBase.StringControl;
            get(name: "configurationused"): XrmBase.LookupControl<"topicmodelconfiguration">;
            get(name: "description"): XrmBase.StringControl;
            get(name: "maxtopics"): XrmBase.NumberControl;
            get(name: "modelconfigurations"): XrmBase.SubGridControl<"topicmodelconfiguration">;
            get(name: "name"): XrmBase.StringControl;
            get(name: "sourceentity"): XrmBase.OptionSetControl<topicmodel_sourceentity>;
            get(name: "topicmodelexecutionhistory"): XrmBase.SubGridControl<"topicmodelexecutionhistory">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{27d0b923-9d79-470d-924a-80c3367d5556}"): XrmBase.PageTab<Tabs._27d0b9239d79470d924a80c3367d5556>;
            get(name: "{5CC8F085-E248-47E6-956C-383F40B24D2B}"): XrmBase.PageTab<Tabs._5CC8F085E24847E6956C383F40B24D2B>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "maxtopics"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "sourceentity"): XrmBase.OptionSetAttribute<topicmodel_sourceentity>;
        getAttribute(attributeName: "configurationused"): XrmBase.LookupAttribute<"topicmodelconfiguration">;
        getAttribute(attributeName: "buildrecurrence"): XrmBase.StringAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "maxtopics"): XrmBase.NumberControl;
        getControl(controlName: "sourceentity"): XrmBase.OptionSetControl<topicmodel_sourceentity>;
        getControl(controlName: "configurationused"): XrmBase.LookupControl<"topicmodelconfiguration">;
        getControl(controlName: "buildrecurrence"): XrmBase.StringControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "modelconfigurations"): XrmBase.SubGridControl<"topicmodelconfiguration">;
        getControl(controlName: "topicmodelexecutionhistory"): XrmBase.SubGridControl<"topicmodelexecutionhistory">;
        getControl(controlName: string): undefined;
    }
}
