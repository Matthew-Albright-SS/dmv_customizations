declare namespace Form.msdyn_bookingjournal.Main {
    namespace Information {
        namespace Tabs {
            interface F1tabjournalDetails extends XrmBase.SectionCollectionBase {
                get(name: "tab_3_section_1"): XrmBase.PageSection;
                get(name: "f1tab_journalDetails_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_additionalcost"): XrmBase.NumberAttribute;
            get(name: "msdyn_billable"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_booking"): XrmBase.LookupAttribute<"bookableresourcebooking">;
            get(name: "msdyn_duration"): XrmBase.NumberAttribute;
            get(name: "msdyn_endtime"): XrmBase.DateAttribute;
            get(name: "msdyn_journaltype"): XrmBase.OptionSetAttribute<msdyn_bookingjournaltype>;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_paytype"): XrmBase.LookupAttribute<"msdyn_resourcepaytype">;
            get(name: "msdyn_starttime"): XrmBase.DateAttribute;
            get(name: "msdyn_totalcost"): XrmBase.NumberAttribute;
            get(name: "msdyn_unitcost"): XrmBase.NumberAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_additionalcost"): XrmBase.NumberControl;
            get(name: "msdyn_billable"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_booking"): XrmBase.LookupControl<"bookableresourcebooking">;
            get(name: "msdyn_duration"): XrmBase.NumberControl;
            get(name: "msdyn_endtime"): XrmBase.DateControl;
            get(name: "msdyn_journaltype"): XrmBase.OptionSetControl<msdyn_bookingjournaltype>;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_paytype"): XrmBase.LookupControl<"msdyn_resourcepaytype">;
            get(name: "msdyn_starttime"): XrmBase.DateControl;
            get(name: "msdyn_totalcost"): XrmBase.NumberControl;
            get(name: "msdyn_unitcost"): XrmBase.NumberControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "f1tab_journalDetails"): XrmBase.PageTab<Tabs.F1tabjournalDetails>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_booking"): XrmBase.LookupAttribute<"bookableresourcebooking">;
        getAttribute(attributeName: "msdyn_journaltype"): XrmBase.OptionSetAttribute<msdyn_bookingjournaltype>;
        getAttribute(attributeName: "msdyn_starttime"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_endtime"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_duration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_billable"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_paytype"): XrmBase.LookupAttribute<"msdyn_resourcepaytype">;
        getAttribute(attributeName: "msdyn_unitcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_additionalcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_totalcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_booking"): XrmBase.LookupControl<"bookableresourcebooking">;
        getControl(controlName: "msdyn_journaltype"): XrmBase.OptionSetControl<msdyn_bookingjournaltype>;
        getControl(controlName: "msdyn_starttime"): XrmBase.DateControl;
        getControl(controlName: "msdyn_endtime"): XrmBase.DateControl;
        getControl(controlName: "msdyn_duration"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_billable"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_paytype"): XrmBase.LookupControl<"msdyn_resourcepaytype">;
        getControl(controlName: "msdyn_unitcost"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_additionalcost"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_totalcost"): XrmBase.NumberControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
