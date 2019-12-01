declare namespace Form.msdyn_entitlementapplication.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_assetcategory"): XrmBase.LookupAttribute<"msdyn_customerassetcategory">;
            get(name: "msdyn_customerasset"): XrmBase.LookupAttribute<"msdyn_customerasset">;
            get(name: "msdyn_entitlement"): XrmBase.LookupAttribute<"entitlement">;
            get(name: "msdyn_incidenttype"): XrmBase.LookupAttribute<"msdyn_incidenttype">;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_serviceaccount"): XrmBase.LookupAttribute<"account">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_assetcategory"): XrmBase.LookupControl<"msdyn_customerassetcategory">;
            get(name: "msdyn_customerasset"): XrmBase.LookupControl<"msdyn_customerasset">;
            get(name: "msdyn_entitlement"): XrmBase.LookupControl<"entitlement">;
            get(name: "msdyn_incidenttype"): XrmBase.LookupControl<"msdyn_incidenttype">;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_serviceaccount"): XrmBase.LookupControl<"account">;
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
        getAttribute(attributeName: "msdyn_serviceaccount"): XrmBase.LookupAttribute<"account">;
        getAttribute(attributeName: "msdyn_customerasset"): XrmBase.LookupAttribute<"msdyn_customerasset">;
        getAttribute(attributeName: "msdyn_assetcategory"): XrmBase.LookupAttribute<"msdyn_customerassetcategory">;
        getAttribute(attributeName: "msdyn_incidenttype"): XrmBase.LookupAttribute<"msdyn_incidenttype">;
        getAttribute(attributeName: "msdyn_entitlement"): XrmBase.LookupAttribute<"entitlement">;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_serviceaccount"): XrmBase.LookupControl<"account">;
        getControl(controlName: "msdyn_customerasset"): XrmBase.LookupControl<"msdyn_customerasset">;
        getControl(controlName: "msdyn_assetcategory"): XrmBase.LookupControl<"msdyn_customerassetcategory">;
        getControl(controlName: "msdyn_incidenttype"): XrmBase.LookupControl<"msdyn_incidenttype">;
        getControl(controlName: "msdyn_entitlement"): XrmBase.LookupControl<"entitlement">;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: string): undefined;
    }
}
