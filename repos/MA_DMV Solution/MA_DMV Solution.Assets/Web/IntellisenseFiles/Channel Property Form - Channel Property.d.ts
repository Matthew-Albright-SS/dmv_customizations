declare namespace Form.channelproperty.Main {
    namespace ChannelProperty {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "channelpropertyinformation"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "applicationsource"): XrmBase.StringAttribute;
            get(name: "datatype"): XrmBase.OptionSetAttribute<channelproperty_datatypecode>;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "applicationsource"): XrmBase.StringControl;
            get(name: "propertydescription"): XrmBase.OptionSetControl<any>;
            get(name: "propertyname"): XrmBase.StringControl;
            get(name: "propertytype"): XrmBase.OptionSetControl<channelproperty_datatypecode>;
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
    interface ChannelProperty extends XrmBase.PageBase<ChannelProperty.Attributes, ChannelProperty.Tabs, ChannelProperty.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "datatype"): XrmBase.OptionSetAttribute<channelproperty_datatypecode>;
        getAttribute(attributeName: "applicationsource"): XrmBase.StringAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "propertyname"): XrmBase.StringControl;
        getControl(controlName: "propertytype"): XrmBase.OptionSetControl<channelproperty_datatypecode>;
        getControl(controlName: "applicationsource"): XrmBase.StringControl;
        getControl(controlName: "propertydescription"): XrmBase.OptionSetControl<any>;
        getControl(controlName: string): undefined;
    }
}
