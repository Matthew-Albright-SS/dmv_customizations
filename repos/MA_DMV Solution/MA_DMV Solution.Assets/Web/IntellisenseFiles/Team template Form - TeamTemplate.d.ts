declare namespace Form.teamtemplate.Main {
    namespace TeamTemplate {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "General"): XrmBase.PageSection;
                get(name: "Description"): XrmBase.PageSection;
                get(name: "Access Rights"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "defaultaccessrightsmask"): XrmBase.NumberAttribute;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "objecttypecode"): XrmBase.NumberAttribute;
            get(name: "teamtemplatename"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "defaultaccessrightsmask"): XrmBase.BaseControl;
            get(name: "description"): XrmBase.StringControl;
            get(name: "objecttypecode"): XrmBase.BaseControl;
            get(name: "teamtemplatename"): XrmBase.StringControl;
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
    interface TeamTemplate extends XrmBase.PageBase<TeamTemplate.Attributes, TeamTemplate.Tabs, TeamTemplate.Controls> {
        getAttribute(attributeName: "teamtemplatename"): XrmBase.StringAttribute;
        getAttribute(attributeName: "objecttypecode"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "defaultaccessrightsmask"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "teamtemplatename"): XrmBase.StringControl;
        getControl(controlName: "objecttypecode"): XrmBase.BaseControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "defaultaccessrightsmask"): XrmBase.BaseControl;
        getControl(controlName: string): undefined;
    }
}
