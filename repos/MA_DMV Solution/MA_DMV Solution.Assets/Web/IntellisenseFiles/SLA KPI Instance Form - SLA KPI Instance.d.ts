declare namespace Form.slakpiinstance.Main {
    namespace SLAKPIInstance {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "failuretime"): XrmBase.DateAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "regarding"): XrmBase.LookupAttribute<"incident">;
            get(name: "succeededon"): XrmBase.DateAttribute;
            get(name: "warningtime"): XrmBase.DateAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "failuretime"): XrmBase.DateControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "regarding"): XrmBase.LookupControl<"incident">;
            get(name: "succeededon"): XrmBase.DateControl;
            get(name: "warningtime"): XrmBase.DateControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface SLAKPIInstance extends XrmBase.PageBase<SLAKPIInstance.Attributes, SLAKPIInstance.Tabs, SLAKPIInstance.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "regarding"): XrmBase.LookupAttribute<"incident">;
        getAttribute(attributeName: "failuretime"): XrmBase.DateAttribute;
        getAttribute(attributeName: "warningtime"): XrmBase.DateAttribute;
        getAttribute(attributeName: "succeededon"): XrmBase.DateAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "regarding"): XrmBase.LookupControl<"incident">;
        getControl(controlName: "failuretime"): XrmBase.DateControl;
        getControl(controlName: "warningtime"): XrmBase.DateControl;
        getControl(controlName: "succeededon"): XrmBase.DateControl;
        getControl(controlName: string): undefined;
    }
}
