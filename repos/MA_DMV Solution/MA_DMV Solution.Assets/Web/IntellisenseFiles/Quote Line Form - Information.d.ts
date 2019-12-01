﻿declare namespace Form.quotedetail.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "quote detail information"): XrmBase.PageSection;
                get(name: "pricing"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Delivery extends XrmBase.SectionCollectionBase {
                get(name: "delivery information"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Address extends XrmBase.SectionCollectionBase {
                get(name: "ship to address"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "baseamount"): XrmBase.NumberAttribute;
            get(name: "extendedamount"): XrmBase.NumberAttribute;
            get(name: "ispriceoverridden"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "isproductoverridden"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "manualdiscountamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_linetype"): XrmBase.OptionSetAttribute<msdyn_linetype>;
            get(name: "priceperunit"): XrmBase.NumberAttribute;
            get(name: "productdescription"): XrmBase.StringAttribute;
            get(name: "productid"): XrmBase.LookupAttribute<"product">;
            get(name: "quantity"): XrmBase.NumberAttribute;
            get(name: "quoteid"): XrmBase.LookupAttribute<"quote">;
            get(name: "requestdeliveryby"): XrmBase.DateAttribute;
            get(name: "salesrepid"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "shipto_city"): XrmBase.StringAttribute;
            get(name: "shipto_contactname"): XrmBase.StringAttribute;
            get(name: "shipto_country"): XrmBase.StringAttribute;
            get(name: "shipto_fax"): XrmBase.StringAttribute;
            get(name: "shipto_freighttermscode"): XrmBase.OptionSetAttribute<quotedetail_shipto_freighttermscode>;
            get(name: "shipto_line1"): XrmBase.StringAttribute;
            get(name: "shipto_line2"): XrmBase.StringAttribute;
            get(name: "shipto_line3"): XrmBase.StringAttribute;
            get(name: "shipto_name"): XrmBase.StringAttribute;
            get(name: "shipto_postalcode"): XrmBase.StringAttribute;
            get(name: "shipto_stateorprovince"): XrmBase.StringAttribute;
            get(name: "shipto_telephone"): XrmBase.StringAttribute;
            get(name: "tax"): XrmBase.NumberAttribute;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: "uomid"): XrmBase.LookupAttribute<"uom">;
            get(name: "volumediscountamount"): XrmBase.NumberAttribute;
            get(name: "willcall"): XrmBase.OptionSetAttribute<boolean>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "baseamount"): XrmBase.NumberControl;
            get(name: "extendedamount"): XrmBase.NumberControl;
            get(name: "ispriceoverridden"): XrmBase.BaseControl;
            get(name: "isproductoverridden"): XrmBase.BaseControl;
            get(name: "manualdiscountamount"): XrmBase.NumberControl;
            get(name: "msdyn_linetype"): XrmBase.OptionSetControl<msdyn_linetype>;
            get(name: "priceperunit"): XrmBase.NumberControl;
            get(name: "productdescription"): XrmBase.StringControl;
            get(name: "productid"): XrmBase.LookupControl<"product">;
            get(name: "quantity"): XrmBase.NumberControl;
            get(name: "quoteid"): XrmBase.LookupControl<"quote">;
            get(name: "requestdeliveryby"): XrmBase.DateControl;
            get(name: "salesrepid"): XrmBase.LookupControl<"systemuser">;
            get(name: "shipto_city"): XrmBase.StringControl;
            get(name: "shipto_contactname"): XrmBase.StringControl;
            get(name: "shipto_country"): XrmBase.StringControl;
            get(name: "shipto_fax"): XrmBase.StringControl;
            get(name: "shipto_freighttermscode"): XrmBase.OptionSetControl<quotedetail_shipto_freighttermscode>;
            get(name: "shipto_line1"): XrmBase.StringControl;
            get(name: "shipto_line2"): XrmBase.StringControl;
            get(name: "shipto_line3"): XrmBase.StringControl;
            get(name: "shipto_name"): XrmBase.StringControl;
            get(name: "shipto_postalcode"): XrmBase.StringControl;
            get(name: "shipto_stateorprovince"): XrmBase.StringControl;
            get(name: "shipto_telephone"): XrmBase.StringControl;
            get(name: "tax"): XrmBase.NumberControl;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: "uomid"): XrmBase.LookupControl<"uom">;
            get(name: "volumediscountamount"): XrmBase.NumberControl;
            get(name: "willcall"): XrmBase.OptionSetControl<any>;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "general"): XrmBase.PageTab<Tabs.General>;
            get(name: "delivery"): XrmBase.PageTab<Tabs.Delivery>;
            get(name: "address"): XrmBase.PageTab<Tabs.Address>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "isproductoverridden"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "productdescription"): XrmBase.StringAttribute;
        getAttribute(attributeName: "productid"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "uomid"): XrmBase.LookupAttribute<"uom">;
        getAttribute(attributeName: "ispriceoverridden"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "priceperunit"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "quoteid"): XrmBase.LookupAttribute<"quote">;
        getAttribute(attributeName: "volumediscountamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_linetype"): XrmBase.OptionSetAttribute<msdyn_linetype>;
        getAttribute(attributeName: "quantity"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "baseamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "manualdiscountamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "tax"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "extendedamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "requestdeliveryby"): XrmBase.DateAttribute;
        getAttribute(attributeName: "salesrepid"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "willcall"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "shipto_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_postalcode"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_line1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_country"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_line2"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_telephone"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_line3"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_fax"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_city"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_freighttermscode"): XrmBase.OptionSetAttribute<quotedetail_shipto_freighttermscode>;
        getAttribute(attributeName: "shipto_stateorprovince"): XrmBase.StringAttribute;
        getAttribute(attributeName: "shipto_contactname"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "isproductoverridden"): XrmBase.BaseControl;
        getControl(controlName: "productdescription"): XrmBase.StringControl;
        getControl(controlName: "productid"): XrmBase.LookupControl<"product">;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "uomid"): XrmBase.LookupControl<"uom">;
        getControl(controlName: "ispriceoverridden"): XrmBase.BaseControl;
        getControl(controlName: "priceperunit"): XrmBase.NumberControl;
        getControl(controlName: "quoteid"): XrmBase.LookupControl<"quote">;
        getControl(controlName: "volumediscountamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_linetype"): XrmBase.OptionSetControl<msdyn_linetype>;
        getControl(controlName: "quantity"): XrmBase.NumberControl;
        getControl(controlName: "baseamount"): XrmBase.NumberControl;
        getControl(controlName: "manualdiscountamount"): XrmBase.NumberControl;
        getControl(controlName: "tax"): XrmBase.NumberControl;
        getControl(controlName: "extendedamount"): XrmBase.NumberControl;
        getControl(controlName: "requestdeliveryby"): XrmBase.DateControl;
        getControl(controlName: "salesrepid"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "willcall"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "shipto_name"): XrmBase.StringControl;
        getControl(controlName: "shipto_postalcode"): XrmBase.StringControl;
        getControl(controlName: "shipto_line1"): XrmBase.StringControl;
        getControl(controlName: "shipto_country"): XrmBase.StringControl;
        getControl(controlName: "shipto_line2"): XrmBase.StringControl;
        getControl(controlName: "shipto_telephone"): XrmBase.StringControl;
        getControl(controlName: "shipto_line3"): XrmBase.StringControl;
        getControl(controlName: "shipto_fax"): XrmBase.StringControl;
        getControl(controlName: "shipto_city"): XrmBase.StringControl;
        getControl(controlName: "shipto_freighttermscode"): XrmBase.OptionSetControl<quotedetail_shipto_freighttermscode>;
        getControl(controlName: "shipto_stateorprovince"): XrmBase.StringControl;
        getControl(controlName: "shipto_contactname"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
