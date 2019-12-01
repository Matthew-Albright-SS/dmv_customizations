declare namespace Form.msdyn_transactioncategory.Main {
    namespace Information {
        namespace Tabs {
            interface _4ee119bddc5a46579359c0361849634a extends XrmBase.SectionCollectionBase {
                get(name: "{0db3dc26-6905-4f70-aea5-0465394a8256}"): XrmBase.PageSection;
                get(name: "{4ee119bd-dc5a-4657-9359-c0361849634a}_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_billingtype"): XrmBase.OptionSetAttribute<msdyn_billingtype>;
            get(name: "msdyn_defaultunit"): XrmBase.LookupAttribute<"uom">;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_unitgroup"): XrmBase.LookupAttribute<"uomschedule">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_billingtype"): XrmBase.OptionSetControl<msdyn_billingtype>;
            get(name: "msdyn_defaultunit"): XrmBase.LookupControl<"uom">;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_unitgroup"): XrmBase.LookupControl<"uomschedule">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{4ee119bd-dc5a-4657-9359-c0361849634a}"): XrmBase.PageTab<Tabs._4ee119bddc5a46579359c0361849634a>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_unitgroup"): XrmBase.LookupAttribute<"uomschedule">;
        getAttribute(attributeName: "msdyn_defaultunit"): XrmBase.LookupAttribute<"uom">;
        getAttribute(attributeName: "msdyn_billingtype"): XrmBase.OptionSetAttribute<msdyn_billingtype>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_unitgroup"): XrmBase.LookupControl<"uomschedule">;
        getControl(controlName: "msdyn_defaultunit"): XrmBase.LookupControl<"uom">;
        getControl(controlName: "msdyn_billingtype"): XrmBase.OptionSetControl<msdyn_billingtype>;
        getControl(controlName: string): undefined;
    }
}
