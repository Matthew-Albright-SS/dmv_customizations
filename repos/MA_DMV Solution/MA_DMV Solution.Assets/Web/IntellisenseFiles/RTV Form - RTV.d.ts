declare namespace Form.msdyn_rtv.Main {
    namespace RTV {
        namespace Tabs {
            interface _8b74a7e75edb4a599b5277fbd784e116 extends XrmBase.SectionCollectionBase {
                get(name: "{7e0518da-7ef7-44ee-922d-7bb9472eb9ef}"): XrmBase.PageSection;
                get(name: "{8b74a7e7-5edb-4a59-9b52-77fbd784e116}_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Rtvproductstab extends XrmBase.SectionCollectionBase {
                get(name: "tab_3_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_originatingrma"): XrmBase.LookupAttribute<"msdyn_rma">;
            get(name: "msdyn_substatus"): XrmBase.LookupAttribute<"msdyn_rtvsubstatus">;
            get(name: "msdyn_systemstatus"): XrmBase.OptionSetAttribute<msdyn_rtvsystemstatus>;
            get(name: "msdyn_totalamount"): XrmBase.NumberAttribute;
            get(name: "msdyn_vendor"): XrmBase.LookupAttribute<"account">;
            get(name: "msdyn_vendorcontact"): XrmBase.LookupAttribute<"contact">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_originatingrma"): XrmBase.LookupControl<"msdyn_rma">;
            get(name: "msdyn_substatus"): XrmBase.LookupControl<"msdyn_rtvsubstatus">;
            get(name: "msdyn_systemstatus"): XrmBase.OptionSetControl<msdyn_rtvsystemstatus>;
            get(name: "msdyn_totalamount"): XrmBase.NumberControl;
            get(name: "msdyn_vendor"): XrmBase.LookupControl<"account">;
            get(name: "msdyn_vendorcontact"): XrmBase.LookupControl<"contact">;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "rtvproductsgrid"): XrmBase.SubGridControl<"msdyn_rtvproduct">;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{8b74a7e7-5edb-4a59-9b52-77fbd784e116}"): XrmBase.PageTab<Tabs._8b74a7e75edb4a599b5277fbd784e116>;
            get(name: "rtvproductstab"): XrmBase.PageTab<Tabs.Rtvproductstab>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface RTV extends XrmBase.PageBase<RTV.Attributes, RTV.Tabs, RTV.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_vendor"): XrmBase.LookupAttribute<"account">;
        getAttribute(attributeName: "msdyn_vendorcontact"): XrmBase.LookupAttribute<"contact">;
        getAttribute(attributeName: "msdyn_systemstatus"): XrmBase.OptionSetAttribute<msdyn_rtvsystemstatus>;
        getAttribute(attributeName: "msdyn_substatus"): XrmBase.LookupAttribute<"msdyn_rtvsubstatus">;
        getAttribute(attributeName: "msdyn_originatingrma"): XrmBase.LookupAttribute<"msdyn_rma">;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "msdyn_totalamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_vendor"): XrmBase.LookupControl<"account">;
        getControl(controlName: "msdyn_vendorcontact"): XrmBase.LookupControl<"contact">;
        getControl(controlName: "msdyn_systemstatus"): XrmBase.OptionSetControl<msdyn_rtvsystemstatus>;
        getControl(controlName: "msdyn_substatus"): XrmBase.LookupControl<"msdyn_rtvsubstatus">;
        getControl(controlName: "msdyn_originatingrma"): XrmBase.LookupControl<"msdyn_rma">;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "msdyn_totalamount"): XrmBase.NumberControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "rtvproductsgrid"): XrmBase.SubGridControl<"msdyn_rtvproduct">;
        getControl(controlName: string): undefined;
    }
}
