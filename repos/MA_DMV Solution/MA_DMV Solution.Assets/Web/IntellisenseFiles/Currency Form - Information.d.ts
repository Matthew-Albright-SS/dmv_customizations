declare namespace Form.transactioncurrency.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "Select Base Currency"): XrmBase.PageSection;
                get(name: "Transaction currency information"): XrmBase.PageSection;
                get(name: "Currency conversion"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "currencyname"): XrmBase.StringAttribute;
            get(name: "currencyprecision"): XrmBase.NumberAttribute;
            get(name: "currencysymbol"): XrmBase.StringAttribute;
            get(name: "exchangerate"): XrmBase.NumberAttribute;
            get(name: "isocurrencycode"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "currencyname"): XrmBase.StringControl;
            get(name: "currencyprecision"): XrmBase.NumberControl;
            get(name: "currencysymbol"): XrmBase.StringControl;
            get(name: "currencytype"): XrmBase.OptionSetControl<any>;
            get(name: "exchangerate"): XrmBase.NumberControl;
            get(name: "isocurrencycode"): XrmBase.StringControl;
            get(name: "systemcurrency"): XrmBase.BaseControl;
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
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "isocurrencycode"): XrmBase.StringAttribute;
        getAttribute(attributeName: "currencyprecision"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "currencyname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "currencysymbol"): XrmBase.StringAttribute;
        getAttribute(attributeName: "exchangerate"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "systemcurrency"): XrmBase.BaseControl;
        getControl(controlName: "currencytype"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "isocurrencycode"): XrmBase.StringControl;
        getControl(controlName: "currencyprecision"): XrmBase.NumberControl;
        getControl(controlName: "currencyname"): XrmBase.StringControl;
        getControl(controlName: "currencysymbol"): XrmBase.StringControl;
        getControl(controlName: "exchangerate"): XrmBase.NumberControl;
        getControl(controlName: string): undefined;
    }
}
