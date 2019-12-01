declare namespace Form.bookingstatus.Main {
    namespace Information {
        namespace Tabs {
            interface Tab2 extends XrmBase.SectionCollectionBase {
                get(name: "tab_2_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface FieldService extends XrmBase.SectionCollectionBase {
                get(name: "FieldService_section_1"): XrmBase.PageSection;
                get(name: "FieldService_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface ProjectService extends XrmBase.SectionCollectionBase {
                get(name: "ProjectService_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "msdyn_committype"): XrmBase.OptionSetAttribute<msdyn_committype>;
            get(name: "msdyn_fieldservicestatus"): XrmBase.OptionSetAttribute<msdyn_bookingsystemstatus>;
            get(name: "msdyn_imageurl"): XrmBase.StringAttribute;
            get(name: "msdyn_statuscolor"): XrmBase.StringAttribute;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "status"): XrmBase.OptionSetAttribute<bookingstatus_status>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "description"): XrmBase.StringControl;
            get(name: "msdyn_committype"): XrmBase.OptionSetControl<msdyn_committype>;
            get(name: "msdyn_fieldservicestatus"): XrmBase.OptionSetControl<msdyn_bookingsystemstatus>;
            get(name: "msdyn_imageurl"): XrmBase.StringControl;
            get(name: "msdyn_statuscolor"): XrmBase.StringControl;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "status"): XrmBase.OptionSetControl<bookingstatus_status>;
            get(name: "WebResource_StatusColor"): XrmBase.WebResourceControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "tab_2"): XrmBase.PageTab<Tabs.Tab2>;
            get(name: "FieldService"): XrmBase.PageTab<Tabs.FieldService>;
            get(name: "ProjectService"): XrmBase.PageTab<Tabs.ProjectService>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "status"): XrmBase.OptionSetAttribute<bookingstatus_status>;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_imageurl"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_statuscolor"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_fieldservicestatus"): XrmBase.OptionSetAttribute<msdyn_bookingsystemstatus>;
        getAttribute(attributeName: "msdyn_committype"): XrmBase.OptionSetAttribute<msdyn_committype>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "status"): XrmBase.OptionSetControl<bookingstatus_status>;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "WebResource_StatusColor"): XrmBase.WebResourceControl;
        getControl(controlName: "msdyn_imageurl"): XrmBase.StringControl;
        getControl(controlName: "msdyn_statuscolor"): XrmBase.StringControl;
        getControl(controlName: "msdyn_fieldservicestatus"): XrmBase.OptionSetControl<msdyn_bookingsystemstatus>;
        getControl(controlName: "msdyn_committype"): XrmBase.OptionSetControl<msdyn_committype>;
        getControl(controlName: string): undefined;
    }
}
