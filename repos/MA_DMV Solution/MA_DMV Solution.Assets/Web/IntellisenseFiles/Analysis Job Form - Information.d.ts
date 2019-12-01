declare namespace Form.msdyn_analysisjob.Main {
    namespace Information {
        namespace Tabs {
            interface f1a268495cbd4343be37a5447d0ea5a6 extends XrmBase.SectionCollectionBase {
                get(name: "{bfa242f2-7fbf-468a-85ca-6d52bd4193d1}"): XrmBase.PageSection;
                get(name: "{f1a26849-5cbd-4343-be37-a5447d0ea5a6}_section_3"): XrmBase.PageSection;
                get(name: "{f1a26849-5cbd-4343-be37-a5447d0ea5a6}_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Summarytab extends XrmBase.SectionCollectionBase {
                get(name: "tab_3_section_overview"): XrmBase.PageSection;
                get(name: "{e6707165-9b00-4abc-9df3-d04e06fec0f2}_section_4"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab2 extends XrmBase.SectionCollectionBase {
                get(name: "tab_2_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_endtime"): XrmBase.DateAttribute;
            get(name: "msdyn_exception"): XrmBase.StringAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_rulefailcount"): XrmBase.NumberAttribute;
            get(name: "msdyn_rulepasscount"): XrmBase.NumberAttribute;
            get(name: "msdyn_ruleruncount"): XrmBase.NumberAttribute;
            get(name: "msdyn_sevcriticalcount"): XrmBase.NumberAttribute;
            get(name: "msdyn_sevhighcount"): XrmBase.NumberAttribute;
            get(name: "msdyn_sevlowcount"): XrmBase.NumberAttribute;
            get(name: "msdyn_sevmediumcount"): XrmBase.NumberAttribute;
            get(name: "msdyn_starttime"): XrmBase.DateAttribute;
            get(name: "msdyn_warningcount"): XrmBase.NumberAttribute;
            get(name: "statecode"): XrmBase.OptionSetAttribute<msdyn_analysisjob_statecode>;
            get(name: "statuscode"): XrmBase.OptionSetAttribute<msdyn_analysisjob_statuscode>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "AssociatedAnalysisResults"): XrmBase.SubGridControl<"msdyn_analysisresult">;
            get(name: "header_sevcriticalcount"): XrmBase.BaseControl;
            get(name: "header_sevhighcount"): XrmBase.BaseControl;
            get(name: "header_sevlowcount"): XrmBase.BaseControl;
            get(name: "header_sevmediumcount"): XrmBase.BaseControl;
            get(name: "msdyn_endtime"): XrmBase.DateControl;
            get(name: "msdyn_exception"): XrmBase.StringControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_rulefailcount"): XrmBase.NumberControl;
            get(name: "msdyn_rulepasscount"): XrmBase.NumberControl;
            get(name: "msdyn_ruleruncount"): XrmBase.NumberControl;
            get(name: "msdyn_starttime"): XrmBase.DateControl;
            get(name: "msdyn_warningcount"): XrmBase.NumberControl;
            get(name: "statecode"): XrmBase.OptionSetControl<msdyn_analysisjob_statecode>;
            get(name: "statuscode"): XrmBase.OptionSetControl<msdyn_analysisjob_statuscode>;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{f1a26849-5cbd-4343-be37-a5447d0ea5a6}"): XrmBase.PageTab<Tabs.f1a268495cbd4343be37a5447d0ea5a6>;
            get(name: "summary_tab"): XrmBase.PageTab<Tabs.Summarytab>;
            get(name: "tab_2"): XrmBase.PageTab<Tabs.Tab2>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_rulefailcount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "statecode"): XrmBase.OptionSetAttribute<msdyn_analysisjob_statecode>;
        getAttribute(attributeName: "msdyn_warningcount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "statuscode"): XrmBase.OptionSetAttribute<msdyn_analysisjob_statuscode>;
        getAttribute(attributeName: "msdyn_rulepasscount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_starttime"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_ruleruncount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_endtime"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_sevcriticalcount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_sevhighcount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_sevmediumcount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_sevlowcount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_exception"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_rulefailcount"): XrmBase.NumberControl;
        getControl(controlName: "statecode"): XrmBase.OptionSetControl<msdyn_analysisjob_statecode>;
        getControl(controlName: "msdyn_warningcount"): XrmBase.NumberControl;
        getControl(controlName: "statuscode"): XrmBase.OptionSetControl<msdyn_analysisjob_statuscode>;
        getControl(controlName: "msdyn_rulepasscount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_starttime"): XrmBase.DateControl;
        getControl(controlName: "msdyn_ruleruncount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_endtime"): XrmBase.DateControl;
        getControl(controlName: "AssociatedAnalysisResults"): XrmBase.SubGridControl<"msdyn_analysisresult">;
        getControl(controlName: "header_sevcriticalcount"): XrmBase.BaseControl;
        getControl(controlName: "header_sevhighcount"): XrmBase.BaseControl;
        getControl(controlName: "header_sevmediumcount"): XrmBase.BaseControl;
        getControl(controlName: "header_sevlowcount"): XrmBase.BaseControl;
        getControl(controlName: "msdyn_exception"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
