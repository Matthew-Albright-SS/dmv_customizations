declare namespace Form.socialprofile.Main {
    namespace SocialProfile {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "blocked"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "customerid"): XrmBase.LookupAttribute<"account" | "contact">;
            get(name: "profilelink"): XrmBase.StringAttribute;
            get(name: "profilename"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "blocked"): XrmBase.OptionSetControl<any>;
            get(name: "customerid"): XrmBase.LookupControl<"account" | "contact">;
            get(name: "profilelink"): XrmBase.StringControl;
            get(name: "profilename"): XrmBase.StringControl;
            get(name: "related_sp"): XrmBase.BaseControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface SocialProfile extends XrmBase.PageBase<SocialProfile.Attributes, SocialProfile.Tabs, SocialProfile.Controls> {
        getAttribute(attributeName: "profilename"): XrmBase.StringAttribute;
        getAttribute(attributeName: "profilelink"): XrmBase.StringAttribute;
        getAttribute(attributeName: "blocked"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "customerid"): XrmBase.LookupAttribute<"account" | "contact">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "profilename"): XrmBase.StringControl;
        getControl(controlName: "profilelink"): XrmBase.StringControl;
        getControl(controlName: "blocked"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "customerid"): XrmBase.LookupControl<"account" | "contact">;
        getControl(controlName: "related_sp"): XrmBase.BaseControl;
        getControl(controlName: string): undefined;
    }
}
