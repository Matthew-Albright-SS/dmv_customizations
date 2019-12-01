declare namespace Form.msdyn_iotdevicecommanddefinition.Main {
    namespace Information {
        namespace Tabs {
            interface DeviceCategoriesTab extends XrmBase.SectionCollectionBase {
                get(name: "Device Categories Section"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "DeviceCategories"): XrmBase.SubGridControl<"msdyn_iotdevicecategory">;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "PropertyDefinitions"): XrmBase.SubGridControl<"msdyn_iotpropertydefinition">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "Device Categories Tab"): XrmBase.PageTab<Tabs.DeviceCategoriesTab>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "PropertyDefinitions"): XrmBase.SubGridControl<"msdyn_iotpropertydefinition">;
        getControl(controlName: "DeviceCategories"): XrmBase.SubGridControl<"msdyn_iotdevicecategory">;
        getControl(controlName: string): undefined;
    }
}
