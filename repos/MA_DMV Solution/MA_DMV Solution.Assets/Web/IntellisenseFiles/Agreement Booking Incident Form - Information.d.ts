declare namespace Form.msdyn_agreementbookingincident.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_agreement"): XrmBase.LookupAttribute<"msdyn_agreement">;
            get(name: "msdyn_agreementbookingsetup"): XrmBase.LookupAttribute<"msdyn_agreementbookingsetup">;
            get(name: "msdyn_customerasset"): XrmBase.LookupAttribute<"msdyn_customerasset">;
            get(name: "msdyn_description"): XrmBase.StringAttribute;
            get(name: "msdyn_estimatedduration"): XrmBase.NumberAttribute;
            get(name: "msdyn_incidenttype"): XrmBase.LookupAttribute<"msdyn_incidenttype">;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_agreement"): XrmBase.LookupControl<"msdyn_agreement">;
            get(name: "msdyn_agreementbookingsetup"): XrmBase.LookupControl<"msdyn_agreementbookingsetup">;
            get(name: "msdyn_customerasset"): XrmBase.LookupControl<"msdyn_customerasset">;
            get(name: "msdyn_description"): XrmBase.StringControl;
            get(name: "msdyn_estimatedduration"): XrmBase.NumberControl;
            get(name: "msdyn_incidenttype"): XrmBase.LookupControl<"msdyn_incidenttype">;
            get(name: "msdyn_name"): XrmBase.StringControl;
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
        getAttribute(attributeName: "msdyn_agreement"): XrmBase.LookupAttribute<"msdyn_agreement">;
        getAttribute(attributeName: "msdyn_agreementbookingsetup"): XrmBase.LookupAttribute<"msdyn_agreementbookingsetup">;
        getAttribute(attributeName: "msdyn_incidenttype"): XrmBase.LookupAttribute<"msdyn_incidenttype">;
        getAttribute(attributeName: "msdyn_description"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_estimatedduration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_customerasset"): XrmBase.LookupAttribute<"msdyn_customerasset">;
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_agreement"): XrmBase.LookupControl<"msdyn_agreement">;
        getControl(controlName: "msdyn_agreementbookingsetup"): XrmBase.LookupControl<"msdyn_agreementbookingsetup">;
        getControl(controlName: "msdyn_incidenttype"): XrmBase.LookupControl<"msdyn_incidenttype">;
        getControl(controlName: "msdyn_description"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_estimatedduration"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_customerasset"): XrmBase.LookupControl<"msdyn_customerasset">;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
