declare namespace Form.msdyn_fieldservicesystemjob.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_conditioncode"): XrmBase.NumberAttribute;
            get(name: "msdyn_exceptionmessage"): XrmBase.StringAttribute;
            get(name: "msdyn_exceptiontrace"): XrmBase.StringAttribute;
            get(name: "msdyn_inputparameter"): XrmBase.StringAttribute;
            get(name: "msdyn_inputparametertype"): XrmBase.OptionSetAttribute<msdyn_parametertype>;
            get(name: "msdyn_jobname"): XrmBase.StringAttribute;
            get(name: "msdyn_jobtype"): XrmBase.NumberAttribute;
            get(name: "msdyn_outputparameter"): XrmBase.StringAttribute;
            get(name: "msdyn_outputparametertype"): XrmBase.OptionSetAttribute<msdyn_parametertype>;
            get(name: "msdyn_ownerid"): XrmBase.LookupAttribute<"systemuser">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_conditioncode"): XrmBase.NumberControl;
            get(name: "msdyn_exceptionmessage"): XrmBase.StringControl;
            get(name: "msdyn_exceptiontrace"): XrmBase.StringControl;
            get(name: "msdyn_inputparameter"): XrmBase.StringControl;
            get(name: "msdyn_inputparametertype"): XrmBase.OptionSetControl<msdyn_parametertype>;
            get(name: "msdyn_jobname"): XrmBase.StringControl;
            get(name: "msdyn_jobtype"): XrmBase.NumberControl;
            get(name: "msdyn_outputparameter"): XrmBase.StringControl;
            get(name: "msdyn_outputparametertype"): XrmBase.OptionSetControl<msdyn_parametertype>;
            get(name: "msdyn_ownerid"): XrmBase.LookupControl<"systemuser">;
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
        getAttribute(attributeName: "msdyn_jobname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_jobtype"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_inputparametertype"): XrmBase.OptionSetAttribute<msdyn_parametertype>;
        getAttribute(attributeName: "msdyn_outputparametertype"): XrmBase.OptionSetAttribute<msdyn_parametertype>;
        getAttribute(attributeName: "msdyn_inputparameter"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_outputparameter"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_exceptionmessage"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_exceptiontrace"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_ownerid"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "msdyn_conditioncode"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_jobname"): XrmBase.StringControl;
        getControl(controlName: "msdyn_jobtype"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_inputparametertype"): XrmBase.OptionSetControl<msdyn_parametertype>;
        getControl(controlName: "msdyn_outputparametertype"): XrmBase.OptionSetControl<msdyn_parametertype>;
        getControl(controlName: "msdyn_inputparameter"): XrmBase.StringControl;
        getControl(controlName: "msdyn_outputparameter"): XrmBase.StringControl;
        getControl(controlName: "msdyn_exceptionmessage"): XrmBase.StringControl;
        getControl(controlName: "msdyn_exceptiontrace"): XrmBase.StringControl;
        getControl(controlName: "msdyn_ownerid"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "msdyn_conditioncode"): XrmBase.NumberControl;
        getControl(controlName: string): undefined;
    }
}
