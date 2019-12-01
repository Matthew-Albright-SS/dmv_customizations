declare namespace Form.bookableresourcecategory.Main {
    namespace Information {
        namespace Tabs {
            interface _35ef8c40aff6447da927d6e2f3d859bb extends XrmBase.SectionCollectionBase {
                get(name: "{43ab3d2c-ec2c-437e-a161-563c8aa60436}"): XrmBase.PageSection;
                get(name: "SkillsSection"): XrmBase.PageSection;
                get(name: "{2e7fd731-54ad-4197-ab2c-5cdd58651954}"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "msdyn_billingtype"): XrmBase.OptionSetAttribute<msdyn_billingtype>;
            get(name: "msdyn_targetutilization"): XrmBase.NumberAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "description"): XrmBase.StringControl;
            get(name: "msdyn_billingtype"): XrmBase.OptionSetControl<msdyn_billingtype>;
            get(name: "msdyn_targetutilization"): XrmBase.NumberControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "RoleCompetencyRequirement"): XrmBase.SubGridControl<"msdyn_rolecompetencyrequirement">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{35ef8c40-aff6-447d-a927-d6e2f3d859bb}"): XrmBase.PageTab<Tabs._35ef8c40aff6447da927d6e2f3d859bb>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_targetutilization"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_billingtype"): XrmBase.OptionSetAttribute<msdyn_billingtype>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "msdyn_targetutilization"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_billingtype"): XrmBase.OptionSetControl<msdyn_billingtype>;
        getControl(controlName: "RoleCompetencyRequirement"): XrmBase.SubGridControl<"msdyn_rolecompetencyrequirement">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
