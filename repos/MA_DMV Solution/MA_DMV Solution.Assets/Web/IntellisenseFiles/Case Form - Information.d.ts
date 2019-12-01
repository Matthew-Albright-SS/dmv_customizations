declare namespace Form.incident.Main {
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
                get(name: "overview"): XrmBase.PageSection;
                get(name: "assignment information"): XrmBase.PageSection;
                get(name: "contract and product information"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Notesandkb extends XrmBase.SectionCollectionBase {
                get(name: "notes"): XrmBase.PageSection;
                get(name: "kb article"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "caseorigincode"): XrmBase.OptionSetAttribute<incident_caseorigincode>;
            get(name: "casetypecode"): XrmBase.OptionSetAttribute<incident_casetypecode>;
            get(name: "contractdetailid"): XrmBase.LookupAttribute<"contractdetail">;
            get(name: "contractid"): XrmBase.LookupAttribute<"contract">;
            get(name: "contractservicelevelcode"): XrmBase.OptionSetAttribute<incident_contractservicelevelcode>;
            get(name: "customerid"): XrmBase.LookupAttribute<"account" | "contact">;
            get(name: "customersatisfactioncode"): XrmBase.OptionSetAttribute<incident_customersatisfactioncode>;
            get(name: "followupby"): XrmBase.DateAttribute;
            get(name: "kbarticleid"): XrmBase.LookupAttribute<"kbarticle">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "prioritycode"): XrmBase.OptionSetAttribute<incident_prioritycode>;
            get(name: "productid"): XrmBase.LookupAttribute<"product">;
            get(name: "productserialnumber"): XrmBase.StringAttribute;
            get(name: "statuscode"): XrmBase.OptionSetAttribute<incident_statuscode>;
            get(name: "subjectid"): XrmBase.LookupAttribute<"subject">;
            get(name: "title"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "caseorigincode"): XrmBase.OptionSetControl<incident_caseorigincode>;
            get(name: "casetypecode"): XrmBase.OptionSetControl<incident_casetypecode>;
            get(name: "contractdetailid"): XrmBase.LookupControl<"contractdetail">;
            get(name: "contractid"): XrmBase.LookupControl<"contract">;
            get(name: "contractservicelevelcode"): XrmBase.OptionSetControl<incident_contractservicelevelcode>;
            get(name: "customerid"): XrmBase.LookupControl<"account" | "contact">;
            get(name: "customersatisfactioncode"): XrmBase.OptionSetControl<incident_customersatisfactioncode>;
            get(name: "followupby"): XrmBase.DateControl;
            get(name: "kbarticleid"): XrmBase.LookupControl<"kbarticle">;
            get(name: "kbviewer"): XrmBase.BaseControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "prioritycode"): XrmBase.OptionSetControl<incident_prioritycode>;
            get(name: "productid"): XrmBase.LookupControl<"product">;
            get(name: "productserialnumber"): XrmBase.StringControl;
            get(name: "statuscode"): XrmBase.OptionSetControl<incident_statuscode>;
            get(name: "subjectid"): XrmBase.LookupControl<"subject">;
            get(name: "title"): XrmBase.StringControl;
            get(name: "WebResource_RecordWall"): XrmBase.WebResourceControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "tab_recordwall"): XrmBase.PageTab<Tabs.Tabrecordwall>;
            get(name: "general"): XrmBase.PageTab<Tabs.General>;
            get(name: "notesandkb"): XrmBase.PageTab<Tabs.Notesandkb>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "title"): XrmBase.StringAttribute;
        getAttribute(attributeName: "customerid"): XrmBase.LookupAttribute<"account" | "contact">;
        getAttribute(attributeName: "subjectid"): XrmBase.LookupAttribute<"subject">;
        getAttribute(attributeName: "casetypecode"): XrmBase.OptionSetAttribute<incident_casetypecode>;
        getAttribute(attributeName: "caseorigincode"): XrmBase.OptionSetAttribute<incident_caseorigincode>;
        getAttribute(attributeName: "customersatisfactioncode"): XrmBase.OptionSetAttribute<incident_customersatisfactioncode>;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "statuscode"): XrmBase.OptionSetAttribute<incident_statuscode>;
        getAttribute(attributeName: "followupby"): XrmBase.DateAttribute;
        getAttribute(attributeName: "prioritycode"): XrmBase.OptionSetAttribute<incident_prioritycode>;
        getAttribute(attributeName: "contractid"): XrmBase.LookupAttribute<"contract">;
        getAttribute(attributeName: "productid"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "contractdetailid"): XrmBase.LookupAttribute<"contractdetail">;
        getAttribute(attributeName: "productserialnumber"): XrmBase.StringAttribute;
        getAttribute(attributeName: "contractservicelevelcode"): XrmBase.OptionSetAttribute<incident_contractservicelevelcode>;
        getAttribute(attributeName: "kbarticleid"): XrmBase.LookupAttribute<"kbarticle">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "WebResource_RecordWall"): XrmBase.WebResourceControl;
        getControl(controlName: "title"): XrmBase.StringControl;
        getControl(controlName: "customerid"): XrmBase.LookupControl<"account" | "contact">;
        getControl(controlName: "subjectid"): XrmBase.LookupControl<"subject">;
        getControl(controlName: "casetypecode"): XrmBase.OptionSetControl<incident_casetypecode>;
        getControl(controlName: "caseorigincode"): XrmBase.OptionSetControl<incident_caseorigincode>;
        getControl(controlName: "customersatisfactioncode"): XrmBase.OptionSetControl<incident_customersatisfactioncode>;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "statuscode"): XrmBase.OptionSetControl<incident_statuscode>;
        getControl(controlName: "followupby"): XrmBase.DateControl;
        getControl(controlName: "prioritycode"): XrmBase.OptionSetControl<incident_prioritycode>;
        getControl(controlName: "contractid"): XrmBase.LookupControl<"contract">;
        getControl(controlName: "productid"): XrmBase.LookupControl<"product">;
        getControl(controlName: "contractdetailid"): XrmBase.LookupControl<"contractdetail">;
        getControl(controlName: "productserialnumber"): XrmBase.StringControl;
        getControl(controlName: "contractservicelevelcode"): XrmBase.OptionSetControl<incident_contractservicelevelcode>;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "kbarticleid"): XrmBase.LookupControl<"kbarticle">;
        getControl(controlName: "kbviewer"): XrmBase.BaseControl;
        getControl(controlName: string): undefined;
    }
}
