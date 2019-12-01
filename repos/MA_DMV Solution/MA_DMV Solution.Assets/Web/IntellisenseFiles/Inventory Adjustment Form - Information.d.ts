declare namespace Form.msdyn_inventoryadjustment.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_adjustedbyresource"): XrmBase.LookupAttribute<"bookableresource">;
            get(name: "msdyn_adjustmenttime"): XrmBase.DateAttribute;
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_requestedbyresource"): XrmBase.LookupAttribute<"bookableresource">;
            get(name: "msdyn_warehouse"): XrmBase.LookupAttribute<"msdyn_warehouse">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "inventoryadjustmentproductssubgrid"): XrmBase.SubGridControl<"msdyn_inventoryadjustmentproduct">;
            get(name: "msdyn_adjustedbyresource"): XrmBase.LookupControl<"bookableresource">;
            get(name: "msdyn_adjustmenttime"): XrmBase.DateControl;
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_requestedbyresource"): XrmBase.LookupControl<"bookableresource">;
            get(name: "msdyn_warehouse"): XrmBase.LookupControl<"msdyn_warehouse">;
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
        getAttribute(attributeName: "msdyn_adjustedbyresource"): XrmBase.LookupAttribute<"bookableresource">;
        getAttribute(attributeName: "msdyn_adjustmenttime"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_requestedbyresource"): XrmBase.LookupAttribute<"bookableresource">;
        getAttribute(attributeName: "msdyn_warehouse"): XrmBase.LookupAttribute<"msdyn_warehouse">;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_adjustedbyresource"): XrmBase.LookupControl<"bookableresource">;
        getControl(controlName: "msdyn_adjustmenttime"): XrmBase.DateControl;
        getControl(controlName: "msdyn_requestedbyresource"): XrmBase.LookupControl<"bookableresource">;
        getControl(controlName: "msdyn_warehouse"): XrmBase.LookupControl<"msdyn_warehouse">;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "inventoryadjustmentproductssubgrid"): XrmBase.SubGridControl<"msdyn_inventoryadjustmentproduct">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
