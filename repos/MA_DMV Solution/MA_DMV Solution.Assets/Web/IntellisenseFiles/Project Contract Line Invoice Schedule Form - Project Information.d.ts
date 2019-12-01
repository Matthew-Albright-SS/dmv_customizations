declare namespace Form.msdyn_contractlineinvoiceschedule.Main {
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
            get(name: "msdyn_invoice"): XrmBase.LookupAttribute<"invoice">;
            get(name: "msdyn_invoicerundate"): XrmBase.DateAttribute;
            get(name: "msdyn_invoicerunstatus"): XrmBase.OptionSetAttribute<msdyn_invoicerunstatus>;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_transactioncutoffdate"): XrmBase.DateAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_invoice"): XrmBase.LookupControl<"invoice">;
            get(name: "msdyn_invoicerundate"): XrmBase.DateControl;
            get(name: "msdyn_invoicerunstatus"): XrmBase.OptionSetControl<msdyn_invoicerunstatus>;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_transactioncutoffdate"): XrmBase.DateControl;
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
        getAttribute(attributeName: "msdyn_transactioncutoffdate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_invoice"): XrmBase.LookupAttribute<"invoice">;
        getAttribute(attributeName: "msdyn_invoicerundate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_invoicerunstatus"): XrmBase.OptionSetAttribute<msdyn_invoicerunstatus>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_transactioncutoffdate"): XrmBase.DateControl;
        getControl(controlName: "msdyn_invoice"): XrmBase.LookupControl<"invoice">;
        getControl(controlName: "msdyn_invoicerundate"): XrmBase.DateControl;
        getControl(controlName: "msdyn_invoicerunstatus"): XrmBase.OptionSetControl<msdyn_invoicerunstatus>;
        getControl(controlName: string): undefined;
    }
}
