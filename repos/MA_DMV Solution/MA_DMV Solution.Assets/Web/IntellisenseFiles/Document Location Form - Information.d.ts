declare namespace Form.sharepointdocumentlocation.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "{272eb814-0769-5ebe-3ed1-e95a0b16853e}"): XrmBase.PageSection;
                get(name: "url option"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "absoluteurl"): XrmBase.StringAttribute;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "locationtype"): XrmBase.OptionSetAttribute<sharepointdocumentlocation_locationtype>;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "parentsiteorlocation"): XrmBase.LookupAttribute<"sharepointdocumentlocation" | "sharepointsite">;
            get(name: "regardingobjectid"): XrmBase.LookupAttribute<"account" | "dmv_vehicle" | "kbarticle" | "knowledgearticle" | "lead" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoicesetup" | "msdyn_bookingtimestamp" | "msdyn_expense" | "msdyn_incidenttypeproduct" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventorytransfer" | "msdyn_playbookactivity" | "msdyn_project" | "msdyn_purchaseorder" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmareceipt" | "msdyn_rtv" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "product" | "quote" | "salesliterature" | "ss_leaveapplication">;
            get(name: "relativeurl"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "absoluteurl"): XrmBase.StringControl;
            get(name: "description"): XrmBase.StringControl;
            get(name: "locationtype"): XrmBase.OptionSetControl<sharepointdocumentlocation_locationtype>;
            get(name: "name"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "parentsiteorlocation"): XrmBase.LookupControl<"sharepointdocumentlocation" | "sharepointsite">;
            get(name: "regardingobjectid"): XrmBase.LookupControl<"account" | "dmv_vehicle" | "kbarticle" | "knowledgearticle" | "lead" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoicesetup" | "msdyn_bookingtimestamp" | "msdyn_expense" | "msdyn_incidenttypeproduct" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventorytransfer" | "msdyn_playbookactivity" | "msdyn_project" | "msdyn_purchaseorder" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmareceipt" | "msdyn_rtv" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "product" | "quote" | "salesliterature" | "ss_leaveapplication">;
            get(name: "relativeurl"): XrmBase.StringControl;
            get(name: "urloption"): XrmBase.OptionSetControl<any>;
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
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "absoluteurl"): XrmBase.StringAttribute;
        getAttribute(attributeName: "parentsiteorlocation"): XrmBase.LookupAttribute<"sharepointdocumentlocation" | "sharepointsite">;
        getAttribute(attributeName: "relativeurl"): XrmBase.StringAttribute;
        getAttribute(attributeName: "regardingobjectid"): XrmBase.LookupAttribute<"account" | "dmv_vehicle" | "kbarticle" | "knowledgearticle" | "lead" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoicesetup" | "msdyn_bookingtimestamp" | "msdyn_expense" | "msdyn_incidenttypeproduct" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventorytransfer" | "msdyn_playbookactivity" | "msdyn_project" | "msdyn_purchaseorder" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmareceipt" | "msdyn_rtv" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "product" | "quote" | "salesliterature" | "ss_leaveapplication">;
        getAttribute(attributeName: "locationtype"): XrmBase.OptionSetAttribute<sharepointdocumentlocation_locationtype>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "urloption"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "absoluteurl"): XrmBase.StringControl;
        getControl(controlName: "parentsiteorlocation"): XrmBase.LookupControl<"sharepointdocumentlocation" | "sharepointsite">;
        getControl(controlName: "relativeurl"): XrmBase.StringControl;
        getControl(controlName: "regardingobjectid"): XrmBase.LookupControl<"account" | "dmv_vehicle" | "kbarticle" | "knowledgearticle" | "lead" | "msdyn_agreement" | "msdyn_agreementbookingdate" | "msdyn_agreementbookingsetup" | "msdyn_agreementinvoicedate" | "msdyn_agreementinvoicesetup" | "msdyn_bookingtimestamp" | "msdyn_expense" | "msdyn_incidenttypeproduct" | "msdyn_inventoryadjustment" | "msdyn_inventoryadjustmentproduct" | "msdyn_inventorytransfer" | "msdyn_playbookactivity" | "msdyn_project" | "msdyn_purchaseorder" | "msdyn_purchaseorderproduct" | "msdyn_purchaseorderreceipt" | "msdyn_resourceterritory" | "msdyn_rma" | "msdyn_rmareceipt" | "msdyn_rtv" | "msdyn_timegroup" | "msdyn_timegroupdetail" | "msdyn_warehouse" | "msdyn_workorder" | "msdyn_workorderincident" | "msdyn_workorderproduct" | "msdyn_workorderservice" | "msdyn_workorderservicetask" | "opportunity" | "product" | "quote" | "salesliterature" | "ss_leaveapplication">;
        getControl(controlName: "locationtype"): XrmBase.OptionSetControl<sharepointdocumentlocation_locationtype>;
        getControl(controlName: string): undefined;
    }
}
