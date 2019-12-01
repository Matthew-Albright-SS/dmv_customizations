declare namespace Form.msdyn_projectparameter.Main {
    namespace Information {
        namespace Tabs {
            interface _4c87da2daa4a4eae972eeac9dbc05c4f extends XrmBase.SectionCollectionBase {
                get(name: "{2495cb91-9d0e-4216-806c-d7287b3b2d42}"): XrmBase.PageSection;
                get(name: "{4c87da2d-aa4a-4eae-972e-eac9dbc05c4f}_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface PriceListTab extends XrmBase.SectionCollectionBase {
                get(name: "PriceListSection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface AmountBasedPricingDimensionTab extends XrmBase.SectionCollectionBase {
                get(name: "AmountBasedPricingDimensionSection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface MarkupBasedPricingDimensionTab extends XrmBase.SectionCollectionBase {
                get(name: "MarkupBasedPricingDimensionSection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "createdon"): XrmBase.DateAttribute;
            get(name: "msdyn_defaultorganizationalunit"): XrmBase.LookupAttribute<"msdyn_organizationalunit">;
            get(name: "msdyn_defaultworktemplate"): XrmBase.LookupAttribute<"msdyn_workhourtemplate">;
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_invoicefrequency"): XrmBase.LookupAttribute<"msdyn_invoicefrequency">;
            get(name: "msdyn_pricelistdefaultingiscurrencyagnostic"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_projectmanagerrole"): XrmBase.LookupAttribute<"bookableresourcecategory">;
            get(name: "msdyn_resourceallocationmode"): XrmBase.OptionSetAttribute<msdyn_projectparameter_msdyn_resourceallocationmode>;
            get(name: "msdyn_teammemberrole"): XrmBase.LookupAttribute<"bookableresourcecategory">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "AmountBasedPricingDimensionGrid"): XrmBase.SubGridControl<"msdyn_dimension">;
            get(name: "createdon"): XrmBase.DateControl;
            get(name: "MarkupBasedPricingDimensionGrid"): XrmBase.SubGridControl<"msdyn_dimension">;
            get(name: "msdyn_defaultorganizationalunit"): XrmBase.LookupControl<"msdyn_organizationalunit">;
            get(name: "msdyn_defaultworktemplate"): XrmBase.LookupControl<"msdyn_workhourtemplate">;
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_invoicefrequency"): XrmBase.LookupControl<"msdyn_invoicefrequency">;
            get(name: "msdyn_pricelistdefaultingiscurrencyagnostic"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_projectmanagerrole"): XrmBase.LookupControl<"bookableresourcecategory">;
            get(name: "msdyn_resourceallocationmode"): XrmBase.OptionSetControl<msdyn_projectparameter_msdyn_resourceallocationmode>;
            get(name: "msdyn_teammemberrole"): XrmBase.LookupControl<"bookableresourcecategory">;
            get(name: "PriceListGrid"): XrmBase.SubGridControl<"msdyn_projectparameterpricelist">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{4c87da2d-aa4a-4eae-972e-eac9dbc05c4f}"): XrmBase.PageTab<Tabs._4c87da2daa4a4eae972eeac9dbc05c4f>;
            get(name: "PriceListTab"): XrmBase.PageTab<Tabs.PriceListTab>;
            get(name: "AmountBasedPricingDimensionTab"): XrmBase.PageTab<Tabs.AmountBasedPricingDimensionTab>;
            get(name: "MarkupBasedPricingDimensionTab"): XrmBase.PageTab<Tabs.MarkupBasedPricingDimensionTab>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_defaultorganizationalunit"): XrmBase.LookupAttribute<"msdyn_organizationalunit">;
        getAttribute(attributeName: "msdyn_invoicefrequency"): XrmBase.LookupAttribute<"msdyn_invoicefrequency">;
        getAttribute(attributeName: "msdyn_projectmanagerrole"): XrmBase.LookupAttribute<"bookableresourcecategory">;
        getAttribute(attributeName: "msdyn_teammemberrole"): XrmBase.LookupAttribute<"bookableresourcecategory">;
        getAttribute(attributeName: "msdyn_pricelistdefaultingiscurrencyagnostic"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "createdon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_defaultworktemplate"): XrmBase.LookupAttribute<"msdyn_workhourtemplate">;
        getAttribute(attributeName: "msdyn_resourceallocationmode"): XrmBase.OptionSetAttribute<msdyn_projectparameter_msdyn_resourceallocationmode>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "msdyn_defaultorganizationalunit"): XrmBase.LookupControl<"msdyn_organizationalunit">;
        getControl(controlName: "msdyn_invoicefrequency"): XrmBase.LookupControl<"msdyn_invoicefrequency">;
        getControl(controlName: "msdyn_projectmanagerrole"): XrmBase.LookupControl<"bookableresourcecategory">;
        getControl(controlName: "msdyn_teammemberrole"): XrmBase.LookupControl<"bookableresourcecategory">;
        getControl(controlName: "msdyn_pricelistdefaultingiscurrencyagnostic"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "createdon"): XrmBase.DateControl;
        getControl(controlName: "msdyn_defaultworktemplate"): XrmBase.LookupControl<"msdyn_workhourtemplate">;
        getControl(controlName: "msdyn_resourceallocationmode"): XrmBase.OptionSetControl<msdyn_projectparameter_msdyn_resourceallocationmode>;
        getControl(controlName: "PriceListGrid"): XrmBase.SubGridControl<"msdyn_projectparameterpricelist">;
        getControl(controlName: "AmountBasedPricingDimensionGrid"): XrmBase.SubGridControl<"msdyn_dimension">;
        getControl(controlName: "MarkupBasedPricingDimensionGrid"): XrmBase.SubGridControl<"msdyn_dimension">;
        getControl(controlName: string): undefined;
    }
}
