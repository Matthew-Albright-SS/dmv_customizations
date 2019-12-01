declare namespace Form.msdyn_playbooktemplate.Main {
    namespace Information {
        namespace Tabs {
            interface _3a0ee21b6fbd455f913ea42fe8978461 extends XrmBase.SectionCollectionBase {
                get(name: "{30b01e30-ae8e-4d6d-aca8-95cfbb42c003}"): XrmBase.PageSection;
                get(name: "{3a0ee21b-6fbd-455f-913e-a42fe8978461}_section_4"): XrmBase.PageSection;
                get(name: "{3a0ee21b-6fbd-455f-913e-a42fe8978461}_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Monitoring extends XrmBase.SectionCollectionBase {
                get(name: "tab_4_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_categoryid"): XrmBase.LookupAttribute<"msdyn_playbookcategory">;
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_estimatedduration"): XrmBase.NumberAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_relatedentitylist"): XrmBase.StringAttribute;
            get(name: "msdyn_trackprogress"): XrmBase.OptionSetAttribute<boolean>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "AssociatedPlaybooks"): XrmBase.SubGridControl<"msdyn_playbookinstance">;
            get(name: "msdyn_categoryid"): XrmBase.LookupControl<"msdyn_playbookcategory">;
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_estimatedduration"): XrmBase.NumberControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_relatedentitylist"): XrmBase.BaseControl;
            get(name: "msdyn_trackprogress"): XrmBase.OptionSetControl<any>;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "PlaybookActivities"): XrmBase.SubGridControl<"msdyn_playbookactivity">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{3a0ee21b-6fbd-455f-913e-a42fe8978461}"): XrmBase.PageTab<Tabs._3a0ee21b6fbd455f913ea42fe8978461>;
            get(name: "Monitoring"): XrmBase.PageTab<Tabs.Monitoring>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_categoryid"): XrmBase.LookupAttribute<"msdyn_playbookcategory">;
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_trackprogress"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_estimatedduration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_relatedentitylist"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_categoryid"): XrmBase.LookupControl<"msdyn_playbookcategory">;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_trackprogress"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_estimatedduration"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "msdyn_relatedentitylist"): XrmBase.BaseControl;
        getControl(controlName: "PlaybookActivities"): XrmBase.SubGridControl<"msdyn_playbookactivity">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "AssociatedPlaybooks"): XrmBase.SubGridControl<"msdyn_playbookinstance">;
        getControl(controlName: string): undefined;
    }
}
