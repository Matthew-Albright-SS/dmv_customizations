declare namespace Form.competitor.Main {
    namespace Information {
        namespace Tabs {
            interface Tabrecordwall extends XrmBase.SectionCollectionBase {
                get(name: "tab_recordwall_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "competitor information"): XrmBase.PageSection;
                get(name: "address"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Analysis extends XrmBase.SectionCollectionBase {
                get(name: "analysis"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Notes extends XrmBase.SectionCollectionBase {
                get(name: "notes"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "address1_city"): XrmBase.StringAttribute;
            get(name: "address1_country"): XrmBase.StringAttribute;
            get(name: "address1_line1"): XrmBase.StringAttribute;
            get(name: "address1_line2"): XrmBase.StringAttribute;
            get(name: "address1_line3"): XrmBase.StringAttribute;
            get(name: "address1_postalcode"): XrmBase.StringAttribute;
            get(name: "address1_stateorprovince"): XrmBase.StringAttribute;
            get(name: "keyproduct"): XrmBase.StringAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "opportunities"): XrmBase.StringAttribute;
            get(name: "overview"): XrmBase.StringAttribute;
            get(name: "reportedrevenue"): XrmBase.NumberAttribute;
            get(name: "stockexchange"): XrmBase.StringAttribute;
            get(name: "strengths"): XrmBase.StringAttribute;
            get(name: "threats"): XrmBase.StringAttribute;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: "weaknesses"): XrmBase.StringAttribute;
            get(name: "websiteurl"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "address1_city"): XrmBase.StringControl;
            get(name: "address1_country"): XrmBase.StringControl;
            get(name: "address1_line1"): XrmBase.StringControl;
            get(name: "address1_line2"): XrmBase.StringControl;
            get(name: "address1_line3"): XrmBase.StringControl;
            get(name: "address1_postalcode"): XrmBase.StringControl;
            get(name: "address1_stateorprovince"): XrmBase.StringControl;
            get(name: "keyproduct"): XrmBase.StringControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "opportunities"): XrmBase.StringControl;
            get(name: "overview"): XrmBase.StringControl;
            get(name: "reportedrevenue"): XrmBase.NumberControl;
            get(name: "stockexchange"): XrmBase.BaseControl;
            get(name: "strengths"): XrmBase.StringControl;
            get(name: "threats"): XrmBase.StringControl;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: "weaknesses"): XrmBase.StringControl;
            get(name: "WebResource_RecordWall"): XrmBase.WebResourceControl;
            get(name: "websiteurl"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "tab_recordwall"): XrmBase.PageTab<Tabs.Tabrecordwall>;
            get(name: "general"): XrmBase.PageTab<Tabs.General>;
            get(name: "analysis"): XrmBase.PageTab<Tabs.Analysis>;
            get(name: "notes"): XrmBase.PageTab<Tabs.Notes>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "websiteurl"): XrmBase.StringAttribute;
        getAttribute(attributeName: "stockexchange"): XrmBase.StringAttribute;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "keyproduct"): XrmBase.StringAttribute;
        getAttribute(attributeName: "reportedrevenue"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "address1_line1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_stateorprovince"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_line2"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_postalcode"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_line3"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_country"): XrmBase.StringAttribute;
        getAttribute(attributeName: "address1_city"): XrmBase.StringAttribute;
        getAttribute(attributeName: "overview"): XrmBase.StringAttribute;
        getAttribute(attributeName: "strengths"): XrmBase.StringAttribute;
        getAttribute(attributeName: "weaknesses"): XrmBase.StringAttribute;
        getAttribute(attributeName: "opportunities"): XrmBase.StringAttribute;
        getAttribute(attributeName: "threats"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "WebResource_RecordWall"): XrmBase.WebResourceControl;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "websiteurl"): XrmBase.StringControl;
        getControl(controlName: "stockexchange"): XrmBase.BaseControl;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "keyproduct"): XrmBase.StringControl;
        getControl(controlName: "reportedrevenue"): XrmBase.NumberControl;
        getControl(controlName: "address1_line1"): XrmBase.StringControl;
        getControl(controlName: "address1_stateorprovince"): XrmBase.StringControl;
        getControl(controlName: "address1_line2"): XrmBase.StringControl;
        getControl(controlName: "address1_postalcode"): XrmBase.StringControl;
        getControl(controlName: "address1_line3"): XrmBase.StringControl;
        getControl(controlName: "address1_country"): XrmBase.StringControl;
        getControl(controlName: "address1_city"): XrmBase.StringControl;
        getControl(controlName: "overview"): XrmBase.StringControl;
        getControl(controlName: "strengths"): XrmBase.StringControl;
        getControl(controlName: "weaknesses"): XrmBase.StringControl;
        getControl(controlName: "opportunities"): XrmBase.StringControl;
        getControl(controlName: "threats"): XrmBase.StringControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
