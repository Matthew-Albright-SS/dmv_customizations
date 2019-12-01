declare namespace Form.sla.Main {
    namespace SLA {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "allowpauseresume"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "applicablefrompicklist"): XrmBase.OptionSetAttribute<slabase_applicablefrom>;
            get(name: "businesshoursid"): XrmBase.LookupAttribute<"calendar">;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "objecttypecode"): XrmBase.OptionSetAttribute<sla_objecttypecode>;
            get(name: "slatype"): XrmBase.OptionSetAttribute<sla_slatype>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "AllowPauseResume"): XrmBase.OptionSetControl<any>;
            get(name: "applicablefrompicklist"): XrmBase.OptionSetControl<slabase_applicablefrom>;
            get(name: "businesshoursid"): XrmBase.LookupControl<"calendar">;
            get(name: "description"): XrmBase.StringControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "objecttypecode"): XrmBase.OptionSetControl<sla_objecttypecode>;
            get(name: "SLADetails"): XrmBase.SubGridControl<"slaitem">;
            get(name: "SLAType"): XrmBase.OptionSetControl<sla_slatype>;
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
    interface SLA extends XrmBase.PageBase<SLA.Attributes, SLA.Tabs, SLA.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "objecttypecode"): XrmBase.OptionSetAttribute<sla_objecttypecode>;
        getAttribute(attributeName: "applicablefrompicklist"): XrmBase.OptionSetAttribute<slabase_applicablefrom>;
        getAttribute(attributeName: "businesshoursid"): XrmBase.LookupAttribute<"calendar">;
        getAttribute(attributeName: "slatype"): XrmBase.OptionSetAttribute<sla_slatype>;
        getAttribute(attributeName: "allowpauseresume"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "objecttypecode"): XrmBase.OptionSetControl<sla_objecttypecode>;
        getControl(controlName: "applicablefrompicklist"): XrmBase.OptionSetControl<slabase_applicablefrom>;
        getControl(controlName: "businesshoursid"): XrmBase.LookupControl<"calendar">;
        getControl(controlName: "SLAType"): XrmBase.OptionSetControl<sla_slatype>;
        getControl(controlName: "AllowPauseResume"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "SLADetails"): XrmBase.SubGridControl<"slaitem">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
