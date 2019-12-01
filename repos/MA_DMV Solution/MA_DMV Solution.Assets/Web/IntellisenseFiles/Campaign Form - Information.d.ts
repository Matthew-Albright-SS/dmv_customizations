declare namespace Form.campaign.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "campaign information"): XrmBase.PageSection;
                get(name: "dates"): XrmBase.PageSection;
                get(name: "description"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Details extends XrmBase.SectionCollectionBase {
                get(name: "financials"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Administration extends XrmBase.SectionCollectionBase {
                get(name: "administration"): XrmBase.PageSection;
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
            get(name: "actualend"): XrmBase.DateAttribute;
            get(name: "actualstart"): XrmBase.DateAttribute;
            get(name: "budgetedcost"): XrmBase.NumberAttribute;
            get(name: "codename"): XrmBase.StringAttribute;
            get(name: "createdon"): XrmBase.DateAttribute;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "expectedresponse"): XrmBase.NumberAttribute;
            get(name: "expectedrevenue"): XrmBase.NumberAttribute;
            get(name: "modifiedby"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "modifiedon"): XrmBase.DateAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "objective"): XrmBase.StringAttribute;
            get(name: "othercost"): XrmBase.NumberAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "pricelistid"): XrmBase.LookupAttribute<"pricelevel">;
            get(name: "proposedend"): XrmBase.DateAttribute;
            get(name: "proposedstart"): XrmBase.DateAttribute;
            get(name: "statuscode"): XrmBase.OptionSetAttribute<campaign_statuscode>;
            get(name: "totalactualcost"): XrmBase.NumberAttribute;
            get(name: "totalcampaignactivityactualcost"): XrmBase.NumberAttribute;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: "typecode"): XrmBase.OptionSetAttribute<campaign_typecode>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "actualend"): XrmBase.DateControl;
            get(name: "actualstart"): XrmBase.DateControl;
            get(name: "budgetedcost"): XrmBase.NumberControl;
            get(name: "codename"): XrmBase.StringControl;
            get(name: "createdon"): XrmBase.DateControl;
            get(name: "description"): XrmBase.StringControl;
            get(name: "expectedresponse"): XrmBase.NumberControl;
            get(name: "expectedrevenue"): XrmBase.NumberControl;
            get(name: "modifiedby"): XrmBase.LookupControl<"systemuser">;
            get(name: "modifiedon"): XrmBase.DateControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "objective"): XrmBase.StringControl;
            get(name: "othercost"): XrmBase.NumberControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "pricelistid"): XrmBase.LookupControl<"pricelevel">;
            get(name: "proposedend"): XrmBase.DateControl;
            get(name: "proposedstart"): XrmBase.DateControl;
            get(name: "statuscode"): XrmBase.OptionSetControl<campaign_statuscode>;
            get(name: "totalactualcost"): XrmBase.NumberControl;
            get(name: "totalcampaignactivityactualcost"): XrmBase.NumberControl;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: "typecode"): XrmBase.OptionSetControl<campaign_typecode>;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "general"): XrmBase.PageTab<Tabs.General>;
            get(name: "details"): XrmBase.PageTab<Tabs.Details>;
            get(name: "administration"): XrmBase.PageTab<Tabs.Administration>;
            get(name: "notes"): XrmBase.PageTab<Tabs.Notes>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "statuscode"): XrmBase.OptionSetAttribute<campaign_statuscode>;
        getAttribute(attributeName: "codename"): XrmBase.StringAttribute;
        getAttribute(attributeName: "typecode"): XrmBase.OptionSetAttribute<campaign_typecode>;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "expectedresponse"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "pricelistid"): XrmBase.LookupAttribute<"pricelevel">;
        getAttribute(attributeName: "objective"): XrmBase.StringAttribute;
        getAttribute(attributeName: "proposedstart"): XrmBase.DateAttribute;
        getAttribute(attributeName: "actualstart"): XrmBase.DateAttribute;
        getAttribute(attributeName: "proposedend"): XrmBase.DateAttribute;
        getAttribute(attributeName: "actualend"): XrmBase.DateAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "totalcampaignactivityactualcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "budgetedcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "othercost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "expectedrevenue"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "totalactualcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "createdon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "modifiedby"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "modifiedon"): XrmBase.DateAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "statuscode"): XrmBase.OptionSetControl<campaign_statuscode>;
        getControl(controlName: "codename"): XrmBase.StringControl;
        getControl(controlName: "typecode"): XrmBase.OptionSetControl<campaign_typecode>;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "expectedresponse"): XrmBase.NumberControl;
        getControl(controlName: "pricelistid"): XrmBase.LookupControl<"pricelevel">;
        getControl(controlName: "objective"): XrmBase.StringControl;
        getControl(controlName: "proposedstart"): XrmBase.DateControl;
        getControl(controlName: "actualstart"): XrmBase.DateControl;
        getControl(controlName: "proposedend"): XrmBase.DateControl;
        getControl(controlName: "actualend"): XrmBase.DateControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "totalcampaignactivityactualcost"): XrmBase.NumberControl;
        getControl(controlName: "budgetedcost"): XrmBase.NumberControl;
        getControl(controlName: "othercost"): XrmBase.NumberControl;
        getControl(controlName: "expectedrevenue"): XrmBase.NumberControl;
        getControl(controlName: "totalactualcost"): XrmBase.NumberControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "createdon"): XrmBase.DateControl;
        getControl(controlName: "modifiedby"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "modifiedon"): XrmBase.DateControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
