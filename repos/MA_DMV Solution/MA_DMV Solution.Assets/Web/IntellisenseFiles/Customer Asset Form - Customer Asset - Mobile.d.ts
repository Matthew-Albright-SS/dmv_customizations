declare namespace Form.msdyn_customerasset.Main {
    namespace CustomerAssetMobile {
        namespace Tabs {
            interface Fstabsummary extends XrmBase.SectionCollectionBase {
                get(name: "fstab_summary_section_general"): XrmBase.PageSection;
                get(name: "fstab_summary_location"): XrmBase.PageSection;
                get(name: "fstab_summary_column_2_section_1"): XrmBase.PageSection;
                get(name: "fstab_summary_column_3_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Fstabsubgrids extends XrmBase.SectionCollectionBase {
                get(name: "fstab_sub_grids_section"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_account"): XrmBase.LookupAttribute<"account">;
            get(name: "msdyn_customerassetcategory"): XrmBase.LookupAttribute<"msdyn_customerassetcategory">;
            get(name: "msdyn_latitude"): XrmBase.NumberAttribute;
            get(name: "msdyn_longitude"): XrmBase.NumberAttribute;
            get(name: "msdyn_masterasset"): XrmBase.LookupAttribute<"msdyn_customerasset">;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_parentasset"): XrmBase.LookupAttribute<"msdyn_customerasset">;
            get(name: "msdyn_product"): XrmBase.LookupAttribute<"product">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "Asset_SubAsset"): XrmBase.SubGridControl<"msdyn_customerasset">;
            get(name: "msdyn_account"): XrmBase.LookupControl<"account">;
            get(name: "msdyn_customerassetcategory"): XrmBase.LookupControl<"msdyn_customerassetcategory">;
            get(name: "msdyn_latitude"): XrmBase.NumberControl;
            get(name: "msdyn_longitude"): XrmBase.NumberControl;
            get(name: "msdyn_masterasset"): XrmBase.LookupControl<"msdyn_customerasset">;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_parentasset"): XrmBase.LookupControl<"msdyn_customerasset">;
            get(name: "msdyn_product"): XrmBase.LookupControl<"product">;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "WORKORDERS"): XrmBase.SubGridControl<"msdyn_workorder">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "fstab_summary"): XrmBase.PageTab<Tabs.Fstabsummary>;
            get(name: "fstab_sub_grids"): XrmBase.PageTab<Tabs.Fstabsubgrids>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface CustomerAssetMobile extends XrmBase.PageBase<CustomerAssetMobile.Attributes, CustomerAssetMobile.Tabs, CustomerAssetMobile.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_customerassetcategory"): XrmBase.LookupAttribute<"msdyn_customerassetcategory">;
        getAttribute(attributeName: "msdyn_product"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "msdyn_account"): XrmBase.LookupAttribute<"account">;
        getAttribute(attributeName: "msdyn_parentasset"): XrmBase.LookupAttribute<"msdyn_customerasset">;
        getAttribute(attributeName: "msdyn_masterasset"): XrmBase.LookupAttribute<"msdyn_customerasset">;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_latitude"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_longitude"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_customerassetcategory"): XrmBase.LookupControl<"msdyn_customerassetcategory">;
        getControl(controlName: "msdyn_product"): XrmBase.LookupControl<"product">;
        getControl(controlName: "msdyn_account"): XrmBase.LookupControl<"account">;
        getControl(controlName: "msdyn_parentasset"): XrmBase.LookupControl<"msdyn_customerasset">;
        getControl(controlName: "msdyn_masterasset"): XrmBase.LookupControl<"msdyn_customerasset">;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_latitude"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_longitude"): XrmBase.NumberControl;
        getControl(controlName: "Asset_SubAsset"): XrmBase.SubGridControl<"msdyn_customerasset">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "WORKORDERS"): XrmBase.SubGridControl<"msdyn_workorder">;
        getControl(controlName: string): undefined;
    }
}
