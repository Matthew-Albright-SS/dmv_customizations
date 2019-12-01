﻿declare namespace Form.calendar.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "section 1"): XrmBase.PageSection;
                get(name: "Holidays List"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "type"): XrmBase.OptionSetAttribute<calendar_type>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "description"): XrmBase.StringControl;
            get(name: "holidayListcontrol_id"): XrmBase.BaseControl;
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
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "type"): XrmBase.OptionSetAttribute<calendar_type>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "holidayListcontrol_id"): XrmBase.BaseControl;
        getControl(controlName: string): undefined;
    }
}
