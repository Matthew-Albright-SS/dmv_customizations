declare namespace Form.mobileofflineprofileitemassociation.Main {
    namespace MobileOfflineProfileItemAssociation {
        namespace Tabs {
            interface GENERALINFORMATIONTAB extends XrmBase.SectionCollectionBase {
                get(name: "General"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "createdon"): XrmBase.DateAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "relationshipname"): XrmBase.StringAttribute;
            get(name: "selectedrelationshipsschema"): XrmBase.OptionSetAttribute<selectedmobileofflineenabledentityrelationships>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "createdon"): XrmBase.DateControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "relationshipname"): XrmBase.StringControl;
            get(name: "selectedrelationshipsschema"): XrmBase.OptionSetControl<selectedmobileofflineenabledentityrelationships>;
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
    interface MobileOfflineProfileItemAssociation extends XrmBase.PageBase<MobileOfflineProfileItemAssociation.Attributes, MobileOfflineProfileItemAssociation.Tabs, MobileOfflineProfileItemAssociation.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "createdon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "selectedrelationshipsschema"): XrmBase.OptionSetAttribute<selectedmobileofflineenabledentityrelationships>;
        getAttribute(attributeName: "relationshipname"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "createdon"): XrmBase.DateControl;
        getControl(controlName: "selectedrelationshipsschema"): XrmBase.OptionSetControl<selectedmobileofflineenabledentityrelationships>;
        getControl(controlName: "relationshipname"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
