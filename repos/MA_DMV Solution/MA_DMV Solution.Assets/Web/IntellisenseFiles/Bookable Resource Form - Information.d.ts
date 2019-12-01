declare namespace Form.bookableresource.Main {
    namespace Information {
        namespace Tabs {
            interface e37f45244a6642dc974c078756aef3fb extends XrmBase.SectionCollectionBase {
                get(name: "tab_4_section_1"): XrmBase.PageSection;
                get(name: "{9e7dec57-2c62-4d5d-8b21-75d076c5d1a1}"): XrmBase.PageSection;
                get(name: "{e37f4524-4a66-42dc-974c-078756aef3fb}_section_6"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tabprojectservice extends XrmBase.SectionCollectionBase {
                get(name: "tab_2_section_1"): XrmBase.PageSection;
                get(name: "tab_2_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface FieldService extends XrmBase.SectionCollectionBase {
                get(name: "fstab_service_settings_section_5"): XrmBase.PageSection;
                get(name: "fstab_service_settings_section_7"): XrmBase.PageSection;
                get(name: "FieldService_section_4"): XrmBase.PageSection;
                get(name: "FieldService_section_5"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab2 extends XrmBase.SectionCollectionBase {
                get(name: "tab_2_section_1_2"): XrmBase.PageSection;
                get(name: "tab_2_section_2_3"): XrmBase.PageSection;
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
            get(name: "msdyn_crewstrategy"): XrmBase.OptionSetAttribute<msdyn_crewstrategy>;
            get(name: "msdyn_derivecapacity"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_displayonscheduleassistant"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_displayonscheduleboard"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_enabledforfieldservicemobile"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_enabledripscheduling"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_endlocation"): XrmBase.OptionSetAttribute<msdyn_workstartlocationtype>;
            get(name: "msdyn_facilityequipmentid"): XrmBase.LookupAttribute<"equipment">;
            get(name: "msdyn_generictype"): XrmBase.OptionSetAttribute<msdyn_generictype>;
            get(name: "msdyn_hourlyrate"): XrmBase.NumberAttribute;
            get(name: "msdyn_organizationalunit"): XrmBase.LookupAttribute<"msdyn_organizationalunit">;
            get(name: "msdyn_pooltype"): XrmBase.MultiSelectOptionSetAttribute<msdyn_pooltype>;
            get(name: "msdyn_startlocation"): XrmBase.OptionSetAttribute<msdyn_workstartlocationtype>;
            get(name: "msdyn_targetutilization"): XrmBase.NumberAttribute;
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
            get(name: "msdyn_crewstrategy"): XrmBase.OptionSetControl<msdyn_crewstrategy>;
            get(name: "msdyn_derivecapacity"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_displayonscheduleassistant"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_displayonscheduleboard"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_enabledforfieldservicemobile"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_enabledripscheduling"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_endlocation"): XrmBase.OptionSetControl<msdyn_workstartlocationtype>;
            get(name: "msdyn_facilityequipmentid"): XrmBase.LookupControl<"equipment">;
            get(name: "msdyn_generictype"): XrmBase.OptionSetControl<msdyn_generictype>;
            get(name: "msdyn_hourlyrate"): XrmBase.NumberControl;
            get(name: "msdyn_organizationalunit"): XrmBase.LookupControl<"msdyn_organizationalunit">;
            get(name: "msdyn_pooltype"): XrmBase.MultiSelectOptionSetControl<msdyn_pooltype>;
            get(name: "msdyn_startlocation"): XrmBase.OptionSetControl<msdyn_workstartlocationtype>;
            get(name: "msdyn_targetutilization"): XrmBase.NumberControl;
            get(name: "msdyn_timeoffapprovalrequired"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_warehouse"): XrmBase.LookupControl<"msdyn_warehouse">;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ResourceCategory"): XrmBase.SubGridControl<"bookableresourcecategoryassn">;
            get(name: "ResourceCharacteristics"): XrmBase.SubGridControl<"bookableresourcecharacteristic">;
            get(name: "ResourceRole"): XrmBase.SubGridControl<"bookableresourcecategoryassn">;
            get(name: "Resourceskills"): XrmBase.SubGridControl<"bookableresourcecharacteristic">;
            get(name: "resourcetype"): XrmBase.OptionSetControl<bookableresource_resourcetype>;
            get(name: "timezone"): XrmBase.BaseControl;
            get(name: "userid"): XrmBase.LookupControl<"systemuser">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{e37f4524-4a66-42dc-974c-078756aef3fb}"): XrmBase.PageTab<Tabs.e37f45244a6642dc974c078756aef3fb>;
            get(name: "tab_projectservice"): XrmBase.PageTab<Tabs.Tabprojectservice>;
            get(name: "FieldService"): XrmBase.PageTab<Tabs.FieldService>;
            get(name: "tab_2"): XrmBase.PageTab<Tabs.Tab2>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "resourcetype"): XrmBase.OptionSetAttribute<bookableresource_resourcetype>;
        getAttribute(attributeName: "userid"): XrmBase.LookupAttribute<"systemuser">;
        getAttribute(attributeName: "msdyn_facilityequipmentid"): XrmBase.LookupAttribute<"equipment">;
        getAttribute(attributeName: "contactid"): XrmBase.LookupAttribute<"contact">;
        getAttribute(attributeName: "accountid"): XrmBase.LookupAttribute<"account">;
        getAttribute(attributeName: "msdyn_pooltype"): XrmBase.MultiSelectOptionSetAttribute<msdyn_pooltype>;
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "timezone"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_crewstrategy"): XrmBase.OptionSetAttribute<msdyn_crewstrategy>;
        getAttribute(attributeName: "msdyn_targetutilization"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_hourlyrate"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_enabledforfieldservicemobile"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_timeoffapprovalrequired"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_warehouse"): XrmBase.LookupAttribute<"msdyn_warehouse">;
        getAttribute(attributeName: "msdyn_enabledripscheduling"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_bookingstodrip"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_startlocation"): XrmBase.OptionSetAttribute<msdyn_workstartlocationtype>;
        getAttribute(attributeName: "msdyn_generictype"): XrmBase.OptionSetAttribute<msdyn_generictype>;
        getAttribute(attributeName: "msdyn_endlocation"): XrmBase.OptionSetAttribute<msdyn_workstartlocationtype>;
        getAttribute(attributeName: "msdyn_organizationalunit"): XrmBase.LookupAttribute<"msdyn_organizationalunit">;
        getAttribute(attributeName: "msdyn_derivecapacity"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_displayonscheduleboard"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_displayonscheduleassistant"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "resourcetype"): XrmBase.OptionSetControl<bookableresource_resourcetype>;
        getControl(controlName: "userid"): XrmBase.LookupControl<"systemuser">;
        getControl(controlName: "msdyn_facilityequipmentid"): XrmBase.LookupControl<"equipment">;
        getControl(controlName: "contactid"): XrmBase.LookupControl<"contact">;
        getControl(controlName: "accountid"): XrmBase.LookupControl<"account">;
        getControl(controlName: "msdyn_pooltype"): XrmBase.MultiSelectOptionSetControl<msdyn_pooltype>;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "timezone"): XrmBase.BaseControl;
        getControl(controlName: "msdyn_crewstrategy"): XrmBase.OptionSetControl<msdyn_crewstrategy>;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "ResourceCharacteristics"): XrmBase.SubGridControl<"bookableresourcecharacteristic">;
        getControl(controlName: "ResourceCategory"): XrmBase.SubGridControl<"bookableresourcecategoryassn">;
        getControl(controlName: "Resourceskills"): XrmBase.SubGridControl<"bookableresourcecharacteristic">;
        getControl(controlName: "msdyn_targetutilization"): XrmBase.NumberControl;
        getControl(controlName: "ResourceRole"): XrmBase.SubGridControl<"bookableresourcecategoryassn">;
        getControl(controlName: "msdyn_hourlyrate"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_enabledforfieldservicemobile"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_timeoffapprovalrequired"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_warehouse"): XrmBase.LookupControl<"msdyn_warehouse">;
        getControl(controlName: "msdyn_enabledripscheduling"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_bookingstodrip"): XrmBase.NumberControl;
        getControl(controlName: "BookableResourceCharacteristics"): XrmBase.SubGridControl<"bookableresourcecharacteristic">;
        getControl(controlName: "CATEGORYASSOCIATIONS"): XrmBase.SubGridControl<"bookableresourcecategoryassn">;
        getControl(controlName: "msdyn_startlocation"): XrmBase.OptionSetControl<msdyn_workstartlocationtype>;
        getControl(controlName: "msdyn_generictype"): XrmBase.OptionSetControl<msdyn_generictype>;
        getControl(controlName: "msdyn_endlocation"): XrmBase.OptionSetControl<msdyn_workstartlocationtype>;
        getControl(controlName: "msdyn_organizationalunit"): XrmBase.LookupControl<"msdyn_organizationalunit">;
        getControl(controlName: "msdyn_derivecapacity"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_displayonscheduleboard"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_displayonscheduleassistant"): XrmBase.OptionSetControl<any>;
        getControl(controlName: string): undefined;
    }
}
