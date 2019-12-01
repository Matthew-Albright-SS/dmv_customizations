declare namespace Form.theme.Main {
    namespace Theme {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "theme information"): XrmBase.PageSection;
                get(name: "theme navigation"): XrmBase.PageSection;
                get(name: "theme ui elements"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "accentcolor"): XrmBase.StringAttribute;
            get(name: "backgroundcolor"): XrmBase.StringAttribute;
            get(name: "controlborder"): XrmBase.StringAttribute;
            get(name: "controlshade"): XrmBase.StringAttribute;
            get(name: "defaultcustomentitycolor"): XrmBase.StringAttribute;
            get(name: "defaultentitycolor"): XrmBase.StringAttribute;
            get(name: "globallinkcolor"): XrmBase.StringAttribute;
            get(name: "headercolor"): XrmBase.StringAttribute;
            get(name: "hoverlinkeffect"): XrmBase.StringAttribute;
            get(name: "logoid"): XrmBase.LookupAttribute<"webresource">;
            get(name: "logotooltip"): XrmBase.StringAttribute;
            get(name: "maincolor"): XrmBase.StringAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "navbarbackgroundcolor"): XrmBase.StringAttribute;
            get(name: "navbarshelfcolor"): XrmBase.StringAttribute;
            get(name: "pageheaderbackgroundcolor"): XrmBase.StringAttribute;
            get(name: "panelheaderbackgroundcolor"): XrmBase.StringAttribute;
            get(name: "processcontrolcolor"): XrmBase.StringAttribute;
            get(name: "selectedlinkeffect"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "accentcolor"): XrmBase.StringControl;
            get(name: "backgroundcolor"): XrmBase.StringControl;
            get(name: "controlborder"): XrmBase.StringControl;
            get(name: "controlshade"): XrmBase.StringControl;
            get(name: "defaultcustomentitycolor"): XrmBase.StringControl;
            get(name: "defaultentitycolor"): XrmBase.StringControl;
            get(name: "globallinkcolor"): XrmBase.StringControl;
            get(name: "headercolor"): XrmBase.StringControl;
            get(name: "hoverlinkeffect"): XrmBase.StringControl;
            get(name: "logoid"): XrmBase.LookupControl<"webresource">;
            get(name: "logotooltip"): XrmBase.StringControl;
            get(name: "maincolor"): XrmBase.StringControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "navbarbackgroundcolor"): XrmBase.StringControl;
            get(name: "navbarshelfcolor"): XrmBase.StringControl;
            get(name: "pageheaderbackgroundcolor"): XrmBase.StringControl;
            get(name: "panelheaderbackgroundcolor"): XrmBase.StringControl;
            get(name: "processcontrolcolor"): XrmBase.StringControl;
            get(name: "selectedlinkeffect"): XrmBase.StringControl;
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
    interface Theme extends XrmBase.PageBase<Theme.Attributes, Theme.Tabs, Theme.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "logoid"): XrmBase.LookupAttribute<"webresource">;
        getAttribute(attributeName: "logotooltip"): XrmBase.StringAttribute;
        getAttribute(attributeName: "navbarbackgroundcolor"): XrmBase.StringAttribute;
        getAttribute(attributeName: "navbarshelfcolor"): XrmBase.StringAttribute;
        getAttribute(attributeName: "headercolor"): XrmBase.StringAttribute;
        getAttribute(attributeName: "maincolor"): XrmBase.StringAttribute;
        getAttribute(attributeName: "accentcolor"): XrmBase.StringAttribute;
        getAttribute(attributeName: "globallinkcolor"): XrmBase.StringAttribute;
        getAttribute(attributeName: "selectedlinkeffect"): XrmBase.StringAttribute;
        getAttribute(attributeName: "hoverlinkeffect"): XrmBase.StringAttribute;
        getAttribute(attributeName: "processcontrolcolor"): XrmBase.StringAttribute;
        getAttribute(attributeName: "defaultentitycolor"): XrmBase.StringAttribute;
        getAttribute(attributeName: "defaultcustomentitycolor"): XrmBase.StringAttribute;
        getAttribute(attributeName: "controlshade"): XrmBase.StringAttribute;
        getAttribute(attributeName: "controlborder"): XrmBase.StringAttribute;
        getAttribute(attributeName: "backgroundcolor"): XrmBase.StringAttribute;
        getAttribute(attributeName: "pageheaderbackgroundcolor"): XrmBase.StringAttribute;
        getAttribute(attributeName: "panelheaderbackgroundcolor"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "logoid"): XrmBase.LookupControl<"webresource">;
        getControl(controlName: "logotooltip"): XrmBase.StringControl;
        getControl(controlName: "navbarbackgroundcolor"): XrmBase.StringControl;
        getControl(controlName: "navbarshelfcolor"): XrmBase.StringControl;
        getControl(controlName: "headercolor"): XrmBase.StringControl;
        getControl(controlName: "maincolor"): XrmBase.StringControl;
        getControl(controlName: "accentcolor"): XrmBase.StringControl;
        getControl(controlName: "globallinkcolor"): XrmBase.StringControl;
        getControl(controlName: "selectedlinkeffect"): XrmBase.StringControl;
        getControl(controlName: "hoverlinkeffect"): XrmBase.StringControl;
        getControl(controlName: "processcontrolcolor"): XrmBase.StringControl;
        getControl(controlName: "defaultentitycolor"): XrmBase.StringControl;
        getControl(controlName: "defaultcustomentitycolor"): XrmBase.StringControl;
        getControl(controlName: "controlshade"): XrmBase.StringControl;
        getControl(controlName: "controlborder"): XrmBase.StringControl;
        getControl(controlName: "backgroundcolor"): XrmBase.StringControl;
        getControl(controlName: "pageheaderbackgroundcolor"): XrmBase.StringControl;
        getControl(controlName: "panelheaderbackgroundcolor"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
