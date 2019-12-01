declare namespace Form.msdyn_delegation.Main {
    namespace Information {
        namespace Tabs {
            interface ac9573f308ac45c89c69d7762df99dd8 extends XrmBase.SectionCollectionBase {
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_delegationfrom"): XrmBase.LookupAttribute<"bookableresource">;
            get(name: "msdyn_delegationto"): XrmBase.LookupAttribute<"bookableresource">;
            get(name: "msdyn_enddate"): XrmBase.DateAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_startdate"): XrmBase.DateAttribute;
            get(name: "msdyn_type"): XrmBase.OptionSetAttribute<msdyn_delegation_msdyn_type>;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_delegationfrom"): XrmBase.LookupControl<"bookableresource">;
            get(name: "msdyn_delegationto"): XrmBase.LookupControl<"bookableresource">;
            get(name: "msdyn_enddate"): XrmBase.DateControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_startdate"): XrmBase.DateControl;
            get(name: "msdyn_type"): XrmBase.OptionSetControl<msdyn_delegation_msdyn_type>;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{ac9573f3-08ac-45c8-9c69-d7762df99dd8}"): XrmBase.PageTab<Tabs.ac9573f308ac45c89c69d7762df99dd8>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_type"): XrmBase.OptionSetAttribute<msdyn_delegation_msdyn_type>;
        getAttribute(attributeName: "msdyn_delegationfrom"): XrmBase.LookupAttribute<"bookableresource">;
        getAttribute(attributeName: "msdyn_delegationto"): XrmBase.LookupAttribute<"bookableresource">;
        getAttribute(attributeName: "msdyn_startdate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_enddate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_type"): XrmBase.OptionSetControl<msdyn_delegation_msdyn_type>;
        getControl(controlName: "msdyn_delegationfrom"): XrmBase.LookupControl<"bookableresource">;
        getControl(controlName: "msdyn_delegationto"): XrmBase.LookupControl<"bookableresource">;
        getControl(controlName: "msdyn_startdate"): XrmBase.DateControl;
        getControl(controlName: "msdyn_enddate"): XrmBase.DateControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
