declare namespace Form.msdyn_incidenttype.Main {
    namespace Information {
        namespace Tabs {
            interface c6408e8549e74216bf96986a20c64ecb extends XrmBase.SectionCollectionBase {
                get(name: "{aa02fbb3-348e-4f8c-bc8e-1fe3f9bd7d90}"): XrmBase.PageSection;
                get(name: "{2405DB6B-E18C-49E5-A76B-505837745C84}"): XrmBase.PageSection;
                get(name: "{c6408e85-49e7-4216-bf96-986a20c64ecb}_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface F1tabdetails extends XrmBase.SectionCollectionBase {
                get(name: "tab_3_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab4 extends XrmBase.SectionCollectionBase {
                get(name: "tab_4_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab5 extends XrmBase.SectionCollectionBase {
                get(name: "tab_5_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab6 extends XrmBase.SectionCollectionBase {
                get(name: "tab_6_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab7 extends XrmBase.SectionCollectionBase {
                get(name: "tab_7_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_copyincidentitemstoagreement"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_defaultworkordertype"): XrmBase.LookupAttribute<"msdyn_workordertype">;
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_estimatedduration"): XrmBase.NumberAttribute;
            get(name: "msdyn_lastcalculatedtime"): XrmBase.DateAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_suggestedduration"): XrmBase.NumberAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "Characteristics"): XrmBase.SubGridControl<"msdyn_incidenttypecharacteristic">;
            get(name: "incidentproductssubgrid"): XrmBase.SubGridControl<"msdyn_incidenttypeproduct">;
            get(name: "incidentservicessubgrid"): XrmBase.SubGridControl<"msdyn_incidenttypeservice">;
            get(name: "msdyn_copyincidentitemstoagreement"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_defaultworkordertype"): XrmBase.LookupControl<"msdyn_workordertype">;
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_estimatedduration"): XrmBase.NumberControl;
            get(name: "msdyn_lastcalculatedtime"): XrmBase.DateControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_suggestedduration"): XrmBase.NumberControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "servicetasksgrid"): XrmBase.SubGridControl<"msdyn_incidenttypeservicetask">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{c6408e85-49e7-4216-bf96-986a20c64ecb}"): XrmBase.PageTab<Tabs.c6408e8549e74216bf96986a20c64ecb>;
            get(name: "f1tab_details"): XrmBase.PageTab<Tabs.F1tabdetails>;
            get(name: "tab_4"): XrmBase.PageTab<Tabs.Tab4>;
            get(name: "tab_5"): XrmBase.PageTab<Tabs.Tab5>;
            get(name: "tab_6"): XrmBase.PageTab<Tabs.Tab6>;
            get(name: "tab_7"): XrmBase.PageTab<Tabs.Tab7>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_defaultworkordertype"): XrmBase.LookupAttribute<"msdyn_workordertype">;
        getAttribute(attributeName: "msdyn_copyincidentitemstoagreement"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_estimatedduration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_suggestedduration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_lastcalculatedtime"): XrmBase.DateAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "msdyn_defaultworkordertype"): XrmBase.LookupControl<"msdyn_workordertype">;
        getControl(controlName: "msdyn_copyincidentitemstoagreement"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_estimatedduration"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_suggestedduration"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_lastcalculatedtime"): XrmBase.DateControl;
        getControl(controlName: "incidentproductssubgrid"): XrmBase.SubGridControl<"msdyn_incidenttypeproduct">;
        getControl(controlName: "incidentservicessubgrid"): XrmBase.SubGridControl<"msdyn_incidenttypeservice">;
        getControl(controlName: "servicetasksgrid"): XrmBase.SubGridControl<"msdyn_incidenttypeservicetask">;
        getControl(controlName: "Characteristics"): XrmBase.SubGridControl<"msdyn_incidenttypecharacteristic">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
