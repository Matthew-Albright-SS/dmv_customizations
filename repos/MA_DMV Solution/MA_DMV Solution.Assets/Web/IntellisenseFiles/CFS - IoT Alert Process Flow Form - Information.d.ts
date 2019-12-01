declare namespace Form.msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b.Main {
    namespace Information {
        namespace Tabs {
            interface StageStep2 extends XrmBase.SectionCollectionBase {
                get(name: "StageStep2_section1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface StageStep10 extends XrmBase.SectionCollectionBase {
                get(name: "StageStep10_section1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface StageStep17 extends XrmBase.SectionCollectionBase {
                get(name: "StageStep17_section1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface StageStep24 extends XrmBase.SectionCollectionBase {
                get(name: "StageStep24_section1"): XrmBase.PageSection;
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
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "bpf_incident_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b:customer"): XrmBase.BaseControl;
            get(name: "bpf_incident_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b:msdyn_incidenttype"): XrmBase.BaseControl;
            get(name: "bpf_incident_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b:title"): XrmBase.StringControl;
            get(name: "bpf_msdyn_iotalert_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b:msdyn_alerttime"): XrmBase.DateControl;
            get(name: "bpf_msdyn_iotalert_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b:msdyn_description"): XrmBase.StringControl;
            get(name: "bpf_msdyn_iotalert_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b:msdyn_device"): XrmBase.BaseControl;
            get(name: "bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b:msdyn_priority"): XrmBase.BaseControl;
            get(name: "bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b:msdyn_serviceaccount"): XrmBase.BaseControl;
            get(name: "bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b:msdyn_substatus"): XrmBase.BaseControl;
            get(name: "bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b:msdyn_systemstatus"): XrmBase.OptionSetControl<any>;
            get(name: "bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b:msdyn_systemstatus1"): XrmBase.OptionSetControl<any>;
            get(name: "bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b:msdyn_workordertype"): XrmBase.BaseControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "StageStep2"): XrmBase.PageTab<Tabs.StageStep2>;
            get(name: "StageStep10"): XrmBase.PageTab<Tabs.StageStep10>;
            get(name: "StageStep17"): XrmBase.PageTab<Tabs.StageStep17>;
            get(name: "StageStep24"): XrmBase.PageTab<Tabs.StageStep24>;
            get(name: "StageStep29"): XrmBase.PageTab<Tabs.StageStep29>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "bpf_msdyn_iotalert_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b:msdyn_device"): XrmBase.BaseControl;
        getControl(controlName: "bpf_msdyn_iotalert_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b:msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "bpf_msdyn_iotalert_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b:msdyn_alerttime"): XrmBase.DateControl;
        getControl(controlName: "bpf_incident_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b:title"): XrmBase.StringControl;
        getControl(controlName: "bpf_incident_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b:customer"): XrmBase.BaseControl;
        getControl(controlName: "bpf_incident_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b:msdyn_incidenttype"): XrmBase.BaseControl;
        getControl(controlName: "bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b:msdyn_serviceaccount"): XrmBase.BaseControl;
        getControl(controlName: "bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b:msdyn_priority"): XrmBase.BaseControl;
        getControl(controlName: "bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b:msdyn_workordertype"): XrmBase.BaseControl;
        getControl(controlName: "bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b:msdyn_substatus"): XrmBase.BaseControl;
        getControl(controlName: "bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b:msdyn_systemstatus"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b:msdyn_systemstatus1"): XrmBase.OptionSetControl<any>;
        getControl(controlName: string): undefined;
    }
}
