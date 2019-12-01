declare namespace Form.opportunity.Main {
    namespace Opportunity {
        namespace Tabs {
            interface Summary extends XrmBase.SectionCollectionBase {
                get(name: "opportunity_information"): XrmBase.PageSection;
                get(name: "Opportunity_details"): XrmBase.PageSection;
                get(name: "Notes_pane"): XrmBase.PageSection;
                get(name: "Summary_section_6"): XrmBase.PageSection;
                get(name: "Social_pane"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface ProductLineItems extends XrmBase.SectionCollectionBase {
                get(name: "opportunityproducts"): XrmBase.PageSection;
                get(name: "DynamicProperties"): XrmBase.PageSection;
                get(name: "suggestionsection"): XrmBase.PageSection;
                get(name: "totals"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface QUOTES extends XrmBase.SectionCollectionBase {
                get(name: "opportunityquotes"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface FieldService extends XrmBase.SectionCollectionBase {
                get(name: "tab_4_section_1"): XrmBase.PageSection;
                get(name: "tab_4_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "budgetamount"): XrmBase.NumberAttribute;
            get(name: "currentsituation"): XrmBase.StringAttribute;
            get(name: "customerneed"): XrmBase.StringAttribute;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "discountamount"): XrmBase.NumberAttribute;
            get(name: "discountpercentage"): XrmBase.NumberAttribute;
            get(name: "freightamount"): XrmBase.NumberAttribute;
            get(name: "isrevenuesystemcalculated"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_forecastcategory"): XrmBase.OptionSetAttribute<msdyn_opportunity_msdyn_forecastcategory>;
            get(name: "msdyn_ordertype"): XrmBase.OptionSetAttribute<msdyn_opportunity_msdyn_ordertype>;
            get(name: "msdyn_workordertype"): XrmBase.LookupAttribute<"msdyn_workordertype">;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "parentaccountid"): XrmBase.LookupAttribute<"account">;
            get(name: "parentcontactid"): XrmBase.LookupAttribute<"contact">;
            get(name: "pricelevelid"): XrmBase.LookupAttribute<"pricelevel">;
            get(name: "proposedsolution"): XrmBase.StringAttribute;
            get(name: "purchaseprocess"): XrmBase.OptionSetAttribute<purchaseprocess>;
            get(name: "purchasetimeframe"): XrmBase.OptionSetAttribute<purchasetimeframe>;
            get(name: "totalamount"): XrmBase.NumberAttribute;
            get(name: "totalamountlessfreight"): XrmBase.NumberAttribute;
            get(name: "totallineitemamount"): XrmBase.NumberAttribute;
            get(name: "totaltax"): XrmBase.NumberAttribute;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "ActionCards"): XrmBase.BaseControl;
            get(name: "budgetamount"): XrmBase.NumberControl;
            get(name: "Competitors"): XrmBase.SubGridControl<"competitor">;
            get(name: "currentsituation"): XrmBase.StringControl;
            get(name: "customerneed"): XrmBase.StringControl;
            get(name: "description"): XrmBase.StringControl;
            get(name: "discountamount"): XrmBase.NumberControl;
            get(name: "discountpercentage"): XrmBase.NumberControl;
            get(name: "DynamicPropertiesList_LinkControl"): XrmBase.BaseControl;
            get(name: "freightamount"): XrmBase.NumberControl;
            get(name: "isrevenuesystemcalculated"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_forecastcategory"): XrmBase.OptionSetControl<msdyn_opportunity_msdyn_forecastcategory>;
            get(name: "msdyn_ordertype"): XrmBase.OptionSetControl<msdyn_opportunity_msdyn_ordertype>;
            get(name: "msdyn_workordertype"): XrmBase.LookupControl<"msdyn_workordertype">;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "opportunityproductsGrid"): XrmBase.SubGridControl<"opportunityproduct">;
            get(name: "parentaccountid"): XrmBase.LookupControl<"account">;
            get(name: "parentcontactid"): XrmBase.LookupControl<"contact">;
            get(name: "pricelevelid"): XrmBase.LookupControl<"pricelevel">;
            get(name: "ProductSuggestions_LinkControl"): XrmBase.BaseControl;
            get(name: "proposedsolution"): XrmBase.StringControl;
            get(name: "purchaseprocess"): XrmBase.OptionSetControl<purchaseprocess>;
            get(name: "purchasetimeframe"): XrmBase.OptionSetControl<purchasetimeframe>;
            get(name: "Pursuit_Team"): XrmBase.SubGridControl<"connection">;
            get(name: "quote"): XrmBase.SubGridControl<"quote">;
            get(name: "Stakeholders"): XrmBase.SubGridControl<"connection">;
            get(name: "totalamount"): XrmBase.NumberControl;
            get(name: "totalamountlessfreight"): XrmBase.NumberControl;
            get(name: "totallineitemamount"): XrmBase.NumberControl;
            get(name: "totaltax"): XrmBase.NumberControl;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "Summary"): XrmBase.PageTab<Tabs.Summary>;
            get(name: "Product_Line_Items"): XrmBase.PageTab<Tabs.ProductLineItems>;
            get(name: "QUOTES"): XrmBase.PageTab<Tabs.QUOTES>;
            get(name: "FieldService"): XrmBase.PageTab<Tabs.FieldService>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Opportunity extends XrmBase.PageBase<Opportunity.Attributes, Opportunity.Tabs, Opportunity.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "parentcontactid"): XrmBase.LookupAttribute<"contact">;
        getAttribute(attributeName: "parentaccountid"): XrmBase.LookupAttribute<"account">;
        getAttribute(attributeName: "purchasetimeframe"): XrmBase.OptionSetAttribute<purchasetimeframe>;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "budgetamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "purchaseprocess"): XrmBase.OptionSetAttribute<purchaseprocess>;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_forecastcategory"): XrmBase.OptionSetAttribute<msdyn_opportunity_msdyn_forecastcategory>;
        getAttribute(attributeName: "msdyn_ordertype"): XrmBase.OptionSetAttribute<msdyn_opportunity_msdyn_ordertype>;
        getAttribute(attributeName: "currentsituation"): XrmBase.StringAttribute;
        getAttribute(attributeName: "customerneed"): XrmBase.StringAttribute;
        getAttribute(attributeName: "proposedsolution"): XrmBase.StringAttribute;
        getAttribute(attributeName: "pricelevelid"): XrmBase.LookupAttribute<"pricelevel">;
        getAttribute(attributeName: "isrevenuesystemcalculated"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "totallineitemamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "discountpercentage"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "discountamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "totalamountlessfreight"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "freightamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "totaltax"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "totalamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_workordertype"): XrmBase.LookupAttribute<"msdyn_workordertype">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "parentcontactid"): XrmBase.LookupControl<"contact">;
        getControl(controlName: "parentaccountid"): XrmBase.LookupControl<"account">;
        getControl(controlName: "purchasetimeframe"): XrmBase.OptionSetControl<purchasetimeframe>;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "budgetamount"): XrmBase.NumberControl;
        getControl(controlName: "purchaseprocess"): XrmBase.OptionSetControl<purchaseprocess>;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "msdyn_forecastcategory"): XrmBase.OptionSetControl<msdyn_opportunity_msdyn_forecastcategory>;
        getControl(controlName: "msdyn_ordertype"): XrmBase.OptionSetControl<msdyn_opportunity_msdyn_ordertype>;
        getControl(controlName: "currentsituation"): XrmBase.StringControl;
        getControl(controlName: "customerneed"): XrmBase.StringControl;
        getControl(controlName: "proposedsolution"): XrmBase.StringControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "ActionCards"): XrmBase.BaseControl;
        getControl(controlName: "Stakeholders"): XrmBase.SubGridControl<"connection">;
        getControl(controlName: "Pursuit_Team"): XrmBase.SubGridControl<"connection">;
        getControl(controlName: "Competitors"): XrmBase.SubGridControl<"competitor">;
        getControl(controlName: "pricelevelid"): XrmBase.LookupControl<"pricelevel">;
        getControl(controlName: "isrevenuesystemcalculated"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "opportunityproductsGrid"): XrmBase.SubGridControl<"opportunityproduct">;
        getControl(controlName: "DynamicPropertiesList_LinkControl"): XrmBase.BaseControl;
        getControl(controlName: "ProductSuggestions_LinkControl"): XrmBase.BaseControl;
        getControl(controlName: "totallineitemamount"): XrmBase.NumberControl;
        getControl(controlName: "discountpercentage"): XrmBase.NumberControl;
        getControl(controlName: "discountamount"): XrmBase.NumberControl;
        getControl(controlName: "totalamountlessfreight"): XrmBase.NumberControl;
        getControl(controlName: "freightamount"): XrmBase.NumberControl;
        getControl(controlName: "totaltax"): XrmBase.NumberControl;
        getControl(controlName: "totalamount"): XrmBase.NumberControl;
        getControl(controlName: "quote"): XrmBase.SubGridControl<"quote">;
        getControl(controlName: "msdyn_workordertype"): XrmBase.LookupControl<"msdyn_workordertype">;
        getControl(controlName: string): undefined;
    }
}
