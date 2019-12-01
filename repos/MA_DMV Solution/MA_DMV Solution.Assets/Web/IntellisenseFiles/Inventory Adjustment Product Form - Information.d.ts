declare namespace Form.msdyn_inventoryadjustmentproduct.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_inventoryadjustment"): XrmBase.LookupAttribute<"msdyn_inventoryadjustment">;
            get(name: "msdyn_inventorytransfer"): XrmBase.LookupAttribute<"msdyn_inventorytransfer">;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_product"): XrmBase.LookupAttribute<"product">;
            get(name: "msdyn_quantity"): XrmBase.NumberAttribute;
            get(name: "msdyn_unit"): XrmBase.LookupAttribute<"uom">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_inventoryadjustment"): XrmBase.LookupControl<"msdyn_inventoryadjustment">;
            get(name: "msdyn_inventorytransfer"): XrmBase.LookupControl<"msdyn_inventorytransfer">;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_product"): XrmBase.LookupControl<"product">;
            get(name: "msdyn_quantity"): XrmBase.NumberControl;
            get(name: "msdyn_unit"): XrmBase.LookupControl<"uom">;
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
        getAttribute(attributeName: "msdyn_product"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_unit"): XrmBase.LookupAttribute<"uom">;
        getAttribute(attributeName: "msdyn_quantity"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_inventoryadjustment"): XrmBase.LookupAttribute<"msdyn_inventoryadjustment">;
        getAttribute(attributeName: "msdyn_inventorytransfer"): XrmBase.LookupAttribute<"msdyn_inventorytransfer">;
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_product"): XrmBase.LookupControl<"product">;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_unit"): XrmBase.LookupControl<"uom">;
        getControl(controlName: "msdyn_quantity"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_inventoryadjustment"): XrmBase.LookupControl<"msdyn_inventoryadjustment">;
        getControl(controlName: "msdyn_inventorytransfer"): XrmBase.LookupControl<"msdyn_inventorytransfer">;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
