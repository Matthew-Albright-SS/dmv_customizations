declare namespace Form.account.Main {
    namespace Account {
        namespace Tabs {
            interface SUMMARYTAB extends XrmBase.SectionCollectionBase {
                get(name: "ACCOUNT_INFORMATION"): XrmBase.PageSection;
                get(name: "ADDRESS"): XrmBase.PageSection;
                get(name: "MapSection"): XrmBase.PageSection;
                get(name: "SOCIAL_PANE_TAB"): XrmBase.PageSection;
                get(name: "Summary_section_6"): XrmBase.PageSection;
                get(name: "SUMMARY_TAB_section_6"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab6 extends XrmBase.SectionCollectionBase {
                get(name: "tab_6_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Pricing extends XrmBase.SectionCollectionBase {
                get(name: "tab_3_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface DETAILSTAB extends XrmBase.SectionCollectionBase {
                get(name: "COMPANY_PROFILE"): XrmBase.PageSection;
                get(name: "DETAILS_TAB_section_6"): XrmBase.PageSection;
                get(name: "CONTACT_PREFERENCES"): XrmBase.PageSection;
                get(name: "BILLING"): XrmBase.PageSection;
                get(name: "SHIPPING"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface FieldService extends XrmBase.SectionCollectionBase {
                get(name: "DETAILS_TAB_section_8"): XrmBase.PageSection;
                get(name: "DETAILS_TAB_section_7"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Urstab extends XrmBase.SectionCollectionBase {
                get(name: "urstab_section_general"): XrmBase.PageSection;
                get(name: "tab_3_section_2"): XrmBase.PageSection;
                get(name: "tab_3_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "address1_composite"): XrmBase.StringAttribute;
            get(name: "address1_freighttermscode"): XrmBase.OptionSetAttribute<account_address1_freighttermscode>;
            get(name: "address1_latitude"): XrmBase.NumberAttribute;
            get(name: "address1_longitude"): XrmBase.NumberAttribute;
            get(name: "address1_shippingmethodcode"): XrmBase.OptionSetAttribute<account_address1_shippingmethodcode>;
            get(name: "creditlimit"): XrmBase.NumberAttribute;
            get(name: "creditonhold"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "customertypecode"): XrmBase.OptionSetAttribute<account_customertypecode>;
            get(name: "defaultpricelevelid"): XrmBase.LookupAttribute<"pricelevel">;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "donotbulkemail"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "donotemail"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "donotfax"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "donotphone"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "donotpostalmail"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "fax"): XrmBase.StringAttribute;
            get(name: "industrycode"): XrmBase.OptionSetAttribute<account_industrycode>;
            get(name: "msdyn_billingaccount"): XrmBase.LookupAttribute<"account">;
            get(name: "msdyn_salestaxcode"): XrmBase.LookupAttribute<"msdyn_taxcode">;
            get(name: "msdyn_serviceterritory"): XrmBase.LookupAttribute<"territory">;
            get(name: "msdyn_taxexempt"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_taxexemptnumber"): XrmBase.StringAttribute;
            get(name: "msdyn_travelcharge"): XrmBase.NumberAttribute;
            get(name: "msdyn_travelchargetype"): XrmBase.OptionSetAttribute<msdyn_travelchargetype>;
            get(name: "msdyn_workhourtemplate"): XrmBase.LookupAttribute<"msdyn_workhourtemplate">;
            get(name: "msdyn_workorderinstructions"): XrmBase.StringAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "ownershipcode"): XrmBase.OptionSetAttribute<account_ownershipcode>;
            get(name: "parentaccountid"): XrmBase.LookupAttribute<"account">;
            get(name: "paymenttermscode"): XrmBase.OptionSetAttribute<account_paymenttermscode>;
            get(name: "preferredcontactmethodcode"): XrmBase.OptionSetAttribute<account_preferredcontactmethodcode>;
            get(name: "primarycontactid"): XrmBase.LookupAttribute<"contact">;
            get(name: "sic"): XrmBase.StringAttribute;
            get(name: "telephone1"): XrmBase.StringAttribute;
            get(name: "tickersymbol"): XrmBase.StringAttribute;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: "websiteurl"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "ActionCards"): XrmBase.BaseControl;
            get(name: "address1_composite"): XrmBase.StringControl;
            get(name: "address1_freighttermscode"): XrmBase.OptionSetControl<account_address1_freighttermscode>;
            get(name: "address1_latitude"): XrmBase.NumberControl;
            get(name: "address1_longitude"): XrmBase.NumberControl;
            get(name: "address1_shippingmethodcode"): XrmBase.OptionSetControl<account_address1_shippingmethodcode>;
            get(name: "Applications"): XrmBase.SubGridControl<"dmv_application">;
            get(name: "contactquickform"): XrmBase.BaseControl;
            get(name: "Contacts"): XrmBase.SubGridControl<"contact">;
            get(name: "creditlimit"): XrmBase.NumberControl;
            get(name: "creditonhold"): XrmBase.OptionSetControl<any>;
            get(name: "customertypecode"): XrmBase.OptionSetControl<account_customertypecode>;
            get(name: "defaultpricelevelid"): XrmBase.LookupControl<"pricelevel">;
            get(name: "description"): XrmBase.StringControl;
            get(name: "donotbulkemail"): XrmBase.OptionSetControl<any>;
            get(name: "donotemail"): XrmBase.OptionSetControl<any>;
            get(name: "donotfax"): XrmBase.OptionSetControl<any>;
            get(name: "donotphone"): XrmBase.OptionSetControl<any>;
            get(name: "donotpostalmail"): XrmBase.OptionSetControl<any>;
            get(name: "fax"): XrmBase.StringControl;
            get(name: "industrycode"): XrmBase.OptionSetControl<account_industrycode>;
            get(name: "mapcontrol"): XrmBase.BaseControl;
            get(name: "msdyn_billingaccount"): XrmBase.LookupControl<"account">;
            get(name: "msdyn_salestaxcode"): XrmBase.LookupControl<"msdyn_taxcode">;
            get(name: "msdyn_serviceterritory"): XrmBase.LookupControl<"territory">;
            get(name: "msdyn_taxexempt"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_taxexemptnumber"): XrmBase.StringControl;
            get(name: "msdyn_travelcharge"): XrmBase.NumberControl;
            get(name: "msdyn_travelchargetype"): XrmBase.OptionSetControl<msdyn_travelchargetype>;
            get(name: "msdyn_workhourtemplate"): XrmBase.LookupControl<"msdyn_workhourtemplate">;
            get(name: "msdyn_workorderinstructions"): XrmBase.StringControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownershipcode"): XrmBase.OptionSetControl<account_ownershipcode>;
            get(name: "parentaccountid"): XrmBase.LookupControl<"account">;
            get(name: "paymenttermscode"): XrmBase.OptionSetControl<account_paymenttermscode>;
            get(name: "preferredcontactmethodcode"): XrmBase.OptionSetControl<account_preferredcontactmethodcode>;
            get(name: "PriceListsGrid"): XrmBase.SubGridControl<"msdyn_accountpricelist">;
            get(name: "primarycontactid"): XrmBase.LookupControl<"contact">;
            get(name: "sic"): XrmBase.StringControl;
            get(name: "telephone1"): XrmBase.StringControl;
            get(name: "tickersymbol"): XrmBase.BaseControl;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: "websiteurl"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "SUMMARY_TAB"): XrmBase.PageTab<Tabs.SUMMARYTAB>;
            get(name: "tab_6"): XrmBase.PageTab<Tabs.Tab6>;
            get(name: "Pricing"): XrmBase.PageTab<Tabs.Pricing>;
            get(name: "DETAILS_TAB"): XrmBase.PageTab<Tabs.DETAILSTAB>;
            get(name: "FieldService"): XrmBase.PageTab<Tabs.FieldService>;
            get(name: "urstab"): XrmBase.PageTab<Tabs.Urstab>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Account extends XrmBase.PageBase<Account.Attributes, Account.Tabs, Account.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "telephone1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "fax"): XrmBase.StringAttribute;
        getAttribute(attributeName: "websiteurl"): XrmBase.StringAttribute;
        getAttribute(attributeName: "parentaccountid"): XrmBase.LookupAttribute<"account">;
        getAttribute(attributeName: "tickersymbol"): XrmBase.StringAttribute;
        getAttribute(attributeName: "customertypecode"): XrmBase.OptionSetAttribute<account_customertypecode>;
        getAttribute(attributeName: "defaultpricelevelid"): XrmBase.LookupAttribute<"pricelevel">;
        getAttribute(attributeName: "address1_composite"): XrmBase.StringAttribute;
        getAttribute(attributeName: "primarycontactid"): XrmBase.LookupAttribute<"contact">;
        getAttribute(attributeName: "industrycode"): XrmBase.OptionSetAttribute<account_industrycode>;
        getAttribute(attributeName: "sic"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownershipcode"): XrmBase.OptionSetAttribute<account_ownershipcode>;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "preferredcontactmethodcode"): XrmBase.OptionSetAttribute<account_preferredcontactmethodcode>;
        getAttribute(attributeName: "donotemail"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "donotbulkemail"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "donotphone"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "donotfax"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "donotpostalmail"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "creditlimit"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "creditonhold"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "paymenttermscode"): XrmBase.OptionSetAttribute<account_paymenttermscode>;
        getAttribute(attributeName: "address1_shippingmethodcode"): XrmBase.OptionSetAttribute<account_address1_shippingmethodcode>;
        getAttribute(attributeName: "address1_freighttermscode"): XrmBase.OptionSetAttribute<account_address1_freighttermscode>;
        getAttribute(attributeName: "msdyn_billingaccount"): XrmBase.LookupAttribute<"account">;
        getAttribute(attributeName: "msdyn_taxexempt"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_salestaxcode"): XrmBase.LookupAttribute<"msdyn_taxcode">;
        getAttribute(attributeName: "msdyn_taxexemptnumber"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_serviceterritory"): XrmBase.LookupAttribute<"territory">;
        getAttribute(attributeName: "msdyn_workhourtemplate"): XrmBase.LookupAttribute<"msdyn_workhourtemplate">;
        getAttribute(attributeName: "msdyn_travelchargetype"): XrmBase.OptionSetAttribute<msdyn_travelchargetype>;
        getAttribute(attributeName: "msdyn_travelcharge"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_workorderinstructions"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_latitude"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "address1_longitude"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "telephone1"): XrmBase.StringControl;
        getControl(controlName: "fax"): XrmBase.StringControl;
        getControl(controlName: "websiteurl"): XrmBase.StringControl;
        getControl(controlName: "parentaccountid"): XrmBase.LookupControl<"account">;
        getControl(controlName: "tickersymbol"): XrmBase.BaseControl;
        getControl(controlName: "customertypecode"): XrmBase.OptionSetControl<account_customertypecode>;
        getControl(controlName: "defaultpricelevelid"): XrmBase.LookupControl<"pricelevel">;
        getControl(controlName: "address1_composite"): XrmBase.StringControl;
        getControl(controlName: "mapcontrol"): XrmBase.BaseControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "ActionCards"): XrmBase.BaseControl;
        getControl(controlName: "primarycontactid"): XrmBase.LookupControl<"contact">;
        getControl(controlName: "contactquickform"): XrmBase.BaseControl;
        getControl(controlName: "Contacts"): XrmBase.SubGridControl<"contact">;
        getControl(controlName: "Applications"): XrmBase.SubGridControl<"dmv_application">;
        getControl(controlName: "PriceListsGrid"): XrmBase.SubGridControl<"msdyn_accountpricelist">;
        getControl(controlName: "industrycode"): XrmBase.OptionSetControl<account_industrycode>;
        getControl(controlName: "sic"): XrmBase.StringControl;
        getControl(controlName: "ownershipcode"): XrmBase.OptionSetControl<account_ownershipcode>;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "preferredcontactmethodcode"): XrmBase.OptionSetControl<account_preferredcontactmethodcode>;
        getControl(controlName: "donotemail"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "donotbulkemail"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "donotphone"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "donotfax"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "donotpostalmail"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "creditlimit"): XrmBase.NumberControl;
        getControl(controlName: "creditonhold"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "paymenttermscode"): XrmBase.OptionSetControl<account_paymenttermscode>;
        getControl(controlName: "address1_shippingmethodcode"): XrmBase.OptionSetControl<account_address1_shippingmethodcode>;
        getControl(controlName: "address1_freighttermscode"): XrmBase.OptionSetControl<account_address1_freighttermscode>;
        getControl(controlName: "msdyn_billingaccount"): XrmBase.LookupControl<"account">;
        getControl(controlName: "msdyn_taxexempt"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_salestaxcode"): XrmBase.LookupControl<"msdyn_taxcode">;
        getControl(controlName: "msdyn_taxexemptnumber"): XrmBase.StringControl;
        getControl(controlName: "msdyn_serviceterritory"): XrmBase.LookupControl<"territory">;
        getControl(controlName: "msdyn_workhourtemplate"): XrmBase.LookupControl<"msdyn_workhourtemplate">;
        getControl(controlName: "msdyn_travelchargetype"): XrmBase.OptionSetControl<msdyn_travelchargetype>;
        getControl(controlName: "msdyn_travelcharge"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_workorderinstructions"): XrmBase.StringControl;
        getControl(controlName: "address1_latitude"): XrmBase.NumberControl;
        getControl(controlName: "address1_longitude"): XrmBase.NumberControl;
        getControl(controlName: string): undefined;
    }
}
