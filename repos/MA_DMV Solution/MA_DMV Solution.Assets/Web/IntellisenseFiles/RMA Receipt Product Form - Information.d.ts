declare namespace Form.msdyn_rmareceiptproduct.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_quantity"): XrmBase.NumberAttribute;
            get(name: "msdyn_rma"): XrmBase.LookupAttribute<"msdyn_rma">;
            get(name: "msdyn_rmaproduct"): XrmBase.LookupAttribute<"msdyn_rmaproduct">;
            get(name: "msdyn_rmareceipt"): XrmBase.LookupAttribute<"msdyn_rmareceipt">;
            get(name: "msdyn_rtv"): XrmBase.LookupAttribute<"msdyn_rtv">;
            get(name: "msdyn_rtvproduct"): XrmBase.LookupAttribute<"msdyn_rtvproduct">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_quantity"): XrmBase.NumberControl;
            get(name: "msdyn_rma"): XrmBase.LookupControl<"msdyn_rma">;
            get(name: "msdyn_rmaproduct"): XrmBase.LookupControl<"msdyn_rmaproduct">;
            get(name: "msdyn_rmareceipt"): XrmBase.LookupControl<"msdyn_rmareceipt">;
            get(name: "msdyn_rtv"): XrmBase.LookupControl<"msdyn_rtv">;
            get(name: "msdyn_rtvproduct"): XrmBase.LookupControl<"msdyn_rtvproduct">;
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
        getAttribute(attributeName: "msdyn_rma"): XrmBase.LookupAttribute<"msdyn_rma">;
        getAttribute(attributeName: "msdyn_rmaproduct"): XrmBase.LookupAttribute<"msdyn_rmaproduct">;
        getAttribute(attributeName: "msdyn_rmareceipt"): XrmBase.LookupAttribute<"msdyn_rmareceipt">;
        getAttribute(attributeName: "msdyn_quantity"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_rtv"): XrmBase.LookupAttribute<"msdyn_rtv">;
        getAttribute(attributeName: "msdyn_rtvproduct"): XrmBase.LookupAttribute<"msdyn_rtvproduct">;
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_rma"): XrmBase.LookupControl<"msdyn_rma">;
        getControl(controlName: "msdyn_rmaproduct"): XrmBase.LookupControl<"msdyn_rmaproduct">;
        getControl(controlName: "msdyn_rmareceipt"): XrmBase.LookupControl<"msdyn_rmareceipt">;
        getControl(controlName: "msdyn_quantity"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_rtv"): XrmBase.LookupControl<"msdyn_rtv">;
        getControl(controlName: "msdyn_rtvproduct"): XrmBase.LookupControl<"msdyn_rtvproduct">;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
