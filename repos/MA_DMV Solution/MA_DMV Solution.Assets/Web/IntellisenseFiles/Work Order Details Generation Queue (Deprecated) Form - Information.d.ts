declare namespace Form.msdyn_workorderdetailsgenerationqueue.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_exceptionmessage"): XrmBase.StringAttribute;
            get(name: "msdyn_exceptiontrace"): XrmBase.StringAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_processed"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_workorderdetails"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_exceptionmessage"): XrmBase.StringControl;
            get(name: "msdyn_exceptiontrace"): XrmBase.StringControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_processed"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_workorderdetails"): XrmBase.StringControl;
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
        getAttribute(attributeName: "msdyn_processed"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_workorderdetails"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_exceptionmessage"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_exceptiontrace"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_processed"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_workorderdetails"): XrmBase.StringControl;
        getControl(controlName: "msdyn_exceptionmessage"): XrmBase.StringControl;
        getControl(controlName: "msdyn_exceptiontrace"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
