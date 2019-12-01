declare namespace Form.msdyn_agreementbookingsetup.Main {
    namespace AgreementBookingSetupMobile {
        namespace Tabs {
            interface Fstabgeneral extends XrmBase.SectionCollectionBase {
                get(name: "fstab_general_section_summary"): XrmBase.PageSection;
                get(name: "fstab_general_section_work_order_settings"): XrmBase.PageSection;
                get(name: "fstab_general_section_booking_settings"): XrmBase.PageSection;
                get(name: "fstab_general_section_preferences"): XrmBase.PageSection;
                get(name: "fstab_general_column_2_section_1"): XrmBase.PageSection;
                get(name: "fstab_general_column_3_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Fstabother extends XrmBase.SectionCollectionBase {
                get(name: "tab_4_section_2"): XrmBase.PageSection;
                get(name: "tab_4_section_3"): XrmBase.PageSection;
                get(name: "tab_4_section_4"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Fstabsubgrids extends XrmBase.SectionCollectionBase {
                get(name: "tab_9_section_1"): XrmBase.PageSection;
                get(name: "tab_9_section_2"): XrmBase.PageSection;
                get(name: "tab_9_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_agreement"): XrmBase.LookupAttribute<"msdyn_agreement">;
            get(name: "msdyn_autogeneratebooking"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_autogeneratewo"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_estimatedduration"): XrmBase.NumberAttribute;
            get(name: "msdyn_generatewodaysinadvance"): XrmBase.NumberAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_postbookingflexibility"): XrmBase.NumberAttribute;
            get(name: "msdyn_prebookingflexibility"): XrmBase.NumberAttribute;
            get(name: "msdyn_preferredresource"): XrmBase.LookupAttribute<"bookableresource">;
            get(name: "msdyn_preferredstarttime"): XrmBase.DateAttribute;
            get(name: "msdyn_priority"): XrmBase.LookupAttribute<"msdyn_priority">;
            get(name: "msdyn_recurrencesettings"): XrmBase.StringAttribute;
            get(name: "msdyn_timewindowend"): XrmBase.DateAttribute;
            get(name: "msdyn_timewindowstart"): XrmBase.DateAttribute;
            get(name: "msdyn_workordersummary"): XrmBase.StringAttribute;
            get(name: "msdyn_workordertype"): XrmBase.LookupAttribute<"msdyn_workordertype">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "AgreementBookingProductsGrid"): XrmBase.SubGridControl<"msdyn_agreementbookingproduct">;
            get(name: "AgreementBookingServicesGrid"): XrmBase.SubGridControl<"msdyn_agreementbookingservice">;
            get(name: "AgreementBookingServiceTasksGrid"): XrmBase.SubGridControl<"msdyn_agreementbookingservicetask">;
            get(name: "incidentsgrid"): XrmBase.SubGridControl<"msdyn_agreementbookingincident">;
            get(name: "msdyn_agreement"): XrmBase.LookupControl<"msdyn_agreement">;
            get(name: "msdyn_autogeneratebooking"): XrmBase.BaseControl;
            get(name: "msdyn_autogeneratewo"): XrmBase.BaseControl;
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_estimatedduration"): XrmBase.NumberControl;
            get(name: "msdyn_generatewodaysinadvance"): XrmBase.BaseControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_postbookingflexibility"): XrmBase.NumberControl;
            get(name: "msdyn_prebookingflexibility"): XrmBase.NumberControl;
            get(name: "msdyn_preferredresource"): XrmBase.LookupControl<"bookableresource">;
            get(name: "msdyn_preferredstarttime"): XrmBase.BaseControl;
            get(name: "msdyn_priority"): XrmBase.LookupControl<"msdyn_priority">;
            get(name: "msdyn_recurrencesettings"): XrmBase.StringControl;
            get(name: "msdyn_timewindowend"): XrmBase.BaseControl;
            get(name: "msdyn_timewindowstart"): XrmBase.BaseControl;
            get(name: "msdyn_workordersummary"): XrmBase.StringControl;
            get(name: "msdyn_workordertype"): XrmBase.LookupControl<"msdyn_workordertype">;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "schecduledategrid"): XrmBase.SubGridControl<"msdyn_agreementbookingdate">;
            get(name: "WebResource_PreferredStartTime_TimeField"): XrmBase.WebResourceControl;
            get(name: "WebResource_TimeWindowEnd_TimeField"): XrmBase.WebResourceControl;
            get(name: "WebResource_TimeWindowStart_TimeField"): XrmBase.WebResourceControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "fstab_general"): XrmBase.PageTab<Tabs.Fstabgeneral>;
            get(name: "fstab_other"): XrmBase.PageTab<Tabs.Fstabother>;
            get(name: "fstab_sub_grids"): XrmBase.PageTab<Tabs.Fstabsubgrids>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface AgreementBookingSetupMobile extends XrmBase.PageBase<AgreementBookingSetupMobile.Attributes, AgreementBookingSetupMobile.Tabs, AgreementBookingSetupMobile.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_agreement"): XrmBase.LookupAttribute<"msdyn_agreement">;
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_autogeneratewo"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_workordertype"): XrmBase.LookupAttribute<"msdyn_workordertype">;
        getAttribute(attributeName: "msdyn_generatewodaysinadvance"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_priority"): XrmBase.LookupAttribute<"msdyn_priority">;
        getAttribute(attributeName: "msdyn_workordersummary"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_autogeneratebooking"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_estimatedduration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_prebookingflexibility"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_postbookingflexibility"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_preferredresource"): XrmBase.LookupAttribute<"bookableresource">;
        getAttribute(attributeName: "msdyn_timewindowstart"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_timewindowend"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_preferredstarttime"): XrmBase.DateAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_recurrencesettings"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_agreement"): XrmBase.LookupControl<"msdyn_agreement">;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "msdyn_autogeneratewo"): XrmBase.BaseControl;
        getControl(controlName: "msdyn_workordertype"): XrmBase.LookupControl<"msdyn_workordertype">;
        getControl(controlName: "msdyn_generatewodaysinadvance"): XrmBase.BaseControl;
        getControl(controlName: "msdyn_priority"): XrmBase.LookupControl<"msdyn_priority">;
        getControl(controlName: "msdyn_workordersummary"): XrmBase.StringControl;
        getControl(controlName: "msdyn_autogeneratebooking"): XrmBase.BaseControl;
        getControl(controlName: "msdyn_estimatedduration"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_prebookingflexibility"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_postbookingflexibility"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_preferredresource"): XrmBase.LookupControl<"bookableresource">;
        getControl(controlName: "WebResource_TimeWindowStart_TimeField"): XrmBase.WebResourceControl;
        getControl(controlName: "WebResource_TimeWindowEnd_TimeField"): XrmBase.WebResourceControl;
        getControl(controlName: "WebResource_PreferredStartTime_TimeField"): XrmBase.WebResourceControl;
        getControl(controlName: "msdyn_timewindowstart"): XrmBase.BaseControl;
        getControl(controlName: "msdyn_timewindowend"): XrmBase.BaseControl;
        getControl(controlName: "msdyn_preferredstarttime"): XrmBase.BaseControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_recurrencesettings"): XrmBase.StringControl;
        getControl(controlName: "incidentsgrid"): XrmBase.SubGridControl<"msdyn_agreementbookingincident">;
        getControl(controlName: "AgreementBookingProductsGrid"): XrmBase.SubGridControl<"msdyn_agreementbookingproduct">;
        getControl(controlName: "AgreementBookingServicesGrid"): XrmBase.SubGridControl<"msdyn_agreementbookingservice">;
        getControl(controlName: "AgreementBookingServiceTasksGrid"): XrmBase.SubGridControl<"msdyn_agreementbookingservicetask">;
        getControl(controlName: "schecduledategrid"): XrmBase.SubGridControl<"msdyn_agreementbookingdate">;
        getControl(controlName: string): undefined;
    }
}
