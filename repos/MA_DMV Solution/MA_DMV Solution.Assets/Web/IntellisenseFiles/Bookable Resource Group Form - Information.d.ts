declare namespace Form.bookableresourcegroup.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "childresource"): XrmBase.LookupAttribute<"bookableresource">;
            get(name: "fromdate"): XrmBase.DateAttribute;
            get(name: "msdyn_crewmembertype"): XrmBase.OptionSetAttribute<msdyn_crewmembertype>;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "parentresource"): XrmBase.LookupAttribute<"bookableresource">;
            get(name: "todate"): XrmBase.DateAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "childresource"): XrmBase.LookupControl<"bookableresource">;
            get(name: "fromdate"): XrmBase.DateControl;
            get(name: "msdyn_crewmembertype"): XrmBase.OptionSetControl<msdyn_crewmembertype>;
            get(name: "name"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "parentresource"): XrmBase.LookupControl<"bookableresource">;
            get(name: "todate"): XrmBase.DateControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "parentresource"): XrmBase.LookupAttribute<"bookableresource">;
        getAttribute(attributeName: "childresource"): XrmBase.LookupAttribute<"bookableresource">;
        getAttribute(attributeName: "fromdate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "todate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_crewmembertype"): XrmBase.OptionSetAttribute<msdyn_crewmembertype>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "parentresource"): XrmBase.LookupControl<"bookableresource">;
        getControl(controlName: "childresource"): XrmBase.LookupControl<"bookableresource">;
        getControl(controlName: "fromdate"): XrmBase.DateControl;
        getControl(controlName: "todate"): XrmBase.DateControl;
        getControl(controlName: "msdyn_crewmembertype"): XrmBase.OptionSetControl<msdyn_crewmembertype>;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
