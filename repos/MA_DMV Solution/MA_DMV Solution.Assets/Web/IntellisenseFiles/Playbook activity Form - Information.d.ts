declare namespace Form.msdyn_playbookactivity.Main {
    namespace Information {
        namespace Tabs {
            interface Documentssharepoint extends XrmBase.SectionCollectionBase {
                get(name: "documents_sharepoint_section"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_activityLogicalName"): XrmBase.StringAttribute;
            get(name: "msdyn_playbookactivity_json"): XrmBase.StringAttribute;
            get(name: "msdyn_subject"): XrmBase.StringAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "DocumentsSubGrid"): XrmBase.SubGridControl<"sharepointdocument">;
            get(name: "msdyn_activityLogicalName"): XrmBase.BaseControl;
            get(name: "msdyn_subject"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "playbookactivity_control"): XrmBase.BaseControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "documents_sharepoint"): XrmBase.PageTab<Tabs.Documentssharepoint>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_subject"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_playbookactivity_json"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_activityLogicalName"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_subject"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "playbookactivity_control"): XrmBase.BaseControl;
        getControl(controlName: "msdyn_activityLogicalName"): XrmBase.BaseControl;
        getControl(controlName: "DocumentsSubGrid"): XrmBase.SubGridControl<"sharepointdocument">;
        getControl(controlName: string): undefined;
    }
}
