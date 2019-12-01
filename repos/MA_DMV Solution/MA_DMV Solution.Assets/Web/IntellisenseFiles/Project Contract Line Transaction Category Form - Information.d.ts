declare namespace Form.msdyn_orderlinetransactioncategory.Main {
    namespace Information {
        namespace Tabs {
            interface _3078378016cd41338c752d96cde84194 extends XrmBase.SectionCollectionBase {
                get(name: "{30783780-16cd-4133-8c75-2d96cde84194}_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_billingtype"): XrmBase.OptionSetAttribute<msdyn_billingtype>;
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_transactioncategory"): XrmBase.LookupAttribute<"msdyn_transactioncategory">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_billingtype"): XrmBase.OptionSetControl<msdyn_billingtype>;
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_transactioncategory"): XrmBase.LookupControl<"msdyn_transactioncategory">;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{30783780-16cd-4133-8c75-2d96cde84194}"): XrmBase.PageTab<Tabs._3078378016cd41338c752d96cde84194>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_transactioncategory"): XrmBase.LookupAttribute<"msdyn_transactioncategory">;
        getAttribute(attributeName: "msdyn_billingtype"): XrmBase.OptionSetAttribute<msdyn_billingtype>;
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_transactioncategory"): XrmBase.LookupControl<"msdyn_transactioncategory">;
        getControl(controlName: "msdyn_billingtype"): XrmBase.OptionSetControl<msdyn_billingtype>;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
