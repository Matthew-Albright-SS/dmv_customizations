declare namespace Form.list.Main {
    namespace MarketingListLight {
        namespace Tabs {
            interface Summary extends XrmBase.SectionCollectionBase {
                get(name: "information"): XrmBase.PageSection;
                get(name: "members"): XrmBase.PageSection;
                get(name: "Summary_section_5"): XrmBase.PageSection;
                get(name: "campaigns"): XrmBase.PageSection;
                get(name: "quickcampaigns"): XrmBase.PageSection;
                get(name: "Summary_section_4"): XrmBase.PageSection;
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
            get(name: "membertype"): XrmBase.NumberAttribute;
            get(name: "modifiedon"): XrmBase.DateAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "purpose"): XrmBase.StringAttribute;
            get(name: "query"): XrmBase.StringAttribute;
            get(name: "source"): XrmBase.StringAttribute;
            get(name: "statecode"): XrmBase.OptionSetAttribute<list_statecode>;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: "type"): XrmBase.OptionSetAttribute<boolean>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "accounts"): XrmBase.SubGridControl<"account">;
            get(name: "accountsUCI"): XrmBase.SubGridControl<"account">;
            get(name: "Campaigns"): XrmBase.SubGridControl<"campaign">;
            get(name: "contacts"): XrmBase.SubGridControl<"contact">;
            get(name: "contactsUCI"): XrmBase.SubGridControl<"contact">;
            get(name: "cost"): XrmBase.NumberControl;
            get(name: "createdfromcode"): XrmBase.OptionSetControl<list_createdfromcode>;
            get(name: "description"): XrmBase.StringControl;
            get(name: "dynamic_accounts"): XrmBase.BaseControl;
            get(name: "dynamic_contacts"): XrmBase.BaseControl;
            get(name: "dynamic_leads"): XrmBase.BaseControl;
            get(name: "lastusedon"): XrmBase.DateControl;
            get(name: "leads"): XrmBase.SubGridControl<"lead">;
            get(name: "leadsUCI"): XrmBase.SubGridControl<"lead">;
            get(name: "listname"): XrmBase.StringControl;
            get(name: "lockstatus"): XrmBase.OptionSetControl<any>;
            get(name: "membertype"): XrmBase.NumberControl;
            get(name: "modifiedon"): XrmBase.DateControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "purpose"): XrmBase.StringControl;
            get(name: "query"): XrmBase.StringControl;
            get(name: "QuickCampaigns"): XrmBase.SubGridControl<"bulkoperation">;
            get(name: "source"): XrmBase.StringControl;
            get(name: "statecode"): XrmBase.OptionSetControl<list_statecode>;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: "type"): XrmBase.OptionSetControl<any>;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "Summary"): XrmBase.PageTab<Tabs.Summary>;
            get(name: "notes"): XrmBase.PageTab<Tabs.Notes>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface MarketingListLight extends XrmBase.PageBase<MarketingListLight.Attributes, MarketingListLight.Tabs, MarketingListLight.Controls> {
        getAttribute(attributeName: "listname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "type"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "purpose"): XrmBase.StringAttribute;
        getAttribute(attributeName: "createdfromcode"): XrmBase.OptionSetAttribute<list_createdfromcode>;
        getAttribute(attributeName: "source"): XrmBase.StringAttribute;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "modifiedon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "cost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "lastusedon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "lockstatus"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "statecode"): XrmBase.OptionSetAttribute<list_statecode>;
        getAttribute(attributeName: "query"): XrmBase.StringAttribute;
        getAttribute(attributeName: "membertype"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "listname"): XrmBase.StringControl;
        getControl(controlName: "type"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "purpose"): XrmBase.StringControl;
        getControl(controlName: "createdfromcode"): XrmBase.OptionSetControl<list_createdfromcode>;
        getControl(controlName: "source"): XrmBase.StringControl;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "modifiedon"): XrmBase.DateControl;
        getControl(controlName: "cost"): XrmBase.NumberControl;
        getControl(controlName: "lastusedon"): XrmBase.DateControl;
        getControl(controlName: "lockstatus"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "statecode"): XrmBase.OptionSetControl<list_statecode>;
        getControl(controlName: "query"): XrmBase.StringControl;
        getControl(controlName: "membertype"): XrmBase.NumberControl;
        getControl(controlName: "accountsUCI"): XrmBase.SubGridControl<"account">;
        getControl(controlName: "contactsUCI"): XrmBase.SubGridControl<"contact">;
        getControl(controlName: "leadsUCI"): XrmBase.SubGridControl<"lead">;
        getControl(controlName: "contacts"): XrmBase.SubGridControl<"contact">;
        getControl(controlName: "accounts"): XrmBase.SubGridControl<"account">;
        getControl(controlName: "leads"): XrmBase.SubGridControl<"lead">;
        getControl(controlName: "dynamic_accounts"): XrmBase.BaseControl;
        getControl(controlName: "dynamic_contacts"): XrmBase.BaseControl;
        getControl(controlName: "dynamic_leads"): XrmBase.BaseControl;
        getControl(controlName: "Campaigns"): XrmBase.SubGridControl<"campaign">;
        getControl(controlName: "QuickCampaigns"): XrmBase.SubGridControl<"bulkoperation">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
