declare namespace Form.customeraddress.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "customer address information"): XrmBase.PageSection;
                get(name: "phone numbers"): XrmBase.PageSection;
                get(name: "additional information"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "addresstypecode"): XrmBase.OptionSetAttribute<customeraddress_addresstypecode>;
            get(name: "city"): XrmBase.StringAttribute;
            get(name: "country"): XrmBase.StringAttribute;
            get(name: "fax"): XrmBase.StringAttribute;
            get(name: "freighttermscode"): XrmBase.OptionSetAttribute<customeraddress_freighttermscode>;
            get(name: "line1"): XrmBase.StringAttribute;
            get(name: "line2"): XrmBase.StringAttribute;
            get(name: "line3"): XrmBase.StringAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "postalcode"): XrmBase.StringAttribute;
            get(name: "primarycontactname"): XrmBase.StringAttribute;
            get(name: "shippingmethodcode"): XrmBase.OptionSetAttribute<customeraddress_shippingmethodcode>;
            get(name: "stateorprovince"): XrmBase.StringAttribute;
            get(name: "telephone1"): XrmBase.StringAttribute;
            get(name: "telephone2"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "addresstypecode"): XrmBase.OptionSetControl<customeraddress_addresstypecode>;
            get(name: "city"): XrmBase.StringControl;
            get(name: "country"): XrmBase.StringControl;
            get(name: "fax"): XrmBase.StringControl;
            get(name: "freighttermscode"): XrmBase.OptionSetControl<customeraddress_freighttermscode>;
            get(name: "line1"): XrmBase.StringControl;
            get(name: "line2"): XrmBase.StringControl;
            get(name: "line3"): XrmBase.StringControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "postalcode"): XrmBase.StringControl;
            get(name: "primarycontactname"): XrmBase.StringControl;
            get(name: "shippingmethodcode"): XrmBase.OptionSetControl<customeraddress_shippingmethodcode>;
            get(name: "stateorprovince"): XrmBase.StringControl;
            get(name: "telephone1"): XrmBase.StringControl;
            get(name: "telephone2"): XrmBase.StringControl;
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
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "stateorprovince"): XrmBase.StringAttribute;
        getAttribute(attributeName: "line1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "postalcode"): XrmBase.StringAttribute;
        getAttribute(attributeName: "line2"): XrmBase.StringAttribute;
        getAttribute(attributeName: "country"): XrmBase.StringAttribute;
        getAttribute(attributeName: "line3"): XrmBase.StringAttribute;
        getAttribute(attributeName: "addresstypecode"): XrmBase.OptionSetAttribute<customeraddress_addresstypecode>;
        getAttribute(attributeName: "city"): XrmBase.StringAttribute;
        getAttribute(attributeName: "telephone1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "fax"): XrmBase.StringAttribute;
        getAttribute(attributeName: "telephone2"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shippingmethodcode"): XrmBase.OptionSetAttribute<customeraddress_shippingmethodcode>;
        getAttribute(attributeName: "primarycontactname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "freighttermscode"): XrmBase.OptionSetAttribute<customeraddress_freighttermscode>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "stateorprovince"): XrmBase.StringControl;
        getControl(controlName: "line1"): XrmBase.StringControl;
        getControl(controlName: "postalcode"): XrmBase.StringControl;
        getControl(controlName: "line2"): XrmBase.StringControl;
        getControl(controlName: "country"): XrmBase.StringControl;
        getControl(controlName: "line3"): XrmBase.StringControl;
        getControl(controlName: "addresstypecode"): XrmBase.OptionSetControl<customeraddress_addresstypecode>;
        getControl(controlName: "city"): XrmBase.StringControl;
        getControl(controlName: "telephone1"): XrmBase.StringControl;
        getControl(controlName: "fax"): XrmBase.StringControl;
        getControl(controlName: "telephone2"): XrmBase.StringControl;
        getControl(controlName: "shippingmethodcode"): XrmBase.OptionSetControl<customeraddress_shippingmethodcode>;
        getControl(controlName: "primarycontactname"): XrmBase.StringControl;
        getControl(controlName: "freighttermscode"): XrmBase.OptionSetControl<customeraddress_freighttermscode>;
        getControl(controlName: string): undefined;
    }
}
