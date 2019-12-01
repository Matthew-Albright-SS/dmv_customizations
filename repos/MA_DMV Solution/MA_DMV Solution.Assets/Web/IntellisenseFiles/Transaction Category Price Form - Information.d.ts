declare namespace Form.msdyn_transactioncategorypricelevel.Main {
    namespace Information {
        namespace Tabs {
            interface _3141857404394aac9b66828c997660dc extends XrmBase.SectionCollectionBase {
                get(name: "{44cb3d24-2528-4d5e-b5c1-87b87831eed6}"): XrmBase.PageSection;
                get(name: "PricingSection"): XrmBase.PageSection;
                get(name: "{31418574-0439-4aac-9b66-828c997660dc}_section_4"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_percent"): XrmBase.NumberAttribute;
            get(name: "msdyn_price"): XrmBase.NumberAttribute;
            get(name: "msdyn_pricecalculation"): XrmBase.OptionSetAttribute<msdyn_pricecalculation>;
            get(name: "msdyn_pricelist"): XrmBase.LookupAttribute<"pricelevel">;
            get(name: "msdyn_transactioncategory"): XrmBase.LookupAttribute<"msdyn_transactioncategory">;
            get(name: "msdyn_unit"): XrmBase.LookupAttribute<"uom">;
            get(name: "msdyn_unitschedule"): XrmBase.LookupAttribute<"uomschedule">;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_percent"): XrmBase.NumberControl;
            get(name: "msdyn_price"): XrmBase.NumberControl;
            get(name: "msdyn_pricecalculation"): XrmBase.OptionSetControl<msdyn_pricecalculation>;
            get(name: "msdyn_pricelist"): XrmBase.LookupControl<"pricelevel">;
            get(name: "msdyn_transactioncategory"): XrmBase.LookupControl<"msdyn_transactioncategory">;
            get(name: "msdyn_unit"): XrmBase.LookupControl<"uom">;
            get(name: "msdyn_unitschedule"): XrmBase.LookupControl<"uomschedule">;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{31418574-0439-4aac-9b66-828c997660dc}"): XrmBase.PageTab<Tabs._3141857404394aac9b66828c997660dc>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_pricelist"): XrmBase.LookupAttribute<"pricelevel">;
        getAttribute(attributeName: "msdyn_transactioncategory"): XrmBase.LookupAttribute<"msdyn_transactioncategory">;
        getAttribute(attributeName: "msdyn_unitschedule"): XrmBase.LookupAttribute<"uomschedule">;
        getAttribute(attributeName: "msdyn_unit"): XrmBase.LookupAttribute<"uom">;
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_pricecalculation"): XrmBase.OptionSetAttribute<msdyn_pricecalculation>;
        getAttribute(attributeName: "msdyn_percent"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_price"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_pricelist"): XrmBase.LookupControl<"pricelevel">;
        getControl(controlName: "msdyn_transactioncategory"): XrmBase.LookupControl<"msdyn_transactioncategory">;
        getControl(controlName: "msdyn_unitschedule"): XrmBase.LookupControl<"uomschedule">;
        getControl(controlName: "msdyn_unit"): XrmBase.LookupControl<"uom">;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "msdyn_pricecalculation"): XrmBase.OptionSetControl<msdyn_pricecalculation>;
        getControl(controlName: "msdyn_percent"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_price"): XrmBase.NumberControl;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: string): undefined;
    }
}
