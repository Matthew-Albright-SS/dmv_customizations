declare namespace Form.contact.Main {
    namespace Contact {
        namespace Tabs {
            interface SUMMARYTAB extends XrmBase.SectionCollectionBase {
                get(name: "CONTACT_INFORMATION"): XrmBase.PageSection;
                get(name: "SOCIAL_PANE_TAB"): XrmBase.PageSection;
                get(name: "CUSTOMER_DETAILS_TAB"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab4 extends XrmBase.SectionCollectionBase {
                get(name: "tab_4_section_1"): XrmBase.PageSection;
                get(name: "tab_4_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "address1_composite"): XrmBase.StringAttribute;
            get(name: "dmv_age"): XrmBase.NumberAttribute;
            get(name: "dmv_birthdate"): XrmBase.DateAttribute;
            get(name: "dmv_driverlicensenumber"): XrmBase.StringAttribute;
            get(name: "dmv_hiddendifday"): XrmBase.NumberAttribute;
            get(name: "emailaddress1"): XrmBase.StringAttribute;
            get(name: "fax"): XrmBase.StringAttribute;
            get(name: "fullname"): XrmBase.StringAttribute;
            get(name: "mobilephone"): XrmBase.StringAttribute;
            get(name: "parentcustomerid"): XrmBase.LookupAttribute<"account" | "contact">;
            get(name: "preferredcontactmethodcode"): XrmBase.OptionSetAttribute<contact_preferredcontactmethodcode>;
            get(name: "telephone1"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "address1_composite"): XrmBase.StringControl;
            get(name: "Applications"): XrmBase.SubGridControl<"dmv_application">;
            get(name: "contactquickform"): XrmBase.BaseControl;
            get(name: "coOwnerApps"): XrmBase.SubGridControl<"dmv_application">;
            get(name: "dmv_age"): XrmBase.NumberControl;
            get(name: "dmv_birthdate"): XrmBase.DateControl;
            get(name: "dmv_driverlicensenumber"): XrmBase.StringControl;
            get(name: "dmv_hiddendifday"): XrmBase.NumberControl;
            get(name: "emailaddress1"): XrmBase.StringControl;
            get(name: "fax"): XrmBase.StringControl;
            get(name: "fullname"): XrmBase.StringControl;
            get(name: "mobilephone"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "parentcustomerid"): XrmBase.LookupControl<"account" | "contact">;
            get(name: "preferredcontactmethodcode"): XrmBase.OptionSetControl<contact_preferredcontactmethodcode>;
            get(name: "telephone1"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "SUMMARY_TAB"): XrmBase.PageTab<Tabs.SUMMARYTAB>;
            get(name: "tab_4"): XrmBase.PageTab<Tabs.Tab4>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Contact extends XrmBase.PageBase<Contact.Attributes, Contact.Tabs, Contact.Controls> {
        getAttribute(attributeName: "fullname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "dmv_birthdate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "dmv_age"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "dmv_hiddendifday"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "address1_composite"): XrmBase.StringAttribute;
        getAttribute(attributeName: "preferredcontactmethodcode"): XrmBase.OptionSetAttribute<contact_preferredcontactmethodcode>;
        getAttribute(attributeName: "mobilephone"): XrmBase.StringAttribute;
        getAttribute(attributeName: "emailaddress1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "telephone1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "fax"): XrmBase.StringAttribute;
        getAttribute(attributeName: "dmv_driverlicensenumber"): XrmBase.StringAttribute;
        getAttribute(attributeName: "parentcustomerid"): XrmBase.LookupAttribute<"account" | "contact">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "fullname"): XrmBase.StringControl;
        getControl(controlName: "dmv_birthdate"): XrmBase.DateControl;
        getControl(controlName: "dmv_age"): XrmBase.NumberControl;
        getControl(controlName: "dmv_hiddendifday"): XrmBase.NumberControl;
        getControl(controlName: "address1_composite"): XrmBase.StringControl;
        getControl(controlName: "preferredcontactmethodcode"): XrmBase.OptionSetControl<contact_preferredcontactmethodcode>;
        getControl(controlName: "mobilephone"): XrmBase.StringControl;
        getControl(controlName: "emailaddress1"): XrmBase.StringControl;
        getControl(controlName: "telephone1"): XrmBase.StringControl;
        getControl(controlName: "fax"): XrmBase.StringControl;
        getControl(controlName: "dmv_driverlicensenumber"): XrmBase.StringControl;
        getControl(controlName: "parentcustomerid"): XrmBase.LookupControl<"account" | "contact">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "contactquickform"): XrmBase.BaseControl;
        getControl(controlName: "Applications"): XrmBase.SubGridControl<"dmv_application">;
        getControl(controlName: "coOwnerApps"): XrmBase.SubGridControl<"dmv_application">;
        getControl(controlName: string): undefined;
    }
}
