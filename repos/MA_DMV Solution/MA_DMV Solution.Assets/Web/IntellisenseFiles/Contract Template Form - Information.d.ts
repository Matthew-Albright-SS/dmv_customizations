declare namespace Form.contracttemplate.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "abbreviation"): XrmBase.StringAttribute;
            get(name: "allotmenttypecode"): XrmBase.OptionSetAttribute<contracttemplate_allotmenttypecode>;
            get(name: "billingfrequencycode"): XrmBase.OptionSetAttribute<contracttemplate_billingfrequencycode>;
            get(name: "contractservicelevelcode"): XrmBase.OptionSetAttribute<contracttemplate_contractservicelevelcode>;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "effectivitycalendar"): XrmBase.StringAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "usediscountaspercentage"): XrmBase.OptionSetAttribute<boolean>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "abbreviation"): XrmBase.StringControl;
            get(name: "allotmenttypecode"): XrmBase.OptionSetControl<contracttemplate_allotmenttypecode>;
            get(name: "billingfrequencycode"): XrmBase.OptionSetControl<contracttemplate_billingfrequencycode>;
            get(name: "contractservicelevelcode"): XrmBase.OptionSetControl<contracttemplate_contractservicelevelcode>;
            get(name: "description"): XrmBase.StringControl;
            get(name: "effectivitycalendar"): XrmBase.BaseControl;
            get(name: "IFRAME_ContractTemplateCalendar"): XrmBase.IFrameControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "usediscountaspercentage"): XrmBase.OptionSetControl<any>;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "abbreviation"): XrmBase.StringAttribute;
        getAttribute(attributeName: "billingfrequencycode"): XrmBase.OptionSetAttribute<contracttemplate_billingfrequencycode>;
        getAttribute(attributeName: "allotmenttypecode"): XrmBase.OptionSetAttribute<contracttemplate_allotmenttypecode>;
        getAttribute(attributeName: "contractservicelevelcode"): XrmBase.OptionSetAttribute<contracttemplate_contractservicelevelcode>;
        getAttribute(attributeName: "usediscountaspercentage"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "effectivitycalendar"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "abbreviation"): XrmBase.StringControl;
        getControl(controlName: "billingfrequencycode"): XrmBase.OptionSetControl<contracttemplate_billingfrequencycode>;
        getControl(controlName: "allotmenttypecode"): XrmBase.OptionSetControl<contracttemplate_allotmenttypecode>;
        getControl(controlName: "contractservicelevelcode"): XrmBase.OptionSetControl<contracttemplate_contractservicelevelcode>;
        getControl(controlName: "usediscountaspercentage"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "effectivitycalendar"): XrmBase.BaseControl;
        getControl(controlName: "IFRAME_ContractTemplateCalendar"): XrmBase.IFrameControl;
        getControl(controlName: string): undefined;
    }
}
