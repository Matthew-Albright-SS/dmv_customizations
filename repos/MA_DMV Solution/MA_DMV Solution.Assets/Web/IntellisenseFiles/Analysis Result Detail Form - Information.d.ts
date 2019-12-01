declare namespace Form.msdyn_analysisresultdetail.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_analysisresult"): XrmBase.LookupAttribute<"msdyn_analysisresult">;
            get(name: "msdyn_entityname"): XrmBase.StringAttribute;
            get(name: "msdyn_message"): XrmBase.StringAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_resultentityid"): XrmBase.StringAttribute;
            get(name: "msdyn_resultentitylogicalname"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_analysisresult"): XrmBase.LookupControl<"msdyn_analysisresult">;
            get(name: "msdyn_entityname"): XrmBase.StringControl;
            get(name: "msdyn_message"): XrmBase.StringControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_resultentityid"): XrmBase.StringControl;
            get(name: "msdyn_resultentitylogicalname"): XrmBase.StringControl;
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
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_analysisresult"): XrmBase.LookupAttribute<"msdyn_analysisresult">;
        getAttribute(attributeName: "msdyn_entityname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_resultentityid"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_resultentitylogicalname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_message"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_analysisresult"): XrmBase.LookupControl<"msdyn_analysisresult">;
        getControl(controlName: "msdyn_entityname"): XrmBase.StringControl;
        getControl(controlName: "msdyn_resultentityid"): XrmBase.StringControl;
        getControl(controlName: "msdyn_resultentitylogicalname"): XrmBase.StringControl;
        getControl(controlName: "msdyn_message"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
