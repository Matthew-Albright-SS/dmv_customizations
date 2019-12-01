declare namespace Form.msdyn_agreementbookingservice.Main {
    namespace AgreementBookingServiceMobile {
        namespace Tabs {
            interface Fstabother extends XrmBase.SectionCollectionBase {
                get(name: "tab_3_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Fstabsubgrids extends XrmBase.SectionCollectionBase {
                get(name: "fstab_sub_grids"): XrmBase.PageSection;
                get(name: "fstab_sub_grids_section_2"): XrmBase.PageSection;
                get(name: "fstab_sub_grids_section_3"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_agreement"): XrmBase.LookupAttribute<"msdyn_agreement">;
            get(name: "msdyn_agreementbookingincident"): XrmBase.LookupAttribute<"msdyn_agreementbookingincident">;
            get(name: "msdyn_agreementbookingsetup"): XrmBase.LookupAttribute<"msdyn_agreementbookingsetup">;
            get(name: "msdyn_customerasset"): XrmBase.LookupAttribute<"msdyn_customerasset">;
            get(name: "msdyn_duration"): XrmBase.NumberAttribute;
            get(name: "msdyn_durationtobill"): XrmBase.NumberAttribute;
            get(name: "msdyn_lineorder"): XrmBase.NumberAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_pricelist"): XrmBase.LookupAttribute<"pricelevel">;
            get(name: "msdyn_service"): XrmBase.LookupAttribute<"product">;
            get(name: "msdyn_unit"): XrmBase.LookupAttribute<"uom">;
            get(name: "msdyn_unitamount"): XrmBase.NumberAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_agreement"): XrmBase.LookupControl<"msdyn_agreement">;
            get(name: "msdyn_agreementbookingincident"): XrmBase.LookupControl<"msdyn_agreementbookingincident">;
            get(name: "msdyn_agreementbookingsetup"): XrmBase.LookupControl<"msdyn_agreementbookingsetup">;
            get(name: "msdyn_customerasset"): XrmBase.LookupControl<"msdyn_customerasset">;
            get(name: "msdyn_duration"): XrmBase.NumberControl;
            get(name: "msdyn_durationtobill"): XrmBase.NumberControl;
            get(name: "msdyn_lineorder"): XrmBase.NumberControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_pricelist"): XrmBase.LookupControl<"pricelevel">;
            get(name: "msdyn_service"): XrmBase.LookupControl<"product">;
            get(name: "msdyn_unit"): XrmBase.LookupControl<"uom">;
            get(name: "msdyn_unitamount"): XrmBase.NumberControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "fstab_other"): XrmBase.PageTab<Tabs.Fstabother>;
            get(name: "fstab_sub_grids"): XrmBase.PageTab<Tabs.Fstabsubgrids>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface AgreementBookingServiceMobile extends XrmBase.PageBase<AgreementBookingServiceMobile.Attributes, AgreementBookingServiceMobile.Tabs, AgreementBookingServiceMobile.Controls> {
        getAttribute(attributeName: "msdyn_service"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "msdyn_unit"): XrmBase.LookupAttribute<"uom">;
        getAttribute(attributeName: "msdyn_pricelist"): XrmBase.LookupAttribute<"pricelevel">;
        getAttribute(attributeName: "msdyn_duration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_unitamount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_durationtobill"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_agreementbookingsetup"): XrmBase.LookupAttribute<"msdyn_agreementbookingsetup">;
        getAttribute(attributeName: "msdyn_agreementbookingincident"): XrmBase.LookupAttribute<"msdyn_agreementbookingincident">;
        getAttribute(attributeName: "msdyn_customerasset"): XrmBase.LookupAttribute<"msdyn_customerasset">;
        getAttribute(attributeName: "msdyn_agreement"): XrmBase.LookupAttribute<"msdyn_agreement">;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_lineorder"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_service"): XrmBase.LookupControl<"product">;
        getControl(controlName: "msdyn_unit"): XrmBase.LookupControl<"uom">;
        getControl(controlName: "msdyn_pricelist"): XrmBase.LookupControl<"pricelevel">;
        getControl(controlName: "msdyn_duration"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_unitamount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_durationtobill"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_agreementbookingsetup"): XrmBase.LookupControl<"msdyn_agreementbookingsetup">;
        getControl(controlName: "msdyn_agreementbookingincident"): XrmBase.LookupControl<"msdyn_agreementbookingincident">;
        getControl(controlName: "msdyn_customerasset"): XrmBase.LookupControl<"msdyn_customerasset">;
        getControl(controlName: "msdyn_agreement"): XrmBase.LookupControl<"msdyn_agreement">;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_lineorder"): XrmBase.NumberControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
