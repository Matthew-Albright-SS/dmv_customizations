declare namespace Form.competitor.Main {
    namespace Competitor {
        namespace Tabs {
            interface COMPETITOR extends XrmBase.SectionCollectionBase {
                get(name: "Competitor Information"): XrmBase.PageSection;
                get(name: "notes"): XrmBase.PageSection;
                get(name: "analysis"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Opportunities extends XrmBase.SectionCollectionBase {
                get(name: "Opportunity"): XrmBase.PageSection;
                get(name: "OpportunitiesChart"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "address1_composite"): XrmBase.StringAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "strengths"): XrmBase.StringAttribute;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: "weaknesses"): XrmBase.StringAttribute;
            get(name: "websiteurl"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "address1_composite"): XrmBase.StringControl;
            get(name: "ChartTest"): XrmBase.SubGridControl<"opportunity">;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "OpportunityCurrentFiscalYear"): XrmBase.SubGridControl<"opportunity">;
            get(name: "strengths"): XrmBase.StringControl;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: "weaknesses"): XrmBase.StringControl;
            get(name: "websiteurl"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "COMPETITOR"): XrmBase.PageTab<Tabs.COMPETITOR>;
            get(name: "opportunities"): XrmBase.PageTab<Tabs.Opportunities>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Competitor extends XrmBase.PageBase<Competitor.Attributes, Competitor.Tabs, Competitor.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "websiteurl"): XrmBase.StringAttribute;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "address1_composite"): XrmBase.StringAttribute;
        getAttribute(attributeName: "strengths"): XrmBase.StringAttribute;
        getAttribute(attributeName: "weaknesses"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "websiteurl"): XrmBase.StringControl;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "address1_composite"): XrmBase.StringControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "strengths"): XrmBase.StringControl;
        getControl(controlName: "weaknesses"): XrmBase.StringControl;
        getControl(controlName: "OpportunityCurrentFiscalYear"): XrmBase.SubGridControl<"opportunity">;
        getControl(controlName: "ChartTest"): XrmBase.SubGridControl<"opportunity">;
        getControl(controlName: string): undefined;
    }
}
