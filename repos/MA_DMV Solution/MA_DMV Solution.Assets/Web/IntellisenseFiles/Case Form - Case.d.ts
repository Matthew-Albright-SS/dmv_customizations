declare namespace Form.incident.Main {
    namespace Case {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "Details"): XrmBase.PageSection;
                get(name: "Applicable SLA(STANDARD)"): XrmBase.PageSection;
                get(name: "TabsControl"): XrmBase.PageSection;
                get(name: "Customer"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface CASERELATIONSHIPTAB extends XrmBase.SectionCollectionBase {
                get(name: "Solutions"): XrmBase.PageSection;
                get(name: "Research"): XrmBase.PageSection;
                get(name: "MergedCases"): XrmBase.PageSection;
                get(name: "ChildCases"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface AssociatedKnowledgeBaseRecords extends XrmBase.SectionCollectionBase {
                get(name: "Articles"): XrmBase.PageSection;
                get(name: "KnowledgeArticles"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface EnhancedSLADetailsTab extends XrmBase.SectionCollectionBase {
                get(name: "Applicable SLA(ENHANCED)"): XrmBase.PageSection;
                get(name: "SLAKPIInstances"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface ADDITIONALDETAILSTAB extends XrmBase.SectionCollectionBase {
                get(name: "parentcaseandtype"): XrmBase.PageSection;
                get(name: "escalations"): XrmBase.PageSection;
                get(name: "responses"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface SOCIALDETAILSTAB extends XrmBase.SectionCollectionBase {
                get(name: "social"): XrmBase.PageSection;
                get(name: "scores"): XrmBase.PageSection;
                get(name: "social3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface KBARTICLETAB extends XrmBase.SectionCollectionBase {
                get(name: "kb article"): XrmBase.PageSection;
                get(name: "contract and product information"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface DeviceInsightsTab extends XrmBase.SectionCollectionBase {
                get(name: "DeviceInsightsSection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface FieldService extends XrmBase.SectionCollectionBase {
                get(name: "tab_8_section_1"): XrmBase.PageSection;
                get(name: "tab_8_section_2"): XrmBase.PageSection;
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
            get(name: "contractdetailid"): XrmBase.LookupAttribute<"contractdetail">;
            get(name: "contractid"): XrmBase.LookupAttribute<"contract">;
            get(name: "contractservicelevelcode"): XrmBase.OptionSetAttribute<incident_contractservicelevelcode>;
            get(name: "customerid"): XrmBase.LookupAttribute<"account" | "contact">;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "entitlementid"): XrmBase.LookupAttribute<"entitlement">;
            get(name: "escalatedon"): XrmBase.DateAttribute;
            get(name: "firstresponsebykpiid"): XrmBase.LookupAttribute<"slakpiinstance">;
            get(name: "firstresponsesent"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "followupby"): XrmBase.DateAttribute;
            get(name: "influencescore"): XrmBase.NumberAttribute;
            get(name: "isescalated"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "kbarticleid"): XrmBase.LookupAttribute<"kbarticle">;
            get(name: "messagetypecode"): XrmBase.OptionSetAttribute<socialactivity_postmessagetype>;
            get(name: "msdyn_incidenttype"): XrmBase.LookupAttribute<"msdyn_incidenttype">;
            get(name: "msdyn_iotalert"): XrmBase.LookupAttribute<"msdyn_iotalert">;
            get(name: "parentcaseid"): XrmBase.LookupAttribute<"incident">;
            get(name: "primarycontactid"): XrmBase.LookupAttribute<"contact">;
            get(name: "productid"): XrmBase.LookupAttribute<"product">;
            get(name: "productserialnumber"): XrmBase.StringAttribute;
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
            get(name: "Associated_Articles"): XrmBase.SubGridControl<"knowledgebaserecord">;
            get(name: "Associated_KnowledgeArticles"): XrmBase.SubGridControl<"knowledgearticleincident">;
            get(name: "blockedprofile"): XrmBase.OptionSetControl<any>;
            get(name: "caseorigincode"): XrmBase.OptionSetControl<incident_caseorigincode>;
            get(name: "CaseResearch_LinkControl"): XrmBase.BaseControl;
            get(name: "casetypecode"): XrmBase.OptionSetControl<incident_casetypecode>;
            get(name: "ChildCasesGrid"): XrmBase.SubGridControl<"incident">;
            get(name: "contractdetailid"): XrmBase.LookupControl<"contractdetail">;
            get(name: "contractid"): XrmBase.LookupControl<"contract">;
            get(name: "contractservicelevelcode"): XrmBase.OptionSetControl<incident_contractservicelevelcode>;
            get(name: "customerid"): XrmBase.LookupControl<"account" | "contact">;
            get(name: "customerpane_qfc"): XrmBase.BaseControl;
            get(name: "description"): XrmBase.StringControl;
            get(name: "entitlementid"): XrmBase.LookupControl<"entitlement">;
            get(name: "escalatedon"): XrmBase.DateControl;
            get(name: "firstresponsesent"): XrmBase.OptionSetControl<any>;
            get(name: "firstresponseslaquickform"): XrmBase.BaseControl;
            get(name: "followupby"): XrmBase.DateControl;
            get(name: "influencescore"): XrmBase.NumberControl;
            get(name: "isescalated"): XrmBase.OptionSetControl<any>;
            get(name: "kbarticleid"): XrmBase.LookupControl<"kbarticle">;
            get(name: "kbviewer"): XrmBase.BaseControl;
            get(name: "MergedCasesGrid"): XrmBase.SubGridControl<"incident">;
            get(name: "messagetypecode"): XrmBase.OptionSetControl<socialactivity_postmessagetype>;
            get(name: "msdyn_incidenttype"): XrmBase.LookupControl<"msdyn_incidenttype">;
            get(name: "msdyn_iotalert"): XrmBase.LookupControl<"msdyn_iotalert">;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "parentcaseid"): XrmBase.LookupControl<"incident">;
            get(name: "primarycontactid"): XrmBase.LookupControl<"contact">;
            get(name: "productid"): XrmBase.LookupControl<"product">;
            get(name: "productserialnumber"): XrmBase.StringControl;
            get(name: "RelatedSolutionGrid"): XrmBase.SubGridControl<"connection">;
            get(name: "resolveby"): XrmBase.DateControl;
            get(name: "resolvebyslaquickform"): XrmBase.BaseControl;
            get(name: "responseby"): XrmBase.DateControl;
            get(name: "sentimentvalue"): XrmBase.NumberControl;
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
            get(name: "general"): XrmBase.PageTab<Tabs.General>;
            get(name: "CASERELATIONSHIP_TAB"): XrmBase.PageTab<Tabs.CASERELATIONSHIPTAB>;
            get(name: "AssociatedKnowledgeBaseRecords"): XrmBase.PageTab<Tabs.AssociatedKnowledgeBaseRecords>;
            get(name: " Enhanced_SLA_Details_Tab"): XrmBase.PageTab<Tabs.EnhancedSLADetailsTab>;
            get(name: "ADDITIONALDETAILS_TAB"): XrmBase.PageTab<Tabs.ADDITIONALDETAILSTAB>;
            get(name: "SOCIALDETAILS_TAB"): XrmBase.PageTab<Tabs.SOCIALDETAILSTAB>;
            get(name: "KBARTICLE_TAB"): XrmBase.PageTab<Tabs.KBARTICLETAB>;
            get(name: "DeviceInsightsTab"): XrmBase.PageTab<Tabs.DeviceInsightsTab>;
            get(name: "FieldService"): XrmBase.PageTab<Tabs.FieldService>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Case extends XrmBase.PageBase<Case.Attributes, Case.Tabs, Case.Controls> {
        getAttribute(attributeName: "title"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ticketnumber"): XrmBase.StringAttribute;
        getAttribute(attributeName: "subjectid"): XrmBase.LookupAttribute<"subject">;
        getAttribute(attributeName: "customerid"): XrmBase.LookupAttribute<"account" | "contact">;
        getAttribute(attributeName: "caseorigincode"): XrmBase.OptionSetAttribute<incident_caseorigincode>;
        getAttribute(attributeName: "primarycontactid"): XrmBase.LookupAttribute<"contact">;
        getAttribute(attributeName: "entitlementid"): XrmBase.LookupAttribute<"entitlement">;
        getAttribute(attributeName: "productid"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "msdyn_iotalert"): XrmBase.LookupAttribute<"msdyn_iotalert">;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "responseby"): XrmBase.DateAttribute;
        getAttribute(attributeName: "resolveby"): XrmBase.DateAttribute;
        getAttribute(attributeName: "firstresponsebykpiid"): XrmBase.LookupAttribute<"slakpiinstance">;
        getAttribute(attributeName: "resolvebykpiid"): XrmBase.LookupAttribute<"slakpiinstance">;
        getAttribute(attributeName: "casetypecode"): XrmBase.OptionSetAttribute<incident_casetypecode>;
        getAttribute(attributeName: "parentcaseid"): XrmBase.LookupAttribute<"incident">;
        getAttribute(attributeName: "isescalated"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "escalatedon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "followupby"): XrmBase.DateAttribute;
        getAttribute(attributeName: "firstresponsesent"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "socialprofileid"): XrmBase.LookupAttribute<"socialprofile">;
        getAttribute(attributeName: "messagetypecode"): XrmBase.OptionSetAttribute<socialactivity_postmessagetype>;
        getAttribute(attributeName: "influencescore"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "sentimentvalue"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "blockedprofile"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "kbarticleid"): XrmBase.LookupAttribute<"kbarticle">;
        getAttribute(attributeName: "contractid"): XrmBase.LookupAttribute<"contract">;
        getAttribute(attributeName: "contractdetailid"): XrmBase.LookupAttribute<"contractdetail">;
        getAttribute(attributeName: "productserialnumber"): XrmBase.StringAttribute;
        getAttribute(attributeName: "contractservicelevelcode"): XrmBase.OptionSetAttribute<incident_contractservicelevelcode>;
        getAttribute(attributeName: "msdyn_incidenttype"): XrmBase.LookupAttribute<"msdyn_incidenttype">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "title"): XrmBase.StringControl;
        getControl(controlName: "ticketnumber"): XrmBase.StringControl;
        getControl(controlName: "subjectid"): XrmBase.LookupControl<"subject">;
        getControl(controlName: "customerid"): XrmBase.LookupControl<"account" | "contact">;
        getControl(controlName: "caseorigincode"): XrmBase.OptionSetControl<incident_caseorigincode>;
        getControl(controlName: "primarycontactid"): XrmBase.LookupControl<"contact">;
        getControl(controlName: "entitlementid"): XrmBase.LookupControl<"entitlement">;
        getControl(controlName: "productid"): XrmBase.LookupControl<"product">;
        getControl(controlName: "msdyn_iotalert"): XrmBase.LookupControl<"msdyn_iotalert">;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "responseby"): XrmBase.DateControl;
        getControl(controlName: "resolveby"): XrmBase.DateControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "customerpane_qfc"): XrmBase.BaseControl;
        getControl(controlName: "RelatedSolutionGrid"): XrmBase.SubGridControl<"connection">;
        getControl(controlName: "CaseResearch_LinkControl"): XrmBase.BaseControl;
        getControl(controlName: "MergedCasesGrid"): XrmBase.SubGridControl<"incident">;
        getControl(controlName: "ChildCasesGrid"): XrmBase.SubGridControl<"incident">;
        getControl(controlName: "Associated_Articles"): XrmBase.SubGridControl<"knowledgebaserecord">;
        getControl(controlName: "Associated_KnowledgeArticles"): XrmBase.SubGridControl<"knowledgearticleincident">;
        getControl(controlName: "firstresponseslaquickform"): XrmBase.BaseControl;
        getControl(controlName: "resolvebyslaquickform"): XrmBase.BaseControl;
        getControl(controlName: "SLA_KPI_Instances_List"): XrmBase.SubGridControl<"slakpiinstance">;
        getControl(controlName: "casetypecode"): XrmBase.OptionSetControl<incident_casetypecode>;
        getControl(controlName: "parentcaseid"): XrmBase.LookupControl<"incident">;
        getControl(controlName: "isescalated"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "escalatedon"): XrmBase.DateControl;
        getControl(controlName: "followupby"): XrmBase.DateControl;
        getControl(controlName: "firstresponsesent"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "socialprofileid"): XrmBase.LookupControl<"socialprofile">;
        getControl(controlName: "messagetypecode"): XrmBase.OptionSetControl<socialactivity_postmessagetype>;
        getControl(controlName: "influencescore"): XrmBase.NumberControl;
        getControl(controlName: "sentimentvalue"): XrmBase.NumberControl;
        getControl(controlName: "blockedprofile"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "kbarticleid"): XrmBase.LookupControl<"kbarticle">;
        getControl(controlName: "kbviewer"): XrmBase.BaseControl;
        getControl(controlName: "contractid"): XrmBase.LookupControl<"contract">;
        getControl(controlName: "contractdetailid"): XrmBase.LookupControl<"contractdetail">;
        getControl(controlName: "productserialnumber"): XrmBase.StringControl;
        getControl(controlName: "contractservicelevelcode"): XrmBase.OptionSetControl<incident_contractservicelevelcode>;
        getControl(controlName: "msdyn_incidenttype"): XrmBase.LookupControl<"msdyn_incidenttype">;
        getControl(controlName: string): undefined;
    }
}
