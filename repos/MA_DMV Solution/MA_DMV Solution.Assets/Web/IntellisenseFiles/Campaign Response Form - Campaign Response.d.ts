declare namespace Form.campaignresponse.Main {
    namespace CampaignResponse {
        namespace Tabs {
            interface CampaignResponse extends XrmBase.SectionCollectionBase {
                get(name: "summary"): XrmBase.PageSection;
                get(name: "received from"): XrmBase.PageSection;
                get(name: "description"): XrmBase.PageSection;
                get(name: "details"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "channeltypecode"): XrmBase.OptionSetAttribute<campaignresponse_channeltypecode>;
            get(name: "companyname"): XrmBase.StringAttribute;
            get(name: "customer"): XrmBase.LookupAttribute<"account" | "contact" | "lead">;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "emailaddress"): XrmBase.StringAttribute;
            get(name: "firstname"): XrmBase.StringAttribute;
            get(name: "lastname"): XrmBase.StringAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "partner"): XrmBase.LookupAttribute<"account" | "contact">;
            get(name: "prioritycode"): XrmBase.OptionSetAttribute<campaignresponse_prioritycode>;
            get(name: "promotioncodename"): XrmBase.StringAttribute;
            get(name: "receivedon"): XrmBase.DateAttribute;
            get(name: "regardingobjectid"): XrmBase.LookupAttribute<"bulkoperation" | "campaign">;
            get(name: "responsecode"): XrmBase.OptionSetAttribute<campaignresponse_responsecode>;
            get(name: "scheduledend"): XrmBase.DateAttribute;
            get(name: "subject"): XrmBase.StringAttribute;
            get(name: "telephone"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "channeltypecode"): XrmBase.OptionSetControl<campaignresponse_channeltypecode>;
            get(name: "companyname"): XrmBase.StringControl;
            get(name: "customer"): XrmBase.LookupControl<"account" | "contact" | "lead">;
            get(name: "description"): XrmBase.StringControl;
            get(name: "emailaddress"): XrmBase.StringControl;
            get(name: "firstname"): XrmBase.StringControl;
            get(name: "lastname"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "partner"): XrmBase.LookupControl<"account" | "contact">;
            get(name: "prioritycode"): XrmBase.OptionSetControl<campaignresponse_prioritycode>;
            get(name: "promotioncodename"): XrmBase.StringControl;
            get(name: "receivedon"): XrmBase.DateControl;
            get(name: "regardingobjectid"): XrmBase.LookupControl<"bulkoperation" | "campaign">;
            get(name: "responsecode"): XrmBase.OptionSetControl<campaignresponse_responsecode>;
            get(name: "scheduledend"): XrmBase.DateControl;
            get(name: "subject"): XrmBase.StringControl;
            get(name: "telephone"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "campaign response"): XrmBase.PageTab<Tabs.CampaignResponse>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface CampaignResponse extends XrmBase.PageBase<CampaignResponse.Attributes, CampaignResponse.Tabs, CampaignResponse.Controls> {
        getAttribute(attributeName: "subject"): XrmBase.StringAttribute;
        getAttribute(attributeName: "customer"): XrmBase.LookupAttribute<"account" | "contact" | "lead">;
        getAttribute(attributeName: "companyname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "lastname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "firstname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "telephone"): XrmBase.StringAttribute;
        getAttribute(attributeName: "emailaddress"): XrmBase.StringAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "promotioncodename"): XrmBase.StringAttribute;
        getAttribute(attributeName: "regardingobjectid"): XrmBase.LookupAttribute<"bulkoperation" | "campaign">;
        getAttribute(attributeName: "responsecode"): XrmBase.OptionSetAttribute<campaignresponse_responsecode>;
        getAttribute(attributeName: "channeltypecode"): XrmBase.OptionSetAttribute<campaignresponse_channeltypecode>;
        getAttribute(attributeName: "partner"): XrmBase.LookupAttribute<"account" | "contact">;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "prioritycode"): XrmBase.OptionSetAttribute<campaignresponse_prioritycode>;
        getAttribute(attributeName: "receivedon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "scheduledend"): XrmBase.DateAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "subject"): XrmBase.StringControl;
        getControl(controlName: "customer"): XrmBase.LookupControl<"account" | "contact" | "lead">;
        getControl(controlName: "companyname"): XrmBase.StringControl;
        getControl(controlName: "lastname"): XrmBase.StringControl;
        getControl(controlName: "firstname"): XrmBase.StringControl;
        getControl(controlName: "telephone"): XrmBase.StringControl;
        getControl(controlName: "emailaddress"): XrmBase.StringControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "promotioncodename"): XrmBase.StringControl;
        getControl(controlName: "regardingobjectid"): XrmBase.LookupControl<"bulkoperation" | "campaign">;
        getControl(controlName: "responsecode"): XrmBase.OptionSetControl<campaignresponse_responsecode>;
        getControl(controlName: "channeltypecode"): XrmBase.OptionSetControl<campaignresponse_channeltypecode>;
        getControl(controlName: "partner"): XrmBase.LookupControl<"account" | "contact">;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "prioritycode"): XrmBase.OptionSetControl<campaignresponse_prioritycode>;
        getControl(controlName: "receivedon"): XrmBase.DateControl;
        getControl(controlName: "scheduledend"): XrmBase.DateControl;
        getControl(controlName: string): undefined;
    }
}
