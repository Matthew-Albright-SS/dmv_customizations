declare namespace Form.msdyn_expensecategory.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_expensecategoryuid"): XrmBase.LookupAttribute<"msdyn_transactioncategory">;
            get(name: "msdyn_expensetype"): XrmBase.OptionSetAttribute<msdyn_expensetypes>;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_receiptrequired"): XrmBase.OptionSetAttribute<msdyn_expensecategorybehavior>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_expensecategoryuid"): XrmBase.LookupControl<"msdyn_transactioncategory">;
            get(name: "msdyn_expensetype"): XrmBase.OptionSetControl<msdyn_expensetypes>;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_receiptrequired"): XrmBase.OptionSetControl<msdyn_expensecategorybehavior>;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_expensetype"): XrmBase.OptionSetAttribute<msdyn_expensetypes>;
        getAttribute(attributeName: "msdyn_expensecategoryuid"): XrmBase.LookupAttribute<"msdyn_transactioncategory">;
        getAttribute(attributeName: "msdyn_receiptrequired"): XrmBase.OptionSetAttribute<msdyn_expensecategorybehavior>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_expensetype"): XrmBase.OptionSetControl<msdyn_expensetypes>;
        getControl(controlName: "msdyn_expensecategoryuid"): XrmBase.LookupControl<"msdyn_transactioncategory">;
        getControl(controlName: "msdyn_receiptrequired"): XrmBase.OptionSetControl<msdyn_expensecategorybehavior>;
        getControl(controlName: string): undefined;
    }
}
