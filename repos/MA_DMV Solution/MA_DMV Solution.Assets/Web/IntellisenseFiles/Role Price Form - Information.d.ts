declare namespace Form.msdyn_resourcecategorypricelevel.Main {
    namespace Information {
        namespace Tabs {
            interface _49f076522e6f43faadf5909bea7a9d89 extends XrmBase.SectionCollectionBase {
                get(name: "PricingSection"): XrmBase.PageSection;
                get(name: "{49f07652-2e6f-43fa-adf5-909bea7a9d89}_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_organizationalunit"): XrmBase.LookupAttribute<"msdyn_organizationalunit">;
            get(name: "msdyn_price"): XrmBase.NumberAttribute;
            get(name: "msdyn_pricelist"): XrmBase.LookupAttribute<"pricelevel">;
            get(name: "msdyn_resourcecategory"): XrmBase.LookupAttribute<"bookableresourcecategory">;
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
            get(name: "msdyn_organizationalunit"): XrmBase.LookupControl<"msdyn_organizationalunit">;
            get(name: "msdyn_price"): XrmBase.NumberControl;
            get(name: "msdyn_pricelist"): XrmBase.LookupControl<"pricelevel">;
            get(name: "msdyn_resourcecategory"): XrmBase.LookupControl<"bookableresourcecategory">;
            get(name: "msdyn_unit"): XrmBase.LookupControl<"uom">;
            get(name: "msdyn_unitschedule"): XrmBase.LookupControl<"uomschedule">;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{49f07652-2e6f-43fa-adf5-909bea7a9d89}"): XrmBase.PageTab<Tabs._49f076522e6f43faadf5909bea7a9d89>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_pricelist"): XrmBase.LookupAttribute<"pricelevel">;
        getAttribute(attributeName: "msdyn_resourcecategory"): XrmBase.LookupAttribute<"bookableresourcecategory">;
        getAttribute(attributeName: "msdyn_organizationalunit"): XrmBase.LookupAttribute<"msdyn_organizationalunit">;
        getAttribute(attributeName: "msdyn_unitschedule"): XrmBase.LookupAttribute<"uomschedule">;
        getAttribute(attributeName: "msdyn_unit"): XrmBase.LookupAttribute<"uom">;
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_price"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_pricelist"): XrmBase.LookupControl<"pricelevel">;
        getControl(controlName: "msdyn_resourcecategory"): XrmBase.LookupControl<"bookableresourcecategory">;
        getControl(controlName: "msdyn_organizationalunit"): XrmBase.LookupControl<"msdyn_organizationalunit">;
        getControl(controlName: "msdyn_unitschedule"): XrmBase.LookupControl<"uomschedule">;
        getControl(controlName: "msdyn_unit"): XrmBase.LookupControl<"uom">;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "msdyn_price"): XrmBase.NumberControl;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: string): undefined;
    }
}
