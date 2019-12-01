declare namespace Form.dmv_vehicle.Main {
    namespace Information {
        namespace Tabs {
            interface _25fd868668b24126bb9fd0470525898a extends XrmBase.SectionCollectionBase {
                get(name: "{693f5669-756c-4dd6-a734-41b9b5caaff3}"): XrmBase.PageSection;
                get(name: "{25fd8686-68b2-4126-bb9f-d0470525898a}_section_4"): XrmBase.PageSection;
                get(name: "{25fd8686-68b2-4126-bb9f-d0470525898a}_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab2 extends XrmBase.SectionCollectionBase {
                get(name: "tab_2_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "dmv_bodytypemodel"): XrmBase.StringAttribute;
            get(name: "dmv_fueltype"): XrmBase.OptionSetAttribute<dmv_vehicle_dmv_fueltype>;
            get(name: "dmv_lengthtrailer"): XrmBase.NumberAttribute;
            get(name: "dmv_licensenumber"): XrmBase.StringAttribute;
            get(name: "dmv_modelorseries"): XrmBase.StringAttribute;
            get(name: "dmv_motorcycleenginenumber"): XrmBase.StringAttribute;
            get(name: "dmv_typeofvehicle"): XrmBase.OptionSetAttribute<dmv_vehicle_dmv_typeofvehicle>;
            get(name: "dmv_vehicleidnumber"): XrmBase.StringAttribute;
            get(name: "dmv_vehiclemake"): XrmBase.StringAttribute;
            get(name: "dmv_widthtrailer"): XrmBase.NumberAttribute;
            get(name: "dmv_yearmodel"): XrmBase.NumberAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "Applications"): XrmBase.SubGridControl<"dmv_application">;
            get(name: "dmv_bodytypemodel"): XrmBase.StringControl;
            get(name: "dmv_fueltype"): XrmBase.OptionSetControl<dmv_vehicle_dmv_fueltype>;
            get(name: "dmv_lengthtrailer"): XrmBase.NumberControl;
            get(name: "dmv_licensenumber"): XrmBase.StringControl;
            get(name: "dmv_modelorseries"): XrmBase.StringControl;
            get(name: "dmv_motorcycleenginenumber"): XrmBase.StringControl;
            get(name: "dmv_typeofvehicle"): XrmBase.OptionSetControl<dmv_vehicle_dmv_typeofvehicle>;
            get(name: "dmv_vehicleidnumber"): XrmBase.StringControl;
            get(name: "dmv_vehiclemake"): XrmBase.StringControl;
            get(name: "dmv_widthtrailer"): XrmBase.NumberControl;
            get(name: "dmv_yearmodel"): XrmBase.NumberControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{25fd8686-68b2-4126-bb9f-d0470525898a}"): XrmBase.PageTab<Tabs._25fd868668b24126bb9fd0470525898a>;
            get(name: "tab_2"): XrmBase.PageTab<Tabs.Tab2>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "dmv_vehicleidnumber"): XrmBase.StringAttribute;
        getAttribute(attributeName: "dmv_vehiclemake"): XrmBase.StringAttribute;
        getAttribute(attributeName: "dmv_modelorseries"): XrmBase.StringAttribute;
        getAttribute(attributeName: "dmv_yearmodel"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "dmv_licensenumber"): XrmBase.StringAttribute;
        getAttribute(attributeName: "dmv_fueltype"): XrmBase.OptionSetAttribute<dmv_vehicle_dmv_fueltype>;
        getAttribute(attributeName: "dmv_bodytypemodel"): XrmBase.StringAttribute;
        getAttribute(attributeName: "dmv_typeofvehicle"): XrmBase.OptionSetAttribute<dmv_vehicle_dmv_typeofvehicle>;
        getAttribute(attributeName: "dmv_motorcycleenginenumber"): XrmBase.StringAttribute;
        getAttribute(attributeName: "dmv_lengthtrailer"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "dmv_widthtrailer"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "dmv_vehicleidnumber"): XrmBase.StringControl;
        getControl(controlName: "dmv_vehiclemake"): XrmBase.StringControl;
        getControl(controlName: "dmv_modelorseries"): XrmBase.StringControl;
        getControl(controlName: "dmv_yearmodel"): XrmBase.NumberControl;
        getControl(controlName: "dmv_licensenumber"): XrmBase.StringControl;
        getControl(controlName: "dmv_fueltype"): XrmBase.OptionSetControl<dmv_vehicle_dmv_fueltype>;
        getControl(controlName: "dmv_bodytypemodel"): XrmBase.StringControl;
        getControl(controlName: "dmv_typeofvehicle"): XrmBase.OptionSetControl<dmv_vehicle_dmv_typeofvehicle>;
        getControl(controlName: "dmv_motorcycleenginenumber"): XrmBase.StringControl;
        getControl(controlName: "dmv_lengthtrailer"): XrmBase.NumberControl;
        getControl(controlName: "dmv_widthtrailer"): XrmBase.NumberControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "Applications"): XrmBase.SubGridControl<"dmv_application">;
        getControl(controlName: string): undefined;
    }
}
