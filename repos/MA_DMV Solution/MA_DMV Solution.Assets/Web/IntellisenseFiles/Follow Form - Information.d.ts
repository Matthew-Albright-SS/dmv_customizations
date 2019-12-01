declare namespace Form.postfollow.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "Follow information"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "regardingobjectid"): XrmBase.LookupAttribute<"account" | "appointment" | "competitor" | "contact" | "incident" | "knowledgearticle" | "lead" | "opportunity" | "phonecall" | "processsession" | "queue" | "recurringappointmentmaster" | "systemuser" | "task">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "regardingobjectid"): XrmBase.LookupControl<"account" | "appointment" | "competitor" | "contact" | "incident" | "knowledgearticle" | "lead" | "opportunity" | "phonecall" | "processsession" | "queue" | "recurringappointmentmaster" | "systemuser" | "task">;
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
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "regardingobjectid"): XrmBase.LookupAttribute<"account" | "appointment" | "competitor" | "contact" | "incident" | "knowledgearticle" | "lead" | "opportunity" | "phonecall" | "processsession" | "queue" | "recurringappointmentmaster" | "systemuser" | "task">;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "regardingobjectid"): XrmBase.LookupControl<"account" | "appointment" | "competitor" | "contact" | "incident" | "knowledgearticle" | "lead" | "opportunity" | "phonecall" | "processsession" | "queue" | "recurringappointmentmaster" | "systemuser" | "task">;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: string): undefined;
    }
}
