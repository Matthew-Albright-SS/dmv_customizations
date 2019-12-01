declare namespace Form.msdyn_upgradeversion.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "createdon"): XrmBase.DateAttribute;
            get(name: "msdyn_finished"): XrmBase.DateAttribute;
            get(name: "msdyn_startingversion"): XrmBase.StringAttribute;
            get(name: "msdyn_status"): XrmBase.OptionSetAttribute<msdyn_upgradestatus>;
            get(name: "msdyn_summary"): XrmBase.StringAttribute;
            get(name: "msdyn_targetversion"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "createdon"): XrmBase.DateControl;
            get(name: "msdyn_finished"): XrmBase.DateControl;
            get(name: "msdyn_startingversion"): XrmBase.StringControl;
            get(name: "msdyn_status"): XrmBase.OptionSetControl<msdyn_upgradestatus>;
            get(name: "msdyn_summary"): XrmBase.StringControl;
            get(name: "msdyn_targetversion"): XrmBase.StringControl;
            get(name: "UpgradeSteps"): XrmBase.SubGridControl<"msdyn_upgradestep">;
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
        getAttribute(attributeName: "msdyn_summary"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_startingversion"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_targetversion"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_status"): XrmBase.OptionSetAttribute<msdyn_upgradestatus>;
        getAttribute(attributeName: "createdon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_finished"): XrmBase.DateAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_summary"): XrmBase.StringControl;
        getControl(controlName: "msdyn_startingversion"): XrmBase.StringControl;
        getControl(controlName: "msdyn_targetversion"): XrmBase.StringControl;
        getControl(controlName: "msdyn_status"): XrmBase.OptionSetControl<msdyn_upgradestatus>;
        getControl(controlName: "createdon"): XrmBase.DateControl;
        getControl(controlName: "msdyn_finished"): XrmBase.DateControl;
        getControl(controlName: "UpgradeSteps"): XrmBase.SubGridControl<"msdyn_upgradestep">;
        getControl(controlName: string): undefined;
    }
}
