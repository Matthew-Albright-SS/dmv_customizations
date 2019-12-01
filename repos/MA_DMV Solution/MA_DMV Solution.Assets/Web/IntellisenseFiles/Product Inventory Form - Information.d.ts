declare namespace Form.msdyn_productinventory.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_bin"): XrmBase.StringAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_product"): XrmBase.LookupAttribute<"product">;
            get(name: "msdyn_qtyallocated"): XrmBase.NumberAttribute;
            get(name: "msdyn_qtyavailable"): XrmBase.NumberAttribute;
            get(name: "msdyn_qtyonhand"): XrmBase.NumberAttribute;
            get(name: "msdyn_qtyonorder"): XrmBase.NumberAttribute;
            get(name: "msdyn_reorderpoint"): XrmBase.NumberAttribute;
            get(name: "msdyn_row"): XrmBase.StringAttribute;
            get(name: "msdyn_unit"): XrmBase.LookupAttribute<"uom">;
            get(name: "msdyn_warehouse"): XrmBase.LookupAttribute<"msdyn_warehouse">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_bin"): XrmBase.StringControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_product"): XrmBase.LookupControl<"product">;
            get(name: "msdyn_qtyallocated"): XrmBase.NumberControl;
            get(name: "msdyn_qtyavailable"): XrmBase.NumberControl;
            get(name: "msdyn_qtyonhand"): XrmBase.NumberControl;
            get(name: "msdyn_qtyonorder"): XrmBase.NumberControl;
            get(name: "msdyn_reorderpoint"): XrmBase.NumberControl;
            get(name: "msdyn_row"): XrmBase.StringControl;
            get(name: "msdyn_unit"): XrmBase.LookupControl<"uom">;
            get(name: "msdyn_warehouse"): XrmBase.LookupControl<"msdyn_warehouse">;
            get(name: "notescontrol"): XrmBase.StringControl;
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
        getAttribute(attributeName: "msdyn_warehouse"): XrmBase.LookupAttribute<"msdyn_warehouse">;
        getAttribute(attributeName: "msdyn_product"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "msdyn_unit"): XrmBase.LookupAttribute<"uom">;
        getAttribute(attributeName: "msdyn_reorderpoint"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_bin"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_row"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_qtyonorder"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_qtyonhand"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_qtyallocated"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_qtyavailable"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_warehouse"): XrmBase.LookupControl<"msdyn_warehouse">;
        getControl(controlName: "msdyn_product"): XrmBase.LookupControl<"product">;
        getControl(controlName: "msdyn_unit"): XrmBase.LookupControl<"uom">;
        getControl(controlName: "msdyn_reorderpoint"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_bin"): XrmBase.StringControl;
        getControl(controlName: "msdyn_row"): XrmBase.StringControl;
        getControl(controlName: "msdyn_qtyonorder"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_qtyonhand"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_qtyallocated"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_qtyavailable"): XrmBase.NumberControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
