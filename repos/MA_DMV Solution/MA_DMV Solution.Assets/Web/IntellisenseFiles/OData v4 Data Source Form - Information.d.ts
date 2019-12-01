declare namespace Form.msdyn_odatav4ds.Main {
    namespace Information {
        namespace Tabs {
            interface TabRequestParameters extends XrmBase.SectionCollectionBase {
                get(name: "tab_requestparameters_section_type"): XrmBase.PageSection;
                get(name: "tab_requestparameters_section_name"): XrmBase.PageSection;
                get(name: "tab_requestparameters_section_value"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tabadditionalparameters extends XrmBase.SectionCollectionBase {
                get(name: "tab_additional_section_parametertype"): XrmBase.PageSection;
                get(name: "tab_additional_section_parametername"): XrmBase.PageSection;
                get(name: "tab_additional_section_value"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_isparameter10header"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_isparameter1header"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_isparameter2header"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_isparameter3header"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_isparameter4header"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_isparameter5header"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_isparameter6header"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_isparameter7header"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_isparameter8header"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_isparameter9header"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_paginationtype"): XrmBase.OptionSetAttribute<new_odatadatasource_paginationtype>;
            get(name: "msdyn_parameter10name"): XrmBase.StringAttribute;
            get(name: "msdyn_parameter10value"): XrmBase.StringAttribute;
            get(name: "msdyn_parameter1name"): XrmBase.StringAttribute;
            get(name: "msdyn_parameter1value"): XrmBase.StringAttribute;
            get(name: "msdyn_parameter2name"): XrmBase.StringAttribute;
            get(name: "msdyn_parameter2value"): XrmBase.StringAttribute;
            get(name: "msdyn_parameter3name"): XrmBase.StringAttribute;
            get(name: "msdyn_parameter3value"): XrmBase.StringAttribute;
            get(name: "msdyn_parameter4name"): XrmBase.StringAttribute;
            get(name: "msdyn_parameter4value"): XrmBase.StringAttribute;
            get(name: "msdyn_parameter5name"): XrmBase.StringAttribute;
            get(name: "msdyn_parameter5value"): XrmBase.StringAttribute;
            get(name: "msdyn_parameter6name"): XrmBase.StringAttribute;
            get(name: "msdyn_parameter6value"): XrmBase.StringAttribute;
            get(name: "msdyn_parameter7name"): XrmBase.StringAttribute;
            get(name: "msdyn_parameter7value"): XrmBase.StringAttribute;
            get(name: "msdyn_parameter8name"): XrmBase.StringAttribute;
            get(name: "msdyn_parameter8value"): XrmBase.StringAttribute;
            get(name: "msdyn_parameter9name"): XrmBase.StringAttribute;
            get(name: "msdyn_parameter9value"): XrmBase.StringAttribute;
            get(name: "msdyn_returninlinecount"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_timeout"): XrmBase.NumberAttribute;
            get(name: "msdyn_uri"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_isparameter10header"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_isparameter1header"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_isparameter2header"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_isparameter3header"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_isparameter4header"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_isparameter5header"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_isparameter6header"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_isparameter7header"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_isparameter8header"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_isparameter9header"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_paginationtype"): XrmBase.OptionSetControl<new_odatadatasource_paginationtype>;
            get(name: "msdyn_parameter10name"): XrmBase.StringControl;
            get(name: "msdyn_parameter10value"): XrmBase.StringControl;
            get(name: "msdyn_parameter1name"): XrmBase.StringControl;
            get(name: "msdyn_parameter1value"): XrmBase.StringControl;
            get(name: "msdyn_parameter2name"): XrmBase.StringControl;
            get(name: "msdyn_parameter2value"): XrmBase.StringControl;
            get(name: "msdyn_parameter3name"): XrmBase.StringControl;
            get(name: "msdyn_parameter3value"): XrmBase.StringControl;
            get(name: "msdyn_parameter4name"): XrmBase.StringControl;
            get(name: "msdyn_parameter4value"): XrmBase.StringControl;
            get(name: "msdyn_parameter5name"): XrmBase.StringControl;
            get(name: "msdyn_parameter5value"): XrmBase.StringControl;
            get(name: "msdyn_parameter6name"): XrmBase.StringControl;
            get(name: "msdyn_parameter6value"): XrmBase.StringControl;
            get(name: "msdyn_parameter7name"): XrmBase.StringControl;
            get(name: "msdyn_parameter7value"): XrmBase.StringControl;
            get(name: "msdyn_parameter8name"): XrmBase.StringControl;
            get(name: "msdyn_parameter8value"): XrmBase.StringControl;
            get(name: "msdyn_parameter9name"): XrmBase.StringControl;
            get(name: "msdyn_parameter9value"): XrmBase.StringControl;
            get(name: "msdyn_returninlinecount"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_timeout"): XrmBase.NumberControl;
            get(name: "msdyn_uri"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "tab_Request_Parameters"): XrmBase.PageTab<Tabs.TabRequestParameters>;
            get(name: "tab_additional_parameters"): XrmBase.PageTab<Tabs.Tabadditionalparameters>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_uri"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_timeout"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_paginationtype"): XrmBase.OptionSetAttribute<new_odatadatasource_paginationtype>;
        getAttribute(attributeName: "msdyn_returninlinecount"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_isparameter1header"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_isparameter2header"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_isparameter3header"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_isparameter4header"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_isparameter5header"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_parameter1name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_parameter2name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_parameter3name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_parameter4name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_parameter5name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_parameter1value"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_parameter2value"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_parameter3value"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_parameter4value"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_parameter5value"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_isparameter6header"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_isparameter7header"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_isparameter8header"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_isparameter9header"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_isparameter10header"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_parameter6name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_parameter7name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_parameter8name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_parameter9name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_parameter10name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_parameter6value"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_parameter7value"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_parameter8value"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_parameter9value"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_parameter10value"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_uri"): XrmBase.StringControl;
        getControl(controlName: "msdyn_timeout"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_paginationtype"): XrmBase.OptionSetControl<new_odatadatasource_paginationtype>;
        getControl(controlName: "msdyn_returninlinecount"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_isparameter1header"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_isparameter2header"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_isparameter3header"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_isparameter4header"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_isparameter5header"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_parameter1name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_parameter2name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_parameter3name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_parameter4name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_parameter5name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_parameter1value"): XrmBase.StringControl;
        getControl(controlName: "msdyn_parameter2value"): XrmBase.StringControl;
        getControl(controlName: "msdyn_parameter3value"): XrmBase.StringControl;
        getControl(controlName: "msdyn_parameter4value"): XrmBase.StringControl;
        getControl(controlName: "msdyn_parameter5value"): XrmBase.StringControl;
        getControl(controlName: "msdyn_isparameter6header"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_isparameter7header"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_isparameter8header"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_isparameter9header"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_isparameter10header"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_parameter6name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_parameter7name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_parameter8name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_parameter9name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_parameter10name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_parameter6value"): XrmBase.StringControl;
        getControl(controlName: "msdyn_parameter7value"): XrmBase.StringControl;
        getControl(controlName: "msdyn_parameter8value"): XrmBase.StringControl;
        getControl(controlName: "msdyn_parameter9value"): XrmBase.StringControl;
        getControl(controlName: "msdyn_parameter10value"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
