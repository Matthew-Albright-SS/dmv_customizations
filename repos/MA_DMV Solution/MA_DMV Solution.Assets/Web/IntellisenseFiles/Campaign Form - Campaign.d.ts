declare namespace Form.campaign.Main {
    namespace Campaign {
        namespace Tabs {
            interface SUMMARY extends XrmBase.SectionCollectionBase {
                get(name: "CAMPAIGN"): XrmBase.PageSection;
                get(name: "SCHEDULES"): XrmBase.PageSection;
                get(name: "OFFER"): XrmBase.PageSection;
                get(name: "RELATED PANE"): XrmBase.PageSection;
                get(name: "LISTS"): XrmBase.PageSection;
                get(name: "LEADS"): XrmBase.PageSection;
                get(name: "CAMPAIGN ACTIVITIES"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface DETAILS extends XrmBase.SectionCollectionBase {
                get(name: "FINANCIALS"): XrmBase.PageSection;
                get(name: "ADMINISTRATION"): XrmBase.PageSection;
                get(name: "RESPONSES"): XrmBase.PageSection;
                get(name: "DESCRIPTION"): XrmBase.PageSection;
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
            get(name: "modifiedby"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "modifiedon"): XrmBase.DateAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "objective"): XrmBase.StringAttribute;
            get(name: "othercost"): XrmBase.NumberAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "proposedend"): XrmBase.DateAttribute;
            get(name: "proposedstart"): XrmBase.DateAttribute;
            get(name: "tmpregardingobjectid"): XrmBase.StringAttribute;
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
            get(name: "Activities"): XrmBase.SubGridControl<"campaignactivity">;
            get(name: "actualend"): XrmBase.DateControl;
            get(name: "actualstart"): XrmBase.DateControl;
            get(name: "budgetedcost"): XrmBase.NumberControl;
            get(name: "codename"): XrmBase.StringControl;
            get(name: "createdon"): XrmBase.DateControl;
            get(name: "description"): XrmBase.StringControl;
            get(name: "expectedresponse"): XrmBase.NumberControl;
            get(name: "Leads"): XrmBase.SubGridControl<"lead">;
            get(name: "Lists"): XrmBase.SubGridControl<"list">;
            get(name: "modifiedby"): XrmBase.LookupControl<"systemuser">;
            get(name: "modifiedon"): XrmBase.DateControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "objective"): XrmBase.StringControl;
            get(name: "othercost"): XrmBase.NumberControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "proposedend"): XrmBase.DateControl;
            get(name: "proposedstart"): XrmBase.DateControl;
            get(name: "Responses"): XrmBase.SubGridControl<"campaignresponse">;
            get(name: "tmpregardingobjectid"): XrmBase.StringControl;
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
            get(name: "SUMMARY"): XrmBase.PageTab<Tabs.SUMMARY>;
            get(name: "DETAILS"): XrmBase.PageTab<Tabs.DETAILS>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Campaign extends XrmBase.PageBase<Campaign.Attributes, Campaign.Tabs, Campaign.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "codename"): XrmBase.StringAttribute;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "typecode"): XrmBase.OptionSetAttribute<campaign_typecode>;
        getAttribute(attributeName: "expectedresponse"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "tmpregardingobjectid"): XrmBase.StringAttribute;
        getAttribute(attributeName: "proposedstart"): XrmBase.DateAttribute;
        getAttribute(attributeName: "proposedend"): XrmBase.DateAttribute;
        getAttribute(attributeName: "actualstart"): XrmBase.DateAttribute;
        getAttribute(attributeName: "actualend"): XrmBase.DateAttribute;
        getAttribute(attributeName: "objective"): XrmBase.StringAttribute;
        getAttribute(attributeName: "totalcampaignactivityactualcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "budgetedcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "othercost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "totalactualcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "createdon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "modifiedby"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "modifiedon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "codename"): XrmBase.StringControl;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "typecode"): XrmBase.OptionSetControl<campaign_typecode>;
        getControl(controlName: "expectedresponse"): XrmBase.NumberControl;
        getControl(controlName: "tmpregardingobjectid"): XrmBase.StringControl;
        getControl(controlName: "proposedstart"): XrmBase.DateControl;
        getControl(controlName: "proposedend"): XrmBase.DateControl;
        getControl(controlName: "actualstart"): XrmBase.DateControl;
        getControl(controlName: "actualend"): XrmBase.DateControl;
        getControl(controlName: "objective"): XrmBase.StringControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "Lists"): XrmBase.SubGridControl<"list">;
        getControl(controlName: "Leads"): XrmBase.SubGridControl<"lead">;
        getControl(controlName: "Activities"): XrmBase.SubGridControl<"campaignactivity">;
        getControl(controlName: "totalcampaignactivityactualcost"): XrmBase.NumberControl;
        getControl(controlName: "budgetedcost"): XrmBase.NumberControl;
        getControl(controlName: "othercost"): XrmBase.NumberControl;
        getControl(controlName: "totalactualcost"): XrmBase.NumberControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "createdon"): XrmBase.DateControl;
        getControl(controlName: "modifiedby"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "modifiedon"): XrmBase.DateControl;
        getControl(controlName: "Responses"): XrmBase.SubGridControl<"campaignresponse">;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
