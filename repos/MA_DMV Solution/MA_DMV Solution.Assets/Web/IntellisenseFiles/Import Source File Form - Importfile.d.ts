declare namespace Form.importfile.Main {
    namespace Importfile {
        namespace Tabs {
            interface FailureTab extends XrmBase.SectionCollectionBase {
                get(name: "failureSection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface SuccessTab extends XrmBase.SectionCollectionBase {
                get(name: "successSection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface PartialFailureTab extends XrmBase.SectionCollectionBase {
                get(name: "partialFailureSection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "completedon"): XrmBase.DateAttribute;
            get(name: "createdby"): XrmBase.LookupAttribute<"systemuser">;
            get(name: "createdon"): XrmBase.DateAttribute;
            get(name: "enableduplicatedetection"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "failurecount"): XrmBase.NumberAttribute;
            get(name: "importmapid"): XrmBase.LookupAttribute<"importmap">;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "partialfailurecount"): XrmBase.NumberAttribute;
            get(name: "recordsownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "size"): XrmBase.StringAttribute;
            get(name: "source"): XrmBase.StringAttribute;
            get(name: "statuscode"): XrmBase.OptionSetAttribute<importfile_statuscode>;
            get(name: "successcount"): XrmBase.NumberAttribute;
            get(name: "targetentityname"): XrmBase.StringAttribute;
            get(name: "totalcount"): XrmBase.NumberAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "completedon"): XrmBase.DateControl;
            get(name: "createdby"): XrmBase.LookupControl<"systemuser">;
            get(name: "createdon"): XrmBase.DateControl;
            get(name: "enableduplicatedetection"): XrmBase.OptionSetControl<any>;
            get(name: "failurecount"): XrmBase.NumberControl;
            get(name: "FailureSubgrid"): XrmBase.SubGridControl<"importlog">;
            get(name: "import_Logs_Failure"): XrmBase.BaseControl;
            get(name: "import_Logs_Succes"): XrmBase.BaseControl;
            get(name: "importmapid"): XrmBase.LookupControl<"importmap">;
            get(name: "name"): XrmBase.StringControl;
            get(name: "partialfailurecount"): XrmBase.NumberControl;
            get(name: "recordsownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "size"): XrmBase.StringControl;
            get(name: "source"): XrmBase.StringControl;
            get(name: "statuscode"): XrmBase.OptionSetControl<importfile_statuscode>;
            get(name: "successcount"): XrmBase.NumberControl;
            get(name: "targetentityname"): XrmBase.StringControl;
            get(name: "totalcount"): XrmBase.NumberControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "failureTab"): XrmBase.PageTab<Tabs.FailureTab>;
            get(name: "successTab"): XrmBase.PageTab<Tabs.SuccessTab>;
            get(name: "partialFailureTab"): XrmBase.PageTab<Tabs.PartialFailureTab>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Importfile extends XrmBase.PageBase<Importfile.Attributes, Importfile.Tabs, Importfile.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "statuscode"): XrmBase.OptionSetAttribute<importfile_statuscode>;
        getAttribute(attributeName: "createdby"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "createdon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "completedon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "source"): XrmBase.StringAttribute;
        getAttribute(attributeName: "size"): XrmBase.StringAttribute;
        getAttribute(attributeName: "targetentityname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "importmapid"): XrmBase.LookupAttribute<"importmap">;
        getAttribute(attributeName: "recordsownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "enableduplicatedetection"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "successcount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "failurecount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "partialfailurecount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "totalcount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "statuscode"): XrmBase.OptionSetControl<importfile_statuscode>;
        getControl(controlName: "createdby"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "createdon"): XrmBase.DateControl;
        getControl(controlName: "completedon"): XrmBase.DateControl;
        getControl(controlName: "source"): XrmBase.StringControl;
        getControl(controlName: "size"): XrmBase.StringControl;
        getControl(controlName: "targetentityname"): XrmBase.StringControl;
        getControl(controlName: "importmapid"): XrmBase.LookupControl<"importmap">;
        getControl(controlName: "recordsownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "enableduplicatedetection"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "successcount"): XrmBase.NumberControl;
        getControl(controlName: "failurecount"): XrmBase.NumberControl;
        getControl(controlName: "partialfailurecount"): XrmBase.NumberControl;
        getControl(controlName: "totalcount"): XrmBase.NumberControl;
        getControl(controlName: "FailureSubgrid"): XrmBase.SubGridControl<"importlog">;
        getControl(controlName: "import_Logs_Succes"): XrmBase.BaseControl;
        getControl(controlName: "import_Logs_Failure"): XrmBase.BaseControl;
        getControl(controlName: string): undefined;
    }
}
