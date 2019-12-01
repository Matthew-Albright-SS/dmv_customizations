declare namespace Form.msdyn_invoicefrequencydetail.Main {
    namespace ProjectInformation {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_dayofmonth"): XrmBase.OptionSetAttribute<msdyn_dayofmonth>;
            get(name: "msdyn_invoicefrequency"): XrmBase.LookupAttribute<"msdyn_invoicefrequency">;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_occurrenceofweekday"): XrmBase.OptionSetAttribute<msdyn_occurrenceofweekday>;
            get(name: "msdyn_weekday"): XrmBase.OptionSetAttribute<msdyn_weekday>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_dayofmonth"): XrmBase.OptionSetControl<msdyn_dayofmonth>;
            get(name: "msdyn_invoicefrequency"): XrmBase.LookupControl<"msdyn_invoicefrequency">;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_occurrenceofweekday"): XrmBase.OptionSetControl<msdyn_occurrenceofweekday>;
            get(name: "msdyn_weekday"): XrmBase.OptionSetControl<msdyn_weekday>;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface ProjectInformation extends XrmBase.PageBase<ProjectInformation.Attributes, ProjectInformation.Tabs, ProjectInformation.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_occurrenceofweekday"): XrmBase.OptionSetAttribute<msdyn_occurrenceofweekday>;
        getAttribute(attributeName: "msdyn_weekday"): XrmBase.OptionSetAttribute<msdyn_weekday>;
        getAttribute(attributeName: "msdyn_dayofmonth"): XrmBase.OptionSetAttribute<msdyn_dayofmonth>;
        getAttribute(attributeName: "msdyn_invoicefrequency"): XrmBase.LookupAttribute<"msdyn_invoicefrequency">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_occurrenceofweekday"): XrmBase.OptionSetControl<msdyn_occurrenceofweekday>;
        getControl(controlName: "msdyn_weekday"): XrmBase.OptionSetControl<msdyn_weekday>;
        getControl(controlName: "msdyn_dayofmonth"): XrmBase.OptionSetControl<msdyn_dayofmonth>;
        getControl(controlName: "msdyn_invoicefrequency"): XrmBase.LookupControl<"msdyn_invoicefrequency">;
        getControl(controlName: string): undefined;
    }
}
