declare namespace Form.azureserviceconnection.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "connectioninfo"): XrmBase.PageSection;
                get(name: "connectiontestinfo"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "accountkey"): XrmBase.StringAttribute;
            get(name: "createdby"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "lastconnectionstatuscode"): XrmBase.OptionSetAttribute<azureserviceconnection_lastconnectionstatuscode>;
            get(name: "lastconnectiontime"): XrmBase.DateAttribute;
            get(name: "modifiedby"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "modifiedon"): XrmBase.DateAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "serviceuri"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "accountkey"): XrmBase.StringControl;
            get(name: "createdby"): XrmBase.LookupControl<"systemuser">;
            get(name: "description"): XrmBase.StringControl;
            get(name: "lastconnectionstatuscode"): XrmBase.OptionSetControl<azureserviceconnection_lastconnectionstatuscode>;
            get(name: "lastconnectiontime"): XrmBase.DateControl;
            get(name: "modifiedby"): XrmBase.LookupControl<"systemuser">;
            get(name: "modifiedon"): XrmBase.DateControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "serviceuri"): XrmBase.StringControl;
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
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "serviceuri"): XrmBase.StringAttribute;
        getAttribute(attributeName: "accountkey"): XrmBase.StringAttribute;
        getAttribute(attributeName: "createdby"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "modifiedby"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "modifiedon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "lastconnectionstatuscode"): XrmBase.OptionSetAttribute<azureserviceconnection_lastconnectionstatuscode>;
        getAttribute(attributeName: "lastconnectiontime"): XrmBase.DateAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "serviceuri"): XrmBase.StringControl;
        getControl(controlName: "accountkey"): XrmBase.StringControl;
        getControl(controlName: "createdby"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "modifiedby"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "modifiedon"): XrmBase.DateControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "lastconnectionstatuscode"): XrmBase.OptionSetControl<azureserviceconnection_lastconnectionstatuscode>;
        getControl(controlName: "lastconnectiontime"): XrmBase.DateControl;
        getControl(controlName: string): undefined;
    }
}
