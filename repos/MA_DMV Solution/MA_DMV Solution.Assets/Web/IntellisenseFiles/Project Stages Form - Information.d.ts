declare namespace Form.msdyn_bpf_665e73aa18c247d886bfc50499c73b82.Main {
    namespace Information {
        namespace Tabs {
            interface StageStep2 extends XrmBase.SectionCollectionBase {
                get(name: "StageStep2_section1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface StageStep16 extends XrmBase.SectionCollectionBase {
                get(name: "StageStep16_section1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface StageStep19 extends XrmBase.SectionCollectionBase {
                get(name: "StageStep19_section1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface StageStep29 extends XrmBase.SectionCollectionBase {
                get(name: "StageStep29_section1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface StageStep32 extends XrmBase.SectionCollectionBase {
                get(name: "StageStep32_section1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface StageStep35 extends XrmBase.SectionCollectionBase {
                get(name: "StageStep35_section1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "bpf_msdyn_project_msdyn_bpf_665e73aa18c247d886bfc50499c73b82:msdyn_actualend"): XrmBase.DateControl;
            get(name: "bpf_msdyn_project_msdyn_bpf_665e73aa18c247d886bfc50499c73b82:msdyn_actualend1"): XrmBase.DateControl;
            get(name: "bpf_msdyn_project_msdyn_bpf_665e73aa18c247d886bfc50499c73b82:msdyn_actualstart"): XrmBase.DateControl;
            get(name: "bpf_msdyn_project_msdyn_bpf_665e73aa18c247d886bfc50499c73b82:msdyn_description"): XrmBase.StringControl;
            get(name: "bpf_msdyn_project_msdyn_bpf_665e73aa18c247d886bfc50499c73b82:msdyn_salesorderid"): XrmBase.BaseControl;
            get(name: "bpf_msdyn_project_msdyn_bpf_665e73aa18c247d886bfc50499c73b82:msdyn_scheduledend"): XrmBase.DateControl;
            get(name: "bpf_msdyn_project_msdyn_bpf_665e73aa18c247d886bfc50499c73b82:msdyn_scheduledstart"): XrmBase.DateControl;
            get(name: "bpf_msdyn_project_msdyn_bpf_665e73aa18c247d886bfc50499c73b82:msdyn_subject"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "StageStep2"): XrmBase.PageTab<Tabs.StageStep2>;
            get(name: "StageStep16"): XrmBase.PageTab<Tabs.StageStep16>;
            get(name: "StageStep19"): XrmBase.PageTab<Tabs.StageStep19>;
            get(name: "StageStep29"): XrmBase.PageTab<Tabs.StageStep29>;
            get(name: "StageStep32"): XrmBase.PageTab<Tabs.StageStep32>;
            get(name: "StageStep35"): XrmBase.PageTab<Tabs.StageStep35>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "bpf_msdyn_project_msdyn_bpf_665e73aa18c247d886bfc50499c73b82:msdyn_subject"): XrmBase.StringControl;
        getControl(controlName: "bpf_msdyn_project_msdyn_bpf_665e73aa18c247d886bfc50499c73b82:msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "bpf_msdyn_project_msdyn_bpf_665e73aa18c247d886bfc50499c73b82:msdyn_scheduledstart"): XrmBase.DateControl;
        getControl(controlName: "bpf_msdyn_project_msdyn_bpf_665e73aa18c247d886bfc50499c73b82:msdyn_scheduledend"): XrmBase.DateControl;
        getControl(controlName: "bpf_msdyn_project_msdyn_bpf_665e73aa18c247d886bfc50499c73b82:msdyn_salesorderid"): XrmBase.BaseControl;
        getControl(controlName: "bpf_msdyn_project_msdyn_bpf_665e73aa18c247d886bfc50499c73b82:msdyn_actualstart"): XrmBase.DateControl;
        getControl(controlName: "bpf_msdyn_project_msdyn_bpf_665e73aa18c247d886bfc50499c73b82:msdyn_actualend"): XrmBase.DateControl;
        getControl(controlName: "bpf_msdyn_project_msdyn_bpf_665e73aa18c247d886bfc50499c73b82:msdyn_actualend1"): XrmBase.DateControl;
        getControl(controlName: string): undefined;
    }
}
