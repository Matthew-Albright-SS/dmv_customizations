declare namespace Form.systemuser.Main {
    namespace UserFormBusiness {
        namespace Tabs {
            interface SUMMARYTAB extends XrmBase.SectionCollectionBase {
                get(name: "onpremise account information"): XrmBase.PageSection;
                get(name: "online account information"): XrmBase.PageSection;
                get(name: "user information"): XrmBase.PageSection;
                get(name: "organization information"): XrmBase.PageSection;
                get(name: "mailing address"): XrmBase.PageSection;
                get(name: "TEAMS_TAB"): XrmBase.PageSection;
                get(name: "DirectReports"): XrmBase.PageSection;
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
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "accessmode"): XrmBase.OptionSetAttribute<systemuser_accessmode>;
            get(name: "address1_composite"): XrmBase.StringAttribute;
            get(name: "address1_telephone1"): XrmBase.StringAttribute;
            get(name: "businessunitid"): XrmBase.LookupAttribute<"businessunit">;
            get(name: "caltype"): XrmBase.OptionSetAttribute<systemuser_caltype>;
            get(name: "defaultmailbox"): XrmBase.LookupAttribute<"mailbox">;
            get(name: "domainname"): XrmBase.StringAttribute;
            get(name: "fullname"): XrmBase.StringAttribute;
            get(name: "internalemailaddress"): XrmBase.StringAttribute;
            get(name: "invitestatuscode"): XrmBase.OptionSetAttribute<systemuser_invitestatuscode>;
            get(name: "mobilephone"): XrmBase.StringAttribute;
            get(name: "parentsystemuserid"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "preferredaddresscode"): XrmBase.OptionSetAttribute<systemuser_preferredaddresscode>;
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
            get(name: "address1_telephone1"): XrmBase.StringControl;
            get(name: "businessunitid"): XrmBase.LookupControl<"businessunit">;
            get(name: "caltype"): XrmBase.OptionSetControl<systemuser_caltype>;
            get(name: "defaultmailbox"): XrmBase.LookupControl<"mailbox">;
            get(name: "DirectReports"): XrmBase.SubGridControl<"systemuser">;
            get(name: "domainname"): XrmBase.StringControl;
            get(name: "fullname"): XrmBase.StringControl;
            get(name: "internalemailaddress"): XrmBase.StringControl;
            get(name: "invitestatuscode"): XrmBase.OptionSetControl<systemuser_invitestatuscode>;
            get(name: "mobilephone"): XrmBase.StringControl;
            get(name: "parentsystemuserid"): XrmBase.LookupControl<"systemuser">;
            get(name: "preferredaddresscode"): XrmBase.OptionSetControl<systemuser_preferredaddresscode>;
            get(name: "TeamsSubGrid"): XrmBase.SubGridControl<"team">;
            get(name: "title"): XrmBase.StringControl;
            get(name: "windowsliveid"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "SUMMARY_TAB"): XrmBase.PageTab<Tabs.SUMMARYTAB>;
            get(name: "ADMINISTRATION_TAB"): XrmBase.PageTab<Tabs.ADMINISTRATIONTAB>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface UserFormBusiness extends XrmBase.PageBase<UserFormBusiness.Attributes, UserFormBusiness.Tabs, UserFormBusiness.Controls> {
        getAttribute(attributeName: "domainname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "windowsliveid"): XrmBase.StringAttribute;
        getAttribute(attributeName: "invitestatuscode"): XrmBase.OptionSetAttribute<systemuser_invitestatuscode>;
        getAttribute(attributeName: "fullname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "title"): XrmBase.StringAttribute;
        getAttribute(attributeName: "internalemailaddress"): XrmBase.StringAttribute;
        getAttribute(attributeName: "mobilephone"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_telephone1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "businessunitid"): XrmBase.LookupAttribute<"businessunit">;
        getAttribute(attributeName: "parentsystemuserid"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "preferredaddresscode"): XrmBase.OptionSetAttribute<systemuser_preferredaddresscode>;
        getAttribute(attributeName: "address1_composite"): XrmBase.StringAttribute;
        getAttribute(attributeName: "accessmode"): XrmBase.OptionSetAttribute<systemuser_accessmode>;
        getAttribute(attributeName: "caltype"): XrmBase.OptionSetAttribute<systemuser_caltype>;
        getAttribute(attributeName: "defaultmailbox"): XrmBase.LookupAttribute<"mailbox">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "domainname"): XrmBase.StringControl;
        getControl(controlName: "windowsliveid"): XrmBase.StringControl;
        getControl(controlName: "invitestatuscode"): XrmBase.OptionSetControl<systemuser_invitestatuscode>;
        getControl(controlName: "fullname"): XrmBase.StringControl;
        getControl(controlName: "title"): XrmBase.StringControl;
        getControl(controlName: "internalemailaddress"): XrmBase.StringControl;
        getControl(controlName: "mobilephone"): XrmBase.StringControl;
        getControl(controlName: "address1_telephone1"): XrmBase.StringControl;
        getControl(controlName: "businessunitid"): XrmBase.LookupControl<"businessunit">;
        getControl(controlName: "parentsystemuserid"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "preferredaddresscode"): XrmBase.OptionSetControl<systemuser_preferredaddresscode>;
        getControl(controlName: "address1_composite"): XrmBase.StringControl;
        getControl(controlName: "TeamsSubGrid"): XrmBase.SubGridControl<"team">;
        getControl(controlName: "DirectReports"): XrmBase.SubGridControl<"systemuser">;
        getControl(controlName: "accessmode"): XrmBase.OptionSetControl<systemuser_accessmode>;
        getControl(controlName: "caltype"): XrmBase.OptionSetControl<systemuser_caltype>;
        getControl(controlName: "defaultmailbox"): XrmBase.LookupControl<"mailbox">;
        getControl(controlName: string): undefined;
    }
}
