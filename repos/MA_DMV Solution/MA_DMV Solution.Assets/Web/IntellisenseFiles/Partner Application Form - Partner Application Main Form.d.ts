declare namespace Form.partnerapplication.Main {
    namespace PartnerApplicationMainForm {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "applicationrole"): XrmBase.OptionSetAttribute<partnerapplication_applicationrole>;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "principalid"): XrmBase.StringAttribute;
            get(name: "useauthorizationserver"): XrmBase.OptionSetAttribute<boolean>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "applicationrole"): XrmBase.OptionSetControl<partnerapplication_applicationrole>;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "principalid"): XrmBase.StringControl;
            get(name: "useauthorizationserver"): XrmBase.OptionSetControl<any>;
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
    interface PartnerApplicationMainForm extends XrmBase.PageBase<PartnerApplicationMainForm.Attributes, PartnerApplicationMainForm.Tabs, PartnerApplicationMainForm.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "applicationrole"): XrmBase.OptionSetAttribute<partnerapplication_applicationrole>;
        getAttribute(attributeName: "principalid"): XrmBase.StringAttribute;
        getAttribute(attributeName: "useauthorizationserver"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "applicationrole"): XrmBase.OptionSetControl<partnerapplication_applicationrole>;
        getControl(controlName: "principalid"): XrmBase.StringControl;
        getControl(controlName: "useauthorizationserver"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
