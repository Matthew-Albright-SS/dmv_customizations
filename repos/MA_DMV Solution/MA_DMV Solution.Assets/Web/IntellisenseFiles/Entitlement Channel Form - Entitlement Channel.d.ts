declare namespace Form.entitlementchannel.Main {
    namespace EntitlementChannel {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "entitlementchannelinformation"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "channel"): XrmBase.OptionSetAttribute<incident_caseorigincode>;
            get(name: "totalterms"): XrmBase.NumberAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "channel"): XrmBase.OptionSetControl<incident_caseorigincode>;
            get(name: "totalterms"): XrmBase.NumberControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "general"): XrmBase.PageTab<Tabs.General>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface EntitlementChannel extends XrmBase.PageBase<EntitlementChannel.Attributes, EntitlementChannel.Tabs, EntitlementChannel.Controls> {
        getAttribute(attributeName: "channel"): XrmBase.OptionSetAttribute<incident_caseorigincode>;
        getAttribute(attributeName: "totalterms"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "channel"): XrmBase.OptionSetControl<incident_caseorigincode>;
        getControl(controlName: "totalterms"): XrmBase.NumberControl;
        getControl(controlName: string): undefined;
    }
}
