declare namespace Form.metric.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "{379F3DB8-82DF-4e44-930A-C7A22C0E5206}"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface RollupAttributes extends XrmBase.SectionCollectionBase {
                get(name: "{CEBD8001-3DD4-4abb-99DE-9A3F2FD250EB}"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Description extends XrmBase.SectionCollectionBase {
                get(name: "description"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "amountdatatype"): XrmBase.OptionSetAttribute<metric_goaltype>;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "isamount"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "isstretchtracked"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "amountdatatype"): XrmBase.OptionSetControl<metric_goaltype>;
            get(name: "description"): XrmBase.StringControl;
            get(name: "isamount"): XrmBase.OptionSetControl<any>;
            get(name: "isstretchtracked"): XrmBase.OptionSetControl<any>;
            get(name: "MetricLineItemSubGrid"): XrmBase.SubGridControl<"rollupfield">;
            get(name: "name"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "general"): XrmBase.PageTab<Tabs.General>;
            get(name: "Rollup Attributes"): XrmBase.PageTab<Tabs.RollupAttributes>;
            get(name: "description"): XrmBase.PageTab<Tabs.Description>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "isamount"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "amountdatatype"): XrmBase.OptionSetAttribute<metric_goaltype>;
        getAttribute(attributeName: "isstretchtracked"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "isamount"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "amountdatatype"): XrmBase.OptionSetControl<metric_goaltype>;
        getControl(controlName: "isstretchtracked"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "MetricLineItemSubGrid"): XrmBase.SubGridControl<"rollupfield">;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
