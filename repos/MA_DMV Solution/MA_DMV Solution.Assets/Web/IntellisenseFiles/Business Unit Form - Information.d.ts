declare namespace Form.businessunit.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "section 1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Addresses extends XrmBase.SectionCollectionBase {
                get(name: "bill to address"): XrmBase.PageSection;
                get(name: "ship to address"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "address1_city"): XrmBase.StringAttribute;
            get(name: "address1_country"): XrmBase.StringAttribute;
            get(name: "address1_line1"): XrmBase.StringAttribute;
            get(name: "address1_line2"): XrmBase.StringAttribute;
            get(name: "address1_line3"): XrmBase.StringAttribute;
            get(name: "address1_postalcode"): XrmBase.StringAttribute;
            get(name: "address1_stateorprovince"): XrmBase.StringAttribute;
            get(name: "address1_telephone1"): XrmBase.StringAttribute;
            get(name: "address1_telephone2"): XrmBase.StringAttribute;
            get(name: "address1_telephone3"): XrmBase.StringAttribute;
            get(name: "address2_city"): XrmBase.StringAttribute;
            get(name: "address2_country"): XrmBase.StringAttribute;
            get(name: "address2_line1"): XrmBase.StringAttribute;
            get(name: "address2_line2"): XrmBase.StringAttribute;
            get(name: "address2_line3"): XrmBase.StringAttribute;
            get(name: "address2_postalcode"): XrmBase.StringAttribute;
            get(name: "address2_stateorprovince"): XrmBase.StringAttribute;
            get(name: "divisionname"): XrmBase.StringAttribute;
            get(name: "emailaddress"): XrmBase.StringAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "parentbusinessunitid"): XrmBase.LookupAttribute<"businessunit">;
            get(name: "websiteurl"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "address1_city"): XrmBase.StringControl;
            get(name: "address1_country"): XrmBase.StringControl;
            get(name: "address1_line1"): XrmBase.StringControl;
            get(name: "address1_line2"): XrmBase.StringControl;
            get(name: "address1_line3"): XrmBase.StringControl;
            get(name: "address1_postalcode"): XrmBase.StringControl;
            get(name: "address1_stateorprovince"): XrmBase.StringControl;
            get(name: "address1_telephone1"): XrmBase.StringControl;
            get(name: "address1_telephone2"): XrmBase.StringControl;
            get(name: "address1_telephone3"): XrmBase.StringControl;
            get(name: "address2_city"): XrmBase.StringControl;
            get(name: "address2_country"): XrmBase.StringControl;
            get(name: "address2_line1"): XrmBase.StringControl;
            get(name: "address2_line2"): XrmBase.StringControl;
            get(name: "address2_line3"): XrmBase.StringControl;
            get(name: "address2_postalcode"): XrmBase.StringControl;
            get(name: "address2_stateorprovince"): XrmBase.StringControl;
            get(name: "divisionname"): XrmBase.StringControl;
            get(name: "emailaddress"): XrmBase.StringControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "parentbusinessunitid"): XrmBase.LookupControl<"businessunit">;
            get(name: "websiteurl"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "general"): XrmBase.PageTab<Tabs.General>;
            get(name: "addresses"): XrmBase.PageTab<Tabs.Addresses>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_telephone1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "divisionname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_telephone2"): XrmBase.StringAttribute;
        getAttribute(attributeName: "parentbusinessunitid"): XrmBase.LookupAttribute<"businessunit">;
        getAttribute(attributeName: "address1_telephone3"): XrmBase.StringAttribute;
        getAttribute(attributeName: "websiteurl"): XrmBase.StringAttribute;
        getAttribute(attributeName: "emailaddress"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_line1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_stateorprovince"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_line2"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_postalcode"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_line3"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_country"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_city"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address2_line1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address2_stateorprovince"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address2_line2"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address2_postalcode"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address2_line3"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address2_country"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address2_city"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "address1_telephone1"): XrmBase.StringControl;
        getControl(controlName: "divisionname"): XrmBase.StringControl;
        getControl(controlName: "address1_telephone2"): XrmBase.StringControl;
        getControl(controlName: "parentbusinessunitid"): XrmBase.LookupControl<"businessunit">;
        getControl(controlName: "address1_telephone3"): XrmBase.StringControl;
        getControl(controlName: "websiteurl"): XrmBase.StringControl;
        getControl(controlName: "emailaddress"): XrmBase.StringControl;
        getControl(controlName: "address1_line1"): XrmBase.StringControl;
        getControl(controlName: "address1_stateorprovince"): XrmBase.StringControl;
        getControl(controlName: "address1_line2"): XrmBase.StringControl;
        getControl(controlName: "address1_postalcode"): XrmBase.StringControl;
        getControl(controlName: "address1_line3"): XrmBase.StringControl;
        getControl(controlName: "address1_country"): XrmBase.StringControl;
        getControl(controlName: "address1_city"): XrmBase.StringControl;
        getControl(controlName: "address2_line1"): XrmBase.StringControl;
        getControl(controlName: "address2_stateorprovince"): XrmBase.StringControl;
        getControl(controlName: "address2_line2"): XrmBase.StringControl;
        getControl(controlName: "address2_postalcode"): XrmBase.StringControl;
        getControl(controlName: "address2_line3"): XrmBase.StringControl;
        getControl(controlName: "address2_country"): XrmBase.StringControl;
        getControl(controlName: "address2_city"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
