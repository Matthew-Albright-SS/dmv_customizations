declare namespace Form.dmv_feedback.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "dmv_applicationtype"): XrmBase.OptionSetAttribute<dmv_feedback_dmv_applicationtype>;
            get(name: "dmv_appointment"): XrmBase.OptionSetAttribute<dmv_feedback_dmv_appointment>;
            get(name: "dmv_conditionofthebuildingfacilities"): XrmBase.OptionSetAttribute<dmv_feedbackopinion>;
            get(name: "dmv_informationprovidedtoyou"): XrmBase.OptionSetAttribute<dmv_feedbackopinion>;
            get(name: "dmv_location"): XrmBase.StringAttribute;
            get(name: "dmv_name"): XrmBase.StringAttribute;
            get(name: "dmv_officewaittimes"): XrmBase.OptionSetAttribute<dmv_feedbackopinion>;
            get(name: "dmv_servicefromdmvstaff"): XrmBase.OptionSetAttribute<dmv_feedbackopinion>;
            get(name: "dmv_transactioncomplete"): XrmBase.OptionSetAttribute<dmv_feedback_dmv_transactioncomplete>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "dmv_applicationtype"): XrmBase.OptionSetControl<dmv_feedback_dmv_applicationtype>;
            get(name: "dmv_appointment"): XrmBase.OptionSetControl<dmv_feedback_dmv_appointment>;
            get(name: "dmv_conditionofthebuildingfacilities"): XrmBase.OptionSetControl<dmv_feedbackopinion>;
            get(name: "dmv_informationprovidedtoyou"): XrmBase.OptionSetControl<dmv_feedbackopinion>;
            get(name: "dmv_location"): XrmBase.StringControl;
            get(name: "dmv_name"): XrmBase.StringControl;
            get(name: "dmv_officewaittimes"): XrmBase.OptionSetControl<dmv_feedbackopinion>;
            get(name: "dmv_servicefromdmvstaff"): XrmBase.OptionSetControl<dmv_feedbackopinion>;
            get(name: "dmv_transactioncomplete"): XrmBase.OptionSetControl<dmv_feedback_dmv_transactioncomplete>;
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
        getAttribute(attributeName: "dmv_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "dmv_applicationtype"): XrmBase.OptionSetAttribute<dmv_feedback_dmv_applicationtype>;
        getAttribute(attributeName: "dmv_location"): XrmBase.StringAttribute;
        getAttribute(attributeName: "dmv_appointment"): XrmBase.OptionSetAttribute<dmv_feedback_dmv_appointment>;
        getAttribute(attributeName: "dmv_transactioncomplete"): XrmBase.OptionSetAttribute<dmv_feedback_dmv_transactioncomplete>;
        getAttribute(attributeName: "dmv_officewaittimes"): XrmBase.OptionSetAttribute<dmv_feedbackopinion>;
        getAttribute(attributeName: "dmv_servicefromdmvstaff"): XrmBase.OptionSetAttribute<dmv_feedbackopinion>;
        getAttribute(attributeName: "dmv_informationprovidedtoyou"): XrmBase.OptionSetAttribute<dmv_feedbackopinion>;
        getAttribute(attributeName: "dmv_conditionofthebuildingfacilities"): XrmBase.OptionSetAttribute<dmv_feedbackopinion>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "dmv_name"): XrmBase.StringControl;
        getControl(controlName: "dmv_applicationtype"): XrmBase.OptionSetControl<dmv_feedback_dmv_applicationtype>;
        getControl(controlName: "dmv_location"): XrmBase.StringControl;
        getControl(controlName: "dmv_appointment"): XrmBase.OptionSetControl<dmv_feedback_dmv_appointment>;
        getControl(controlName: "dmv_transactioncomplete"): XrmBase.OptionSetControl<dmv_feedback_dmv_transactioncomplete>;
        getControl(controlName: "dmv_officewaittimes"): XrmBase.OptionSetControl<dmv_feedbackopinion>;
        getControl(controlName: "dmv_servicefromdmvstaff"): XrmBase.OptionSetControl<dmv_feedbackopinion>;
        getControl(controlName: "dmv_informationprovidedtoyou"): XrmBase.OptionSetControl<dmv_feedbackopinion>;
        getControl(controlName: "dmv_conditionofthebuildingfacilities"): XrmBase.OptionSetControl<dmv_feedbackopinion>;
        getControl(controlName: string): undefined;
    }
}
