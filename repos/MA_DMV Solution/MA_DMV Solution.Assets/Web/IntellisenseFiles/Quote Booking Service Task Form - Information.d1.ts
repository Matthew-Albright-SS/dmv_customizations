declare namespace Form.msdyn_quotebookingservicetask.Main {
    namespace Information {
        namespace Tabs {
            interface _978ad9fee27a4ebc880fed5f7bf6ba22 extends XrmBase.SectionCollectionBase {
                get(name: "{8c2ab57f-15b0-4bdc-b95e-58244c3c737e}"): XrmBase.PageSection;
                get(name: "{978ad9fe-e27a-4ebc-880f-ed5f7bf6ba22}_section_3"): XrmBase.PageSection;
                get(name: "{978ad9fe-e27a-4ebc-880f-ed5f7bf6ba22}_column_3_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_customerasset"): XrmBase.LookupAttribute<"msdyn_customerasset">;
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_estimatedduration"): XrmBase.NumberAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_quotebookingsetup"): XrmBase.LookupAttribute<"msdyn_quotebookingsetup">;
            get(name: "msdyn_tasktype"): XrmBase.LookupAttribute<"msdyn_servicetasktype">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_customerasset"): XrmBase.LookupControl<"msdyn_customerasset">;
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_estimatedduration"): XrmBase.NumberControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_quotebookingsetup"): XrmBase.LookupControl<"msdyn_quotebookingsetup">;
            get(name: "msdyn_tasktype"): XrmBase.LookupControl<"msdyn_servicetasktype">;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{978ad9fe-e27a-4ebc-880f-ed5f7bf6ba22}"): XrmBase.PageTab<Tabs._978ad9fee27a4ebc880fed5f7bf6ba22>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_tasktype"): XrmBase.LookupAttribute<"msdyn_servicetasktype">;
        getAttribute(attributeName: "msdyn_quotebookingsetup"): XrmBase.LookupAttribute<"msdyn_quotebookingsetup">;
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_estimatedduration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_customerasset"): XrmBase.LookupAttribute<"msdyn_customerasset">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_tasktype"): XrmBase.LookupControl<"msdyn_servicetasktype">;
        getControl(controlName: "msdyn_quotebookingsetup"): XrmBase.LookupControl<"msdyn_quotebookingsetup">;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_estimatedduration"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_customerasset"): XrmBase.LookupControl<"msdyn_customerasset">;
        getControl(controlName: string): undefined;
    }
}
