declare namespace Form.dmv_application.Main {
    namespace Information {
        namespace Tabs {
            interface Tab3 extends XrmBase.SectionCollectionBase {
                get(name: "tab_3_section_6"): XrmBase.PageSection;
                get(name: "tab_3_section_9"): XrmBase.PageSection;
                get(name: "tab_3_section_8"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab5 extends XrmBase.SectionCollectionBase {
                get(name: "tab_3_section_1"): XrmBase.PageSection;
                get(name: "tab_5_section_2"): XrmBase.PageSection;
                get(name: "tab_5_section_3"): XrmBase.PageSection;
                get(name: "tab_3_section_7"): XrmBase.PageSection;
                get(name: "tab_2_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab4 extends XrmBase.SectionCollectionBase {
                get(name: "tab_4_section_1"): XrmBase.PageSection;
                get(name: "tab_4_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab7 extends XrmBase.SectionCollectionBase {
                get(name: "tab_7_section_1"): XrmBase.PageSection;
                get(name: "tab_7_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab8 extends XrmBase.SectionCollectionBase {
                get(name: "tab_8_section_1"): XrmBase.PageSection;
                get(name: "tab_8_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab6 extends XrmBase.SectionCollectionBase {
                get(name: "tab_4_section_3"): XrmBase.PageSection;
                get(name: "tab_6_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface TeamMembers extends XrmBase.SectionCollectionBase {
                get(name: "tab_9_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "dmv_addressfieldeffectivedate"): XrmBase.DateAttribute;
            get(name: "dmv_age"): XrmBase.NumberAttribute;
            get(name: "dmv_applicationtype"): XrmBase.OptionSetAttribute<dmv_application_dmv_applicationtype>;
            get(name: "dmv_associatedvehicletocustomer"): XrmBase.LookupAttribute<"dmv_vehicle">;
            get(name: "dmv_city"): XrmBase.StringAttribute;
            get(name: "dmv_coownerage"): XrmBase.NumberAttribute;
            get(name: "dmv_coownerinfo"): XrmBase.LookupAttribute<"contact">;
            get(name: "dmv_country"): XrmBase.StringAttribute;
            get(name: "dmv_describeother"): XrmBase.StringAttribute;
            get(name: "dmv_fee"): XrmBase.NumberAttribute;
            get(name: "dmv_insurancecompany"): XrmBase.StringAttribute;
            get(name: "dmv_lesseeowner"): XrmBase.LookupAttribute<"account">;
            get(name: "dmv_name"): XrmBase.StringAttribute;
            get(name: "dmv_newstreetaddress"): XrmBase.StringAttribute;
            get(name: "dmv_ownerinfo"): XrmBase.LookupAttribute<"contact">;
            get(name: "dmv_platetype"): XrmBase.OptionSetAttribute<dmv_application_dmv_platetype>;
            get(name: "dmv_reasonaddresschange"): XrmBase.StringAttribute;
            get(name: "dmv_registrationperiod"): XrmBase.OptionSetAttribute<dmv_application_dmv_registrationperiod>;
            get(name: "dmv_registrationtype"): XrmBase.OptionSetAttribute<dmv_application_dmv_registrationtype>;
            get(name: "dmv_reissuedfields"): XrmBase.OptionSetAttribute<dmv_application_dmv_reissuedfields>;
            get(name: "dmv_ssn"): XrmBase.StringAttribute;
            get(name: "dmv_state"): XrmBase.StringAttribute;
            get(name: "dmv_street2"): XrmBase.StringAttribute;
            get(name: "dmv_vehicledetails"): XrmBase.LookupAttribute<"dmv_vehicle">;
            get(name: "dmv_zipcode"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "AccessTeam"): XrmBase.SubGridControl<"systemuser">;
            get(name: "AssociatedVehicleLookup"): XrmBase.BaseControl;
            get(name: "CoOwnerInfo"): XrmBase.BaseControl;
            get(name: "dmv_addressfieldeffectivedate"): XrmBase.DateControl;
            get(name: "dmv_age"): XrmBase.NumberControl;
            get(name: "dmv_applicationtype"): XrmBase.OptionSetControl<dmv_application_dmv_applicationtype>;
            get(name: "dmv_associatedvehicletocustomer"): XrmBase.LookupControl<"dmv_vehicle">;
            get(name: "dmv_city"): XrmBase.StringControl;
            get(name: "dmv_coownerage"): XrmBase.NumberControl;
            get(name: "dmv_coownerinfo"): XrmBase.LookupControl<"contact">;
            get(name: "dmv_country"): XrmBase.StringControl;
            get(name: "dmv_describeother"): XrmBase.StringControl;
            get(name: "dmv_fee"): XrmBase.NumberControl;
            get(name: "dmv_insurancecompany"): XrmBase.StringControl;
            get(name: "dmv_lesseeowner"): XrmBase.LookupControl<"account">;
            get(name: "dmv_name"): XrmBase.StringControl;
            get(name: "dmv_newstreetaddress"): XrmBase.StringControl;
            get(name: "dmv_ownerinfo"): XrmBase.LookupControl<"contact">;
            get(name: "dmv_platetype"): XrmBase.OptionSetControl<dmv_application_dmv_platetype>;
            get(name: "dmv_reasonaddresschange"): XrmBase.StringControl;
            get(name: "dmv_registrationperiod"): XrmBase.OptionSetControl<dmv_application_dmv_registrationperiod>;
            get(name: "dmv_registrationtype"): XrmBase.OptionSetControl<dmv_application_dmv_registrationtype>;
            get(name: "dmv_reissuedfields"): XrmBase.OptionSetControl<dmv_application_dmv_reissuedfields>;
            get(name: "dmv_ssn"): XrmBase.StringControl;
            get(name: "dmv_state"): XrmBase.StringControl;
            get(name: "dmv_street2"): XrmBase.StringControl;
            get(name: "dmv_vehicledetails"): XrmBase.LookupControl<"dmv_vehicle">;
            get(name: "dmv_zipcode"): XrmBase.StringControl;
            get(name: "LesseeInformation"): XrmBase.BaseControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "OwnerQuickView"): XrmBase.BaseControl;
            get(name: "showCustomerNumber"): XrmBase.BaseControl;
            get(name: "VehicleLookUp"): XrmBase.BaseControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "tab_3"): XrmBase.PageTab<Tabs.Tab3>;
            get(name: "tab_5"): XrmBase.PageTab<Tabs.Tab5>;
            get(name: "tab_4"): XrmBase.PageTab<Tabs.Tab4>;
            get(name: "tab_7"): XrmBase.PageTab<Tabs.Tab7>;
            get(name: "tab_8"): XrmBase.PageTab<Tabs.Tab8>;
            get(name: "tab_6"): XrmBase.PageTab<Tabs.Tab6>;
            get(name: "TeamMembers"): XrmBase.PageTab<Tabs.TeamMembers>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "dmv_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "dmv_applicationtype"): XrmBase.OptionSetAttribute<dmv_application_dmv_applicationtype>;
        getAttribute(attributeName: "dmv_ownerinfo"): XrmBase.LookupAttribute<"contact">;
        getAttribute(attributeName: "dmv_age"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "dmv_ssn"): XrmBase.StringAttribute;
        getAttribute(attributeName: "dmv_coownerinfo"): XrmBase.LookupAttribute<"contact">;
        getAttribute(attributeName: "dmv_coownerage"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "dmv_vehicledetails"): XrmBase.LookupAttribute<"dmv_vehicle">;
        getAttribute(attributeName: "dmv_lesseeowner"): XrmBase.LookupAttribute<"account">;
        getAttribute(attributeName: "dmv_registrationperiod"): XrmBase.OptionSetAttribute<dmv_application_dmv_registrationperiod>;
        getAttribute(attributeName: "dmv_registrationtype"): XrmBase.OptionSetAttribute<dmv_application_dmv_registrationtype>;
        getAttribute(attributeName: "dmv_describeother"): XrmBase.StringAttribute;
        getAttribute(attributeName: "dmv_platetype"): XrmBase.OptionSetAttribute<dmv_application_dmv_platetype>;
        getAttribute(attributeName: "dmv_reissuedfields"): XrmBase.OptionSetAttribute<dmv_application_dmv_reissuedfields>;
        getAttribute(attributeName: "dmv_insurancecompany"): XrmBase.StringAttribute;
        getAttribute(attributeName: "dmv_fee"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "dmv_reasonaddresschange"): XrmBase.StringAttribute;
        getAttribute(attributeName: "dmv_addressfieldeffectivedate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "dmv_newstreetaddress"): XrmBase.StringAttribute;
        getAttribute(attributeName: "dmv_street2"): XrmBase.StringAttribute;
        getAttribute(attributeName: "dmv_city"): XrmBase.StringAttribute;
        getAttribute(attributeName: "dmv_state"): XrmBase.StringAttribute;
        getAttribute(attributeName: "dmv_zipcode"): XrmBase.StringAttribute;
        getAttribute(attributeName: "dmv_country"): XrmBase.StringAttribute;
        getAttribute(attributeName: "dmv_associatedvehicletocustomer"): XrmBase.LookupAttribute<"dmv_vehicle">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "dmv_name"): XrmBase.StringControl;
        getControl(controlName: "dmv_applicationtype"): XrmBase.OptionSetControl<dmv_application_dmv_applicationtype>;
        getControl(controlName: "dmv_ownerinfo"): XrmBase.LookupControl<"contact">;
        getControl(controlName: "OwnerQuickView"): XrmBase.BaseControl;
        getControl(controlName: "dmv_age"): XrmBase.NumberControl;
        getControl(controlName: "dmv_ssn"): XrmBase.StringControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "dmv_coownerinfo"): XrmBase.LookupControl<"contact">;
        getControl(controlName: "CoOwnerInfo"): XrmBase.BaseControl;
        getControl(controlName: "dmv_coownerage"): XrmBase.NumberControl;
        getControl(controlName: "dmv_vehicledetails"): XrmBase.LookupControl<"dmv_vehicle">;
        getControl(controlName: "VehicleLookUp"): XrmBase.BaseControl;
        getControl(controlName: "dmv_lesseeowner"): XrmBase.LookupControl<"account">;
        getControl(controlName: "LesseeInformation"): XrmBase.BaseControl;
        getControl(controlName: "dmv_registrationperiod"): XrmBase.OptionSetControl<dmv_application_dmv_registrationperiod>;
        getControl(controlName: "dmv_registrationtype"): XrmBase.OptionSetControl<dmv_application_dmv_registrationtype>;
        getControl(controlName: "dmv_describeother"): XrmBase.StringControl;
        getControl(controlName: "dmv_platetype"): XrmBase.OptionSetControl<dmv_application_dmv_platetype>;
        getControl(controlName: "dmv_reissuedfields"): XrmBase.OptionSetControl<dmv_application_dmv_reissuedfields>;
        getControl(controlName: "dmv_insurancecompany"): XrmBase.StringControl;
        getControl(controlName: "dmv_fee"): XrmBase.NumberControl;
        getControl(controlName: "showCustomerNumber"): XrmBase.BaseControl;
        getControl(controlName: "dmv_reasonaddresschange"): XrmBase.StringControl;
        getControl(controlName: "dmv_addressfieldeffectivedate"): XrmBase.DateControl;
        getControl(controlName: "dmv_newstreetaddress"): XrmBase.StringControl;
        getControl(controlName: "dmv_street2"): XrmBase.StringControl;
        getControl(controlName: "dmv_city"): XrmBase.StringControl;
        getControl(controlName: "dmv_state"): XrmBase.StringControl;
        getControl(controlName: "dmv_zipcode"): XrmBase.StringControl;
        getControl(controlName: "dmv_country"): XrmBase.StringControl;
        getControl(controlName: "dmv_associatedvehicletocustomer"): XrmBase.LookupControl<"dmv_vehicle">;
        getControl(controlName: "AssociatedVehicleLookup"): XrmBase.BaseControl;
        getControl(controlName: "AccessTeam"): XrmBase.SubGridControl<"systemuser">;
        getControl(controlName: string): undefined;
    }
}
