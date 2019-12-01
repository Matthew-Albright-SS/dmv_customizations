declare namespace Form.bookableresource.Main {
    namespace BookableResourceMobile {
        namespace Tabs {
            interface Fstabgeneral extends XrmBase.SectionCollectionBase {
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Fstabfieldservice extends XrmBase.SectionCollectionBase {
                get(name: "fstab_field_service_section_field_service"): XrmBase.PageSection;
                get(name: "fstab_field_service_section_scheduling"): XrmBase.PageSection;
                get(name: "fstab_field_service_section_misc"): XrmBase.PageSection;
                get(name: "fstab_field_service_section_4"): XrmBase.PageSection;
                get(name: "fstab_field_service_section_5"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Fstabsubgrids extends XrmBase.SectionCollectionBase {
                get(name: "fstab_sub_grids_section"): XrmBase.PageSection;
                get(name: "tab_3_section_2"): XrmBase.PageSection;
                get(name: "tab_3_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "accountid"): XrmBase.LookupAttribute<"account">;
            get(name: "contactid"): XrmBase.LookupAttribute<"contact">;
            get(name: "msdyn_bookingstodrip"): XrmBase.NumberAttribute;
            get(name: "msdyn_displayonscheduleassistant"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_displayonscheduleboard"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_enabledripscheduling"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_endlocation"): XrmBase.OptionSetAttribute<msdyn_workstartlocationtype>;
            get(name: "msdyn_generictype"): XrmBase.OptionSetAttribute<msdyn_generictype>;
            get(name: "msdyn_hourlyrate"): XrmBase.NumberAttribute;
            get(name: "msdyn_startlocation"): XrmBase.OptionSetAttribute<msdyn_workstartlocationtype>;
            get(name: "msdyn_timeoffapprovalrequired"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_warehouse"): XrmBase.LookupAttribute<"msdyn_warehouse">;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "resourcetype"): XrmBase.OptionSetAttribute<bookableresource_resourcetype>;
            get(name: "timezone"): XrmBase.NumberAttribute;
            get(name: "userid"): XrmBase.LookupAttribute<"systemuser">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "accountid"): XrmBase.LookupControl<"account">;
            get(name: "BookableResourceCharacteristics"): XrmBase.SubGridControl<"bookableresourcecharacteristic">;
            get(name: "CATEGORYASSOCIATIONS"): XrmBase.SubGridControl<"bookableresourcecategoryassn">;
            get(name: "contactid"): XrmBase.LookupControl<"contact">;
            get(name: "msdyn_bookingstodrip"): XrmBase.NumberControl;
            get(name: "msdyn_displayonscheduleassistant"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_displayonscheduleboard"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_enabledripscheduling"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_endlocation"): XrmBase.OptionSetControl<msdyn_workstartlocationtype>;
            get(name: "msdyn_generictype"): XrmBase.OptionSetControl<msdyn_generictype>;
            get(name: "msdyn_hourlyrate"): XrmBase.NumberControl;
            get(name: "msdyn_startlocation"): XrmBase.OptionSetControl<msdyn_workstartlocationtype>;
            get(name: "msdyn_timeoffapprovalrequired"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_warehouse"): XrmBase.LookupControl<"msdyn_warehouse">;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ResourceCategory"): XrmBase.SubGridControl<"bookableresourcecategoryassn">;
            get(name: "ResourceCharacteristics"): XrmBase.SubGridControl<"bookableresourcecharacteristic">;
            get(name: "resourcetype"): XrmBase.OptionSetControl<bookableresource_resourcetype>;
            get(name: "timezone"): XrmBase.BaseControl;
            get(name: "userid"): XrmBase.LookupControl<"systemuser">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "fstab_general"): XrmBase.PageTab<Tabs.Fstabgeneral>;
            get(name: "fstab_field_service"): XrmBase.PageTab<Tabs.Fstabfieldservice>;
            get(name: "fstab_sub_grids"): XrmBase.PageTab<Tabs.Fstabsubgrids>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface BookableResourceMobile extends XrmBase.PageBase<BookableResourceMobile.Attributes, BookableResourceMobile.Tabs, BookableResourceMobile.Controls> {
        getAttribute(attributeName: "resourcetype"): XrmBase.OptionSetAttribute<bookableresource_resourcetype>;
        getAttribute(attributeName: "userid"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "contactid"): XrmBase.LookupAttribute<"contact">;
        getAttribute(attributeName: "accountid"): XrmBase.LookupAttribute<"account">;
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "timezone"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_hourlyrate"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_generictype"): XrmBase.OptionSetAttribute<msdyn_generictype>;
        getAttribute(attributeName: "msdyn_startlocation"): XrmBase.OptionSetAttribute<msdyn_workstartlocationtype>;
        getAttribute(attributeName: "msdyn_endlocation"): XrmBase.OptionSetAttribute<msdyn_workstartlocationtype>;
        getAttribute(attributeName: "msdyn_warehouse"): XrmBase.LookupAttribute<"msdyn_warehouse">;
        getAttribute(attributeName: "msdyn_displayonscheduleboard"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_displayonscheduleassistant"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_timeoffapprovalrequired"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_enabledripscheduling"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_bookingstodrip"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "resourcetype"): XrmBase.OptionSetControl<bookableresource_resourcetype>;
        getControl(controlName: "userid"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "contactid"): XrmBase.LookupControl<"contact">;
        getControl(controlName: "accountid"): XrmBase.LookupControl<"account">;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "timezone"): XrmBase.BaseControl;
        getControl(controlName: "msdyn_hourlyrate"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_generictype"): XrmBase.OptionSetControl<msdyn_generictype>;
        getControl(controlName: "msdyn_startlocation"): XrmBase.OptionSetControl<msdyn_workstartlocationtype>;
        getControl(controlName: "msdyn_endlocation"): XrmBase.OptionSetControl<msdyn_workstartlocationtype>;
        getControl(controlName: "msdyn_warehouse"): XrmBase.LookupControl<"msdyn_warehouse">;
        getControl(controlName: "msdyn_displayonscheduleboard"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_displayonscheduleassistant"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_timeoffapprovalrequired"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_enabledripscheduling"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_bookingstodrip"): XrmBase.NumberControl;
        getControl(controlName: "ResourceCategory"): XrmBase.SubGridControl<"bookableresourcecategoryassn">;
        getControl(controlName: "ResourceCharacteristics"): XrmBase.SubGridControl<"bookableresourcecharacteristic">;
        getControl(controlName: "BookableResourceCharacteristics"): XrmBase.SubGridControl<"bookableresourcecharacteristic">;
        getControl(controlName: "CATEGORYASSOCIATIONS"): XrmBase.SubGridControl<"bookableresourcecategoryassn">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
