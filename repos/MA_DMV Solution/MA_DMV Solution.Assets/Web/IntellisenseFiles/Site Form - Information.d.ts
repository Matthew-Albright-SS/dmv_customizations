declare namespace Form.site.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "section1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Address extends XrmBase.SectionCollectionBase {
                get(name: "primary address"): XrmBase.PageSection;
                get(name: "time zone"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "address1_city"): XrmBase.StringAttribute;
            get(name: "address1_country"): XrmBase.StringAttribute;
            get(name: "address1_fax"): XrmBase.StringAttribute;
            get(name: "address1_line1"): XrmBase.StringAttribute;
            get(name: "address1_line2"): XrmBase.StringAttribute;
            get(name: "address1_line3"): XrmBase.StringAttribute;
            get(name: "address1_postalcode"): XrmBase.StringAttribute;
            get(name: "address1_stateorprovince"): XrmBase.StringAttribute;
            get(name: "address1_telephone1"): XrmBase.StringAttribute;
            get(name: "address1_telephone2"): XrmBase.StringAttribute;
            get(name: "emailaddress"): XrmBase.StringAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "timezonecode"): XrmBase.NumberAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "address1_city"): XrmBase.StringControl;
            get(name: "address1_country"): XrmBase.StringControl;
            get(name: "address1_fax"): XrmBase.StringControl;
            get(name: "address1_line1"): XrmBase.StringControl;
            get(name: "address1_line2"): XrmBase.StringControl;
            get(name: "address1_line3"): XrmBase.StringControl;
            get(name: "address1_postalcode"): XrmBase.StringControl;
            get(name: "address1_stateorprovince"): XrmBase.StringControl;
            get(name: "address1_telephone1"): XrmBase.StringControl;
            get(name: "address1_telephone2"): XrmBase.StringControl;
            get(name: "emailaddress"): XrmBase.StringControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "timezonecode"): XrmBase.BaseControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "General"): XrmBase.PageTab<Tabs.General>;
            get(name: "address"): XrmBase.PageTab<Tabs.Address>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_fax"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_telephone1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "emailaddress"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_telephone2"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_line1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_stateorprovince"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_line2"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_postalcode"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_line3"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_country"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_city"): XrmBase.StringAttribute;
        getAttribute(attributeName: "timezonecode"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "address1_fax"): XrmBase.StringControl;
        getControl(controlName: "address1_telephone1"): XrmBase.StringControl;
        getControl(controlName: "emailaddress"): XrmBase.StringControl;
        getControl(controlName: "address1_telephone2"): XrmBase.StringControl;
        getControl(controlName: "address1_line1"): XrmBase.StringControl;
        getControl(controlName: "address1_stateorprovince"): XrmBase.StringControl;
        getControl(controlName: "address1_line2"): XrmBase.StringControl;
        getControl(controlName: "address1_postalcode"): XrmBase.StringControl;
        getControl(controlName: "address1_line3"): XrmBase.StringControl;
        getControl(controlName: "address1_country"): XrmBase.StringControl;
        getControl(controlName: "address1_city"): XrmBase.StringControl;
        getControl(controlName: "timezonecode"): XrmBase.BaseControl;
        getControl(controlName: string): undefined;
    }
}
