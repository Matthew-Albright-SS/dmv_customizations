declare namespace Form.account.Main {
    namespace SalesInsights {
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
            interface DETAILSTAB extends XrmBase.SectionCollectionBase {
                get(name: "COMPANY_PROFILE"): XrmBase.PageSection;
                get(name: "DETAILS_TAB_section_6"): XrmBase.PageSection;
                get(name: "MARKETING"): XrmBase.PageSection;
                get(name: "CONTACT_PREFERENCES"): XrmBase.PageSection;
                get(name: "BILLING"): XrmBase.PageSection;
                get(name: "SHIPPING"): XrmBase.PageSection;
                get(name: "ChildAccounts"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "address1_composite"): XrmBase.StringAttribute;
            get(name: "address1_freighttermscode"): XrmBase.OptionSetAttribute<account_address1_freighttermscode>;
            get(name: "address1_shippingmethodcode"): XrmBase.OptionSetAttribute<account_address1_shippingmethodcode>;
            get(name: "creditlimit"): XrmBase.NumberAttribute;
            get(name: "creditonhold"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "donotbulkemail"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "donotemail"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "donotfax"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "donotphone"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "donotpostalmail"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "donotsendmm"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "fax"): XrmBase.StringAttribute;
            get(name: "followemail"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "industrycode"): XrmBase.OptionSetAttribute<account_industrycode>;
            get(name: "lastusedincampaign"): XrmBase.DateAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "originatingleadid"): XrmBase.LookupAttribute<"lead">;
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
            get(name: "accountopportunitiesgrid"): XrmBase.SubGridControl<"opportunity">;
            get(name: "ActionCards"): XrmBase.BaseControl;
            get(name: "address1_composite"): XrmBase.StringControl;
            get(name: "address1_freighttermscode"): XrmBase.OptionSetControl<account_address1_freighttermscode>;
            get(name: "address1_shippingmethodcode"): XrmBase.OptionSetControl<account_address1_shippingmethodcode>;
            get(name: "ChildAccounts"): XrmBase.SubGridControl<"account">;
            get(name: "contactquickform"): XrmBase.BaseControl;
            get(name: "Contacts"): XrmBase.SubGridControl<"contact">;
            get(name: "creditlimit"): XrmBase.NumberControl;
            get(name: "creditonhold"): XrmBase.OptionSetControl<any>;
            get(name: "description"): XrmBase.StringControl;
            get(name: "donotbulkemail"): XrmBase.OptionSetControl<any>;
            get(name: "donotemail"): XrmBase.OptionSetControl<any>;
            get(name: "donotfax"): XrmBase.OptionSetControl<any>;
            get(name: "donotphone"): XrmBase.OptionSetControl<any>;
            get(name: "donotpostalmail"): XrmBase.OptionSetControl<any>;
            get(name: "donotsendmm"): XrmBase.OptionSetControl<any>;
            get(name: "fax"): XrmBase.StringControl;
            get(name: "followemail"): XrmBase.OptionSetControl<any>;
            get(name: "industrycode"): XrmBase.OptionSetControl<account_industrycode>;
            get(name: "lastusedincampaign"): XrmBase.DateControl;
            get(name: "mapcontrol"): XrmBase.BaseControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "originatingleadid"): XrmBase.LookupControl<"lead">;
            get(name: "ownershipcode"): XrmBase.OptionSetControl<account_ownershipcode>;
            get(name: "parentaccountid"): XrmBase.LookupControl<"account">;
            get(name: "paymenttermscode"): XrmBase.OptionSetControl<account_paymenttermscode>;
            get(name: "preferredcontactmethodcode"): XrmBase.OptionSetControl<account_preferredcontactmethodcode>;
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
            get(name: "DETAILS_TAB"): XrmBase.PageTab<Tabs.DETAILSTAB>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface SalesInsights extends XrmBase.PageBase<SalesInsights.Attributes, SalesInsights.Tabs, SalesInsights.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "telephone1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "fax"): XrmBase.StringAttribute;
        getAttribute(attributeName: "websiteurl"): XrmBase.StringAttribute;
        getAttribute(attributeName: "parentaccountid"): XrmBase.LookupAttribute<"account">;
        getAttribute(attributeName: "tickersymbol"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_composite"): XrmBase.StringAttribute;
        getAttribute(attributeName: "primarycontactid"): XrmBase.LookupAttribute<"contact">;
        getAttribute(attributeName: "industrycode"): XrmBase.OptionSetAttribute<account_industrycode>;
        getAttribute(attributeName: "sic"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownershipcode"): XrmBase.OptionSetAttribute<account_ownershipcode>;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "originatingleadid"): XrmBase.LookupAttribute<"lead">;
        getAttribute(attributeName: "lastusedincampaign"): XrmBase.DateAttribute;
        getAttribute(attributeName: "donotsendmm"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "preferredcontactmethodcode"): XrmBase.OptionSetAttribute<account_preferredcontactmethodcode>;
        getAttribute(attributeName: "donotemail"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "followemail"): XrmBase.OptionSetAttribute<boolean>;
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
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "telephone1"): XrmBase.StringControl;
        getControl(controlName: "fax"): XrmBase.StringControl;
        getControl(controlName: "websiteurl"): XrmBase.StringControl;
        getControl(controlName: "parentaccountid"): XrmBase.LookupControl<"account">;
        getControl(controlName: "tickersymbol"): XrmBase.BaseControl;
        getControl(controlName: "address1_composite"): XrmBase.StringControl;
        getControl(controlName: "mapcontrol"): XrmBase.BaseControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "ActionCards"): XrmBase.BaseControl;
        getControl(controlName: "primarycontactid"): XrmBase.LookupControl<"contact">;
        getControl(controlName: "contactquickform"): XrmBase.BaseControl;
        getControl(controlName: "Contacts"): XrmBase.SubGridControl<"contact">;
        getControl(controlName: "accountopportunitiesgrid"): XrmBase.SubGridControl<"opportunity">;
        getControl(controlName: "industrycode"): XrmBase.OptionSetControl<account_industrycode>;
        getControl(controlName: "sic"): XrmBase.StringControl;
        getControl(controlName: "ownershipcode"): XrmBase.OptionSetControl<account_ownershipcode>;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "originatingleadid"): XrmBase.LookupControl<"lead">;
        getControl(controlName: "lastusedincampaign"): XrmBase.DateControl;
        getControl(controlName: "donotsendmm"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "preferredcontactmethodcode"): XrmBase.OptionSetControl<account_preferredcontactmethodcode>;
        getControl(controlName: "donotemail"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "followemail"): XrmBase.OptionSetControl<any>;
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
        getControl(controlName: "ChildAccounts"): XrmBase.SubGridControl<"account">;
        getControl(controlName: string): undefined;
    }
}
