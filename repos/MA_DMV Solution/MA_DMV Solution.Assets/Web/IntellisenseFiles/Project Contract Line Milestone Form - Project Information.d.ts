declare namespace Form.msdyn_contractlinescheduleofvalue.Main {
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
            get(name: "msdyn_contract"): XrmBase.LookupAttribute<"salesorder">;
            get(name: "msdyn_contractlinedescription"): XrmBase.StringAttribute;
            get(name: "msdyn_contractlineid"): XrmBase.LookupAttribute<"salesorderdetail">;
            get(name: "msdyn_invoicedate"): XrmBase.DateAttribute;
            get(name: "msdyn_invoicestatus"): XrmBase.OptionSetAttribute<msdyn_invoicestatus>;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_projecttask"): XrmBase.LookupAttribute<"msdyn_projecttask">;
            get(name: "msdyn_tax"): XrmBase.NumberAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_amount"): XrmBase.NumberControl;
            get(name: "msdyn_amount_after_tax"): XrmBase.NumberControl;
            get(name: "msdyn_contract"): XrmBase.LookupControl<"salesorder">;
            get(name: "msdyn_contractlinedescription"): XrmBase.StringControl;
            get(name: "msdyn_contractlineid"): XrmBase.LookupControl<"salesorderdetail">;
            get(name: "msdyn_invoicedate"): XrmBase.DateControl;
            get(name: "msdyn_invoicestatus"): XrmBase.OptionSetControl<msdyn_invoicestatus>;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_projecttask"): XrmBase.LookupControl<"msdyn_projecttask">;
            get(name: "msdyn_tax"): XrmBase.NumberControl;
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
        getAttribute(attributeName: "msdyn_contractlinedescription"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_contract"): XrmBase.LookupAttribute<"salesorder">;
        getAttribute(attributeName: "msdyn_contractlineid"): XrmBase.LookupAttribute<"salesorderdetail">;
        getAttribute(attributeName: "msdyn_projecttask"): XrmBase.LookupAttribute<"msdyn_projecttask">;
        getAttribute(attributeName: "msdyn_invoicedate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_invoicestatus"): XrmBase.OptionSetAttribute<msdyn_invoicestatus>;
        getAttribute(attributeName: "msdyn_amount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_tax"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_amount_after_tax"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_contractlinedescription"): XrmBase.StringControl;
        getControl(controlName: "msdyn_contract"): XrmBase.LookupControl<"salesorder">;
        getControl(controlName: "msdyn_contractlineid"): XrmBase.LookupControl<"salesorderdetail">;
        getControl(controlName: "msdyn_projecttask"): XrmBase.LookupControl<"msdyn_projecttask">;
        getControl(controlName: "msdyn_invoicedate"): XrmBase.DateControl;
        getControl(controlName: "msdyn_invoicestatus"): XrmBase.OptionSetControl<msdyn_invoicestatus>;
        getControl(controlName: "msdyn_amount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_tax"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_amount_after_tax"): XrmBase.NumberControl;
        getControl(controlName: string): undefined;
    }
}
