declare namespace Form.list.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "marketing list information"): XrmBase.PageSection;
                get(name: "description"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Notes extends XrmBase.SectionCollectionBase {
                get(name: "notes"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "cost"): XrmBase.NumberAttribute;
            get(name: "createdfromcode"): XrmBase.OptionSetAttribute<list_createdfromcode>;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "lastusedon"): XrmBase.DateAttribute;
            get(name: "listname"): XrmBase.StringAttribute;
            get(name: "lockstatus"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "modifiedon"): XrmBase.DateAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "purpose"): XrmBase.StringAttribute;
            get(name: "source"): XrmBase.StringAttribute;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: "type"): XrmBase.OptionSetAttribute<boolean>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "cost"): XrmBase.NumberControl;
            get(name: "createdfromcode"): XrmBase.OptionSetControl<list_createdfromcode>;
            get(name: "description"): XrmBase.StringControl;
            get(name: "lastusedon"): XrmBase.DateControl;
            get(name: "listname"): XrmBase.StringControl;
            get(name: "lockstatus"): XrmBase.OptionSetControl<any>;
            get(name: "modifiedon"): XrmBase.DateControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "purpose"): XrmBase.StringControl;
            get(name: "source"): XrmBase.StringControl;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: "type"): XrmBase.OptionSetControl<any>;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "general"): XrmBase.PageTab<Tabs.General>;
            get(name: "notes"): XrmBase.PageTab<Tabs.Notes>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "listname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "createdfromcode"): XrmBase.OptionSetAttribute<list_createdfromcode>;
        getAttribute(attributeName: "type"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "purpose"): XrmBase.StringAttribute;
        getAttribute(attributeName: "source"): XrmBase.StringAttribute;
        getAttribute(attributeName: "modifiedon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "cost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "lastusedon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "lockstatus"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "listname"): XrmBase.StringControl;
        getControl(controlName: "createdfromcode"): XrmBase.OptionSetControl<list_createdfromcode>;
        getControl(controlName: "type"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "purpose"): XrmBase.StringControl;
        getControl(controlName: "source"): XrmBase.StringControl;
        getControl(controlName: "modifiedon"): XrmBase.DateControl;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "cost"): XrmBase.NumberControl;
        getControl(controlName: "lastusedon"): XrmBase.DateControl;
        getControl(controlName: "lockstatus"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
