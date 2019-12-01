declare namespace Form.savedquery.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "account information"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "createdby"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "createdon"): XrmBase.DateAttribute;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "iscustomizable"): any;
            get(name: "isdefault"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "isquickfindquery"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "isuserdefined"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "modifiedby"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "modifiedon"): XrmBase.DateAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "createdby"): XrmBase.LookupControl<"systemuser">;
            get(name: "createdon"): XrmBase.DateControl;
            get(name: "description"): XrmBase.StringControl;
            get(name: "iscustomizable"): XrmBase.OptionSetControl<any>;
            get(name: "isdefault"): XrmBase.OptionSetControl<any>;
            get(name: "isquickfindquery"): XrmBase.OptionSetControl<any>;
            get(name: "isuserdefined"): XrmBase.OptionSetControl<any>;
            get(name: "modifiedby"): XrmBase.LookupControl<"systemuser">;
            get(name: "modifiedon"): XrmBase.DateControl;
            get(name: "name"): XrmBase.StringControl;
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
        getAttribute(attributeName: "createdby"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "createdon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "iscustomizable"): any;
        getAttribute(attributeName: "isdefault"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "isquickfindquery"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "isuserdefined"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "modifiedby"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "modifiedon"): XrmBase.DateAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "createdby"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "createdon"): XrmBase.DateControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "iscustomizable"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "isdefault"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "isquickfindquery"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "isuserdefined"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "modifiedby"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "modifiedon"): XrmBase.DateControl;
        getControl(controlName: string): undefined;
    }
}
