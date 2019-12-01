declare namespace Form.bulkoperation.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "general"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "actualend"): XrmBase.DateAttribute;
            get(name: "actualstart"): XrmBase.DateAttribute;
            get(name: "bulkoperationnumber"): XrmBase.StringAttribute;
            get(name: "errornumber"): XrmBase.NumberAttribute;
            get(name: "failurecount"): XrmBase.NumberAttribute;
            get(name: "operationtypecode"): XrmBase.OptionSetAttribute<bulkoperation_operationtypecode>;
            get(name: "regardingobjectid"): XrmBase.LookupAttribute<"campaignactivity" | "list">;
            get(name: "statuscode"): XrmBase.OptionSetAttribute<bulkoperation_statuscode>;
            get(name: "subject"): XrmBase.StringAttribute;
            get(name: "successcount"): XrmBase.NumberAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "actualend"): XrmBase.DateControl;
            get(name: "actualstart"): XrmBase.DateControl;
            get(name: "bulkoperationnumber"): XrmBase.StringControl;
            get(name: "errornumber"): XrmBase.NumberControl;
            get(name: "failurecount"): XrmBase.NumberControl;
            get(name: "operationtypecode"): XrmBase.OptionSetControl<bulkoperation_operationtypecode>;
            get(name: "regardingobjectid"): XrmBase.LookupControl<"campaignactivity" | "list">;
            get(name: "statuscode"): XrmBase.OptionSetControl<bulkoperation_statuscode>;
            get(name: "subject"): XrmBase.StringControl;
            get(name: "successcount"): XrmBase.NumberControl;
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
        getAttribute(attributeName: "subject"): XrmBase.StringAttribute;
        getAttribute(attributeName: "bulkoperationnumber"): XrmBase.StringAttribute;
        getAttribute(attributeName: "actualstart"): XrmBase.DateAttribute;
        getAttribute(attributeName: "regardingobjectid"): XrmBase.LookupAttribute<"campaignactivity" | "list">;
        getAttribute(attributeName: "actualend"): XrmBase.DateAttribute;
        getAttribute(attributeName: "operationtypecode"): XrmBase.OptionSetAttribute<bulkoperation_operationtypecode>;
        getAttribute(attributeName: "successcount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "failurecount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "statuscode"): XrmBase.OptionSetAttribute<bulkoperation_statuscode>;
        getAttribute(attributeName: "errornumber"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "subject"): XrmBase.StringControl;
        getControl(controlName: "bulkoperationnumber"): XrmBase.StringControl;
        getControl(controlName: "actualstart"): XrmBase.DateControl;
        getControl(controlName: "regardingobjectid"): XrmBase.LookupControl<"campaignactivity" | "list">;
        getControl(controlName: "actualend"): XrmBase.DateControl;
        getControl(controlName: "operationtypecode"): XrmBase.OptionSetControl<bulkoperation_operationtypecode>;
        getControl(controlName: "successcount"): XrmBase.NumberControl;
        getControl(controlName: "failurecount"): XrmBase.NumberControl;
        getControl(controlName: "statuscode"): XrmBase.OptionSetControl<bulkoperation_statuscode>;
        getControl(controlName: "errornumber"): XrmBase.NumberControl;
        getControl(controlName: string): undefined;
    }
}
