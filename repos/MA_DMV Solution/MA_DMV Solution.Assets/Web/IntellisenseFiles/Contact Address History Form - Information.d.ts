declare namespace Form.dmv_contactaddresshistory.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "dmv_city"): XrmBase.StringAttribute;
            get(name: "dmv_contact"): XrmBase.LookupAttribute<"contact">;
            get(name: "dmv_country"): XrmBase.StringAttribute;
            get(name: "dmv_name"): XrmBase.StringAttribute;
            get(name: "dmv_state"): XrmBase.StringAttribute;
            get(name: "dmv_street1"): XrmBase.StringAttribute;
            get(name: "dmv_street2"): XrmBase.StringAttribute;
            get(name: "dmv_zipcode"): XrmBase.StringAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "dmv_city"): XrmBase.StringControl;
            get(name: "dmv_contact"): XrmBase.LookupControl<"contact">;
            get(name: "dmv_country"): XrmBase.StringControl;
            get(name: "dmv_name"): XrmBase.StringControl;
            get(name: "dmv_state"): XrmBase.StringControl;
            get(name: "dmv_street1"): XrmBase.StringControl;
            get(name: "dmv_street2"): XrmBase.StringControl;
            get(name: "dmv_zipcode"): XrmBase.StringControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
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
        getAttribute(attributeName: "dmv_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "dmv_contact"): XrmBase.LookupAttribute<"contact">;
        getAttribute(attributeName: "dmv_street1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "dmv_street2"): XrmBase.StringAttribute;
        getAttribute(attributeName: "dmv_city"): XrmBase.StringAttribute;
        getAttribute(attributeName: "dmv_state"): XrmBase.StringAttribute;
        getAttribute(attributeName: "dmv_country"): XrmBase.StringAttribute;
        getAttribute(attributeName: "dmv_zipcode"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "dmv_name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "dmv_contact"): XrmBase.LookupControl<"contact">;
        getControl(controlName: "dmv_street1"): XrmBase.StringControl;
        getControl(controlName: "dmv_street2"): XrmBase.StringControl;
        getControl(controlName: "dmv_city"): XrmBase.StringControl;
        getControl(controlName: "dmv_state"): XrmBase.StringControl;
        getControl(controlName: "dmv_country"): XrmBase.StringControl;
        getControl(controlName: "dmv_zipcode"): XrmBase.StringControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
