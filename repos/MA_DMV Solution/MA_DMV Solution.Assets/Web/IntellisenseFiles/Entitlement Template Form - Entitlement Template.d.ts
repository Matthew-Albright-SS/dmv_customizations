declare namespace Form.entitlementtemplate.Main {
    namespace EntitlementTemplate {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "information"): XrmBase.PageSection;
                get(name: "entitlementterms"): XrmBase.PageSection;
                get(name: "entitlementtemplateterms"): XrmBase.PageSection;
                get(name: "entitlementtemplatetermsInUCI"): XrmBase.PageSection;
                get(name: "products"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "allocationtypecode"): XrmBase.OptionSetAttribute<entitlementtemplate_allocationtype>;
            get(name: "decreaseremainingon"): XrmBase.OptionSetAttribute<entitlementtemplate_decreaseremainingon>;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "enddate"): XrmBase.DateAttribute;
            get(name: "name"): XrmBase.StringAttribute;
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
            get(name: "allocationtypecode"): XrmBase.OptionSetControl<entitlementtemplate_allocationtype>;
            get(name: "decreaseremainingon"): XrmBase.OptionSetControl<entitlementtemplate_decreaseremainingon>;
            get(name: "description"): XrmBase.StringControl;
            get(name: "editableEntitlementChannelGridControl"): XrmBase.BaseControl;
            get(name: "enddate"): XrmBase.DateControl;
            get(name: "grid_EntitlementChannel"): XrmBase.SubGridControl<"entitlementtemplatechannel">;
            get(name: "grid_EntitlementProducts"): XrmBase.SubGridControl<"product">;
            get(name: "name"): XrmBase.StringControl;
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
    interface EntitlementTemplate extends XrmBase.PageBase<EntitlementTemplate.Attributes, EntitlementTemplate.Tabs, EntitlementTemplate.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "startdate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "enddate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "restrictcasecreation"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "slaid"): XrmBase.LookupAttribute<"sla">;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "allocationtypecode"): XrmBase.OptionSetAttribute<entitlementtemplate_allocationtype>;
        getAttribute(attributeName: "decreaseremainingon"): XrmBase.OptionSetAttribute<entitlementtemplate_decreaseremainingon>;
        getAttribute(attributeName: "totalterms"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "startdate"): XrmBase.DateControl;
        getControl(controlName: "enddate"): XrmBase.DateControl;
        getControl(controlName: "restrictcasecreation"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "slaid"): XrmBase.LookupControl<"sla">;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "allocationtypecode"): XrmBase.OptionSetControl<entitlementtemplate_allocationtype>;
        getControl(controlName: "decreaseremainingon"): XrmBase.OptionSetControl<entitlementtemplate_decreaseremainingon>;
        getControl(controlName: "totalterms"): XrmBase.NumberControl;
        getControl(controlName: "grid_EntitlementChannel"): XrmBase.SubGridControl<"entitlementtemplatechannel">;
        getControl(controlName: "editableEntitlementChannelGridControl"): XrmBase.BaseControl;
        getControl(controlName: "grid_EntitlementProducts"): XrmBase.SubGridControl<"product">;
        getControl(controlName: string): undefined;
    }
}
