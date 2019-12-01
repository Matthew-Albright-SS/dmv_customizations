declare namespace Form.pricelevel.Main {
    namespace PriceLevel {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "price level information"): XrmBase.PageSection;
                get(name: "Description"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface ResourceCategoryTab extends XrmBase.SectionCollectionBase {
                get(name: "ResourceCategorySection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface ResourceCategoryMarkupTab extends XrmBase.SectionCollectionBase {
                get(name: "ResourceCategoryMarkupSection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface CategoryTab extends XrmBase.SectionCollectionBase {
                get(name: "CategorySection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface PriceListItems extends XrmBase.SectionCollectionBase {
                get(name: "pricelistbyproduct"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface TERRITORYRELATIONSHIPTAB extends XrmBase.SectionCollectionBase {
                get(name: "Territories"): XrmBase.PageSection;
                get(name: "service settings"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "begindate"): XrmBase.DateAttribute;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "enddate"): XrmBase.DateAttribute;
            get(name: "msdyn_breakhoursbillable"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_copiedfrompricelevel"): XrmBase.LookupAttribute<"pricelevel">;
            get(name: "msdyn_module"): XrmBase.OptionSetAttribute<msdyn_module>;
            get(name: "msdyn_timeunit"): XrmBase.LookupAttribute<"uom">;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "begindate"): XrmBase.DateControl;
            get(name: "CategoryGrid"): XrmBase.SubGridControl<"msdyn_transactioncategorypricelevel">;
            get(name: "description"): XrmBase.StringControl;
            get(name: "enddate"): XrmBase.DateControl;
            get(name: "msdyn_breakhoursbillable"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_copiedfrompricelevel"): XrmBase.LookupControl<"pricelevel">;
            get(name: "msdyn_module"): XrmBase.OptionSetControl<msdyn_module>;
            get(name: "msdyn_timeunit"): XrmBase.LookupControl<"uom">;
            get(name: "name"): XrmBase.StringControl;
            get(name: "pricelistitemsgrid"): XrmBase.SubGridControl<"productpricelevel">;
            get(name: "RelatedTerritoriesGrid"): XrmBase.SubGridControl<"connection">;
            get(name: "ResourceCategoryGrid"): XrmBase.SubGridControl<"msdyn_resourcecategorypricelevel">;
            get(name: "ResourceCategoryMarkupGrid"): XrmBase.SubGridControl<"msdyn_resourcecategorymarkuppricelevel">;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "General"): XrmBase.PageTab<Tabs.General>;
            get(name: "ResourceCategoryTab"): XrmBase.PageTab<Tabs.ResourceCategoryTab>;
            get(name: "ResourceCategoryMarkupTab"): XrmBase.PageTab<Tabs.ResourceCategoryMarkupTab>;
            get(name: "CategoryTab"): XrmBase.PageTab<Tabs.CategoryTab>;
            get(name: "Price_List_Items"): XrmBase.PageTab<Tabs.PriceListItems>;
            get(name: "TERRITORYRELATIONSHIP_TAB"): XrmBase.PageTab<Tabs.TERRITORYRELATIONSHIPTAB>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface PriceLevel extends XrmBase.PageBase<PriceLevel.Attributes, PriceLevel.Tabs, PriceLevel.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_module"): XrmBase.OptionSetAttribute<msdyn_module>;
        getAttribute(attributeName: "begindate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "enddate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "msdyn_timeunit"): XrmBase.LookupAttribute<"uom">;
        getAttribute(attributeName: "msdyn_copiedfrompricelevel"): XrmBase.LookupAttribute<"pricelevel">;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_breakhoursbillable"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_module"): XrmBase.OptionSetControl<msdyn_module>;
        getControl(controlName: "begindate"): XrmBase.DateControl;
        getControl(controlName: "enddate"): XrmBase.DateControl;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "msdyn_timeunit"): XrmBase.LookupControl<"uom">;
        getControl(controlName: "msdyn_copiedfrompricelevel"): XrmBase.LookupControl<"pricelevel">;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "ResourceCategoryGrid"): XrmBase.SubGridControl<"msdyn_resourcecategorypricelevel">;
        getControl(controlName: "ResourceCategoryMarkupGrid"): XrmBase.SubGridControl<"msdyn_resourcecategorymarkuppricelevel">;
        getControl(controlName: "CategoryGrid"): XrmBase.SubGridControl<"msdyn_transactioncategorypricelevel">;
        getControl(controlName: "pricelistitemsgrid"): XrmBase.SubGridControl<"productpricelevel">;
        getControl(controlName: "RelatedTerritoriesGrid"): XrmBase.SubGridControl<"connection">;
        getControl(controlName: "msdyn_breakhoursbillable"): XrmBase.OptionSetControl<any>;
        getControl(controlName: string): undefined;
    }
}
