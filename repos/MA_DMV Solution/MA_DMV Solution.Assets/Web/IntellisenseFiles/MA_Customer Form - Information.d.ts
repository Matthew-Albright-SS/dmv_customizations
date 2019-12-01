declare namespace Form.madmv_ma_customer.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "madmv_age"): XrmBase.NumberAttribute;
            get(name: "madmv_birthdate"): XrmBase.DateAttribute;
            get(name: "madmv_city"): XrmBase.StringAttribute;
            get(name: "madmv_email"): XrmBase.StringAttribute;
            get(name: "madmv_firstname"): XrmBase.StringAttribute;
            get(name: "madmv_fullname"): XrmBase.StringAttribute;
            get(name: "madmv_hiddendifday"): XrmBase.NumberAttribute;
            get(name: "madmv_lastname"): XrmBase.StringAttribute;
            get(name: "madmv_phonenumber"): XrmBase.StringAttribute;
            get(name: "madmv_stateprovince"): XrmBase.StringAttribute;
            get(name: "madmv_street1"): XrmBase.StringAttribute;
            get(name: "madmv_street2"): XrmBase.StringAttribute;
            get(name: "madmv_zippostalcode"): XrmBase.StringAttribute;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "madmv_age"): XrmBase.NumberControl;
            get(name: "madmv_birthdate"): XrmBase.DateControl;
            get(name: "madmv_city"): XrmBase.StringControl;
            get(name: "madmv_email"): XrmBase.StringControl;
            get(name: "madmv_firstname"): XrmBase.StringControl;
            get(name: "madmv_fullname"): XrmBase.StringControl;
            get(name: "madmv_hiddendifday"): XrmBase.NumberControl;
            get(name: "madmv_lastname"): XrmBase.StringControl;
            get(name: "madmv_phonenumber"): XrmBase.StringControl;
            get(name: "madmv_stateprovince"): XrmBase.StringControl;
            get(name: "madmv_street1"): XrmBase.StringControl;
            get(name: "madmv_street2"): XrmBase.StringControl;
            get(name: "madmv_zippostalcode"): XrmBase.StringControl;
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
        getAttribute(attributeName: "madmv_fullname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "madmv_firstname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "madmv_lastname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "madmv_birthdate"): XrmBase.DateAttribute;
        getAttribute(attributeName: "madmv_hiddendifday"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "madmv_age"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "madmv_phonenumber"): XrmBase.StringAttribute;
        getAttribute(attributeName: "madmv_email"): XrmBase.StringAttribute;
        getAttribute(attributeName: "madmv_street1"): XrmBase.StringAttribute;
        getAttribute(attributeName: "madmv_street2"): XrmBase.StringAttribute;
        getAttribute(attributeName: "madmv_city"): XrmBase.StringAttribute;
        getAttribute(attributeName: "madmv_stateprovince"): XrmBase.StringAttribute;
        getAttribute(attributeName: "madmv_zippostalcode"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "madmv_fullname"): XrmBase.StringControl;
        getControl(controlName: "madmv_firstname"): XrmBase.StringControl;
        getControl(controlName: "madmv_lastname"): XrmBase.StringControl;
        getControl(controlName: "madmv_birthdate"): XrmBase.DateControl;
        getControl(controlName: "madmv_hiddendifday"): XrmBase.NumberControl;
        getControl(controlName: "madmv_age"): XrmBase.NumberControl;
        getControl(controlName: "madmv_phonenumber"): XrmBase.StringControl;
        getControl(controlName: "madmv_email"): XrmBase.StringControl;
        getControl(controlName: "madmv_street1"): XrmBase.StringControl;
        getControl(controlName: "madmv_street2"): XrmBase.StringControl;
        getControl(controlName: "madmv_city"): XrmBase.StringControl;
        getControl(controlName: "madmv_stateprovince"): XrmBase.StringControl;
        getControl(controlName: "madmv_zippostalcode"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
