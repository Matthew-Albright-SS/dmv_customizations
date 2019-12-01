declare namespace Form.customerrelationship.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "information"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "customerid"): XrmBase.LookupAttribute<"account" | "contact">;
            get(name: "customerroledescription"): XrmBase.StringAttribute;
            get(name: "customerroleid"): XrmBase.LookupAttribute<"relationshiprole">;
            get(name: "partnerid"): XrmBase.LookupAttribute<"account" | "contact">;
            get(name: "partnerroledescription"): XrmBase.StringAttribute;
            get(name: "partnerroleid"): XrmBase.LookupAttribute<"relationshiprole">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "customerid"): XrmBase.LookupControl<"account" | "contact">;
            get(name: "customerroledescription"): XrmBase.StringControl;
            get(name: "customerroleid"): XrmBase.BaseControl;
            get(name: "partnerid"): XrmBase.LookupControl<"account" | "contact">;
            get(name: "partnerroledescription"): XrmBase.StringControl;
            get(name: "partnerroleid"): XrmBase.BaseControl;
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
        getAttribute(attributeName: "customerid"): XrmBase.LookupAttribute<"account" | "contact">;
        getAttribute(attributeName: "partnerid"): XrmBase.LookupAttribute<"account" | "contact">;
        getAttribute(attributeName: "customerroleid"): XrmBase.LookupAttribute<"relationshiprole">;
        getAttribute(attributeName: "partnerroleid"): XrmBase.LookupAttribute<"relationshiprole">;
        getAttribute(attributeName: "customerroledescription"): XrmBase.StringAttribute;
        getAttribute(attributeName: "partnerroledescription"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "customerid"): XrmBase.LookupControl<"account" | "contact">;
        getControl(controlName: "partnerid"): XrmBase.LookupControl<"account" | "contact">;
        getControl(controlName: "customerroleid"): XrmBase.BaseControl;
        getControl(controlName: "partnerroleid"): XrmBase.BaseControl;
        getControl(controlName: "customerroledescription"): XrmBase.StringControl;
        getControl(controlName: "partnerroledescription"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
