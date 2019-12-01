declare namespace Form.mobileofflineprofile.Main {
    namespace MobileOfflineProfile {
        namespace Tabs {
            interface GENERALINFORMATIONTAB extends XrmBase.SectionCollectionBase {
                get(name: "property_bag_properties_1"): XrmBase.PageSection;
                get(name: "MOBILE OFFLINE PROFILE ITEMS"): XrmBase.PageSection;
                get(name: "profile_users"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "description"): XrmBase.StringControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "profileitemgrid"): XrmBase.SubGridControl<"mobileofflineprofileitem">;
            get(name: "SystemUserGrid"): XrmBase.SubGridControl<"systemuser">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "GENERALINFORMATION_TAB"): XrmBase.PageTab<Tabs.GENERALINFORMATIONTAB>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface MobileOfflineProfile extends XrmBase.PageBase<MobileOfflineProfile.Attributes, MobileOfflineProfile.Tabs, MobileOfflineProfile.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "profileitemgrid"): XrmBase.SubGridControl<"mobileofflineprofileitem">;
        getControl(controlName: "SystemUserGrid"): XrmBase.SubGridControl<"systemuser">;
        getControl(controlName: string): undefined;
    }
}
