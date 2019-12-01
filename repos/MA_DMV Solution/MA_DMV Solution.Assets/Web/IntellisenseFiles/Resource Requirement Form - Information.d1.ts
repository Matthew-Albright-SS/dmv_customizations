declare namespace Form.msdyn_resourcerequirement.Main {
    namespace Information {
        namespace Tabs {
            interface RequirementGeneral extends XrmBase.SectionCollectionBase {
                get(name: "{db0712f3-6333-4878-92c9-004903985f09}"): XrmBase.PageSection;
                get(name: "Requirement_Notes"): XrmBase.PageSection;
                get(name: "{971e72a7-0e77-4c1e-80b9-e4eb74143e46}_section_3"): XrmBase.PageSection;
                get(name: "{971e72a7-0e77-4c1e-80b9-e4eb74143e46}_section_4"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tabproject extends XrmBase.SectionCollectionBase {
                get(name: "tab_3_section_1"): XrmBase.PageSection;
                get(name: "tab_3_section_2"): XrmBase.PageSection;
                get(name: "tab_3_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface TabFieldService extends XrmBase.SectionCollectionBase {
                get(name: "tab_FieldService_section1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface TabResourceBookings extends XrmBase.SectionCollectionBase {
                get(name: "tab_4_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab2 extends XrmBase.SectionCollectionBase {
                get(name: "tab_2_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_allocationmethod"): XrmBase.OptionSetAttribute<msdyn_resourcerequirement_msdyn_allocationmethod>;
            get(name: "msdyn_calendarid"): XrmBase.StringAttribute;
            get(name: "msdyn_city"): XrmBase.StringAttribute;
            get(name: "msdyn_costprice"): XrmBase.NumberAttribute;
            get(name: "msdyn_country"): XrmBase.StringAttribute;
            get(name: "msdyn_duration"): XrmBase.NumberAttribute;
            get(name: "msdyn_effort"): XrmBase.NumberAttribute;
            get(name: "msdyn_fromdate"): XrmBase.DateAttribute;
            get(name: "msdyn_fulfilledduration"): XrmBase.NumberAttribute;
            get(name: "msdyn_isprimary"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_latitude"): XrmBase.NumberAttribute;
            get(name: "msdyn_longitude"): XrmBase.NumberAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_percentage"): XrmBase.NumberAttribute;
            get(name: "msdyn_pooltype"): XrmBase.MultiSelectOptionSetAttribute<msdyn_pooltype>;
            get(name: "msdyn_priority"): XrmBase.LookupAttribute<"msdyn_priority">;
            get(name: "msdyn_projectid"): XrmBase.LookupAttribute<"msdyn_project">;
            get(name: "msdyn_proposedduration"): XrmBase.NumberAttribute;
            get(name: "msdyn_remainingduration"): XrmBase.NumberAttribute;
            get(name: "msdyn_requeststatus"): XrmBase.StringAttribute;
            get(name: "msdyn_requirementgroupid"): XrmBase.LookupAttribute<"msdyn_requirementgroup">;
            get(name: "msdyn_resourcetype"): XrmBase.MultiSelectOptionSetAttribute<msdyn_bookableresourcetype>;
            get(name: "msdyn_stateorprovince"): XrmBase.StringAttribute;
            get(name: "msdyn_status"): XrmBase.LookupAttribute<"msdyn_requirementstatus">;
            get(name: "msdyn_territory"): XrmBase.LookupAttribute<"territory">;
            get(name: "msdyn_timefrompromised"): XrmBase.DateAttribute;
            get(name: "msdyn_timegroup"): XrmBase.LookupAttribute<"msdyn_timegroup">;
            get(name: "msdyn_timetopromised"): XrmBase.DateAttribute;
            get(name: "msdyn_timewindowend"): XrmBase.DateAttribute;
            get(name: "msdyn_timewindowstart"): XrmBase.DateAttribute;
            get(name: "msdyn_todate"): XrmBase.DateAttribute;
            get(name: "msdyn_workhourtemplate"): XrmBase.LookupAttribute<"msdyn_workhourtemplate">;
            get(name: "msdyn_worklocation"): XrmBase.OptionSetAttribute<msdyn_worklocation>;
            get(name: "msdyn_workorder"): XrmBase.LookupAttribute<"msdyn_workorder">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "IFRAME_AvailabilityView"): XrmBase.IFrameControl;
            get(name: "msdyn_allocationmethod"): XrmBase.OptionSetControl<msdyn_resourcerequirement_msdyn_allocationmethod>;
            get(name: "msdyn_calendarid"): XrmBase.StringControl;
            get(name: "msdyn_city"): XrmBase.StringControl;
            get(name: "msdyn_costprice"): XrmBase.NumberControl;
            get(name: "msdyn_country"): XrmBase.StringControl;
            get(name: "msdyn_duration"): XrmBase.NumberControl;
            get(name: "msdyn_effort"): XrmBase.NumberControl;
            get(name: "msdyn_fromdate"): XrmBase.DateControl;
            get(name: "msdyn_fulfilledduration"): XrmBase.NumberControl;
            get(name: "msdyn_isprimary"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_latitude"): XrmBase.NumberControl;
            get(name: "msdyn_longitude"): XrmBase.NumberControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_percentage"): XrmBase.NumberControl;
            get(name: "msdyn_pooltype"): XrmBase.MultiSelectOptionSetControl<msdyn_pooltype>;
            get(name: "msdyn_priority"): XrmBase.LookupControl<"msdyn_priority">;
            get(name: "msdyn_projectid"): XrmBase.LookupControl<"msdyn_project">;
            get(name: "msdyn_proposedduration"): XrmBase.NumberControl;
            get(name: "msdyn_remainingduration"): XrmBase.NumberControl;
            get(name: "msdyn_requeststatus"): XrmBase.StringControl;
            get(name: "msdyn_requirementgroupid"): XrmBase.LookupControl<"msdyn_requirementgroup">;
            get(name: "msdyn_resourcetype"): XrmBase.MultiSelectOptionSetControl<msdyn_bookableresourcetype>;
            get(name: "msdyn_stateorprovince"): XrmBase.StringControl;
            get(name: "msdyn_status"): XrmBase.LookupControl<"msdyn_requirementstatus">;
            get(name: "msdyn_territory"): XrmBase.LookupControl<"territory">;
            get(name: "msdyn_timefrompromised"): XrmBase.DateControl;
            get(name: "msdyn_timegroup"): XrmBase.LookupControl<"msdyn_timegroup">;
            get(name: "msdyn_timetopromised"): XrmBase.DateControl;
            get(name: "msdyn_timewindowend"): XrmBase.BaseControl;
            get(name: "msdyn_timewindowstart"): XrmBase.BaseControl;
            get(name: "msdyn_todate"): XrmBase.DateControl;
            get(name: "msdyn_workhourtemplate"): XrmBase.LookupControl<"msdyn_workhourtemplate">;
            get(name: "msdyn_worklocation"): XrmBase.OptionSetControl<msdyn_worklocation>;
            get(name: "msdyn_workorder"): XrmBase.LookupControl<"msdyn_workorder">;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "RequirementCharacteristics"): XrmBase.SubGridControl<"msdyn_requirementcharacteristic">;
            get(name: "RequirementOrganizationUnit"): XrmBase.SubGridControl<"msdyn_requirementorganizationunit">;
            get(name: "RequirementResourceCategory"): XrmBase.SubGridControl<"msdyn_requirementresourcecategory">;
            get(name: "RequirementResourcePreferences"): XrmBase.SubGridControl<"msdyn_requirementresourcepreference">;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: "WebResource_msdyn_timewindowend"): XrmBase.WebResourceControl;
            get(name: "WebResource_msdyn_timewindowstart"): XrmBase.WebResourceControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "Requirement_General"): XrmBase.PageTab<Tabs.RequirementGeneral>;
            get(name: "tab_project"): XrmBase.PageTab<Tabs.Tabproject>;
            get(name: "tab_FieldService"): XrmBase.PageTab<Tabs.TabFieldService>;
            get(name: "tab_ResourceBookings"): XrmBase.PageTab<Tabs.TabResourceBookings>;
            get(name: "tab_2"): XrmBase.PageTab<Tabs.Tab2>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_fromdate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_todate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_allocationmethod"): XrmBase.OptionSetAttribute<msdyn_resourcerequirement_msdyn_allocationmethod>;
        getAttribute(attributeName: "msdyn_duration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_effort"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_percentage"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_status"): XrmBase.LookupAttribute<"msdyn_requirementstatus">;
        getAttribute(attributeName: "msdyn_workhourtemplate"): XrmBase.LookupAttribute<"msdyn_workhourtemplate">;
        getAttribute(attributeName: "msdyn_resourcetype"): XrmBase.MultiSelectOptionSetAttribute<msdyn_bookableresourcetype>;
        getAttribute(attributeName: "msdyn_pooltype"): XrmBase.MultiSelectOptionSetAttribute<msdyn_pooltype>;
        getAttribute(attributeName: "msdyn_calendarid"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_requirementgroupid"): XrmBase.LookupAttribute<"msdyn_requirementgroup">;
        getAttribute(attributeName: "msdyn_projectid"): XrmBase.LookupAttribute<"msdyn_project">;
        getAttribute(attributeName: "msdyn_requeststatus"): XrmBase.StringAttribute;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "msdyn_costprice"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_country"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_stateorprovince"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_city"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_workorder"): XrmBase.LookupAttribute<"msdyn_workorder">;
        getAttribute(attributeName: "msdyn_worklocation"): XrmBase.OptionSetAttribute<msdyn_worklocation>;
        getAttribute(attributeName: "msdyn_isprimary"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_priority"): XrmBase.LookupAttribute<"msdyn_priority">;
        getAttribute(attributeName: "msdyn_remainingduration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_territory"): XrmBase.LookupAttribute<"territory">;
        getAttribute(attributeName: "msdyn_fulfilledduration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_timefrompromised"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_proposedduration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_timetopromised"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_timegroup"): XrmBase.LookupAttribute<"msdyn_timegroup">;
        getAttribute(attributeName: "msdyn_timewindowstart"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_latitude"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_timewindowend"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_longitude"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_fromdate"): XrmBase.DateControl;
        getControl(controlName: "msdyn_todate"): XrmBase.DateControl;
        getControl(controlName: "msdyn_allocationmethod"): XrmBase.OptionSetControl<msdyn_resourcerequirement_msdyn_allocationmethod>;
        getControl(controlName: "msdyn_duration"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_effort"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_percentage"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_status"): XrmBase.LookupControl<"msdyn_requirementstatus">;
        getControl(controlName: "msdyn_workhourtemplate"): XrmBase.LookupControl<"msdyn_workhourtemplate">;
        getControl(controlName: "msdyn_resourcetype"): XrmBase.MultiSelectOptionSetControl<msdyn_bookableresourcetype>;
        getControl(controlName: "msdyn_pooltype"): XrmBase.MultiSelectOptionSetControl<msdyn_pooltype>;
        getControl(controlName: "msdyn_calendarid"): XrmBase.StringControl;
        getControl(controlName: "msdyn_requirementgroupid"): XrmBase.LookupControl<"msdyn_requirementgroup">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "RequirementCharacteristics"): XrmBase.SubGridControl<"msdyn_requirementcharacteristic">;
        getControl(controlName: "RequirementResourceCategory"): XrmBase.SubGridControl<"msdyn_requirementresourcecategory">;
        getControl(controlName: "RequirementResourcePreferences"): XrmBase.SubGridControl<"msdyn_requirementresourcepreference">;
        getControl(controlName: "RequirementOrganizationUnit"): XrmBase.SubGridControl<"msdyn_requirementorganizationunit">;
        getControl(controlName: "msdyn_projectid"): XrmBase.LookupControl<"msdyn_project">;
        getControl(controlName: "msdyn_requeststatus"): XrmBase.StringControl;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "msdyn_costprice"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_country"): XrmBase.StringControl;
        getControl(controlName: "msdyn_stateorprovince"): XrmBase.StringControl;
        getControl(controlName: "msdyn_city"): XrmBase.StringControl;
        getControl(controlName: "msdyn_workorder"): XrmBase.LookupControl<"msdyn_workorder">;
        getControl(controlName: "IFRAME_AvailabilityView"): XrmBase.IFrameControl;
        getControl(controlName: "WebResource_msdyn_timewindowstart"): XrmBase.WebResourceControl;
        getControl(controlName: "WebResource_msdyn_timewindowend"): XrmBase.WebResourceControl;
        getControl(controlName: "msdyn_worklocation"): XrmBase.OptionSetControl<msdyn_worklocation>;
        getControl(controlName: "msdyn_isprimary"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_priority"): XrmBase.LookupControl<"msdyn_priority">;
        getControl(controlName: "msdyn_remainingduration"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_territory"): XrmBase.LookupControl<"territory">;
        getControl(controlName: "msdyn_fulfilledduration"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_timefrompromised"): XrmBase.DateControl;
        getControl(controlName: "msdyn_proposedduration"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_timetopromised"): XrmBase.DateControl;
        getControl(controlName: "msdyn_timegroup"): XrmBase.LookupControl<"msdyn_timegroup">;
        getControl(controlName: "msdyn_timewindowstart"): XrmBase.BaseControl;
        getControl(controlName: "msdyn_latitude"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_timewindowend"): XrmBase.BaseControl;
        getControl(controlName: "msdyn_longitude"): XrmBase.NumberControl;
        getControl(controlName: string): undefined;
    }
}
