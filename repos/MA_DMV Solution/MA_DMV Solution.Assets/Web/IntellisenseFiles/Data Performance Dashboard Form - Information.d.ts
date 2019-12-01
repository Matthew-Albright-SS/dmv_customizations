declare namespace Form.dataperformance.Main {
    namespace Information {
        namespace Tabs {
            interface PerformanceImprovement extends XrmBase.SectionCollectionBase {
                get(name: "Performance Improvement"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "anyoptimizationapplied"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "anyoptimizationavailable"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "count"): XrmBase.NumberAttribute;
            get(name: "entity"): XrmBase.StringAttribute;
            get(name: "lastactionresult"): XrmBase.StringAttribute;
            get(name: "maxtime"): XrmBase.NumberAttribute;
            get(name: "mediantime"): XrmBase.NumberAttribute;
            get(name: "mintime"): XrmBase.NumberAttribute;
            get(name: "operation"): XrmBase.StringAttribute;
            get(name: "optimizationstatus"): XrmBase.StringAttribute;
            get(name: "weight"): XrmBase.NumberAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "anyoptimizationapplied"): XrmBase.OptionSetControl<any>;
            get(name: "anyoptimizationavailable"): XrmBase.OptionSetControl<any>;
            get(name: "count"): XrmBase.NumberControl;
            get(name: "entity"): XrmBase.StringControl;
            get(name: "lastactionresult"): XrmBase.StringControl;
            get(name: "maxtime"): XrmBase.NumberControl;
            get(name: "mediantime"): XrmBase.NumberControl;
            get(name: "mintime"): XrmBase.NumberControl;
            get(name: "operation"): XrmBase.StringControl;
            get(name: "optimizationstatus"): XrmBase.StringControl;
            get(name: "weight"): XrmBase.NumberControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "Performance Improvement"): XrmBase.PageTab<Tabs.PerformanceImprovement>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "mediantime"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "optimizationstatus"): XrmBase.StringAttribute;
        getAttribute(attributeName: "entity"): XrmBase.StringAttribute;
        getAttribute(attributeName: "maxtime"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "anyoptimizationavailable"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "operation"): XrmBase.StringAttribute;
        getAttribute(attributeName: "mintime"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "count"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "weight"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "anyoptimizationapplied"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "lastactionresult"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "mediantime"): XrmBase.NumberControl;
        getControl(controlName: "optimizationstatus"): XrmBase.StringControl;
        getControl(controlName: "entity"): XrmBase.StringControl;
        getControl(controlName: "maxtime"): XrmBase.NumberControl;
        getControl(controlName: "anyoptimizationavailable"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "operation"): XrmBase.StringControl;
        getControl(controlName: "mintime"): XrmBase.NumberControl;
        getControl(controlName: "count"): XrmBase.NumberControl;
        getControl(controlName: "weight"): XrmBase.NumberControl;
        getControl(controlName: "anyoptimizationapplied"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "lastactionresult"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
