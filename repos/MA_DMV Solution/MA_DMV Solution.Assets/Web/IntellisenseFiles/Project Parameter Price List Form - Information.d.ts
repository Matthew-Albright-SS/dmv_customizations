declare namespace Form.msdyn_projectparameterpricelist.Main {
    namespace Information {
        namespace Tabs {
            interface _6c6c63a120b347809c4cc1275a68a1ee extends XrmBase.SectionCollectionBase {
                get(name: "{6c6c63a1-20b3-4780-9c4c-c1275a68a1ee}_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_pricelist"): XrmBase.LookupAttribute<"pricelevel">;
            get(name: "msdyn_projectparameter"): XrmBase.LookupAttribute<"msdyn_projectparameter">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_pricelist"): XrmBase.LookupControl<"pricelevel">;
            get(name: "msdyn_projectparameter"): XrmBase.LookupControl<"msdyn_projectparameter">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{6c6c63a1-20b3-4780-9c4c-c1275a68a1ee}"): XrmBase.PageTab<Tabs._6c6c63a120b347809c4cc1275a68a1ee>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_projectparameter"): XrmBase.LookupAttribute<"msdyn_projectparameter">;
        getAttribute(attributeName: "msdyn_pricelist"): XrmBase.LookupAttribute<"pricelevel">;
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_projectparameter"): XrmBase.LookupControl<"msdyn_projectparameter">;
        getControl(controlName: "msdyn_pricelist"): XrmBase.LookupControl<"pricelevel">;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
