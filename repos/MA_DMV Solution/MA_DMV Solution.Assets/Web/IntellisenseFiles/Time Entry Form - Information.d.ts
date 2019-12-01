declare namespace Form.msdyn_timeentry.Main {
    namespace Information {
        namespace Tabs {
            interface ae8b7cdd484b49a8a00dc201927d5729 extends XrmBase.SectionCollectionBase {
                get(name: "{ae8b7cdd-484b-49a8-a00d-c201927d5729}"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_date"): XrmBase.DateAttribute;
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_duration"): XrmBase.NumberAttribute;
            get(name: "msdyn_entrystatus"): XrmBase.OptionSetAttribute<msdyn_timeentrystatus>;
            get(name: "msdyn_externaldescription"): XrmBase.StringAttribute;
            get(name: "msdyn_project"): XrmBase.LookupAttribute<"msdyn_project">;
            get(name: "msdyn_projecttask"): XrmBase.LookupAttribute<"msdyn_projecttask">;
            get(name: "msdyn_resourcecategory"): XrmBase.LookupAttribute<"bookableresourcecategory">;
            get(name: "msdyn_type"): XrmBase.OptionSetAttribute<msdyn_timeentrytype>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_date"): XrmBase.DateControl;
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_duration"): XrmBase.NumberControl;
            get(name: "msdyn_entrystatus"): XrmBase.OptionSetControl<msdyn_timeentrystatus>;
            get(name: "msdyn_externaldescription"): XrmBase.StringControl;
            get(name: "msdyn_project"): XrmBase.LookupControl<"msdyn_project">;
            get(name: "msdyn_projecttask"): XrmBase.LookupControl<"msdyn_projecttask">;
            get(name: "msdyn_resourcecategory"): XrmBase.LookupControl<"bookableresourcecategory">;
            get(name: "msdyn_type"): XrmBase.OptionSetControl<msdyn_timeentrytype>;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{ae8b7cdd-484b-49a8-a00d-c201927d5729}"): XrmBase.PageTab<Tabs.ae8b7cdd484b49a8a00dc201927d5729>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_date"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_duration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_type"): XrmBase.OptionSetAttribute<msdyn_timeentrytype>;
        getAttribute(attributeName: "msdyn_project"): XrmBase.LookupAttribute<"msdyn_project">;
        getAttribute(attributeName: "msdyn_projecttask"): XrmBase.LookupAttribute<"msdyn_projecttask">;
        getAttribute(attributeName: "msdyn_resourcecategory"): XrmBase.LookupAttribute<"bookableresourcecategory">;
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_externaldescription"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_entrystatus"): XrmBase.OptionSetAttribute<msdyn_timeentrystatus>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_date"): XrmBase.DateControl;
        getControl(controlName: "msdyn_duration"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_type"): XrmBase.OptionSetControl<msdyn_timeentrytype>;
        getControl(controlName: "msdyn_project"): XrmBase.LookupControl<"msdyn_project">;
        getControl(controlName: "msdyn_projecttask"): XrmBase.LookupControl<"msdyn_projecttask">;
        getControl(controlName: "msdyn_resourcecategory"): XrmBase.LookupControl<"bookableresourcecategory">;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "msdyn_externaldescription"): XrmBase.StringControl;
        getControl(controlName: "msdyn_entrystatus"): XrmBase.OptionSetControl<msdyn_timeentrystatus>;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
