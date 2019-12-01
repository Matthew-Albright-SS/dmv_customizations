declare namespace Form.mailbox.Main {
    namespace Information {
        namespace Tabs {
            interface MailboxStatusTab extends XrmBase.SectionCollectionBase {
                get(name: "MailboxStatusTab_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab4 extends XrmBase.SectionCollectionBase {
                get(name: "tab_4_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "actdeliverymethod"): XrmBase.OptionSetAttribute<mailbox_actdeliverymethod>;
            get(name: "actstatus"): XrmBase.OptionSetAttribute<mailbox_actstatus>;
            get(name: "allowemailconnectortousecredentials"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "emailaddress"): XrmBase.StringAttribute;
            get(name: "emailserverprofile"): XrmBase.LookupAttribute<"emailserverprofile">;
            get(name: "incomingemaildeliverymethod"): XrmBase.OptionSetAttribute<mailbox_incomingemaildeliverymethod>;
            get(name: "incomingemailstatus"): XrmBase.OptionSetAttribute<mailbox_incomingemailstatus>;
            get(name: "isemailaddressapprovedbyo365admin"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "isforwardmailbox"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "outgoingemaildeliverymethod"): XrmBase.OptionSetAttribute<mailbox_outgoingemaildeliverymethod>;
            get(name: "outgoingemailstatus"): XrmBase.OptionSetAttribute<mailbox_outgoingemailstatus>;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "password"): XrmBase.StringAttribute;
            get(name: "processanddeleteemails"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "regardingobjectid"): XrmBase.LookupAttribute<"queue" | "systemuser">;
            get(name: "testmailboxaccesscompletedon"): XrmBase.DateAttribute;
            get(name: "username"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "actdeliverymethod"): XrmBase.OptionSetControl<mailbox_actdeliverymethod>;
            get(name: "actstatus"): XrmBase.OptionSetControl<mailbox_actstatus>;
            get(name: "allowemailconnectortousecredentials"): XrmBase.OptionSetControl<any>;
            get(name: "emailaddress"): XrmBase.StringControl;
            get(name: "emailserverprofile"): XrmBase.LookupControl<"emailserverprofile">;
            get(name: "incomingemaildeliverymethod"): XrmBase.OptionSetControl<mailbox_incomingemaildeliverymethod>;
            get(name: "incomingemailstatus"): XrmBase.OptionSetControl<mailbox_incomingemailstatus>;
            get(name: "isemailaddressapprovedbyo365admin"): XrmBase.OptionSetControl<any>;
            get(name: "isforwardmailbox"): XrmBase.OptionSetControl<any>;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "outgoingemaildeliverymethod"): XrmBase.OptionSetControl<mailbox_outgoingemaildeliverymethod>;
            get(name: "outgoingemailstatus"): XrmBase.OptionSetControl<mailbox_outgoingemailstatus>;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "password"): XrmBase.StringControl;
            get(name: "processanddeleteemails"): XrmBase.OptionSetControl<any>;
            get(name: "regardingobjectid"): XrmBase.LookupControl<"queue" | "systemuser">;
            get(name: "testmailboxaccesscompletedon"): XrmBase.DateControl;
            get(name: "username"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "MailboxStatusTab"): XrmBase.PageTab<Tabs.MailboxStatusTab>;
            get(name: "tab_4"): XrmBase.PageTab<Tabs.Tab4>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "isemailaddressapprovedbyo365admin"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "incomingemailstatus"): XrmBase.OptionSetAttribute<mailbox_incomingemailstatus>;
        getAttribute(attributeName: "outgoingemailstatus"): XrmBase.OptionSetAttribute<mailbox_outgoingemailstatus>;
        getAttribute(attributeName: "actstatus"): XrmBase.OptionSetAttribute<mailbox_actstatus>;
        getAttribute(attributeName: "testmailboxaccesscompletedon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "emailaddress"): XrmBase.StringAttribute;
        getAttribute(attributeName: "isforwardmailbox"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "regardingobjectid"): XrmBase.LookupAttribute<"queue" | "systemuser">;
        getAttribute(attributeName: "processanddeleteemails"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "allowemailconnectortousecredentials"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "username"): XrmBase.StringAttribute;
        getAttribute(attributeName: "password"): XrmBase.StringAttribute;
        getAttribute(attributeName: "emailserverprofile"): XrmBase.LookupAttribute<"emailserverprofile">;
        getAttribute(attributeName: "incomingemaildeliverymethod"): XrmBase.OptionSetAttribute<mailbox_incomingemaildeliverymethod>;
        getAttribute(attributeName: "outgoingemaildeliverymethod"): XrmBase.OptionSetAttribute<mailbox_outgoingemaildeliverymethod>;
        getAttribute(attributeName: "actdeliverymethod"): XrmBase.OptionSetAttribute<mailbox_actdeliverymethod>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "isemailaddressapprovedbyo365admin"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "incomingemailstatus"): XrmBase.OptionSetControl<mailbox_incomingemailstatus>;
        getControl(controlName: "outgoingemailstatus"): XrmBase.OptionSetControl<mailbox_outgoingemailstatus>;
        getControl(controlName: "actstatus"): XrmBase.OptionSetControl<mailbox_actstatus>;
        getControl(controlName: "testmailboxaccesscompletedon"): XrmBase.DateControl;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "emailaddress"): XrmBase.StringControl;
        getControl(controlName: "isforwardmailbox"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "regardingobjectid"): XrmBase.LookupControl<"queue" | "systemuser">;
        getControl(controlName: "processanddeleteemails"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "allowemailconnectortousecredentials"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "username"): XrmBase.StringControl;
        getControl(controlName: "password"): XrmBase.StringControl;
        getControl(controlName: "emailserverprofile"): XrmBase.LookupControl<"emailserverprofile">;
        getControl(controlName: "incomingemaildeliverymethod"): XrmBase.OptionSetControl<mailbox_incomingemaildeliverymethod>;
        getControl(controlName: "outgoingemaildeliverymethod"): XrmBase.OptionSetControl<mailbox_outgoingemaildeliverymethod>;
        getControl(controlName: "actdeliverymethod"): XrmBase.OptionSetControl<mailbox_actdeliverymethod>;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
