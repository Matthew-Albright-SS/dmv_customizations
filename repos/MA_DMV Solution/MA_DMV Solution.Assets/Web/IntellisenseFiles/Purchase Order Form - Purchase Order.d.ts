﻿declare namespace Form.msdyn_purchaseorder.Main {
    namespace PurchaseOrder {
        namespace Tabs {
            interface _0898dbc47c5f4d66963f628e881b178b extends XrmBase.SectionCollectionBase {
                get(name: "{58b0ea4f-855f-4143-8703-d34b3849f302}"): XrmBase.PageSection;
                get(name: "tab_5_section_1"): XrmBase.PageSection;
                get(name: "{0898dbc4-7c5f-4d66-963f-628e881b178b}_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab4 extends XrmBase.SectionCollectionBase {
                get(name: "tab_4_section_1"): XrmBase.PageSection;
                get(name: "tab_6_section_1"): XrmBase.PageSection;
                get(name: "tab_4_section_4"): XrmBase.PageSection;
                get(name: "tab_4_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Address extends XrmBase.SectionCollectionBase {
                get(name: "tab_3_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab7 extends XrmBase.SectionCollectionBase {
                get(name: "tab_7_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_address1"): XrmBase.StringAttribute;
            get(name: "msdyn_address2"): XrmBase.StringAttribute;
            get(name: "msdyn_address3"): XrmBase.StringAttribute;
            get(name: "msdyn_addressname"): XrmBase.StringAttribute;
            get(name: "msdyn_amountbilled"): XrmBase.NumberAttribute;
            get(name: "msdyn_approvalstatus"): XrmBase.OptionSetAttribute<msdyn_poapprovalstatus>;
            get(name: "msdyn_approvedrejectedby"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "msdyn_booking"): XrmBase.LookupAttribute<"bookableresourcebooking">;
            get(name: "msdyn_city"): XrmBase.StringAttribute;
            get(name: "msdyn_country"): XrmBase.StringAttribute;
            get(name: "msdyn_dateexpected"): XrmBase.DateAttribute;
            get(name: "msdyn_latitude"): XrmBase.NumberAttribute;
            get(name: "msdyn_longitude"): XrmBase.NumberAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_orderedby"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "msdyn_paymentterm"): XrmBase.LookupAttribute<"msdyn_paymentterm">;
            get(name: "msdyn_postalcode"): XrmBase.StringAttribute;
            get(name: "msdyn_purchaseorderdate"): XrmBase.DateAttribute;
            get(name: "msdyn_receivetowarehouse"): XrmBase.LookupAttribute<"msdyn_warehouse">;
            get(name: "msdyn_requestedbyresource"): XrmBase.LookupAttribute<"bookableresource">;
            get(name: "msdyn_shipto"): XrmBase.OptionSetAttribute<msdyn_poshiptotype>;
            get(name: "msdyn_shipvia"): XrmBase.LookupAttribute<"msdyn_shipvia">;
            get(name: "msdyn_stateorprovince"): XrmBase.StringAttribute;
            get(name: "msdyn_substatus"): XrmBase.LookupAttribute<"msdyn_purchaseordersubstatus">;
            get(name: "msdyn_systemstatus"): XrmBase.OptionSetAttribute<msdyn_posystemstatus>;
            get(name: "msdyn_totalamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_vendor"): XrmBase.LookupAttribute<"account">;
            get(name: "msdyn_vendornote"): XrmBase.StringAttribute;
            get(name: "msdyn_workorder"): XrmBase.LookupAttribute<"msdyn_workorder">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_address1"): XrmBase.StringControl;
            get(name: "msdyn_address2"): XrmBase.StringControl;
            get(name: "msdyn_address3"): XrmBase.StringControl;
            get(name: "msdyn_addressname"): XrmBase.StringControl;
            get(name: "msdyn_amountbilled"): XrmBase.NumberControl;
            get(name: "msdyn_approvalstatus"): XrmBase.OptionSetControl<msdyn_poapprovalstatus>;
            get(name: "msdyn_approvedrejectedby"): XrmBase.LookupControl<"systemuser">;
            get(name: "msdyn_booking"): XrmBase.LookupControl<"bookableresourcebooking">;
            get(name: "msdyn_city"): XrmBase.StringControl;
            get(name: "msdyn_country"): XrmBase.StringControl;
            get(name: "msdyn_dateexpected"): XrmBase.DateControl;
            get(name: "msdyn_latitude"): XrmBase.NumberControl;
            get(name: "msdyn_longitude"): XrmBase.NumberControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_orderedby"): XrmBase.LookupControl<"systemuser">;
            get(name: "msdyn_paymentterm"): XrmBase.LookupControl<"msdyn_paymentterm">;
            get(name: "msdyn_postalcode"): XrmBase.StringControl;
            get(name: "msdyn_purchaseorderdate"): XrmBase.DateControl;
            get(name: "msdyn_receivetowarehouse"): XrmBase.LookupControl<"msdyn_warehouse">;
            get(name: "msdyn_requestedbyresource"): XrmBase.LookupControl<"bookableresource">;
            get(name: "msdyn_shipto"): XrmBase.OptionSetControl<msdyn_poshiptotype>;
            get(name: "msdyn_shipvia"): XrmBase.LookupControl<"msdyn_shipvia">;
            get(name: "msdyn_stateorprovince"): XrmBase.StringControl;
            get(name: "msdyn_substatus"): XrmBase.LookupControl<"msdyn_purchaseordersubstatus">;
            get(name: "msdyn_systemstatus"): XrmBase.OptionSetControl<msdyn_posystemstatus>;
            get(name: "msdyn_totalamount"): XrmBase.NumberControl;
            get(name: "msdyn_vendor"): XrmBase.LookupControl<"account">;
            get(name: "msdyn_vendornote"): XrmBase.StringControl;
            get(name: "msdyn_workorder"): XrmBase.LookupControl<"msdyn_workorder">;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "PurchaseOrderProductsGrid"): XrmBase.SubGridControl<"msdyn_purchaseorderproduct">;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{0898dbc4-7c5f-4d66-963f-628e881b178b}"): XrmBase.PageTab<Tabs._0898dbc47c5f4d66963f628e881b178b>;
            get(name: "tab_4"): XrmBase.PageTab<Tabs.Tab4>;
            get(name: "Address"): XrmBase.PageTab<Tabs.Address>;
            get(name: "tab_7"): XrmBase.PageTab<Tabs.Tab7>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface PurchaseOrder extends XrmBase.PageBase<PurchaseOrder.Attributes, PurchaseOrder.Tabs, PurchaseOrder.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_vendor"): XrmBase.LookupAttribute<"account">;
        getAttribute(attributeName: "msdyn_purchaseorderdate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_systemstatus"): XrmBase.OptionSetAttribute<msdyn_posystemstatus>;
        getAttribute(attributeName: "msdyn_substatus"): XrmBase.LookupAttribute<"msdyn_purchaseordersubstatus">;
        getAttribute(attributeName: "msdyn_approvalstatus"): XrmBase.OptionSetAttribute<msdyn_poapprovalstatus>;
        getAttribute(attributeName: "msdyn_dateexpected"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_shipto"): XrmBase.OptionSetAttribute<msdyn_poshiptotype>;
        getAttribute(attributeName: "msdyn_shipvia"): XrmBase.LookupAttribute<"msdyn_shipvia">;
        getAttribute(attributeName: "msdyn_paymentterm"): XrmBase.LookupAttribute<"msdyn_paymentterm">;
        getAttribute(attributeName: "msdyn_receivetowarehouse"): XrmBase.LookupAttribute<"msdyn_warehouse">;
        getAttribute(attributeName: "msdyn_vendornote"): XrmBase.StringAttribute;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_workorder"): XrmBase.LookupAttribute<"msdyn_workorder">;
        getAttribute(attributeName: "msdyn_booking"): XrmBase.LookupAttribute<"bookableresourcebooking">;
        getAttribute(attributeName: "msdyn_totalamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_amountbilled"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_requestedbyresource"): XrmBase.LookupAttribute<"bookableresource">;
        getAttribute(attributeName: "msdyn_approvedrejectedby"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "msdyn_orderedby"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "msdyn_addressname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_city"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_address1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_stateorprovince"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_address2"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_country"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_address3"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_latitude"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_postalcode"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_longitude"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_vendor"): XrmBase.LookupControl<"account">;
        getControl(controlName: "msdyn_purchaseorderdate"): XrmBase.DateControl;
        getControl(controlName: "msdyn_systemstatus"): XrmBase.OptionSetControl<msdyn_posystemstatus>;
        getControl(controlName: "msdyn_substatus"): XrmBase.LookupControl<"msdyn_purchaseordersubstatus">;
        getControl(controlName: "msdyn_approvalstatus"): XrmBase.OptionSetControl<msdyn_poapprovalstatus>;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "msdyn_dateexpected"): XrmBase.DateControl;
        getControl(controlName: "msdyn_shipto"): XrmBase.OptionSetControl<msdyn_poshiptotype>;
        getControl(controlName: "msdyn_shipvia"): XrmBase.LookupControl<"msdyn_shipvia">;
        getControl(controlName: "msdyn_paymentterm"): XrmBase.LookupControl<"msdyn_paymentterm">;
        getControl(controlName: "msdyn_receivetowarehouse"): XrmBase.LookupControl<"msdyn_warehouse">;
        getControl(controlName: "msdyn_vendornote"): XrmBase.StringControl;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_workorder"): XrmBase.LookupControl<"msdyn_workorder">;
        getControl(controlName: "msdyn_booking"): XrmBase.LookupControl<"bookableresourcebooking">;
        getControl(controlName: "msdyn_totalamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_amountbilled"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_requestedbyresource"): XrmBase.LookupControl<"bookableresource">;
        getControl(controlName: "msdyn_approvedrejectedby"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "msdyn_orderedby"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "msdyn_addressname"): XrmBase.StringControl;
        getControl(controlName: "msdyn_city"): XrmBase.StringControl;
        getControl(controlName: "msdyn_address1"): XrmBase.StringControl;
        getControl(controlName: "msdyn_stateorprovince"): XrmBase.StringControl;
        getControl(controlName: "msdyn_address2"): XrmBase.StringControl;
        getControl(controlName: "msdyn_country"): XrmBase.StringControl;
        getControl(controlName: "msdyn_address3"): XrmBase.StringControl;
        getControl(controlName: "msdyn_latitude"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_postalcode"): XrmBase.StringControl;
        getControl(controlName: "msdyn_longitude"): XrmBase.NumberControl;
        getControl(controlName: "PurchaseOrderProductsGrid"): XrmBase.SubGridControl<"msdyn_purchaseorderproduct">;
        getControl(controlName: string): undefined;
    }
}