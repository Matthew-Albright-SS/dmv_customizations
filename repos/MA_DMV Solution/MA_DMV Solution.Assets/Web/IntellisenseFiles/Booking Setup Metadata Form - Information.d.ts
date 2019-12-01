declare namespace Form.msdyn_bookingsetupmetadata.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_availabledurationminimumpercentage"): XrmBase.NumberAttribute;
            get(name: "msdyn_bookingrelationshiplogicalname"): XrmBase.StringAttribute;
            get(name: "msdyn_bookingstatusfieldlogicalname"): XrmBase.StringAttribute;
            get(name: "msdyn_cancelbookingswhenmoving"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_defaultbookingcanceledstatus"): XrmBase.LookupAttribute<"bookingstatus">;
            get(name: "msdyn_defaultbookingcommittedstatus"): XrmBase.LookupAttribute<"bookingstatus">;
            get(name: "msdyn_defaultbookingduration"): XrmBase.NumberAttribute;
            get(name: "msdyn_defaultrequirementactivestatus"): XrmBase.LookupAttribute<"msdyn_requirementstatus">;
            get(name: "msdyn_defaultrequirementcanceledstatus"): XrmBase.LookupAttribute<"msdyn_requirementstatus">;
            get(name: "msdyn_defaultrequirementcompletedstatus"): XrmBase.LookupAttribute<"msdyn_requirementstatus">;
            get(name: "msdyn_disablerequirementautocreation"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_enablequickbook"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_entitylogicalname"): XrmBase.StringAttribute;
            get(name: "msdyn_requirementrelationshiplogicalname"): XrmBase.StringAttribute;
            get(name: "msdyn_resourceavailabilityretrievallimit"): XrmBase.NumberAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_availabledurationminimumpercentage"): XrmBase.NumberControl;
            get(name: "msdyn_bookingrelationshiplogicalname"): XrmBase.StringControl;
            get(name: "msdyn_bookingstatusfieldlogicalname"): XrmBase.StringControl;
            get(name: "msdyn_cancelbookingswhenmoving"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_defaultbookingcanceledstatus"): XrmBase.LookupControl<"bookingstatus">;
            get(name: "msdyn_defaultbookingcommittedstatus"): XrmBase.LookupControl<"bookingstatus">;
            get(name: "msdyn_defaultbookingduration"): XrmBase.NumberControl;
            get(name: "msdyn_defaultrequirementactivestatus"): XrmBase.LookupControl<"msdyn_requirementstatus">;
            get(name: "msdyn_defaultrequirementcanceledstatus"): XrmBase.LookupControl<"msdyn_requirementstatus">;
            get(name: "msdyn_defaultrequirementcompletedstatus"): XrmBase.LookupControl<"msdyn_requirementstatus">;
            get(name: "msdyn_disablerequirementautocreation"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_enablequickbook"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_entitylogicalname"): XrmBase.StringControl;
            get(name: "msdyn_requirementrelationshiplogicalname"): XrmBase.StringControl;
            get(name: "msdyn_resourceavailabilityretrievallimit"): XrmBase.NumberControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "WebResource_ScheduleAttributeMapping"): XrmBase.WebResourceControl;
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
        getAttribute(attributeName: "msdyn_entitylogicalname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_bookingrelationshiplogicalname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_requirementrelationshiplogicalname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_bookingstatusfieldlogicalname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_defaultbookingduration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_cancelbookingswhenmoving"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_defaultbookingcommittedstatus"): XrmBase.LookupAttribute<"bookingstatus">;
        getAttribute(attributeName: "msdyn_defaultbookingcanceledstatus"): XrmBase.LookupAttribute<"bookingstatus">;
        getAttribute(attributeName: "msdyn_defaultrequirementactivestatus"): XrmBase.LookupAttribute<"msdyn_requirementstatus">;
        getAttribute(attributeName: "msdyn_disablerequirementautocreation"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_defaultrequirementcanceledstatus"): XrmBase.LookupAttribute<"msdyn_requirementstatus">;
        getAttribute(attributeName: "msdyn_defaultrequirementcompletedstatus"): XrmBase.LookupAttribute<"msdyn_requirementstatus">;
        getAttribute(attributeName: "msdyn_resourceavailabilityretrievallimit"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_availabledurationminimumpercentage"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_enablequickbook"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_entitylogicalname"): XrmBase.StringControl;
        getControl(controlName: "msdyn_bookingrelationshiplogicalname"): XrmBase.StringControl;
        getControl(controlName: "msdyn_requirementrelationshiplogicalname"): XrmBase.StringControl;
        getControl(controlName: "msdyn_bookingstatusfieldlogicalname"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_defaultbookingduration"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_cancelbookingswhenmoving"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_defaultbookingcommittedstatus"): XrmBase.LookupControl<"bookingstatus">;
        getControl(controlName: "msdyn_defaultbookingcanceledstatus"): XrmBase.LookupControl<"bookingstatus">;
        getControl(controlName: "msdyn_defaultrequirementactivestatus"): XrmBase.LookupControl<"msdyn_requirementstatus">;
        getControl(controlName: "msdyn_disablerequirementautocreation"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_defaultrequirementcanceledstatus"): XrmBase.LookupControl<"msdyn_requirementstatus">;
        getControl(controlName: "msdyn_defaultrequirementcompletedstatus"): XrmBase.LookupControl<"msdyn_requirementstatus">;
        getControl(controlName: "msdyn_resourceavailabilityretrievallimit"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_availabledurationminimumpercentage"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_enablequickbook"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "WebResource_ScheduleAttributeMapping"): XrmBase.WebResourceControl;
        getControl(controlName: string): undefined;
    }
}
