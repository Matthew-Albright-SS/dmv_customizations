declare namespace Form.salesorder.Main {
    namespace ProjectInformation {
        namespace Tabs {
            interface Summarytab extends XrmBase.SectionCollectionBase {
                get(name: "Summary"): XrmBase.PageSection;
                get(name: "shipping information"): XrmBase.PageSection;
                get(name: "addresses"): XrmBase.PageSection;
                get(name: "BillingPrintSetup"): XrmBase.PageSection;
                get(name: "suggestionsection"): XrmBase.PageSection;
                get(name: "Social Pane"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface LinesTab extends XrmBase.SectionCollectionBase {
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
            interface TabContractPerformance extends XrmBase.SectionCollectionBase {
                get(name: "tab_ContractPerformance_section_2"): XrmBase.PageSection;
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
            get(name: "freighttermscode"): XrmBase.OptionSetAttribute<salesorder_freighttermscode>;
            get(name: "ispricelocked"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_accountmanagerid"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "msdyn_contractorganizationalunitid"): XrmBase.LookupAttribute<"msdyn_organizationalunit">;
            get(name: "msdyn_ordertype"): XrmBase.OptionSetAttribute<msdyn_salesorder_msdyn_ordertype>;
            get(name: "msdyn_psastatusreason"): XrmBase.OptionSetAttribute<msdyn_projectcontractstatus>;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "opportunityid"): XrmBase.LookupAttribute<"opportunity">;
            get(name: "ordernumber"): XrmBase.StringAttribute;
            get(name: "paymenttermscode"): XrmBase.OptionSetAttribute<salesorder_paymenttermscode>;
            get(name: "pricelevelid"): XrmBase.LookupAttribute<"pricelevel">;
            get(name: "quoteid"): XrmBase.LookupAttribute<"quote">;
            get(name: "requestdeliveryby"): XrmBase.DateAttribute;
            get(name: "shippingmethodcode"): XrmBase.OptionSetAttribute<salesorder_shippingmethodcode>;
            get(name: "shipto_composite"): XrmBase.StringAttribute;
            get(name: "statecode"): XrmBase.OptionSetAttribute<salesorder_statecode>;
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
            get(name: "customerid"): XrmBase.LookupControl<"account" | "contact">;
            get(name: "DynamicPropertiesList_LinkControl"): XrmBase.BaseControl;
            get(name: "freighttermscode"): XrmBase.OptionSetControl<salesorder_freighttermscode>;
            get(name: "ispricelocked"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_accountmanagerid"): XrmBase.LookupControl<"systemuser">;
            get(name: "msdyn_contractorganizationalunitid"): XrmBase.LookupControl<"msdyn_organizationalunit">;
            get(name: "msdyn_ordertype"): XrmBase.OptionSetControl<msdyn_salesorder_msdyn_ordertype>;
            get(name: "msdyn_psastatusreason"): XrmBase.OptionSetControl<msdyn_projectcontractstatus>;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "opportunityid"): XrmBase.LookupControl<"opportunity">;
            get(name: "ordernumber"): XrmBase.StringControl;
            get(name: "paymenttermscode"): XrmBase.OptionSetControl<salesorder_paymenttermscode>;
            get(name: "pricelevelid"): XrmBase.LookupControl<"pricelevel">;
            get(name: "ProductSuggestions_LinkControl"): XrmBase.BaseControl;
            get(name: "ProjectContractLines"): XrmBase.SubGridControl<"salesorderdetail">;
            get(name: "ProjectPriceListsSubGrid"): XrmBase.SubGridControl<"msdyn_orderpricelist">;
            get(name: "quoteid"): XrmBase.LookupControl<"quote">;
            get(name: "requestdeliveryby"): XrmBase.DateControl;
            get(name: "salesorderdetailsGrid"): XrmBase.SubGridControl<"salesorderdetail">;
            get(name: "shippingmethodcode"): XrmBase.OptionSetControl<salesorder_shippingmethodcode>;
            get(name: "shipto_composite"): XrmBase.StringControl;
            get(name: "statecode"): XrmBase.OptionSetControl<salesorder_statecode>;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: "WebResource_ContractPerformance"): XrmBase.WebResourceControl;
            get(name: "willcall"): XrmBase.OptionSetControl<any>;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "summary_tab"): XrmBase.PageTab<Tabs.Summarytab>;
            get(name: "LinesTab"): XrmBase.PageTab<Tabs.LinesTab>;
            get(name: "ProjectPriceListsTab"): XrmBase.PageTab<Tabs.ProjectPriceListsTab>;
            get(name: "tab_ContractPerformance"): XrmBase.PageTab<Tabs.TabContractPerformance>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface ProjectInformation extends XrmBase.PageBase<ProjectInformation.Attributes, ProjectInformation.Tabs, ProjectInformation.Controls> {
        getAttribute(attributeName: "ordernumber"): XrmBase.StringAttribute;
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "customerid"): XrmBase.LookupAttribute<"account" | "contact">;
        getAttribute(attributeName: "msdyn_accountmanagerid"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "msdyn_contractorganizationalunitid"): XrmBase.LookupAttribute<"msdyn_organizationalunit">;
        getAttribute(attributeName: "msdyn_ordertype"): XrmBase.OptionSetAttribute<msdyn_salesorder_msdyn_ordertype>;
        getAttribute(attributeName: "ispricelocked"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "pricelevelid"): XrmBase.LookupAttribute<"pricelevel">;
        getAttribute(attributeName: "requestdeliveryby"): XrmBase.DateAttribute;
        getAttribute(attributeName: "opportunityid"): XrmBase.LookupAttribute<"opportunity">;
        getAttribute(attributeName: "quoteid"): XrmBase.LookupAttribute<"quote">;
        getAttribute(attributeName: "msdyn_psastatusreason"): XrmBase.OptionSetAttribute<msdyn_projectcontractstatus>;
        getAttribute(attributeName: "statecode"): XrmBase.OptionSetAttribute<salesorder_statecode>;
        getAttribute(attributeName: "shippingmethodcode"): XrmBase.OptionSetAttribute<salesorder_shippingmethodcode>;
        getAttribute(attributeName: "freighttermscode"): XrmBase.OptionSetAttribute<salesorder_freighttermscode>;
        getAttribute(attributeName: "willcall"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "shipto_composite"): XrmBase.StringAttribute;
        getAttribute(attributeName: "billto_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "billto_composite"): XrmBase.StringAttribute;
        getAttribute(attributeName: "billto_contactname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "paymenttermscode"): XrmBase.OptionSetAttribute<salesorder_paymenttermscode>;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "ordernumber"): XrmBase.StringControl;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "customerid"): XrmBase.LookupControl<"account" | "contact">;
        getControl(controlName: "msdyn_accountmanagerid"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "msdyn_contractorganizationalunitid"): XrmBase.LookupControl<"msdyn_organizationalunit">;
        getControl(controlName: "msdyn_ordertype"): XrmBase.OptionSetControl<msdyn_salesorder_msdyn_ordertype>;
        getControl(controlName: "ispricelocked"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "pricelevelid"): XrmBase.LookupControl<"pricelevel">;
        getControl(controlName: "requestdeliveryby"): XrmBase.DateControl;
        getControl(controlName: "opportunityid"): XrmBase.LookupControl<"opportunity">;
        getControl(controlName: "quoteid"): XrmBase.LookupControl<"quote">;
        getControl(controlName: "msdyn_psastatusreason"): XrmBase.OptionSetControl<msdyn_projectcontractstatus>;
        getControl(controlName: "statecode"): XrmBase.OptionSetControl<salesorder_statecode>;
        getControl(controlName: "shippingmethodcode"): XrmBase.OptionSetControl<salesorder_shippingmethodcode>;
        getControl(controlName: "freighttermscode"): XrmBase.OptionSetControl<salesorder_freighttermscode>;
        getControl(controlName: "willcall"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "shipto_composite"): XrmBase.StringControl;
        getControl(controlName: "billto_name"): XrmBase.StringControl;
        getControl(controlName: "billto_composite"): XrmBase.StringControl;
        getControl(controlName: "billto_contactname"): XrmBase.StringControl;
        getControl(controlName: "paymenttermscode"): XrmBase.OptionSetControl<salesorder_paymenttermscode>;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "ProductSuggestions_LinkControl"): XrmBase.BaseControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "ProjectContractLines"): XrmBase.SubGridControl<"salesorderdetail">;
        getControl(controlName: "salesorderdetailsGrid"): XrmBase.SubGridControl<"salesorderdetail">;
        getControl(controlName: "DynamicPropertiesList_LinkControl"): XrmBase.BaseControl;
        getControl(controlName: "ProjectPriceListsSubGrid"): XrmBase.SubGridControl<"msdyn_orderpricelist">;
        getControl(controlName: "WebResource_ContractPerformance"): XrmBase.WebResourceControl;
        getControl(controlName: string): undefined;
    }
}
