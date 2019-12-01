declare namespace Form.msdyn_dimension.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_applicabletocost"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_applicabletopurchase"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_applicabletosales"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_costpriority"): XrmBase.NumberAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_purchasepriority"): XrmBase.NumberAttribute;
            get(name: "msdyn_salespriority"): XrmBase.NumberAttribute;
            get(name: "msdyn_type"): XrmBase.OptionSetAttribute<msdyn_pricingdimensiontype>;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_applicabletocost"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_applicabletopurchase"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_applicabletosales"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_costpriority"): XrmBase.NumberControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_purchasepriority"): XrmBase.NumberControl;
            get(name: "msdyn_salespriority"): XrmBase.NumberControl;
            get(name: "msdyn_type"): XrmBase.OptionSetControl<msdyn_pricingdimensiontype>;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
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
        getAttribute(attributeName: "msdyn_costpriority"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_purchasepriority"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_type"): XrmBase.OptionSetAttribute<msdyn_pricingdimensiontype>;
        getAttribute(attributeName: "msdyn_salespriority"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_applicabletocost"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_applicabletopurchase"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_applicabletosales"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_costpriority"): XrmBase.NumberControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_purchasepriority"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_type"): XrmBase.OptionSetControl<msdyn_pricingdimensiontype>;
        getControl(controlName: "msdyn_salespriority"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_applicabletocost"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_applicabletopurchase"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_applicabletosales"): XrmBase.OptionSetControl<any>;
        getControl(controlName: string): undefined;
    }
}
