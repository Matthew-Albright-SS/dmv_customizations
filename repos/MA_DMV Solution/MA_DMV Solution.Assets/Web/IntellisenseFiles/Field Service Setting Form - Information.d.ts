declare namespace Form.msdyn_fieldservicesetting.Main {
    namespace Information {
        namespace Tabs {
            interface _4cc8a00d6d794310a61a6b5a0597caf4 extends XrmBase.SectionCollectionBase {
                get(name: "{c420a5ef-ca73-43ea-a432-4f9ece791087}"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab6 extends XrmBase.SectionCollectionBase {
                get(name: "tab_6_section_2"): XrmBase.PageSection;
                get(name: "tab_3_section_1"): XrmBase.PageSection;
                get(name: "Crew Management"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab10 extends XrmBase.SectionCollectionBase {
                get(name: "tab_10_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab11 extends XrmBase.SectionCollectionBase {
                get(name: "tab_11_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab7 extends XrmBase.SectionCollectionBase {
                get(name: "tab_7_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab8 extends XrmBase.SectionCollectionBase {
                get(name: "tab_8_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab9 extends XrmBase.SectionCollectionBase {
                get(name: "tab_9_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab12 extends XrmBase.SectionCollectionBase {
                get(name: "tab_12_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab13 extends XrmBase.SectionCollectionBase {
                get(name: "tab_13_section_1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface RemoteAssist extends XrmBase.SectionCollectionBase {
                get(name: "tab_13_section_1_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface Tab4 extends XrmBase.SectionCollectionBase {
                get(name: "tab_4_section_2"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_advancedsettings"): XrmBase.StringAttribute;
            get(name: "msdyn_agreementprefix"): XrmBase.StringAttribute;
            get(name: "msdyn_agreementrecordgeneration"): XrmBase.DateAttribute;
            get(name: "msdyn_agreementstartingnumber"): XrmBase.NumberAttribute;
            get(name: "msdyn_autoallocateestimatedproducts"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_autogeneratewoforagreementbooking"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_autogeocodeaddresses"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_autonumberingoptin"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_breakpaytype"): XrmBase.LookupAttribute<"msdyn_resourcepaytype">;
            get(name: "msdyn_businessclosurepaytype"): XrmBase.LookupAttribute<"msdyn_resourcepaytype">;
            get(name: "msdyn_defaultcrewstrategy"): XrmBase.OptionSetAttribute<msdyn_crewstrategy>;
            get(name: "msdyn_defaultwarehouse"): XrmBase.LookupAttribute<"msdyn_warehouse">;
            get(name: "msdyn_defaultworkordercompletedstatus"): XrmBase.OptionSetAttribute<msdyn_wosystemstatus>;
            get(name: "msdyn_disableremoteassistbookingstatuschanges"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_enableaddresssuggestions"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_enablelegacyscheduleassistant"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_enablesuggestedduration"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_entitynumberlength"): XrmBase.NumberAttribute;
            get(name: "msdyn_generateagreementinvoicesxdaysinadvance"): XrmBase.NumberAttribute;
            get(name: "msdyn_generateagreementwoxdaysinadvance"): XrmBase.NumberAttribute;
            get(name: "msdyn_generatebookingdatesxmonthsinadvance"): XrmBase.NumberAttribute;
            get(name: "msdyn_generateinvoicedatesxmonthsinadvance"): XrmBase.NumberAttribute;
            get(name: "msdyn_historicaldatafilter"): XrmBase.OptionSetAttribute<msdyn_fieldservicesetting_msdyn_historicaldatafilter>;
            get(name: "msdyn_inventoryadjustmentprefix"): XrmBase.StringAttribute;
            get(name: "msdyn_inventoryadjustmentstartingnumber"): XrmBase.NumberAttribute;
            get(name: "msdyn_inventorytransferprefix"): XrmBase.StringAttribute;
            get(name: "msdyn_inventorytransferstartingnumber"): XrmBase.NumberAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_overtimepaytype"): XrmBase.LookupAttribute<"msdyn_resourcepaytype">;
            get(name: "msdyn_productcostorder"): XrmBase.OptionSetAttribute<msdyn_productcostorder>;
            get(name: "msdyn_purchaseorderapprovalrequired"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_purchaseorderprefix"): XrmBase.StringAttribute;
            get(name: "msdyn_purchaseorderstartingnumber"): XrmBase.NumberAttribute;
            get(name: "msdyn_rmaprefix"): XrmBase.StringAttribute;
            get(name: "msdyn_rmastartingnumber"): XrmBase.NumberAttribute;
            get(name: "msdyn_rtvprefix"): XrmBase.StringAttribute;
            get(name: "msdyn_rtvstartingnumber"): XrmBase.NumberAttribute;
            get(name: "msdyn_travelchargeitemid"): XrmBase.LookupAttribute<"product">;
            get(name: "msdyn_travelpaytype"): XrmBase.LookupAttribute<"msdyn_resourcepaytype">;
            get(name: "msdyn_useofproductsoutofstock"): XrmBase.OptionSetAttribute<msdyn_outofstockoptions>;
            get(name: "msdyn_workorderinvoicecreation"): XrmBase.OptionSetAttribute<msdyn_autocreateinvoices>;
            get(name: "msdyn_workorderprefix"): XrmBase.StringAttribute;
            get(name: "msdyn_workorderstartingnumber"): XrmBase.NumberAttribute;
            get(name: "msdyn_workpaytype"): XrmBase.LookupAttribute<"msdyn_resourcepaytype">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "fieldserviceslaconfigurationgrid"): XrmBase.SubGridControl<"msdyn_fieldserviceslaconfiguration">;
            get(name: "msdyn_advancedsettings"): XrmBase.StringControl;
            get(name: "msdyn_agreementprefix"): XrmBase.StringControl;
            get(name: "msdyn_agreementrecordgeneration"): XrmBase.BaseControl;
            get(name: "msdyn_agreementstartingnumber"): XrmBase.NumberControl;
            get(name: "msdyn_autoallocateestimatedproducts"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_autogeneratewoforagreementbooking"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_autogeocodeaddresses"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_autonumberingoptin"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_breakpaytype"): XrmBase.LookupControl<"msdyn_resourcepaytype">;
            get(name: "msdyn_businessclosurepaytype"): XrmBase.LookupControl<"msdyn_resourcepaytype">;
            get(name: "msdyn_defaultcrewstrategy"): XrmBase.OptionSetControl<msdyn_crewstrategy>;
            get(name: "msdyn_defaultwarehouse"): XrmBase.LookupControl<"msdyn_warehouse">;
            get(name: "msdyn_defaultworkordercompletedstatus"): XrmBase.OptionSetControl<msdyn_wosystemstatus>;
            get(name: "msdyn_disableremoteassistbookingstatuschanges"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_enableaddresssuggestions"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_enablelegacyscheduleassistant"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_enablesuggestedduration"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_entitynumberlength"): XrmBase.NumberControl;
            get(name: "msdyn_generateagreementinvoicesxdaysinadvance"): XrmBase.NumberControl;
            get(name: "msdyn_generateagreementwoxdaysinadvance"): XrmBase.NumberControl;
            get(name: "msdyn_generatebookingdatesxmonthsinadvance"): XrmBase.NumberControl;
            get(name: "msdyn_generateinvoicedatesxmonthsinadvance"): XrmBase.NumberControl;
            get(name: "msdyn_historicaldatafilter"): XrmBase.OptionSetControl<msdyn_fieldservicesetting_msdyn_historicaldatafilter>;
            get(name: "msdyn_inventoryadjustmentprefix"): XrmBase.StringControl;
            get(name: "msdyn_inventoryadjustmentstartingnumber"): XrmBase.NumberControl;
            get(name: "msdyn_inventorytransferprefix"): XrmBase.StringControl;
            get(name: "msdyn_inventorytransferstartingnumber"): XrmBase.NumberControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_overtimepaytype"): XrmBase.LookupControl<"msdyn_resourcepaytype">;
            get(name: "msdyn_productcostorder"): XrmBase.OptionSetControl<msdyn_productcostorder>;
            get(name: "msdyn_purchaseorderapprovalrequired"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_purchaseorderprefix"): XrmBase.StringControl;
            get(name: "msdyn_purchaseorderstartingnumber"): XrmBase.NumberControl;
            get(name: "msdyn_rmaprefix"): XrmBase.StringControl;
            get(name: "msdyn_rmastartingnumber"): XrmBase.NumberControl;
            get(name: "msdyn_rtvprefix"): XrmBase.StringControl;
            get(name: "msdyn_rtvstartingnumber"): XrmBase.NumberControl;
            get(name: "msdyn_travelchargeitemid"): XrmBase.LookupControl<"product">;
            get(name: "msdyn_travelpaytype"): XrmBase.LookupControl<"msdyn_resourcepaytype">;
            get(name: "msdyn_useofproductsoutofstock"): XrmBase.OptionSetControl<msdyn_outofstockoptions>;
            get(name: "msdyn_workorderinvoicecreation"): XrmBase.OptionSetControl<msdyn_autocreateinvoices>;
            get(name: "msdyn_workorderprefix"): XrmBase.StringControl;
            get(name: "msdyn_workorderstartingnumber"): XrmBase.NumberControl;
            get(name: "msdyn_workpaytype"): XrmBase.LookupControl<"msdyn_resourcepaytype">;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "WebResource_AgreementRecordGeneration_TimeField"): XrmBase.WebResourceControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{4cc8a00d-6d79-4310-a61a-6b5a0597caf4}"): XrmBase.PageTab<Tabs._4cc8a00d6d794310a61a6b5a0597caf4>;
            get(name: "tab_6"): XrmBase.PageTab<Tabs.Tab6>;
            get(name: "tab_10"): XrmBase.PageTab<Tabs.Tab10>;
            get(name: "tab_11"): XrmBase.PageTab<Tabs.Tab11>;
            get(name: "tab_7"): XrmBase.PageTab<Tabs.Tab7>;
            get(name: "tab_8"): XrmBase.PageTab<Tabs.Tab8>;
            get(name: "tab_9"): XrmBase.PageTab<Tabs.Tab9>;
            get(name: "tab_12"): XrmBase.PageTab<Tabs.Tab12>;
            get(name: "tab_13"): XrmBase.PageTab<Tabs.Tab13>;
            get(name: "RemoteAssist"): XrmBase.PageTab<Tabs.RemoteAssist>;
            get(name: "tab_4"): XrmBase.PageTab<Tabs.Tab4>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_workorderprefix"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_workorderstartingnumber"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_defaultworkordercompletedstatus"): XrmBase.OptionSetAttribute<msdyn_wosystemstatus>;
        getAttribute(attributeName: "msdyn_workorderinvoicecreation"): XrmBase.OptionSetAttribute<msdyn_autocreateinvoices>;
        getAttribute(attributeName: "msdyn_defaultwarehouse"): XrmBase.LookupAttribute<"msdyn_warehouse">;
        getAttribute(attributeName: "msdyn_travelchargeitemid"): XrmBase.LookupAttribute<"product">;
        getAttribute(attributeName: "msdyn_autonumberingoptin"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_workpaytype"): XrmBase.LookupAttribute<"msdyn_resourcepaytype">;
        getAttribute(attributeName: "msdyn_overtimepaytype"): XrmBase.LookupAttribute<"msdyn_resourcepaytype">;
        getAttribute(attributeName: "msdyn_businessclosurepaytype"): XrmBase.LookupAttribute<"msdyn_resourcepaytype">;
        getAttribute(attributeName: "msdyn_breakpaytype"): XrmBase.LookupAttribute<"msdyn_resourcepaytype">;
        getAttribute(attributeName: "msdyn_travelpaytype"): XrmBase.LookupAttribute<"msdyn_resourcepaytype">;
        getAttribute(attributeName: "msdyn_defaultcrewstrategy"): XrmBase.OptionSetAttribute<msdyn_crewstrategy>;
        getAttribute(attributeName: "msdyn_rmaprefix"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_rmastartingnumber"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_rtvprefix"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_rtvstartingnumber"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_agreementprefix"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_agreementstartingnumber"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_autogeneratewoforagreementbooking"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_generateagreementwoxdaysinadvance"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_generatebookingdatesxmonthsinadvance"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_generateagreementinvoicesxdaysinadvance"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_generateinvoicedatesxmonthsinadvance"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_agreementrecordgeneration"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_purchaseorderprefix"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_purchaseorderstartingnumber"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_purchaseorderapprovalrequired"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_useofproductsoutofstock"): XrmBase.OptionSetAttribute<msdyn_outofstockoptions>;
        getAttribute(attributeName: "msdyn_inventorytransferprefix"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_inventorytransferstartingnumber"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_inventoryadjustmentprefix"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_inventoryadjustmentstartingnumber"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_enablesuggestedduration"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_historicaldatafilter"): XrmBase.OptionSetAttribute<msdyn_fieldservicesetting_msdyn_historicaldatafilter>;
        getAttribute(attributeName: "msdyn_disableremoteassistbookingstatuschanges"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_entitynumberlength"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_enableaddresssuggestions"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_enablelegacyscheduleassistant"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_productcostorder"): XrmBase.OptionSetAttribute<msdyn_productcostorder>;
        getAttribute(attributeName: "msdyn_autoallocateestimatedproducts"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_autogeocodeaddresses"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_advancedsettings"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_workorderprefix"): XrmBase.StringControl;
        getControl(controlName: "msdyn_workorderstartingnumber"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_defaultworkordercompletedstatus"): XrmBase.OptionSetControl<msdyn_wosystemstatus>;
        getControl(controlName: "msdyn_workorderinvoicecreation"): XrmBase.OptionSetControl<msdyn_autocreateinvoices>;
        getControl(controlName: "msdyn_defaultwarehouse"): XrmBase.LookupControl<"msdyn_warehouse">;
        getControl(controlName: "msdyn_travelchargeitemid"): XrmBase.LookupControl<"product">;
        getControl(controlName: "msdyn_autonumberingoptin"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_workpaytype"): XrmBase.LookupControl<"msdyn_resourcepaytype">;
        getControl(controlName: "msdyn_overtimepaytype"): XrmBase.LookupControl<"msdyn_resourcepaytype">;
        getControl(controlName: "msdyn_businessclosurepaytype"): XrmBase.LookupControl<"msdyn_resourcepaytype">;
        getControl(controlName: "msdyn_breakpaytype"): XrmBase.LookupControl<"msdyn_resourcepaytype">;
        getControl(controlName: "msdyn_travelpaytype"): XrmBase.LookupControl<"msdyn_resourcepaytype">;
        getControl(controlName: "msdyn_defaultcrewstrategy"): XrmBase.OptionSetControl<msdyn_crewstrategy>;
        getControl(controlName: "msdyn_rmaprefix"): XrmBase.StringControl;
        getControl(controlName: "msdyn_rmastartingnumber"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_rtvprefix"): XrmBase.StringControl;
        getControl(controlName: "msdyn_rtvstartingnumber"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_agreementprefix"): XrmBase.StringControl;
        getControl(controlName: "msdyn_agreementstartingnumber"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_autogeneratewoforagreementbooking"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_generateagreementwoxdaysinadvance"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_generatebookingdatesxmonthsinadvance"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_generateagreementinvoicesxdaysinadvance"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_generateinvoicedatesxmonthsinadvance"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_agreementrecordgeneration"): XrmBase.BaseControl;
        getControl(controlName: "WebResource_AgreementRecordGeneration_TimeField"): XrmBase.WebResourceControl;
        getControl(controlName: "msdyn_purchaseorderprefix"): XrmBase.StringControl;
        getControl(controlName: "msdyn_purchaseorderstartingnumber"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_purchaseorderapprovalrequired"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_useofproductsoutofstock"): XrmBase.OptionSetControl<msdyn_outofstockoptions>;
        getControl(controlName: "msdyn_inventorytransferprefix"): XrmBase.StringControl;
        getControl(controlName: "msdyn_inventorytransferstartingnumber"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_inventoryadjustmentprefix"): XrmBase.StringControl;
        getControl(controlName: "msdyn_inventoryadjustmentstartingnumber"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_enablesuggestedduration"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_historicaldatafilter"): XrmBase.OptionSetControl<msdyn_fieldservicesetting_msdyn_historicaldatafilter>;
        getControl(controlName: "fieldserviceslaconfigurationgrid"): XrmBase.SubGridControl<"msdyn_fieldserviceslaconfiguration">;
        getControl(controlName: "msdyn_disableremoteassistbookingstatuschanges"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_entitynumberlength"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_enableaddresssuggestions"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_enablelegacyscheduleassistant"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_productcostorder"): XrmBase.OptionSetControl<msdyn_productcostorder>;
        getControl(controlName: "msdyn_autoallocateestimatedproducts"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_autogeocodeaddresses"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_advancedsettings"): XrmBase.StringControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
