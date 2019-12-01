declare namespace Form.msdyn_workorderincident.Main {
    namespace Information {
        namespace Tabs {
            interface Tab7 extends XrmBase.SectionCollectionBase {
                get(name: "tab_7_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Workorderproductstab extends XrmBase.SectionCollectionBase {
                get(name: "workorderproductssection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Workorderservicestab extends XrmBase.SectionCollectionBase {
                get(name: "workorderservicessection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Workorderservicetaskstab extends XrmBase.SectionCollectionBase {
                get(name: "workorderservicetasksection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface F1tabresolution extends XrmBase.SectionCollectionBase {
                get(name: "tab_3_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab8 extends XrmBase.SectionCollectionBase {
                get(name: "tab_8_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_agreementbookingincident"): XrmBase.LookupAttribute<"msdyn_agreementbookingincident">;
            get(name: "msdyn_customerasset"): XrmBase.LookupAttribute<"msdyn_customerasset">;
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_estimatedduration"): XrmBase.NumberAttribute;
            get(name: "msdyn_incidentresolved"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_incidenttype"): XrmBase.LookupAttribute<"msdyn_incidenttype">;
            get(name: "msdyn_isprimary"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_itemspopulated"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_taskspercentcompleted"): XrmBase.NumberAttribute;
            get(name: "msdyn_workorder"): XrmBase.LookupAttribute<"msdyn_workorder">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_agreementbookingincident"): XrmBase.LookupControl<"msdyn_agreementbookingincident">;
            get(name: "msdyn_customerasset"): XrmBase.LookupControl<"msdyn_customerasset">;
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_estimatedduration"): XrmBase.NumberControl;
            get(name: "msdyn_incidentresolved"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_incidenttype"): XrmBase.LookupControl<"msdyn_incidenttype">;
            get(name: "msdyn_isprimary"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_itemspopulated"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_taskspercentcompleted"): XrmBase.NumberControl;
            get(name: "msdyn_workorder"): XrmBase.LookupControl<"msdyn_workorder">;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "workorderproductsgrid"): XrmBase.SubGridControl<"msdyn_workorderproduct">;
            get(name: "workorderservicesgrid"): XrmBase.SubGridControl<"msdyn_workorderservice">;
            get(name: "workorderservicetasksgrid"): XrmBase.SubGridControl<"msdyn_workorderservicetask">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "tab_7"): XrmBase.PageTab<Tabs.Tab7>;
            get(name: "workorderproductstab"): XrmBase.PageTab<Tabs.Workorderproductstab>;
            get(name: "workorderservicestab"): XrmBase.PageTab<Tabs.Workorderservicestab>;
            get(name: "workorderservicetaskstab"): XrmBase.PageTab<Tabs.Workorderservicetaskstab>;
            get(name: "f1tab_resolution"): XrmBase.PageTab<Tabs.F1tabresolution>;
            get(name: "tab_8"): XrmBase.PageTab<Tabs.Tab8>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_incidenttype"): XrmBase.LookupAttribute<"msdyn_incidenttype">;
        getAttribute(attributeName: "msdyn_isprimary"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_estimatedduration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_workorder"): XrmBase.LookupAttribute<"msdyn_workorder">;
        getAttribute(attributeName: "msdyn_agreementbookingincident"): XrmBase.LookupAttribute<"msdyn_agreementbookingincident">;
        getAttribute(attributeName: "msdyn_customerasset"): XrmBase.LookupAttribute<"msdyn_customerasset">;
        getAttribute(attributeName: "msdyn_taskspercentcompleted"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_incidentresolved"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_itemspopulated"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_incidenttype"): XrmBase.LookupControl<"msdyn_incidenttype">;
        getControl(controlName: "msdyn_isprimary"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_estimatedduration"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "msdyn_workorder"): XrmBase.LookupControl<"msdyn_workorder">;
        getControl(controlName: "msdyn_agreementbookingincident"): XrmBase.LookupControl<"msdyn_agreementbookingincident">;
        getControl(controlName: "msdyn_customerasset"): XrmBase.LookupControl<"msdyn_customerasset">;
        getControl(controlName: "workorderproductsgrid"): XrmBase.SubGridControl<"msdyn_workorderproduct">;
        getControl(controlName: "workorderservicesgrid"): XrmBase.SubGridControl<"msdyn_workorderservice">;
        getControl(controlName: "workorderservicetasksgrid"): XrmBase.SubGridControl<"msdyn_workorderservicetask">;
        getControl(controlName: "msdyn_taskspercentcompleted"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_incidentresolved"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_itemspopulated"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
