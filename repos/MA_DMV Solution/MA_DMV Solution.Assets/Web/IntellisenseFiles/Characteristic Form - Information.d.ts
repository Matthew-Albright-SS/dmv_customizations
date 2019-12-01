declare namespace Form.characteristic.Main {
    namespace Information {
        namespace Tabs {
            interface _481c357897b04e2cb60795654a380a4c extends XrmBase.SectionCollectionBase {
                get(name: "{9c596e20-efc4-4129-ba34-f2c81b24dfd1}"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "characteristictype"): XrmBase.OptionSetAttribute<bookableresourcecharacteristictype>;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "msdyn_requireapproval"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "characteristictype"): XrmBase.OptionSetControl<bookableresourcecharacteristictype>;
            get(name: "description"): XrmBase.StringControl;
            get(name: "msdyn_requireapproval"): XrmBase.OptionSetControl<any>;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{481c3578-97b0-4e2c-b607-95654a380a4c}"): XrmBase.PageTab<Tabs._481c357897b04e2cb60795654a380a4c>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "characteristictype"): XrmBase.OptionSetAttribute<bookableresourcecharacteristictype>;
        getAttribute(attributeName: "msdyn_requireapproval"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "characteristictype"): XrmBase.OptionSetControl<bookableresourcecharacteristictype>;
        getControl(controlName: "msdyn_requireapproval"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
