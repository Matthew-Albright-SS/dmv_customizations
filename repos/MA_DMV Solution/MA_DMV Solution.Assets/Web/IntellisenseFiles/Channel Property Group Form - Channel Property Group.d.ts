declare namespace Form.channelpropertygroup.Main {
    namespace ChannelPropertyGroup {
        namespace Tabs {
            interface Propertybagsummary extends XrmBase.SectionCollectionBase {
                get(name: "property_bag_properties_1"): XrmBase.PageSection;
                get(name: "property_bag_items_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "createdon"): XrmBase.DateAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "regardingtypecode"): XrmBase.OptionSetAttribute<convertrule_channelactivity>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "createdon"): XrmBase.DateControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "propertiesGrid"): XrmBase.SubGridControl<"channelproperty">;
            get(name: "regardingtypecode"): XrmBase.OptionSetControl<convertrule_channelactivity>;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "property_bag_summary"): XrmBase.PageTab<Tabs.Propertybagsummary>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface ChannelPropertyGroup extends XrmBase.PageBase<ChannelPropertyGroup.Attributes, ChannelPropertyGroup.Tabs, ChannelPropertyGroup.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "createdon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "regardingtypecode"): XrmBase.OptionSetAttribute<convertrule_channelactivity>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "createdon"): XrmBase.DateControl;
        getControl(controlName: "regardingtypecode"): XrmBase.OptionSetControl<convertrule_channelactivity>;
        getControl(controlName: "propertiesGrid"): XrmBase.SubGridControl<"channelproperty">;
        getControl(controlName: string): undefined;
    }
}
