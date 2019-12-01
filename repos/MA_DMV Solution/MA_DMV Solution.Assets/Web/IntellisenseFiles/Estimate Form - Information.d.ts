declare namespace Form.msdyn_estimate.Main {
    namespace Information {
        namespace Tabs {
            interface _51c00233ee564421a30faae78944fde6 extends XrmBase.SectionCollectionBase {
                get(name: "{51c00233-ee56-4421-a30f-aae78944fde6}_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface EstimateLinesTab extends XrmBase.SectionCollectionBase {
                get(name: "EstimateLinesSection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_project"): XrmBase.LookupAttribute<"msdyn_project">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "EstimateLinesGrid"): XrmBase.SubGridControl<"msdyn_estimateline">;
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_project"): XrmBase.LookupControl<"msdyn_project">;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{51c00233-ee56-4421-a30f-aae78944fde6}"): XrmBase.PageTab<Tabs._51c00233ee564421a30faae78944fde6>;
            get(name: "EstimateLinesTab"): XrmBase.PageTab<Tabs.EstimateLinesTab>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_project"): XrmBase.LookupAttribute<"msdyn_project">;
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_project"): XrmBase.LookupControl<"msdyn_project">;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "EstimateLinesGrid"): XrmBase.SubGridControl<"msdyn_estimateline">;
        getControl(controlName: string): undefined;
    }
}
