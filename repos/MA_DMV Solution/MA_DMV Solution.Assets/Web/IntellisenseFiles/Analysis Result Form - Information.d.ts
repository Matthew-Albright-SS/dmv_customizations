declare namespace Form.msdyn_analysisresult.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_analysiscomponenttype"): XrmBase.OptionSetAttribute<msdyn_analysisresult_msdyn_analysiscomponenttype>;
            get(name: "msdyn_analysisjobid"): XrmBase.LookupAttribute<"msdyn_analysisjob">;
            get(name: "msdyn_category"): XrmBase.OptionSetAttribute<msdyn_analysisresult_msdyn_category>;
            get(name: "msdyn_entityname"): XrmBase.StringAttribute;
            get(name: "msdyn_fileuri"): XrmBase.StringAttribute;
            get(name: "msdyn_helplink"): XrmBase.StringAttribute;
            get(name: "msdyn_level"): XrmBase.OptionSetAttribute<msdyn_analysisresult_msdyn_level>;
            get(name: "msdyn_line"): XrmBase.NumberAttribute;
            get(name: "msdyn_member"): XrmBase.StringAttribute;
            get(name: "msdyn_message"): XrmBase.StringAttribute;
            get(name: "msdyn_module"): XrmBase.StringAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_returnstatus"): XrmBase.OptionSetAttribute<msdyn_analysisresult_msdyn_returnstatus>;
            get(name: "msdyn_ruleid"): XrmBase.StringAttribute;
            get(name: "msdyn_rulereferenceuri"): XrmBase.StringAttribute;
            get(name: "msdyn_severity"): XrmBase.OptionSetAttribute<msdyn_analysisresult_msdyn_severity>;
            get(name: "msdyn_snippet"): XrmBase.StringAttribute;
            get(name: "msdyn_solutionhealthmessage"): XrmBase.StringAttribute;
            get(name: "msdyn_type"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "AnalysisResultDetails"): XrmBase.SubGridControl<"msdyn_analysisresultdetail">;
            get(name: "msdyn_analysiscomponenttype"): XrmBase.OptionSetControl<msdyn_analysisresult_msdyn_analysiscomponenttype>;
            get(name: "msdyn_analysisjobid"): XrmBase.LookupControl<"msdyn_analysisjob">;
            get(name: "msdyn_category"): XrmBase.OptionSetControl<msdyn_analysisresult_msdyn_category>;
            get(name: "msdyn_entityname"): XrmBase.StringControl;
            get(name: "msdyn_fileuri"): XrmBase.StringControl;
            get(name: "msdyn_helplink"): XrmBase.StringControl;
            get(name: "msdyn_level"): XrmBase.OptionSetControl<msdyn_analysisresult_msdyn_level>;
            get(name: "msdyn_line"): XrmBase.NumberControl;
            get(name: "msdyn_member"): XrmBase.StringControl;
            get(name: "msdyn_message"): XrmBase.StringControl;
            get(name: "msdyn_module"): XrmBase.StringControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_returnstatus"): XrmBase.OptionSetControl<msdyn_analysisresult_msdyn_returnstatus>;
            get(name: "msdyn_ruleid"): XrmBase.StringControl;
            get(name: "msdyn_rulereferenceuri"): XrmBase.StringControl;
            get(name: "msdyn_severity"): XrmBase.OptionSetControl<msdyn_analysisresult_msdyn_severity>;
            get(name: "msdyn_snippet"): XrmBase.StringControl;
            get(name: "msdyn_solutionhealthmessage"): XrmBase.StringControl;
            get(name: "msdyn_type"): XrmBase.StringControl;
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
        getAttribute(attributeName: "msdyn_entityname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_category"): XrmBase.OptionSetAttribute<msdyn_analysisresult_msdyn_category>;
        getAttribute(attributeName: "msdyn_type"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_severity"): XrmBase.OptionSetAttribute<msdyn_analysisresult_msdyn_severity>;
        getAttribute(attributeName: "msdyn_ruleid"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_rulereferenceuri"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_fileuri"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_level"): XrmBase.OptionSetAttribute<msdyn_analysisresult_msdyn_level>;
        getAttribute(attributeName: "msdyn_line"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_member"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_message"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_solutionhealthmessage"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_helplink"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_module"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_snippet"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_analysiscomponenttype"): XrmBase.OptionSetAttribute<msdyn_analysisresult_msdyn_analysiscomponenttype>;
        getAttribute(attributeName: "msdyn_analysisjobid"): XrmBase.LookupAttribute<"msdyn_analysisjob">;
        getAttribute(attributeName: "msdyn_returnstatus"): XrmBase.OptionSetAttribute<msdyn_analysisresult_msdyn_returnstatus>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_entityname"): XrmBase.StringControl;
        getControl(controlName: "msdyn_category"): XrmBase.OptionSetControl<msdyn_analysisresult_msdyn_category>;
        getControl(controlName: "msdyn_type"): XrmBase.StringControl;
        getControl(controlName: "msdyn_severity"): XrmBase.OptionSetControl<msdyn_analysisresult_msdyn_severity>;
        getControl(controlName: "msdyn_ruleid"): XrmBase.StringControl;
        getControl(controlName: "msdyn_rulereferenceuri"): XrmBase.StringControl;
        getControl(controlName: "msdyn_fileuri"): XrmBase.StringControl;
        getControl(controlName: "msdyn_level"): XrmBase.OptionSetControl<msdyn_analysisresult_msdyn_level>;
        getControl(controlName: "msdyn_line"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_member"): XrmBase.StringControl;
        getControl(controlName: "msdyn_message"): XrmBase.StringControl;
        getControl(controlName: "msdyn_solutionhealthmessage"): XrmBase.StringControl;
        getControl(controlName: "msdyn_helplink"): XrmBase.StringControl;
        getControl(controlName: "msdyn_module"): XrmBase.StringControl;
        getControl(controlName: "msdyn_snippet"): XrmBase.StringControl;
        getControl(controlName: "msdyn_analysiscomponenttype"): XrmBase.OptionSetControl<msdyn_analysisresult_msdyn_analysiscomponenttype>;
        getControl(controlName: "msdyn_analysisjobid"): XrmBase.LookupControl<"msdyn_analysisjob">;
        getControl(controlName: "msdyn_returnstatus"): XrmBase.OptionSetControl<msdyn_analysisresult_msdyn_returnstatus>;
        getControl(controlName: "AnalysisResultDetails"): XrmBase.SubGridControl<"msdyn_analysisresultdetail">;
        getControl(controlName: string): undefined;
    }
}
