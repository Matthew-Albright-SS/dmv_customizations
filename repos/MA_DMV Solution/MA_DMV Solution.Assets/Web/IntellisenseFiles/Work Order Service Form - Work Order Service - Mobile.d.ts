﻿declare namespace Form.msdyn_workorderservice.Main {
    namespace WorkOrderServiceMobile {
        namespace Tabs {
            interface Fstabgeneral extends XrmBase.SectionCollectionBase {
                get(name: "fstab_general_section_general"): XrmBase.PageSection;
                get(name: "fstab_general_section_description"): XrmBase.PageSection;
                get(name: "fstab_general_section_misc"): XrmBase.PageSection;
                get(name: "fstab_general_section_5"): XrmBase.PageSection;
                get(name: "fstab_sub_grids_section"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Fstabestimate extends XrmBase.SectionCollectionBase {
                get(name: "fstab_estimate_section_sale"): XrmBase.PageSection;
                get(name: "fstab_estimate_section_cost"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Fstabpricing extends XrmBase.SectionCollectionBase {
                get(name: "fstab_pricing_section_sale"): XrmBase.PageSection;
                get(name: "fstab_pricing_section_minimum_charge"): XrmBase.PageSection;
                get(name: "fstab_pricing_section_cost"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_additionalcost"): XrmBase.NumberAttribute;
            get(name: "msdyn_booking"): XrmBase.LookupAttribute<"bookableresourcebooking">;
            get(name: "msdyn_commissioncosts"): XrmBase.NumberAttribute;
            get(name: "msdyn_customerasset"): XrmBase.LookupAttribute<"msdyn_customerasset">;
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_disableentitlement"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_discountamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_discountpercent"): XrmBase.NumberAttribute;
            get(name: "msdyn_duration"): XrmBase.NumberAttribute;
            get(name: "msdyn_durationtobill"): XrmBase.NumberAttribute;
            get(name: "msdyn_entitlement"): XrmBase.LookupAttribute<"entitlement">;
            get(name: "msdyn_estimatediscountamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_estimatediscountpercent"): XrmBase.NumberAttribute;
            get(name: "msdyn_estimateduration"): XrmBase.NumberAttribute;
            get(name: "msdyn_estimatesubtotal"): XrmBase.NumberAttribute;
            get(name: "msdyn_estimatetotalamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_estimatetotalcost"): XrmBase.NumberAttribute;
            get(name: "msdyn_estimateunitamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_estimateunitcost"): XrmBase.NumberAttribute;
            get(name: "msdyn_internaldescription"): XrmBase.StringAttribute;
            get(name: "msdyn_lineorder"): XrmBase.NumberAttribute;
            get(name: "msdyn_linestatus"): XrmBase.OptionSetAttribute<msdyn_productservicestatus>;
            get(name: "msdyn_minimumchargeamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_minimumchargeduration"): XrmBase.NumberAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_pricelist"): XrmBase.LookupAttribute<"pricelevel">;
            get(name: "msdyn_service"): XrmBase.LookupAttribute<"product">;
            get(name: "msdyn_subtotal"): XrmBase.NumberAttribute;
            get(name: "msdyn_taxable"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_totalamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_totalcost"): XrmBase.NumberAttribute;
            get(name: "msdyn_unit"): XrmBase.LookupAttribute<"uom">;
            get(name: "msdyn_unitamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_unitcost"): XrmBase.NumberAttribute;
            get(name: "msdyn_workorder"): XrmBase.LookupAttribute<"msdyn_workorder">;
            get(name: "msdyn_workorderincident"): XrmBase.LookupAttribute<"msdyn_workorderincident">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_additionalcost"): XrmBase.NumberControl;
            get(name: "msdyn_booking"): XrmBase.LookupControl<"bookableresourcebooking">;
            get(name: "msdyn_commissioncosts"): XrmBase.NumberControl;
            get(name: "msdyn_customerasset"): XrmBase.LookupControl<"msdyn_customerasset">;
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_disableentitlement"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_discountamount"): XrmBase.NumberControl;
            get(name: "msdyn_discountpercent"): XrmBase.NumberControl;
            get(name: "msdyn_duration"): XrmBase.NumberControl;
            get(name: "msdyn_durationtobill"): XrmBase.NumberControl;
            get(name: "msdyn_entitlement"): XrmBase.LookupControl<"entitlement">;
            get(name: "msdyn_estimatediscountamount"): XrmBase.NumberControl;
            get(name: "msdyn_estimatediscountpercent"): XrmBase.NumberControl;
            get(name: "msdyn_estimateduration"): XrmBase.NumberControl;
            get(name: "msdyn_estimatesubtotal"): XrmBase.NumberControl;
            get(name: "msdyn_estimatetotalamount"): XrmBase.NumberControl;
            get(name: "msdyn_estimatetotalcost"): XrmBase.NumberControl;
            get(name: "msdyn_estimateunitamount"): XrmBase.NumberControl;
            get(name: "msdyn_estimateunitcost"): XrmBase.NumberControl;
            get(name: "msdyn_internaldescription"): XrmBase.StringControl;
            get(name: "msdyn_lineorder"): XrmBase.NumberControl;
            get(name: "msdyn_linestatus"): XrmBase.BaseControl;
            get(name: "msdyn_minimumchargeamount"): XrmBase.NumberControl;
            get(name: "msdyn_minimumchargeduration"): XrmBase.NumberControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_pricelist"): XrmBase.LookupControl<"pricelevel">;
            get(name: "msdyn_service"): XrmBase.LookupControl<"product">;
            get(name: "msdyn_subtotal"): XrmBase.NumberControl;
            get(name: "msdyn_taxable"): XrmBase.BaseControl;
            get(name: "msdyn_totalamount"): XrmBase.NumberControl;
            get(name: "msdyn_totalcost"): XrmBase.NumberControl;
            get(name: "msdyn_unit"): XrmBase.LookupControl<"uom">;
            get(name: "msdyn_unitamount"): XrmBase.NumberControl;
            get(name: "msdyn_unitcost"): XrmBase.NumberControl;
            get(name: "msdyn_workorder"): XrmBase.LookupControl<"msdyn_workorder">;
            get(name: "msdyn_workorderincident"): XrmBase.LookupControl<"msdyn_workorderincident">;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "fstab_general"): XrmBase.PageTab<Tabs.Fstabgeneral>;
            get(name: "fstab_estimate"): XrmBase.PageTab<Tabs.Fstabestimate>;
            get(name: "fstab_pricing"): XrmBase.PageTab<Tabs.Fstabpricing>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface WorkOrderServiceMobile extends XrmBase.PageBase<WorkOrderServiceMobile.Attributes, WorkOrderServiceMobile.Tabs, WorkOrderServiceMobile.Controls> {
        getAttribute(attributeName: "msdyn_service"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "msdyn_linestatus"): XrmBase.OptionSetAttribute<msdyn_productservicestatus>;
        getAttribute(attributeName: "msdyn_duration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_durationtobill"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_internaldescription"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_unit"): XrmBase.LookupAttribute<"uom">;
        getAttribute(attributeName: "msdyn_pricelist"): XrmBase.LookupAttribute<"pricelevel">;
        getAttribute(attributeName: "msdyn_taxable"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "msdyn_lineorder"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_disableentitlement"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_entitlement"): XrmBase.LookupAttribute<"entitlement">;
        getAttribute(attributeName: "msdyn_workorder"): XrmBase.LookupAttribute<"msdyn_workorder">;
        getAttribute(attributeName: "msdyn_booking"): XrmBase.LookupAttribute<"bookableresourcebooking">;
        getAttribute(attributeName: "msdyn_customerasset"): XrmBase.LookupAttribute<"msdyn_customerasset">;
        getAttribute(attributeName: "msdyn_workorderincident"): XrmBase.LookupAttribute<"msdyn_workorderincident">;
        getAttribute(attributeName: "msdyn_estimateduration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_estimateunitamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_estimatesubtotal"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_estimatediscountpercent"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_estimatediscountamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_estimatetotalamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_estimateunitcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_estimatetotalcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_unitamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_subtotal"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_discountpercent"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_discountamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_totalamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_minimumchargeduration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_minimumchargeamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_unitcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_additionalcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_commissioncosts"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_totalcost"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_service"): XrmBase.LookupControl<"product">;
        getControl(controlName: "msdyn_linestatus"): XrmBase.BaseControl;
        getControl(controlName: "msdyn_duration"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_durationtobill"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "msdyn_internaldescription"): XrmBase.StringControl;
        getControl(controlName: "msdyn_unit"): XrmBase.LookupControl<"uom">;
        getControl(controlName: "msdyn_pricelist"): XrmBase.LookupControl<"pricelevel">;
        getControl(controlName: "msdyn_taxable"): XrmBase.BaseControl;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "msdyn_lineorder"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_disableentitlement"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_entitlement"): XrmBase.LookupControl<"entitlement">;
        getControl(controlName: "msdyn_workorder"): XrmBase.LookupControl<"msdyn_workorder">;
        getControl(controlName: "msdyn_booking"): XrmBase.LookupControl<"bookableresourcebooking">;
        getControl(controlName: "msdyn_customerasset"): XrmBase.LookupControl<"msdyn_customerasset">;
        getControl(controlName: "msdyn_workorderincident"): XrmBase.LookupControl<"msdyn_workorderincident">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "msdyn_estimateduration"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_estimateunitamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_estimatesubtotal"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_estimatediscountpercent"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_estimatediscountamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_estimatetotalamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_estimateunitcost"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_estimatetotalcost"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_unitamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_subtotal"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_discountpercent"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_discountamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_totalamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_minimumchargeduration"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_minimumchargeamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_unitcost"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_additionalcost"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_commissioncosts"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_totalcost"): XrmBase.NumberControl;
        getControl(controlName: string): undefined;
    }
}
