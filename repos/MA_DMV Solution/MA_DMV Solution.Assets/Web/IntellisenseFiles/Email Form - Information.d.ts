﻿declare namespace Form.email.Main {
    namespace Information {
        namespace Tabs {
            interface Email extends XrmBase.SectionCollectionBase {
                get(name: "recipient information"): XrmBase.PageSection;
                get(name: "email description"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Attachments extends XrmBase.SectionCollectionBase {
                get(name: "attachments"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Details extends XrmBase.SectionCollectionBase {
                get(name: "email details"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "actualdurationminutes"): XrmBase.NumberAttribute;
            get(name: "bcc"): XrmBase.LookupAttribute<"account" | "contact" | "dmv_application" | "dmv_vehicle" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "madmv_ma_customer" | "queue" | "ss_leaveapplication" | "systemuser" | "unresolvedaddress">;
            get(name: "category"): XrmBase.StringAttribute;
            get(name: "cc"): XrmBase.LookupAttribute<"account" | "contact" | "dmv_application" | "dmv_vehicle" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "madmv_ma_customer" | "queue" | "ss_leaveapplication" | "systemuser" | "unresolvedaddress">;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "from"): XrmBase.LookupAttribute<"queue" | "systemuser">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "prioritycode"): XrmBase.OptionSetAttribute<email_prioritycode>;
            get(name: "regardingobjectid"): XrmBase.LookupAttribute<"account" | "asyncoperation" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "dmv_application" | "dmv_contactaddresshistory" | "dmv_contactvehicle" | "dmv_vehicle" | "entitlement" | "entitlementtemplate" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "madmv_ma_application" | "madmv_ma_customer" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "quote" | "salesorder" | "site" | "ss_contacttraining" | "ss_holidaylist" | "ss_leaveapplication" | "ss_training">;
            get(name: "scheduledend"): XrmBase.DateAttribute;
            get(name: "subcategory"): XrmBase.StringAttribute;
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
            get(name: "category"): XrmBase.StringControl;
            get(name: "cc"): XrmBase.LookupControl<"account" | "contact" | "dmv_application" | "dmv_vehicle" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "madmv_ma_customer" | "queue" | "ss_leaveapplication" | "systemuser" | "unresolvedaddress">;
            get(name: "description"): XrmBase.StringControl;
            get(name: "from"): XrmBase.LookupControl<"queue" | "systemuser">;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "prioritycode"): XrmBase.OptionSetControl<email_prioritycode>;
            get(name: "regardingobjectid"): XrmBase.LookupControl<"account" | "asyncoperation" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "dmv_application" | "dmv_contactaddresshistory" | "dmv_contactvehicle" | "dmv_vehicle" | "entitlement" | "entitlementtemplate" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "madmv_ma_application" | "madmv_ma_customer" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "quote" | "salesorder" | "site" | "ss_contacttraining" | "ss_holidaylist" | "ss_leaveapplication" | "ss_training">;
            get(name: "scheduledend"): XrmBase.DateControl;
            get(name: "subcategory"): XrmBase.StringControl;
            get(name: "subject"): XrmBase.StringControl;
            get(name: "to"): XrmBase.LookupControl<"account" | "contact" | "dmv_application" | "dmv_vehicle" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "madmv_ma_customer" | "queue" | "ss_leaveapplication" | "systemuser" | "unresolvedaddress">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "email"): XrmBase.PageTab<Tabs.Email>;
            get(name: "attachments"): XrmBase.PageTab<Tabs.Attachments>;
            get(name: "details"): XrmBase.PageTab<Tabs.Details>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "from"): XrmBase.LookupAttribute<"queue" | "systemuser">;
        getAttribute(attributeName: "to"): XrmBase.LookupAttribute<"account" | "contact" | "dmv_application" | "dmv_vehicle" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "madmv_ma_customer" | "queue" | "ss_leaveapplication" | "systemuser" | "unresolvedaddress">;
        getAttribute(attributeName: "cc"): XrmBase.LookupAttribute<"account" | "contact" | "dmv_application" | "dmv_vehicle" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "madmv_ma_customer" | "queue" | "ss_leaveapplication" | "systemuser" | "unresolvedaddress">;
        getAttribute(attributeName: "bcc"): XrmBase.LookupAttribute<"account" | "contact" | "dmv_application" | "dmv_vehicle" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "madmv_ma_customer" | "queue" | "ss_leaveapplication" | "systemuser" | "unresolvedaddress">;
        getAttribute(attributeName: "subject"): XrmBase.StringAttribute;
        getAttribute(attributeName: "regardingobjectid"): XrmBase.LookupAttribute<"account" | "asyncoperation" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "dmv_application" | "dmv_contactaddresshistory" | "dmv_contactvehicle" | "dmv_vehicle" | "entitlement" | "entitlementtemplate" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "madmv_ma_application" | "madmv_ma_customer" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "quote" | "salesorder" | "site" | "ss_contacttraining" | "ss_holidaylist" | "ss_leaveapplication" | "ss_training">;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "prioritycode"): XrmBase.OptionSetAttribute<email_prioritycode>;
        getAttribute(attributeName: "actualdurationminutes"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "category"): XrmBase.StringAttribute;
        getAttribute(attributeName: "scheduledend"): XrmBase.DateAttribute;
        getAttribute(attributeName: "subcategory"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "from"): XrmBase.LookupControl<"queue" | "systemuser">;
        getControl(controlName: "to"): XrmBase.LookupControl<"account" | "contact" | "dmv_application" | "dmv_vehicle" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "madmv_ma_customer" | "queue" | "ss_leaveapplication" | "systemuser" | "unresolvedaddress">;
        getControl(controlName: "cc"): XrmBase.LookupControl<"account" | "contact" | "dmv_application" | "dmv_vehicle" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "madmv_ma_customer" | "queue" | "ss_leaveapplication" | "systemuser" | "unresolvedaddress">;
        getControl(controlName: "bcc"): XrmBase.LookupControl<"account" | "contact" | "dmv_application" | "dmv_vehicle" | "entitlement" | "equipment" | "knowledgearticle" | "lead" | "madmv_ma_customer" | "queue" | "ss_leaveapplication" | "systemuser" | "unresolvedaddress">;
        getControl(controlName: "subject"): XrmBase.StringControl;
        getControl(controlName: "regardingobjectid"): XrmBase.LookupControl<"account" | "asyncoperation" | "bookableresourcebooking" | "bookableresourcebookingheader" | "bulkoperation" | "campaign" | "campaignactivity" | "contact" | "contract" | "dmv_application" | "dmv_contactaddresshistory" | "dmv_contactvehicle" | "dmv_vehicle" | "entitlement" | "entitlementtemplate" | "incident" | "invoice" | "knowledgearticle" | "knowledgebaserecord" | "lead" | "madmv_ma_application" | "madmv_ma_customer" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingincident" | "msdyn_agreementbookingproduct" | "msdyn_agreementbookingservice" | "msdyn_agreementbookingservicetask" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoiceproduct" | "msdyn_agreementinvoicesetup" | "msdyn_bookingalertstatus" | "msdyn_bookingrule" | "msdyn_bookingtimestamp" | "msdyn_customerasset" | "msdyn_fieldservicesetting" | "msdyn_incidenttypecharacteristic" | "msdyn_incidenttypeproduct" | "msdyn_incidenttypeservice" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventoryjournal" | "msdyn_inventorytransfer" | "msdyn_payment" | "msdyn_paymentdetail" | "msdyn_paymentmethod" | "msdyn_paymentterm" | "msdyn_playbookinstance" | "msdyn_postalbum" | "msdyn_postalcode" | "msdyn_processnotes" | "msdyn_productinventory" | "msdyn_projectteam" | "msdyn_purchaseorder" | "msdyn_purchaseorderbill" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_purchaseorderreceiptproduct" | "msdyn_purchaseordersubstatus" | "msdyn_quotebookingincident" | "msdyn_quotebookingproduct" | "msdyn_quotebookingservice" | "msdyn_quotebookingservicetask" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmaproduct" | "msdyn_rmareceipt" | "msdyn_rmareceiptproduct" | "msdyn_rmasubstatus" | "msdyn_rtv" | "msdyn_rtvproduct" | "msdyn_rtvsubstatus" | "msdyn_shipvia" | "msdyn_systemuserschedulersetting" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_timeoffrequest" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workordercharacteristic" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderresourcerestriction" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "quote" | "salesorder" | "site" | "ss_contacttraining" | "ss_holidaylist" | "ss_leaveapplication" | "ss_training">;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "attachmentsGrid"): XrmBase.SubGridControl<"activitymimeattachment">;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "prioritycode"): XrmBase.OptionSetControl<email_prioritycode>;
        getControl(controlName: "actualdurationminutes"): XrmBase.NumberControl;
        getControl(controlName: "category"): XrmBase.StringControl;
        getControl(controlName: "scheduledend"): XrmBase.DateControl;
        getControl(controlName: "subcategory"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}