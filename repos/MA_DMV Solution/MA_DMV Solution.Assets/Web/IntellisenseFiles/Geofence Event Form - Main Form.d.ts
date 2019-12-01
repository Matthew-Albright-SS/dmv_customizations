declare namespace Form.msdyn_geofenceevent.Main {
    namespace MainForm {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_geofence"): XrmBase.LookupAttribute<"msdyn_geofence">;
            get(name: "msdyn_geotrackedentity"): XrmBase.StringAttribute;
            get(name: "msdyn_geotrackedrecord"): XrmBase.StringAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_geofence"): XrmBase.LookupControl<"msdyn_geofence">;
            get(name: "msdyn_geotrackedentity"): XrmBase.StringControl;
            get(name: "msdyn_geotrackedrecord"): XrmBase.StringControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
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
    interface MainForm extends XrmBase.PageBase<MainForm.Attributes, MainForm.Tabs, MainForm.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_geofence"): XrmBase.LookupAttribute<"msdyn_geofence">;
        getAttribute(attributeName: "msdyn_geotrackedentity"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_geotrackedrecord"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_geofence"): XrmBase.LookupControl<"msdyn_geofence">;
        getControl(controlName: "msdyn_geotrackedentity"): XrmBase.StringControl;
        getControl(controlName: "msdyn_geotrackedrecord"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
