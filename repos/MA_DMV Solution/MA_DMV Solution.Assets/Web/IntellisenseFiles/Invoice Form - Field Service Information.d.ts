declare namespace Form.invoice.Main {
    namespace FieldServiceInformation {
        namespace Tabs {
            interface Summarytab extends XrmBase.SectionCollectionBase {
                get(name: "invoice information"): XrmBase.PageSection;
                get(name: "Summary_tab_section_11"): XrmBase.PageSection;
                get(name: "dates"): XrmBase.PageSection;
                get(name: "shipping information"): XrmBase.PageSection;
                get(name: "addresses"): XrmBase.PageSection;
                get(name: "HiddenFields"): XrmBase.PageSection;
                get(name: "Summary_tab_section_13"): XrmBase.PageSection;
                get(name: "ServicingSection"): XrmBase.PageSection;
                get(name: "products"): XrmBase.PageSection;
                get(name: "DynamicProperties"): XrmBase.PageSection;
                get(name: "totals"): XrmBase.PageSection;
                get(name: "Social Pane"): XrmBase.PageSection;
                get(name: "details_tab_section_3"): XrmBase.PageSection;
                get(name: "InvoicePeriodSection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Detailstab extends XrmBase.SectionCollectionBase {
                get(name: "details_tab_section_4"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "billto_composite"): XrmBase.StringAttribute;
            get(name: "createdon"): XrmBase.DateAttribute;
            get(name: "customerid"): XrmBase.LookupAttribute<"account" | "contact">;
            get(name: "datedelivered"): XrmBase.DateAttribute;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "discountamount"): XrmBase.NumberAttribute;
            get(name: "discountpercentage"): XrmBase.NumberAttribute;
            get(name: "duedate"): XrmBase.DateAttribute;
            get(name: "freightamount"): XrmBase.NumberAttribute;
            get(name: "invoicenumber"): XrmBase.StringAttribute;
            get(name: "ispricelocked"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_invoicedate"): XrmBase.DateAttribute;
            get(name: "msdyn_ordertype"): XrmBase.OptionSetAttribute<msdyn_invoice_msdyn_ordertype>;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "opportunityid"): XrmBase.LookupAttribute<"opportunity">;
            get(name: "paymenttermscode"): XrmBase.OptionSetAttribute<invoice_paymenttermscode>;
            get(name: "pricelevelid"): XrmBase.LookupAttribute<"pricelevel">;
            get(name: "salesorderid"): XrmBase.LookupAttribute<"salesorder">;
            get(name: "shippingmethodcode"): XrmBase.OptionSetAttribute<invoice_shippingmethodcode>;
            get(name: "shipto_composite"): XrmBase.StringAttribute;
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
            get(name: "createdon"): XrmBase.DateControl;
            get(name: "customerid"): XrmBase.LookupControl<"account" | "contact">;
            get(name: "datedelivered"): XrmBase.DateControl;
            get(name: "description"): XrmBase.StringControl;
            get(name: "discountamount"): XrmBase.NumberControl;
            get(name: "discountpercentage"): XrmBase.NumberControl;
            get(name: "duedate"): XrmBase.DateControl;
            get(name: "DynamicPropertiesList_LinkControl"): XrmBase.BaseControl;
            get(name: "freightamount"): XrmBase.NumberControl;
            get(name: "GridInvoicingPeriod"): XrmBase.SubGridControl<"msdyn_orderinvoicingsetupdate">;
            get(name: "GridServiceLines"): XrmBase.SubGridControl<"invoicedetail">;
            get(name: "invoicedetailsGrid"): XrmBase.SubGridControl<"invoicedetail">;
            get(name: "invoicenumber"): XrmBase.StringControl;
            get(name: "ispricelocked"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_invoicedate"): XrmBase.DateControl;
            get(name: "msdyn_ordertype"): XrmBase.OptionSetControl<msdyn_invoice_msdyn_ordertype>;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "opportunityid"): XrmBase.LookupControl<"opportunity">;
            get(name: "paymenttermscode"): XrmBase.OptionSetControl<invoice_paymenttermscode>;
            get(name: "pricelevelid"): XrmBase.LookupControl<"pricelevel">;
            get(name: "salesorderid"): XrmBase.LookupControl<"salesorder">;
            get(name: "shippingmethodcode"): XrmBase.OptionSetControl<invoice_shippingmethodcode>;
            get(name: "shipto_composite"): XrmBase.StringControl;
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
            get(name: "details_tab"): XrmBase.PageTab<Tabs.Detailstab>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface FieldServiceInformation extends XrmBase.PageBase<FieldServiceInformation.Attributes, FieldServiceInformation.Tabs, FieldServiceInformation.Controls> {
        getAttribute(attributeName: "invoicenumber"): XrmBase.StringAttribute;
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "customerid"): XrmBase.LookupAttribute<"account" | "contact">;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "pricelevelid"): XrmBase.LookupAttribute<"pricelevel">;
        getAttribute(attributeName: "ispricelocked"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "opportunityid"): XrmBase.LookupAttribute<"opportunity">;
        getAttribute(attributeName: "salesorderid"): XrmBase.LookupAttribute<"salesorder">;
        getAttribute(attributeName: "datedelivered"): XrmBase.DateAttribute;
        getAttribute(attributeName: "shippingmethodcode"): XrmBase.OptionSetAttribute<invoice_shippingmethodcode>;
        getAttribute(attributeName: "paymenttermscode"): XrmBase.OptionSetAttribute<invoice_paymenttermscode>;
        getAttribute(attributeName: "billto_composite"): XrmBase.StringAttribute;
        getAttribute(attributeName: "willcall"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "shipto_composite"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_ordertype"): XrmBase.OptionSetAttribute<msdyn_invoice_msdyn_ordertype>;
        getAttribute(attributeName: "totallineitemamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "discountpercentage"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "discountamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "totalamountlessfreight"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "freightamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "totaltax"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "totalamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "createdon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_invoicedate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "duedate"): XrmBase.DateAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "invoicenumber"): XrmBase.StringControl;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "customerid"): XrmBase.LookupControl<"account" | "contact">;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "pricelevelid"): XrmBase.LookupControl<"pricelevel">;
        getControl(controlName: "ispricelocked"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "opportunityid"): XrmBase.LookupControl<"opportunity">;
        getControl(controlName: "salesorderid"): XrmBase.LookupControl<"salesorder">;
        getControl(controlName: "datedelivered"): XrmBase.DateControl;
        getControl(controlName: "shippingmethodcode"): XrmBase.OptionSetControl<invoice_shippingmethodcode>;
        getControl(controlName: "paymenttermscode"): XrmBase.OptionSetControl<invoice_paymenttermscode>;
        getControl(controlName: "billto_composite"): XrmBase.StringControl;
        getControl(controlName: "willcall"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "shipto_composite"): XrmBase.StringControl;
        getControl(controlName: "msdyn_ordertype"): XrmBase.OptionSetControl<msdyn_invoice_msdyn_ordertype>;
        getControl(controlName: "GridServiceLines"): XrmBase.SubGridControl<"invoicedetail">;
        getControl(controlName: "invoicedetailsGrid"): XrmBase.SubGridControl<"invoicedetail">;
        getControl(controlName: "DynamicPropertiesList_LinkControl"): XrmBase.BaseControl;
        getControl(controlName: "totallineitemamount"): XrmBase.NumberControl;
        getControl(controlName: "discountpercentage"): XrmBase.NumberControl;
        getControl(controlName: "discountamount"): XrmBase.NumberControl;
        getControl(controlName: "totalamountlessfreight"): XrmBase.NumberControl;
        getControl(controlName: "freightamount"): XrmBase.NumberControl;
        getControl(controlName: "totaltax"): XrmBase.NumberControl;
        getControl(controlName: "totalamount"): XrmBase.NumberControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "createdon"): XrmBase.DateControl;
        getControl(controlName: "msdyn_invoicedate"): XrmBase.DateControl;
        getControl(controlName: "duedate"): XrmBase.DateControl;
        getControl(controlName: "GridInvoicingPeriod"): XrmBase.SubGridControl<"msdyn_orderinvoicingsetupdate">;
        getControl(controlName: string): undefined;
    }
}
