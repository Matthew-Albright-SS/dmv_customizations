declare namespace Form.msdyn_requirementresourcepreference.Main {
    namespace Information {
        namespace Tabs {
            interface Tab2 extends XrmBase.SectionCollectionBase {
                get(name: "tab_2_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_account"): XrmBase.LookupAttribute<"account">;
            get(name: "msdyn_bookableresource"): XrmBase.LookupAttribute<"bookableresource">;
            get(name: "msdyn_cascade"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_expirationdate"): XrmBase.DateAttribute;
            get(name: "msdyn_preferencetype"): XrmBase.OptionSetAttribute<msdyn_requirementresourcepreference_msdyn_preferencetype>;
            get(name: "msdyn_resourcerequirement"): XrmBase.LookupAttribute<"msdyn_resourcerequirement">;
            get(name: "msdyn_workorder"): XrmBase.LookupAttribute<"msdyn_workorder">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_account"): XrmBase.LookupControl<"account">;
            get(name: "msdyn_bookableresource"): XrmBase.LookupControl<"bookableresource">;
            get(name: "msdyn_cascade"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_expirationdate"): XrmBase.DateControl;
            get(name: "msdyn_preferencetype"): XrmBase.OptionSetControl<msdyn_requirementresourcepreference_msdyn_preferencetype>;
            get(name: "msdyn_resourcerequirement"): XrmBase.LookupControl<"msdyn_resourcerequirement">;
            get(name: "msdyn_workorder"): XrmBase.LookupControl<"msdyn_workorder">;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "tab_2"): XrmBase.PageTab<Tabs.Tab2>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_bookableresource"): XrmBase.LookupAttribute<"bookableresource">;
        getAttribute(attributeName: "msdyn_preferencetype"): XrmBase.OptionSetAttribute<msdyn_requirementresourcepreference_msdyn_preferencetype>;
        getAttribute(attributeName: "msdyn_resourcerequirement"): XrmBase.LookupAttribute<"msdyn_resourcerequirement">;
        getAttribute(attributeName: "msdyn_expirationdate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_account"): XrmBase.LookupAttribute<"account">;
        getAttribute(attributeName: "msdyn_workorder"): XrmBase.LookupAttribute<"msdyn_workorder">;
        getAttribute(attributeName: "msdyn_cascade"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_bookableresource"): XrmBase.LookupControl<"bookableresource">;
        getControl(controlName: "msdyn_preferencetype"): XrmBase.OptionSetControl<msdyn_requirementresourcepreference_msdyn_preferencetype>;
        getControl(controlName: "msdyn_resourcerequirement"): XrmBase.LookupControl<"msdyn_resourcerequirement">;
        getControl(controlName: "msdyn_expirationdate"): XrmBase.DateControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "msdyn_account"): XrmBase.LookupControl<"account">;
        getControl(controlName: "msdyn_workorder"): XrmBase.LookupControl<"msdyn_workorder">;
        getControl(controlName: "msdyn_cascade"): XrmBase.OptionSetControl<any>;
        getControl(controlName: string): undefined;
    }
}
