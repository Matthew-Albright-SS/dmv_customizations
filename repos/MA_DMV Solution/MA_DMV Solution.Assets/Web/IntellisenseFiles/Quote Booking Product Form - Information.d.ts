declare namespace Form.msdyn_quotebookingproduct.Main {
    namespace Information {
        namespace Tabs {
            interface _79cc9db9681246138c6d1a07f7aff8b3 extends XrmBase.SectionCollectionBase {
                get(name: "{cc746554-b3e2-4b34-89c7-121a8d992983}"): XrmBase.PageSection;
                get(name: "{79cc9db9-6812-4613-8c6d-1a07f7aff8b3}_section_3"): XrmBase.PageSection;
                get(name: "{79cc9db9-6812-4613-8c6d-1a07f7aff8b3}_column_3_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_estimatedcost"): XrmBase.NumberAttribute;
            get(name: "msdyn_estimatedsalesamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_product"): XrmBase.LookupAttribute<"product">;
            get(name: "msdyn_quantity"): XrmBase.NumberAttribute;
            get(name: "msdyn_quotebookingsetup"): XrmBase.LookupAttribute<"msdyn_quotebookingsetup">;
            get(name: "msdyn_unit"): XrmBase.LookupAttribute<"uom">;
            get(name: "msdyn_unitamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_unitcostamount"): XrmBase.NumberAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_estimatedcost"): XrmBase.NumberControl;
            get(name: "msdyn_estimatedsalesamount"): XrmBase.NumberControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_product"): XrmBase.LookupControl<"product">;
            get(name: "msdyn_quantity"): XrmBase.NumberControl;
            get(name: "msdyn_quotebookingsetup"): XrmBase.LookupControl<"msdyn_quotebookingsetup">;
            get(name: "msdyn_unit"): XrmBase.LookupControl<"uom">;
            get(name: "msdyn_unitamount"): XrmBase.NumberControl;
            get(name: "msdyn_unitcostamount"): XrmBase.NumberControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{79cc9db9-6812-4613-8c6d-1a07f7aff8b3}"): XrmBase.PageTab<Tabs._79cc9db9681246138c6d1a07f7aff8b3>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_product"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "msdyn_quantity"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_quotebookingsetup"): XrmBase.LookupAttribute<"msdyn_quotebookingsetup">;
        getAttribute(attributeName: "msdyn_unit"): XrmBase.LookupAttribute<"uom">;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_unitcostamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_estimatedcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_unitamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_estimatedsalesamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_product"): XrmBase.LookupControl<"product">;
        getControl(controlName: "msdyn_quantity"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_quotebookingsetup"): XrmBase.LookupControl<"msdyn_quotebookingsetup">;
        getControl(controlName: "msdyn_unit"): XrmBase.LookupControl<"uom">;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_unitcostamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_estimatedcost"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_unitamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_estimatedsalesamount"): XrmBase.NumberControl;
        getControl(controlName: string): undefined;
    }
}
