declare namespace Form.msdyn_postconfig.Main {
    namespace Information {
        namespace Tabs {
            interface Tabnotification extends XrmBase.SectionCollectionBase {
                get(name: "tab_5_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_configurewall"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_entityname"): XrmBase.StringAttribute;
            get(name: "msdyn_status"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "ActivityFeedsRules"): XrmBase.SubGridControl<"msdyn_postruleconfig">;
            get(name: "msdyn_configurewall"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_entityname"): XrmBase.StringControl;
            get(name: "msdyn_status"): XrmBase.StringControl;
            get(name: "Views"): XrmBase.SubGridControl<"msdyn_wallsavedquery">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "tab_notification"): XrmBase.PageTab<Tabs.Tabnotification>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_entityname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_configurewall"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_status"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_entityname"): XrmBase.StringControl;
        getControl(controlName: "msdyn_configurewall"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "ActivityFeedsRules"): XrmBase.SubGridControl<"msdyn_postruleconfig">;
        getControl(controlName: "Views"): XrmBase.SubGridControl<"msdyn_wallsavedquery">;
        getControl(controlName: "msdyn_status"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
