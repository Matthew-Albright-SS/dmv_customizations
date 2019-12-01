declare namespace Form.lead.Main {
    namespace Lead {
        namespace Tabs {
            interface Summary extends XrmBase.SectionCollectionBase {
                get(name: "Contact"): XrmBase.PageSection;
                get(name: "company"): XrmBase.PageSection;
                get(name: "MapSection"): XrmBase.PageSection;
                get(name: "SOCIAL_PANE"): XrmBase.PageSection;
                get(name: "RELATED_TAB"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Detailstab extends XrmBase.SectionCollectionBase {
                get(name: "lead_information"): XrmBase.PageSection;
                get(name: "marketing_information"): XrmBase.PageSection;
                get(name: "contact_methods"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "address1_composite"): XrmBase.StringAttribute;
            get(name: "campaignid"): XrmBase.LookupAttribute<"campaign">;
            get(name: "companyname"): XrmBase.StringAttribute;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "donotbulkemail"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "donotemail"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "donotphone"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "donotpostalmail"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "donotsendmm"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "emailaddress1"): XrmBase.StringAttribute;
            get(name: "fullname"): XrmBase.StringAttribute;
            get(name: "industrycode"): XrmBase.OptionSetAttribute<lead_industrycode>;
            get(name: "jobtitle"): XrmBase.StringAttribute;
            get(name: "lastusedincampaign"): XrmBase.DateAttribute;
            get(name: "mobilephone"): XrmBase.StringAttribute;
            get(name: "msdyn_ordertype"): XrmBase.OptionSetAttribute<msdyn_lead_msdyn_ordertype>;
            get(name: "numberofemployees"): XrmBase.NumberAttribute;
            get(name: "preferredcontactmethodcode"): XrmBase.OptionSetAttribute<lead_preferredcontactmethodcode>;
            get(name: "revenue"): XrmBase.NumberAttribute;
            get(name: "sic"): XrmBase.StringAttribute;
            get(name: "subject"): XrmBase.StringAttribute;
            get(name: "telephone1"): XrmBase.StringAttribute;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: "websiteurl"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "address1_composite"): XrmBase.StringControl;
            get(name: "campaignid"): XrmBase.LookupControl<"campaign">;
            get(name: "companyname"): XrmBase.StringControl;
            get(name: "Competitors"): XrmBase.SubGridControl<"competitor">;
            get(name: "description"): XrmBase.StringControl;
            get(name: "donotbulkemail"): XrmBase.OptionSetControl<any>;
            get(name: "donotemail"): XrmBase.OptionSetControl<any>;
            get(name: "donotphone"): XrmBase.OptionSetControl<any>;
            get(name: "donotpostalmail"): XrmBase.OptionSetControl<any>;
            get(name: "donotsendmm"): XrmBase.OptionSetControl<any>;
            get(name: "emailaddress1"): XrmBase.StringControl;
            get(name: "fullname"): XrmBase.StringControl;
            get(name: "industrycode"): XrmBase.OptionSetControl<lead_industrycode>;
            get(name: "jobtitle"): XrmBase.StringControl;
            get(name: "lastusedincampaign"): XrmBase.DateControl;
            get(name: "mapcontrol"): XrmBase.BaseControl;
            get(name: "mobilephone"): XrmBase.StringControl;
            get(name: "msdyn_ordertype"): XrmBase.OptionSetControl<msdyn_lead_msdyn_ordertype>;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "numberofemployees"): XrmBase.NumberControl;
            get(name: "preferredcontactmethodcode"): XrmBase.OptionSetControl<lead_preferredcontactmethodcode>;
            get(name: "revenue"): XrmBase.NumberControl;
            get(name: "sic"): XrmBase.StringControl;
            get(name: "Stakeholders"): XrmBase.SubGridControl<"connection">;
            get(name: "subject"): XrmBase.StringControl;
            get(name: "telephone1"): XrmBase.StringControl;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: "websiteurl"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "Summary"): XrmBase.PageTab<Tabs.Summary>;
            get(name: "details_tab"): XrmBase.PageTab<Tabs.Detailstab>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Lead extends XrmBase.PageBase<Lead.Attributes, Lead.Tabs, Lead.Controls> {
        getAttribute(attributeName: "subject"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_ordertype"): XrmBase.OptionSetAttribute<msdyn_lead_msdyn_ordertype>;
        getAttribute(attributeName: "fullname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "jobtitle"): XrmBase.StringAttribute;
        getAttribute(attributeName: "telephone1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "mobilephone"): XrmBase.StringAttribute;
        getAttribute(attributeName: "emailaddress1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "companyname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "websiteurl"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_composite"): XrmBase.StringAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "industrycode"): XrmBase.OptionSetAttribute<lead_industrycode>;
        getAttribute(attributeName: "revenue"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "numberofemployees"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "sic"): XrmBase.StringAttribute;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "campaignid"): XrmBase.LookupAttribute<"campaign">;
        getAttribute(attributeName: "donotsendmm"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "lastusedincampaign"): XrmBase.DateAttribute;
        getAttribute(attributeName: "preferredcontactmethodcode"): XrmBase.OptionSetAttribute<lead_preferredcontactmethodcode>;
        getAttribute(attributeName: "donotemail"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "donotbulkemail"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "donotphone"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "donotpostalmail"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "subject"): XrmBase.StringControl;
        getControl(controlName: "msdyn_ordertype"): XrmBase.OptionSetControl<msdyn_lead_msdyn_ordertype>;
        getControl(controlName: "fullname"): XrmBase.StringControl;
        getControl(controlName: "jobtitle"): XrmBase.StringControl;
        getControl(controlName: "telephone1"): XrmBase.StringControl;
        getControl(controlName: "mobilephone"): XrmBase.StringControl;
        getControl(controlName: "emailaddress1"): XrmBase.StringControl;
        getControl(controlName: "companyname"): XrmBase.StringControl;
        getControl(controlName: "websiteurl"): XrmBase.StringControl;
        getControl(controlName: "address1_composite"): XrmBase.StringControl;
        getControl(controlName: "mapcontrol"): XrmBase.BaseControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "Stakeholders"): XrmBase.SubGridControl<"connection">;
        getControl(controlName: "Competitors"): XrmBase.SubGridControl<"competitor">;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "industrycode"): XrmBase.OptionSetControl<lead_industrycode>;
        getControl(controlName: "revenue"): XrmBase.NumberControl;
        getControl(controlName: "numberofemployees"): XrmBase.NumberControl;
        getControl(controlName: "sic"): XrmBase.StringControl;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "campaignid"): XrmBase.LookupControl<"campaign">;
        getControl(controlName: "donotsendmm"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "lastusedincampaign"): XrmBase.DateControl;
        getControl(controlName: "preferredcontactmethodcode"): XrmBase.OptionSetControl<lead_preferredcontactmethodcode>;
        getControl(controlName: "donotemail"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "donotbulkemail"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "donotphone"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "donotpostalmail"): XrmBase.OptionSetControl<any>;
        getControl(controlName: string): undefined;
    }
}
