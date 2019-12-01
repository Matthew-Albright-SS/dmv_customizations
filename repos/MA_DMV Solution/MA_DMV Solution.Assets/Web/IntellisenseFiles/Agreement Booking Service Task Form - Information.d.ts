declare namespace Form.msdyn_agreementbookingservicetask.Main {
    namespace Information {
        namespace Tabs {
            interface Tab3 extends XrmBase.SectionCollectionBase {
                get(name: "tab_3_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_agreement"): XrmBase.LookupAttribute<"msdyn_agreement">;
            get(name: "msdyn_agreementbookingincident"): XrmBase.LookupAttribute<"msdyn_agreementbookingincident">;
            get(name: "msdyn_agreementbookingsetup"): XrmBase.LookupAttribute<"msdyn_agreementbookingsetup">;
            get(name: "msdyn_customerasset"): XrmBase.LookupAttribute<"msdyn_customerasset">;
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_estimatedduration"): XrmBase.NumberAttribute;
            get(name: "msdyn_lineorder"): XrmBase.NumberAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_tasktype"): XrmBase.LookupAttribute<"msdyn_servicetasktype">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_agreement"): XrmBase.LookupControl<"msdyn_agreement">;
            get(name: "msdyn_agreementbookingincident"): XrmBase.LookupControl<"msdyn_agreementbookingincident">;
            get(name: "msdyn_agreementbookingsetup"): XrmBase.LookupControl<"msdyn_agreementbookingsetup">;
            get(name: "msdyn_customerasset"): XrmBase.LookupControl<"msdyn_customerasset">;
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_estimatedduration"): XrmBase.NumberControl;
            get(name: "msdyn_lineorder"): XrmBase.NumberControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_tasktype"): XrmBase.LookupControl<"msdyn_servicetasktype">;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "tab_3"): XrmBase.PageTab<Tabs.Tab3>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_tasktype"): XrmBase.LookupAttribute<"msdyn_servicetasktype">;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_lineorder"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_estimatedduration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_agreementbookingsetup"): XrmBase.LookupAttribute<"msdyn_agreementbookingsetup">;
        getAttribute(attributeName: "msdyn_agreement"): XrmBase.LookupAttribute<"msdyn_agreement">;
        getAttribute(attributeName: "msdyn_agreementbookingincident"): XrmBase.LookupAttribute<"msdyn_agreementbookingincident">;
        getAttribute(attributeName: "msdyn_customerasset"): XrmBase.LookupAttribute<"msdyn_customerasset">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_tasktype"): XrmBase.LookupControl<"msdyn_servicetasktype">;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "msdyn_lineorder"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_estimatedduration"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_agreementbookingsetup"): XrmBase.LookupControl<"msdyn_agreementbookingsetup">;
        getControl(controlName: "msdyn_agreement"): XrmBase.LookupControl<"msdyn_agreement">;
        getControl(controlName: "msdyn_agreementbookingincident"): XrmBase.LookupControl<"msdyn_agreementbookingincident">;
        getControl(controlName: "msdyn_customerasset"): XrmBase.LookupControl<"msdyn_customerasset">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
