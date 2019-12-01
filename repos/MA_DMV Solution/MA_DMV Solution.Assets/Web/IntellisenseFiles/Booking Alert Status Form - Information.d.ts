declare namespace Form.msdyn_bookingalertstatus.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_bookingalert"): XrmBase.LookupAttribute<"msdyn_bookingalert">;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_nexttimetoshow"): XrmBase.DateAttribute;
            get(name: "msdyn_status"): XrmBase.OptionSetAttribute<msdyn_bookingalertstatus_msdyn_status>;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_bookingalert"): XrmBase.LookupControl<"msdyn_bookingalert">;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_nexttimetoshow"): XrmBase.DateControl;
            get(name: "msdyn_status"): XrmBase.OptionSetControl<msdyn_bookingalertstatus_msdyn_status>;
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
        getAttribute(attributeName: "msdyn_bookingalert"): XrmBase.LookupAttribute<"msdyn_bookingalert">;
        getAttribute(attributeName: "msdyn_status"): XrmBase.OptionSetAttribute<msdyn_bookingalertstatus_msdyn_status>;
        getAttribute(attributeName: "msdyn_nexttimetoshow"): XrmBase.DateAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_bookingalert"): XrmBase.LookupControl<"msdyn_bookingalert">;
        getControl(controlName: "msdyn_status"): XrmBase.OptionSetControl<msdyn_bookingalertstatus_msdyn_status>;
        getControl(controlName: "msdyn_nexttimetoshow"): XrmBase.DateControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
