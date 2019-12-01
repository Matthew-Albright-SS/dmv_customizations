declare namespace Form.msdyn_timegroup.Main {
    namespace Information {
        namespace Tabs {
            interface eb571bb4b5254254a87c716f6dc00062 extends XrmBase.SectionCollectionBase {
                get(name: "{9440eeef-63f6-4682-8b8e-43760f0bbe48}"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Intervaltab extends XrmBase.SectionCollectionBase {
                get(name: "tab_4_section_1"): XrmBase.PageSection;
                get(name: "tab_4_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Detailstab extends XrmBase.SectionCollectionBase {
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_displaytopxresultsinsatimegroup"): XrmBase.NumberAttribute;
            get(name: "msdyn_hidebookingtimeonsa"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_interval"): XrmBase.NumberAttribute;
            get(name: "msdyn_intervalsbegin"): XrmBase.DateAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_resetpertimegroupdetail"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_resultsperinterval"): XrmBase.NumberAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "detailsgrid"): XrmBase.SubGridControl<"msdyn_timegroupdetail">;
            get(name: "msdyn_displaytopxresultsinsatimegroup"): XrmBase.NumberControl;
            get(name: "msdyn_hidebookingtimeonsa"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_interval"): XrmBase.NumberControl;
            get(name: "msdyn_intervalsbegin"): XrmBase.BaseControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_resetpertimegroupdetail"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_resultsperinterval"): XrmBase.NumberControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "WebResource_msdyn_intervalbegin"): XrmBase.WebResourceControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{eb571bb4-b525-4254-a87c-716f6dc00062}"): XrmBase.PageTab<Tabs.eb571bb4b5254254a87c716f6dc00062>;
            get(name: "interval_tab"): XrmBase.PageTab<Tabs.Intervaltab>;
            get(name: "Detailstab"): XrmBase.PageTab<Tabs.Detailstab>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_displaytopxresultsinsatimegroup"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_hidebookingtimeonsa"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_interval"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_intervalsbegin"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_resultsperinterval"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_resetpertimegroupdetail"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_displaytopxresultsinsatimegroup"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_hidebookingtimeonsa"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_interval"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_intervalsbegin"): XrmBase.BaseControl;
        getControl(controlName: "WebResource_msdyn_intervalbegin"): XrmBase.WebResourceControl;
        getControl(controlName: "msdyn_resultsperinterval"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_resetpertimegroupdetail"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "detailsgrid"): XrmBase.SubGridControl<"msdyn_timegroupdetail">;
        getControl(controlName: string): undefined;
    }
}
