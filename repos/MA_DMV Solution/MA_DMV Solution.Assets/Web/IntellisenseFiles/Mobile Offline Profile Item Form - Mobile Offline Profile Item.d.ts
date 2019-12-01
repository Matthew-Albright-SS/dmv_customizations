declare namespace Form.mobileofflineprofileitem.Main {
    namespace MobileOfflineProfileItem {
        namespace Tabs {
            interface GENERALINFORMATIONTAB extends XrmBase.SectionCollectionBase {
                get(name: "Entity Selection"): XrmBase.PageSection;
                get(name: "MOBILE OFFLINE PROFILE ITEM ASSOCIATIONS"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "createdon"): XrmBase.DateAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "recorddistributioncriteria"): XrmBase.OptionSetAttribute<mobileofflineprofileitem_recorddistributioncriteria>;
            get(name: "recordsownedbyme"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "recordsownedbymybusinessunit"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "recordsownedbymyteam"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "selectedentitytypecode"): XrmBase.OptionSetAttribute<mobileofflineenabledentities>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "createdon"): XrmBase.DateControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "profileassociationgrid"): XrmBase.SubGridControl<"mobileofflineprofileitemassociation">;
            get(name: "recorddistributioncriteria"): XrmBase.OptionSetControl<mobileofflineprofileitem_recorddistributioncriteria>;
            get(name: "recordsownedbyme"): XrmBase.OptionSetControl<any>;
            get(name: "recordsownedbymybusinessunit"): XrmBase.OptionSetControl<any>;
            get(name: "recordsownedbymyteam"): XrmBase.OptionSetControl<any>;
            get(name: "selectedentitytypecode"): XrmBase.OptionSetControl<mobileofflineenabledentities>;
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
    interface MobileOfflineProfileItem extends XrmBase.PageBase<MobileOfflineProfileItem.Attributes, MobileOfflineProfileItem.Tabs, MobileOfflineProfileItem.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "createdon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "selectedentitytypecode"): XrmBase.OptionSetAttribute<mobileofflineenabledentities>;
        getAttribute(attributeName: "recorddistributioncriteria"): XrmBase.OptionSetAttribute<mobileofflineprofileitem_recorddistributioncriteria>;
        getAttribute(attributeName: "recordsownedbyme"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "recordsownedbymyteam"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "recordsownedbymybusinessunit"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "createdon"): XrmBase.DateControl;
        getControl(controlName: "selectedentitytypecode"): XrmBase.OptionSetControl<mobileofflineenabledentities>;
        getControl(controlName: "recorddistributioncriteria"): XrmBase.OptionSetControl<mobileofflineprofileitem_recorddistributioncriteria>;
        getControl(controlName: "recordsownedbyme"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "recordsownedbymyteam"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "recordsownedbymybusinessunit"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "profileassociationgrid"): XrmBase.SubGridControl<"mobileofflineprofileitemassociation">;
        getControl(controlName: string): undefined;
    }
}
