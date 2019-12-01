declare namespace Form.msdyn_forecastdefinition.Main {
    namespace Information {
        namespace Tabs {
            interface Tab2 extends XrmBase.SectionCollectionBase {
                get(name: "tab_2_section_1"): XrmBase.PageSection;
                get(name: "tab_2_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_fiscalmonth"): XrmBase.OptionSetAttribute<msdyn_fcdefinition_msdyn_fiscalmonth>;
            get(name: "msdyn_fiscalquarter"): XrmBase.OptionSetAttribute<msdyn_fcdefinition_msdyn_fiscalquarter>;
            get(name: "msdyn_fiscalyear"): XrmBase.OptionSetAttribute<msdyn_forecastdefinition_msdyn_fiscalyear>;
            get(name: "msdyn_forecastdefinitionname"): XrmBase.StringAttribute;
            get(name: "msdyn_forecastperiodtype"): XrmBase.OptionSetAttribute<msdyn_forecastdefinition_msdyn_forecastperiodtype>;
            get(name: "msdyn_metricid"): XrmBase.LookupAttribute<"metric">;
            get(name: "msdyn_numberofrecurrences"): XrmBase.NumberAttribute;
            get(name: "msdyn_quotasource"): XrmBase.OptionSetAttribute<msdyn_forecastdefinition_msdyn_quotasource>;
            get(name: "msdyn_rollupquery"): XrmBase.LookupAttribute<"goalrollupquery">;
            get(name: "msdyn_validfrom"): XrmBase.DateAttribute;
            get(name: "msdyn_validto"): XrmBase.DateAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_fiscalmonth"): XrmBase.OptionSetControl<msdyn_fcdefinition_msdyn_fiscalmonth>;
            get(name: "msdyn_fiscalquarter"): XrmBase.OptionSetControl<msdyn_fcdefinition_msdyn_fiscalquarter>;
            get(name: "msdyn_fiscalyear"): XrmBase.OptionSetControl<msdyn_forecastdefinition_msdyn_fiscalyear>;
            get(name: "msdyn_forecastdefinitionname"): XrmBase.StringControl;
            get(name: "msdyn_forecastperiodtype"): XrmBase.OptionSetControl<msdyn_forecastdefinition_msdyn_forecastperiodtype>;
            get(name: "msdyn_metricid"): XrmBase.LookupControl<"metric">;
            get(name: "msdyn_numberofrecurrences"): XrmBase.NumberControl;
            get(name: "msdyn_quotasource"): XrmBase.OptionSetControl<msdyn_forecastdefinition_msdyn_quotasource>;
            get(name: "msdyn_rollupquery"): XrmBase.LookupControl<"goalrollupquery">;
            get(name: "msdyn_validfrom"): XrmBase.DateControl;
            get(name: "msdyn_validto"): XrmBase.DateControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "tab_2"): XrmBase.PageTab<Tabs.Tab2>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_forecastdefinitionname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_metricid"): XrmBase.LookupAttribute<"metric">;
        getAttribute(attributeName: "msdyn_quotasource"): XrmBase.OptionSetAttribute<msdyn_forecastdefinition_msdyn_quotasource>;
        getAttribute(attributeName: "msdyn_rollupquery"): XrmBase.LookupAttribute<"goalrollupquery">;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_forecastperiodtype"): XrmBase.OptionSetAttribute<msdyn_forecastdefinition_msdyn_forecastperiodtype>;
        getAttribute(attributeName: "msdyn_fiscalyear"): XrmBase.OptionSetAttribute<msdyn_forecastdefinition_msdyn_fiscalyear>;
        getAttribute(attributeName: "msdyn_fiscalquarter"): XrmBase.OptionSetAttribute<msdyn_fcdefinition_msdyn_fiscalquarter>;
        getAttribute(attributeName: "msdyn_fiscalmonth"): XrmBase.OptionSetAttribute<msdyn_fcdefinition_msdyn_fiscalmonth>;
        getAttribute(attributeName: "msdyn_numberofrecurrences"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_validfrom"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_validto"): XrmBase.DateAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_forecastdefinitionname"): XrmBase.StringControl;
        getControl(controlName: "msdyn_metricid"): XrmBase.LookupControl<"metric">;
        getControl(controlName: "msdyn_quotasource"): XrmBase.OptionSetControl<msdyn_forecastdefinition_msdyn_quotasource>;
        getControl(controlName: "msdyn_rollupquery"): XrmBase.LookupControl<"goalrollupquery">;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_forecastperiodtype"): XrmBase.OptionSetControl<msdyn_forecastdefinition_msdyn_forecastperiodtype>;
        getControl(controlName: "msdyn_fiscalyear"): XrmBase.OptionSetControl<msdyn_forecastdefinition_msdyn_fiscalyear>;
        getControl(controlName: "msdyn_fiscalquarter"): XrmBase.OptionSetControl<msdyn_fcdefinition_msdyn_fiscalquarter>;
        getControl(controlName: "msdyn_fiscalmonth"): XrmBase.OptionSetControl<msdyn_fcdefinition_msdyn_fiscalmonth>;
        getControl(controlName: "msdyn_numberofrecurrences"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_validfrom"): XrmBase.DateControl;
        getControl(controlName: "msdyn_validto"): XrmBase.DateControl;
        getControl(controlName: string): undefined;
    }
}
