declare namespace Form.msdyn_orderlinetransactionclassification.Main {
    namespace Information {
        namespace Tabs {
            interface _9e13d6c0876943218abc80894f326d07 extends XrmBase.SectionCollectionBase {
                get(name: "{9e13d6c0-8769-4321-8abc-80894f326d07}_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface ResourceCategoriesTab extends XrmBase.SectionCollectionBase {
                get(name: "ResourceCategoriesSection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface TransactionCategoriesTab extends XrmBase.SectionCollectionBase {
                get(name: "TransactionCategoriesSection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_billingtype"): XrmBase.OptionSetAttribute<msdyn_billingtype>;
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_include"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_transactionclassification"): XrmBase.OptionSetAttribute<msdyn_transactionclassification>;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_billingtype"): XrmBase.OptionSetControl<msdyn_billingtype>;
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_include"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_transactionclassification"): XrmBase.OptionSetControl<msdyn_transactionclassification>;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "ResourceCategoriesGrid"): XrmBase.SubGridControl<"msdyn_orderlineresourcecategory">;
            get(name: "TransactionCategoriesGrid"): XrmBase.SubGridControl<"msdyn_orderlinetransactioncategory">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{9e13d6c0-8769-4321-8abc-80894f326d07}"): XrmBase.PageTab<Tabs._9e13d6c0876943218abc80894f326d07>;
            get(name: "ResourceCategoriesTab"): XrmBase.PageTab<Tabs.ResourceCategoriesTab>;
            get(name: "TransactionCategoriesTab"): XrmBase.PageTab<Tabs.TransactionCategoriesTab>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_transactionclassification"): XrmBase.OptionSetAttribute<msdyn_transactionclassification>;
        getAttribute(attributeName: "msdyn_include"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_billingtype"): XrmBase.OptionSetAttribute<msdyn_billingtype>;
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_transactionclassification"): XrmBase.OptionSetControl<msdyn_transactionclassification>;
        getControl(controlName: "msdyn_include"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_billingtype"): XrmBase.OptionSetControl<msdyn_billingtype>;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "ResourceCategoriesGrid"): XrmBase.SubGridControl<"msdyn_orderlineresourcecategory">;
        getControl(controlName: "TransactionCategoriesGrid"): XrmBase.SubGridControl<"msdyn_orderlinetransactioncategory">;
        getControl(controlName: string): undefined;
    }
}
