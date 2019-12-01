declare namespace Form.service.Main {
    namespace Information {
        namespace Tabs {
            interface ResourceRequirements extends XrmBase.SectionCollectionBase {
                get(name: "ResourceRequirement"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface RequiredResources extends XrmBase.SectionCollectionBase {
                get(name: "resources"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "anchoroffset"): XrmBase.NumberAttribute;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "duration"): XrmBase.NumberAttribute;
            get(name: "granularity"): XrmBase.StringAttribute;
            get(name: "initialstatuscode"): XrmBase.OptionSetAttribute<service_initialstatuscode>;
            get(name: "isschedulable"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_requirementgroupid"): XrmBase.LookupAttribute<"msdyn_requirementgroup">;
            get(name: "msdyn_SchedulingEngine"): XrmBase.OptionSetAttribute<msdyn_service_schedulingengine>;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "resourcespecid"): XrmBase.LookupAttribute<"resourcespec">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "anchoroffset"): XrmBase.NumberControl;
            get(name: "description"): XrmBase.StringControl;
            get(name: "duration"): XrmBase.NumberControl;
            get(name: "granularity"): XrmBase.StringControl;
            get(name: "IFRAME_RuleTree"): XrmBase.IFrameControl;
            get(name: "IFRAME_Scheduling"): XrmBase.IFrameControl;
            get(name: "initialstatuscode"): XrmBase.OptionSetControl<service_initialstatuscode>;
            get(name: "isschedulable"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_SchedulingEngine"): XrmBase.OptionSetControl<msdyn_service_schedulingengine>;
            get(name: "name"): XrmBase.StringControl;
            get(name: "ResourceRequirements"): XrmBase.BaseControl;
            get(name: "resourcespecid"): XrmBase.LookupControl<"resourcespec">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "Resource Requirements"): XrmBase.PageTab<Tabs.ResourceRequirements>;
            get(name: "required resources"): XrmBase.PageTab<Tabs.RequiredResources>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "initialstatuscode"): XrmBase.OptionSetAttribute<service_initialstatuscode>;
        getAttribute(attributeName: "msdyn_SchedulingEngine"): XrmBase.OptionSetAttribute<msdyn_service_schedulingengine>;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "duration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "granularity"): XrmBase.StringAttribute;
        getAttribute(attributeName: "anchoroffset"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "resourcespecid"): XrmBase.LookupAttribute<"resourcespec">;
        getAttribute(attributeName: "isschedulable"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_requirementgroupid"): XrmBase.LookupAttribute<"msdyn_requirementgroup">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "initialstatuscode"): XrmBase.OptionSetControl<service_initialstatuscode>;
        getControl(controlName: "msdyn_SchedulingEngine"): XrmBase.OptionSetControl<msdyn_service_schedulingengine>;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "duration"): XrmBase.NumberControl;
        getControl(controlName: "granularity"): XrmBase.StringControl;
        getControl(controlName: "anchoroffset"): XrmBase.NumberControl;
        getControl(controlName: "resourcespecid"): XrmBase.LookupControl<"resourcespec">;
        getControl(controlName: "isschedulable"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "IFRAME_Scheduling"): XrmBase.IFrameControl;
        getControl(controlName: "ResourceRequirements"): XrmBase.BaseControl;
        getControl(controlName: "IFRAME_RuleTree"): XrmBase.IFrameControl;
        getControl(controlName: string): undefined;
    }
}
