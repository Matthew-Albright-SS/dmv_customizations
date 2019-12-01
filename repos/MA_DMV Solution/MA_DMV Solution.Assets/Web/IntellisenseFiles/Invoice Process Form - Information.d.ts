declare namespace Form.msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d.Main {
    namespace Information {
        namespace Tabs {
            interface StageStep2 extends XrmBase.SectionCollectionBase {
                get(name: "StageStep2_section1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface StageStep6 extends XrmBase.SectionCollectionBase {
                get(name: "StageStep6_section1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface StageStep9 extends XrmBase.SectionCollectionBase {
                get(name: "StageStep9_section1"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "bpf_invoice_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d:customerid"): XrmBase.BaseControl;
            get(name: "bpf_invoice_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d:salesorderid"): XrmBase.BaseControl;
            get(name: "bpf_invoice_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d:totalamount"): XrmBase.NumberControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "StageStep2"): XrmBase.PageTab<Tabs.StageStep2>;
            get(name: "StageStep6"): XrmBase.PageTab<Tabs.StageStep6>;
            get(name: "StageStep9"): XrmBase.PageTab<Tabs.StageStep9>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "bpf_invoice_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d:salesorderid"): XrmBase.BaseControl;
        getControl(controlName: "bpf_invoice_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d:totalamount"): XrmBase.NumberControl;
        getControl(controlName: "bpf_invoice_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d:customerid"): XrmBase.BaseControl;
        getControl(controlName: string): undefined;
    }
}
