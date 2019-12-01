declare namespace Form.dmv_contactvehicle.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "dmv_contactid"): XrmBase.LookupAttribute<"contact">;
            get(name: "dmv_enddate"): XrmBase.DateAttribute;
            get(name: "dmv_name"): XrmBase.StringAttribute;
            get(name: "dmv_startdate"): XrmBase.DateAttribute;
            get(name: "dmv_vehicleid"): XrmBase.LookupAttribute<"dmv_vehicle">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "dmv_contactid"): XrmBase.LookupControl<"contact">;
            get(name: "dmv_enddate"): XrmBase.DateControl;
            get(name: "dmv_name"): XrmBase.StringControl;
            get(name: "dmv_startdate"): XrmBase.DateControl;
            get(name: "dmv_vehicleid"): XrmBase.LookupControl<"dmv_vehicle">;
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
        getAttribute(attributeName: "dmv_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "dmv_contactid"): XrmBase.LookupAttribute<"contact">;
        getAttribute(attributeName: "dmv_vehicleid"): XrmBase.LookupAttribute<"dmv_vehicle">;
        getAttribute(attributeName: "dmv_startdate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "dmv_enddate"): XrmBase.DateAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "dmv_name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "dmv_contactid"): XrmBase.LookupControl<"contact">;
        getControl(controlName: "dmv_vehicleid"): XrmBase.LookupControl<"dmv_vehicle">;
        getControl(controlName: "dmv_startdate"): XrmBase.DateControl;
        getControl(controlName: "dmv_enddate"): XrmBase.DateControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
