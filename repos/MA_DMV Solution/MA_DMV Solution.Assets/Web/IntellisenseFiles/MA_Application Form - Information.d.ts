declare namespace Form.madmv_ma_application.Main {
    namespace Information {
        namespace Tabs {
            interface Tab2 extends XrmBase.SectionCollectionBase {
                get(name: "Application Information"): XrmBase.PageSection;
                get(name: "tab_2_section_4"): XrmBase.PageSection;
                get(name: "tab_2_section_2"): XrmBase.PageSection;
                get(name: "tab_2_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab3 extends XrmBase.SectionCollectionBase {
                get(name: "tab_3_section_1"): XrmBase.PageSection;
                get(name: "tab_3_section_2"): XrmBase.PageSection;
                get(name: "tab_3_section_3"): XrmBase.PageSection;
                get(name: "tab_3_section_4"): XrmBase.PageSection;
                get(name: "tab_3_section_5"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab5 extends XrmBase.SectionCollectionBase {
                get(name: "tab_5_section_1"): XrmBase.PageSection;
                get(name: "tab_5_section_2"): XrmBase.PageSection;
                get(name: "tab_5_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab4 extends XrmBase.SectionCollectionBase {
                get(name: "tab_4_section_1"): XrmBase.PageSection;
                get(name: "tab_4_section_2"): XrmBase.PageSection;
                get(name: "tab_4_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "madmv_age"): XrmBase.NumberAttribute;
            get(name: "madmv_appid"): XrmBase.StringAttribute;
            get(name: "madmv_applicationtype"): XrmBase.OptionSetAttribute<madmv_ma_application_madmv_applicationtype>;
            get(name: "madmv_coownerage"): XrmBase.NumberAttribute;
            get(name: "madmv_coownerinfo"): XrmBase.LookupAttribute<"madmv_ma_customer">;
            get(name: "madmv_fee"): XrmBase.NumberAttribute;
            get(name: "madmv_insurancecompany"): XrmBase.StringAttribute;
            get(name: "madmv_lesseecompany"): XrmBase.LookupAttribute<"madmv_ma_company">;
            get(name: "madmv_ownerinfo"): XrmBase.LookupAttribute<"madmv_ma_customer">;
            get(name: "madmv_platetype"): XrmBase.OptionSetAttribute<madmv_ma_application_madmv_platetype>;
            get(name: "madmv_registrationperiod"): XrmBase.OptionSetAttribute<madmv_ma_application_madmv_registrationperiod>;
            get(name: "madmv_registrationtype"): XrmBase.OptionSetAttribute<madmv_ma_application_madmv_registrationtype>;
            get(name: "madmv_reissuedplates"): XrmBase.OptionSetAttribute<madmv_ma_application_madmv_reissuedplates>;
            get(name: "madmv_vehicledetails"): XrmBase.LookupAttribute<"madmv_ma_vehicle">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "CoOwnerInformation"): XrmBase.BaseControl;
            get(name: "LesseeInformation"): XrmBase.BaseControl;
            get(name: "madmv_age"): XrmBase.NumberControl;
            get(name: "madmv_appid"): XrmBase.StringControl;
            get(name: "madmv_applicationtype"): XrmBase.OptionSetControl<madmv_ma_application_madmv_applicationtype>;
            get(name: "madmv_coownerage"): XrmBase.NumberControl;
            get(name: "madmv_coownerinfo"): XrmBase.LookupControl<"madmv_ma_customer">;
            get(name: "madmv_fee"): XrmBase.NumberControl;
            get(name: "madmv_insurancecompany"): XrmBase.StringControl;
            get(name: "madmv_lesseecompany"): XrmBase.LookupControl<"madmv_ma_company">;
            get(name: "madmv_ownerinfo"): XrmBase.LookupControl<"madmv_ma_customer">;
            get(name: "madmv_platetype"): XrmBase.OptionSetControl<madmv_ma_application_madmv_platetype>;
            get(name: "madmv_registrationperiod"): XrmBase.OptionSetControl<madmv_ma_application_madmv_registrationperiod>;
            get(name: "madmv_registrationtype"): XrmBase.OptionSetControl<madmv_ma_application_madmv_registrationtype>;
            get(name: "madmv_reissuedplates"): XrmBase.OptionSetControl<madmv_ma_application_madmv_reissuedplates>;
            get(name: "madmv_vehicledetails"): XrmBase.LookupControl<"madmv_ma_vehicle">;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "OwnerInformation"): XrmBase.BaseControl;
            get(name: "VehicleInformation"): XrmBase.BaseControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "tab_2"): XrmBase.PageTab<Tabs.Tab2>;
            get(name: "tab_3"): XrmBase.PageTab<Tabs.Tab3>;
            get(name: "tab_5"): XrmBase.PageTab<Tabs.Tab5>;
            get(name: "tab_4"): XrmBase.PageTab<Tabs.Tab4>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "madmv_appid"): XrmBase.StringAttribute;
        getAttribute(attributeName: "madmv_applicationtype"): XrmBase.OptionSetAttribute<madmv_ma_application_madmv_applicationtype>;
        getAttribute(attributeName: "madmv_ownerinfo"): XrmBase.LookupAttribute<"madmv_ma_customer">;
        getAttribute(attributeName: "madmv_age"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "madmv_coownerinfo"): XrmBase.LookupAttribute<"madmv_ma_customer">;
        getAttribute(attributeName: "madmv_coownerage"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "madmv_vehicledetails"): XrmBase.LookupAttribute<"madmv_ma_vehicle">;
        getAttribute(attributeName: "madmv_lesseecompany"): XrmBase.LookupAttribute<"madmv_ma_company">;
        getAttribute(attributeName: "madmv_registrationperiod"): XrmBase.OptionSetAttribute<madmv_ma_application_madmv_registrationperiod>;
        getAttribute(attributeName: "madmv_registrationtype"): XrmBase.OptionSetAttribute<madmv_ma_application_madmv_registrationtype>;
        getAttribute(attributeName: "madmv_platetype"): XrmBase.OptionSetAttribute<madmv_ma_application_madmv_platetype>;
        getAttribute(attributeName: "madmv_reissuedplates"): XrmBase.OptionSetAttribute<madmv_ma_application_madmv_reissuedplates>;
        getAttribute(attributeName: "madmv_insurancecompany"): XrmBase.StringAttribute;
        getAttribute(attributeName: "madmv_fee"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "madmv_appid"): XrmBase.StringControl;
        getControl(controlName: "madmv_applicationtype"): XrmBase.OptionSetControl<madmv_ma_application_madmv_applicationtype>;
        getControl(controlName: "madmv_ownerinfo"): XrmBase.LookupControl<"madmv_ma_customer">;
        getControl(controlName: "madmv_age"): XrmBase.NumberControl;
        getControl(controlName: "OwnerInformation"): XrmBase.BaseControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "madmv_coownerinfo"): XrmBase.LookupControl<"madmv_ma_customer">;
        getControl(controlName: "madmv_coownerage"): XrmBase.NumberControl;
        getControl(controlName: "CoOwnerInformation"): XrmBase.BaseControl;
        getControl(controlName: "madmv_vehicledetails"): XrmBase.LookupControl<"madmv_ma_vehicle">;
        getControl(controlName: "VehicleInformation"): XrmBase.BaseControl;
        getControl(controlName: "madmv_lesseecompany"): XrmBase.LookupControl<"madmv_ma_company">;
        getControl(controlName: "LesseeInformation"): XrmBase.BaseControl;
        getControl(controlName: "madmv_registrationperiod"): XrmBase.OptionSetControl<madmv_ma_application_madmv_registrationperiod>;
        getControl(controlName: "madmv_registrationtype"): XrmBase.OptionSetControl<madmv_ma_application_madmv_registrationtype>;
        getControl(controlName: "madmv_platetype"): XrmBase.OptionSetControl<madmv_ma_application_madmv_platetype>;
        getControl(controlName: "madmv_reissuedplates"): XrmBase.OptionSetControl<madmv_ma_application_madmv_reissuedplates>;
        getControl(controlName: "madmv_insurancecompany"): XrmBase.StringControl;
        getControl(controlName: "madmv_fee"): XrmBase.NumberControl;
        getControl(controlName: string): undefined;
    }
}
