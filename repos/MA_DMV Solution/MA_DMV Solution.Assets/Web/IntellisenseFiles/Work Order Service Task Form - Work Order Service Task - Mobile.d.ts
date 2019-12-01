declare namespace Form.msdyn_workorderservicetask.Main {
    namespace WorkOrderServiceTaskMobile {
        namespace Tabs {
            interface _1932b3772e7e48809b0e477cc529b5fe extends XrmBase.SectionCollectionBase {
                get(name: "{594a0ad8-a9a3-4509-9e40-52f6789d7512}"): XrmBase.PageSection;
                get(name: "fstab_general_section_duration"): XrmBase.PageSection;
                get(name: "{1932b377-2e7e-4880-9b0e-477cc529b5fe}_section_2"): XrmBase.PageSection;
                get(name: "tab_3_section_1"): XrmBase.PageSection;
                get(name: "fstab_sub_grids_section"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_actualduration"): XrmBase.NumberAttribute;
            get(name: "msdyn_booking"): XrmBase.LookupAttribute<"bookableresourcebooking">;
            get(name: "msdyn_customerasset"): XrmBase.LookupAttribute<"msdyn_customerasset">;
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_estimatedduration"): XrmBase.NumberAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_percentcomplete"): XrmBase.NumberAttribute;
            get(name: "msdyn_tasktype"): XrmBase.LookupAttribute<"msdyn_servicetasktype">;
            get(name: "msdyn_workorder"): XrmBase.LookupAttribute<"msdyn_workorder">;
            get(name: "msdyn_workorderincident"): XrmBase.LookupAttribute<"msdyn_workorderincident">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_actualduration"): XrmBase.NumberControl;
            get(name: "msdyn_booking"): XrmBase.LookupControl<"bookableresourcebooking">;
            get(name: "msdyn_customerasset"): XrmBase.LookupControl<"msdyn_customerasset">;
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_estimatedduration"): XrmBase.NumberControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_percentcomplete"): XrmBase.BaseControl;
            get(name: "msdyn_tasktype"): XrmBase.LookupControl<"msdyn_servicetasktype">;
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
            get(name: "{1932b377-2e7e-4880-9b0e-477cc529b5fe}"): XrmBase.PageTab<Tabs._1932b3772e7e48809b0e477cc529b5fe>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface WorkOrderServiceTaskMobile extends XrmBase.PageBase<WorkOrderServiceTaskMobile.Attributes, WorkOrderServiceTaskMobile.Tabs, WorkOrderServiceTaskMobile.Controls> {
        getAttribute(attributeName: "msdyn_tasktype"): XrmBase.LookupAttribute<"msdyn_servicetasktype">;
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_percentcomplete"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_actualduration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_estimatedduration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_workorder"): XrmBase.LookupAttribute<"msdyn_workorder">;
        getAttribute(attributeName: "msdyn_workorderincident"): XrmBase.LookupAttribute<"msdyn_workorderincident">;
        getAttribute(attributeName: "msdyn_customerasset"): XrmBase.LookupAttribute<"msdyn_customerasset">;
        getAttribute(attributeName: "msdyn_booking"): XrmBase.LookupAttribute<"bookableresourcebooking">;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_tasktype"): XrmBase.LookupControl<"msdyn_servicetasktype">;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "msdyn_percentcomplete"): XrmBase.BaseControl;
        getControl(controlName: "msdyn_actualduration"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_estimatedduration"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_workorder"): XrmBase.LookupControl<"msdyn_workorder">;
        getControl(controlName: "msdyn_workorderincident"): XrmBase.LookupControl<"msdyn_workorderincident">;
        getControl(controlName: "msdyn_customerasset"): XrmBase.LookupControl<"msdyn_customerasset">;
        getControl(controlName: "msdyn_booking"): XrmBase.LookupControl<"bookableresourcebooking">;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
