declare namespace Form.msdyn_requirementcharacteristic.Main {
    namespace Information {
        namespace Tabs {
            interface Tab3 extends XrmBase.SectionCollectionBase {
                get(name: "tab_3_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_characteristic"): XrmBase.LookupAttribute<"characteristic">;
            get(name: "msdyn_ratingvalue"): XrmBase.LookupAttribute<"ratingvalue">;
            get(name: "msdyn_resourcerequirement"): XrmBase.LookupAttribute<"msdyn_resourcerequirement">;
            get(name: "msdyn_workorder"): XrmBase.LookupAttribute<"msdyn_workorder">;
            get(name: "msdyn_workorderincident"): XrmBase.LookupAttribute<"msdyn_workorderincident">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_characteristic"): XrmBase.LookupControl<"characteristic">;
            get(name: "msdyn_ratingvalue"): XrmBase.LookupControl<"ratingvalue">;
            get(name: "msdyn_resourcerequirement"): XrmBase.LookupControl<"msdyn_resourcerequirement">;
            get(name: "msdyn_workorder"): XrmBase.LookupControl<"msdyn_workorder">;
            get(name: "msdyn_workorderincident"): XrmBase.LookupControl<"msdyn_workorderincident">;
            get(name: "notescontrol"): XrmBase.StringControl;
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
        getAttribute(attributeName: "msdyn_characteristic"): XrmBase.LookupAttribute<"characteristic">;
        getAttribute(attributeName: "msdyn_ratingvalue"): XrmBase.LookupAttribute<"ratingvalue">;
        getAttribute(attributeName: "msdyn_resourcerequirement"): XrmBase.LookupAttribute<"msdyn_resourcerequirement">;
        getAttribute(attributeName: "msdyn_workorder"): XrmBase.LookupAttribute<"msdyn_workorder">;
        getAttribute(attributeName: "msdyn_workorderincident"): XrmBase.LookupAttribute<"msdyn_workorderincident">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_characteristic"): XrmBase.LookupControl<"characteristic">;
        getControl(controlName: "msdyn_ratingvalue"): XrmBase.LookupControl<"ratingvalue">;
        getControl(controlName: "msdyn_resourcerequirement"): XrmBase.LookupControl<"msdyn_resourcerequirement">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "msdyn_workorder"): XrmBase.LookupControl<"msdyn_workorder">;
        getControl(controlName: "msdyn_workorderincident"): XrmBase.LookupControl<"msdyn_workorderincident">;
        getControl(controlName: string): undefined;
    }
}
