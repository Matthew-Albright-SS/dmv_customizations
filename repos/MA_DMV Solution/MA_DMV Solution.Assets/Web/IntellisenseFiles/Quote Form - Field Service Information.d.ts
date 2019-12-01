declare namespace Form.quote.Main {
    namespace FieldServiceInformation {
        namespace Tabs {
            interface Summarytab extends XrmBase.SectionCollectionBase {
                get(name: "quote information"): XrmBase.PageSection;
                get(name: "shipping information"): XrmBase.PageSection;
                get(name: "Summary_tab_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab3 extends XrmBase.SectionCollectionBase {
                get(name: "products"): XrmBase.PageSection;
                get(name: "suggestionsection"): XrmBase.PageSection;
                get(name: "ServiceLinesSection"): XrmBase.PageSection;
                get(name: "totals"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "billto_composite"): XrmBase.StringAttribute;
            get(name: "customerid"): XrmBase.LookupAttribute<"account" | "contact">;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "discountamount"): XrmBase.NumberAttribute;
            get(name: "discountpercentage"): XrmBase.NumberAttribute;
            get(name: "effectivefrom"): XrmBase.DateAttribute;
            get(name: "effectiveto"): XrmBase.DateAttribute;
            get(name: "freightamount"): XrmBase.NumberAttribute;
            get(name: "freighttermscode"): XrmBase.OptionSetAttribute<quote_freighttermscode>;
            get(name: "msdyn_account"): XrmBase.LookupAttribute<"account">;
            get(name: "msdyn_estimatedcost"): XrmBase.NumberAttribute;
            get(name: "msdyn_estimatedquotemargin"): XrmBase.NumberAttribute;
            get(name: "msdyn_invoicesetuptotals"): XrmBase.NumberAttribute;
            get(name: "msdyn_ordertype"): XrmBase.OptionSetAttribute<msdyn_quote_msdyn_ordertype>;
            get(name: "msdyn_totalamount"): XrmBase.NumberAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "opportunityid"): XrmBase.LookupAttribute<"opportunity">;
            get(name: "paymenttermscode"): XrmBase.OptionSetAttribute<quote_paymenttermscode>;
            get(name: "pricelevelid"): XrmBase.LookupAttribute<"pricelevel">;
            get(name: "quotenumber"): XrmBase.StringAttribute;
            get(name: "revisionnumber"): XrmBase.NumberAttribute;
            get(name: "shippingmethodcode"): XrmBase.OptionSetAttribute<quote_shippingmethodcode>;
            get(name: "shipto_composite"): XrmBase.StringAttribute;
            get(name: "statecode"): XrmBase.OptionSetAttribute<quote_statecode>;
            get(name: "statuscode"): XrmBase.OptionSetAttribute<quote_statuscode>;
            get(name: "totalamount"): XrmBase.NumberAttribute;
            get(name: "totalamountlessfreight"): XrmBase.NumberAttribute;
            get(name: "totallineitemamount"): XrmBase.NumberAttribute;
            get(name: "totaltax"): XrmBase.NumberAttribute;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: "willcall"): XrmBase.OptionSetAttribute<boolean>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "billto_composite"): XrmBase.StringControl;
            get(name: "customerid"): XrmBase.LookupControl<"account" | "contact">;
            get(name: "description"): XrmBase.StringControl;
            get(name: "discountamount"): XrmBase.NumberControl;
            get(name: "discountpercentage"): XrmBase.NumberControl;
            get(name: "effectivefrom"): XrmBase.DateControl;
            get(name: "effectiveto"): XrmBase.DateControl;
            get(name: "freightamount"): XrmBase.NumberControl;
            get(name: "freighttermscode"): XrmBase.OptionSetControl<quote_freighttermscode>;
            get(name: "msdyn_account"): XrmBase.LookupControl<"account">;
            get(name: "msdyn_estimatedcost"): XrmBase.NumberControl;
            get(name: "msdyn_estimatedquotemargin"): XrmBase.NumberControl;
            get(name: "msdyn_invoicesetuptotals"): XrmBase.NumberControl;
            get(name: "msdyn_ordertype"): XrmBase.OptionSetControl<msdyn_quote_msdyn_ordertype>;
            get(name: "msdyn_totalamount"): XrmBase.NumberControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "opportunityid"): XrmBase.LookupControl<"opportunity">;
            get(name: "paymenttermscode"): XrmBase.OptionSetControl<quote_paymenttermscode>;
            get(name: "pricelevelid"): XrmBase.LookupControl<"pricelevel">;
            get(name: "ProductSuggestions_LinkControl"): XrmBase.BaseControl;
            get(name: "quotedetailsGrid"): XrmBase.SubGridControl<"quotedetail">;
            get(name: "quotenumber"): XrmBase.StringControl;
            get(name: "revisionnumber"): XrmBase.NumberControl;
            get(name: "servicesGrid"): XrmBase.SubGridControl<"quotedetail">;
            get(name: "shippingmethodcode"): XrmBase.OptionSetControl<quote_shippingmethodcode>;
            get(name: "shipto_composite"): XrmBase.StringControl;
            get(name: "statecode"): XrmBase.OptionSetControl<quote_statecode>;
            get(name: "statuscode"): XrmBase.OptionSetControl<quote_statuscode>;
            get(name: "totalamount"): XrmBase.NumberControl;
            get(name: "totalamountlessfreight"): XrmBase.NumberControl;
            get(name: "totallineitemamount"): XrmBase.NumberControl;
            get(name: "totaltax"): XrmBase.NumberControl;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: "willcall"): XrmBase.OptionSetControl<any>;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "Summary_tab"): XrmBase.PageTab<Tabs.Summarytab>;
            get(name: "tab_3"): XrmBase.PageTab<Tabs.Tab3>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface FieldServiceInformation extends XrmBase.PageBase<FieldServiceInformation.Attributes, FieldServiceInformation.Tabs, FieldServiceInformation.Controls> {
        getAttribute(attributeName: "quotenumber"): XrmBase.StringAttribute;
        getAttribute(attributeName: "revisionnumber"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_ordertype"): XrmBase.OptionSetAttribute<msdyn_quote_msdyn_ordertype>;
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "opportunityid"): XrmBase.LookupAttribute<"opportunity">;
        getAttribute(attributeName: "msdyn_account"): XrmBase.LookupAttribute<"account">;
        getAttribute(attributeName: "customerid"): XrmBase.LookupAttribute<"account" | "contact">;
        getAttribute(attributeName: "pricelevelid"): XrmBase.LookupAttribute<"pricelevel">;
        getAttribute(attributeName: "effectivefrom"): XrmBase.DateAttribute;
        getAttribute(attributeName: "effectiveto"): XrmBase.DateAttribute;
        getAttribute(attributeName: "statecode"): XrmBase.OptionSetAttribute<quote_statecode>;
        getAttribute(attributeName: "statuscode"): XrmBase.OptionSetAttribute<quote_statuscode>;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "paymenttermscode"): XrmBase.OptionSetAttribute<quote_paymenttermscode>;
        getAttribute(attributeName: "freighttermscode"): XrmBase.OptionSetAttribute<quote_freighttermscode>;
        getAttribute(attributeName: "billto_composite"): XrmBase.StringAttribute;
        getAttribute(attributeName: "willcall"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "shippingmethodcode"): XrmBase.OptionSetAttribute<quote_shippingmethodcode>;
        getAttribute(attributeName: "shipto_composite"): XrmBase.StringAttribute;
        getAttribute(attributeName: "totalamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_invoicesetuptotals"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "totallineitemamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "discountpercentage"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "discountamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "totalamountlessfreight"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "freightamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "totaltax"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_totalamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_estimatedcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_estimatedquotemargin"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "quotenumber"): XrmBase.StringControl;
        getControl(controlName: "revisionnumber"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_ordertype"): XrmBase.OptionSetControl<msdyn_quote_msdyn_ordertype>;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "opportunityid"): XrmBase.LookupControl<"opportunity">;
        getControl(controlName: "msdyn_account"): XrmBase.LookupControl<"account">;
        getControl(controlName: "customerid"): XrmBase.LookupControl<"account" | "contact">;
        getControl(controlName: "pricelevelid"): XrmBase.LookupControl<"pricelevel">;
        getControl(controlName: "effectivefrom"): XrmBase.DateControl;
        getControl(controlName: "effectiveto"): XrmBase.DateControl;
        getControl(controlName: "statecode"): XrmBase.OptionSetControl<quote_statecode>;
        getControl(controlName: "statuscode"): XrmBase.OptionSetControl<quote_statuscode>;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "paymenttermscode"): XrmBase.OptionSetControl<quote_paymenttermscode>;
        getControl(controlName: "freighttermscode"): XrmBase.OptionSetControl<quote_freighttermscode>;
        getControl(controlName: "billto_composite"): XrmBase.StringControl;
        getControl(controlName: "willcall"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "shippingmethodcode"): XrmBase.OptionSetControl<quote_shippingmethodcode>;
        getControl(controlName: "shipto_composite"): XrmBase.StringControl;
        getControl(controlName: "totalamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_invoicesetuptotals"): XrmBase.NumberControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "quotedetailsGrid"): XrmBase.SubGridControl<"quotedetail">;
        getControl(controlName: "ProductSuggestions_LinkControl"): XrmBase.BaseControl;
        getControl(controlName: "servicesGrid"): XrmBase.SubGridControl<"quotedetail">;
        getControl(controlName: "totallineitemamount"): XrmBase.NumberControl;
        getControl(controlName: "discountpercentage"): XrmBase.NumberControl;
        getControl(controlName: "discountamount"): XrmBase.NumberControl;
        getControl(controlName: "totalamountlessfreight"): XrmBase.NumberControl;
        getControl(controlName: "freightamount"): XrmBase.NumberControl;
        getControl(controlName: "totaltax"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_totalamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_estimatedcost"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_estimatedquotemargin"): XrmBase.NumberControl;
        getControl(controlName: string): undefined;
    }
}
