declare namespace Form.msdyn_fieldservicepricelistitem.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_durationroundingpolicy"): XrmBase.OptionSetAttribute<msdyn_durationroundingpolicy>;
            get(name: "msdyn_durationroundto"): XrmBase.NumberAttribute;
            get(name: "msdyn_flatfee"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_minimumchargeamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_minimumchargeduration"): XrmBase.NumberAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_pricelist"): XrmBase.LookupAttribute<"pricelevel">;
            get(name: "msdyn_productservice"): XrmBase.LookupAttribute<"product">;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_durationroundingpolicy"): XrmBase.OptionSetControl<msdyn_durationroundingpolicy>;
            get(name: "msdyn_durationroundto"): XrmBase.NumberControl;
            get(name: "msdyn_flatfee"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_minimumchargeamount"): XrmBase.NumberControl;
            get(name: "msdyn_minimumchargeduration"): XrmBase.NumberControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_pricelist"): XrmBase.LookupControl<"pricelevel">;
            get(name: "msdyn_productservice"): XrmBase.LookupControl<"product">;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
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
        getAttribute(attributeName: "msdyn_durationroundingpolicy"): XrmBase.OptionSetAttribute<msdyn_durationroundingpolicy>;
        getAttribute(attributeName: "msdyn_durationroundto"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_flatfee"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_minimumchargeamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_minimumchargeduration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_pricelist"): XrmBase.LookupAttribute<"pricelevel">;
        getAttribute(attributeName: "msdyn_productservice"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_durationroundingpolicy"): XrmBase.OptionSetControl<msdyn_durationroundingpolicy>;
        getControl(controlName: "msdyn_durationroundto"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_flatfee"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_minimumchargeamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_minimumchargeduration"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_pricelist"): XrmBase.LookupControl<"pricelevel">;
        getControl(controlName: "msdyn_productservice"): XrmBase.LookupControl<"product">;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: string): undefined;
    }
}
