declare namespace Form.msdyn_requirementrelationship.Main {
    namespace Information {
        namespace Tabs {
            interface Tab3 extends XrmBase.SectionCollectionBase {
                get(name: "tab_3_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_parentrequirementrelationshipid"): XrmBase.LookupAttribute<"msdyn_requirementrelationship">;
            get(name: "msdyn_resourcegroupings"): XrmBase.MultiSelectOptionSetAttribute<msdyn_msdyn_requirementrelationship_msdyn_resourcegroupings>;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "ChildRequirementsRelationship"): XrmBase.SubGridControl<"msdyn_requirementrelationship">;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_parentrequirementrelationshipid"): XrmBase.LookupControl<"msdyn_requirementrelationship">;
            get(name: "msdyn_resourcegroupings"): XrmBase.MultiSelectOptionSetControl<msdyn_msdyn_requirementrelationship_msdyn_resourcegroupings>;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "tab_3"): XrmBase.PageTab<Tabs.Tab3>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_parentrequirementrelationshipid"): XrmBase.LookupAttribute<"msdyn_requirementrelationship">;
        getAttribute(attributeName: "msdyn_resourcegroupings"): XrmBase.MultiSelectOptionSetAttribute<msdyn_msdyn_requirementrelationship_msdyn_resourcegroupings>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_parentrequirementrelationshipid"): XrmBase.LookupControl<"msdyn_requirementrelationship">;
        getControl(controlName: "msdyn_resourcegroupings"): XrmBase.MultiSelectOptionSetControl<msdyn_msdyn_requirementrelationship_msdyn_resourcegroupings>;
        getControl(controlName: "ChildRequirementsRelationship"): XrmBase.SubGridControl<"msdyn_requirementrelationship">;
        getControl(controlName: string): undefined;
    }
}
