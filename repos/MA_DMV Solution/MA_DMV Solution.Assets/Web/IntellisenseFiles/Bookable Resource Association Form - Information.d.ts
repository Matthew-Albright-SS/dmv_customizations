declare namespace Form.msdyn_bookableresourceassociation.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_fromdate"): XrmBase.DateAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_resource1"): XrmBase.LookupAttribute<"bookableresource">;
            get(name: "msdyn_resource2"): XrmBase.LookupAttribute<"bookableresource">;
            get(name: "msdyn_todate"): XrmBase.DateAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_fromdate"): XrmBase.DateControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_resource1"): XrmBase.LookupControl<"bookableresource">;
            get(name: "msdyn_resource2"): XrmBase.LookupControl<"bookableresource">;
            get(name: "msdyn_todate"): XrmBase.DateControl;
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
        getAttribute(attributeName: "msdyn_resource1"): XrmBase.LookupAttribute<"bookableresource">;
        getAttribute(attributeName: "msdyn_resource2"): XrmBase.LookupAttribute<"bookableresource">;
        getAttribute(attributeName: "msdyn_fromdate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_todate"): XrmBase.DateAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_resource1"): XrmBase.LookupControl<"bookableresource">;
        getControl(controlName: "msdyn_resource2"): XrmBase.LookupControl<"bookableresource">;
        getControl(controlName: "msdyn_fromdate"): XrmBase.DateControl;
        getControl(controlName: "msdyn_todate"): XrmBase.DateControl;
        getControl(controlName: string): undefined;
    }
}
