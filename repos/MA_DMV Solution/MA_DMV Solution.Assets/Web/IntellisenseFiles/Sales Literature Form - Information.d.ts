declare namespace Form.salesliterature.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "sales literature information"): XrmBase.PageSection;
                get(name: "description"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "employeecontactid"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "expirationdate"): XrmBase.DateAttribute;
            get(name: "literaturetypecode"): XrmBase.OptionSetAttribute<salesliterature_literaturetypecode>;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "subjectid"): XrmBase.LookupAttribute<"subject">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "description"): XrmBase.StringControl;
            get(name: "employeecontactid"): XrmBase.LookupControl<"systemuser">;
            get(name: "expirationdate"): XrmBase.DateControl;
            get(name: "literaturetypecode"): XrmBase.OptionSetControl<salesliterature_literaturetypecode>;
            get(name: "name"): XrmBase.StringControl;
            get(name: "subjectid"): XrmBase.LookupControl<"subject">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "general"): XrmBase.PageTab<Tabs.General>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "subjectid"): XrmBase.LookupAttribute<"subject">;
        getAttribute(attributeName: "literaturetypecode"): XrmBase.OptionSetAttribute<salesliterature_literaturetypecode>;
        getAttribute(attributeName: "employeecontactid"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "expirationdate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "subjectid"): XrmBase.LookupControl<"subject">;
        getControl(controlName: "literaturetypecode"): XrmBase.OptionSetControl<salesliterature_literaturetypecode>;
        getControl(controlName: "employeecontactid"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "expirationdate"): XrmBase.DateControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
