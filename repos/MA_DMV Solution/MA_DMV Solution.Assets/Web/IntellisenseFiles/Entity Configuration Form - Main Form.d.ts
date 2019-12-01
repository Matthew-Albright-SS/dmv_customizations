declare namespace Form.msdyn_entityconfiguration.Main {
    namespace MainForm {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_copygeodatafromurs"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_enabledas"): XrmBase.OptionSetAttribute<msdyn_entityconfiguration_msdyn_enabledas>;
            get(name: "msdyn_entity"): XrmBase.StringAttribute;
            get(name: "msdyn_latitudefieldname"): XrmBase.StringAttribute;
            get(name: "msdyn_longitudefieldname"): XrmBase.StringAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_radius"): XrmBase.NumberAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_copygeodatafromurs"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_enabledas"): XrmBase.OptionSetControl<msdyn_entityconfiguration_msdyn_enabledas>;
            get(name: "msdyn_entity"): XrmBase.StringControl;
            get(name: "msdyn_latitudefieldname"): XrmBase.StringControl;
            get(name: "msdyn_longitudefieldname"): XrmBase.StringControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_radius"): XrmBase.NumberControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
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
    interface MainForm extends XrmBase.PageBase<MainForm.Attributes, MainForm.Tabs, MainForm.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_entity"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_latitudefieldname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_longitudefieldname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_enabledas"): XrmBase.OptionSetAttribute<msdyn_entityconfiguration_msdyn_enabledas>;
        getAttribute(attributeName: "msdyn_radius"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_copygeodatafromurs"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_entity"): XrmBase.StringControl;
        getControl(controlName: "msdyn_latitudefieldname"): XrmBase.StringControl;
        getControl(controlName: "msdyn_longitudefieldname"): XrmBase.StringControl;
        getControl(controlName: "msdyn_enabledas"): XrmBase.OptionSetControl<msdyn_entityconfiguration_msdyn_enabledas>;
        getControl(controlName: "msdyn_radius"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_copygeodatafromurs"): XrmBase.OptionSetControl<any>;
        getControl(controlName: string): undefined;
    }
}
