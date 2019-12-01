declare namespace Form.quote.Main {
    namespace ProjectInformation {
        namespace Tabs {
            interface QuoteAnaylsistab extends XrmBase.SectionCollectionBase {
                get(name: "tab_6_section_1"): XrmBase.PageSection;
                get(name: "tab_6_section_2"): XrmBase.PageSection;
                get(name: "tab_6_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Summarytab extends XrmBase.SectionCollectionBase {
                get(name: "quote information"): XrmBase.PageSection;
                get(name: "description_section"): XrmBase.PageSection;
                get(name: "Summary_tab_section_9"): XrmBase.PageSection;
                get(name: "shipping information"): XrmBase.PageSection;
                get(name: "addresses"): XrmBase.PageSection;
                get(name: "Summary_tab_section_8"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface QuoteLinesTab extends XrmBase.SectionCollectionBase {
                get(name: "ProjectLinesSection"): XrmBase.PageSection;
                get(name: "ProductLinesSection"): XrmBase.PageSection;
                get(name: "DynamicProperties"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface ProjectPriceListsTab extends XrmBase.SectionCollectionBase {
                get(name: "ProjectPriceListsSection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Profitabilityanalyticstab extends XrmBase.SectionCollectionBase {
                get(name: "analyticResultSection"): XrmBase.PageSection;
                get(name: "analyticsChartDetailsSection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Competiveanalysistab extends XrmBase.SectionCollectionBase {
                get(name: "Summary_tab_section_10"): XrmBase.PageSection;
                get(name: "analytics_tab_section_5"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "billto_composite"): XrmBase.StringAttribute;
            get(name: "billto_contactname"): XrmBase.StringAttribute;
            get(name: "billto_name"): XrmBase.StringAttribute;
            get(name: "customerid"): XrmBase.LookupAttribute<"account" | "contact">;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "effectivefrom"): XrmBase.DateAttribute;
            get(name: "effectiveto"): XrmBase.DateAttribute;
            get(name: "expireson"): XrmBase.DateAttribute;
            get(name: "freighttermscode"): XrmBase.OptionSetAttribute<quote_freighttermscode>;
            get(name: "msdyn_accountmanagerid"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "msdyn_adjustedgrossmargin"): XrmBase.NumberAttribute;
            get(name: "msdyn_competitive"): XrmBase.OptionSetAttribute<msdyn_competitive>;
            get(name: "msdyn_contractorganizationalunitid"): XrmBase.LookupAttribute<"msdyn_organizationalunit">;
            get(name: "msdyn_customerbudgetrollup"): XrmBase.NumberAttribute;
            get(name: "msdyn_estimatedbudget"): XrmBase.OptionSetAttribute<msdyn_budgetestimate>;
            get(name: "msdyn_estimatedcompletionrollup"): XrmBase.DateAttribute;
            get(name: "msdyn_estimatedschedule"): XrmBase.OptionSetAttribute<msdyn_schedule>;
            get(name: "msdyn_grossmargin"): XrmBase.NumberAttribute;
            get(name: "msdyn_ordertype"): XrmBase.OptionSetAttribute<msdyn_quote_msdyn_ordertype>;
            get(name: "msdyn_profitability"): XrmBase.OptionSetAttribute<msdyn_profitability>;
            get(name: "msdyn_totalchargeablecostrollup"): XrmBase.NumberAttribute;
            get(name: "msdyn_totalnonchargeablecostrollup"): XrmBase.NumberAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "opportunityid"): XrmBase.LookupAttribute<"opportunity">;
            get(name: "paymenttermscode"): XrmBase.OptionSetAttribute<quote_paymenttermscode>;
            get(name: "pricelevelid"): XrmBase.LookupAttribute<"pricelevel">;
            get(name: "quotenumber"): XrmBase.StringAttribute;
            get(name: "requestdeliveryby"): XrmBase.DateAttribute;
            get(name: "revisionnumber"): XrmBase.NumberAttribute;
            get(name: "shippingmethodcode"): XrmBase.OptionSetAttribute<quote_shippingmethodcode>;
            get(name: "shipto_composite"): XrmBase.StringAttribute;
            get(name: "statuscode"): XrmBase.OptionSetAttribute<quote_statuscode>;
            get(name: "totalamount"): XrmBase.NumberAttribute;
            get(name: "totalamount_base"): XrmBase.NumberAttribute;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: "willcall"): XrmBase.OptionSetAttribute<boolean>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "billto_composite"): XrmBase.StringControl;
            get(name: "billto_contactname"): XrmBase.StringControl;
            get(name: "billto_name"): XrmBase.StringControl;
            get(name: "costRevenueDistribution"): XrmBase.SubGridControl<"msdyn_quotelineanalyticsbreakdown">;
            get(name: "customerid"): XrmBase.LookupControl<"account" | "contact">;
            get(name: "description"): XrmBase.StringControl;
            get(name: "DynamicPropertiesList_LinkControl"): XrmBase.BaseControl;
            get(name: "effectivefrom"): XrmBase.DateControl;
            get(name: "effectiveto"): XrmBase.DateControl;
            get(name: "expireson"): XrmBase.DateControl;
            get(name: "freighttermscode"): XrmBase.OptionSetControl<quote_freighttermscode>;
            get(name: "msdyn_accountmanagerid"): XrmBase.LookupControl<"systemuser">;
            get(name: "msdyn_adjustedgrossmargin"): XrmBase.NumberControl;
            get(name: "msdyn_competitive"): XrmBase.OptionSetControl<msdyn_competitive>;
            get(name: "msdyn_contractorganizationalunitid"): XrmBase.LookupControl<"msdyn_organizationalunit">;
            get(name: "msdyn_customerbudgetrollup"): XrmBase.NumberControl;
            get(name: "msdyn_estimatedbudget"): XrmBase.OptionSetControl<msdyn_budgetestimate>;
            get(name: "msdyn_estimatedcompletionrollup"): XrmBase.DateControl;
            get(name: "msdyn_estimatedschedule"): XrmBase.OptionSetControl<msdyn_schedule>;
            get(name: "msdyn_grossmargin"): XrmBase.NumberControl;
            get(name: "msdyn_ordertype"): XrmBase.OptionSetControl<msdyn_quote_msdyn_ordertype>;
            get(name: "msdyn_profitability"): XrmBase.OptionSetControl<msdyn_profitability>;
            get(name: "msdyn_totalchargeablecostrollup"): XrmBase.NumberControl;
            get(name: "msdyn_totalnonchargeablecostrollup"): XrmBase.NumberControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "opportunityid"): XrmBase.LookupControl<"opportunity">;
            get(name: "paymenttermscode"): XrmBase.OptionSetControl<quote_paymenttermscode>;
            get(name: "pricelevelid"): XrmBase.LookupControl<"pricelevel">;
            get(name: "ProjectPriceListsSubGrid"): XrmBase.SubGridControl<"msdyn_quotepricelist">;
            get(name: "ProjectQuoteLines"): XrmBase.SubGridControl<"quotedetail">;
            get(name: "quotedetailsGrid"): XrmBase.SubGridControl<"quotedetail">;
            get(name: "quoteLineComparisonGrid"): XrmBase.SubGridControl<"quotedetail">;
            get(name: "quoteLineDetailAnalysis"): XrmBase.SubGridControl<"msdyn_quotelineanalyticsbreakdown">;
            get(name: "quotenumber"): XrmBase.StringControl;
            get(name: "requestdeliveryby"): XrmBase.DateControl;
            get(name: "revisionnumber"): XrmBase.NumberControl;
            get(name: "shippingmethodcode"): XrmBase.OptionSetControl<quote_shippingmethodcode>;
            get(name: "shipto_composite"): XrmBase.StringControl;
            get(name: "statuscode"): XrmBase.OptionSetControl<quote_statuscode>;
            get(name: "totalamount"): XrmBase.NumberControl;
            get(name: "totalamount_base"): XrmBase.NumberControl;
            get(name: "totalQuoteAmountComparisonGrid"): XrmBase.SubGridControl<"quotedetail">;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: "willcall"): XrmBase.OptionSetControl<any>;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "quoteAnaylsis_tab"): XrmBase.PageTab<Tabs.QuoteAnaylsistab>;
            get(name: "Summary_tab"): XrmBase.PageTab<Tabs.Summarytab>;
            get(name: "QuoteLinesTab"): XrmBase.PageTab<Tabs.QuoteLinesTab>;
            get(name: "ProjectPriceListsTab"): XrmBase.PageTab<Tabs.ProjectPriceListsTab>;
            get(name: "profitability_analytics_tab"): XrmBase.PageTab<Tabs.Profitabilityanalyticstab>;
            get(name: "competive_analysis_tab"): XrmBase.PageTab<Tabs.Competiveanalysistab>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface ProjectInformation extends XrmBase.PageBase<ProjectInformation.Attributes, ProjectInformation.Tabs, ProjectInformation.Controls> {
        getAttribute(attributeName: "msdyn_profitability"): XrmBase.OptionSetAttribute<msdyn_profitability>;
        getAttribute(attributeName: "msdyn_grossmargin"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_adjustedgrossmargin"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_competitive"): XrmBase.OptionSetAttribute<msdyn_competitive>;
        getAttribute(attributeName: "msdyn_estimatedschedule"): XrmBase.OptionSetAttribute<msdyn_schedule>;
        getAttribute(attributeName: "msdyn_estimatedbudget"): XrmBase.OptionSetAttribute<msdyn_budgetestimate>;
        getAttribute(attributeName: "quotenumber"): XrmBase.StringAttribute;
        getAttribute(attributeName: "revisionnumber"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_ordertype"): XrmBase.OptionSetAttribute<msdyn_quote_msdyn_ordertype>;
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "customerid"): XrmBase.LookupAttribute<"account" | "contact">;
        getAttribute(attributeName: "msdyn_accountmanagerid"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "msdyn_contractorganizationalunitid"): XrmBase.LookupAttribute<"msdyn_organizationalunit">;
        getAttribute(attributeName: "opportunityid"): XrmBase.LookupAttribute<"opportunity">;
        getAttribute(attributeName: "pricelevelid"): XrmBase.LookupAttribute<"pricelevel">;
        getAttribute(attributeName: "requestdeliveryby"): XrmBase.DateAttribute;
        getAttribute(attributeName: "expireson"): XrmBase.DateAttribute;
        getAttribute(attributeName: "statuscode"): XrmBase.OptionSetAttribute<quote_statuscode>;
        getAttribute(attributeName: "effectivefrom"): XrmBase.DateAttribute;
        getAttribute(attributeName: "effectiveto"): XrmBase.DateAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "billto_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "billto_composite"): XrmBase.StringAttribute;
        getAttribute(attributeName: "billto_contactname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "paymenttermscode"): XrmBase.OptionSetAttribute<quote_paymenttermscode>;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "shippingmethodcode"): XrmBase.OptionSetAttribute<quote_shippingmethodcode>;
        getAttribute(attributeName: "freighttermscode"): XrmBase.OptionSetAttribute<quote_freighttermscode>;
        getAttribute(attributeName: "willcall"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "shipto_composite"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_totalchargeablecostrollup"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "totalamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_totalnonchargeablecostrollup"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "totalamount_base"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_estimatedcompletionrollup"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_customerbudgetrollup"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_profitability"): XrmBase.OptionSetControl<msdyn_profitability>;
        getControl(controlName: "msdyn_grossmargin"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_adjustedgrossmargin"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_competitive"): XrmBase.OptionSetControl<msdyn_competitive>;
        getControl(controlName: "msdyn_estimatedschedule"): XrmBase.OptionSetControl<msdyn_schedule>;
        getControl(controlName: "msdyn_estimatedbudget"): XrmBase.OptionSetControl<msdyn_budgetestimate>;
        getControl(controlName: "quotenumber"): XrmBase.StringControl;
        getControl(controlName: "revisionnumber"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_ordertype"): XrmBase.OptionSetControl<msdyn_quote_msdyn_ordertype>;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "customerid"): XrmBase.LookupControl<"account" | "contact">;
        getControl(controlName: "msdyn_accountmanagerid"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "msdyn_contractorganizationalunitid"): XrmBase.LookupControl<"msdyn_organizationalunit">;
        getControl(controlName: "opportunityid"): XrmBase.LookupControl<"opportunity">;
        getControl(controlName: "pricelevelid"): XrmBase.LookupControl<"pricelevel">;
        getControl(controlName: "requestdeliveryby"): XrmBase.DateControl;
        getControl(controlName: "expireson"): XrmBase.DateControl;
        getControl(controlName: "statuscode"): XrmBase.OptionSetControl<quote_statuscode>;
        getControl(controlName: "effectivefrom"): XrmBase.DateControl;
        getControl(controlName: "effectiveto"): XrmBase.DateControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "billto_name"): XrmBase.StringControl;
        getControl(controlName: "billto_composite"): XrmBase.StringControl;
        getControl(controlName: "billto_contactname"): XrmBase.StringControl;
        getControl(controlName: "paymenttermscode"): XrmBase.OptionSetControl<quote_paymenttermscode>;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "shippingmethodcode"): XrmBase.OptionSetControl<quote_shippingmethodcode>;
        getControl(controlName: "freighttermscode"): XrmBase.OptionSetControl<quote_freighttermscode>;
        getControl(controlName: "willcall"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "shipto_composite"): XrmBase.StringControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "ProjectQuoteLines"): XrmBase.SubGridControl<"quotedetail">;
        getControl(controlName: "quotedetailsGrid"): XrmBase.SubGridControl<"quotedetail">;
        getControl(controlName: "DynamicPropertiesList_LinkControl"): XrmBase.BaseControl;
        getControl(controlName: "ProjectPriceListsSubGrid"): XrmBase.SubGridControl<"msdyn_quotepricelist">;
        getControl(controlName: "msdyn_totalchargeablecostrollup"): XrmBase.NumberControl;
        getControl(controlName: "totalamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_totalnonchargeablecostrollup"): XrmBase.NumberControl;
        getControl(controlName: "totalamount_base"): XrmBase.NumberControl;
        getControl(controlName: "costRevenueDistribution"): XrmBase.SubGridControl<"msdyn_quotelineanalyticsbreakdown">;
        getControl(controlName: "quoteLineDetailAnalysis"): XrmBase.SubGridControl<"msdyn_quotelineanalyticsbreakdown">;
        getControl(controlName: "msdyn_estimatedcompletionrollup"): XrmBase.DateControl;
        getControl(controlName: "msdyn_customerbudgetrollup"): XrmBase.NumberControl;
        getControl(controlName: "quoteLineComparisonGrid"): XrmBase.SubGridControl<"quotedetail">;
        getControl(controlName: "totalQuoteAmountComparisonGrid"): XrmBase.SubGridControl<"quotedetail">;
        getControl(controlName: string): undefined;
    }
}
