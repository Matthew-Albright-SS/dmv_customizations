declare namespace Form.msdyn_invoicefrequency.Main {
    namespace ProjectInformation {
        namespace Tabs {
            interface _7d8df25f4ce44ff8b4648d31b36593df extends XrmBase.SectionCollectionBase {
                get(name: "DetailsSection"): XrmBase.PageSection;
                get(name: "{7d8df25f-4ce4-4ff8-b464-8d31b36593df}_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface InvoiceFrequencyDetailsDay extends XrmBase.SectionCollectionBase {
                get(name: "tab_3_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface InvoiceFrequencyDetailsWeekday extends XrmBase.SectionCollectionBase {
                get(name: "tab_2_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface InvoiceFrequencyDetailsWeekly extends XrmBase.SectionCollectionBase {
                get(name: "tab_4_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_daysofrun"): XrmBase.OptionSetAttribute<msdyn_daysofrun>;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_period"): XrmBase.OptionSetAttribute<msdyn_frequency>;
            get(name: "msdyn_runspermonth"): XrmBase.OptionSetAttribute<msdyn_invoicefrequency_msdyn_runspermonth>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "InvoiceFrequencyDetails"): XrmBase.SubGridControl<"msdyn_invoicefrequencydetail">;
            get(name: "InvoiceFrequencyDetails_1_Grid"): XrmBase.SubGridControl<"msdyn_invoicefrequencydetail">;
            get(name: "InvoiceFrequencyDetails_2_Grid"): XrmBase.SubGridControl<"msdyn_invoicefrequencydetail">;
            get(name: "msdyn_daysofrun"): XrmBase.OptionSetControl<msdyn_daysofrun>;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_period"): XrmBase.OptionSetControl<msdyn_frequency>;
            get(name: "msdyn_runspermonth"): XrmBase.OptionSetControl<msdyn_invoicefrequency_msdyn_runspermonth>;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{7d8df25f-4ce4-4ff8-b464-8d31b36593df}"): XrmBase.PageTab<Tabs._7d8df25f4ce44ff8b4648d31b36593df>;
            get(name: "InvoiceFrequencyDetails_Day"): XrmBase.PageTab<Tabs.InvoiceFrequencyDetailsDay>;
            get(name: "InvoiceFrequencyDetails_Weekday"): XrmBase.PageTab<Tabs.InvoiceFrequencyDetailsWeekday>;
            get(name: "InvoiceFrequencyDetails_Weekly"): XrmBase.PageTab<Tabs.InvoiceFrequencyDetailsWeekly>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface ProjectInformation extends XrmBase.PageBase<ProjectInformation.Attributes, ProjectInformation.Tabs, ProjectInformation.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_period"): XrmBase.OptionSetAttribute<msdyn_frequency>;
        getAttribute(attributeName: "msdyn_daysofrun"): XrmBase.OptionSetAttribute<msdyn_daysofrun>;
        getAttribute(attributeName: "msdyn_runspermonth"): XrmBase.OptionSetAttribute<msdyn_invoicefrequency_msdyn_runspermonth>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_period"): XrmBase.OptionSetControl<msdyn_frequency>;
        getControl(controlName: "msdyn_daysofrun"): XrmBase.OptionSetControl<msdyn_daysofrun>;
        getControl(controlName: "msdyn_runspermonth"): XrmBase.OptionSetControl<msdyn_invoicefrequency_msdyn_runspermonth>;
        getControl(controlName: "InvoiceFrequencyDetails_1_Grid"): XrmBase.SubGridControl<"msdyn_invoicefrequencydetail">;
        getControl(controlName: "InvoiceFrequencyDetails"): XrmBase.SubGridControl<"msdyn_invoicefrequencydetail">;
        getControl(controlName: "InvoiceFrequencyDetails_2_Grid"): XrmBase.SubGridControl<"msdyn_invoicefrequencydetail">;
        getControl(controlName: string): undefined;
    }
}
