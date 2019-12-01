declare namespace Form.lead.Main {
    namespace Information {
        namespace Tabs {
            interface Tabrecordwall extends XrmBase.SectionCollectionBase {
                get(name: "tab_recordwall_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "name"): XrmBase.PageSection;
                get(name: "address"): XrmBase.PageSection;
                get(name: "description"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Details extends XrmBase.SectionCollectionBase {
                get(name: "lead information"): XrmBase.PageSection;
                get(name: "company information"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface NotesAndActivities extends XrmBase.SectionCollectionBase {
                get(name: "activities"): XrmBase.PageSection;
                get(name: "notes"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Administration extends XrmBase.SectionCollectionBase {
                get(name: "internal information"): XrmBase.PageSection;
                get(name: "contact methods"): XrmBase.PageSection;
                get(name: "marketing information"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "address1_city"): XrmBase.StringAttribute;
            get(name: "address1_country"): XrmBase.StringAttribute;
            get(name: "address1_line1"): XrmBase.StringAttribute;
            get(name: "address1_line2"): XrmBase.StringAttribute;
            get(name: "address1_line3"): XrmBase.StringAttribute;
            get(name: "address1_postalcode"): XrmBase.StringAttribute;
            get(name: "address1_stateorprovince"): XrmBase.StringAttribute;
            get(name: "campaignid"): XrmBase.LookupAttribute<"campaign">;
            get(name: "companyname"): XrmBase.StringAttribute;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "donotbulkemail"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "donotemail"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "donotfax"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "donotphone"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "donotpostalmail"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "donotsendmm"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "emailaddress1"): XrmBase.StringAttribute;
            get(name: "fax"): XrmBase.StringAttribute;
            get(name: "firstname"): XrmBase.StringAttribute;
            get(name: "followemail"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "industrycode"): XrmBase.OptionSetAttribute<lead_industrycode>;
            get(name: "jobtitle"): XrmBase.StringAttribute;
            get(name: "lastname"): XrmBase.StringAttribute;
            get(name: "lastusedincampaign"): XrmBase.DateAttribute;
            get(name: "leadqualitycode"): XrmBase.OptionSetAttribute<lead_leadqualitycode>;
            get(name: "leadsourcecode"): XrmBase.OptionSetAttribute<lead_leadsourcecode>;
            get(name: "mobilephone"): XrmBase.StringAttribute;
            get(name: "numberofemployees"): XrmBase.NumberAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "pager"): XrmBase.StringAttribute;
            get(name: "preferredcontactmethodcode"): XrmBase.OptionSetAttribute<lead_preferredcontactmethodcode>;
            get(name: "revenue"): XrmBase.NumberAttribute;
            get(name: "salutation"): XrmBase.StringAttribute;
            get(name: "sic"): XrmBase.StringAttribute;
            get(name: "statuscode"): XrmBase.OptionSetAttribute<lead_statuscode>;
            get(name: "subject"): XrmBase.StringAttribute;
            get(name: "telephone1"): XrmBase.StringAttribute;
            get(name: "telephone2"): XrmBase.StringAttribute;
            get(name: "telephone3"): XrmBase.StringAttribute;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: "websiteurl"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "address1_city"): XrmBase.StringControl;
            get(name: "address1_country"): XrmBase.StringControl;
            get(name: "address1_line1"): XrmBase.StringControl;
            get(name: "address1_line2"): XrmBase.StringControl;
            get(name: "address1_line3"): XrmBase.StringControl;
            get(name: "address1_postalcode"): XrmBase.StringControl;
            get(name: "address1_stateorprovince"): XrmBase.StringControl;
            get(name: "campaignid"): XrmBase.LookupControl<"campaign">;
            get(name: "companyname"): XrmBase.StringControl;
            get(name: "description"): XrmBase.StringControl;
            get(name: "donotbulkemail"): XrmBase.OptionSetControl<any>;
            get(name: "donotemail"): XrmBase.OptionSetControl<any>;
            get(name: "donotfax"): XrmBase.OptionSetControl<any>;
            get(name: "donotphone"): XrmBase.OptionSetControl<any>;
            get(name: "donotpostalmail"): XrmBase.OptionSetControl<any>;
            get(name: "donotsendmm"): XrmBase.OptionSetControl<any>;
            get(name: "emailaddress1"): XrmBase.StringControl;
            get(name: "fax"): XrmBase.StringControl;
            get(name: "firstname"): XrmBase.StringControl;
            get(name: "followemail"): XrmBase.OptionSetControl<any>;
            get(name: "industrycode"): XrmBase.OptionSetControl<lead_industrycode>;
            get(name: "jobtitle"): XrmBase.StringControl;
            get(name: "lastname"): XrmBase.StringControl;
            get(name: "lastusedincampaign"): XrmBase.DateControl;
            get(name: "leadactivitiesgrid"): XrmBase.SubGridControl<"activitypointer">;
            get(name: "leadqualitycode"): XrmBase.OptionSetControl<lead_leadqualitycode>;
            get(name: "leadsourcecode"): XrmBase.OptionSetControl<lead_leadsourcecode>;
            get(name: "mobilephone"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "numberofemployees"): XrmBase.NumberControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "pager"): XrmBase.StringControl;
            get(name: "preferredcontactmethodcode"): XrmBase.OptionSetControl<lead_preferredcontactmethodcode>;
            get(name: "revenue"): XrmBase.NumberControl;
            get(name: "salutation"): XrmBase.StringControl;
            get(name: "sic"): XrmBase.StringControl;
            get(name: "statuscode"): XrmBase.OptionSetControl<lead_statuscode>;
            get(name: "subject"): XrmBase.StringControl;
            get(name: "telephone1"): XrmBase.StringControl;
            get(name: "telephone2"): XrmBase.StringControl;
            get(name: "telephone3"): XrmBase.StringControl;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: "WebResource_RecordWall"): XrmBase.WebResourceControl;
            get(name: "websiteurl"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "tab_recordwall"): XrmBase.PageTab<Tabs.Tabrecordwall>;
            get(name: "general"): XrmBase.PageTab<Tabs.General>;
            get(name: "details"): XrmBase.PageTab<Tabs.Details>;
            get(name: "notes and activities"): XrmBase.PageTab<Tabs.NotesAndActivities>;
            get(name: "administration"): XrmBase.PageTab<Tabs.Administration>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "subject"): XrmBase.StringAttribute;
        getAttribute(attributeName: "salutation"): XrmBase.StringAttribute;
        getAttribute(attributeName: "telephone1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "firstname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "telephone2"): XrmBase.StringAttribute;
        getAttribute(attributeName: "lastname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "mobilephone"): XrmBase.StringAttribute;
        getAttribute(attributeName: "jobtitle"): XrmBase.StringAttribute;
        getAttribute(attributeName: "fax"): XrmBase.StringAttribute;
        getAttribute(attributeName: "companyname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "telephone3"): XrmBase.StringAttribute;
        getAttribute(attributeName: "websiteurl"): XrmBase.StringAttribute;
        getAttribute(attributeName: "pager"): XrmBase.StringAttribute;
        getAttribute(attributeName: "emailaddress1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_line1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_stateorprovince"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_line2"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_postalcode"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_line3"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_country"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_city"): XrmBase.StringAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "leadsourcecode"): XrmBase.OptionSetAttribute<lead_leadsourcecode>;
        getAttribute(attributeName: "leadqualitycode"): XrmBase.OptionSetAttribute<lead_leadqualitycode>;
        getAttribute(attributeName: "industrycode"): XrmBase.OptionSetAttribute<lead_industrycode>;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "sic"): XrmBase.StringAttribute;
        getAttribute(attributeName: "revenue"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "numberofemployees"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "statuscode"): XrmBase.OptionSetAttribute<lead_statuscode>;
        getAttribute(attributeName: "preferredcontactmethodcode"): XrmBase.OptionSetAttribute<lead_preferredcontactmethodcode>;
        getAttribute(attributeName: "followemail"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "donotbulkemail"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "donotemail"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "donotfax"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "donotphone"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "donotpostalmail"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "campaignid"): XrmBase.LookupAttribute<"campaign">;
        getAttribute(attributeName: "lastusedincampaign"): XrmBase.DateAttribute;
        getAttribute(attributeName: "donotsendmm"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "WebResource_RecordWall"): XrmBase.WebResourceControl;
        getControl(controlName: "subject"): XrmBase.StringControl;
        getControl(controlName: "salutation"): XrmBase.StringControl;
        getControl(controlName: "telephone1"): XrmBase.StringControl;
        getControl(controlName: "firstname"): XrmBase.StringControl;
        getControl(controlName: "telephone2"): XrmBase.StringControl;
        getControl(controlName: "lastname"): XrmBase.StringControl;
        getControl(controlName: "mobilephone"): XrmBase.StringControl;
        getControl(controlName: "jobtitle"): XrmBase.StringControl;
        getControl(controlName: "fax"): XrmBase.StringControl;
        getControl(controlName: "companyname"): XrmBase.StringControl;
        getControl(controlName: "telephone3"): XrmBase.StringControl;
        getControl(controlName: "websiteurl"): XrmBase.StringControl;
        getControl(controlName: "pager"): XrmBase.StringControl;
        getControl(controlName: "emailaddress1"): XrmBase.StringControl;
        getControl(controlName: "address1_line1"): XrmBase.StringControl;
        getControl(controlName: "address1_stateorprovince"): XrmBase.StringControl;
        getControl(controlName: "address1_line2"): XrmBase.StringControl;
        getControl(controlName: "address1_postalcode"): XrmBase.StringControl;
        getControl(controlName: "address1_line3"): XrmBase.StringControl;
        getControl(controlName: "address1_country"): XrmBase.StringControl;
        getControl(controlName: "address1_city"): XrmBase.StringControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "leadsourcecode"): XrmBase.OptionSetControl<lead_leadsourcecode>;
        getControl(controlName: "leadqualitycode"): XrmBase.OptionSetControl<lead_leadqualitycode>;
        getControl(controlName: "industrycode"): XrmBase.OptionSetControl<lead_industrycode>;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "sic"): XrmBase.StringControl;
        getControl(controlName: "revenue"): XrmBase.NumberControl;
        getControl(controlName: "numberofemployees"): XrmBase.NumberControl;
        getControl(controlName: "leadactivitiesgrid"): XrmBase.SubGridControl<"activitypointer">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "statuscode"): XrmBase.OptionSetControl<lead_statuscode>;
        getControl(controlName: "preferredcontactmethodcode"): XrmBase.OptionSetControl<lead_preferredcontactmethodcode>;
        getControl(controlName: "followemail"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "donotbulkemail"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "donotemail"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "donotfax"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "donotphone"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "donotpostalmail"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "campaignid"): XrmBase.LookupControl<"campaign">;
        getControl(controlName: "lastusedincampaign"): XrmBase.DateControl;
        getControl(controlName: "donotsendmm"): XrmBase.OptionSetControl<any>;
        getControl(controlName: string): undefined;
    }
}
