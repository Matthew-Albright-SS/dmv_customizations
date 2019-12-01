declare namespace Form.discount.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "discount information"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "amount"): XrmBase.NumberAttribute;
            get(name: "discounttypeid"): XrmBase.LookupAttribute<"discounttype">;
            get(name: "highquantity"): XrmBase.NumberAttribute;
            get(name: "lowquantity"): XrmBase.NumberAttribute;
            get(name: "percentage"): XrmBase.NumberAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "amount"): XrmBase.NumberControl;
            get(name: "discounttypeid"): XrmBase.LookupControl<"discounttype">;
            get(name: "highquantity"): XrmBase.NumberControl;
            get(name: "lowquantity"): XrmBase.NumberControl;
            get(name: "percentage"): XrmBase.NumberControl;
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
        getAttribute(attributeName: "discounttypeid"): XrmBase.LookupAttribute<"discounttype">;
        getAttribute(attributeName: "lowquantity"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "highquantity"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "amount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "percentage"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "discounttypeid"): XrmBase.LookupControl<"discounttype">;
        getControl(controlName: "lowquantity"): XrmBase.NumberControl;
        getControl(controlName: "highquantity"): XrmBase.NumberControl;
        getControl(controlName: "amount"): XrmBase.NumberControl;
        getControl(controlName: "percentage"): XrmBase.NumberControl;
        getControl(controlName: string): undefined;
    }
}
