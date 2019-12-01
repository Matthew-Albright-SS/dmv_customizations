declare namespace Form.contract.Main {
    namespace Contract {
        namespace Tabs {
            interface General extends XrmBase.SectionCollectionBase {
                get(name: "header"): XrmBase.PageSection;
                get(name: "contract type"): XrmBase.PageSection;
                get(name: "history"): XrmBase.PageSection;
                get(name: "description"): XrmBase.PageSection;
                get(name: "notes"): XrmBase.PageSection;
                get(name: "contract_line"): XrmBase.PageSection;
                get(name: "billing information"): XrmBase.PageSection;
                get(name: "pricing"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "activeon"): XrmBase.DateAttribute;
            get(name: "billingcustomerid"): XrmBase.LookupAttribute<"account" | "contact">;
            get(name: "billingendon"): XrmBase.DateAttribute;
            get(name: "billingfrequencycode"): XrmBase.OptionSetAttribute<contract_billingfrequencycode>;
            get(name: "billingstarton"): XrmBase.DateAttribute;
            get(name: "billtoaddress"): XrmBase.LookupAttribute<"customeraddress">;
            get(name: "cancelon"): XrmBase.DateAttribute;
            get(name: "contractlanguage"): XrmBase.StringAttribute;
            get(name: "contractnumber"): XrmBase.StringAttribute;
            get(name: "contractservicelevelcode"): XrmBase.OptionSetAttribute<contract_contractservicelevelcode>;
            get(name: "contracttemplateid"): XrmBase.LookupAttribute<"contracttemplate">;
            get(name: "customerid"): XrmBase.LookupAttribute<"account" | "contact">;
            get(name: "duration"): XrmBase.NumberAttribute;
            get(name: "expireson"): XrmBase.DateAttribute;
            get(name: "netprice"): XrmBase.NumberAttribute;
            get(name: "originatingcontract"): XrmBase.LookupAttribute<"contract">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: "serviceaddress"): XrmBase.LookupAttribute<"customeraddress">;
            get(name: "title"): XrmBase.StringAttribute;
            get(name: "totaldiscount"): XrmBase.NumberAttribute;
            get(name: "totalprice"): XrmBase.NumberAttribute;
            get(name: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
            get(name: "usediscountaspercentage"): XrmBase.OptionSetAttribute<boolean>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "activeon"): XrmBase.DateControl;
            get(name: "billingcustomerid"): XrmBase.LookupControl<"account" | "contact">;
            get(name: "billingendon"): XrmBase.DateControl;
            get(name: "billingfrequencycode"): XrmBase.OptionSetControl<contract_billingfrequencycode>;
            get(name: "billingstarton"): XrmBase.DateControl;
            get(name: "billtoaddress"): XrmBase.LookupControl<"customeraddress">;
            get(name: "cancelon"): XrmBase.DateControl;
            get(name: "Contract_lines"): XrmBase.SubGridControl<"contractdetail">;
            get(name: "contractlanguage"): XrmBase.StringControl;
            get(name: "contractnumber"): XrmBase.StringControl;
            get(name: "contractservicelevelcode"): XrmBase.OptionSetControl<contract_contractservicelevelcode>;
            get(name: "contracttemplateid"): XrmBase.LookupControl<"contracttemplate">;
            get(name: "customerid"): XrmBase.LookupControl<"account" | "contact">;
            get(name: "duration"): XrmBase.NumberControl;
            get(name: "expireson"): XrmBase.DateControl;
            get(name: "netprice"): XrmBase.NumberControl;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "originatingcontract"): XrmBase.LookupControl<"contract">;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "serviceaddress"): XrmBase.LookupControl<"customeraddress">;
            get(name: "title"): XrmBase.StringControl;
            get(name: "totaldiscount"): XrmBase.NumberControl;
            get(name: "totalprice"): XrmBase.NumberControl;
            get(name: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
            get(name: "usediscountaspercentage"): XrmBase.OptionSetControl<any>;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "general"): XrmBase.PageTab<Tabs.General>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Contract extends XrmBase.PageBase<Contract.Attributes, Contract.Tabs, Contract.Controls> {
        getAttribute(attributeName: "contractnumber"): XrmBase.StringAttribute;
        getAttribute(attributeName: "title"): XrmBase.StringAttribute;
        getAttribute(attributeName: "customerid"): XrmBase.LookupAttribute<"account" | "contact">;
        getAttribute(attributeName: "serviceaddress"): XrmBase.LookupAttribute<"customeraddress">;
        getAttribute(attributeName: "activeon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "expireson"): XrmBase.DateAttribute;
        getAttribute(attributeName: "duration"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "usediscountaspercentage"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "contractservicelevelcode"): XrmBase.OptionSetAttribute<contract_contractservicelevelcode>;
        getAttribute(attributeName: "originatingcontract"): XrmBase.LookupAttribute<"contract">;
        getAttribute(attributeName: "contracttemplateid"): XrmBase.LookupAttribute<"contracttemplate">;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "contractlanguage"): XrmBase.StringAttribute;
        getAttribute(attributeName: "billingcustomerid"): XrmBase.LookupAttribute<"account" | "contact">;
        getAttribute(attributeName: "billtoaddress"): XrmBase.LookupAttribute<"customeraddress">;
        getAttribute(attributeName: "billingstarton"): XrmBase.DateAttribute;
        getAttribute(attributeName: "billingendon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "billingfrequencycode"): XrmBase.OptionSetAttribute<contract_billingfrequencycode>;
        getAttribute(attributeName: "cancelon"): XrmBase.DateAttribute;
        getAttribute(attributeName: "transactioncurrencyid"): XrmBase.LookupAttribute<"transactioncurrency">;
        getAttribute(attributeName: "totalprice"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "totaldiscount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "netprice"): XrmBase.NumberAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "contractnumber"): XrmBase.StringControl;
        getControl(controlName: "title"): XrmBase.StringControl;
        getControl(controlName: "customerid"): XrmBase.LookupControl<"account" | "contact">;
        getControl(controlName: "serviceaddress"): XrmBase.LookupControl<"customeraddress">;
        getControl(controlName: "activeon"): XrmBase.DateControl;
        getControl(controlName: "expireson"): XrmBase.DateControl;
        getControl(controlName: "duration"): XrmBase.NumberControl;
        getControl(controlName: "usediscountaspercentage"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "contractservicelevelcode"): XrmBase.OptionSetControl<contract_contractservicelevelcode>;
        getControl(controlName: "originatingcontract"): XrmBase.LookupControl<"contract">;
        getControl(controlName: "contracttemplateid"): XrmBase.LookupControl<"contracttemplate">;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "contractlanguage"): XrmBase.StringControl;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "Contract_lines"): XrmBase.SubGridControl<"contractdetail">;
        getControl(controlName: "billingcustomerid"): XrmBase.LookupControl<"account" | "contact">;
        getControl(controlName: "billtoaddress"): XrmBase.LookupControl<"customeraddress">;
        getControl(controlName: "billingstarton"): XrmBase.DateControl;
        getControl(controlName: "billingendon"): XrmBase.DateControl;
        getControl(controlName: "billingfrequencycode"): XrmBase.OptionSetControl<contract_billingfrequencycode>;
        getControl(controlName: "cancelon"): XrmBase.DateControl;
        getControl(controlName: "transactioncurrencyid"): XrmBase.LookupControl<"transactioncurrency">;
        getControl(controlName: "totalprice"): XrmBase.NumberControl;
        getControl(controlName: "totaldiscount"): XrmBase.NumberControl;
        getControl(controlName: "netprice"): XrmBase.NumberControl;
        getControl(controlName: string): undefined;
    }
}
