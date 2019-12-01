declare namespace Form.invoice.Main {
    namespace ProjectInvoice {
        namespace Tabs {
            interface Summarytabproject extends XrmBase.SectionCollectionBase {
                get(name: "tab_5_section_1"): XrmBase.PageSection;
                get(name: "Summary_tab_project_section_3"): XrmBase.PageSection;
                get(name: "tab_5_section_2"): XrmBase.PageSection;
                get(name: "Summary_tab_project_section_5"): XrmBase.PageSection;
                get(name: "tab_4_section_1"): XrmBase.PageSection;
                get(name: "products"): XrmBase.PageSection;
                get(name: "totals"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface HiddenLockedFields extends XrmBase.SectionCollectionBase {
                get(name: "tab_5_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Detailstab extends XrmBase.SectionCollectionBase {
                get(name: "Social Pane"): XrmBase.PageSection;
                get(name: "tab_2_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "billto_composite"): XrmBase.StringAttribute;
            get(name: "billto_name"): XrmBase.StringAttribute;
            get(name: "customerid"): XrmBase.LookupAttribute<"account" | "contact">;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "discountamount"): XrmBase.NumberAttribute;
            get(name: "discountpercentage"): XrmBase.NumberAttribute;
            get(name: "duedate"): XrmBase.DateAttribute;
            get(name: "freightamount"): XrmBase.NumberAttribute;
            get(name: "invoicenumber"): XrmBase.StringAttribute;
            get(name: "msdyn_billtocontactname"): XrmBase.StringAttribute;
            get(name: "msdyn_ordertype"): XrmBase.OptionSetAttribute<msdyn_invoice_msdyn_ordertype>;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "opportunityid"): XrmBase.LookupAttribute<"opportunity">;
            get(name: "paymenttermscode"): XrmBase.OptionSetAttribute<invoice_paymenttermscode>;
            get(name: "pricelevelid"): XrmBase.LookupAttribute<"pricelevel">;
            get(name: "salesorderid"): XrmBase.LookupAttribute<"salesorder">;
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
            get(name: "billto_name"): XrmBase.StringControl;
            get(name: "customerid"): XrmBase.LookupControl<"account" | "contact">;
            get(name: "description"): XrmBase.StringControl;
            get(name: "discountamount"): XrmBase.NumberControl;
            get(name: "discountpercentage"): XrmBase.NumberControl;
            get(name: "duedate"): XrmBase.DateControl;
            get(name: "freightamount"): XrmBase.NumberControl;
            get(name: "invoicedetailsGrid"): XrmBase.SubGridControl<"invoicedetail">;
            get(name: "invoicenumber"): XrmBase.StringControl;
            get(name: "msdyn_billtocontactname"): XrmBase.StringControl;
            get(name: "msdyn_ordertype"): XrmBase.OptionSetControl<msdyn_invoice_msdyn_ordertype>;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "opportunityid"): XrmBase.LookupControl<"opportunity">;
            get(name: "paymenttermscode"): XrmBase.OptionSetControl<invoice_paymenttermscode>;
            get(name: "pricelevelid"): XrmBase.LookupControl<"pricelevel">;
            get(name: "ProjectInvoiceLines"): XrmBase.SubGridControl<"invoicedetail">;
            get(name: "salesorderid"): XrmBase.LookupControl<"salesorder">;
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
            get(name: "Summary_tab_project"): XrmBase.PageTab<Tabs.Summarytabproject>;
            get(name: "HiddenLockedFields"): XrmBase.PageTab<Tabs.HiddenLockedFields>;
            get(name: "details_tab"): XrmBase.PageTab<Tabs.Detailstab>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface ProjectInvoice extends XrmBase.PageBase<ProjectInvoice.Attributes, ProjectInvoice.Tabs, ProjectInvoice.Controls> {
        getAttribute(attributeName: "invoicenumber"): XrmBase.StringAttribute;
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "pricelevelid"): XrmBase.LookupAttribute<"pricelevel">;
        getAttribute(attributeName: "paymenttermscode"): XrmBase.OptionSetAttribute<invoice_paymenttermscode>;
        getAttribute(attributeName: "billto_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "billto_composite"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_billtocontactname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "opportunityid"): XrmBase.LookupAttribute<"opportunity">;
        getAttribute(attributeName: "salesorderid"): XrmBase.LookupAttribute<"salesorder">;
        getAttribute(attributeName: "customerid"): XrmBase.LookupAttribute<"account" | "contact">;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "totallineitemamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "discountpercentage"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "discountamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "totalamountlessfreight"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "freightamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "totaltax"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "totalamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "willcall"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_ordertype"): XrmBase.OptionSetAttribute<msdyn_invoice_msdyn_ordertype>;
        getAttribute(attributeName: "duedate"): XrmBase.DateAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "invoicenumber"): XrmBase.StringControl;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "pricelevelid"): XrmBase.LookupControl<"pricelevel">;
        getControl(controlName: "paymenttermscode"): XrmBase.OptionSetControl<invoice_paymenttermscode>;
        getControl(controlName: "billto_name"): XrmBase.StringControl;
        getControl(controlName: "billto_composite"): XrmBase.StringControl;
        getControl(controlName: "msdyn_billtocontactname"): XrmBase.StringControl;
        getControl(controlName: "opportunityid"): XrmBase.LookupControl<"opportunity">;
        getControl(controlName: "salesorderid"): XrmBase.LookupControl<"salesorder">;
        getControl(controlName: "customerid"): XrmBase.LookupControl<"account" | "contact">;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "ProjectInvoiceLines"): XrmBase.SubGridControl<"invoicedetail">;
        getControl(controlName: "invoicedetailsGrid"): XrmBase.SubGridControl<"invoicedetail">;
        getControl(controlName: "totallineitemamount"): XrmBase.NumberControl;
        getControl(controlName: "discountpercentage"): XrmBase.NumberControl;
        getControl(controlName: "discountamount"): XrmBase.NumberControl;
        getControl(controlName: "totalamountlessfreight"): XrmBase.NumberControl;
        getControl(controlName: "freightamount"): XrmBase.NumberControl;
        getControl(controlName: "totaltax"): XrmBase.NumberControl;
        getControl(controlName: "totalamount"): XrmBase.NumberControl;
        getControl(controlName: "willcall"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_ordertype"): XrmBase.OptionSetControl<msdyn_invoice_msdyn_ordertype>;
        getControl(controlName: "duedate"): XrmBase.DateControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
