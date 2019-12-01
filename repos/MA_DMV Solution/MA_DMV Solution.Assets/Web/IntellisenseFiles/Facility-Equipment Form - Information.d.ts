declare namespace Form.equipment.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "section 1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "businessunitid"): XrmBase.LookupAttribute<"businessunit">;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "emailaddress"): XrmBase.StringAttribute;
            get(name: "msdyn_organizationalunitid"): XrmBase.LookupAttribute<"msdyn_organizationalunit">;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "siteid"): XrmBase.LookupAttribute<"site">;
            get(name: "timezonecode"): XrmBase.NumberAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "businessunitid"): XrmBase.LookupControl<"businessunit">;
            get(name: "description"): XrmBase.StringControl;
            get(name: "emailaddress"): XrmBase.StringControl;
            get(name: "msdyn_organizationalunitid"): XrmBase.LookupControl<"msdyn_organizationalunit">;
            get(name: "name"): XrmBase.StringControl;
            get(name: "siteid"): XrmBase.LookupControl<"site">;
            get(name: "timezonecode"): XrmBase.BaseControl;
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
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "businessunitid"): XrmBase.LookupAttribute<"businessunit">;
        getAttribute(attributeName: "siteid"): XrmBase.LookupAttribute<"site">;
        getAttribute(attributeName: "msdyn_organizationalunitid"): XrmBase.LookupAttribute<"msdyn_organizationalunit">;
        getAttribute(attributeName: "emailaddress"): XrmBase.StringAttribute;
        getAttribute(attributeName: "timezonecode"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "businessunitid"): XrmBase.LookupControl<"businessunit">;
        getControl(controlName: "siteid"): XrmBase.LookupControl<"site">;
        getControl(controlName: "msdyn_organizationalunitid"): XrmBase.LookupControl<"msdyn_organizationalunit">;
        getControl(controlName: "emailaddress"): XrmBase.StringControl;
        getControl(controlName: "timezonecode"): XrmBase.BaseControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
