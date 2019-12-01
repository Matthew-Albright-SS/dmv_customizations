declare namespace Form.msdyn_iotsettings.Main {
    namespace Information {
        namespace Tabs {
            interface eddc3ea8b755416e8d97c3b1fee65aad extends XrmBase.SectionCollectionBase {
                get(name: "{e07187a8-1c2c-40ff-8c3a-05845b3a09f2}"): XrmBase.PageSection;
                get(name: "{eddc3ea8-b755-416e-8d97-c3b1fee65aad}_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface CommandSettings extends XrmBase.SectionCollectionBase {
                get(name: "Command Settings Section"): XrmBase.PageSection;
                get(name: "tab_2_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface AlertAggregationRulesTab extends XrmBase.SectionCollectionBase {
                get(name: "AlertAggregationRulesSection"): XrmBase.PageSection;
                get(name: "tab_3_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_commandnameproperty"): XrmBase.StringAttribute;
            get(name: "msdyn_commandparametersproperty"): XrmBase.StringAttribute;
            get(name: "msdyn_devicedatapullfrequency"): XrmBase.NumberAttribute;
            get(name: "msdyn_iotalertaggregationrule"): XrmBase.StringAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_nextdevicedatapulltime"): XrmBase.DateAttribute;
            get(name: "msdyn_scheduleddevicedatapull"): XrmBase.OptionSetAttribute<boolean>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_commandnameproperty"): XrmBase.StringControl;
            get(name: "msdyn_commandparametersproperty"): XrmBase.StringControl;
            get(name: "msdyn_devicedatapullfrequency"): XrmBase.NumberControl;
            get(name: "msdyn_iotalertaggregationrule"): XrmBase.BaseControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_nextdevicedatapulltime"): XrmBase.DateControl;
            get(name: "msdyn_scheduleddevicedatapull"): XrmBase.OptionSetControl<any>;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{eddc3ea8-b755-416e-8d97-c3b1fee65aad}"): XrmBase.PageTab<Tabs.eddc3ea8b755416e8d97c3b1fee65aad>;
            get(name: "Command Settings"): XrmBase.PageTab<Tabs.CommandSettings>;
            get(name: "AlertAggregationRulesTab"): XrmBase.PageTab<Tabs.AlertAggregationRulesTab>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_scheduleddevicedatapull"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_devicedatapullfrequency"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_nextdevicedatapulltime"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_commandnameproperty"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_commandparametersproperty"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_iotalertaggregationrule"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_scheduleddevicedatapull"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_devicedatapullfrequency"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_nextdevicedatapulltime"): XrmBase.DateControl;
        getControl(controlName: "msdyn_commandnameproperty"): XrmBase.StringControl;
        getControl(controlName: "msdyn_commandparametersproperty"): XrmBase.StringControl;
        getControl(controlName: "msdyn_iotalertaggregationrule"): XrmBase.BaseControl;
        getControl(controlName: string): undefined;
    }
}
