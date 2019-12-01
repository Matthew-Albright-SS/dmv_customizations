declare namespace Form.plugintracelog.Main {
    namespace Information {
        namespace Tabs {
            interface Configuration extends XrmBase.SectionCollectionBase {
                get(name: "Configuration_General"): XrmBase.PageSection;
                get(name: "Configuration_Context"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Execution extends XrmBase.SectionCollectionBase {
                get(name: "Execution_Performance"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "configuration"): XrmBase.StringAttribute;
            get(name: "correlationid"): any;
            get(name: "depth"): XrmBase.NumberAttribute;
            get(name: "exceptiondetails"): XrmBase.StringAttribute;
            get(name: "issystemcreated"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "messageblock"): XrmBase.StringAttribute;
            get(name: "messagename"): XrmBase.StringAttribute;
            get(name: "mode"): XrmBase.OptionSetAttribute<plugintracelog_mode>;
            get(name: "operationtype"): XrmBase.OptionSetAttribute<plugintracelog_operationtype>;
            get(name: "performanceexecutionduration"): XrmBase.NumberAttribute;
            get(name: "performanceexecutionstarttime"): XrmBase.DateAttribute;
            get(name: "persistencekey"): any;
            get(name: "pluginstepid"): any;
            get(name: "primaryentity"): XrmBase.StringAttribute;
            get(name: "requestid"): any;
            get(name: "secureconfiguration"): XrmBase.StringAttribute;
            get(name: "typename"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "configuration"): XrmBase.StringControl;
            get(name: "correlationid"): XrmBase.BaseControl;
            get(name: "depth"): XrmBase.NumberControl;
            get(name: "exceptiondetails"): XrmBase.StringControl;
            get(name: "issystemcreated"): XrmBase.OptionSetControl<any>;
            get(name: "messageblock"): XrmBase.StringControl;
            get(name: "messagename"): XrmBase.StringControl;
            get(name: "mode"): XrmBase.OptionSetControl<plugintracelog_mode>;
            get(name: "operationtype"): XrmBase.OptionSetControl<plugintracelog_operationtype>;
            get(name: "performanceexecutionduration"): XrmBase.NumberControl;
            get(name: "performanceexecutionstarttime"): XrmBase.DateControl;
            get(name: "persistencekey"): XrmBase.BaseControl;
            get(name: "pluginstepid"): XrmBase.BaseControl;
            get(name: "primaryentity"): XrmBase.StringControl;
            get(name: "requestid"): XrmBase.BaseControl;
            get(name: "secureconfiguration"): XrmBase.StringControl;
            get(name: "typename"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "Configuration"): XrmBase.PageTab<Tabs.Configuration>;
            get(name: "Execution"): XrmBase.PageTab<Tabs.Execution>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "issystemcreated"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "typename"): XrmBase.StringAttribute;
        getAttribute(attributeName: "messagename"): XrmBase.StringAttribute;
        getAttribute(attributeName: "primaryentity"): XrmBase.StringAttribute;
        getAttribute(attributeName: "configuration"): XrmBase.StringAttribute;
        getAttribute(attributeName: "secureconfiguration"): XrmBase.StringAttribute;
        getAttribute(attributeName: "persistencekey"): any;
        getAttribute(attributeName: "operationtype"): XrmBase.OptionSetAttribute<plugintracelog_operationtype>;
        getAttribute(attributeName: "pluginstepid"): any;
        getAttribute(attributeName: "depth"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "mode"): XrmBase.OptionSetAttribute<plugintracelog_mode>;
        getAttribute(attributeName: "correlationid"): any;
        getAttribute(attributeName: "requestid"): any;
        getAttribute(attributeName: "performanceexecutionstarttime"): XrmBase.DateAttribute;
        getAttribute(attributeName: "performanceexecutionduration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "messageblock"): XrmBase.StringAttribute;
        getAttribute(attributeName: "exceptiondetails"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "issystemcreated"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "typename"): XrmBase.StringControl;
        getControl(controlName: "messagename"): XrmBase.StringControl;
        getControl(controlName: "primaryentity"): XrmBase.StringControl;
        getControl(controlName: "configuration"): XrmBase.StringControl;
        getControl(controlName: "secureconfiguration"): XrmBase.StringControl;
        getControl(controlName: "persistencekey"): XrmBase.BaseControl;
        getControl(controlName: "operationtype"): XrmBase.OptionSetControl<plugintracelog_operationtype>;
        getControl(controlName: "pluginstepid"): XrmBase.BaseControl;
        getControl(controlName: "depth"): XrmBase.NumberControl;
        getControl(controlName: "mode"): XrmBase.OptionSetControl<plugintracelog_mode>;
        getControl(controlName: "correlationid"): XrmBase.BaseControl;
        getControl(controlName: "requestid"): XrmBase.BaseControl;
        getControl(controlName: "performanceexecutionstarttime"): XrmBase.DateControl;
        getControl(controlName: "performanceexecutionduration"): XrmBase.NumberControl;
        getControl(controlName: "messageblock"): XrmBase.StringControl;
        getControl(controlName: "exceptiondetails"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
