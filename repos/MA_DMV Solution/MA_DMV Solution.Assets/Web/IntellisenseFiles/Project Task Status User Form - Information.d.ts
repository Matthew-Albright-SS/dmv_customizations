declare namespace Form.msdyn_projecttaskstatususer.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "modifiedon"): XrmBase.DateAttribute;
            get(name: "msdyn_bookableresource"): XrmBase.LookupAttribute<"bookableresource">;
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_expectedcompletiondate"): XrmBase.DateAttribute;
            get(name: "msdyn_expectedhourstocomplete"): XrmBase.NumberAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_percentcomplete"): XrmBase.NumberAttribute;
            get(name: "msdyn_projecttaskid"): XrmBase.LookupAttribute<"msdyn_projecttask">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "modifiedon"): XrmBase.DateControl;
            get(name: "msdyn_bookableresource"): XrmBase.LookupControl<"bookableresource">;
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_expectedcompletiondate"): XrmBase.DateControl;
            get(name: "msdyn_expectedhourstocomplete"): XrmBase.NumberControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_percentcomplete"): XrmBase.NumberControl;
            get(name: "msdyn_projecttaskid"): XrmBase.LookupControl<"msdyn_projecttask">;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "modifiedon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_bookableresource"): XrmBase.LookupAttribute<"bookableresource">;
        getAttribute(attributeName: "msdyn_projecttaskid"): XrmBase.LookupAttribute<"msdyn_projecttask">;
        getAttribute(attributeName: "msdyn_percentcomplete"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_expectedhourstocomplete"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_expectedcompletiondate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "modifiedon"): XrmBase.DateControl;
        getControl(controlName: "msdyn_bookableresource"): XrmBase.LookupControl<"bookableresource">;
        getControl(controlName: "msdyn_projecttaskid"): XrmBase.LookupControl<"msdyn_projecttask">;
        getControl(controlName: "msdyn_percentcomplete"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_expectedhourstocomplete"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_expectedcompletiondate"): XrmBase.DateControl;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
