declare namespace Form.msdyn_3dmodel.Main {
    namespace Information {
        namespace Tabs {
            interface _3dModelGeneralTab extends XrmBase.SectionCollectionBase {
                get(name: "3dModelNotesSection"): XrmBase.PageSection;
                get(name: "3dModelViewerSection"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_filetype"): XrmBase.OptionSetAttribute<msdyn_3dmodel_msdyn_filetype>;
            get(name: "msdyn_fileurl"): XrmBase.StringAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_storagetype"): XrmBase.OptionSetAttribute<msdyn_3dmodel_msdyn_storagetype>;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_filetype"): XrmBase.OptionSetControl<msdyn_3dmodel_msdyn_filetype>;
            get(name: "msdyn_fileurl"): XrmBase.StringControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_storagetype"): XrmBase.OptionSetControl<msdyn_3dmodel_msdyn_storagetype>;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "WebResource_3dViewer"): XrmBase.WebResourceControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "3dModelGeneralTab"): XrmBase.PageTab<Tabs._3dModelGeneralTab>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_storagetype"): XrmBase.OptionSetAttribute<msdyn_3dmodel_msdyn_storagetype>;
        getAttribute(attributeName: "msdyn_fileurl"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_filetype"): XrmBase.OptionSetAttribute<msdyn_3dmodel_msdyn_filetype>;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_storagetype"): XrmBase.OptionSetControl<msdyn_3dmodel_msdyn_storagetype>;
        getControl(controlName: "msdyn_fileurl"): XrmBase.StringControl;
        getControl(controlName: "msdyn_filetype"): XrmBase.OptionSetControl<msdyn_3dmodel_msdyn_filetype>;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: "WebResource_3dViewer"): XrmBase.WebResourceControl;
        getControl(controlName: string): undefined;
    }
}
