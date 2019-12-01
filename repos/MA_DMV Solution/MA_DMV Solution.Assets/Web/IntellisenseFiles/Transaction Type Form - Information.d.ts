declare namespace Form.msdyn_transactiontype.Main {
    namespace Information {
        namespace Tabs {
            interface fb738610ece54f2cbe4509ea8eb0cfe2 extends XrmBase.SectionCollectionBase {
                get(name: "{fb738610-ece5-4f2c-be45-09ea8eb0cfe2}_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_defaultunit"): XrmBase.LookupAttribute<"uom">;
            get(name: "msdyn_transactionclassification"): XrmBase.OptionSetAttribute<msdyn_transactionclassification>;
            get(name: "msdyn_transactiontypecode"): XrmBase.OptionSetAttribute<msdyn_transactiontypecode>;
            get(name: "msdyn_unitgroup"): XrmBase.LookupAttribute<"uomschedule">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_defaultunit"): XrmBase.LookupControl<"uom">;
            get(name: "msdyn_transactionclassification"): XrmBase.OptionSetControl<msdyn_transactionclassification>;
            get(name: "msdyn_transactiontypecode"): XrmBase.OptionSetControl<msdyn_transactiontypecode>;
            get(name: "msdyn_unitgroup"): XrmBase.LookupControl<"uomschedule">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{fb738610-ece5-4f2c-be45-09ea8eb0cfe2}"): XrmBase.PageTab<Tabs.fb738610ece54f2cbe4509ea8eb0cfe2>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_transactiontypecode"): XrmBase.OptionSetAttribute<msdyn_transactiontypecode>;
        getAttribute(attributeName: "msdyn_transactionclassification"): XrmBase.OptionSetAttribute<msdyn_transactionclassification>;
        getAttribute(attributeName: "msdyn_unitgroup"): XrmBase.LookupAttribute<"uomschedule">;
        getAttribute(attributeName: "msdyn_defaultunit"): XrmBase.LookupAttribute<"uom">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_transactiontypecode"): XrmBase.OptionSetControl<msdyn_transactiontypecode>;
        getControl(controlName: "msdyn_transactionclassification"): XrmBase.OptionSetControl<msdyn_transactionclassification>;
        getControl(controlName: "msdyn_unitgroup"): XrmBase.LookupControl<"uomschedule">;
        getControl(controlName: "msdyn_defaultunit"): XrmBase.LookupControl<"uom">;
        getControl(controlName: string): undefined;
    }
}
