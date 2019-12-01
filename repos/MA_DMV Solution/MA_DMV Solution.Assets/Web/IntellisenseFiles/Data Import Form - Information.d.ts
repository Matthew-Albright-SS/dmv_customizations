declare namespace Form.import.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "createdby"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "createdon"): XrmBase.DateAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "sequence"): XrmBase.NumberAttribute;
            get(name: "statuscode"): XrmBase.OptionSetAttribute<import_statuscode>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "createdby"): XrmBase.LookupControl<"systemuser">;
            get(name: "createdon"): XrmBase.DateControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "sequence"): XrmBase.NumberControl;
            get(name: "statuscode"): XrmBase.OptionSetControl<import_statuscode>;
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
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "statuscode"): XrmBase.OptionSetAttribute<import_statuscode>;
        getAttribute(attributeName: "sequence"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "createdby"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "createdon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "statuscode"): XrmBase.OptionSetControl<import_statuscode>;
        getControl(controlName: "sequence"): XrmBase.NumberControl;
        getControl(controlName: "createdby"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "createdon"): XrmBase.DateControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: string): undefined;
    }
}
