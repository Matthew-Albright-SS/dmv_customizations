declare namespace Form.contractdetail.Main {
    namespace ContractDetail {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "contract detail information"): XrmBase.PageSection;
                get(name: "pricing"): XrmBase.PageSection;
                get(name: "administration"): XrmBase.PageSection;
                get(name: "notes"): XrmBase.PageSection;
                get(name: "allotment details"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "activeon"): XrmBase.DateAttribute;
            get(name: "allotmentsremaining"): XrmBase.NumberAttribute;
            get(name: "allotmentsused"): XrmBase.NumberAttribute;
            get(name: "customerid"): XrmBase.LookupAttribute<"account" | "contact">;
            get(name: "discount"): XrmBase.NumberAttribute;
            get(name: "discountpercentage"): XrmBase.NumberAttribute;
            get(name: "expireson"): XrmBase.DateAttribute;
            get(name: "initialquantity"): XrmBase.NumberAttribute;
            get(name: "net"): XrmBase.NumberAttribute;
            get(name: "price"): XrmBase.NumberAttribute;
            get(name: "productid"): XrmBase.LookupAttribute<"product">;
            get(name: "productserialnumber"): XrmBase.StringAttribute;
            get(name: "rate"): XrmBase.NumberAttribute;
            get(name: "serviceaddress"): XrmBase.LookupAttribute<"customeraddress">;
            get(name: "title"): XrmBase.StringAttribute;
            get(name: "totalallotments"): XrmBase.NumberAttribute;
            get(name: "uomid"): XrmBase.LookupAttribute<"uom">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "activeon"): XrmBase.DateControl;
            get(name: "allotmentsremaining"): XrmBase.NumberControl;
            get(name: "allotmentsused"): XrmBase.NumberControl;
            get(name: "customerid"): XrmBase.LookupControl<"account" | "contact">;
            get(name: "discount"): XrmBase.NumberControl;
            get(name: "discountpercentage"): XrmBase.NumberControl;
            get(name: "expireson"): XrmBase.DateControl;
            get(name: "initialquantity"): XrmBase.NumberControl;
            get(name: "net"): XrmBase.NumberControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "price"): XrmBase.NumberControl;
            get(name: "productid"): XrmBase.LookupControl<"product">;
            get(name: "productserialnumber"): XrmBase.StringControl;
            get(name: "rate"): XrmBase.NumberControl;
            get(name: "serviceaddress"): XrmBase.LookupControl<"customeraddress">;
            get(name: "title"): XrmBase.StringControl;
            get(name: "totalallotments"): XrmBase.NumberControl;
            get(name: "uomid"): XrmBase.LookupControl<"uom">;
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
    interface ContractDetail extends XrmBase.PageBase<ContractDetail.Attributes, ContractDetail.Tabs, ContractDetail.Controls> {
        getAttribute(attributeName: "title"): XrmBase.StringAttribute;
        getAttribute(attributeName: "productid"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "uomid"): XrmBase.LookupAttribute<"uom">;
        getAttribute(attributeName: "serviceaddress"): XrmBase.LookupAttribute<"customeraddress">;
        getAttribute(attributeName: "activeon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "expireson"): XrmBase.DateAttribute;
        getAttribute(attributeName: "initialquantity"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "rate"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "price"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "discount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "discountpercentage"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "net"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "customerid"): XrmBase.LookupAttribute<"account" | "contact">;
        getAttribute(attributeName: "productserialnumber"): XrmBase.StringAttribute;
        getAttribute(attributeName: "totalallotments"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "allotmentsused"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "allotmentsremaining"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "title"): XrmBase.StringControl;
        getControl(controlName: "productid"): XrmBase.LookupControl<"product">;
        getControl(controlName: "uomid"): XrmBase.LookupControl<"uom">;
        getControl(controlName: "serviceaddress"): XrmBase.LookupControl<"customeraddress">;
        getControl(controlName: "activeon"): XrmBase.DateControl;
        getControl(controlName: "expireson"): XrmBase.DateControl;
        getControl(controlName: "initialquantity"): XrmBase.NumberControl;
        getControl(controlName: "rate"): XrmBase.NumberControl;
        getControl(controlName: "price"): XrmBase.NumberControl;
        getControl(controlName: "discount"): XrmBase.NumberControl;
        getControl(controlName: "discountpercentage"): XrmBase.NumberControl;
        getControl(controlName: "net"): XrmBase.NumberControl;
        getControl(controlName: "customerid"): XrmBase.LookupControl<"account" | "contact">;
        getControl(controlName: "productserialnumber"): XrmBase.StringControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "totalallotments"): XrmBase.NumberControl;
        getControl(controlName: "allotmentsused"): XrmBase.NumberControl;
        getControl(controlName: "allotmentsremaining"): XrmBase.NumberControl;
        getControl(controlName: string): undefined;
    }
}
