declare namespace Form.msdyn_workordersubstatus.Main {
    namespace Information {
        namespace Tabs {
            interface _85c2e2ad7c04494492971ad79f174419 extends XrmBase.SectionCollectionBase {
                get(name: "{ccf61533-4615-4169-a113-b47baf392d8b}"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Notes extends XrmBase.SectionCollectionBase {
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_defaultsubstatus"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_systemstatus"): XrmBase.OptionSetAttribute<msdyn_wosystemstatus>;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_defaultsubstatus"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_systemstatus"): XrmBase.OptionSetControl<msdyn_wosystemstatus>;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{85c2e2ad-7c04-4944-9297-1ad79f174419}"): XrmBase.PageTab<Tabs._85c2e2ad7c04494492971ad79f174419>;
            get(name: "Notes"): XrmBase.PageTab<Tabs.Notes>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_defaultsubstatus"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_systemstatus"): XrmBase.OptionSetAttribute<msdyn_wosystemstatus>;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_defaultsubstatus"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_systemstatus"): XrmBase.OptionSetControl<msdyn_wosystemstatus>;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
