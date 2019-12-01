declare namespace Form.solution.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "solution information"): XrmBase.PageSection;
                get(name: "description"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface _9129b06a844677d82bd2027c5006be41 extends XrmBase.SectionCollectionBase {
                get(name: "solutionmarketplacesection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "configurationpageid"): XrmBase.LookupAttribute<"webresource">;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "friendlyname"): XrmBase.StringAttribute;
            get(name: "installedon"): XrmBase.DateAttribute;
            get(name: "ismanaged"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "publisherid"): XrmBase.LookupAttribute<"publisher">;
            get(name: "uniquename"): XrmBase.StringAttribute;
            get(name: "version"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "configurationpageid"): XrmBase.LookupControl<"webresource">;
            get(name: "description"): XrmBase.StringControl;
            get(name: "friendlyname"): XrmBase.StringControl;
            get(name: "IFRAME_SolutionsMarketplace"): XrmBase.IFrameControl;
            get(name: "installedon"): XrmBase.DateControl;
            get(name: "ismanaged"): XrmBase.OptionSetControl<any>;
            get(name: "publisherid"): XrmBase.LookupControl<"publisher">;
            get(name: "uniquename"): XrmBase.StringControl;
            get(name: "version"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "general"): XrmBase.PageTab<Tabs.General>;
            get(name: "{9129b06a-8446-77d8-2bd2-027c5006be41}"): XrmBase.PageTab<Tabs._9129b06a844677d82bd2027c5006be41>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "friendlyname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "uniquename"): XrmBase.StringAttribute;
        getAttribute(attributeName: "publisherid"): XrmBase.LookupAttribute<"publisher">;
        getAttribute(attributeName: "configurationpageid"): XrmBase.LookupAttribute<"webresource">;
        getAttribute(attributeName: "version"): XrmBase.StringAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "installedon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "ismanaged"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "friendlyname"): XrmBase.StringControl;
        getControl(controlName: "uniquename"): XrmBase.StringControl;
        getControl(controlName: "publisherid"): XrmBase.LookupControl<"publisher">;
        getControl(controlName: "configurationpageid"): XrmBase.LookupControl<"webresource">;
        getControl(controlName: "version"): XrmBase.StringControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "installedon"): XrmBase.DateControl;
        getControl(controlName: "ismanaged"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "IFRAME_SolutionsMarketplace"): XrmBase.IFrameControl;
        getControl(controlName: string): undefined;
    }
}
