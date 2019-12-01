declare namespace Form.msdyn_batchjob.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_frequency"): XrmBase.OptionSetAttribute<msdyn_batchjob_msdyn_frequency>;
            get(name: "msdyn_isactive"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_jobtype"): XrmBase.OptionSetAttribute<msdyn_batchjob_msdyn_jobtype>;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_frequency"): XrmBase.OptionSetControl<msdyn_batchjob_msdyn_frequency>;
            get(name: "msdyn_isactive"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_jobtype"): XrmBase.OptionSetControl<msdyn_batchjob_msdyn_jobtype>;
            get(name: "msdyn_name"): XrmBase.StringControl;
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
        getAttribute(attributeName: "msdyn_jobtype"): XrmBase.OptionSetAttribute<msdyn_batchjob_msdyn_jobtype>;
        getAttribute(attributeName: "msdyn_frequency"): XrmBase.OptionSetAttribute<msdyn_batchjob_msdyn_frequency>;
        getAttribute(attributeName: "msdyn_isactive"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_jobtype"): XrmBase.OptionSetControl<msdyn_batchjob_msdyn_jobtype>;
        getControl(controlName: "msdyn_frequency"): XrmBase.OptionSetControl<msdyn_batchjob_msdyn_frequency>;
        getControl(controlName: "msdyn_isactive"): XrmBase.OptionSetControl<any>;
        getControl(controlName: string): undefined;
    }
}
