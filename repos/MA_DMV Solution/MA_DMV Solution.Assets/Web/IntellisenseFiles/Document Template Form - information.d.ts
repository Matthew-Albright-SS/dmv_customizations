declare namespace Form.documenttemplate.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "Details"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "associatedentitytypecode"): XrmBase.OptionSetAttribute<documenttemplate_associatedentitytypecode>;
            get(name: "createdby"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "createdon"): XrmBase.DateAttribute;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "documenttype"): XrmBase.OptionSetAttribute<officedocument_documenttype>;
            get(name: "languagecode"): XrmBase.NumberAttribute;
            get(name: "modifiedby"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "modifiedon"): XrmBase.DateAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "status"): XrmBase.OptionSetAttribute<boolean>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "associatedentitytypecode"): XrmBase.NumberControl;
            get(name: "createdby"): XrmBase.LookupControl<"systemuser">;
            get(name: "createdon"): XrmBase.DateControl;
            get(name: "description"): XrmBase.StringControl;
            get(name: "documenttype"): XrmBase.OptionSetControl<officedocument_documenttype>;
            get(name: "languagecode"): XrmBase.BaseControl;
            get(name: "modifiedby"): XrmBase.LookupControl<"systemuser">;
            get(name: "modifiedon"): XrmBase.DateControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "status"): XrmBase.OptionSetControl<any>;
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
        getAttribute(attributeName: "status"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "documenttype"): XrmBase.OptionSetAttribute<officedocument_documenttype>;
        getAttribute(attributeName: "modifiedon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "modifiedby"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "associatedentitytypecode"): XrmBase.OptionSetAttribute<documenttemplate_associatedentitytypecode>;
        getAttribute(attributeName: "createdby"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "createdon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "languagecode"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "status"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "documenttype"): XrmBase.OptionSetControl<officedocument_documenttype>;
        getControl(controlName: "modifiedon"): XrmBase.DateControl;
        getControl(controlName: "modifiedby"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "associatedentitytypecode"): XrmBase.NumberControl;
        getControl(controlName: "createdby"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "createdon"): XrmBase.DateControl;
        getControl(controlName: "languagecode"): XrmBase.BaseControl;
        getControl(controlName: string): undefined;
    }
}
