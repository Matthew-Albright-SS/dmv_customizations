declare namespace Form.madmv_ma_applicationprocess.Main {
    namespace Information {
        namespace Tabs {
            interface StageStep3 extends XrmBase.SectionCollectionBase {
                get(name: "StageStep3_section1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface StageStep11 extends XrmBase.SectionCollectionBase {
                get(name: "StageStep11_section1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface StageStep29 extends XrmBase.SectionCollectionBase {
                get(name: "StageStep29_section1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface StageStep42 extends XrmBase.SectionCollectionBase {
                get(name: "StageStep42_section1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface StageStep60 extends XrmBase.SectionCollectionBase {
                get(name: "StageStep60_section1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface StageStep66 extends XrmBase.SectionCollectionBase {
                get(name: "StageStep66_section1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "statecode"): XrmBase.OptionSetAttribute<madmv_ma_applicationprocess_statecode>;
            get(name: "statuscode"): XrmBase.OptionSetAttribute<madmv_ma_applicationprocess_statuscode>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_addressproof"): XrmBase.OptionSetControl<any>;
            get(name: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_appid"): XrmBase.StringControl;
            get(name: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_applicationsubject"): XrmBase.StringControl;
            get(name: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_applicationtype"): XrmBase.OptionSetControl<any>;
            get(name: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_contactaddressverification"): XrmBase.OptionSetControl<any>;
            get(name: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_contactinfoverification"): XrmBase.OptionSetControl<any>;
            get(name: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_coownerinfo"): XrmBase.BaseControl;
            get(name: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_describeother"): XrmBase.StringControl;
            get(name: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_idproof"): XrmBase.OptionSetControl<any>;
            get(name: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_insuranceproof"): XrmBase.OptionSetControl<any>;
            get(name: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_lesseecompany"): XrmBase.BaseControl;
            get(name: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_managerapproval"): XrmBase.OptionSetControl<any>;
            get(name: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_newcity"): XrmBase.StringControl;
            get(name: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_newcountry"): XrmBase.StringControl;
            get(name: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_newstate"): XrmBase.StringControl;
            get(name: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_newstreet1"): XrmBase.StringControl;
            get(name: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_newstreet2"): XrmBase.StringControl;
            get(name: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_newzip"): XrmBase.StringControl;
            get(name: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_ownerinfo"): XrmBase.BaseControl;
            get(name: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_registrationperiod"): XrmBase.OptionSetControl<any>;
            get(name: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_registrationtype"): XrmBase.OptionSetControl<any>;
            get(name: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_vehicledetails"): XrmBase.BaseControl;
            get(name: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_vehicledetailsverification"): XrmBase.OptionSetControl<any>;
            get(name: "bpf_madmv_ma_application_madmv_ma_applicationprocess:ownerid"): XrmBase.BaseControl;
            get(name: "bpf_madmv_ma_application_madmv_ma_applicationprocess:statecode"): XrmBase.OptionSetControl<madmv_ma_applicationprocess_statecode>;
            get(name: "bpf_madmv_ma_application_madmv_ma_applicationprocess:statuscode"): XrmBase.OptionSetControl<madmv_ma_applicationprocess_statuscode>;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "StageStep3"): XrmBase.PageTab<Tabs.StageStep3>;
            get(name: "StageStep11"): XrmBase.PageTab<Tabs.StageStep11>;
            get(name: "StageStep29"): XrmBase.PageTab<Tabs.StageStep29>;
            get(name: "StageStep42"): XrmBase.PageTab<Tabs.StageStep42>;
            get(name: "StageStep60"): XrmBase.PageTab<Tabs.StageStep60>;
            get(name: "StageStep66"): XrmBase.PageTab<Tabs.StageStep66>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "statecode"): XrmBase.OptionSetAttribute<madmv_ma_applicationprocess_statecode>;
        getAttribute(attributeName: "statuscode"): XrmBase.OptionSetAttribute<madmv_ma_applicationprocess_statuscode>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_appid"): XrmBase.StringControl;
        getControl(controlName: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_applicationsubject"): XrmBase.StringControl;
        getControl(controlName: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_applicationtype"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_ownerinfo"): XrmBase.BaseControl;
        getControl(controlName: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_newstreet1"): XrmBase.StringControl;
        getControl(controlName: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_newstreet2"): XrmBase.StringControl;
        getControl(controlName: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_newcity"): XrmBase.StringControl;
        getControl(controlName: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_newstate"): XrmBase.StringControl;
        getControl(controlName: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_newzip"): XrmBase.StringControl;
        getControl(controlName: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_newcountry"): XrmBase.StringControl;
        getControl(controlName: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_contactinfoverification"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_contactaddressverification"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_idproof"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_addressproof"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_insuranceproof"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_coownerinfo"): XrmBase.BaseControl;
        getControl(controlName: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_lesseecompany"): XrmBase.BaseControl;
        getControl(controlName: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_vehicledetails"): XrmBase.BaseControl;
        getControl(controlName: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_registrationtype"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_describeother"): XrmBase.StringControl;
        getControl(controlName: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_registrationperiod"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_vehicledetailsverification"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "bpf_madmv_ma_application_madmv_ma_applicationprocess:ownerid"): XrmBase.BaseControl;
        getControl(controlName: "bpf_madmv_ma_application_madmv_ma_applicationprocess:madmv_managerapproval"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "bpf_madmv_ma_application_madmv_ma_applicationprocess:statecode"): XrmBase.OptionSetControl<madmv_ma_applicationprocess_statecode>;
        getControl(controlName: "bpf_madmv_ma_application_madmv_ma_applicationprocess:statuscode"): XrmBase.OptionSetControl<madmv_ma_applicationprocess_statuscode>;
        getControl(controlName: string): undefined;
    }
}
