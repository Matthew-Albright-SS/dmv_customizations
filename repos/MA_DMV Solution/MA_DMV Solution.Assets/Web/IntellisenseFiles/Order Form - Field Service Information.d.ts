declare namespace Form.salesorder.Main {
    namespace FieldServiceInformation {
        namespace Tabs {
            interface Summarytab extends XrmBase.SectionCollectionBase {
                get(name: "Summary"): XrmBase.PageSection;
                get(name: "BillingPrintSetup"): XrmBase.PageSection;
                get(name: "order_line_items_section_4"): XrmBase.PageSection;
                get(name: "SocialPanTab"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Orderlineitems extends XrmBase.SectionCollectionBase {
                get(name: "ProductLinesSection"): XrmBase.PageSection;
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
            get(name: "billto_contactname"): XrmBase.StringAttribute;
            get(name: "customerid"): XrmBase.LookupAttribute<"account" | "contact">;
            get(name: "datefulfilled"): XrmBase.DateAttribute;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "discountamount"): XrmBase.NumberAttribute;
            get(name: "discountpercentage"): XrmBase.NumberAttribute;
            get(name: "freightamount"): XrmBase.NumberAttribute;
            get(name: "freighttermscode"): XrmBase.OptionSetAttribute<salesorder_freighttermscode>;
            get(name: "ispricelocked"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_account"): XrmBase.LookupAttribute<"account">;
            get(name: "msdyn_ordertype"): XrmBase.OptionSetAttribute<msdyn_salesorder_msdyn_ordertype>;
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
            get(name: "statuscode"): XrmBase.OptionSetAttribute<salesorder_statuscode>;
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
            get(name: "billto_contactname"): XrmBase.StringControl;
            get(name: "customerid"): XrmBase.LookupControl<"account" | "contact">;
            get(name: "datefulfilled"): XrmBase.DateControl;
            get(name: "description"): XrmBase.StringControl;
            get(name: "discountamount"): XrmBase.NumberControl;
            get(name: "discountpercentage"): XrmBase.NumberControl;
            get(name: "freightamount"): XrmBase.NumberControl;
            get(name: "freighttermscode"): XrmBase.OptionSetControl<salesorder_freighttermscode>;
            get(name: "ispricelocked"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_account"): XrmBase.LookupControl<"account">;
            get(name: "msdyn_ordertype"): XrmBase.OptionSetControl<msdyn_salesorder_msdyn_ordertype>;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "opportunityid"): XrmBase.LookupControl<"opportunity">;
            get(name: "ordernumber"): XrmBase.StringControl;
            get(name: "OrderServicesGrid"): XrmBase.SubGridControl<"salesorderdetail">;
            get(name: "paymenttermscode"): XrmBase.OptionSetControl<salesorder_paymenttermscode>;
            get(name: "pricelevelid"): XrmBase.LookupControl<"pricelevel">;
            get(name: "quoteid"): XrmBase.LookupControl<"quote">;
            get(name: "requestdeliveryby"): XrmBase.DateControl;
            get(name: "salesorderdetailsGrid"): XrmBase.SubGridControl<"salesorderdetail">;
            get(name: "shippingmethodcode"): XrmBase.OptionSetControl<salesorder_shippingmethodcode>;
            get(name: "shipto_composite"): XrmBase.StringControl;
            get(name: "statecode"): XrmBase.OptionSetControl<salesorder_statecode>;
            get(name: "statuscode"): XrmBase.OptionSetControl<salesorder_statuscode>;
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
            get(name: "summary_tab"): XrmBase.PageTab<Tabs.Summarytab>;
            get(name: "order_line_items"): XrmBase.PageTab<Tabs.Orderlineitems>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface FieldServiceInformation extends XrmBase.PageBase<FieldServiceInformation.Attributes, FieldServiceInformation.Tabs, FieldServiceInformation.Controls> {
        getAttribute(attributeName: "ordernumber"): XrmBase.StringAttribute;
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_ordertype"): XrmBase.OptionSetAttribute<msdyn_salesorder_msdyn_ordertype>;
        getAttribute(attributeName: "msdyn_account"): XrmBase.LookupAttribute<"account">;
        getAttribute(attributeName: "customerid"): XrmBase.LookupAttribute<"account" | "contact">;
        getAttribute(attributeName: "pricelevelid"): XrmBase.LookupAttribute<"pricelevel">;
        getAttribute(attributeName: "ispricelocked"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "opportunityid"): XrmBase.LookupAttribute<"opportunity">;
        getAttribute(attributeName: "quoteid"): XrmBase.LookupAttribute<"quote">;
        getAttribute(attributeName: "statecode"): XrmBase.OptionSetAttribute<salesorder_statecode>;
        getAttribute(attributeName: "statuscode"): XrmBase.OptionSetAttribute<salesorder_statuscode>;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "paymenttermscode"): XrmBase.OptionSetAttribute<salesorder_paymenttermscode>;
        getAttribute(attributeName: "freighttermscode"): XrmBase.OptionSetAttribute<salesorder_freighttermscode>;
        getAttribute(attributeName: "billto_composite"): XrmBase.StringAttribute;
        getAttribute(attributeName: "willcall"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "shippingmethodcode"): XrmBase.OptionSetAttribute<salesorder_shippingmethodcode>;
        getAttribute(attributeName: "shipto_composite"): XrmBase.StringAttribute;
        getAttribute(attributeName: "billto_contactname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "requestdeliveryby"): XrmBase.DateAttribute;
        getAttribute(attributeName: "datefulfilled"): XrmBase.DateAttribute;
        getAttribute(attributeName: "totallineitemamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "discountpercentage"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "discountamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "totalamountlessfreight"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "freightamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "totaltax"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "totalamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "ordernumber"): XrmBase.StringControl;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_ordertype"): XrmBase.OptionSetControl<msdyn_salesorder_msdyn_ordertype>;
        getControl(controlName: "msdyn_account"): XrmBase.LookupControl<"account">;
        getControl(controlName: "customerid"): XrmBase.LookupControl<"account" | "contact">;
        getControl(controlName: "pricelevelid"): XrmBase.LookupControl<"pricelevel">;
        getControl(controlName: "ispricelocked"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "opportunityid"): XrmBase.LookupControl<"opportunity">;
        getControl(controlName: "quoteid"): XrmBase.LookupControl<"quote">;
        getControl(controlName: "statecode"): XrmBase.OptionSetControl<salesorder_statecode>;
        getControl(controlName: "statuscode"): XrmBase.OptionSetControl<salesorder_statuscode>;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "paymenttermscode"): XrmBase.OptionSetControl<salesorder_paymenttermscode>;
        getControl(controlName: "freighttermscode"): XrmBase.OptionSetControl<salesorder_freighttermscode>;
        getControl(controlName: "billto_composite"): XrmBase.StringControl;
        getControl(controlName: "willcall"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "shippingmethodcode"): XrmBase.OptionSetControl<salesorder_shippingmethodcode>;
        getControl(controlName: "shipto_composite"): XrmBase.StringControl;
        getControl(controlName: "billto_contactname"): XrmBase.StringControl;
        getControl(controlName: "requestdeliveryby"): XrmBase.DateControl;
        getControl(controlName: "datefulfilled"): XrmBase.DateControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "salesorderdetailsGrid"): XrmBase.SubGridControl<"salesorderdetail">;
        getControl(controlName: "OrderServicesGrid"): XrmBase.SubGridControl<"salesorderdetail">;
        getControl(controlName: "totallineitemamount"): XrmBase.NumberControl;
        getControl(controlName: "discountpercentage"): XrmBase.NumberControl;
        getControl(controlName: "discountamount"): XrmBase.NumberControl;
        getControl(controlName: "totalamountlessfreight"): XrmBase.NumberControl;
        getControl(controlName: "freightamount"): XrmBase.NumberControl;
        getControl(controlName: "totaltax"): XrmBase.NumberControl;
        getControl(controlName: "totalamount"): XrmBase.NumberControl;
        getControl(controlName: string): undefined;
    }
}
