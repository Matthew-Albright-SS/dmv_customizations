declare namespace Form.msdyn_solutionhistory.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_errorcode"): XrmBase.StringAttribute;
            get(name: "msdyn_exceptionmessage"): XrmBase.StringAttribute;
            get(name: "msdyn_ismanaged"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_isoverwritecustomizations"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_ispatch"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_operation"): XrmBase.OptionSetAttribute<msdyn_solutionhistory_msdyn_operation>;
            get(name: "msdyn_publishername"): XrmBase.StringAttribute;
            get(name: "msdyn_solutionversion"): XrmBase.StringAttribute;
            get(name: "msdyn_suboperation"): XrmBase.OptionSetAttribute<msdyn_solutionhistory_msdyn_suboperation>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_errorcode"): XrmBase.StringControl;
            get(name: "msdyn_exceptionmessage"): XrmBase.StringControl;
            get(name: "msdyn_ismanaged"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_isoverwritecustomizations"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_ispatch"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_operation"): XrmBase.OptionSetControl<msdyn_solutionhistory_msdyn_operation>;
            get(name: "msdyn_publishername"): XrmBase.StringControl;
            get(name: "msdyn_solutionversion"): XrmBase.StringControl;
            get(name: "msdyn_suboperation"): XrmBase.OptionSetControl<msdyn_solutionhistory_msdyn_suboperation>;
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
        getAttribute(attributeName: "msdyn_solutionversion"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_publishername"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_suboperation"): XrmBase.OptionSetAttribute<msdyn_solutionhistory_msdyn_suboperation>;
        getAttribute(attributeName: "msdyn_operation"): XrmBase.OptionSetAttribute<msdyn_solutionhistory_msdyn_operation>;
        getAttribute(attributeName: "msdyn_errorcode"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_exceptionmessage"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_ispatch"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_ismanaged"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_isoverwritecustomizations"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_solutionversion"): XrmBase.StringControl;
        getControl(controlName: "msdyn_publishername"): XrmBase.StringControl;
        getControl(controlName: "msdyn_suboperation"): XrmBase.OptionSetControl<msdyn_solutionhistory_msdyn_suboperation>;
        getControl(controlName: "msdyn_operation"): XrmBase.OptionSetControl<msdyn_solutionhistory_msdyn_operation>;
        getControl(controlName: "msdyn_errorcode"): XrmBase.StringControl;
        getControl(controlName: "msdyn_exceptionmessage"): XrmBase.StringControl;
        getControl(controlName: "msdyn_ispatch"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_ismanaged"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_isoverwritecustomizations"): XrmBase.OptionSetControl<any>;
        getControl(controlName: string): undefined;
    }
}
