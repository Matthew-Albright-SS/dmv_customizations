declare namespace Form.msdyn_clientextension.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_extensiontype"): XrmBase.OptionSetAttribute<msdyn_clientextension_msdyn_extensiontype>;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_rank"): XrmBase.NumberAttribute;
            get(name: "msdyn_scheduleboardsettingid"): XrmBase.LookupAttribute<"msdyn_scheduleboardsetting">;
            get(name: "msdyn_webresource"): XrmBase.StringAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_extensiontype"): XrmBase.OptionSetControl<msdyn_clientextension_msdyn_extensiontype>;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_rank"): XrmBase.NumberControl;
            get(name: "msdyn_scheduleboardsettingid"): XrmBase.LookupControl<"msdyn_scheduleboardsetting">;
            get(name: "msdyn_webresource"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "webresource_lookup"): XrmBase.BaseControl;
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
        getAttribute(attributeName: "msdyn_webresource"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_extensiontype"): XrmBase.OptionSetAttribute<msdyn_clientextension_msdyn_extensiontype>;
        getAttribute(attributeName: "msdyn_scheduleboardsettingid"): XrmBase.LookupAttribute<"msdyn_scheduleboardsetting">;
        getAttribute(attributeName: "msdyn_rank"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "webresource_lookup"): XrmBase.BaseControl;
        getControl(controlName: "msdyn_webresource"): XrmBase.StringControl;
        getControl(controlName: "msdyn_extensiontype"): XrmBase.OptionSetControl<msdyn_clientextension_msdyn_extensiontype>;
        getControl(controlName: "msdyn_scheduleboardsettingid"): XrmBase.LookupControl<"msdyn_scheduleboardsetting">;
        getControl(controlName: "msdyn_rank"): XrmBase.NumberControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: string): undefined;
    }
}
