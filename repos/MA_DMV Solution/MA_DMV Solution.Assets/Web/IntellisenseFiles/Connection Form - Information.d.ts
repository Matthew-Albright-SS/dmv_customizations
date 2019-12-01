﻿declare namespace Form.connection.Main {
    namespace Information {
        namespace Tabs {
            interface Info extends XrmBase.SectionCollectionBase {
                get(name: "info_s"): XrmBase.PageSection;
                get(name: "description"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Details extends XrmBase.SectionCollectionBase {
                get(name: "connect_from"): XrmBase.PageSection;
                get(name: "details"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "effectiveend"): XrmBase.DateAttribute;
            get(name: "effectivestart"): XrmBase.DateAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "record1id"): XrmBase.LookupAttribute<"account" | "activitypointer" | "appointment" | "campaign" | "campaignactivity" | "channelaccessprofilerule" | "competitor" | "constraintbasedgroup" | "contact" | "contract" | "dmv_application" | "dmv_contactaddresshistory" | "dmv_contactvehicle" | "dmv_vehicle" | "email" | "entitlement" | "entitlementchannel" | "entitlementtemplatechannel" | "equipment" | "fax" | "goal" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "letter" | "list" | "madmv_ma_application" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_approval" | "msdyn_bookingalert" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_iotalert" | "msdyn_iotdevice" | "msdyn_iotdevicecategory" | "msdyn_iotdevicecommand" | "msdyn_iotdeviceregistrationhistory" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_project" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_taxcode" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "msfp_surveyinvite" | "msfp_surveyresponse" | "opportunity" | "phonecall" | "position" | "pricelevel" | "processsession" | "product" | "quote" | "recurringappointmentmaster" | "resourcegroup" | "salesorder" | "serviceappointment" | "socialactivity" | "socialprofile" | "ss_contacttraining" | "ss_leaveapplication" | "systemuser" | "task" | "team" | "territory">;
            get(name: "record1roleid"): XrmBase.LookupAttribute<"connectionrole">;
            get(name: "record2id"): XrmBase.LookupAttribute<"account" | "activitypointer" | "appointment" | "campaign" | "campaignactivity" | "channelaccessprofilerule" | "competitor" | "constraintbasedgroup" | "contact" | "contract" | "dmv_application" | "dmv_contactaddresshistory" | "dmv_contactvehicle" | "dmv_vehicle" | "email" | "entitlement" | "entitlementchannel" | "entitlementtemplatechannel" | "equipment" | "fax" | "goal" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "letter" | "list" | "madmv_ma_application" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_approval" | "msdyn_bookingalert" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_iotalert" | "msdyn_iotdevice" | "msdyn_iotdevicecategory" | "msdyn_iotdevicecommand" | "msdyn_iotdeviceregistrationhistory" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_project" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_taxcode" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "msfp_surveyinvite" | "msfp_surveyresponse" | "opportunity" | "phonecall" | "position" | "pricelevel" | "processsession" | "product" | "quote" | "recurringappointmentmaster" | "resourcegroup" | "salesorder" | "serviceappointment" | "socialactivity" | "socialprofile" | "ss_contacttraining" | "ss_leaveapplication" | "systemuser" | "task" | "team" | "territory">;
            get(name: "record2roleid"): XrmBase.LookupAttribute<"connectionrole">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "description"): XrmBase.StringControl;
            get(name: "effectiveend"): XrmBase.DateControl;
            get(name: "effectivestart"): XrmBase.DateControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "record1id"): XrmBase.BaseControl;
            get(name: "record1roleid"): XrmBase.LookupControl<"connectionrole">;
            get(name: "record2id"): XrmBase.BaseControl;
            get(name: "record2roleid"): XrmBase.LookupControl<"connectionrole">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "info"): XrmBase.PageTab<Tabs.Info>;
            get(name: "details"): XrmBase.PageTab<Tabs.Details>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "record2id"): XrmBase.LookupAttribute<"account" | "activitypointer" | "appointment" | "campaign" | "campaignactivity" | "channelaccessprofilerule" | "competitor" | "constraintbasedgroup" | "contact" | "contract" | "dmv_application" | "dmv_contactaddresshistory" | "dmv_contactvehicle" | "dmv_vehicle" | "email" | "entitlement" | "entitlementchannel" | "entitlementtemplatechannel" | "equipment" | "fax" | "goal" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "letter" | "list" | "madmv_ma_application" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_approval" | "msdyn_bookingalert" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_iotalert" | "msdyn_iotdevice" | "msdyn_iotdevicecategory" | "msdyn_iotdevicecommand" | "msdyn_iotdeviceregistrationhistory" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_project" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_taxcode" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "msfp_surveyinvite" | "msfp_surveyresponse" | "opportunity" | "phonecall" | "position" | "pricelevel" | "processsession" | "product" | "quote" | "recurringappointmentmaster" | "resourcegroup" | "salesorder" | "serviceappointment" | "socialactivity" | "socialprofile" | "ss_contacttraining" | "ss_leaveapplication" | "systemuser" | "task" | "team" | "territory">;
        getAttribute(attributeName: "record2roleid"): XrmBase.LookupAttribute<"connectionrole">;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "record1id"): XrmBase.LookupAttribute<"account" | "activitypointer" | "appointment" | "campaign" | "campaignactivity" | "channelaccessprofilerule" | "competitor" | "constraintbasedgroup" | "contact" | "contract" | "dmv_application" | "dmv_contactaddresshistory" | "dmv_contactvehicle" | "dmv_vehicle" | "email" | "entitlement" | "entitlementchannel" | "entitlementtemplatechannel" | "equipment" | "fax" | "goal" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "letter" | "list" | "madmv_ma_application" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_approval" | "msdyn_bookingalert" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_iotalert" | "msdyn_iotdevice" | "msdyn_iotdevicecategory" | "msdyn_iotdevicecommand" | "msdyn_iotdeviceregistrationhistory" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_project" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_taxcode" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "msfp_surveyinvite" | "msfp_surveyresponse" | "opportunity" | "phonecall" | "position" | "pricelevel" | "processsession" | "product" | "quote" | "recurringappointmentmaster" | "resourcegroup" | "salesorder" | "serviceappointment" | "socialactivity" | "socialprofile" | "ss_contacttraining" | "ss_leaveapplication" | "systemuser" | "task" | "team" | "territory">;
        getAttribute(attributeName: "record1roleid"): XrmBase.LookupAttribute<"connectionrole">;
        getAttribute(attributeName: "effectivestart"): XrmBase.DateAttribute;
        getAttribute(attributeName: "effectiveend"): XrmBase.DateAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "record2id"): XrmBase.BaseControl;
        getControl(controlName: "record2roleid"): XrmBase.LookupControl<"connectionrole">;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "record1id"): XrmBase.BaseControl;
        getControl(controlName: "record1roleid"): XrmBase.LookupControl<"connectionrole">;
        getControl(controlName: "effectivestart"): XrmBase.DateControl;
        getControl(controlName: "effectiveend"): XrmBase.DateControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: string): undefined;
    }
}