declare namespace Form.convertrule.Main {
    namespace RecordCreationAndUpdateRule {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "ConvertToCaseSettings"): XrmBase.PageSection;
                get(name: "ChannelProperties"): XrmBase.PageSection;
                get(name: "SocialMonitoringCaseConditions"): XrmBase.PageSection;
                get(name: "EmailCaseConditions"): XrmBase.PageSection;
                get(name: "AutoResponseSettings"): XrmBase.PageSection;
                get(name: "CaseDetails"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "allowunknownsender"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "channelpropertygroupid"): XrmBase.LookupAttribute<"channelpropertygroup">;
            get(name: "checkactiveentitlement"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "checkblockedsocialprofile"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "checkdirectmessages"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "checkifresolved"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "queueid"): XrmBase.LookupAttribute<"queue">;
            get(name: "resolvedsince"): XrmBase.NumberAttribute;
            get(name: "responsetemplateid"): XrmBase.LookupAttribute<"template">;
            get(name: "sendautomaticresponse"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "sourcechanneltypecode"): XrmBase.OptionSetAttribute<convertrule_channelactivity>;
            get(name: "sourcetypecode"): XrmBase.OptionSetAttribute<converttorule_sourcetype>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "AllowUnknownSender"): XrmBase.OptionSetControl<any>;
            get(name: "channelpropertygroupid"): XrmBase.LookupControl<"channelpropertygroup">;
            get(name: "CheckActiveEntitlement"): XrmBase.OptionSetControl<any>;
            get(name: "checkblockedsocialprofile"): XrmBase.OptionSetControl<any>;
            get(name: "checkdirectmessages"): XrmBase.OptionSetControl<any>;
            get(name: "CheckIfResolved"): XrmBase.OptionSetControl<any>;
            get(name: "ConvertRuleItemsGrid"): XrmBase.SubGridControl<"convertruleitem">;
            get(name: "name"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser">;
            get(name: "queueid"): XrmBase.LookupControl<"queue">;
            get(name: "ResolvedSince"): XrmBase.NumberControl;
            get(name: "ResponseTemplateId"): XrmBase.LookupControl<"template">;
            get(name: "SendAutomaticResponse"): XrmBase.OptionSetControl<any>;
            get(name: "sourcechanneltypecode"): XrmBase.OptionSetControl<convertrule_channelactivity>;
            get(name: "sourcetypecode"): XrmBase.OptionSetControl<converttorule_sourcetype>;
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
    interface RecordCreationAndUpdateRule extends XrmBase.PageBase<RecordCreationAndUpdateRule.Attributes, RecordCreationAndUpdateRule.Tabs, RecordCreationAndUpdateRule.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "sourcetypecode"): XrmBase.OptionSetAttribute<converttorule_sourcetype>;
        getAttribute(attributeName: "sourcechanneltypecode"): XrmBase.OptionSetAttribute<convertrule_channelactivity>;
        getAttribute(attributeName: "queueid"): XrmBase.LookupAttribute<"queue">;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "channelpropertygroupid"): XrmBase.LookupAttribute<"channelpropertygroup">;
        getAttribute(attributeName: "checkblockedsocialprofile"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "checkdirectmessages"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "allowunknownsender"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "checkactiveentitlement"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "checkifresolved"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "resolvedsince"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "sendautomaticresponse"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "responsetemplateid"): XrmBase.LookupAttribute<"template">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "sourcetypecode"): XrmBase.OptionSetControl<converttorule_sourcetype>;
        getControl(controlName: "sourcechanneltypecode"): XrmBase.OptionSetControl<convertrule_channelactivity>;
        getControl(controlName: "queueid"): XrmBase.LookupControl<"queue">;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "channelpropertygroupid"): XrmBase.LookupControl<"channelpropertygroup">;
        getControl(controlName: "checkblockedsocialprofile"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "checkdirectmessages"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "AllowUnknownSender"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "CheckActiveEntitlement"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "CheckIfResolved"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "ResolvedSince"): XrmBase.NumberControl;
        getControl(controlName: "SendAutomaticResponse"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "ResponseTemplateId"): XrmBase.LookupControl<"template">;
        getControl(controlName: "ConvertRuleItemsGrid"): XrmBase.SubGridControl<"convertruleitem">;
        getControl(controlName: string): undefined;
    }
}
