declare namespace Form.dmv_applicationprocess.Main {
    namespace Information {
        namespace Tabs {
            interface StageStep3 extends XrmBase.SectionCollectionBase {
                get(name: "StageStep3_section1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface StageStep12 extends XrmBase.SectionCollectionBase {
                get(name: "StageStep12_section1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface StageStep30 extends XrmBase.SectionCollectionBase {
                get(name: "StageStep30_section1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface StageStep43 extends XrmBase.SectionCollectionBase {
                get(name: "StageStep43_section1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface StageStep61 extends XrmBase.SectionCollectionBase {
                get(name: "StageStep61_section1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface StageStep67 extends XrmBase.SectionCollectionBase {
                get(name: "StageStep67_section1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "statecode"): XrmBase.OptionSetAttribute<dmv_applicationprocess_statecode>;
            get(name: "statuscode"): XrmBase.OptionSetAttribute<dmv_applicationprocess_statuscode>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "bpf_dmv_application_dmv_applicationprocess:dmv_addressproof"): XrmBase.OptionSetControl<any>;
            get(name: "bpf_dmv_application_dmv_applicationprocess:dmv_applicationsubject"): XrmBase.StringControl;
            get(name: "bpf_dmv_application_dmv_applicationprocess:dmv_applicationtype"): XrmBase.OptionSetControl<any>;
            get(name: "bpf_dmv_application_dmv_applicationprocess:dmv_city"): XrmBase.StringControl;
            get(name: "bpf_dmv_application_dmv_applicationprocess:dmv_contactaddressverification"): XrmBase.OptionSetControl<any>;
            get(name: "bpf_dmv_application_dmv_applicationprocess:dmv_contactinfoverification"): XrmBase.OptionSetControl<any>;
            get(name: "bpf_dmv_application_dmv_applicationprocess:dmv_coownerinfo"): XrmBase.BaseControl;
            get(name: "bpf_dmv_application_dmv_applicationprocess:dmv_country"): XrmBase.StringControl;
            get(name: "bpf_dmv_application_dmv_applicationprocess:dmv_describeother"): XrmBase.StringControl;
            get(name: "bpf_dmv_application_dmv_applicationprocess:dmv_idproof"): XrmBase.OptionSetControl<any>;
            get(name: "bpf_dmv_application_dmv_applicationprocess:dmv_insurancedocuments"): XrmBase.OptionSetControl<any>;
            get(name: "bpf_dmv_application_dmv_applicationprocess:dmv_lesseeowner"): XrmBase.BaseControl;
            get(name: "bpf_dmv_application_dmv_applicationprocess:dmv_managerapproval"): XrmBase.OptionSetControl<any>;
            get(name: "bpf_dmv_application_dmv_applicationprocess:dmv_name"): XrmBase.StringControl;
            get(name: "bpf_dmv_application_dmv_applicationprocess:dmv_newstreetaddress"): XrmBase.StringControl;
            get(name: "bpf_dmv_application_dmv_applicationprocess:dmv_ownerinfo"): XrmBase.BaseControl;
            get(name: "bpf_dmv_application_dmv_applicationprocess:dmv_registrationperiod"): XrmBase.OptionSetControl<any>;
            get(name: "bpf_dmv_application_dmv_applicationprocess:dmv_registrationtype"): XrmBase.OptionSetControl<any>;
            get(name: "bpf_dmv_application_dmv_applicationprocess:dmv_state"): XrmBase.StringControl;
            get(name: "bpf_dmv_application_dmv_applicationprocess:dmv_street2"): XrmBase.StringControl;
            get(name: "bpf_dmv_application_dmv_applicationprocess:dmv_vehicledetails"): XrmBase.BaseControl;
            get(name: "bpf_dmv_application_dmv_applicationprocess:dmv_vehicledetailsverification"): XrmBase.OptionSetControl<any>;
            get(name: "bpf_dmv_application_dmv_applicationprocess:dmv_zipcode"): XrmBase.StringControl;
            get(name: "bpf_dmv_application_dmv_applicationprocess:ownerid"): XrmBase.BaseControl;
            get(name: "bpf_dmv_application_dmv_applicationprocess:statecode"): XrmBase.OptionSetControl<dmv_applicationprocess_statecode>;
            get(name: "bpf_dmv_application_dmv_applicationprocess:statuscode"): XrmBase.OptionSetControl<dmv_applicationprocess_statuscode>;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "StageStep3"): XrmBase.PageTab<Tabs.StageStep3>;
            get(name: "StageStep12"): XrmBase.PageTab<Tabs.StageStep12>;
            get(name: "StageStep30"): XrmBase.PageTab<Tabs.StageStep30>;
            get(name: "StageStep43"): XrmBase.PageTab<Tabs.StageStep43>;
            get(name: "StageStep61"): XrmBase.PageTab<Tabs.StageStep61>;
            get(name: "StageStep67"): XrmBase.PageTab<Tabs.StageStep67>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "statecode"): XrmBase.OptionSetAttribute<dmv_applicationprocess_statecode>;
        getAttribute(attributeName: "statuscode"): XrmBase.OptionSetAttribute<dmv_applicationprocess_statuscode>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "bpf_dmv_application_dmv_applicationprocess:dmv_name"): XrmBase.StringControl;
        getControl(controlName: "bpf_dmv_application_dmv_applicationprocess:dmv_applicationsubject"): XrmBase.StringControl;
        getControl(controlName: "bpf_dmv_application_dmv_applicationprocess:dmv_applicationtype"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "bpf_dmv_application_dmv_applicationprocess:dmv_ownerinfo"): XrmBase.BaseControl;
        getControl(controlName: "bpf_dmv_application_dmv_applicationprocess:dmv_newstreetaddress"): XrmBase.StringControl;
        getControl(controlName: "bpf_dmv_application_dmv_applicationprocess:dmv_street2"): XrmBase.StringControl;
        getControl(controlName: "bpf_dmv_application_dmv_applicationprocess:dmv_city"): XrmBase.StringControl;
        getControl(controlName: "bpf_dmv_application_dmv_applicationprocess:dmv_state"): XrmBase.StringControl;
        getControl(controlName: "bpf_dmv_application_dmv_applicationprocess:dmv_zipcode"): XrmBase.StringControl;
        getControl(controlName: "bpf_dmv_application_dmv_applicationprocess:dmv_country"): XrmBase.StringControl;
        getControl(controlName: "bpf_dmv_application_dmv_applicationprocess:dmv_contactinfoverification"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "bpf_dmv_application_dmv_applicationprocess:dmv_contactaddressverification"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "bpf_dmv_application_dmv_applicationprocess:dmv_idproof"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "bpf_dmv_application_dmv_applicationprocess:dmv_addressproof"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "bpf_dmv_application_dmv_applicationprocess:dmv_insurancedocuments"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "bpf_dmv_application_dmv_applicationprocess:dmv_coownerinfo"): XrmBase.BaseControl;
        getControl(controlName: "bpf_dmv_application_dmv_applicationprocess:dmv_lesseeowner"): XrmBase.BaseControl;
        getControl(controlName: "bpf_dmv_application_dmv_applicationprocess:dmv_vehicledetails"): XrmBase.BaseControl;
        getControl(controlName: "bpf_dmv_application_dmv_applicationprocess:dmv_registrationtype"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "bpf_dmv_application_dmv_applicationprocess:dmv_describeother"): XrmBase.StringControl;
        getControl(controlName: "bpf_dmv_application_dmv_applicationprocess:dmv_registrationperiod"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "bpf_dmv_application_dmv_applicationprocess:dmv_vehicledetailsverification"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "bpf_dmv_application_dmv_applicationprocess:ownerid"): XrmBase.BaseControl;
        getControl(controlName: "bpf_dmv_application_dmv_applicationprocess:dmv_managerapproval"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "bpf_dmv_application_dmv_applicationprocess:statecode"): XrmBase.OptionSetControl<dmv_applicationprocess_statecode>;
        getControl(controlName: "bpf_dmv_application_dmv_applicationprocess:statuscode"): XrmBase.OptionSetControl<dmv_applicationprocess_statuscode>;
        getControl(controlName: string): undefined;
    }
}
