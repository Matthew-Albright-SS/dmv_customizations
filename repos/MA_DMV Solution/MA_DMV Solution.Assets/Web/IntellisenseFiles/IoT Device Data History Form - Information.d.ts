declare namespace Form.msdyn_iotdevicedatahistory.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_connectionstate"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_connectionstateupdatedtime"): XrmBase.DateAttribute;
            get(name: "msdyn_device"): XrmBase.LookupAttribute<"msdyn_iotdevice">;
            get(name: "msdyn_devicereportedproperties"): XrmBase.StringAttribute;
            get(name: "msdyn_lastactivitytime"): XrmBase.DateAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_status"): XrmBase.OptionSetAttribute<msdyn_iotdevicedatahistory_msdyn_status>;
            get(name: "msdyn_statusreason"): XrmBase.StringAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_connectionstate"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_connectionstateupdatedtime"): XrmBase.DateControl;
            get(name: "msdyn_device"): XrmBase.LookupControl<"msdyn_iotdevice">;
            get(name: "msdyn_devicereportedproperties"): XrmBase.StringControl;
            get(name: "msdyn_lastactivitytime"): XrmBase.DateControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_status"): XrmBase.OptionSetControl<msdyn_iotdevicedatahistory_msdyn_status>;
            get(name: "msdyn_statusreason"): XrmBase.StringControl;
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
        getAttribute(attributeName: "msdyn_device"): XrmBase.LookupAttribute<"msdyn_iotdevice">;
        getAttribute(attributeName: "msdyn_lastactivitytime"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_status"): XrmBase.OptionSetAttribute<msdyn_iotdevicedatahistory_msdyn_status>;
        getAttribute(attributeName: "msdyn_statusreason"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_connectionstate"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_connectionstateupdatedtime"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_devicereportedproperties"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_device"): XrmBase.LookupControl<"msdyn_iotdevice">;
        getControl(controlName: "msdyn_lastactivitytime"): XrmBase.DateControl;
        getControl(controlName: "msdyn_status"): XrmBase.OptionSetControl<msdyn_iotdevicedatahistory_msdyn_status>;
        getControl(controlName: "msdyn_statusreason"): XrmBase.StringControl;
        getControl(controlName: "msdyn_connectionstate"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_connectionstateupdatedtime"): XrmBase.DateControl;
        getControl(controlName: "msdyn_devicereportedproperties"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
