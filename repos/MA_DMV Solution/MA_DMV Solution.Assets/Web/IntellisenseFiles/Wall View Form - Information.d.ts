declare namespace Form.msdyn_wallsavedquery.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_isvisible"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_postconfigurationid"): XrmBase.LookupAttribute<"msdyn_postconfig">;
            get(name: "msdyn_savedqueryid"): XrmBase.StringAttribute;
            get(name: "msdyn_savedqueryname"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_isvisible"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_postconfigurationid"): XrmBase.LookupControl<"msdyn_postconfig">;
            get(name: "msdyn_savedqueryid"): XrmBase.StringControl;
            get(name: "msdyn_savedqueryname"): XrmBase.StringControl;
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
        getAttribute(attributeName: "msdyn_isvisible"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_postconfigurationid"): XrmBase.LookupAttribute<"msdyn_postconfig">;
        getAttribute(attributeName: "msdyn_savedqueryid"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_savedqueryname"): XrmBase.StringControl;
        getControl(controlName: "msdyn_isvisible"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_postconfigurationid"): XrmBase.LookupControl<"msdyn_postconfig">;
        getControl(controlName: "msdyn_savedqueryid"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
