declare namespace Form.campaignactivity.Main {
    namespace Information {
        namespace Tabs {
            interface CampaignActivity extends XrmBase.SectionCollectionBase {
                get(name: "details"): XrmBase.PageSection;
                get(name: "description"): XrmBase.PageSection;
                get(name: "administration"): XrmBase.PageSection;
                get(name: "anti spam"): XrmBase.PageSection;
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
            get(name: "actualcost"): XrmBase.NumberAttribute;
            get(name: "actualend"): XrmBase.DateAttribute;
            get(name: "actualstart"): XrmBase.DateAttribute;
            get(name: "budgetedcost"): XrmBase.NumberAttribute;
            get(name: "channeltypecode"): XrmBase.OptionSetAttribute<campaignactivity_channeltypecode>;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "excludeifcontactedinxdays"): XrmBase.NumberAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "partners"): XrmBase.LookupAttribute<"account" | "contact">;
            get(name: "prioritycode"): XrmBase.OptionSetAttribute<campaignactivity_prioritycode>;
            get(name: "regardingobjectid"): XrmBase.LookupAttribute<"campaign">;
            get(name: "scheduledend"): XrmBase.DateAttribute;
            get(name: "scheduledstart"): XrmBase.DateAttribute;
            get(name: "statuscode"): XrmBase.OptionSetAttribute<campaignactivity_statuscode>;
            get(name: "subject"): XrmBase.StringAttribute;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: "typecode"): XrmBase.OptionSetAttribute<campaignactivity_typecode>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "actualcost"): XrmBase.NumberControl;
            get(name: "actualend"): XrmBase.DateControl;
            get(name: "actualstart"): XrmBase.DateControl;
            get(name: "budgetedcost"): XrmBase.NumberControl;
            get(name: "channeltypecode"): XrmBase.OptionSetControl<campaignactivity_channeltypecode>;
            get(name: "description"): XrmBase.StringControl;
            get(name: "excludeifcontactedinxdays"): XrmBase.NumberControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "partners"): XrmBase.LookupControl<"account" | "contact">;
            get(name: "prioritycode"): XrmBase.OptionSetControl<campaignactivity_prioritycode>;
            get(name: "regardingobjectid"): XrmBase.LookupControl<"campaign">;
            get(name: "scheduledend"): XrmBase.DateControl;
            get(name: "scheduledstart"): XrmBase.DateControl;
            get(name: "statuscode"): XrmBase.OptionSetControl<campaignactivity_statuscode>;
            get(name: "subject"): XrmBase.StringControl;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: "typecode"): XrmBase.OptionSetControl<campaignactivity_typecode>;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "campaign activity"): XrmBase.PageTab<Tabs.CampaignActivity>;
            get(name: "notes"): XrmBase.PageTab<Tabs.Notes>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "regardingobjectid"): XrmBase.LookupAttribute<"campaign">;
        getAttribute(attributeName: "statuscode"): XrmBase.OptionSetAttribute<campaignactivity_statuscode>;
        getAttribute(attributeName: "channeltypecode"): XrmBase.OptionSetAttribute<campaignactivity_channeltypecode>;
        getAttribute(attributeName: "typecode"): XrmBase.OptionSetAttribute<campaignactivity_typecode>;
        getAttribute(attributeName: "subject"): XrmBase.StringAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "partners"): XrmBase.LookupAttribute<"account" | "contact">;
        getAttribute(attributeName: "scheduledstart"): XrmBase.DateAttribute;
        getAttribute(attributeName: "actualstart"): XrmBase.DateAttribute;
        getAttribute(attributeName: "scheduledend"): XrmBase.DateAttribute;
        getAttribute(attributeName: "actualend"): XrmBase.DateAttribute;
        getAttribute(attributeName: "budgetedcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "actualcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "prioritycode"): XrmBase.OptionSetAttribute<campaignactivity_prioritycode>;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "excludeifcontactedinxdays"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "regardingobjectid"): XrmBase.LookupControl<"campaign">;
        getControl(controlName: "statuscode"): XrmBase.OptionSetControl<campaignactivity_statuscode>;
        getControl(controlName: "channeltypecode"): XrmBase.OptionSetControl<campaignactivity_channeltypecode>;
        getControl(controlName: "typecode"): XrmBase.OptionSetControl<campaignactivity_typecode>;
        getControl(controlName: "subject"): XrmBase.StringControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "partners"): XrmBase.LookupControl<"account" | "contact">;
        getControl(controlName: "scheduledstart"): XrmBase.DateControl;
        getControl(controlName: "actualstart"): XrmBase.DateControl;
        getControl(controlName: "scheduledend"): XrmBase.DateControl;
        getControl(controlName: "actualend"): XrmBase.DateControl;
        getControl(controlName: "budgetedcost"): XrmBase.NumberControl;
        getControl(controlName: "actualcost"): XrmBase.NumberControl;
        getControl(controlName: "prioritycode"): XrmBase.OptionSetControl<campaignactivity_prioritycode>;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "excludeifcontactedinxdays"): XrmBase.NumberControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
