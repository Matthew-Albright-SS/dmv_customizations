declare namespace Form.publisher.Main {
    namespace Information {
        namespace Tabs {
            interface _70098AD5495611DD982E00188B01DCE6 extends XrmBase.SectionCollectionBase {
                get(name: "{70098AD6-4956-11DD-982E-00188B01DCE6}"): XrmBase.PageSection;
                get(name: "description"): XrmBase.PageSection;
                get(name: "{eaf2edb4-7c5e-dd11-940f-00155d8ac303}"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface E1F7A9C9A0E64C8BACBDC6610FBD2343 extends XrmBase.SectionCollectionBase {
                get(name: "{CBF04024-5749-444C-BC51-CFAF839688BF}"): XrmBase.PageSection;
                get(name: "{6FE75F79-0CA8-4DBE-8C7B-6E68C17DE013}"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface SolutionsMarketplace extends XrmBase.SectionCollectionBase {
                get(name: "marketplacesection"): XrmBase.PageSection;
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
            get(name: "address1_postalcode"): XrmBase.StringAttribute;
            get(name: "address1_stateorprovince"): XrmBase.StringAttribute;
            get(name: "address1_telephone1"): XrmBase.StringAttribute;
            get(name: "customizationoptionvalueprefix"): XrmBase.NumberAttribute;
            get(name: "customizationprefix"): XrmBase.StringAttribute;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "emailaddress"): XrmBase.StringAttribute;
            get(name: "friendlyname"): XrmBase.StringAttribute;
            get(name: "supportingwebsiteurl"): XrmBase.StringAttribute;
            get(name: "uniquename"): XrmBase.StringAttribute;
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
            get(name: "address1_postalcode"): XrmBase.StringControl;
            get(name: "address1_stateorprovince"): XrmBase.StringControl;
            get(name: "address1_telephone1"): XrmBase.StringControl;
            get(name: "customizationoptionvalueprefix"): XrmBase.NumberControl;
            get(name: "customizationprefix"): XrmBase.StringControl;
            get(name: "description"): XrmBase.StringControl;
            get(name: "emailaddress"): XrmBase.StringControl;
            get(name: "friendlyname"): XrmBase.StringControl;
            get(name: "IFRAME_SolutionsMarketplace"): XrmBase.IFrameControl;
            get(name: "preview_prefix"): XrmBase.StringControl;
            get(name: "supportingwebsiteurl"): XrmBase.StringControl;
            get(name: "uniquename"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{70098AD5-4956-11DD-982E-00188B01DCE6}"): XrmBase.PageTab<Tabs._70098AD5495611DD982E00188B01DCE6>;
            get(name: "{E1F7A9C9-A0E6-4C8B-ACBD-C6610FBD2343}"): XrmBase.PageTab<Tabs.E1F7A9C9A0E64C8BACBDC6610FBD2343>;
            get(name: "solutions marketplace"): XrmBase.PageTab<Tabs.SolutionsMarketplace>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "friendlyname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "uniquename"): XrmBase.StringAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "customizationprefix"): XrmBase.StringAttribute;
        getAttribute(attributeName: "customizationoptionvalueprefix"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "address1_telephone1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "emailaddress"): XrmBase.StringAttribute;
        getAttribute(attributeName: "supportingwebsiteurl"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_line1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_postalcode"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_line2"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_country"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_city"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_stateorprovince"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "friendlyname"): XrmBase.StringControl;
        getControl(controlName: "uniquename"): XrmBase.StringControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "customizationprefix"): XrmBase.StringControl;
        getControl(controlName: "customizationoptionvalueprefix"): XrmBase.NumberControl;
        getControl(controlName: "preview_prefix"): XrmBase.StringControl;
        getControl(controlName: "address1_telephone1"): XrmBase.StringControl;
        getControl(controlName: "emailaddress"): XrmBase.StringControl;
        getControl(controlName: "supportingwebsiteurl"): XrmBase.StringControl;
        getControl(controlName: "address1_line1"): XrmBase.StringControl;
        getControl(controlName: "address1_postalcode"): XrmBase.StringControl;
        getControl(controlName: "address1_line2"): XrmBase.StringControl;
        getControl(controlName: "address1_country"): XrmBase.StringControl;
        getControl(controlName: "address1_city"): XrmBase.StringControl;
        getControl(controlName: "address1_stateorprovince"): XrmBase.StringControl;
        getControl(controlName: "IFRAME_SolutionsMarketplace"): XrmBase.IFrameControl;
        getControl(controlName: string): undefined;
    }
}
