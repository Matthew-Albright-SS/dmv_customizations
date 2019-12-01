declare namespace Form.emailserverprofile.Main {
    namespace Information {
        namespace Tabs {
            interface Tab3 extends XrmBase.SectionCollectionBase {
                get(name: "{2EB17E5B-3A06-43BD-BB50-23F8630CD9F8}_section_1"): XrmBase.PageSection;
                get(name: "{2EB17E5B-3A06-43BD-BB50-23F8630CD9F8}_section_2"): XrmBase.PageSection;
                get(name: "{2EB17E5B-3A06-43BD-BB50-23F8630CD9F8}_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab3 extends XrmBase.SectionCollectionBase {
                get(name: "tab_3_section_1"): XrmBase.PageSection;
                get(name: "tab_3_section_2"): XrmBase.PageSection;
                get(name: "tab_3_section_3"): XrmBase.PageSection;
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
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "emailservertypename"): XrmBase.StringAttribute;
            get(name: "exchangeonlinetenantid"): XrmBase.StringAttribute;
            get(name: "incomingauthenticationprotocol"): XrmBase.OptionSetAttribute<emailserverprofile_authenticationprotocol>;
            get(name: "incomingcredentialretrieval"): XrmBase.OptionSetAttribute<emailserverprofile_incomingcredentialretrieval>;
            get(name: "incomingpassword"): XrmBase.StringAttribute;
            get(name: "incomingportnumber"): XrmBase.NumberAttribute;
            get(name: "incomingserverlocation"): XrmBase.StringAttribute;
            get(name: "incominguseimpersonation"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "incomingusername"): XrmBase.StringAttribute;
            get(name: "incomingusessl"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "maxconcurrentconnections"): XrmBase.NumberAttribute;
            get(name: "minpollingintervalinminutes"): XrmBase.NumberAttribute;
            get(name: "moveundeliveredemails"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "outgoingauthenticationprotocol"): XrmBase.OptionSetAttribute<emailserverprofile_authenticationprotocol>;
            get(name: "outgoingcredentialretrieval"): XrmBase.OptionSetAttribute<emailserverprofile_outgoingcredentialretrieval>;
            get(name: "outgoingpassword"): XrmBase.StringAttribute;
            get(name: "outgoingportnumber"): XrmBase.NumberAttribute;
            get(name: "outgoingserverlocation"): XrmBase.StringAttribute;
            get(name: "outgoinguseimpersonation"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "outgoingusername"): XrmBase.StringAttribute;
            get(name: "outgoingusessl"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "processemailsreceivedafter"): XrmBase.DateAttribute;
            get(name: "sendemailalert"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "servertype"): XrmBase.OptionSetAttribute<emailserverprofile_servertype>;
            get(name: "timeoutmailboxconnection"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "timeoutmailboxconnectionafteramount"): XrmBase.NumberAttribute;
            get(name: "useautodiscover"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "usedefaulttenantid"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "usesamesettingsforoutgoingconnections"): XrmBase.OptionSetAttribute<boolean>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "description"): XrmBase.StringControl;
            get(name: "emailservertypename"): XrmBase.StringControl;
            get(name: "exchangeonlinetenantid"): XrmBase.StringControl;
            get(name: "incomingauthenticationprotocol"): XrmBase.OptionSetControl<emailserverprofile_authenticationprotocol>;
            get(name: "incomingcredentialretrieval"): XrmBase.OptionSetControl<emailserverprofile_incomingcredentialretrieval>;
            get(name: "incomingpassword"): XrmBase.StringControl;
            get(name: "incomingportnumber"): XrmBase.NumberControl;
            get(name: "incomingserverlocation"): XrmBase.StringControl;
            get(name: "incominguseimpersonation"): XrmBase.OptionSetControl<any>;
            get(name: "incomingusername"): XrmBase.StringControl;
            get(name: "incomingusessl"): XrmBase.OptionSetControl<any>;
            get(name: "maxconcurrentconnections"): XrmBase.NumberControl;
            get(name: "minpollingintervalinminutes"): XrmBase.NumberControl;
            get(name: "moveundeliveredemails"): XrmBase.OptionSetControl<any>;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "outgoingauthenticationprotocol"): XrmBase.OptionSetControl<emailserverprofile_authenticationprotocol>;
            get(name: "outgoingcredentialretrieval"): XrmBase.OptionSetControl<emailserverprofile_outgoingcredentialretrieval>;
            get(name: "outgoingpassword"): XrmBase.StringControl;
            get(name: "outgoingportnumber"): XrmBase.NumberControl;
            get(name: "outgoingserverlocation"): XrmBase.StringControl;
            get(name: "outgoinguseimpersonation"): XrmBase.OptionSetControl<any>;
            get(name: "outgoingusername"): XrmBase.StringControl;
            get(name: "outgoingusessl"): XrmBase.OptionSetControl<any>;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "processemailsreceivedafter"): XrmBase.DateControl;
            get(name: "sendemailalert"): XrmBase.OptionSetControl<any>;
            get(name: "servertype"): XrmBase.OptionSetControl<emailserverprofile_servertype>;
            get(name: "timeoutmailboxconnection"): XrmBase.OptionSetControl<any>;
            get(name: "timeoutmailboxconnectionafteramount"): XrmBase.NumberControl;
            get(name: "useautodiscover"): XrmBase.OptionSetControl<any>;
            get(name: "usedefaulttenantid"): XrmBase.OptionSetControl<any>;
            get(name: "usesamesettingsforoutgoingconnections"): XrmBase.OptionSetControl<any>;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "tab_3"): XrmBase.PageTab<Tabs.Tab3>;
            get(name: "tab_3"): XrmBase.PageTab<Tabs.Tab3>;
            get(name: "tab_4"): XrmBase.PageTab<Tabs.Tab4>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "servertype"): XrmBase.OptionSetAttribute<emailserverprofile_servertype>;
        getAttribute(attributeName: "emailservertypename"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "usedefaulttenantid"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "exchangeonlinetenantid"): XrmBase.StringAttribute;
        getAttribute(attributeName: "useautodiscover"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "incomingserverlocation"): XrmBase.StringAttribute;
        getAttribute(attributeName: "outgoingserverlocation"): XrmBase.StringAttribute;
        getAttribute(attributeName: "incomingcredentialretrieval"): XrmBase.OptionSetAttribute<emailserverprofile_incomingcredentialretrieval>;
        getAttribute(attributeName: "incomingusername"): XrmBase.StringAttribute;
        getAttribute(attributeName: "incominguseimpersonation"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "incomingpassword"): XrmBase.StringAttribute;
        getAttribute(attributeName: "usesamesettingsforoutgoingconnections"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "outgoingcredentialretrieval"): XrmBase.OptionSetAttribute<emailserverprofile_outgoingcredentialretrieval>;
        getAttribute(attributeName: "outgoingusername"): XrmBase.StringAttribute;
        getAttribute(attributeName: "outgoinguseimpersonation"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "outgoingpassword"): XrmBase.StringAttribute;
        getAttribute(attributeName: "incomingportnumber"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "outgoingportnumber"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "incomingusessl"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "outgoingusessl"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "incomingauthenticationprotocol"): XrmBase.OptionSetAttribute<emailserverprofile_authenticationprotocol>;
        getAttribute(attributeName: "outgoingauthenticationprotocol"): XrmBase.OptionSetAttribute<emailserverprofile_authenticationprotocol>;
        getAttribute(attributeName: "processemailsreceivedafter"): XrmBase.DateAttribute;
        getAttribute(attributeName: "minpollingintervalinminutes"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "maxconcurrentconnections"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "moveundeliveredemails"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "sendemailalert"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "timeoutmailboxconnection"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "timeoutmailboxconnectionafteramount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "servertype"): XrmBase.OptionSetControl<emailserverprofile_servertype>;
        getControl(controlName: "emailservertypename"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "usedefaulttenantid"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "exchangeonlinetenantid"): XrmBase.StringControl;
        getControl(controlName: "useautodiscover"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "incomingserverlocation"): XrmBase.StringControl;
        getControl(controlName: "outgoingserverlocation"): XrmBase.StringControl;
        getControl(controlName: "incomingcredentialretrieval"): XrmBase.OptionSetControl<emailserverprofile_incomingcredentialretrieval>;
        getControl(controlName: "incomingusername"): XrmBase.StringControl;
        getControl(controlName: "incominguseimpersonation"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "incomingpassword"): XrmBase.StringControl;
        getControl(controlName: "usesamesettingsforoutgoingconnections"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "outgoingcredentialretrieval"): XrmBase.OptionSetControl<emailserverprofile_outgoingcredentialretrieval>;
        getControl(controlName: "outgoingusername"): XrmBase.StringControl;
        getControl(controlName: "outgoinguseimpersonation"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "outgoingpassword"): XrmBase.StringControl;
        getControl(controlName: "incomingportnumber"): XrmBase.NumberControl;
        getControl(controlName: "outgoingportnumber"): XrmBase.NumberControl;
        getControl(controlName: "incomingusessl"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "outgoingusessl"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "incomingauthenticationprotocol"): XrmBase.OptionSetControl<emailserverprofile_authenticationprotocol>;
        getControl(controlName: "outgoingauthenticationprotocol"): XrmBase.OptionSetControl<emailserverprofile_authenticationprotocol>;
        getControl(controlName: "processemailsreceivedafter"): XrmBase.DateControl;
        getControl(controlName: "minpollingintervalinminutes"): XrmBase.NumberControl;
        getControl(controlName: "maxconcurrentconnections"): XrmBase.NumberControl;
        getControl(controlName: "moveundeliveredemails"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "sendemailalert"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "timeoutmailboxconnection"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "timeoutmailboxconnectionafteramount"): XrmBase.NumberControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
