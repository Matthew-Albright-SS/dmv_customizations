declare namespace Form.ss_leaveapplication.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "createdon"): XrmBase.DateAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "ss_detailexplanationofleave"): XrmBase.StringAttribute;
            get(name: "ss_employeesalary"): XrmBase.NumberAttribute;
            get(name: "ss_employeesalary_base"): XrmBase.NumberAttribute;
            get(name: "ss_enddate"): XrmBase.DateAttribute;
            get(name: "ss_haveleavebalance"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "ss_leavereason"): XrmBase.StringAttribute;
            get(name: "ss_leavetype"): XrmBase.OptionSetAttribute<ss_leaveapplication_ss_leavetype>;
            get(name: "ss_lossofpay"): XrmBase.NumberAttribute;
            get(name: "ss_name"): XrmBase.StringAttribute;
            get(name: "ss_noofdays"): XrmBase.NumberAttribute;
            get(name: "ss_startdate"): XrmBase.DateAttribute;
            get(name: "statecode"): XrmBase.OptionSetAttribute<ss_leaveapplication_statecode>;
            get(name: "statuscode"): XrmBase.OptionSetAttribute<ss_leaveapplication_statuscode>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "createdon"): XrmBase.DateControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "ss_detailexplanationofleave"): XrmBase.StringControl;
            get(name: "ss_employeesalary"): XrmBase.NumberControl;
            get(name: "ss_employeesalary_base"): XrmBase.NumberControl;
            get(name: "ss_enddate"): XrmBase.DateControl;
            get(name: "ss_haveleavebalance"): XrmBase.OptionSetControl<any>;
            get(name: "ss_leavereason"): XrmBase.StringControl;
            get(name: "ss_leavetype"): XrmBase.OptionSetControl<ss_leaveapplication_ss_leavetype>;
            get(name: "ss_lossofpay"): XrmBase.NumberControl;
            get(name: "ss_name"): XrmBase.StringControl;
            get(name: "ss_noofdays"): XrmBase.NumberControl;
            get(name: "ss_startdate"): XrmBase.DateControl;
            get(name: "statecode"): XrmBase.OptionSetControl<ss_leaveapplication_statecode>;
            get(name: "statuscode"): XrmBase.OptionSetControl<ss_leaveapplication_statuscode>;
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
        getAttribute(attributeName: "ss_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "ss_leavetype"): XrmBase.OptionSetAttribute<ss_leaveapplication_ss_leavetype>;
        getAttribute(attributeName: "ss_leavereason"): XrmBase.StringAttribute;
        getAttribute(attributeName: "statecode"): XrmBase.OptionSetAttribute<ss_leaveapplication_statecode>;
        getAttribute(attributeName: "statuscode"): XrmBase.OptionSetAttribute<ss_leaveapplication_statuscode>;
        getAttribute(attributeName: "ss_haveleavebalance"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "ss_noofdays"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "ss_lossofpay"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "ss_employeesalary_base"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "ss_employeesalary"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "ss_detailexplanationofleave"): XrmBase.StringAttribute;
        getAttribute(attributeName: "createdon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "ss_startdate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "ss_enddate"): XrmBase.DateAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "ss_name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "ss_leavetype"): XrmBase.OptionSetControl<ss_leaveapplication_ss_leavetype>;
        getControl(controlName: "ss_leavereason"): XrmBase.StringControl;
        getControl(controlName: "statecode"): XrmBase.OptionSetControl<ss_leaveapplication_statecode>;
        getControl(controlName: "statuscode"): XrmBase.OptionSetControl<ss_leaveapplication_statuscode>;
        getControl(controlName: "ss_haveleavebalance"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "ss_noofdays"): XrmBase.NumberControl;
        getControl(controlName: "ss_lossofpay"): XrmBase.NumberControl;
        getControl(controlName: "ss_employeesalary_base"): XrmBase.NumberControl;
        getControl(controlName: "ss_employeesalary"): XrmBase.NumberControl;
        getControl(controlName: "ss_detailexplanationofleave"): XrmBase.StringControl;
        getControl(controlName: "createdon"): XrmBase.DateControl;
        getControl(controlName: "ss_startdate"): XrmBase.DateControl;
        getControl(controlName: "ss_enddate"): XrmBase.DateControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
