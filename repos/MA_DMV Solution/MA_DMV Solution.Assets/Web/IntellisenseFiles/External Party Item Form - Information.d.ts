declare namespace Form.externalpartyitem.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "channelaccessprofileid"): XrmBase.LookupAttribute<"channelaccessprofile">;
            get(name: "createdon"): XrmBase.DateAttribute;
            get(name: "externalpartyid"): XrmBase.LookupAttribute<"externalparty">;
            get(name: "lastdisabledon"): XrmBase.DateAttribute;
            get(name: "lastenabledon"): XrmBase.DateAttribute;
            get(name: "modifiedon"): XrmBase.DateAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "regardingobjectid"): XrmBase.LookupAttribute<"contact" | "systemuser">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "channelaccessprofileid"): XrmBase.LookupControl<"channelaccessprofile">;
            get(name: "createdon"): XrmBase.DateControl;
            get(name: "externalpartyid"): XrmBase.LookupControl<"externalparty">;
            get(name: "lastdisabledon"): XrmBase.DateControl;
            get(name: "lastenabledon"): XrmBase.DateControl;
            get(name: "modifiedon"): XrmBase.DateControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "regardingobjectid"): XrmBase.LookupControl<"contact" | "systemuser">;
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
        getAttribute(attributeName: "regardingobjectid"): XrmBase.LookupAttribute<"contact" | "systemuser">;
        getAttribute(attributeName: "externalpartyid"): XrmBase.LookupAttribute<"externalparty">;
        getAttribute(attributeName: "channelaccessprofileid"): XrmBase.LookupAttribute<"channelaccessprofile">;
        getAttribute(attributeName: "lastenabledon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "lastdisabledon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "createdon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "modifiedon"): XrmBase.DateAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "regardingobjectid"): XrmBase.LookupControl<"contact" | "systemuser">;
        getControl(controlName: "externalpartyid"): XrmBase.LookupControl<"externalparty">;
        getControl(controlName: "channelaccessprofileid"): XrmBase.LookupControl<"channelaccessprofile">;
        getControl(controlName: "lastenabledon"): XrmBase.DateControl;
        getControl(controlName: "lastdisabledon"): XrmBase.DateControl;
        getControl(controlName: "createdon"): XrmBase.DateControl;
        getControl(controlName: "modifiedon"): XrmBase.DateControl;
        getControl(controlName: string): undefined;
    }
}
