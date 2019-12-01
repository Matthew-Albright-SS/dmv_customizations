declare namespace Form.msdyn_incidenttype_requirementgroup.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_incidenttypeid"): XrmBase.LookupAttribute<"msdyn_incidenttype">;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_requirementgroupid"): XrmBase.LookupAttribute<"msdyn_requirementgroup">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_incidenttypeid"): XrmBase.LookupControl<"msdyn_incidenttype">;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_requirementgroupid"): XrmBase.LookupControl<"msdyn_requirementgroup">;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_incidenttypeid"): XrmBase.LookupAttribute<"msdyn_incidenttype">;
        getAttribute(attributeName: "msdyn_requirementgroupid"): XrmBase.LookupAttribute<"msdyn_requirementgroup">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_incidenttypeid"): XrmBase.LookupControl<"msdyn_incidenttype">;
        getControl(controlName: "msdyn_requirementgroupid"): XrmBase.LookupControl<"msdyn_requirementgroup">;
        getControl(controlName: string): undefined;
    }
}
