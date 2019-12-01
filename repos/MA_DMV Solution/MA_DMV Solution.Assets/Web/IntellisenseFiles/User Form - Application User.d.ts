declare namespace Form.systemuser.Main {
    namespace ApplicationUser {
        namespace Tabs {
            interface SUMMARYTAB extends XrmBase.SectionCollectionBase {
                get(name: "onpremise account information"): XrmBase.PageSection;
                get(name: "user information"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "applicationid"): any;
            get(name: "applicationiduri"): XrmBase.StringAttribute;
            get(name: "azureactivedirectoryobjectid"): any;
            get(name: "domainname"): XrmBase.StringAttribute;
            get(name: "fullname"): XrmBase.StringAttribute;
            get(name: "internalemailaddress"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "applicationid"): XrmBase.StringControl;
            get(name: "applicationiduri"): XrmBase.StringControl;
            get(name: "azureactivedirectoryobjectid"): XrmBase.StringControl;
            get(name: "domainname"): XrmBase.StringControl;
            get(name: "fullname"): XrmBase.StringControl;
            get(name: "internalemailaddress"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "SUMMARY_TAB"): XrmBase.PageTab<Tabs.SUMMARYTAB>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface ApplicationUser extends XrmBase.PageBase<ApplicationUser.Attributes, ApplicationUser.Tabs, ApplicationUser.Controls> {
        getAttribute(attributeName: "domainname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "applicationid"): any;
        getAttribute(attributeName: "applicationiduri"): XrmBase.StringAttribute;
        getAttribute(attributeName: "azureactivedirectoryobjectid"): any;
        getAttribute(attributeName: "fullname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "internalemailaddress"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "domainname"): XrmBase.StringControl;
        getControl(controlName: "applicationid"): XrmBase.StringControl;
        getControl(controlName: "applicationiduri"): XrmBase.StringControl;
        getControl(controlName: "azureactivedirectoryobjectid"): XrmBase.StringControl;
        getControl(controlName: "fullname"): XrmBase.StringControl;
        getControl(controlName: "internalemailaddress"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
