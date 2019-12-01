declare namespace Form.msdyn_timeoffrequest.Main {
    namespace TimeOffRequestMobile {
        namespace Tabs {
            interface Fstabgeneral extends XrmBase.SectionCollectionBase {
                get(name: "fstab_general_section_general"): XrmBase.PageSection;
                get(name: "fstab_general_section_2"): XrmBase.PageSection;
                get(name: "fstab_general_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Fstabother extends XrmBase.SectionCollectionBase {
                get(name: "tab_3_section_1"): XrmBase.PageSection;
                get(name: "tab_3_section_2"): XrmBase.PageSection;
                get(name: "tab_3_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Fstabsubgrids extends XrmBase.SectionCollectionBase {
                get(name: "fstab_sub_grids_section"): XrmBase.PageSection;
                get(name: "fstab_sub_grids_section_2"): XrmBase.PageSection;
                get(name: "fstab_sub_grids_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "createdon"): XrmBase.DateAttribute;
            get(name: "msdyn_approvedby"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "msdyn_endtime"): XrmBase.DateAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_resource"): XrmBase.LookupAttribute<"bookableresource">;
            get(name: "msdyn_starttime"): XrmBase.DateAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "createdon"): XrmBase.DateControl;
            get(name: "msdyn_approvedby"): XrmBase.LookupControl<"systemuser">;
            get(name: "msdyn_endtime"): XrmBase.DateControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_resource"): XrmBase.LookupControl<"bookableresource">;
            get(name: "msdyn_starttime"): XrmBase.DateControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "fstab_general"): XrmBase.PageTab<Tabs.Fstabgeneral>;
            get(name: "fstab_other"): XrmBase.PageTab<Tabs.Fstabother>;
            get(name: "fstab_sub_grids"): XrmBase.PageTab<Tabs.Fstabsubgrids>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface TimeOffRequestMobile extends XrmBase.PageBase<TimeOffRequestMobile.Attributes, TimeOffRequestMobile.Tabs, TimeOffRequestMobile.Controls> {
        getAttribute(attributeName: "msdyn_resource"): XrmBase.LookupAttribute<"bookableresource">;
        getAttribute(attributeName: "msdyn_starttime"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_endtime"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_approvedby"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "createdon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_resource"): XrmBase.LookupControl<"bookableresource">;
        getControl(controlName: "msdyn_starttime"): XrmBase.DateControl;
        getControl(controlName: "msdyn_endtime"): XrmBase.DateControl;
        getControl(controlName: "msdyn_approvedby"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "createdon"): XrmBase.DateControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
