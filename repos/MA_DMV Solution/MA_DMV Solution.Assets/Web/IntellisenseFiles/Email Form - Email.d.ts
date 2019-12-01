﻿declare namespace Form.email.Main {
    namespace Email {
        namespace Tabs {
            interface Email extends XrmBase.SectionCollectionBase {
                get(name: "recipient information"): XrmBase.PageSection;
                get(name: "email description"): XrmBase.PageSection;
                get(name: "Regarding information"): XrmBase.PageSection;
                get(name: "attachments"): XrmBase.PageSection;
                get(name: "emailengagementactions"): XrmBase.PageSection;
                get(name: "Emailrecipient_section_6"): XrmBase.PageSection;
                get(name: "tab_4_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "actualdurationminutes"): XrmBase.NumberAttribute;
            get(name: "bcc"): XrmBase.LookupAttribute<"account" | "contact" | "dmv_application" | "dmv_vehicle" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "madmv_ma_customer" | "queue" | "ss_leaveapplication" | "systemuser" | "unresolvedaddress">;
            get(name: "cc"): XrmBase.LookupAttribute<"account" | "contact" | "dmv_application" | "dmv_vehicle" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "madmv_ma_customer" | "queue" | "ss_leaveapplication" | "systemuser" | "unresolvedaddress">;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "from"): XrmBase.LookupAttribute<"queue" | "systemuser">;
            get(name: "regardingobjectid"): XrmBase.LookupAttribute<"account" | "asyncoperation" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "dmv_application" | "dmv_contactaddresshistory" | "dmv_contactvehicle" | "dmv_vehicle" | "entitlement" | "entitlementtemplate" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "madmv_ma_application" | "madmv_ma_customer" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "quote" | "salesorder" | "site" | "ss_contacttraining" | "ss_holidaylist" | "ss_leaveapplication" | "ss_training">;
            get(name: "subject"): XrmBase.StringAttribute;
            get(name: "to"): XrmBase.LookupAttribute<"account" | "contact" | "dmv_application" | "dmv_vehicle" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "madmv_ma_customer" | "queue" | "ss_leaveapplication" | "systemuser" | "unresolvedaddress">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "actualdurationminutes"): XrmBase.NumberControl;
            get(name: "attachmentsGrid"): XrmBase.SubGridControl<"activitymimeattachment">;
            get(name: "bcc"): XrmBase.LookupControl<"account" | "contact" | "dmv_application" | "dmv_vehicle" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "madmv_ma_customer" | "queue" | "ss_leaveapplication" | "systemuser" | "unresolvedaddress">;
            get(name: "cc"): XrmBase.LookupControl<"account" | "contact" | "dmv_application" | "dmv_vehicle" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "madmv_ma_customer" | "queue" | "ss_leaveapplication" | "systemuser" | "unresolvedaddress">;
            get(name: "description"): XrmBase.StringControl;
            get(name: "emailengagementactionscontrol"): XrmBase.BaseControl;
            get(name: "emailrecipientactivitycontrol"): XrmBase.BaseControl;
            get(name: "from"): XrmBase.LookupControl<"queue" | "systemuser">;
            get(name: "regardingobjectid"): XrmBase.LookupControl<"account" | "asyncoperation" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "dmv_application" | "dmv_contactaddresshistory" | "dmv_contactvehicle" | "dmv_vehicle" | "entitlement" | "entitlementtemplate" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "madmv_ma_application" | "madmv_ma_customer" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "quote" | "salesorder" | "site" | "ss_contacttraining" | "ss_holidaylist" | "ss_leaveapplication" | "ss_training">;
            get(name: "subject"): XrmBase.StringControl;
            get(name: "to"): XrmBase.LookupControl<"account" | "contact" | "dmv_application" | "dmv_vehicle" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "madmv_ma_customer" | "queue" | "ss_leaveapplication" | "systemuser" | "unresolvedaddress">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "Email"): XrmBase.PageTab<Tabs.Email>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Email extends XrmBase.PageBase<Email.Attributes, Email.Tabs, Email.Controls> {
        getAttribute(attributeName: "from"): XrmBase.LookupAttribute<"queue" | "systemuser">;
        getAttribute(attributeName: "to"): XrmBase.LookupAttribute<"account" | "contact" | "dmv_application" | "dmv_vehicle" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "madmv_ma_customer" | "queue" | "ss_leaveapplication" | "systemuser" | "unresolvedaddress">;
        getAttribute(attributeName: "cc"): XrmBase.LookupAttribute<"account" | "contact" | "dmv_application" | "dmv_vehicle" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "madmv_ma_customer" | "queue" | "ss_leaveapplication" | "systemuser" | "unresolvedaddress">;
        getAttribute(attributeName: "bcc"): XrmBase.LookupAttribute<"account" | "contact" | "dmv_application" | "dmv_vehicle" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "madmv_ma_customer" | "queue" | "ss_leaveapplication" | "systemuser" | "unresolvedaddress">;
        getAttribute(attributeName: "subject"): XrmBase.StringAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "regardingobjectid"): XrmBase.LookupAttribute<"account" | "asyncoperation" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "dmv_application" | "dmv_contactaddresshistory" | "dmv_contactvehicle" | "dmv_vehicle" | "entitlement" | "entitlementtemplate" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "madmv_ma_application" | "madmv_ma_customer" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "quote" | "salesorder" | "site" | "ss_contacttraining" | "ss_holidaylist" | "ss_leaveapplication" | "ss_training">;
        getAttribute(attributeName: "actualdurationminutes"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "from"): XrmBase.LookupControl<"queue" | "systemuser">;
        getControl(controlName: "to"): XrmBase.LookupControl<"account" | "contact" | "dmv_application" | "dmv_vehicle" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "madmv_ma_customer" | "queue" | "ss_leaveapplication" | "systemuser" | "unresolvedaddress">;
        getControl(controlName: "cc"): XrmBase.LookupControl<"account" | "contact" | "dmv_application" | "dmv_vehicle" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "madmv_ma_customer" | "queue" | "ss_leaveapplication" | "systemuser" | "unresolvedaddress">;
        getControl(controlName: "bcc"): XrmBase.LookupControl<"account" | "contact" | "dmv_application" | "dmv_vehicle" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "madmv_ma_customer" | "queue" | "ss_leaveapplication" | "systemuser" | "unresolvedaddress">;
        getControl(controlName: "subject"): XrmBase.StringControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "regardingobjectid"): XrmBase.LookupControl<"account" | "asyncoperation" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "dmv_application" | "dmv_contactaddresshistory" | "dmv_contactvehicle" | "dmv_vehicle" | "entitlement" | "entitlementtemplate" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "madmv_ma_application" | "madmv_ma_customer" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "quote" | "salesorder" | "site" | "ss_contacttraining" | "ss_holidaylist" | "ss_leaveapplication" | "ss_training">;
        getControl(controlName: "actualdurationminutes"): XrmBase.NumberControl;
        getControl(controlName: "attachmentsGrid"): XrmBase.SubGridControl<"activitymimeattachment">;
        getControl(controlName: "emailengagementactionscontrol"): XrmBase.BaseControl;
        getControl(controlName: "emailrecipientactivitycontrol"): XrmBase.BaseControl;
        getControl(controlName: string): undefined;
    }
}
