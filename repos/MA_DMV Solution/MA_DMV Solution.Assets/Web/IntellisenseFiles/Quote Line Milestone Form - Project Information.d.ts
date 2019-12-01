declare namespace Form.msdyn_quotelinescheduleofvalue.Main {
    namespace ProjectInformation {
        namespace Tabs {
            interface GeneralTab extends XrmBase.SectionCollectionBase {
                get(name: "GeneralSection"): XrmBase.PageSection;
                get(name: "InvoiceSection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_amount"): XrmBase.NumberAttribute;
            get(name: "msdyn_amount_after_tax"): XrmBase.NumberAttribute;
            get(name: "msdyn_invoicedate"): XrmBase.DateAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_projecttask"): XrmBase.LookupAttribute<"msdyn_projecttask">;
            get(name: "msdyn_quotelineid"): XrmBase.LookupAttribute<"quotedetail">;
            get(name: "msdyn_tax"): XrmBase.NumberAttribute;
            get(name: "statecode"): XrmBase.OptionSetAttribute<msdyn_quotelinescheduleofvalue_statecode>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_amount"): XrmBase.NumberControl;
            get(name: "msdyn_amount_after_tax"): XrmBase.NumberControl;
            get(name: "msdyn_invoicedate"): XrmBase.DateControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_projecttask"): XrmBase.LookupControl<"msdyn_projecttask">;
            get(name: "msdyn_quotelineid"): XrmBase.LookupControl<"quotedetail">;
            get(name: "msdyn_tax"): XrmBase.NumberControl;
            get(name: "statecode"): XrmBase.OptionSetControl<msdyn_quotelinescheduleofvalue_statecode>;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "GeneralTab"): XrmBase.PageTab<Tabs.GeneralTab>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface ProjectInformation extends XrmBase.PageBase<ProjectInformation.Attributes, ProjectInformation.Tabs, ProjectInformation.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_projecttask"): XrmBase.LookupAttribute<"msdyn_projecttask">;
        getAttribute(attributeName: "msdyn_quotelineid"): XrmBase.LookupAttribute<"quotedetail">;
        getAttribute(attributeName: "msdyn_invoicedate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "statecode"): XrmBase.OptionSetAttribute<msdyn_quotelinescheduleofvalue_statecode>;
        getAttribute(attributeName: "msdyn_amount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_tax"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_amount_after_tax"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_projecttask"): XrmBase.LookupControl<"msdyn_projecttask">;
        getControl(controlName: "msdyn_quotelineid"): XrmBase.LookupControl<"quotedetail">;
        getControl(controlName: "msdyn_invoicedate"): XrmBase.DateControl;
        getControl(controlName: "statecode"): XrmBase.OptionSetControl<msdyn_quotelinescheduleofvalue_statecode>;
        getControl(controlName: "msdyn_amount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_tax"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_amount_after_tax"): XrmBase.NumberControl;
        getControl(controlName: string): undefined;
    }
}
