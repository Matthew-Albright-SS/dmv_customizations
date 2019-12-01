declare namespace Form.msdyn_invoicelinetransaction.Main {
    namespace Information {
        namespace Tabs {
            interface _116ced9d22a34b70bfbf9021372780b7 extends XrmBase.SectionCollectionBase {
                get(name: "GeneralSection"): XrmBase.PageSection;
                get(name: "ProjectSection"): XrmBase.PageSection;
                get(name: "QuantitySection"): XrmBase.PageSection;
                get(name: "BillingSection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface CorrectionTab extends XrmBase.SectionCollectionBase {
                get(name: "tab_3_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface HiddenFieldsTab extends XrmBase.SectionCollectionBase {
                get(name: "tab_2_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_accountcustomer"): XrmBase.LookupAttribute<"account">;
            get(name: "msdyn_amount"): XrmBase.NumberAttribute;
            get(name: "msdyn_amountmethod"): XrmBase.OptionSetAttribute<msdyn_amountmethod>;
            get(name: "msdyn_basisquantity"): XrmBase.NumberAttribute;
            get(name: "msdyn_billingtype"): XrmBase.OptionSetAttribute<msdyn_billingtype>;
            get(name: "msdyn_bookableresource"): XrmBase.LookupAttribute<"bookableresource">;
            get(name: "msdyn_contactcustomer"): XrmBase.LookupAttribute<"contact">;
            get(name: "msdyn_correction"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_customertype"): XrmBase.OptionSetAttribute<msdyn_partytype>;
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_documentdate"): XrmBase.DateAttribute;
            get(name: "msdyn_enddatetime"): XrmBase.DateAttribute;
            get(name: "msdyn_externaldescription"): XrmBase.StringAttribute;
            get(name: "msdyn_invoicelineid"): XrmBase.LookupAttribute<"invoicedetail">;
            get(name: "msdyn_originalinvoicelinedetail"): XrmBase.LookupAttribute<"msdyn_invoicelinetransaction">;
            get(name: "msdyn_price"): XrmBase.NumberAttribute;
            get(name: "msdyn_pricelist"): XrmBase.LookupAttribute<"pricelevel">;
            get(name: "msdyn_project"): XrmBase.LookupAttribute<"msdyn_project">;
            get(name: "msdyn_quantity"): XrmBase.NumberAttribute;
            get(name: "msdyn_resourcecategory"): XrmBase.LookupAttribute<"bookableresourcecategory">;
            get(name: "msdyn_resourceorganizationalunitid"): XrmBase.LookupAttribute<"msdyn_organizationalunit">;
            get(name: "msdyn_salescontractlineid"): XrmBase.LookupAttribute<"salesorderdetail">;
            get(name: "msdyn_startdatetime"): XrmBase.DateAttribute;
            get(name: "msdyn_task"): XrmBase.LookupAttribute<"msdyn_projecttask">;
            get(name: "msdyn_transactioncategory"): XrmBase.LookupAttribute<"msdyn_transactioncategory">;
            get(name: "msdyn_transactionclassification"): XrmBase.OptionSetAttribute<msdyn_transactionclassification>;
            get(name: "msdyn_transactiontypecode"): XrmBase.OptionSetAttribute<msdyn_transactiontypecode>;
            get(name: "msdyn_unit"): XrmBase.LookupAttribute<"uom">;
            get(name: "msdyn_unitschedule"): XrmBase.LookupAttribute<"uomschedule">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "CorrectionQuickView"): XrmBase.BaseControl;
            get(name: "msdyn_accountcustomer"): XrmBase.LookupControl<"account">;
            get(name: "msdyn_amount"): XrmBase.NumberControl;
            get(name: "msdyn_amountmethod"): XrmBase.OptionSetControl<msdyn_amountmethod>;
            get(name: "msdyn_basisquantity"): XrmBase.NumberControl;
            get(name: "msdyn_billingtype"): XrmBase.OptionSetControl<msdyn_billingtype>;
            get(name: "msdyn_bookableresource"): XrmBase.LookupControl<"bookableresource">;
            get(name: "msdyn_contactcustomer"): XrmBase.LookupControl<"contact">;
            get(name: "msdyn_correction"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_customertype"): XrmBase.OptionSetControl<msdyn_partytype>;
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_documentdate"): XrmBase.DateControl;
            get(name: "msdyn_enddatetime"): XrmBase.DateControl;
            get(name: "msdyn_externaldescription"): XrmBase.StringControl;
            get(name: "msdyn_invoicelineid"): XrmBase.LookupControl<"invoicedetail">;
            get(name: "msdyn_originalinvoicelinedetail"): XrmBase.LookupControl<"msdyn_invoicelinetransaction">;
            get(name: "msdyn_price"): XrmBase.NumberControl;
            get(name: "msdyn_pricelist"): XrmBase.LookupControl<"pricelevel">;
            get(name: "msdyn_project"): XrmBase.LookupControl<"msdyn_project">;
            get(name: "msdyn_quantity"): XrmBase.NumberControl;
            get(name: "msdyn_resourcecategory"): XrmBase.LookupControl<"bookableresourcecategory">;
            get(name: "msdyn_resourceorganizationalunitid"): XrmBase.LookupControl<"msdyn_organizationalunit">;
            get(name: "msdyn_salescontractlineid"): XrmBase.LookupControl<"salesorderdetail">;
            get(name: "msdyn_startdatetime"): XrmBase.DateControl;
            get(name: "msdyn_task"): XrmBase.LookupControl<"msdyn_projecttask">;
            get(name: "msdyn_transactioncategory"): XrmBase.LookupControl<"msdyn_transactioncategory">;
            get(name: "msdyn_transactionclassification"): XrmBase.OptionSetControl<msdyn_transactionclassification>;
            get(name: "msdyn_transactiontypecode"): XrmBase.OptionSetControl<msdyn_transactiontypecode>;
            get(name: "msdyn_unit"): XrmBase.LookupControl<"uom">;
            get(name: "msdyn_unitschedule"): XrmBase.LookupControl<"uomschedule">;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{116ced9d-22a3-4b70-bfbf-9021372780b7}"): XrmBase.PageTab<Tabs._116ced9d22a34b70bfbf9021372780b7>;
            get(name: "CorrectionTab"): XrmBase.PageTab<Tabs.CorrectionTab>;
            get(name: "HiddenFieldsTab"): XrmBase.PageTab<Tabs.HiddenFieldsTab>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_externaldescription"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_startdatetime"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_project"): XrmBase.LookupAttribute<"msdyn_project">;
        getAttribute(attributeName: "msdyn_task"): XrmBase.LookupAttribute<"msdyn_projecttask">;
        getAttribute(attributeName: "msdyn_transactioncategory"): XrmBase.LookupAttribute<"msdyn_transactioncategory">;
        getAttribute(attributeName: "msdyn_resourcecategory"): XrmBase.LookupAttribute<"bookableresourcecategory">;
        getAttribute(attributeName: "msdyn_bookableresource"): XrmBase.LookupAttribute<"bookableresource">;
        getAttribute(attributeName: "msdyn_resourceorganizationalunitid"): XrmBase.LookupAttribute<"msdyn_organizationalunit">;
        getAttribute(attributeName: "msdyn_quantity"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_unitschedule"): XrmBase.LookupAttribute<"uomschedule">;
        getAttribute(attributeName: "msdyn_unit"): XrmBase.LookupAttribute<"uom">;
        getAttribute(attributeName: "msdyn_price"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "msdyn_amount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_billingtype"): XrmBase.OptionSetAttribute<msdyn_billingtype>;
        getAttribute(attributeName: "msdyn_transactiontypecode"): XrmBase.OptionSetAttribute<msdyn_transactiontypecode>;
        getAttribute(attributeName: "msdyn_transactionclassification"): XrmBase.OptionSetAttribute<msdyn_transactionclassification>;
        getAttribute(attributeName: "msdyn_amountmethod"): XrmBase.OptionSetAttribute<msdyn_amountmethod>;
        getAttribute(attributeName: "msdyn_correction"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_originalinvoicelinedetail"): XrmBase.LookupAttribute<"msdyn_invoicelinetransaction">;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_enddatetime"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_documentdate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_contactcustomer"): XrmBase.LookupAttribute<"contact">;
        getAttribute(attributeName: "msdyn_accountcustomer"): XrmBase.LookupAttribute<"account">;
        getAttribute(attributeName: "msdyn_customertype"): XrmBase.OptionSetAttribute<msdyn_partytype>;
        getAttribute(attributeName: "msdyn_salescontractlineid"): XrmBase.LookupAttribute<"salesorderdetail">;
        getAttribute(attributeName: "msdyn_invoicelineid"): XrmBase.LookupAttribute<"invoicedetail">;
        getAttribute(attributeName: "msdyn_basisquantity"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_pricelist"): XrmBase.LookupAttribute<"pricelevel">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "msdyn_externaldescription"): XrmBase.StringControl;
        getControl(controlName: "msdyn_startdatetime"): XrmBase.DateControl;
        getControl(controlName: "msdyn_project"): XrmBase.LookupControl<"msdyn_project">;
        getControl(controlName: "msdyn_task"): XrmBase.LookupControl<"msdyn_projecttask">;
        getControl(controlName: "msdyn_transactioncategory"): XrmBase.LookupControl<"msdyn_transactioncategory">;
        getControl(controlName: "msdyn_resourcecategory"): XrmBase.LookupControl<"bookableresourcecategory">;
        getControl(controlName: "msdyn_bookableresource"): XrmBase.LookupControl<"bookableresource">;
        getControl(controlName: "msdyn_resourceorganizationalunitid"): XrmBase.LookupControl<"msdyn_organizationalunit">;
        getControl(controlName: "msdyn_quantity"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_unitschedule"): XrmBase.LookupControl<"uomschedule">;
        getControl(controlName: "msdyn_unit"): XrmBase.LookupControl<"uom">;
        getControl(controlName: "msdyn_price"): XrmBase.NumberControl;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "msdyn_amount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_billingtype"): XrmBase.OptionSetControl<msdyn_billingtype>;
        getControl(controlName: "msdyn_transactiontypecode"): XrmBase.OptionSetControl<msdyn_transactiontypecode>;
        getControl(controlName: "msdyn_transactionclassification"): XrmBase.OptionSetControl<msdyn_transactionclassification>;
        getControl(controlName: "msdyn_amountmethod"): XrmBase.OptionSetControl<msdyn_amountmethod>;
        getControl(controlName: "msdyn_correction"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_originalinvoicelinedetail"): XrmBase.LookupControl<"msdyn_invoicelinetransaction">;
        getControl(controlName: "CorrectionQuickView"): XrmBase.BaseControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_enddatetime"): XrmBase.DateControl;
        getControl(controlName: "msdyn_documentdate"): XrmBase.DateControl;
        getControl(controlName: "msdyn_contactcustomer"): XrmBase.LookupControl<"contact">;
        getControl(controlName: "msdyn_accountcustomer"): XrmBase.LookupControl<"account">;
        getControl(controlName: "msdyn_customertype"): XrmBase.OptionSetControl<msdyn_partytype>;
        getControl(controlName: "msdyn_salescontractlineid"): XrmBase.LookupControl<"salesorderdetail">;
        getControl(controlName: "msdyn_invoicelineid"): XrmBase.LookupControl<"invoicedetail">;
        getControl(controlName: "msdyn_basisquantity"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_pricelist"): XrmBase.LookupControl<"pricelevel">;
        getControl(controlName: string): undefined;
    }
}
