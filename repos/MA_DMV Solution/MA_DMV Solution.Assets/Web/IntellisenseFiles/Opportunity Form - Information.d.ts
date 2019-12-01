declare namespace Form.opportunity.Main {
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
                get(name: "opportunity information"): XrmBase.PageSection;
                get(name: "forecast information"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface ProductLineItemDetails extends XrmBase.SectionCollectionBase {
                get(name: "opportunityproducts"): XrmBase.PageSection;
                get(name: "products"): XrmBase.PageSection;
                get(name: "totals"): XrmBase.PageSection;
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
            interface OpportunityQuotes extends XrmBase.SectionCollectionBase {
                get(name: "opportunityquotes"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Administration extends XrmBase.SectionCollectionBase {
                get(name: "internal information"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "campaignid"): XrmBase.LookupAttribute<"campaign">;
            get(name: "closeprobability"): XrmBase.NumberAttribute;
            get(name: "customerid"): XrmBase.LookupAttribute<"account" | "contact">;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "discountamount"): XrmBase.NumberAttribute;
            get(name: "discountpercentage"): XrmBase.NumberAttribute;
            get(name: "estimatedclosedate"): XrmBase.DateAttribute;
            get(name: "estimatedvalue"): XrmBase.NumberAttribute;
            get(name: "freightamount"): XrmBase.NumberAttribute;
            get(name: "isrevenuesystemcalculated"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "opportunityratingcode"): XrmBase.OptionSetAttribute<opportunity_opportunityratingcode>;
            get(name: "originatingleadid"): XrmBase.LookupAttribute<"lead">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "pricelevelid"): XrmBase.LookupAttribute<"pricelevel">;
            get(name: "statuscode"): XrmBase.OptionSetAttribute<opportunity_statuscode>;
            get(name: "totalamount"): XrmBase.NumberAttribute;
            get(name: "totalamountlessfreight"): XrmBase.NumberAttribute;
            get(name: "totallineitemamount"): XrmBase.NumberAttribute;
            get(name: "totaltax"): XrmBase.NumberAttribute;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "campaignid"): XrmBase.LookupControl<"campaign">;
            get(name: "closeprobability"): XrmBase.NumberControl;
            get(name: "customerid"): XrmBase.LookupControl<"account" | "contact">;
            get(name: "description"): XrmBase.StringControl;
            get(name: "discountamount"): XrmBase.NumberControl;
            get(name: "discountpercentage"): XrmBase.NumberControl;
            get(name: "estimatedclosedate"): XrmBase.DateControl;
            get(name: "estimatedvalue"): XrmBase.NumberControl;
            get(name: "freightamount"): XrmBase.NumberControl;
            get(name: "isrevenuesystemcalculated"): XrmBase.OptionSetControl<any>;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "opportunityactivitiesgrid"): XrmBase.SubGridControl<"activitypointer">;
            get(name: "opportunityproductsGrid"): XrmBase.SubGridControl<"opportunityproduct">;
            get(name: "opportunityQuotesGrid"): XrmBase.SubGridControl<"quote">;
            get(name: "opportunityratingcode"): XrmBase.OptionSetControl<opportunity_opportunityratingcode>;
            get(name: "originatingleadid"): XrmBase.LookupControl<"lead">;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "pricelevelid"): XrmBase.LookupControl<"pricelevel">;
            get(name: "statuscode"): XrmBase.OptionSetControl<opportunity_statuscode>;
            get(name: "totalamount"): XrmBase.NumberControl;
            get(name: "totalamountlessfreight"): XrmBase.NumberControl;
            get(name: "totallineitemamount"): XrmBase.NumberControl;
            get(name: "totaltax"): XrmBase.NumberControl;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: "WebResource_RecordWall"): XrmBase.WebResourceControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "tab_recordwall"): XrmBase.PageTab<Tabs.Tabrecordwall>;
            get(name: "general"): XrmBase.PageTab<Tabs.General>;
            get(name: "Product Line Item Details"): XrmBase.PageTab<Tabs.ProductLineItemDetails>;
            get(name: "notes and activities"): XrmBase.PageTab<Tabs.NotesAndActivities>;
            get(name: "Opportunity Quotes"): XrmBase.PageTab<Tabs.OpportunityQuotes>;
            get(name: "administration"): XrmBase.PageTab<Tabs.Administration>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "customerid"): XrmBase.LookupAttribute<"account" | "contact">;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "isrevenuesystemcalculated"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "estimatedvalue"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "closeprobability"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "estimatedclosedate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "opportunityratingcode"): XrmBase.OptionSetAttribute<opportunity_opportunityratingcode>;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "pricelevelid"): XrmBase.LookupAttribute<"pricelevel">;
        getAttribute(attributeName: "discountpercentage"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "totallineitemamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "discountamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "totalamountlessfreight"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "freightamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "totalamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "totaltax"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "originatingleadid"): XrmBase.LookupAttribute<"lead">;
        getAttribute(attributeName: "statuscode"): XrmBase.OptionSetAttribute<opportunity_statuscode>;
        getAttribute(attributeName: "campaignid"): XrmBase.LookupAttribute<"campaign">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "WebResource_RecordWall"): XrmBase.WebResourceControl;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "customerid"): XrmBase.LookupControl<"account" | "contact">;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "isrevenuesystemcalculated"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "estimatedvalue"): XrmBase.NumberControl;
        getControl(controlName: "closeprobability"): XrmBase.NumberControl;
        getControl(controlName: "estimatedclosedate"): XrmBase.DateControl;
        getControl(controlName: "opportunityratingcode"): XrmBase.OptionSetControl<opportunity_opportunityratingcode>;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "pricelevelid"): XrmBase.LookupControl<"pricelevel">;
        getControl(controlName: "opportunityproductsGrid"): XrmBase.SubGridControl<"opportunityproduct">;
        getControl(controlName: "discountpercentage"): XrmBase.NumberControl;
        getControl(controlName: "totallineitemamount"): XrmBase.NumberControl;
        getControl(controlName: "discountamount"): XrmBase.NumberControl;
        getControl(controlName: "totalamountlessfreight"): XrmBase.NumberControl;
        getControl(controlName: "freightamount"): XrmBase.NumberControl;
        getControl(controlName: "totalamount"): XrmBase.NumberControl;
        getControl(controlName: "totaltax"): XrmBase.NumberControl;
        getControl(controlName: "opportunityactivitiesgrid"): XrmBase.SubGridControl<"activitypointer">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "opportunityQuotesGrid"): XrmBase.SubGridControl<"quote">;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "originatingleadid"): XrmBase.LookupControl<"lead">;
        getControl(controlName: "statuscode"): XrmBase.OptionSetControl<opportunity_statuscode>;
        getControl(controlName: "campaignid"): XrmBase.LookupControl<"campaign">;
        getControl(controlName: string): undefined;
    }
}
