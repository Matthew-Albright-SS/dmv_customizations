declare namespace Form.entitlement.Main {
    namespace Entitlement {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "information"): XrmBase.PageSection;
                get(name: "notes"): XrmBase.PageSection;
                get(name: "entitlementterms"): XrmBase.PageSection;
                get(name: "fieldservice"): XrmBase.PageSection;
                get(name: "entitlementterms_2"): XrmBase.PageSection;
                get(name: "entitlementapplications"): XrmBase.PageSection;
                get(name: "entitlementtermsInUCI"): XrmBase.PageSection;
                get(name: "products"): XrmBase.PageSection;
                get(name: "contacts"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "allocationtypecode"): XrmBase.OptionSetAttribute<entitlement_allocationtype>;
            get(name: "customerid"): XrmBase.LookupAttribute<"account" | "contact">;
            get(name: "decreaseremainingon"): XrmBase.OptionSetAttribute<entitlement_decreaseremainingon>;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "enddate"): XrmBase.DateAttribute;
            get(name: "entitytype"): XrmBase.OptionSetAttribute<entitytype>;
            get(name: "isdefault"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_appliesto"): XrmBase.OptionSetAttribute<msdyn_entitlementappliesto>;
            get(name: "msdyn_entitlementprioritization"): XrmBase.NumberAttribute;
            get(name: "msdyn_percentdiscount"): XrmBase.NumberAttribute;
            get(name: "msdyn_pricelisttoapply"): XrmBase.LookupAttribute<"pricelevel">;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "remainingterms"): XrmBase.NumberAttribute;
            get(name: "restrictcasecreation"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "slaid"): XrmBase.LookupAttribute<"sla">;
            get(name: "startdate"): XrmBase.DateAttribute;
            get(name: "totalterms"): XrmBase.NumberAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "allocationtypecode"): XrmBase.OptionSetControl<entitlement_allocationtype>;
            get(name: "customerid"): XrmBase.LookupControl<"account" | "contact">;
            get(name: "decreaseremainingon"): XrmBase.OptionSetControl<entitlement_decreaseremainingon>;
            get(name: "description"): XrmBase.StringControl;
            get(name: "editableEntitlementChannelGridControl"): XrmBase.BaseControl;
            get(name: "enddate"): XrmBase.DateControl;
            get(name: "entitytype"): XrmBase.OptionSetControl<entitytype>;
            get(name: "grid_EntitlementApplications"): XrmBase.SubGridControl<"msdyn_entitlementapplication">;
            get(name: "grid_EntitlementChannel"): XrmBase.SubGridControl<"entitlementchannel">;
            get(name: "grid_EntitlementContacts"): XrmBase.SubGridControl<"contact">;
            get(name: "grid_EntitlementProducts"): XrmBase.SubGridControl<"product">;
            get(name: "isdefault"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_appliesto"): XrmBase.OptionSetControl<msdyn_entitlementappliesto>;
            get(name: "msdyn_entitlementprioritization"): XrmBase.NumberControl;
            get(name: "msdyn_percentdiscount"): XrmBase.NumberControl;
            get(name: "msdyn_pricelisttoapply"): XrmBase.LookupControl<"pricelevel">;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "remainingterms"): XrmBase.NumberControl;
            get(name: "restrictcasecreation"): XrmBase.OptionSetControl<any>;
            get(name: "slaid"): XrmBase.LookupControl<"sla">;
            get(name: "startdate"): XrmBase.DateControl;
            get(name: "totalterms"): XrmBase.NumberControl;
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
    interface Entitlement extends XrmBase.PageBase<Entitlement.Attributes, Entitlement.Tabs, Entitlement.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "customerid"): XrmBase.LookupAttribute<"account" | "contact">;
        getAttribute(attributeName: "startdate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "enddate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "restrictcasecreation"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "slaid"): XrmBase.LookupAttribute<"sla">;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "isdefault"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "entitytype"): XrmBase.OptionSetAttribute<entitytype>;
        getAttribute(attributeName: "allocationtypecode"): XrmBase.OptionSetAttribute<entitlement_allocationtype>;
        getAttribute(attributeName: "decreaseremainingon"): XrmBase.OptionSetAttribute<entitlement_decreaseremainingon>;
        getAttribute(attributeName: "totalterms"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "remainingterms"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_appliesto"): XrmBase.OptionSetAttribute<msdyn_entitlementappliesto>;
        getAttribute(attributeName: "msdyn_pricelisttoapply"): XrmBase.LookupAttribute<"pricelevel">;
        getAttribute(attributeName: "msdyn_percentdiscount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_entitlementprioritization"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "customerid"): XrmBase.LookupControl<"account" | "contact">;
        getControl(controlName: "startdate"): XrmBase.DateControl;
        getControl(controlName: "enddate"): XrmBase.DateControl;
        getControl(controlName: "restrictcasecreation"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "slaid"): XrmBase.LookupControl<"sla">;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "isdefault"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "entitytype"): XrmBase.OptionSetControl<entitytype>;
        getControl(controlName: "allocationtypecode"): XrmBase.OptionSetControl<entitlement_allocationtype>;
        getControl(controlName: "decreaseremainingon"): XrmBase.OptionSetControl<entitlement_decreaseremainingon>;
        getControl(controlName: "totalterms"): XrmBase.NumberControl;
        getControl(controlName: "remainingterms"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_appliesto"): XrmBase.OptionSetControl<msdyn_entitlementappliesto>;
        getControl(controlName: "msdyn_pricelisttoapply"): XrmBase.LookupControl<"pricelevel">;
        getControl(controlName: "msdyn_percentdiscount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_entitlementprioritization"): XrmBase.NumberControl;
        getControl(controlName: "grid_EntitlementChannel"): XrmBase.SubGridControl<"entitlementchannel">;
        getControl(controlName: "grid_EntitlementApplications"): XrmBase.SubGridControl<"msdyn_entitlementapplication">;
        getControl(controlName: "editableEntitlementChannelGridControl"): XrmBase.BaseControl;
        getControl(controlName: "grid_EntitlementProducts"): XrmBase.SubGridControl<"product">;
        getControl(controlName: "grid_EntitlementContacts"): XrmBase.SubGridControl<"contact">;
        getControl(controlName: string): undefined;
    }
}
