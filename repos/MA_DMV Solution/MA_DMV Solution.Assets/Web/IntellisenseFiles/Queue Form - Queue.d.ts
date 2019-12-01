declare namespace Form.queue.Main {
    namespace Queue {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "queue information"): XrmBase.PageSection;
                get(name: "incoming email"): XrmBase.PageSection;
                get(name: "RecordCreationAndUpdateRule"): XrmBase.PageSection;
                get(name: "QueueItems"): XrmBase.PageSection;
                get(name: "QueueMembers"): XrmBase.PageSection;
                get(name: "QueueMembersNoRecord"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "defaultmailbox"): XrmBase.LookupAttribute<"mailbox">;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "emailaddress"): XrmBase.StringAttribute;
            get(name: "incomingemailfilteringmethod"): XrmBase.OptionSetAttribute<queue_incomingemailfilteringmethod>;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "queueviewtype"): XrmBase.OptionSetAttribute<queue_queueviewtype>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "defaultmailbox"): XrmBase.LookupControl<"mailbox">;
            get(name: "description"): XrmBase.StringControl;
            get(name: "emailaddress"): XrmBase.StringControl;
            get(name: "incomingemailfilteringmethod"): XrmBase.OptionSetControl<queue_incomingemailfilteringmethod>;
            get(name: "name"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "QueueItemsGrid"): XrmBase.SubGridControl<"queueitem">;
            get(name: "queuemembersgrid"): XrmBase.SubGridControl<"systemuser">;
            get(name: "queueviewtype"): XrmBase.OptionSetControl<queue_queueviewtype>;
            get(name: "RecordCreationAndUpdateRuleGrid"): XrmBase.SubGridControl<"convertrule">;
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
    interface Queue extends XrmBase.PageBase<Queue.Attributes, Queue.Tabs, Queue.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "queueviewtype"): XrmBase.OptionSetAttribute<queue_queueviewtype>;
        getAttribute(attributeName: "emailaddress"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "incomingemailfilteringmethod"): XrmBase.OptionSetAttribute<queue_incomingemailfilteringmethod>;
        getAttribute(attributeName: "defaultmailbox"): XrmBase.LookupAttribute<"mailbox">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "queueviewtype"): XrmBase.OptionSetControl<queue_queueviewtype>;
        getControl(controlName: "emailaddress"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "incomingemailfilteringmethod"): XrmBase.OptionSetControl<queue_incomingemailfilteringmethod>;
        getControl(controlName: "defaultmailbox"): XrmBase.LookupControl<"mailbox">;
        getControl(controlName: "RecordCreationAndUpdateRuleGrid"): XrmBase.SubGridControl<"convertrule">;
        getControl(controlName: "QueueItemsGrid"): XrmBase.SubGridControl<"queueitem">;
        getControl(controlName: "queuemembersgrid"): XrmBase.SubGridControl<"systemuser">;
        getControl(controlName: string): undefined;
    }
}
