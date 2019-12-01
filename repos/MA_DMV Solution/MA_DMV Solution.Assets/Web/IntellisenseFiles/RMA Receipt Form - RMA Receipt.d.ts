declare namespace Form.msdyn_rmareceipt.Main {
    namespace RMAReceipt {
        namespace Tabs {
            interface c15e55f0be0b45f49350ee4a2f6578fa extends XrmBase.SectionCollectionBase {
                get(name: "{07d47361-9e6e-4d81-87ea-cfc744f763d1}"): XrmBase.PageSection;
                get(name: "{c15e55f0-be0b-45f4-9350-ee4a2f6578fa}_section_2"): XrmBase.PageSection;
                get(name: "{c15e55f0-be0b-45f4-9350-ee4a2f6578fa}_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_datereceived"): XrmBase.DateAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_rma"): XrmBase.LookupAttribute<"msdyn_rma">;
            get(name: "msdyn_shipvia"): XrmBase.LookupAttribute<"msdyn_shipvia">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_datereceived"): XrmBase.DateControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_rma"): XrmBase.LookupControl<"msdyn_rma">;
            get(name: "msdyn_shipvia"): XrmBase.LookupControl<"msdyn_shipvia">;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "productgrid"): XrmBase.SubGridControl<"msdyn_rmareceiptproduct">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{c15e55f0-be0b-45f4-9350-ee4a2f6578fa}"): XrmBase.PageTab<Tabs.c15e55f0be0b45f49350ee4a2f6578fa>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface RMAReceipt extends XrmBase.PageBase<RMAReceipt.Attributes, RMAReceipt.Tabs, RMAReceipt.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_rma"): XrmBase.LookupAttribute<"msdyn_rma">;
        getAttribute(attributeName: "msdyn_datereceived"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_shipvia"): XrmBase.LookupAttribute<"msdyn_shipvia">;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_rma"): XrmBase.LookupControl<"msdyn_rma">;
        getControl(controlName: "msdyn_datereceived"): XrmBase.DateControl;
        getControl(controlName: "msdyn_shipvia"): XrmBase.LookupControl<"msdyn_shipvia">;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "productgrid"): XrmBase.SubGridControl<"msdyn_rmareceiptproduct">;
        getControl(controlName: string): undefined;
    }
}
