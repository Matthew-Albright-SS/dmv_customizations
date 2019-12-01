declare namespace Form.msdyn_projectteam.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "{dc58eba6-d467-4b9a-aad8-0c471ebde29f}"): XrmBase.PageSection;
                get(name: "General_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface ResourceRequirement extends XrmBase.SectionCollectionBase {
                get(name: "RequirementSection"): XrmBase.PageSection;
                get(name: "tab_2_section_2"): XrmBase.PageSection;
                get(name: "tab_2_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface ProposedResources extends XrmBase.SectionCollectionBase {
                get(name: "tab_4_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_billingtype"): XrmBase.OptionSetAttribute<msdyn_billingtype>;
            get(name: "msdyn_bookableresourceid"): XrmBase.LookupAttribute<"bookableresource">;
            get(name: "msdyn_from"): XrmBase.DateAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_organizationalunit"): XrmBase.LookupAttribute<"msdyn_organizationalunit">;
            get(name: "msdyn_project"): XrmBase.LookupAttribute<"msdyn_project">;
            get(name: "msdyn_projectapprover"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_resourcecategory"): XrmBase.LookupAttribute<"bookableresourcecategory">;
            get(name: "msdyn_resourcerequirementid"): XrmBase.LookupAttribute<"msdyn_resourcerequirement">;
            get(name: "msdyn_roledescription"): XrmBase.StringAttribute;
            get(name: "msdyn_to"): XrmBase.DateAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "IFRAME_ProposalScheduleBoard"): XrmBase.IFrameControl;
            get(name: "msdyn_billingtype"): XrmBase.OptionSetControl<msdyn_billingtype>;
            get(name: "msdyn_bookableresourceid"): XrmBase.LookupControl<"bookableresource">;
            get(name: "msdyn_from"): XrmBase.DateControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_organizationalunit"): XrmBase.LookupControl<"msdyn_organizationalunit">;
            get(name: "msdyn_project"): XrmBase.LookupControl<"msdyn_project">;
            get(name: "msdyn_projectapprover"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_resourcecategory"): XrmBase.LookupControl<"bookableresourcecategory">;
            get(name: "msdyn_resourcerequirementid"): XrmBase.LookupControl<"msdyn_resourcerequirement">;
            get(name: "msdyn_roledescription"): XrmBase.StringControl;
            get(name: "msdyn_to"): XrmBase.DateControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "ProjectTeam_Requirement_Competencies"): XrmBase.BaseControl;
            get(name: "ProjectTeam_Requirement_Others"): XrmBase.BaseControl;
            get(name: "Requirement_General"): XrmBase.BaseControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "General"): XrmBase.PageTab<Tabs.General>;
            get(name: "Resource_Requirement"): XrmBase.PageTab<Tabs.ResourceRequirement>;
            get(name: "Proposed_Resources"): XrmBase.PageTab<Tabs.ProposedResources>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_project"): XrmBase.LookupAttribute<"msdyn_project">;
        getAttribute(attributeName: "msdyn_bookableresourceid"): XrmBase.LookupAttribute<"bookableresource">;
        getAttribute(attributeName: "msdyn_resourcecategory"): XrmBase.LookupAttribute<"bookableresourcecategory">;
        getAttribute(attributeName: "msdyn_roledescription"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_organizationalunit"): XrmBase.LookupAttribute<"msdyn_organizationalunit">;
        getAttribute(attributeName: "msdyn_from"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_to"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_billingtype"): XrmBase.OptionSetAttribute<msdyn_billingtype>;
        getAttribute(attributeName: "msdyn_projectapprover"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_resourcerequirementid"): XrmBase.LookupAttribute<"msdyn_resourcerequirement">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_project"): XrmBase.LookupControl<"msdyn_project">;
        getControl(controlName: "msdyn_bookableresourceid"): XrmBase.LookupControl<"bookableresource">;
        getControl(controlName: "msdyn_resourcecategory"): XrmBase.LookupControl<"bookableresourcecategory">;
        getControl(controlName: "msdyn_roledescription"): XrmBase.StringControl;
        getControl(controlName: "msdyn_organizationalunit"): XrmBase.LookupControl<"msdyn_organizationalunit">;
        getControl(controlName: "msdyn_from"): XrmBase.DateControl;
        getControl(controlName: "msdyn_to"): XrmBase.DateControl;
        getControl(controlName: "msdyn_billingtype"): XrmBase.OptionSetControl<msdyn_billingtype>;
        getControl(controlName: "msdyn_projectapprover"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_resourcerequirementid"): XrmBase.LookupControl<"msdyn_resourcerequirement">;
        getControl(controlName: "Requirement_General"): XrmBase.BaseControl;
        getControl(controlName: "ProjectTeam_Requirement_Competencies"): XrmBase.BaseControl;
        getControl(controlName: "ProjectTeam_Requirement_Others"): XrmBase.BaseControl;
        getControl(controlName: "IFRAME_ProposalScheduleBoard"): XrmBase.IFrameControl;
        getControl(controlName: string): undefined;
    }
}
