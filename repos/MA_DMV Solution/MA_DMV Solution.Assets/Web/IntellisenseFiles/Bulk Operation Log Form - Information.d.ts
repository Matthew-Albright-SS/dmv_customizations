declare namespace Form.bulkoperationlog.Main {
    namespace Information {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "general"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "errornumber"): XrmBase.NumberAttribute;
            get(name: "regardingobjectid"): XrmBase.LookupAttribute<"account" | "contact" | "lead">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "errornumber"): XrmBase.NumberControl;
            get(name: "regardingobjectid"): XrmBase.LookupControl<"account" | "contact" | "lead">;
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
        getAttribute(attributeName: "errornumber"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "regardingobjectid"): XrmBase.LookupAttribute<"account" | "contact" | "lead">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "errornumber"): XrmBase.NumberControl;
        getControl(controlName: "regardingobjectid"): XrmBase.LookupControl<"account" | "contact" | "lead">;
        getControl(controlName: string): undefined;
    }
}
