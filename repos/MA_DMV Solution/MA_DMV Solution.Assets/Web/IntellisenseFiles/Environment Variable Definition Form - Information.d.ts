declare namespace Form.environmentvariabledefinition.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "canbeexported"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "defaultvalue"): XrmBase.StringAttribute;
            get(name: "description"): XrmBase.StringAttribute;
            get(name: "displayname"): XrmBase.StringAttribute;
            get(name: "hint"): XrmBase.StringAttribute;
            get(name: "isrequired"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "name"): XrmBase.StringAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "type"): XrmBase.OptionSetAttribute<environmentvariabledefinition_type>;
            get(name: "valueschema"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "canbeexported"): XrmBase.OptionSetControl<any>;
            get(name: "defaultvalue"): XrmBase.StringControl;
            get(name: "description"): XrmBase.StringControl;
            get(name: "displayname"): XrmBase.StringControl;
            get(name: "hint"): XrmBase.StringControl;
            get(name: "isrequired"): XrmBase.OptionSetControl<any>;
            get(name: "name"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "type"): XrmBase.OptionSetControl<environmentvariabledefinition_type>;
            get(name: "Values"): XrmBase.SubGridControl<"environmentvariablevalue">;
            get(name: "valueschema"): XrmBase.StringControl;
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
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "displayname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "hint"): XrmBase.StringAttribute;
        getAttribute(attributeName: "isrequired"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "canbeexported"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "type"): XrmBase.OptionSetAttribute<environmentvariabledefinition_type>;
        getAttribute(attributeName: "valueschema"): XrmBase.StringAttribute;
        getAttribute(attributeName: "defaultvalue"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "name"): XrmBase.StringControl;
        getControl(controlName: "displayname"): XrmBase.StringControl;
        getControl(controlName: "description"): XrmBase.StringControl;
        getControl(controlName: "hint"): XrmBase.StringControl;
        getControl(controlName: "isrequired"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "canbeexported"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "type"): XrmBase.OptionSetControl<environmentvariabledefinition_type>;
        getControl(controlName: "valueschema"): XrmBase.StringControl;
        getControl(controlName: "defaultvalue"): XrmBase.StringControl;
        getControl(controlName: "Values"): XrmBase.SubGridControl<"environmentvariablevalue">;
        getControl(controlName: string): undefined;
    }
}
