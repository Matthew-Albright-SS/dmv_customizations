declare namespace Form.msdyn_quotebookingsetup.Main {
    namespace Information {
        namespace Tabs {
            interface _23ecc8510e7d4ce2848297afd671fd2f extends XrmBase.SectionCollectionBase {
                get(name: "{985f1b59-b0db-43c9-804c-ef1d9c6c6a74}"): XrmBase.PageSection;
                get(name: "IncidentsSection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface MarginTab extends XrmBase.SectionCollectionBase {
                get(name: "EstimatedRevenue"): XrmBase.PageSection;
                get(name: "{23ecc851-0e7d-4ce2-8482-97afd671fd2f}_section_4"): XrmBase.PageSection;
                get(name: "EstimatedMarginSection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface ProductsAndServicesTab extends XrmBase.SectionCollectionBase {
                get(name: "productsSection"): XrmBase.PageSection;
                get(name: "serviceSection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface ServiceTaskTab extends XrmBase.SectionCollectionBase {
                get(name: "tab_2_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_autogenerateworkorder"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_estimatedcost"): XrmBase.NumberAttribute;
            get(name: "msdyn_estimatedmargin"): XrmBase.NumberAttribute;
            get(name: "msdyn_estimatedmarginperwo"): XrmBase.NumberAttribute;
            get(name: "msdyn_estimatedproductcost"): XrmBase.NumberAttribute;
            get(name: "msdyn_estimatedproductrevenue"): XrmBase.NumberAttribute;
            get(name: "msdyn_estimatedrevenue"): XrmBase.NumberAttribute;
            get(name: "msdyn_estimatedrevenueperwo"): XrmBase.NumberAttribute;
            get(name: "msdyn_estimatedservicecost"): XrmBase.NumberAttribute;
            get(name: "msdyn_estimatedservicerevenue"): XrmBase.NumberAttribute;
            get(name: "msdyn_latitude"): XrmBase.NumberAttribute;
            get(name: "msdyn_longitude"): XrmBase.NumberAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_quote"): XrmBase.LookupAttribute<"quote">;
            get(name: "msdyn_quotedetailid"): XrmBase.StringAttribute;
            get(name: "msdyn_recurrencesettings"): XrmBase.StringAttribute;
            get(name: "msdyn_worklocation"): XrmBase.OptionSetAttribute<msdyn_worklocation>;
            get(name: "msdyn_workordertype"): XrmBase.LookupAttribute<"msdyn_workordertype">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "IncidentsGrid"): XrmBase.SubGridControl<"msdyn_quotebookingincident">;
            get(name: "msdyn_autogenerateworkorder"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_estimatedcost"): XrmBase.NumberControl;
            get(name: "msdyn_estimatedmargin"): XrmBase.NumberControl;
            get(name: "msdyn_estimatedmarginperwo"): XrmBase.NumberControl;
            get(name: "msdyn_estimatedproductcost"): XrmBase.NumberControl;
            get(name: "msdyn_estimatedproductrevenue"): XrmBase.NumberControl;
            get(name: "msdyn_estimatedrevenue"): XrmBase.NumberControl;
            get(name: "msdyn_estimatedrevenueperwo"): XrmBase.NumberControl;
            get(name: "msdyn_estimatedservicecost"): XrmBase.NumberControl;
            get(name: "msdyn_estimatedservicerevenue"): XrmBase.NumberControl;
            get(name: "msdyn_latitude"): XrmBase.NumberControl;
            get(name: "msdyn_longitude"): XrmBase.NumberControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_quote"): XrmBase.LookupControl<"quote">;
            get(name: "msdyn_quotedetailid"): XrmBase.StringControl;
            get(name: "msdyn_recurrencesettings"): XrmBase.StringControl;
            get(name: "msdyn_worklocation"): XrmBase.OptionSetControl<msdyn_worklocation>;
            get(name: "msdyn_workordertype"): XrmBase.LookupControl<"msdyn_workordertype">;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "productsGrid"): XrmBase.SubGridControl<"msdyn_quotebookingproduct">;
            get(name: "ServicesGrid"): XrmBase.SubGridControl<"msdyn_quotebookingservice">;
            get(name: "ServiceTasksGrid"): XrmBase.SubGridControl<"msdyn_quotebookingservicetask">;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{23ecc851-0e7d-4ce2-8482-97afd671fd2f}"): XrmBase.PageTab<Tabs._23ecc8510e7d4ce2848297afd671fd2f>;
            get(name: "MarginTab"): XrmBase.PageTab<Tabs.MarginTab>;
            get(name: "ProductsAndServicesTab"): XrmBase.PageTab<Tabs.ProductsAndServicesTab>;
            get(name: "ServiceTaskTab"): XrmBase.PageTab<Tabs.ServiceTaskTab>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_workordertype"): XrmBase.LookupAttribute<"msdyn_workordertype">;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_recurrencesettings"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_quotedetailid"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_worklocation"): XrmBase.OptionSetAttribute<msdyn_worklocation>;
        getAttribute(attributeName: "msdyn_latitude"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_longitude"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_quote"): XrmBase.LookupAttribute<"quote">;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "msdyn_autogenerateworkorder"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_estimatedproductrevenue"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_estimatedservicerevenue"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_estimatedrevenue"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_estimatedproductcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_estimatedservicecost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_estimatedcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_estimatedmargin"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_estimatedmarginperwo"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_estimatedrevenueperwo"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "msdyn_workordertype"): XrmBase.LookupControl<"msdyn_workordertype">;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_recurrencesettings"): XrmBase.StringControl;
        getControl(controlName: "msdyn_quotedetailid"): XrmBase.StringControl;
        getControl(controlName: "msdyn_worklocation"): XrmBase.OptionSetControl<msdyn_worklocation>;
        getControl(controlName: "msdyn_latitude"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_longitude"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_quote"): XrmBase.LookupControl<"quote">;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "msdyn_autogenerateworkorder"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "IncidentsGrid"): XrmBase.SubGridControl<"msdyn_quotebookingincident">;
        getControl(controlName: "msdyn_estimatedproductrevenue"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_estimatedservicerevenue"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_estimatedrevenue"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_estimatedproductcost"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_estimatedservicecost"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_estimatedcost"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_estimatedmargin"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_estimatedmarginperwo"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_estimatedrevenueperwo"): XrmBase.NumberControl;
        getControl(controlName: "productsGrid"): XrmBase.SubGridControl<"msdyn_quotebookingproduct">;
        getControl(controlName: "ServicesGrid"): XrmBase.SubGridControl<"msdyn_quotebookingservice">;
        getControl(controlName: "ServiceTasksGrid"): XrmBase.SubGridControl<"msdyn_quotebookingservicetask">;
        getControl(controlName: string): undefined;
    }
}
