declare namespace Form.bookableresourcecharacteristic.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "characteristic"): XrmBase.LookupAttribute<"characteristic">;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "ratingvalue"): XrmBase.LookupAttribute<"ratingvalue">;
            get(name: "resource"): XrmBase.LookupAttribute<"bookableresource">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "characteristic"): XrmBase.LookupControl<"characteristic">;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ratingvalue"): XrmBase.LookupControl<"ratingvalue">;
            get(name: "resource"): XrmBase.LookupControl<"bookableresource">;
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
        getAttribute(attributeName: "characteristic"): XrmBase.LookupAttribute<"characteristic">;
        getAttribute(attributeName: "ratingvalue"): XrmBase.LookupAttribute<"ratingvalue">;
        getAttribute(attributeName: "resource"): XrmBase.LookupAttribute<"bookableresource">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "characteristic"): XrmBase.LookupControl<"characteristic">;
        getControl(controlName: "ratingvalue"): XrmBase.LookupControl<"ratingvalue">;
        getControl(controlName: "resource"): XrmBase.LookupControl<"bookableresource">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
