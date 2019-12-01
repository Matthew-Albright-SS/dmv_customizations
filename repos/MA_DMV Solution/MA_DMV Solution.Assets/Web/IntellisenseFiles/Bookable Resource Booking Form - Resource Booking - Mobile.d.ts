declare namespace Form.bookableresourcebooking.Main {
    namespace ResourceBookingMobile {
        namespace Tabs {
            interface Fstabgeneral extends XrmBase.SectionCollectionBase {
                get(name: "fstab_general_section_general"): XrmBase.PageSection;
                get(name: "fstab_general_section_schedule"): XrmBase.PageSection;
                get(name: "fstab_general_section_travel"): XrmBase.PageSection;
                get(name: "fstab_general_section_misc"): XrmBase.PageSection;
                get(name: "tab_actions"): XrmBase.PageSection;
                get(name: "fstab_note_section"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface FieldService extends XrmBase.SectionCollectionBase {
                get(name: "FieldService_section_1"): XrmBase.PageSection;
                get(name: "FieldService_section_4"): XrmBase.PageSection;
                get(name: "FieldService_section_2"): XrmBase.PageSection;
                get(name: "FieldService_section_5"): XrmBase.PageSection;
                get(name: "FieldService_section_6"): XrmBase.PageSection;
                get(name: "FieldService_column_5_section_1"): XrmBase.PageSection;
                get(name: "FieldService_column_6_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Fstabsignature extends XrmBase.SectionCollectionBase {
                get(name: "fstab_signature_section_signature"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "bookingstatus"): XrmBase.LookupAttribute<"bookingstatus">;
            get(name: "bookingtype"): XrmBase.OptionSetAttribute<bookableresourcebooking_bookingtype>;
            get(name: "duration"): XrmBase.NumberAttribute;
            get(name: "endtime"): XrmBase.DateAttribute;
            get(name: "msdyn_actualarrivaltime"): XrmBase.DateAttribute;
            get(name: "msdyn_actualtravelduration"): XrmBase.NumberAttribute;
            get(name: "msdyn_agreementbookingdate"): XrmBase.LookupAttribute<"msdyn_agreementbookingdate">;
            get(name: "msdyn_allowoverlapping"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_bookingmethod"): XrmBase.OptionSetAttribute<msdyn_resourceschedulesource>;
            get(name: "msdyn_estimatedarrivaltime"): XrmBase.DateAttribute;
            get(name: "msdyn_estimatedtravelduration"): XrmBase.NumberAttribute;
            get(name: "msdyn_latitude"): XrmBase.NumberAttribute;
            get(name: "msdyn_longitude"): XrmBase.NumberAttribute;
            get(name: "msdyn_milestraveled"): XrmBase.NumberAttribute;
            get(name: "msdyn_offlinetimestamp"): XrmBase.DateAttribute;
            get(name: "msdyn_resourcegroup"): XrmBase.LookupAttribute<"bookableresource">;
            get(name: "msdyn_signature"): XrmBase.StringAttribute;
            get(name: "msdyn_timegroupdetailselected"): XrmBase.LookupAttribute<"msdyn_timegroupdetail">;
            get(name: "msdyn_totalbillableduration"): XrmBase.NumberAttribute;
            get(name: "msdyn_totalbreakduration"): XrmBase.NumberAttribute;
            get(name: "msdyn_totalcost"): XrmBase.NumberAttribute;
            get(name: "msdyn_totaldurationinprogress"): XrmBase.NumberAttribute;
            get(name: "msdyn_workorder"): XrmBase.LookupAttribute<"msdyn_workorder">;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "resource"): XrmBase.LookupAttribute<"bookableresource">;
            get(name: "starttime"): XrmBase.DateAttribute;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "bookingstatus"): XrmBase.LookupControl<"bookingstatus">;
            get(name: "bookingtype"): XrmBase.OptionSetControl<bookableresourcebooking_bookingtype>;
            get(name: "duration"): XrmBase.NumberControl;
            get(name: "endtime"): XrmBase.DateControl;
            get(name: "msdyn_actualarrivaltime"): XrmBase.DateControl;
            get(name: "msdyn_actualtravelduration"): XrmBase.NumberControl;
            get(name: "msdyn_agreementbookingdate"): XrmBase.LookupControl<"msdyn_agreementbookingdate">;
            get(name: "msdyn_allowoverlapping"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_bookingmethod"): XrmBase.OptionSetControl<msdyn_resourceschedulesource>;
            get(name: "msdyn_estimatedarrivaltime"): XrmBase.DateControl;
            get(name: "msdyn_estimatedtravelduration"): XrmBase.NumberControl;
            get(name: "msdyn_latitude"): XrmBase.NumberControl;
            get(name: "msdyn_longitude"): XrmBase.NumberControl;
            get(name: "msdyn_milestraveled"): XrmBase.BaseControl;
            get(name: "msdyn_offlinetimestamp"): XrmBase.DateControl;
            get(name: "msdyn_resourcegroup"): XrmBase.LookupControl<"bookableresource">;
            get(name: "msdyn_signature"): XrmBase.BaseControl;
            get(name: "msdyn_timegroupdetailselected"): XrmBase.LookupControl<"msdyn_timegroupdetail">;
            get(name: "msdyn_totalbillableduration"): XrmBase.NumberControl;
            get(name: "msdyn_totalbreakduration"): XrmBase.NumberControl;
            get(name: "msdyn_totalcost"): XrmBase.NumberControl;
            get(name: "msdyn_totaldurationinprogress"): XrmBase.NumberControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "PRODUCTS"): XrmBase.SubGridControl<"msdyn_workorderproduct">;
            get(name: "resource"): XrmBase.LookupControl<"bookableresource">;
            get(name: "SERVICE_TASKS"): XrmBase.SubGridControl<"msdyn_workorderservicetask">;
            get(name: "SERVICES"): XrmBase.SubGridControl<"msdyn_workorderservice">;
            get(name: "ServiceTasks"): XrmBase.SubGridControl<"msdyn_workorderservicetask">;
            get(name: "starttime"): XrmBase.DateControl;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: "WorkOrderQuickView"): XrmBase.BaseControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "fstab_general"): XrmBase.PageTab<Tabs.Fstabgeneral>;
            get(name: "FieldService"): XrmBase.PageTab<Tabs.FieldService>;
            get(name: "fstab_signature"): XrmBase.PageTab<Tabs.Fstabsignature>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface ResourceBookingMobile extends XrmBase.PageBase<ResourceBookingMobile.Attributes, ResourceBookingMobile.Tabs, ResourceBookingMobile.Controls> {
        getAttribute(attributeName: "msdyn_workorder"): XrmBase.LookupAttribute<"msdyn_workorder">;
        getAttribute(attributeName: "bookingtype"): XrmBase.OptionSetAttribute<bookableresourcebooking_bookingtype>;
        getAttribute(attributeName: "bookingstatus"): XrmBase.LookupAttribute<"bookingstatus">;
        getAttribute(attributeName: "starttime"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_actualarrivaltime"): XrmBase.DateAttribute;
        getAttribute(attributeName: "endtime"): XrmBase.DateAttribute;
        getAttribute(attributeName: "duration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_offlinetimestamp"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_milestraveled"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_actualtravelduration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "resource"): XrmBase.LookupAttribute<"bookableresource">;
        getAttribute(attributeName: "msdyn_totalcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "msdyn_estimatedarrivaltime"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_allowoverlapping"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_bookingmethod"): XrmBase.OptionSetAttribute<msdyn_resourceschedulesource>;
        getAttribute(attributeName: "msdyn_resourcegroup"): XrmBase.LookupAttribute<"bookableresource">;
        getAttribute(attributeName: "msdyn_agreementbookingdate"): XrmBase.LookupAttribute<"msdyn_agreementbookingdate">;
        getAttribute(attributeName: "msdyn_timegroupdetailselected"): XrmBase.LookupAttribute<"msdyn_timegroupdetail">;
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_totalbillableduration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_totaldurationinprogress"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_totalbreakduration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_estimatedtravelduration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_latitude"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_longitude"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_signature"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "WorkOrderQuickView"): XrmBase.BaseControl;
        getControl(controlName: "bookingtype"): XrmBase.OptionSetControl<bookableresourcebooking_bookingtype>;
        getControl(controlName: "bookingstatus"): XrmBase.LookupControl<"bookingstatus">;
        getControl(controlName: "starttime"): XrmBase.DateControl;
        getControl(controlName: "msdyn_actualarrivaltime"): XrmBase.DateControl;
        getControl(controlName: "endtime"): XrmBase.DateControl;
        getControl(controlName: "duration"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_offlinetimestamp"): XrmBase.DateControl;
        getControl(controlName: "msdyn_milestraveled"): XrmBase.BaseControl;
        getControl(controlName: "msdyn_actualtravelduration"): XrmBase.NumberControl;
        getControl(controlName: "resource"): XrmBase.LookupControl<"bookableresource">;
        getControl(controlName: "msdyn_totalcost"): XrmBase.NumberControl;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "PRODUCTS"): XrmBase.SubGridControl<"msdyn_workorderproduct">;
        getControl(controlName: "SERVICES"): XrmBase.SubGridControl<"msdyn_workorderservice">;
        getControl(controlName: "SERVICE_TASKS"): XrmBase.SubGridControl<"msdyn_workorderservicetask">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "msdyn_estimatedarrivaltime"): XrmBase.DateControl;
        getControl(controlName: "ServiceTasks"): XrmBase.SubGridControl<"msdyn_workorderservicetask">;
        getControl(controlName: "msdyn_allowoverlapping"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_bookingmethod"): XrmBase.OptionSetControl<msdyn_resourceschedulesource>;
        getControl(controlName: "msdyn_resourcegroup"): XrmBase.LookupControl<"bookableresource">;
        getControl(controlName: "msdyn_agreementbookingdate"): XrmBase.LookupControl<"msdyn_agreementbookingdate">;
        getControl(controlName: "msdyn_timegroupdetailselected"): XrmBase.LookupControl<"msdyn_timegroupdetail">;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_totalbillableduration"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_totaldurationinprogress"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_totalbreakduration"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_estimatedtravelduration"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_latitude"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_longitude"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_signature"): XrmBase.BaseControl;
        getControl(controlName: string): undefined;
    }
}
