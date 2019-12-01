declare namespace Form.systemuser.Main {
    namespace User {
        namespace Tabs {
            interface SUMMARYTAB extends XrmBase.SectionCollectionBase {
                get(name: "onpremise account information"): XrmBase.PageSection;
                get(name: "online account information"): XrmBase.PageSection;
                get(name: "user information"): XrmBase.PageSection;
                get(name: "SOCIAL_PANE_TAB"): XrmBase.PageSection;
                get(name: "teams information"): XrmBase.PageSection;
                get(name: "queue information"): XrmBase.PageSection;
                get(name: "organization information"): XrmBase.PageSection;
                get(name: "queue selection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface DETAILSTAB extends XrmBase.SectionCollectionBase {
                get(name: "user information_2"): XrmBase.PageSection;
                get(name: "mailing address"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface ADMINISTRATIONTAB extends XrmBase.SectionCollectionBase {
                get(name: "administration"): XrmBase.PageSection;
                get(name: "e-mail configuration"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Usrstab extends XrmBase.SectionCollectionBase {
                get(name: "urstab_section_general"): XrmBase.PageSection;
                get(name: "tab_5_section_2"): XrmBase.PageSection;
                get(name: "tab_5_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "accessmode"): XrmBase.OptionSetAttribute<systemuser_accessmode>;
            get(name: "address1_composite"): XrmBase.StringAttribute;
            get(name: "address1_fax"): XrmBase.StringAttribute;
            get(name: "address1_latitude"): XrmBase.NumberAttribute;
            get(name: "address1_longitude"): XrmBase.NumberAttribute;
            get(name: "address1_telephone1"): XrmBase.StringAttribute;
            get(name: "address1_telephone2"): XrmBase.StringAttribute;
            get(name: "address1_telephone3"): XrmBase.StringAttribute;
            get(name: "address2_composite"): XrmBase.StringAttribute;
            get(name: "businessunitid"): XrmBase.LookupAttribute<"businessunit">;
            get(name: "caltype"): XrmBase.OptionSetAttribute<systemuser_caltype>;
            get(name: "defaultmailbox"): XrmBase.LookupAttribute<"mailbox">;
            get(name: "domainname"): XrmBase.StringAttribute;
            get(name: "fullname"): XrmBase.StringAttribute;
            get(name: "homephone"): XrmBase.StringAttribute;
            get(name: "internalemailaddress"): XrmBase.StringAttribute;
            get(name: "invitestatuscode"): XrmBase.OptionSetAttribute<systemuser_invitestatuscode>;
            get(name: "mobilealertemail"): XrmBase.StringAttribute;
            get(name: "mobilephone"): XrmBase.StringAttribute;
            get(name: "parentsystemuserid"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "personalemailaddress"): XrmBase.StringAttribute;
            get(name: "preferredaddresscode"): XrmBase.OptionSetAttribute<systemuser_preferredaddresscode>;
            get(name: "preferredphonecode"): XrmBase.OptionSetAttribute<systemuser_preferredphonecode>;
            get(name: "queueid"): XrmBase.LookupAttribute<"queue">;
            get(name: "siteid"): XrmBase.LookupAttribute<"site">;
            get(name: "territoryid"): XrmBase.LookupAttribute<"territory">;
            get(name: "title"): XrmBase.StringAttribute;
            get(name: "windowsliveid"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "accessmode"): XrmBase.OptionSetControl<systemuser_accessmode>;
            get(name: "address1_composite"): XrmBase.StringControl;
            get(name: "address1_fax"): XrmBase.StringControl;
            get(name: "address1_latitude"): XrmBase.NumberControl;
            get(name: "address1_longitude"): XrmBase.NumberControl;
            get(name: "address1_telephone1"): XrmBase.StringControl;
            get(name: "address1_telephone2"): XrmBase.StringControl;
            get(name: "address1_telephone3"): XrmBase.StringControl;
            get(name: "address2_composite"): XrmBase.StringControl;
            get(name: "businessunitid"): XrmBase.LookupControl<"businessunit">;
            get(name: "caltype"): XrmBase.OptionSetControl<systemuser_caltype>;
            get(name: "defaultmailbox"): XrmBase.LookupControl<"mailbox">;
            get(name: "domainname"): XrmBase.StringControl;
            get(name: "fullname"): XrmBase.StringControl;
            get(name: "homephone"): XrmBase.StringControl;
            get(name: "internalemailaddress"): XrmBase.StringControl;
            get(name: "invitestatuscode"): XrmBase.OptionSetControl<systemuser_invitestatuscode>;
            get(name: "mobilealertemail"): XrmBase.StringControl;
            get(name: "mobilephone"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "parentsystemuserid"): XrmBase.LookupControl<"systemuser">;
            get(name: "personalemailaddress"): XrmBase.StringControl;
            get(name: "preferredaddresscode"): XrmBase.OptionSetControl<systemuser_preferredaddresscode>;
            get(name: "preferredphonecode"): XrmBase.OptionSetControl<systemuser_preferredphonecode>;
            get(name: "PrivateQueuesSubGrid"): XrmBase.SubGridControl<"queue">;
            get(name: "queueid"): XrmBase.LookupControl<"queue">;
            get(name: "siteid"): XrmBase.LookupControl<"site">;
            get(name: "TeamsSubGrid"): XrmBase.SubGridControl<"team">;
            get(name: "territoryid"): XrmBase.LookupControl<"territory">;
            get(name: "title"): XrmBase.StringControl;
            get(name: "windowsliveid"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "SUMMARY_TAB"): XrmBase.PageTab<Tabs.SUMMARYTAB>;
            get(name: "DETAILS_TAB"): XrmBase.PageTab<Tabs.DETAILSTAB>;
            get(name: "ADMINISTRATION_TAB"): XrmBase.PageTab<Tabs.ADMINISTRATIONTAB>;
            get(name: "usrstab"): XrmBase.PageTab<Tabs.Usrstab>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface User extends XrmBase.PageBase<User.Attributes, User.Tabs, User.Controls> {
        getAttribute(attributeName: "domainname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "windowsliveid"): XrmBase.StringAttribute;
        getAttribute(attributeName: "invitestatuscode"): XrmBase.OptionSetAttribute<systemuser_invitestatuscode>;
        getAttribute(attributeName: "fullname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "title"): XrmBase.StringAttribute;
        getAttribute(attributeName: "internalemailaddress"): XrmBase.StringAttribute;
        getAttribute(attributeName: "mobilephone"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_telephone1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "siteid"): XrmBase.LookupAttribute<"site">;
        getAttribute(attributeName: "territoryid"): XrmBase.LookupAttribute<"territory">;
        getAttribute(attributeName: "businessunitid"): XrmBase.LookupAttribute<"businessunit">;
        getAttribute(attributeName: "parentsystemuserid"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "queueid"): XrmBase.LookupAttribute<"queue">;
        getAttribute(attributeName: "homephone"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_telephone2"): XrmBase.StringAttribute;
        getAttribute(attributeName: "personalemailaddress"): XrmBase.StringAttribute;
        getAttribute(attributeName: "preferredphonecode"): XrmBase.OptionSetAttribute<systemuser_preferredphonecode>;
        getAttribute(attributeName: "mobilealertemail"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_telephone3"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_fax"): XrmBase.StringAttribute;
        getAttribute(attributeName: "preferredaddresscode"): XrmBase.OptionSetAttribute<systemuser_preferredaddresscode>;
        getAttribute(attributeName: "address1_composite"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address2_composite"): XrmBase.StringAttribute;
        getAttribute(attributeName: "accessmode"): XrmBase.OptionSetAttribute<systemuser_accessmode>;
        getAttribute(attributeName: "caltype"): XrmBase.OptionSetAttribute<systemuser_caltype>;
        getAttribute(attributeName: "defaultmailbox"): XrmBase.LookupAttribute<"mailbox">;
        getAttribute(attributeName: "address1_latitude"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "address1_longitude"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "domainname"): XrmBase.StringControl;
        getControl(controlName: "windowsliveid"): XrmBase.StringControl;
        getControl(controlName: "invitestatuscode"): XrmBase.OptionSetControl<systemuser_invitestatuscode>;
        getControl(controlName: "fullname"): XrmBase.StringControl;
        getControl(controlName: "title"): XrmBase.StringControl;
        getControl(controlName: "internalemailaddress"): XrmBase.StringControl;
        getControl(controlName: "mobilephone"): XrmBase.StringControl;
        getControl(controlName: "address1_telephone1"): XrmBase.StringControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "TeamsSubGrid"): XrmBase.SubGridControl<"team">;
        getControl(controlName: "PrivateQueuesSubGrid"): XrmBase.SubGridControl<"queue">;
        getControl(controlName: "siteid"): XrmBase.LookupControl<"site">;
        getControl(controlName: "territoryid"): XrmBase.LookupControl<"territory">;
        getControl(controlName: "businessunitid"): XrmBase.LookupControl<"businessunit">;
        getControl(controlName: "parentsystemuserid"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "queueid"): XrmBase.LookupControl<"queue">;
        getControl(controlName: "homephone"): XrmBase.StringControl;
        getControl(controlName: "address1_telephone2"): XrmBase.StringControl;
        getControl(controlName: "personalemailaddress"): XrmBase.StringControl;
        getControl(controlName: "preferredphonecode"): XrmBase.OptionSetControl<systemuser_preferredphonecode>;
        getControl(controlName: "mobilealertemail"): XrmBase.StringControl;
        getControl(controlName: "address1_telephone3"): XrmBase.StringControl;
        getControl(controlName: "address1_fax"): XrmBase.StringControl;
        getControl(controlName: "preferredaddresscode"): XrmBase.OptionSetControl<systemuser_preferredaddresscode>;
        getControl(controlName: "address1_composite"): XrmBase.StringControl;
        getControl(controlName: "address2_composite"): XrmBase.StringControl;
        getControl(controlName: "accessmode"): XrmBase.OptionSetControl<systemuser_accessmode>;
        getControl(controlName: "caltype"): XrmBase.OptionSetControl<systemuser_caltype>;
        getControl(controlName: "defaultmailbox"): XrmBase.LookupControl<"mailbox">;
        getControl(controlName: "address1_latitude"): XrmBase.NumberControl;
        getControl(controlName: "address1_longitude"): XrmBase.NumberControl;
        getControl(controlName: string): undefined;
    }
}
