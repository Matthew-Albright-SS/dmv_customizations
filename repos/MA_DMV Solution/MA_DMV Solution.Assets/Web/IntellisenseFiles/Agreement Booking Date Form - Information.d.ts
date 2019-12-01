declare namespace Form.msdyn_agreementbookingdate.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_agreement"): XrmBase.LookupAttribute<"msdyn_agreement">;
            get(name: "msdyn_bookingdate"): XrmBase.DateAttribute;
            get(name: "msdyn_bookingsetup"): XrmBase.LookupAttribute<"msdyn_agreementbookingsetup">;
            get(name: "msdyn_earliestdate"): XrmBase.DateAttribute;
            get(name: "msdyn_latestdate"): XrmBase.DateAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_resource"): XrmBase.LookupAttribute<"bookableresource">;
            get(name: "msdyn_status"): XrmBase.OptionSetAttribute<msdyn_agreementbookingstatus>;
            get(name: "msdyn_workorder"): XrmBase.LookupAttribute<"msdyn_workorder">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_agreement"): XrmBase.LookupControl<"msdyn_agreement">;
            get(name: "msdyn_bookingdate"): XrmBase.DateControl;
            get(name: "msdyn_bookingsetup"): XrmBase.LookupControl<"msdyn_agreementbookingsetup">;
            get(name: "msdyn_earliestdate"): XrmBase.DateControl;
            get(name: "msdyn_latestdate"): XrmBase.DateControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_resource"): XrmBase.LookupControl<"bookableresource">;
            get(name: "msdyn_status"): XrmBase.OptionSetControl<msdyn_agreementbookingstatus>;
            get(name: "msdyn_workorder"): XrmBase.LookupControl<"msdyn_workorder">;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
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
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_resource"): XrmBase.LookupAttribute<"bookableresource">;
        getAttribute(attributeName: "msdyn_agreement"): XrmBase.LookupAttribute<"msdyn_agreement">;
        getAttribute(attributeName: "msdyn_status"): XrmBase.OptionSetAttribute<msdyn_agreementbookingstatus>;
        getAttribute(attributeName: "msdyn_bookingdate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_earliestdate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_latestdate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_bookingsetup"): XrmBase.LookupAttribute<"msdyn_agreementbookingsetup">;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_workorder"): XrmBase.LookupAttribute<"msdyn_workorder">;
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_resource"): XrmBase.LookupControl<"bookableresource">;
        getControl(controlName: "msdyn_agreement"): XrmBase.LookupControl<"msdyn_agreement">;
        getControl(controlName: "msdyn_status"): XrmBase.OptionSetControl<msdyn_agreementbookingstatus>;
        getControl(controlName: "msdyn_bookingdate"): XrmBase.DateControl;
        getControl(controlName: "msdyn_earliestdate"): XrmBase.DateControl;
        getControl(controlName: "msdyn_latestdate"): XrmBase.DateControl;
        getControl(controlName: "msdyn_bookingsetup"): XrmBase.LookupControl<"msdyn_agreementbookingsetup">;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_workorder"): XrmBase.LookupControl<"msdyn_workorder">;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
