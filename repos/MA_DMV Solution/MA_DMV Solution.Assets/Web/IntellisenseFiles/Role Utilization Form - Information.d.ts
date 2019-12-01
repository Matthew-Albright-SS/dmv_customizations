declare namespace Form.msdyn_roleutilization.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_role"): XrmBase.LookupAttribute<"bookableresourcecategory">;
            get(name: "msdyn_targetutilpercent"): XrmBase.NumberAttribute;
            get(name: "msdyn_utilpercent"): XrmBase.NumberAttribute;
            get(name: "msdyn_utilpercentdiff"): XrmBase.NumberAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_role"): XrmBase.LookupControl<"bookableresourcecategory">;
            get(name: "msdyn_targetutilpercent"): XrmBase.NumberControl;
            get(name: "msdyn_utilpercent"): XrmBase.NumberControl;
            get(name: "msdyn_utilpercentdiff"): XrmBase.NumberControl;
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
        getAttribute(attributeName: "msdyn_role"): XrmBase.LookupAttribute<"bookableresourcecategory">;
        getAttribute(attributeName: "msdyn_targetutilpercent"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_utilpercent"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_utilpercentdiff"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_role"): XrmBase.LookupControl<"bookableresourcecategory">;
        getControl(controlName: "msdyn_targetutilpercent"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_utilpercent"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_utilpercentdiff"): XrmBase.NumberControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: string): undefined;
    }
}
