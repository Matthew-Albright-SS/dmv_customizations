declare namespace Form.msdyn_rma.Main {
    namespace RMA {
        namespace Tabs {
            interface _967655cbd3184e85a7683b42e0fc398e extends XrmBase.SectionCollectionBase {
                get(name: "{567c00b9-7bcd-4668-9fd1-010dd4039922}"): XrmBase.PageSection;
                get(name: "tab_1_section_2"): XrmBase.PageSection;
                get(name: "tab_1_section_3"): XrmBase.PageSection;
                get(name: "{967655cb-d318-4e85-a768-3b42e0fc398e}_section_2"): XrmBase.PageSection;
                get(name: "tab_3_section_3"): XrmBase.PageSection;
                get(name: "{967655cb-d318-4e85-a768-3b42e0fc398e}_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab3 extends XrmBase.SectionCollectionBase {
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Rmaproductstab extends XrmBase.SectionCollectionBase {
                get(name: "tab_3_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_approvedby"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "msdyn_billingaccount"): XrmBase.LookupAttribute<"account">;
            get(name: "msdyn_daterequested"): XrmBase.DateAttribute;
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_eta"): XrmBase.DateAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_packagingtrackingno"): XrmBase.StringAttribute;
            get(name: "msdyn_pricelist"): XrmBase.LookupAttribute<"pricelevel">;
            get(name: "msdyn_processingaction"): XrmBase.OptionSetAttribute<msdyn_rmaprocessingaction>;
            get(name: "msdyn_referenceno"): XrmBase.StringAttribute;
            get(name: "msdyn_requestedbycontact"): XrmBase.LookupAttribute<"contact">;
            get(name: "msdyn_serviceaccount"): XrmBase.LookupAttribute<"account">;
            get(name: "msdyn_shippingtrackingno"): XrmBase.StringAttribute;
            get(name: "msdyn_shipvia"): XrmBase.LookupAttribute<"msdyn_shipvia">;
            get(name: "msdyn_substatus"): XrmBase.LookupAttribute<"msdyn_rmasubstatus">;
            get(name: "msdyn_systemstatus"): XrmBase.OptionSetAttribute<msdyn_rmasystemstatus>;
            get(name: "msdyn_taxable"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_taxcode"): XrmBase.LookupAttribute<"msdyn_taxcode">;
            get(name: "msdyn_totalamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_workorder"): XrmBase.LookupAttribute<"msdyn_workorder">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_approvedby"): XrmBase.LookupControl<"systemuser">;
            get(name: "msdyn_billingaccount"): XrmBase.LookupControl<"account">;
            get(name: "msdyn_daterequested"): XrmBase.DateControl;
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_eta"): XrmBase.DateControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_packagingtrackingno"): XrmBase.StringControl;
            get(name: "msdyn_pricelist"): XrmBase.LookupControl<"pricelevel">;
            get(name: "msdyn_processingaction"): XrmBase.OptionSetControl<msdyn_rmaprocessingaction>;
            get(name: "msdyn_referenceno"): XrmBase.StringControl;
            get(name: "msdyn_requestedbycontact"): XrmBase.LookupControl<"contact">;
            get(name: "msdyn_serviceaccount"): XrmBase.LookupControl<"account">;
            get(name: "msdyn_shippingtrackingno"): XrmBase.StringControl;
            get(name: "msdyn_shipvia"): XrmBase.LookupControl<"msdyn_shipvia">;
            get(name: "msdyn_substatus"): XrmBase.LookupControl<"msdyn_rmasubstatus">;
            get(name: "msdyn_systemstatus"): XrmBase.OptionSetControl<msdyn_rmasystemstatus>;
            get(name: "msdyn_taxable"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_taxcode"): XrmBase.LookupControl<"msdyn_taxcode">;
            get(name: "msdyn_totalamount"): XrmBase.NumberControl;
            get(name: "msdyn_workorder"): XrmBase.LookupControl<"msdyn_workorder">;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "receiptsgrid"): XrmBase.SubGridControl<"msdyn_rmareceipt">;
            get(name: "rmaproductsgrid"): XrmBase.SubGridControl<"msdyn_rmaproduct">;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{967655cb-d318-4e85-a768-3b42e0fc398e}"): XrmBase.PageTab<Tabs._967655cbd3184e85a7683b42e0fc398e>;
            get(name: "tab_3"): XrmBase.PageTab<Tabs.Tab3>;
            get(name: "rmaproductstab"): XrmBase.PageTab<Tabs.Rmaproductstab>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface RMA extends XrmBase.PageBase<RMA.Attributes, RMA.Tabs, RMA.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_serviceaccount"): XrmBase.LookupAttribute<"account">;
        getAttribute(attributeName: "msdyn_billingaccount"): XrmBase.LookupAttribute<"account">;
        getAttribute(attributeName: "msdyn_pricelist"): XrmBase.LookupAttribute<"pricelevel">;
        getAttribute(attributeName: "msdyn_workorder"): XrmBase.LookupAttribute<"msdyn_workorder">;
        getAttribute(attributeName: "msdyn_referenceno"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_systemstatus"): XrmBase.OptionSetAttribute<msdyn_rmasystemstatus>;
        getAttribute(attributeName: "msdyn_substatus"): XrmBase.LookupAttribute<"msdyn_rmasubstatus">;
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_daterequested"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_eta"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_approvedby"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "msdyn_requestedbycontact"): XrmBase.LookupAttribute<"contact">;
        getAttribute(attributeName: "msdyn_processingaction"): XrmBase.OptionSetAttribute<msdyn_rmaprocessingaction>;
        getAttribute(attributeName: "msdyn_shippingtrackingno"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_shipvia"): XrmBase.LookupAttribute<"msdyn_shipvia">;
        getAttribute(attributeName: "msdyn_packagingtrackingno"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_taxable"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_taxcode"): XrmBase.LookupAttribute<"msdyn_taxcode">;
        getAttribute(attributeName: "msdyn_totalamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_serviceaccount"): XrmBase.LookupControl<"account">;
        getControl(controlName: "msdyn_billingaccount"): XrmBase.LookupControl<"account">;
        getControl(controlName: "msdyn_pricelist"): XrmBase.LookupControl<"pricelevel">;
        getControl(controlName: "msdyn_workorder"): XrmBase.LookupControl<"msdyn_workorder">;
        getControl(controlName: "msdyn_referenceno"): XrmBase.StringControl;
        getControl(controlName: "msdyn_systemstatus"): XrmBase.OptionSetControl<msdyn_rmasystemstatus>;
        getControl(controlName: "msdyn_substatus"): XrmBase.LookupControl<"msdyn_rmasubstatus">;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "msdyn_daterequested"): XrmBase.DateControl;
        getControl(controlName: "msdyn_eta"): XrmBase.DateControl;
        getControl(controlName: "msdyn_approvedby"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "msdyn_requestedbycontact"): XrmBase.LookupControl<"contact">;
        getControl(controlName: "msdyn_processingaction"): XrmBase.OptionSetControl<msdyn_rmaprocessingaction>;
        getControl(controlName: "msdyn_shippingtrackingno"): XrmBase.StringControl;
        getControl(controlName: "msdyn_shipvia"): XrmBase.LookupControl<"msdyn_shipvia">;
        getControl(controlName: "msdyn_packagingtrackingno"): XrmBase.StringControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "msdyn_taxable"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_taxcode"): XrmBase.LookupControl<"msdyn_taxcode">;
        getControl(controlName: "msdyn_totalamount"): XrmBase.NumberControl;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "receiptsgrid"): XrmBase.SubGridControl<"msdyn_rmareceipt">;
        getControl(controlName: "rmaproductsgrid"): XrmBase.SubGridControl<"msdyn_rmaproduct">;
        getControl(controlName: string): undefined;
    }
}
