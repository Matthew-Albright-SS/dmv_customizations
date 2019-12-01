declare namespace Form.msdyn_analysiscomponent.Main {
    namespace Information {
        namespace Tabs {
            interface Tab2 extends XrmBase.SectionCollectionBase {
                get(name: "tab_2_section_1"): XrmBase.PageSection;
                get(name: "tab_2_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_analysiscomponenttype"): XrmBase.OptionSetAttribute<msdyn_analysiscomponent_msdyn_analysiscomponenttype>;
            get(name: "msdyn_analysisjobid"): XrmBase.LookupAttribute<"msdyn_analysisjob">;
            get(name: "msdyn_componentid"): XrmBase.StringAttribute;
            get(name: "msdyn_componentname"): XrmBase.StringAttribute;
            get(name: "msdyn_componenttype"): XrmBase.OptionSetAttribute<msdyn_analysiscomponent_msdyn_componenttype>;
            get(name: "msdyn_errorcount"): XrmBase.NumberAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_retrycount"): XrmBase.NumberAttribute;
            get(name: "msdyn_rulefailcount"): XrmBase.NumberAttribute;
            get(name: "msdyn_rulepasscount"): XrmBase.NumberAttribute;
            get(name: "msdyn_rulepassrate"): XrmBase.NumberAttribute;
            get(name: "msdyn_solutionhealthrulesetid"): XrmBase.LookupAttribute<"msdyn_solutionhealthruleset">;
            get(name: "msdyn_warningcount"): XrmBase.NumberAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "statuscode"): XrmBase.OptionSetAttribute<msdyn_analysiscomponent_statuscode>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_analysiscomponenttype"): XrmBase.OptionSetControl<msdyn_analysiscomponent_msdyn_analysiscomponenttype>;
            get(name: "msdyn_analysisjobid"): XrmBase.LookupControl<"msdyn_analysisjob">;
            get(name: "msdyn_componentid"): XrmBase.StringControl;
            get(name: "msdyn_componentname"): XrmBase.StringControl;
            get(name: "msdyn_componenttype"): XrmBase.OptionSetControl<msdyn_analysiscomponent_msdyn_componenttype>;
            get(name: "msdyn_errorcount"): XrmBase.NumberControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_retrycount"): XrmBase.NumberControl;
            get(name: "msdyn_rulefailcount"): XrmBase.NumberControl;
            get(name: "msdyn_rulepasscount"): XrmBase.NumberControl;
            get(name: "msdyn_rulepassrate"): XrmBase.NumberControl;
            get(name: "msdyn_solutionhealthrulesetid"): XrmBase.LookupControl<"msdyn_solutionhealthruleset">;
            get(name: "msdyn_warningcount"): XrmBase.NumberControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "statuscode"): XrmBase.OptionSetControl<msdyn_analysiscomponent_statuscode>;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "tab_2"): XrmBase.PageTab<Tabs.Tab2>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_componentname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_componentid"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_analysiscomponenttype"): XrmBase.OptionSetAttribute<msdyn_analysiscomponent_msdyn_analysiscomponenttype>;
        getAttribute(attributeName: "msdyn_solutionhealthrulesetid"): XrmBase.LookupAttribute<"msdyn_solutionhealthruleset">;
        getAttribute(attributeName: "msdyn_analysisjobid"): XrmBase.LookupAttribute<"msdyn_analysisjob">;
        getAttribute(attributeName: "msdyn_componenttype"): XrmBase.OptionSetAttribute<msdyn_analysiscomponent_msdyn_componenttype>;
        getAttribute(attributeName: "statuscode"): XrmBase.OptionSetAttribute<msdyn_analysiscomponent_statuscode>;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_rulepasscount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_rulepassrate"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_rulefailcount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_errorcount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_warningcount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_retrycount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_componentname"): XrmBase.StringControl;
        getControl(controlName: "msdyn_componentid"): XrmBase.StringControl;
        getControl(controlName: "msdyn_analysiscomponenttype"): XrmBase.OptionSetControl<msdyn_analysiscomponent_msdyn_analysiscomponenttype>;
        getControl(controlName: "msdyn_solutionhealthrulesetid"): XrmBase.LookupControl<"msdyn_solutionhealthruleset">;
        getControl(controlName: "msdyn_analysisjobid"): XrmBase.LookupControl<"msdyn_analysisjob">;
        getControl(controlName: "msdyn_componenttype"): XrmBase.OptionSetControl<msdyn_analysiscomponent_msdyn_componenttype>;
        getControl(controlName: "statuscode"): XrmBase.OptionSetControl<msdyn_analysiscomponent_statuscode>;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_rulepasscount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_rulepassrate"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_rulefailcount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_errorcount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_warningcount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_retrycount"): XrmBase.NumberControl;
        getControl(controlName: string): undefined;
    }
}
