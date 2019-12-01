declare namespace Form.bulkdeleteoperation.Main {
    namespace Information {
        namespace Tabs {
            interface Properties extends XrmBase.SectionCollectionBase {
                get(name: "details"): XrmBase.PageSection;
                get(name: "querydetails"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "createdby"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "createdon"): XrmBase.DateAttribute;
            get(name: "failurecount"): XrmBase.NumberAttribute;
            get(name: "isrecurring"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "modifiedby"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "modifiedon"): XrmBase.DateAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "nextrun"): XrmBase.DateAttribute;
            get(name: "statuscode"): XrmBase.OptionSetAttribute<bulkdeleteoperation_statuscode>;
            get(name: "successcount"): XrmBase.NumberAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "advfindcontrol"): XrmBase.IFrameControl;
            get(name: "createdby"): XrmBase.LookupControl<"systemuser">;
            get(name: "createdon"): XrmBase.DateControl;
            get(name: "failurecount"): XrmBase.NumberControl;
            get(name: "modifiedby"): XrmBase.LookupControl<"systemuser">;
            get(name: "modifiedon"): XrmBase.DateControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "nextrun"): XrmBase.DateControl;
            get(name: "ownerid"): XrmBase.BaseControl;
            get(name: "querylist"): XrmBase.OptionSetControl<any>;
            get(name: "rdNotify"): XrmBase.OptionSetControl<any>;
            get(name: "recipients"): XrmBase.BaseControl;
            get(name: "recurring"): XrmBase.OptionSetControl<any>;
            get(name: "statuscode"): XrmBase.OptionSetControl<bulkdeleteoperation_statuscode>;
            get(name: "successcount"): XrmBase.NumberControl;
            get(name: "totalcount"): XrmBase.NumberControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "properties"): XrmBase.PageTab<Tabs.Properties>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "statuscode"): XrmBase.OptionSetAttribute<bulkdeleteoperation_statuscode>;
        getAttribute(attributeName: "isrecurring"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "nextrun"): XrmBase.DateAttribute;
        getAttribute(attributeName: "successcount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "failurecount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "createdby"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "createdon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "modifiedby"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "modifiedon"): XrmBase.DateAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.BaseControl;
        getControl(controlName: "statuscode"): XrmBase.OptionSetControl<bulkdeleteoperation_statuscode>;
        getControl(controlName: "rdNotify"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "recurring"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "recipients"): XrmBase.BaseControl;
        getControl(controlName: "nextrun"): XrmBase.DateControl;
        getControl(controlName: "successcount"): XrmBase.NumberControl;
        getControl(controlName: "totalcount"): XrmBase.NumberControl;
        getControl(controlName: "failurecount"): XrmBase.NumberControl;
        getControl(controlName: "createdby"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "createdon"): XrmBase.DateControl;
        getControl(controlName: "modifiedby"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "modifiedon"): XrmBase.DateControl;
        getControl(controlName: "querylist"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "advfindcontrol"): XrmBase.IFrameControl;
        getControl(controlName: string): undefined;
    }
}
