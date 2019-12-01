declare namespace Form.incident.Main {
    namespace CaseForInteractiveExperience {
        namespace Tabs {
            interface Summary extends XrmBase.SectionCollectionBase {
                get(name: "General Info"): XrmBase.PageSection;
                get(name: "SLAKPI_Timer_Section"): XrmBase.PageSection;
                get(name: "Case Details Summary"): XrmBase.PageSection;
                get(name: "Timeline"): XrmBase.PageSection;
                get(name: "ref_pan_Related"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Details extends XrmBase.SectionCollectionBase {
                get(name: "Case Details"): XrmBase.PageSection;
                get(name: "Additional Details"): XrmBase.PageSection;
                get(name: "Applicable SLA(STANDARD)"): XrmBase.PageSection;
                get(name: "Social Response"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface CASERELATIONSHIPTAB extends XrmBase.SectionCollectionBase {
                get(name: "MergedCases"): XrmBase.PageSection;
                get(name: "ChildCases"): XrmBase.PageSection;
                get(name: "KnowledgeArticles"): XrmBase.PageSection;
                get(name: "Solutions"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface EnhancedSLADetailsTab extends XrmBase.SectionCollectionBase {
                get(name: "SLAKPIInstances"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "blockedprofile"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "caseorigincode"): XrmBase.OptionSetAttribute<incident_caseorigincode>;
            get(name: "casetypecode"): XrmBase.OptionSetAttribute<incident_casetypecode>;
            get(name: "customerid"): XrmBase.LookupAttribute<"account" | "contact">;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "entitlementid"): XrmBase.LookupAttribute<"entitlement">;
            get(name: "escalatedon"): XrmBase.DateAttribute;
            get(name: "firstresponsebykpiid"): XrmBase.LookupAttribute<"slakpiinstance">;
            get(name: "firstresponsesent"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "followupby"): XrmBase.DateAttribute;
            get(name: "influencescore"): XrmBase.NumberAttribute;
            get(name: "isescalated"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "messagetypecode"): XrmBase.OptionSetAttribute<socialactivity_postmessagetype>;
            get(name: "parentcaseid"): XrmBase.LookupAttribute<"incident">;
            get(name: "primarycontactid"): XrmBase.LookupAttribute<"contact">;
            get(name: "productid"): XrmBase.LookupAttribute<"product">;
            get(name: "resolveby"): XrmBase.DateAttribute;
            get(name: "resolvebykpiid"): XrmBase.LookupAttribute<"slakpiinstance">;
            get(name: "responseby"): XrmBase.DateAttribute;
            get(name: "sentimentvalue"): XrmBase.NumberAttribute;
            get(name: "socialprofileid"): XrmBase.LookupAttribute<"socialprofile">;
            get(name: "subjectid"): XrmBase.LookupAttribute<"subject">;
            get(name: "ticketnumber"): XrmBase.StringAttribute;
            get(name: "title"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "Associated_KnowledgeArticles"): XrmBase.SubGridControl<"knowledgearticleincident">;
            get(name: "blockedprofile"): XrmBase.OptionSetControl<any>;
            get(name: "case_kbsearchcontrol"): XrmBase.BaseControl;
            get(name: "case_qfc"): XrmBase.BaseControl;
            get(name: "caseorigincode"): XrmBase.OptionSetControl<incident_caseorigincode>;
            get(name: "casetypecode"): XrmBase.OptionSetControl<incident_casetypecode>;
            get(name: "ChildCasesGrid"): XrmBase.SubGridControl<"incident">;
            get(name: "customerid"): XrmBase.LookupControl<"account" | "contact">;
            get(name: "customerpane_qfc"): XrmBase.BaseControl;
            get(name: "description"): XrmBase.StringControl;
            get(name: "entitlementid"): XrmBase.LookupControl<"entitlement">;
            get(name: "escalatedon"): XrmBase.DateControl;
            get(name: "FirstResponseByKPI"): XrmBase.BaseControl;
            get(name: "firstresponsesent"): XrmBase.OptionSetControl<any>;
            get(name: "followupby"): XrmBase.DateControl;
            get(name: "influencescore"): XrmBase.NumberControl;
            get(name: "isescalated"): XrmBase.OptionSetControl<any>;
            get(name: "MergedCasesGrid"): XrmBase.SubGridControl<"incident">;
            get(name: "messagetypecode"): XrmBase.OptionSetControl<socialactivity_postmessagetype>;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "parentcaseid"): XrmBase.LookupControl<"incident">;
            get(name: "primarycontactid"): XrmBase.LookupControl<"contact">;
            get(name: "productid"): XrmBase.LookupControl<"product">;
            get(name: "resolveby"): XrmBase.DateControl;
            get(name: "ResolveByKPI"): XrmBase.BaseControl;
            get(name: "responseby"): XrmBase.DateControl;
            get(name: "sentimentvalue"): XrmBase.NumberControl;
            get(name: "similarCaseRecordcontrol_id"): XrmBase.BaseControl;
            get(name: "SLA_KPI_Instances_List"): XrmBase.SubGridControl<"slakpiinstance">;
            get(name: "socialprofileid"): XrmBase.LookupControl<"socialprofile">;
            get(name: "subjectid"): XrmBase.LookupControl<"subject">;
            get(name: "ticketnumber"): XrmBase.StringControl;
            get(name: "title"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "Summary"): XrmBase.PageTab<Tabs.Summary>;
            get(name: "Details"): XrmBase.PageTab<Tabs.Details>;
            get(name: "CASERELATIONSHIP_TAB"): XrmBase.PageTab<Tabs.CASERELATIONSHIPTAB>;
            get(name: " Enhanced_SLA_Details_Tab"): XrmBase.PageTab<Tabs.EnhancedSLADetailsTab>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface CaseForInteractiveExperience extends XrmBase.PageBase<CaseForInteractiveExperience.Attributes, CaseForInteractiveExperience.Tabs, CaseForInteractiveExperience.Controls> {
        getAttribute(attributeName: "customerid"): XrmBase.LookupAttribute<"account" | "contact">;
        getAttribute(attributeName: "firstresponsebykpiid"): XrmBase.LookupAttribute<"slakpiinstance">;
        getAttribute(attributeName: "resolvebykpiid"): XrmBase.LookupAttribute<"slakpiinstance">;
        getAttribute(attributeName: "title"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ticketnumber"): XrmBase.StringAttribute;
        getAttribute(attributeName: "subjectid"): XrmBase.LookupAttribute<"subject">;
        getAttribute(attributeName: "caseorigincode"): XrmBase.OptionSetAttribute<incident_caseorigincode>;
        getAttribute(attributeName: "productid"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "entitlementid"): XrmBase.LookupAttribute<"entitlement">;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "primarycontactid"): XrmBase.LookupAttribute<"contact">;
        getAttribute(attributeName: "casetypecode"): XrmBase.OptionSetAttribute<incident_casetypecode>;
        getAttribute(attributeName: "parentcaseid"): XrmBase.LookupAttribute<"incident">;
        getAttribute(attributeName: "isescalated"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "escalatedon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "followupby"): XrmBase.DateAttribute;
        getAttribute(attributeName: "firstresponsesent"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "responseby"): XrmBase.DateAttribute;
        getAttribute(attributeName: "resolveby"): XrmBase.DateAttribute;
        getAttribute(attributeName: "socialprofileid"): XrmBase.LookupAttribute<"socialprofile">;
        getAttribute(attributeName: "messagetypecode"): XrmBase.OptionSetAttribute<socialactivity_postmessagetype>;
        getAttribute(attributeName: "influencescore"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "sentimentvalue"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "blockedprofile"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "customerpane_qfc"): XrmBase.BaseControl;
        getControl(controlName: "FirstResponseByKPI"): XrmBase.BaseControl;
        getControl(controlName: "ResolveByKPI"): XrmBase.BaseControl;
        getControl(controlName: "title"): XrmBase.StringControl;
        getControl(controlName: "ticketnumber"): XrmBase.StringControl;
        getControl(controlName: "subjectid"): XrmBase.LookupControl<"subject">;
        getControl(controlName: "customerid"): XrmBase.LookupControl<"account" | "contact">;
        getControl(controlName: "caseorigincode"): XrmBase.OptionSetControl<incident_caseorigincode>;
        getControl(controlName: "productid"): XrmBase.LookupControl<"product">;
        getControl(controlName: "entitlementid"): XrmBase.LookupControl<"entitlement">;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "case_qfc"): XrmBase.BaseControl;
        getControl(controlName: "case_kbsearchcontrol"): XrmBase.BaseControl;
        getControl(controlName: "similarCaseRecordcontrol_id"): XrmBase.BaseControl;
        getControl(controlName: "primarycontactid"): XrmBase.LookupControl<"contact">;
        getControl(controlName: "casetypecode"): XrmBase.OptionSetControl<incident_casetypecode>;
        getControl(controlName: "parentcaseid"): XrmBase.LookupControl<"incident">;
        getControl(controlName: "isescalated"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "escalatedon"): XrmBase.DateControl;
        getControl(controlName: "followupby"): XrmBase.DateControl;
        getControl(controlName: "firstresponsesent"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "responseby"): XrmBase.DateControl;
        getControl(controlName: "resolveby"): XrmBase.DateControl;
        getControl(controlName: "socialprofileid"): XrmBase.LookupControl<"socialprofile">;
        getControl(controlName: "messagetypecode"): XrmBase.OptionSetControl<socialactivity_postmessagetype>;
        getControl(controlName: "influencescore"): XrmBase.NumberControl;
        getControl(controlName: "sentimentvalue"): XrmBase.NumberControl;
        getControl(controlName: "blockedprofile"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "MergedCasesGrid"): XrmBase.SubGridControl<"incident">;
        getControl(controlName: "ChildCasesGrid"): XrmBase.SubGridControl<"incident">;
        getControl(controlName: "Associated_KnowledgeArticles"): XrmBase.SubGridControl<"knowledgearticleincident">;
        getControl(controlName: "SLA_KPI_Instances_List"): XrmBase.SubGridControl<"slakpiinstance">;
        getControl(controlName: string): undefined;
    }
}
