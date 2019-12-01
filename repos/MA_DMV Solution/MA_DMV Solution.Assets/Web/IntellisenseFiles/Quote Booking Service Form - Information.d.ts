declare namespace Form.msdyn_quotebookingservice.Main {
    namespace Information {
        namespace Tabs {
            interface _66b308cff82144e8997a88593f18144f extends XrmBase.SectionCollectionBase {
                get(name: "{8f706d5b-6cb5-4a94-a35a-8aadcf2d33f4}"): XrmBase.PageSection;
                get(name: "{66b308cf-f821-44e8-997a-88593f18144f}_section_3"): XrmBase.PageSection;
                get(name: "{66b308cf-f821-44e8-997a-88593f18144f}_column_3_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_duration"): XrmBase.NumberAttribute;
            get(name: "msdyn_estimatedcostamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_estimatedsalesamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_minimumchargeamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_minimumchargeduration"): XrmBase.NumberAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_quotebookingsetup"): XrmBase.LookupAttribute<"msdyn_quotebookingsetup">;
            get(name: "msdyn_service"): XrmBase.LookupAttribute<"product">;
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
            get(name: "msdyn_duration"): XrmBase.NumberControl;
            get(name: "msdyn_estimatedcostamount"): XrmBase.NumberControl;
            get(name: "msdyn_estimatedsalesamount"): XrmBase.NumberControl;
            get(name: "msdyn_minimumchargeamount"): XrmBase.NumberControl;
            get(name: "msdyn_minimumchargeduration"): XrmBase.NumberControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_quotebookingsetup"): XrmBase.LookupControl<"msdyn_quotebookingsetup">;
            get(name: "msdyn_service"): XrmBase.LookupControl<"product">;
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
            get(name: "{66b308cf-f821-44e8-997a-88593f18144f}"): XrmBase.PageTab<Tabs._66b308cff82144e8997a88593f18144f>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_service"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "msdyn_quotebookingsetup"): XrmBase.LookupAttribute<"msdyn_quotebookingsetup">;
        getAttribute(attributeName: "msdyn_unit"): XrmBase.LookupAttribute<"uom">;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_duration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_minimumchargeamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_minimumchargeduration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_unitcostamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_estimatedcostamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_unitamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_estimatedsalesamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_service"): XrmBase.LookupControl<"product">;
        getControl(controlName: "msdyn_quotebookingsetup"): XrmBase.LookupControl<"msdyn_quotebookingsetup">;
        getControl(controlName: "msdyn_unit"): XrmBase.LookupControl<"uom">;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_duration"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_minimumchargeamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_minimumchargeduration"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_unitcostamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_estimatedcostamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_unitamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_estimatedsalesamount"): XrmBase.NumberControl;
        getControl(controlName: string): undefined;
    }
}
