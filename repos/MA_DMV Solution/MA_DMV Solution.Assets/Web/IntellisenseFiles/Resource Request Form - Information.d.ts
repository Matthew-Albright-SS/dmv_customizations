declare namespace Form.msdyn_resourcerequest.Main {
    namespace Information {
        namespace Tabs {
            interface f42c3dc0b48145b5a0b1754bc4fa39b6 extends XrmBase.SectionCollectionBase {
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab2 extends XrmBase.SectionCollectionBase {
                get(name: "tab_2_section_1"): XrmBase.PageSection;
                get(name: "tab_2_section_2"): XrmBase.PageSection;
                get(name: "tab_2_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_positiondescription"): XrmBase.StringAttribute;
            get(name: "msdyn_requestedby"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "msdyn_resourcerequirementid"): XrmBase.LookupAttribute<"msdyn_resourcerequirement">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "statuscode"): XrmBase.OptionSetAttribute<msdyn_resourcerequest_statuscode>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_positiondescription"): XrmBase.StringControl;
            get(name: "msdyn_requestedby"): XrmBase.LookupControl<"systemuser">;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "Requirement_Competencies"): XrmBase.BaseControl;
            get(name: "Requirement_General"): XrmBase.BaseControl;
            get(name: "Requirement_Others"): XrmBase.BaseControl;
            get(name: "statuscode"): XrmBase.OptionSetControl<msdyn_resourcerequest_statuscode>;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{f42c3dc0-b481-45b5-a0b1-754bc4fa39b6}"): XrmBase.PageTab<Tabs.f42c3dc0b48145b5a0b1754bc4fa39b6>;
            get(name: "tab_2"): XrmBase.PageTab<Tabs.Tab2>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_requestedby"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "statuscode"): XrmBase.OptionSetAttribute<msdyn_resourcerequest_statuscode>;
        getAttribute(attributeName: "msdyn_positiondescription"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_resourcerequirementid"): XrmBase.LookupAttribute<"msdyn_resourcerequirement">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_requestedby"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "statuscode"): XrmBase.OptionSetControl<msdyn_resourcerequest_statuscode>;
        getControl(controlName: "msdyn_positiondescription"): XrmBase.StringControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "Requirement_General"): XrmBase.BaseControl;
        getControl(controlName: "Requirement_Competencies"): XrmBase.BaseControl;
        getControl(controlName: "Requirement_Others"): XrmBase.BaseControl;
        getControl(controlName: string): undefined;
    }
}
