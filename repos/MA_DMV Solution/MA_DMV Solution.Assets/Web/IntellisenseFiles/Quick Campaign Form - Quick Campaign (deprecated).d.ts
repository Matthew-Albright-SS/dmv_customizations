declare namespace Form.bulkoperation.Main {
    namespace QuickCampaigndeprecated {
        namespace Tabs {
            interface Summary extends XrmBase.SectionCollectionBase {
                get(name: "Information"): XrmBase.PageSection;
                get(name: "RELATED PANE"): XrmBase.PageSection;
                get(name: "selectedMembers"): XrmBase.PageSection;
                get(name: "excludedMembers"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Responses extends XrmBase.SectionCollectionBase {
                get(name: "Responses"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "failurecount"): XrmBase.NumberAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "subject"): XrmBase.StringAttribute;
            get(name: "successcount"): XrmBase.NumberAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "accounts"): XrmBase.SubGridControl<"account">;
            get(name: "accounts_uci"): XrmBase.SubGridControl<"bulkoperationlog">;
            get(name: "contacts"): XrmBase.SubGridControl<"contact">;
            get(name: "contacts_uci"): XrmBase.SubGridControl<"bulkoperationlog">;
            get(name: "description"): XrmBase.StringControl;
            get(name: "excluded_accounts_uci"): XrmBase.SubGridControl<"bulkoperationlog">;
            get(name: "excluded_contacts_uci"): XrmBase.SubGridControl<"bulkoperationlog">;
            get(name: "excluded_leads_uci"): XrmBase.SubGridControl<"bulkoperationlog">;
            get(name: "failurecount"): XrmBase.NumberControl;
            get(name: "leads"): XrmBase.SubGridControl<"lead">;
            get(name: "leads_uci"): XrmBase.SubGridControl<"bulkoperationlog">;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "Responses"): XrmBase.SubGridControl<"campaignresponse">;
            get(name: "subject"): XrmBase.StringControl;
            get(name: "successcount"): XrmBase.NumberControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "Summary"): XrmBase.PageTab<Tabs.Summary>;
            get(name: "Responses"): XrmBase.PageTab<Tabs.Responses>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface QuickCampaigndeprecated extends XrmBase.PageBase<QuickCampaigndeprecated.Attributes, QuickCampaigndeprecated.Tabs, QuickCampaigndeprecated.Controls> {
        getAttribute(attributeName: "subject"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "successcount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "failurecount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "subject"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "successcount"): XrmBase.NumberControl;
        getControl(controlName: "failurecount"): XrmBase.NumberControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "accounts"): XrmBase.SubGridControl<"account">;
        getControl(controlName: "contacts"): XrmBase.SubGridControl<"contact">;
        getControl(controlName: "leads"): XrmBase.SubGridControl<"lead">;
        getControl(controlName: "leads_uci"): XrmBase.SubGridControl<"bulkoperationlog">;
        getControl(controlName: "accounts_uci"): XrmBase.SubGridControl<"bulkoperationlog">;
        getControl(controlName: "contacts_uci"): XrmBase.SubGridControl<"bulkoperationlog">;
        getControl(controlName: "excluded_contacts_uci"): XrmBase.SubGridControl<"bulkoperationlog">;
        getControl(controlName: "excluded_accounts_uci"): XrmBase.SubGridControl<"bulkoperationlog">;
        getControl(controlName: "excluded_leads_uci"): XrmBase.SubGridControl<"bulkoperationlog">;
        getControl(controlName: "Responses"): XrmBase.SubGridControl<"campaignresponse">;
        getControl(controlName: string): undefined;
    }
}
