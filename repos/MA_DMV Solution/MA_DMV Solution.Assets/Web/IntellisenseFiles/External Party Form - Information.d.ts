declare namespace Form.externalparty.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "correlationkey"): XrmBase.StringAttribute;
            get(name: "emailaddress"): XrmBase.StringAttribute;
            get(name: "fullname"): XrmBase.StringAttribute;
            get(name: "lastdisabledon"): XrmBase.DateAttribute;
            get(name: "lastenabledon"): XrmBase.DateAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "correlationkey"): XrmBase.StringControl;
            get(name: "emailaddress"): XrmBase.StringControl;
            get(name: "externalPartyItemsGrid"): XrmBase.SubGridControl<"externalpartyitem">;
            get(name: "fullname"): XrmBase.StringControl;
            get(name: "lastdisabledon"): XrmBase.DateControl;
            get(name: "lastenabledon"): XrmBase.DateControl;
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
        getAttribute(attributeName: "fullname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "emailaddress"): XrmBase.StringAttribute;
        getAttribute(attributeName: "correlationkey"): XrmBase.StringAttribute;
        getAttribute(attributeName: "lastenabledon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "lastdisabledon"): XrmBase.DateAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "fullname"): XrmBase.StringControl;
        getControl(controlName: "emailaddress"): XrmBase.StringControl;
        getControl(controlName: "correlationkey"): XrmBase.StringControl;
        getControl(controlName: "lastenabledon"): XrmBase.DateControl;
        getControl(controlName: "lastdisabledon"): XrmBase.DateControl;
        getControl(controlName: "externalPartyItemsGrid"): XrmBase.SubGridControl<"externalpartyitem">;
        getControl(controlName: string): undefined;
    }
}
