declare namespace Form.msdyn_forecastinstance.Main {
    namespace Information {
        namespace Tabs {
            interface Tab extends XrmBase.SectionCollectionBase {
                get(name: "section_1"): XrmBase.PageSection;
                get(name: "tab_2_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_actualamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_forecastdefinitionid"): XrmBase.LookupAttribute<"msdyn_forecastdefinition">;
            get(name: "msdyn_forecastrecurrenceid"): XrmBase.LookupAttribute<"msdyn_forecastrecurrence">;
            get(name: "msdyn_manualbestcaseamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_manualcommittedamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_manualpipelineamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_percentageachieved"): XrmBase.NumberAttribute;
            get(name: "msdyn_targetamount"): XrmBase.NumberAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_actualamount"): XrmBase.NumberControl;
            get(name: "msdyn_forecastdefinitionid"): XrmBase.LookupControl<"msdyn_forecastdefinition">;
            get(name: "msdyn_forecastrecurrenceid"): XrmBase.LookupControl<"msdyn_forecastrecurrence">;
            get(name: "msdyn_manualbestcaseamount"): XrmBase.NumberControl;
            get(name: "msdyn_manualcommittedamount"): XrmBase.NumberControl;
            get(name: "msdyn_manualpipelineamount"): XrmBase.NumberControl;
            get(name: "msdyn_percentageachieved"): XrmBase.NumberControl;
            get(name: "msdyn_targetamount"): XrmBase.NumberControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "tab"): XrmBase.PageTab<Tabs.Tab>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_forecastrecurrenceid"): XrmBase.LookupAttribute<"msdyn_forecastrecurrence">;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_forecastdefinitionid"): XrmBase.LookupAttribute<"msdyn_forecastdefinition">;
        getAttribute(attributeName: "msdyn_targetamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_manualpipelineamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_manualbestcaseamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_manualcommittedamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_actualamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_percentageachieved"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_forecastrecurrenceid"): XrmBase.LookupControl<"msdyn_forecastrecurrence">;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_forecastdefinitionid"): XrmBase.LookupControl<"msdyn_forecastdefinition">;
        getControl(controlName: "msdyn_targetamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_manualpipelineamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_manualbestcaseamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_manualcommittedamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_actualamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_percentageachieved"): XrmBase.NumberControl;
        getControl(controlName: string): undefined;
    }
}
