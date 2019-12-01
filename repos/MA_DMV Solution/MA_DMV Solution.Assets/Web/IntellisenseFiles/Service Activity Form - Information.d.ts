declare namespace Form.serviceappointment.Main {
    namespace Information {
        namespace Tabs {
            interface Service extends XrmBase.SectionCollectionBase {
                get(name: "general information"): XrmBase.PageSection;
                get(name: "scheduling information"): XrmBase.PageSection;
                get(name: "notes"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Details extends XrmBase.SectionCollectionBase {
                get(name: "appointment details"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface BookableResourceBooking extends XrmBase.SectionCollectionBase {
                get(name: "Bookable Resource Bookings Section"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "category"): XrmBase.StringAttribute;
            get(name: "customers"): XrmBase.LookupAttribute<"account" | "contact">;
            get(name: "isalldayevent"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "location"): XrmBase.StringAttribute;
            get(name: "msdyn_organizationalunitid"): XrmBase.LookupAttribute<"msdyn_organizationalunit">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "prioritycode"): XrmBase.OptionSetAttribute<serviceappointment_prioritycode>;
            get(name: "regardingobjectid"): XrmBase.LookupAttribute<"account" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "dmv_application" | "dmv_contactaddresshistory" | "dmv_contactvehicle" | "dmv_vehicle" | "entitlement" | "entitlementtemplate" | "incident" | "interactionforemail" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "madmv_ma_application" | "madmv_ma_customer" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "quote" | "salesorder" | "site" | "ss_contacttraining" | "ss_holidaylist" | "ss_leaveapplication" | "ss_training">;
            get(name: "resources"): XrmBase.LookupAttribute<"equipment" | "systemuser">;
            get(name: "scheduleddurationminutes"): XrmBase.NumberAttribute;
            get(name: "scheduledend"): XrmBase.DateAttribute;
            get(name: "scheduledstart"): XrmBase.DateAttribute;
            get(name: "serviceid"): XrmBase.LookupAttribute<"service">;
            get(name: "siteid"): XrmBase.LookupAttribute<"site">;
            get(name: "statuscode"): XrmBase.OptionSetAttribute<serviceappointment_statuscode>;
            get(name: "subcategory"): XrmBase.StringAttribute;
            get(name: "subject"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "bookableresourcebookings"): XrmBase.SubGridControl<"bookableresourcebooking">;
            get(name: "category"): XrmBase.StringControl;
            get(name: "customers"): XrmBase.LookupControl<"account" | "contact">;
            get(name: "isalldayevent"): XrmBase.OptionSetControl<any>;
            get(name: "location"): XrmBase.StringControl;
            get(name: "msdyn_organizationalunitserviceappointmentid"): XrmBase.LookupControl<"msdyn_organizationalunit">;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "prioritycode"): XrmBase.OptionSetControl<serviceappointment_prioritycode>;
            get(name: "regardingobjectid"): XrmBase.LookupControl<"account" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "dmv_application" | "dmv_contactaddresshistory" | "dmv_contactvehicle" | "dmv_vehicle" | "entitlement" | "entitlementtemplate" | "incident" | "interactionforemail" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "madmv_ma_application" | "madmv_ma_customer" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "quote" | "salesorder" | "site" | "ss_contacttraining" | "ss_holidaylist" | "ss_leaveapplication" | "ss_training">;
            get(name: "resources"): XrmBase.LookupControl<"equipment" | "systemuser">;
            get(name: "scheduleddurationminutes"): XrmBase.NumberControl;
            get(name: "scheduledend"): XrmBase.DateControl;
            get(name: "scheduledstart"): XrmBase.DateControl;
            get(name: "serviceid"): XrmBase.LookupControl<"service">;
            get(name: "siteid"): XrmBase.LookupControl<"site">;
            get(name: "statuscode"): XrmBase.OptionSetControl<serviceappointment_statuscode>;
            get(name: "subcategory"): XrmBase.StringControl;
            get(name: "subject"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "service"): XrmBase.PageTab<Tabs.Service>;
            get(name: "details"): XrmBase.PageTab<Tabs.Details>;
            get(name: "bookableResourceBooking"): XrmBase.PageTab<Tabs.BookableResourceBooking>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "subject"): XrmBase.StringAttribute;
        getAttribute(attributeName: "serviceid"): XrmBase.LookupAttribute<"service">;
        getAttribute(attributeName: "siteid"): XrmBase.LookupAttribute<"site">;
        getAttribute(attributeName: "customers"): XrmBase.LookupAttribute<"account" | "contact">;
        getAttribute(attributeName: "resources"): XrmBase.LookupAttribute<"equipment" | "systemuser">;
        getAttribute(attributeName: "location"): XrmBase.StringAttribute;
        getAttribute(attributeName: "statuscode"): XrmBase.OptionSetAttribute<serviceappointment_statuscode>;
        getAttribute(attributeName: "msdyn_organizationalunitid"): XrmBase.LookupAttribute<"msdyn_organizationalunit">;
        getAttribute(attributeName: "scheduledstart"): XrmBase.DateAttribute;
        getAttribute(attributeName: "scheduledend"): XrmBase.DateAttribute;
        getAttribute(attributeName: "scheduleddurationminutes"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "isalldayevent"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "regardingobjectid"): XrmBase.LookupAttribute<"account" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "dmv_application" | "dmv_contactaddresshistory" | "dmv_contactvehicle" | "dmv_vehicle" | "entitlement" | "entitlementtemplate" | "incident" | "interactionforemail" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "madmv_ma_application" | "madmv_ma_customer" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "quote" | "salesorder" | "site" | "ss_contacttraining" | "ss_holidaylist" | "ss_leaveapplication" | "ss_training">;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "prioritycode"): XrmBase.OptionSetAttribute<serviceappointment_prioritycode>;
        getAttribute(attributeName: "category"): XrmBase.StringAttribute;
        getAttribute(attributeName: "subcategory"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "subject"): XrmBase.StringControl;
        getControl(controlName: "serviceid"): XrmBase.LookupControl<"service">;
        getControl(controlName: "siteid"): XrmBase.LookupControl<"site">;
        getControl(controlName: "customers"): XrmBase.LookupControl<"account" | "contact">;
        getControl(controlName: "resources"): XrmBase.LookupControl<"equipment" | "systemuser">;
        getControl(controlName: "location"): XrmBase.StringControl;
        getControl(controlName: "statuscode"): XrmBase.OptionSetControl<serviceappointment_statuscode>;
        getControl(controlName: "msdyn_organizationalunitserviceappointmentid"): XrmBase.LookupControl<"msdyn_organizationalunit">;
        getControl(controlName: "scheduledstart"): XrmBase.DateControl;
        getControl(controlName: "scheduledend"): XrmBase.DateControl;
        getControl(controlName: "scheduleddurationminutes"): XrmBase.NumberControl;
        getControl(controlName: "isalldayevent"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "regardingobjectid"): XrmBase.LookupControl<"account" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "dmv_application" | "dmv_contactaddresshistory" | "dmv_contactvehicle" | "dmv_vehicle" | "entitlement" | "entitlementtemplate" | "incident" | "interactionforemail" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "madmv_ma_application" | "madmv_ma_customer" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "quote" | "salesorder" | "site" | "ss_contacttraining" | "ss_holidaylist" | "ss_leaveapplication" | "ss_training">;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "prioritycode"): XrmBase.OptionSetControl<serviceappointment_prioritycode>;
        getControl(controlName: "category"): XrmBase.StringControl;
        getControl(controlName: "subcategory"): XrmBase.StringControl;
        getControl(controlName: "bookableresourcebookings"): XrmBase.SubGridControl<"bookableresourcebooking">;
        getControl(controlName: string): undefined;
    }
}
