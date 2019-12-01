declare namespace Form.msdyn_quoteinvoicingsetup.Main {
    namespace Information {
        namespace Tabs {
            interface _39db6ad70591436c85083f53a96fba9c extends XrmBase.SectionCollectionBase {
                get(name: "{39db6ad7-0591-436c-8508-3f53a96fba9c}_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface TabProducts extends XrmBase.SectionCollectionBase {
                get(name: "tab_2_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_quote"): XrmBase.LookupAttribute<"quote">;
            get(name: "msdyn_recurrencesettings"): XrmBase.StringAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "GridProducts"): XrmBase.SubGridControl<"msdyn_quoteinvoicingproduct">;
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_quote"): XrmBase.LookupControl<"quote">;
            get(name: "msdyn_recurrencesettings"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{39db6ad7-0591-436c-8508-3f53a96fba9c}"): XrmBase.PageTab<Tabs._39db6ad70591436c85083f53a96fba9c>;
            get(name: "TabProducts"): XrmBase.PageTab<Tabs.TabProducts>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_quote"): XrmBase.LookupAttribute<"quote">;
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_recurrencesettings"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_quote"): XrmBase.LookupControl<"quote">;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_recurrencesettings"): XrmBase.StringControl;
        getControl(controlName: "GridProducts"): XrmBase.SubGridControl<"msdyn_quoteinvoicingproduct">;
        getControl(controlName: string): undefined;
    }
}
