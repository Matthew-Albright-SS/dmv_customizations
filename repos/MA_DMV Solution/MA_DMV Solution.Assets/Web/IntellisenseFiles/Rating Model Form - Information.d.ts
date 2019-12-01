declare namespace Form.ratingmodel.Main {
    namespace Information {
        namespace Tabs {
            interface eb7e384644dc4541ab635c9fb594f107 extends XrmBase.SectionCollectionBase {
                get(name: "{fc24dd79-f2ff-4942-bb88-c5ef718132f1}"): XrmBase.PageSection;
                get(name: "{eb7e3846-44dc-4541-ab63-5c9fb594f107}_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "maxratingvalue"): XrmBase.NumberAttribute;
            get(name: "minratingvalue"): XrmBase.NumberAttribute;
            get(name: "msdyn_ratableentity"): XrmBase.OptionSetAttribute<msdyn_ratingmodel_msdyn_ratableentity>;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "maxratingvalue"): XrmBase.NumberControl;
            get(name: "minratingvalue"): XrmBase.NumberControl;
            get(name: "msdyn_ratableentity"): XrmBase.OptionSetControl<msdyn_ratingmodel_msdyn_ratableentity>;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "RatingValues"): XrmBase.SubGridControl<"ratingvalue">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{eb7e3846-44dc-4541-ab63-5c9fb594f107}"): XrmBase.PageTab<Tabs.eb7e384644dc4541ab635c9fb594f107>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "minratingvalue"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "maxratingvalue"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_ratableentity"): XrmBase.OptionSetAttribute<msdyn_ratingmodel_msdyn_ratableentity>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "minratingvalue"): XrmBase.NumberControl;
        getControl(controlName: "maxratingvalue"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_ratableentity"): XrmBase.OptionSetControl<msdyn_ratingmodel_msdyn_ratableentity>;
        getControl(controlName: "RatingValues"): XrmBase.SubGridControl<"ratingvalue">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
