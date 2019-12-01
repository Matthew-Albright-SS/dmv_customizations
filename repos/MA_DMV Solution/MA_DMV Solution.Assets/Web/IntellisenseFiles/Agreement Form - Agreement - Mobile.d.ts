declare namespace Form.msdyn_agreement.Main {
    namespace AgreementMobile {
        namespace Tabs {
            interface Fstabgeneral extends XrmBase.SectionCollectionBase {
                get(name: "fstab_general_section_summary"): XrmBase.PageSection;
                get(name: "tab_3_section_2"): XrmBase.PageSection;
                get(name: "fstab_general_section_details"): XrmBase.PageSection;
                get(name: "fstab_general_column_2_section_1"): XrmBase.PageSection;
                get(name: "{4c8bef3b-e06c-4411-b312-59f180556e4d}_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface _7a6686d372ad47249c465ba3c5fae32d extends XrmBase.SectionCollectionBase {
                get(name: "{bc490053-f7d4-44e2-bfb7-1ca938f59e1b}"): XrmBase.PageSection;
                get(name: "{2bcf1be9-1ceb-434d-9866-6486738f2acc}"): XrmBase.PageSection;
                get(name: "{7a6686d3-72ad-4724-9c46-5ba3c5fae32d}_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_agreementdetails"): XrmBase.StringAttribute;
            get(name: "msdyn_agreementrecordgeneration"): XrmBase.DateAttribute;
            get(name: "msdyn_billingaccount"): XrmBase.LookupAttribute<"account">;
            get(name: "msdyn_datecanceled"): XrmBase.DateAttribute;
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_duration"): XrmBase.NumberAttribute;
            get(name: "msdyn_enddate"): XrmBase.DateAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_originatingagreement"): XrmBase.LookupAttribute<"msdyn_agreement">;
            get(name: "msdyn_pricelist"): XrmBase.LookupAttribute<"pricelevel">;
            get(name: "msdyn_salestaxcode"): XrmBase.LookupAttribute<"msdyn_taxcode">;
            get(name: "msdyn_serviceaccount"): XrmBase.LookupAttribute<"account">;
            get(name: "msdyn_serviceterritory"): XrmBase.LookupAttribute<"territory">;
            get(name: "msdyn_startdate"): XrmBase.DateAttribute;
            get(name: "msdyn_substatus"): XrmBase.LookupAttribute<"msdyn_agreementsubstatus">;
            get(name: "msdyn_systemstatus"): XrmBase.OptionSetAttribute<msdyn_agreementsystemstatus>;
            get(name: "msdyn_taxable"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "bookingsgrid"): XrmBase.SubGridControl<"msdyn_agreementbookingsetup">;
            get(name: "invoicegrid"): XrmBase.SubGridControl<"msdyn_agreementinvoicesetup">;
            get(name: "msdyn_agreementdetails"): XrmBase.StringControl;
            get(name: "msdyn_agreementrecordgeneration"): XrmBase.BaseControl;
            get(name: "msdyn_billingaccount"): XrmBase.LookupControl<"account">;
            get(name: "msdyn_datecanceled"): XrmBase.DateControl;
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_duration"): XrmBase.NumberControl;
            get(name: "msdyn_enddate"): XrmBase.DateControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_originatingagreement"): XrmBase.LookupControl<"msdyn_agreement">;
            get(name: "msdyn_pricelist"): XrmBase.LookupControl<"pricelevel">;
            get(name: "msdyn_salestaxcode"): XrmBase.LookupControl<"msdyn_taxcode">;
            get(name: "msdyn_serviceaccount"): XrmBase.LookupControl<"account">;
            get(name: "msdyn_serviceterritory"): XrmBase.LookupControl<"territory">;
            get(name: "msdyn_startdate"): XrmBase.DateControl;
            get(name: "msdyn_substatus"): XrmBase.LookupControl<"msdyn_agreementsubstatus">;
            get(name: "msdyn_systemstatus"): XrmBase.OptionSetControl<msdyn_agreementsystemstatus>;
            get(name: "msdyn_taxable"): XrmBase.OptionSetControl<any>;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "WebResource_AgreementRecordGeneration_TimeField"): XrmBase.WebResourceControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "fstab_general"): XrmBase.PageTab<Tabs.Fstabgeneral>;
            get(name: "{7a6686d3-72ad-4724-9c46-5ba3c5fae32d}"): XrmBase.PageTab<Tabs._7a6686d372ad47249c465ba3c5fae32d>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface AgreementMobile extends XrmBase.PageBase<AgreementMobile.Attributes, AgreementMobile.Tabs, AgreementMobile.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_serviceaccount"): XrmBase.LookupAttribute<"account">;
        getAttribute(attributeName: "msdyn_billingaccount"): XrmBase.LookupAttribute<"account">;
        getAttribute(attributeName: "msdyn_systemstatus"): XrmBase.OptionSetAttribute<msdyn_agreementsystemstatus>;
        getAttribute(attributeName: "msdyn_substatus"): XrmBase.LookupAttribute<"msdyn_agreementsubstatus">;
        getAttribute(attributeName: "msdyn_pricelist"): XrmBase.LookupAttribute<"pricelevel">;
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_taxable"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_salestaxcode"): XrmBase.LookupAttribute<"msdyn_taxcode">;
        getAttribute(attributeName: "msdyn_startdate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_enddate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_duration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_datecanceled"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_originatingagreement"): XrmBase.LookupAttribute<"msdyn_agreement">;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_serviceterritory"): XrmBase.LookupAttribute<"territory">;
        getAttribute(attributeName: "msdyn_agreementdetails"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_agreementrecordgeneration"): XrmBase.DateAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_serviceaccount"): XrmBase.LookupControl<"account">;
        getControl(controlName: "msdyn_billingaccount"): XrmBase.LookupControl<"account">;
        getControl(controlName: "msdyn_systemstatus"): XrmBase.OptionSetControl<msdyn_agreementsystemstatus>;
        getControl(controlName: "msdyn_substatus"): XrmBase.LookupControl<"msdyn_agreementsubstatus">;
        getControl(controlName: "msdyn_pricelist"): XrmBase.LookupControl<"pricelevel">;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "msdyn_taxable"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_salestaxcode"): XrmBase.LookupControl<"msdyn_taxcode">;
        getControl(controlName: "msdyn_startdate"): XrmBase.DateControl;
        getControl(controlName: "msdyn_enddate"): XrmBase.DateControl;
        getControl(controlName: "msdyn_duration"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_datecanceled"): XrmBase.DateControl;
        getControl(controlName: "bookingsgrid"): XrmBase.SubGridControl<"msdyn_agreementbookingsetup">;
        getControl(controlName: "invoicegrid"): XrmBase.SubGridControl<"msdyn_agreementinvoicesetup">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "msdyn_originatingagreement"): XrmBase.LookupControl<"msdyn_agreement">;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_serviceterritory"): XrmBase.LookupControl<"territory">;
        getControl(controlName: "msdyn_agreementdetails"): XrmBase.StringControl;
        getControl(controlName: "msdyn_agreementrecordgeneration"): XrmBase.BaseControl;
        getControl(controlName: "WebResource_AgreementRecordGeneration_TimeField"): XrmBase.WebResourceControl;
        getControl(controlName: string): undefined;
    }
}
