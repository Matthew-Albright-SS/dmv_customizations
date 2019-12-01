declare namespace Form.appointment.Main {
    namespace Wizard {
        namespace Tabs {
            interface Appointment extends XrmBase.SectionCollectionBase {
                get(name: "Hidden Section"): XrmBase.PageSection;
                get(name: "general information"): XrmBase.PageSection;
                get(name: "attachments"): XrmBase.PageSection;
                get(name: "scheduling information"): XrmBase.PageSection;
                get(name: "appointment description"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "isalldayevent"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "location"): XrmBase.StringAttribute;
            get(name: "optionalattendees"): XrmBase.LookupAttribute<"account" | "contact" | "dmv_application" | "dmv_vehicle" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "madmv_ma_customer" | "queue" | "ss_leaveapplication" | "systemuser" | "unresolvedaddress">;
            get(name: "regardingobjectid"): XrmBase.LookupAttribute<"account" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "dmv_application" | "dmv_contactaddresshistory" | "dmv_contactvehicle" | "dmv_vehicle" | "entitlement" | "entitlementtemplate" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "madmv_ma_application" | "madmv_ma_customer" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "quote" | "salesorder" | "site" | "ss_contacttraining" | "ss_holidaylist" | "ss_leaveapplication" | "ss_training">;
            get(name: "requiredattendees"): XrmBase.LookupAttribute<"account" | "contact" | "dmv_application" | "dmv_vehicle" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "madmv_ma_customer" | "queue" | "ss_leaveapplication" | "systemuser" | "unresolvedaddress">;
            get(name: "scheduleddurationminutes"): XrmBase.NumberAttribute;
            get(name: "scheduledend"): XrmBase.DateAttribute;
            get(name: "scheduledstart"): XrmBase.DateAttribute;
            get(name: "statuscode"): XrmBase.OptionSetAttribute<appointment_statuscode>;
            get(name: "subject"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "attachmentsGrid"): XrmBase.SubGridControl<"activitymimeattachment">;
            get(name: "description"): XrmBase.StringControl;
            get(name: "isalldayevent"): XrmBase.OptionSetControl<any>;
            get(name: "location"): XrmBase.StringControl;
            get(name: "optionalattendees"): XrmBase.LookupControl<"account" | "contact" | "dmv_application" | "dmv_vehicle" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "madmv_ma_customer" | "queue" | "ss_leaveapplication" | "systemuser" | "unresolvedaddress">;
            get(name: "regardingobjectid"): XrmBase.LookupControl<"account" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "dmv_application" | "dmv_contactaddresshistory" | "dmv_contactvehicle" | "dmv_vehicle" | "entitlement" | "entitlementtemplate" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "madmv_ma_application" | "madmv_ma_customer" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "quote" | "salesorder" | "site" | "ss_contacttraining" | "ss_holidaylist" | "ss_leaveapplication" | "ss_training">;
            get(name: "requiredattendees"): XrmBase.LookupControl<"account" | "contact" | "dmv_application" | "dmv_vehicle" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "madmv_ma_customer" | "queue" | "ss_leaveapplication" | "systemuser" | "unresolvedaddress">;
            get(name: "scheduleddurationminutes"): XrmBase.NumberControl;
            get(name: "scheduledend"): XrmBase.DateControl;
            get(name: "scheduledstart"): XrmBase.DateControl;
            get(name: "statuscode"): XrmBase.OptionSetControl<appointment_statuscode>;
            get(name: "subject"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "appointment"): XrmBase.PageTab<Tabs.Appointment>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Wizard extends XrmBase.PageBase<Wizard.Attributes, Wizard.Tabs, Wizard.Controls> {
        getAttribute(attributeName: "requiredattendees"): XrmBase.LookupAttribute<"account" | "contact" | "dmv_application" | "dmv_vehicle" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "madmv_ma_customer" | "queue" | "ss_leaveapplication" | "systemuser" | "unresolvedaddress">;
        getAttribute(attributeName: "optionalattendees"): XrmBase.LookupAttribute<"account" | "contact" | "dmv_application" | "dmv_vehicle" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "madmv_ma_customer" | "queue" | "ss_leaveapplication" | "systemuser" | "unresolvedaddress">;
        getAttribute(attributeName: "regardingobjectid"): XrmBase.LookupAttribute<"account" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "dmv_application" | "dmv_contactaddresshistory" | "dmv_contactvehicle" | "dmv_vehicle" | "entitlement" | "entitlementtemplate" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "madmv_ma_application" | "madmv_ma_customer" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "quote" | "salesorder" | "site" | "ss_contacttraining" | "ss_holidaylist" | "ss_leaveapplication" | "ss_training">;
        getAttribute(attributeName: "statuscode"): XrmBase.OptionSetAttribute<appointment_statuscode>;
        getAttribute(attributeName: "subject"): XrmBase.StringAttribute;
        getAttribute(attributeName: "location"): XrmBase.StringAttribute;
        getAttribute(attributeName: "scheduledstart"): XrmBase.DateAttribute;
        getAttribute(attributeName: "scheduledend"): XrmBase.DateAttribute;
        getAttribute(attributeName: "isalldayevent"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "scheduleddurationminutes"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "requiredattendees"): XrmBase.LookupControl<"account" | "contact" | "dmv_application" | "dmv_vehicle" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "madmv_ma_customer" | "queue" | "ss_leaveapplication" | "systemuser" | "unresolvedaddress">;
        getControl(controlName: "optionalattendees"): XrmBase.LookupControl<"account" | "contact" | "dmv_application" | "dmv_vehicle" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "madmv_ma_customer" | "queue" | "ss_leaveapplication" | "systemuser" | "unresolvedaddress">;
        getControl(controlName: "regardingobjectid"): XrmBase.LookupControl<"account" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "dmv_application" | "dmv_contactaddresshistory" | "dmv_contactvehicle" | "dmv_vehicle" | "entitlement" | "entitlementtemplate" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "madmv_ma_application" | "madmv_ma_customer" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "quote" | "salesorder" | "site" | "ss_contacttraining" | "ss_holidaylist" | "ss_leaveapplication" | "ss_training">;
        getControl(controlName: "statuscode"): XrmBase.OptionSetControl<appointment_statuscode>;
        getControl(controlName: "subject"): XrmBase.StringControl;
        getControl(controlName: "location"): XrmBase.StringControl;
        getControl(controlName: "attachmentsGrid"): XrmBase.SubGridControl<"activitymimeattachment">;
        getControl(controlName: "scheduledstart"): XrmBase.DateControl;
        getControl(controlName: "scheduledend"): XrmBase.DateControl;
        getControl(controlName: "isalldayevent"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "scheduleddurationminutes"): XrmBase.NumberControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
