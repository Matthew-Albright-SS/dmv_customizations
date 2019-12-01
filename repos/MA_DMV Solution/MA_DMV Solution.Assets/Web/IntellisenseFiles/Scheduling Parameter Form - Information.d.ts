declare namespace Form.msdyn_schedulingparameter.Main {
    namespace Information {
        namespace Tabs {
            interface Tab5 extends XrmBase.SectionCollectionBase {
                get(name: "tab_5_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_autoupdatebookingtravel"): XrmBase.OptionSetAttribute<msdyn_autoupdatebookingtraveltype>;
            get(name: "msdyn_connecttomaps"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_customgeolatitudefield"): XrmBase.StringAttribute;
            get(name: "msdyn_customgeolocationentity"): XrmBase.StringAttribute;
            get(name: "msdyn_customgeolongitudefield"): XrmBase.StringAttribute;
            get(name: "msdyn_customgeoresourcefield"): XrmBase.StringAttribute;
            get(name: "msdyn_customgeotimestampfield"): XrmBase.StringAttribute;
            get(name: "msdyn_defaultradiusunit"): XrmBase.OptionSetAttribute<msdyn_distanceunit>;
            get(name: "msdyn_defaultradiusvalue"): XrmBase.NumberAttribute;
            get(name: "msdyn_disablesanitizinghtmltemplates"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_enablecustomgeolocation"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_geolocationexpiresafterxminutes"): XrmBase.NumberAttribute;
            get(name: "msdyn_geolocationrefreshintervalseconds"): XrmBase.NumberAttribute;
            get(name: "msdyn_mapapikey"): XrmBase.StringAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_saautofilterserviceterritory"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_scheduleboardrefreshintervalseconds"): XrmBase.NumberAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_autoupdatebookingtravel"): XrmBase.OptionSetControl<msdyn_autoupdatebookingtraveltype>;
            get(name: "msdyn_connecttomaps"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_customgeolatitudefield"): XrmBase.StringControl;
            get(name: "msdyn_customgeolocationentity"): XrmBase.StringControl;
            get(name: "msdyn_customgeolongitudefield"): XrmBase.StringControl;
            get(name: "msdyn_customgeoresourcefield"): XrmBase.StringControl;
            get(name: "msdyn_customgeotimestampfield"): XrmBase.StringControl;
            get(name: "msdyn_defaultradiusunit"): XrmBase.OptionSetControl<msdyn_distanceunit>;
            get(name: "msdyn_defaultradiusvalue"): XrmBase.NumberControl;
            get(name: "msdyn_disablesanitizinghtmltemplates"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_enablecustomgeolocation"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_geolocationexpiresafterxminutes"): XrmBase.NumberControl;
            get(name: "msdyn_geolocationrefreshintervalseconds"): XrmBase.NumberControl;
            get(name: "msdyn_mapapikey"): XrmBase.StringControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_saautofilterserviceterritory"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_scheduleboardrefreshintervalseconds"): XrmBase.NumberControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "tab_5"): XrmBase.PageTab<Tabs.Tab5>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_scheduleboardrefreshintervalseconds"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_disablesanitizinghtmltemplates"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_autoupdatebookingtravel"): XrmBase.OptionSetAttribute<msdyn_autoupdatebookingtraveltype>;
        getAttribute(attributeName: "msdyn_connecttomaps"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_mapapikey"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_defaultradiusunit"): XrmBase.OptionSetAttribute<msdyn_distanceunit>;
        getAttribute(attributeName: "msdyn_saautofilterserviceterritory"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_defaultradiusvalue"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_enablecustomgeolocation"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_customgeolatitudefield"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_customgeolocationentity"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_customgeolongitudefield"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_customgeoresourcefield"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_customgeotimestampfield"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_geolocationrefreshintervalseconds"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_geolocationexpiresafterxminutes"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_scheduleboardrefreshintervalseconds"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_disablesanitizinghtmltemplates"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_autoupdatebookingtravel"): XrmBase.OptionSetControl<msdyn_autoupdatebookingtraveltype>;
        getControl(controlName: "msdyn_connecttomaps"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_mapapikey"): XrmBase.StringControl;
        getControl(controlName: "msdyn_defaultradiusunit"): XrmBase.OptionSetControl<msdyn_distanceunit>;
        getControl(controlName: "msdyn_saautofilterserviceterritory"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_defaultradiusvalue"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_enablecustomgeolocation"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_customgeolatitudefield"): XrmBase.StringControl;
        getControl(controlName: "msdyn_customgeolocationentity"): XrmBase.StringControl;
        getControl(controlName: "msdyn_customgeolongitudefield"): XrmBase.StringControl;
        getControl(controlName: "msdyn_customgeoresourcefield"): XrmBase.StringControl;
        getControl(controlName: "msdyn_customgeotimestampfield"): XrmBase.StringControl;
        getControl(controlName: "msdyn_geolocationrefreshintervalseconds"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_geolocationexpiresafterxminutes"): XrmBase.NumberControl;
        getControl(controlName: string): undefined;
    }
}
