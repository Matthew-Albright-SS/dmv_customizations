﻿declare namespace Form.convertruleitem.Main {
    namespace RecordCreationAndUpdateRuleItem {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "Name"): XrmBase.PageSection;
                get(name: "ConditionControl"): XrmBase.PageSection;
                get(name: "CaseProperties"): XrmBase.PageSection;
                get(name: "RegardingSettingsection"): XrmBase.PageSection;
                get(name: "primaryactionsection"): XrmBase.PageSection;
                get(name: "secondaryactionsection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "name"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
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
    interface RecordCreationAndUpdateRuleItem extends XrmBase.PageBase<RecordCreationAndUpdateRuleItem.Attributes, RecordCreationAndUpdateRuleItem.Tabs, RecordCreationAndUpdateRuleItem.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}