declare namespace Form.queueitem.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "information"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "enteredon"): XrmBase.DateAttribute;
            get(name: "modifiedon"): XrmBase.DateAttribute;
            get(name: "objectid"): XrmBase.LookupAttribute<"activitypointer" | "appointment" | "bulkoperation" | "campaignactivity" | "campaignresponse" | "dmv_application" | "dmv_contactaddresshistory" | "dmv_contactvehicle" | "dmv_vehicle" | "email" | "fax" | "incident" | "knowledgearticle" | "letter" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoicesetup" | "msdyn_approval" | "msdyn_bookingalert" | "msdyn_inventoryadjustment" | "msdyn_inventorytransfer" | "msdyn_iotalert" | "msdyn_project" | "msdyn_projecttask" | "msdyn_resourcerequest" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_workorder" | "msdyn_workorderincident" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "msfp_surveyinvite" | "msfp_surveyresponse" | "phonecall" | "recurringappointmentmaster" | "serviceappointment" | "socialactivity" | "ss_holidaylist" | "ss_leaveapplication" | "task">;
            get(name: "queueid"): XrmBase.LookupAttribute<"queue">;
            get(name: "workerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "enteredon"): XrmBase.DateControl;
            get(name: "modifiedon"): XrmBase.DateControl;
            get(name: "objectid"): XrmBase.LookupControl<"activitypointer" | "appointment" | "bulkoperation" | "campaignactivity" | "campaignresponse" | "dmv_application" | "dmv_contactaddresshistory" | "dmv_contactvehicle" | "dmv_vehicle" | "email" | "fax" | "incident" | "knowledgearticle" | "letter" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoicesetup" | "msdyn_approval" | "msdyn_bookingalert" | "msdyn_inventoryadjustment" | "msdyn_inventorytransfer" | "msdyn_iotalert" | "msdyn_project" | "msdyn_projecttask" | "msdyn_resourcerequest" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_workorder" | "msdyn_workorderincident" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "msfp_surveyinvite" | "msfp_surveyresponse" | "phonecall" | "recurringappointmentmaster" | "serviceappointment" | "socialactivity" | "ss_holidaylist" | "ss_leaveapplication" | "task">;
            get(name: "queueid"): XrmBase.LookupControl<"queue">;
            get(name: "workerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "general"): XrmBase.PageTab<Tabs.General>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "queueid"): XrmBase.LookupAttribute<"queue">;
        getAttribute(attributeName: "objectid"): XrmBase.LookupAttribute<"activitypointer" | "appointment" | "bulkoperation" | "campaignactivity" | "campaignresponse" | "dmv_application" | "dmv_contactaddresshistory" | "dmv_contactvehicle" | "dmv_vehicle" | "email" | "fax" | "incident" | "knowledgearticle" | "letter" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoicesetup" | "msdyn_approval" | "msdyn_bookingalert" | "msdyn_inventoryadjustment" | "msdyn_inventorytransfer" | "msdyn_iotalert" | "msdyn_project" | "msdyn_projecttask" | "msdyn_resourcerequest" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_workorder" | "msdyn_workorderincident" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "msfp_surveyinvite" | "msfp_surveyresponse" | "phonecall" | "recurringappointmentmaster" | "serviceappointment" | "socialactivity" | "ss_holidaylist" | "ss_leaveapplication" | "task">;
        getAttribute(attributeName: "workerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "enteredon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "modifiedon"): XrmBase.DateAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "queueid"): XrmBase.LookupControl<"queue">;
        getControl(controlName: "objectid"): XrmBase.LookupControl<"activitypointer" | "appointment" | "bulkoperation" | "campaignactivity" | "campaignresponse" | "dmv_application" | "dmv_contactaddresshistory" | "dmv_contactvehicle" | "dmv_vehicle" | "email" | "fax" | "incident" | "knowledgearticle" | "letter" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoicesetup" | "msdyn_approval" | "msdyn_bookingalert" | "msdyn_inventoryadjustment" | "msdyn_inventorytransfer" | "msdyn_iotalert" | "msdyn_project" | "msdyn_projecttask" | "msdyn_resourcerequest" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_workorder" | "msdyn_workorderincident" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "msfp_surveyinvite" | "msfp_surveyresponse" | "phonecall" | "recurringappointmentmaster" | "serviceappointment" | "socialactivity" | "ss_holidaylist" | "ss_leaveapplication" | "task">;
        getControl(controlName: "workerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "enteredon"): XrmBase.DateControl;
        getControl(controlName: "modifiedon"): XrmBase.DateControl;
        getControl(controlName: string): undefined;
    }
}
