declare namespace Form.msdyn_solutionhealthrule.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_owningsolutionid"): XrmBase.StringAttribute;
            get(name: "msdyn_resolutionaction"): XrmBase.LookupAttribute<"workflow">;
            get(name: "msdyn_solutionhealthrulesetid"): XrmBase.LookupAttribute<"msdyn_solutionhealthruleset">;
            get(name: "msdyn_uniquename"): XrmBase.StringAttribute;
            get(name: "msdyn_workflow"): XrmBase.LookupAttribute<"workflow">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_owningsolutionid"): XrmBase.StringControl;
            get(name: "msdyn_resolutionaction"): XrmBase.LookupControl<"workflow">;
            get(name: "msdyn_solutionhealthrulesetid"): XrmBase.LookupControl<"msdyn_solutionhealthruleset">;
            get(name: "msdyn_uniquename"): XrmBase.BaseControl;
            get(name: "msdyn_workflow"): XrmBase.LookupControl<"workflow">;
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
        getAttribute(attributeName: "msdyn_uniquename"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_solutionhealthrulesetid"): XrmBase.LookupAttribute<"msdyn_solutionhealthruleset">;
        getAttribute(attributeName: "msdyn_workflow"): XrmBase.LookupAttribute<"workflow">;
        getAttribute(attributeName: "msdyn_resolutionaction"): XrmBase.LookupAttribute<"workflow">;
        getAttribute(attributeName: "msdyn_owningsolutionid"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_uniquename"): XrmBase.BaseControl;
        getControl(controlName: "msdyn_solutionhealthrulesetid"): XrmBase.LookupControl<"msdyn_solutionhealthruleset">;
        getControl(controlName: "msdyn_workflow"): XrmBase.LookupControl<"workflow">;
        getControl(controlName: "msdyn_resolutionaction"): XrmBase.LookupControl<"workflow">;
        getControl(controlName: "msdyn_owningsolutionid"): XrmBase.StringControl;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: string): undefined;
    }
}
