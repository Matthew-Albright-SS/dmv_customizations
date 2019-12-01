declare namespace Form.msdyn_taxcode.Main {
    namespace Information {
        namespace Tabs {
            interface F1tabtaxinfo extends XrmBase.SectionCollectionBase {
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Taxcodedetailstab extends XrmBase.SectionCollectionBase {
                get(name: "taxcodedetailssection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_actastaxgroup"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_agreementtaxable"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_productstaxable"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_servicestaxable"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_taxrate"): XrmBase.NumberAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_actastaxgroup"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_agreementtaxable"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_productstaxable"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_servicestaxable"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_taxrate"): XrmBase.NumberControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "taxcodedetailsgrid"): XrmBase.SubGridControl<"msdyn_taxcodedetail">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "f1tab_taxinfo"): XrmBase.PageTab<Tabs.F1tabtaxinfo>;
            get(name: "taxcodedetailstab"): XrmBase.PageTab<Tabs.Taxcodedetailstab>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_actastaxgroup"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_taxrate"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_productstaxable"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_agreementtaxable"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_servicestaxable"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_actastaxgroup"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_taxrate"): XrmBase.NumberControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_productstaxable"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_agreementtaxable"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_servicestaxable"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "taxcodedetailsgrid"): XrmBase.SubGridControl<"msdyn_taxcodedetail">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
