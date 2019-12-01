declare namespace Form.msdyn_organizationalunit.Main {
    namespace Information {
        namespace Tabs {
            interface _3d87514637394b349bb2abc10665669d extends XrmBase.SectionCollectionBase {
                get(name: "{7588a081-a7ee-4340-87a0-08057da1d0fe}"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface b2aa5effa9b648c0b71e6e464591eba4 extends XrmBase.SectionCollectionBase {
                get(name: "{d952ab6b-d6b2-462b-b63e-2555c38b9a95}"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_currency"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_latitude"): XrmBase.NumberAttribute;
            get(name: "msdyn_longitude"): XrmBase.NumberAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_currency"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_latitude"): XrmBase.NumberControl;
            get(name: "msdyn_longitude"): XrmBase.NumberControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "PriceList"): XrmBase.SubGridControl<"pricelevel">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{3d875146-3739-4b34-9bb2-abc10665669d}"): XrmBase.PageTab<Tabs._3d87514637394b349bb2abc10665669d>;
            get(name: "{b2aa5eff-a9b6-48c0-b71e-6e464591eba4}"): XrmBase.PageTab<Tabs.b2aa5effa9b648c0b71e6e464591eba4>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_currency"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "msdyn_latitude"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_longitude"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "msdyn_currency"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "PriceList"): XrmBase.SubGridControl<"pricelevel">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "msdyn_latitude"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_longitude"): XrmBase.NumberControl;
        getControl(controlName: string): undefined;
    }
}
