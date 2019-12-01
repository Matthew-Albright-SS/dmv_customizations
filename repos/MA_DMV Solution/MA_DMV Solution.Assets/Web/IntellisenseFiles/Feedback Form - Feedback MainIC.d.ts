declare namespace Form.feedback.Main {
    namespace FeedbackMainIC {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "General Info"): XrmBase.PageSection;
                get(name: "Content"): XrmBase.PageSection;
                get(name: "Content_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "closedby"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "closedon"): XrmBase.DateAttribute;
            get(name: "comments"): XrmBase.StringAttribute;
            get(name: "createdby"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "createdbycontact"): XrmBase.LookupAttribute<"contact">;
            get(name: "maxrating"): XrmBase.NumberAttribute;
            get(name: "minrating"): XrmBase.NumberAttribute;
            get(name: "normalizedrating"): XrmBase.NumberAttribute;
            get(name: "rating"): XrmBase.NumberAttribute;
            get(name: "regardingobjectid"): XrmBase.LookupAttribute<"contact" | "dmv_application" | "dmv_contactaddresshistory" | "dmv_contactvehicle" | "dmv_vehicle" | "feedback" | "knowledgearticle" | "madmv_ma_application" | "msfp_surveyinvite" | "msfp_surveyresponse" | "ss_contacttraining" | "ss_leaveapplication" | "ss_training">;
            get(name: "source"): XrmBase.OptionSetAttribute<feedback_source>;
            get(name: "title"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "closedby"): XrmBase.LookupControl<"systemuser">;
            get(name: "closedon"): XrmBase.DateControl;
            get(name: "comments"): XrmBase.StringControl;
            get(name: "createdby"): XrmBase.LookupControl<"systemuser">;
            get(name: "createdbycontact"): XrmBase.LookupControl<"contact">;
            get(name: "maxrating"): XrmBase.NumberControl;
            get(name: "minrating"): XrmBase.NumberControl;
            get(name: "normalizedrating"): XrmBase.NumberControl;
            get(name: "rating"): XrmBase.NumberControl;
            get(name: "regardingobjectid"): XrmBase.LookupControl<"contact" | "dmv_application" | "dmv_contactaddresshistory" | "dmv_contactvehicle" | "dmv_vehicle" | "feedback" | "knowledgearticle" | "madmv_ma_application" | "msfp_surveyinvite" | "msfp_surveyresponse" | "ss_contacttraining" | "ss_leaveapplication" | "ss_training">;
            get(name: "source"): XrmBase.OptionSetControl<feedback_source>;
            get(name: "title"): XrmBase.StringControl;
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
    interface FeedbackMainIC extends XrmBase.PageBase<FeedbackMainIC.Attributes, FeedbackMainIC.Tabs, FeedbackMainIC.Controls> {
        getAttribute(attributeName: "title"): XrmBase.StringAttribute;
        getAttribute(attributeName: "regardingobjectid"): XrmBase.LookupAttribute<"contact" | "dmv_application" | "dmv_contactaddresshistory" | "dmv_contactvehicle" | "dmv_vehicle" | "feedback" | "knowledgearticle" | "madmv_ma_application" | "msfp_surveyinvite" | "msfp_surveyresponse" | "ss_contacttraining" | "ss_leaveapplication" | "ss_training">;
        getAttribute(attributeName: "source"): XrmBase.OptionSetAttribute<feedback_source>;
        getAttribute(attributeName: "createdbycontact"): XrmBase.LookupAttribute<"contact">;
        getAttribute(attributeName: "createdby"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "minrating"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "maxrating"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "normalizedrating"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "rating"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "comments"): XrmBase.StringAttribute;
        getAttribute(attributeName: "closedby"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "closedon"): XrmBase.DateAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "title"): XrmBase.StringControl;
        getControl(controlName: "regardingobjectid"): XrmBase.LookupControl<"contact" | "dmv_application" | "dmv_contactaddresshistory" | "dmv_contactvehicle" | "dmv_vehicle" | "feedback" | "knowledgearticle" | "madmv_ma_application" | "msfp_surveyinvite" | "msfp_surveyresponse" | "ss_contacttraining" | "ss_leaveapplication" | "ss_training">;
        getControl(controlName: "source"): XrmBase.OptionSetControl<feedback_source>;
        getControl(controlName: "createdbycontact"): XrmBase.LookupControl<"contact">;
        getControl(controlName: "createdby"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "minrating"): XrmBase.NumberControl;
        getControl(controlName: "maxrating"): XrmBase.NumberControl;
        getControl(controlName: "normalizedrating"): XrmBase.NumberControl;
        getControl(controlName: "rating"): XrmBase.NumberControl;
        getControl(controlName: "comments"): XrmBase.StringControl;
        getControl(controlName: "closedby"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "closedon"): XrmBase.DateControl;
        getControl(controlName: string): undefined;
    }
}
