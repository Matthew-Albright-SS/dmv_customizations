declare namespace Form.msdyn_wallsavedqueryusersettings.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_isvisible"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_savedqueryname"): XrmBase.StringAttribute;
            get(name: "msdyn_userid"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "msdyn_wallsavedqueryid"): XrmBase.LookupAttribute<"msdyn_wallsavedquery">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_isvisible"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_savedqueryname"): XrmBase.StringControl;
            get(name: "msdyn_userid"): XrmBase.LookupControl<"systemuser">;
            get(name: "msdyn_wallsavedqueryid"): XrmBase.LookupControl<"msdyn_wallsavedquery">;
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
        getAttribute(attributeName: "msdyn_savedqueryname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_wallsavedqueryid"): XrmBase.LookupAttribute<"msdyn_wallsavedquery">;
        getAttribute(attributeName: "msdyn_userid"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "msdyn_isvisible"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_savedqueryname"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_wallsavedqueryid"): XrmBase.LookupControl<"msdyn_wallsavedquery">;
        getControl(controlName: "msdyn_userid"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "msdyn_isvisible"): XrmBase.OptionSetControl<any>;
        getControl(controlName: string): undefined;
    }
}
