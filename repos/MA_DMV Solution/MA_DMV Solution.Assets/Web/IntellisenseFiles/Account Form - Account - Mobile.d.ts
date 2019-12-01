declare namespace Form.account.Main {
    namespace AccountMobile {
        namespace Tabs {
            interface Fstabsummary extends XrmBase.SectionCollectionBase {
                get(name: "fstab_summary_section_account_information"): XrmBase.PageSection;
                get(name: "fstab_address_section_address"): XrmBase.PageSection;
                get(name: "fstab_summary_section_description"): XrmBase.PageSection;
                get(name: "fstab_summary_column_2_section_1"): XrmBase.PageSection;
                get(name: "fstab_summary_column_3_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Fstabsubgrids extends XrmBase.SectionCollectionBase {
                get(name: "tab_4_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "address1_composite"): XrmBase.StringAttribute;
            get(name: "defaultpricelevelid"): XrmBase.LookupAttribute<"pricelevel">;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "emailaddress1"): XrmBase.StringAttribute;
            get(name: "fax"): XrmBase.StringAttribute;
            get(name: "msdyn_billingaccount"): XrmBase.LookupAttribute<"account">;
            get(name: "msdyn_serviceterritory"): XrmBase.LookupAttribute<"territory">;
            get(name: "msdyn_workorderinstructions"): XrmBase.StringAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "parentaccountid"): XrmBase.LookupAttribute<"account">;
            get(name: "primarycontactid"): XrmBase.LookupAttribute<"contact">;
            get(name: "telephone1"): XrmBase.StringAttribute;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: "websiteurl"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "address1_composite"): XrmBase.StringControl;
            get(name: "AGREEMENTS"): XrmBase.SubGridControl<"msdyn_agreement">;
            get(name: "ChildAccounts"): XrmBase.SubGridControl<"account">;
            get(name: "Contacts"): XrmBase.SubGridControl<"contact">;
            get(name: "customerAssets"): XrmBase.SubGridControl<"msdyn_customerasset">;
            get(name: "defaultpricelevelid"): XrmBase.LookupControl<"pricelevel">;
            get(name: "description"): XrmBase.StringControl;
            get(name: "emailaddress1"): XrmBase.StringControl;
            get(name: "fax"): XrmBase.StringControl;
            get(name: "INVOICES"): XrmBase.SubGridControl<"invoice">;
            get(name: "msdyn_billingaccount"): XrmBase.LookupControl<"account">;
            get(name: "msdyn_serviceterritory"): XrmBase.LookupControl<"territory">;
            get(name: "msdyn_workorderinstructions"): XrmBase.StringControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "parentaccountid"): XrmBase.LookupControl<"account">;
            get(name: "primarycontactid"): XrmBase.LookupControl<"contact">;
            get(name: "telephone1"): XrmBase.StringControl;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: "websiteurl"): XrmBase.BaseControl;
            get(name: "WORKORDERS"): XrmBase.SubGridControl<"msdyn_workorder">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "fstab_summary"): XrmBase.PageTab<Tabs.Fstabsummary>;
            get(name: "fstab_sub_grids"): XrmBase.PageTab<Tabs.Fstabsubgrids>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface AccountMobile extends XrmBase.PageBase<AccountMobile.Attributes, AccountMobile.Tabs, AccountMobile.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "emailaddress1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "telephone1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "fax"): XrmBase.StringAttribute;
        getAttribute(attributeName: "websiteurl"): XrmBase.StringAttribute;
        getAttribute(attributeName: "primarycontactid"): XrmBase.LookupAttribute<"contact">;
        getAttribute(attributeName: "parentaccountid"): XrmBase.LookupAttribute<"account">;
        getAttribute(attributeName: "msdyn_billingaccount"): XrmBase.LookupAttribute<"account">;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "defaultpricelevelid"): XrmBase.LookupAttribute<"pricelevel">;
        getAttribute(attributeName: "msdyn_serviceterritory"): XrmBase.LookupAttribute<"territory">;
        getAttribute(attributeName: "msdyn_workorderinstructions"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_composite"): XrmBase.StringAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "emailaddress1"): XrmBase.StringControl;
        getControl(controlName: "telephone1"): XrmBase.StringControl;
        getControl(controlName: "fax"): XrmBase.StringControl;
        getControl(controlName: "websiteurl"): XrmBase.BaseControl;
        getControl(controlName: "primarycontactid"): XrmBase.LookupControl<"contact">;
        getControl(controlName: "parentaccountid"): XrmBase.LookupControl<"account">;
        getControl(controlName: "msdyn_billingaccount"): XrmBase.LookupControl<"account">;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "defaultpricelevelid"): XrmBase.LookupControl<"pricelevel">;
        getControl(controlName: "msdyn_serviceterritory"): XrmBase.LookupControl<"territory">;
        getControl(controlName: "msdyn_workorderinstructions"): XrmBase.StringControl;
        getControl(controlName: "address1_composite"): XrmBase.StringControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "ChildAccounts"): XrmBase.SubGridControl<"account">;
        getControl(controlName: "Contacts"): XrmBase.SubGridControl<"contact">;
        getControl(controlName: "customerAssets"): XrmBase.SubGridControl<"msdyn_customerasset">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "WORKORDERS"): XrmBase.SubGridControl<"msdyn_workorder">;
        getControl(controlName: "AGREEMENTS"): XrmBase.SubGridControl<"msdyn_agreement">;
        getControl(controlName: "INVOICES"): XrmBase.SubGridControl<"invoice">;
        getControl(controlName: string): undefined;
    }
}
