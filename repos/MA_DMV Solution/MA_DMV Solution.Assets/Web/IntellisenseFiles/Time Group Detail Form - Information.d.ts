declare namespace Form.msdyn_timegroupdetail.Main {
    namespace Information {
        namespace Tabs {
            interface b9c0a5377a9041409d0a0fc166dde719 extends XrmBase.SectionCollectionBase {
                get(name: "{983fec4f-2163-4ea9-b2d8-ef05698ef6d8}"): XrmBase.PageSection;
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
            interface NotesTab extends XrmBase.SectionCollectionBase {
                get(name: string): undefined;
                get(): XrmBase.PageSection[];
                get(index: number): XrmBase.PageSection;
                get(chooser: (item: XrmBase.PageSection, index: number) => boolean): XrmBase.PageSection[];
            }
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_endtime"): XrmBase.DateAttribute;
            get(name: "msdyn_name"): XrmBase.StringAttribute;
            get(name: "msdyn_starttime"): XrmBase.DateAttribute;
            get(name: "msdyn_timegroupid"): XrmBase.LookupAttribute<"msdyn_timegroup">;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_endtime"): XrmBase.BaseControl;
            get(name: "msdyn_name"): XrmBase.StringControl;
            get(name: "msdyn_starttime"): XrmBase.BaseControl;
            get(name: "msdyn_timegroupid"): XrmBase.LookupControl<"msdyn_timegroup">;
            get(name: "notescontrol"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "WebResource_msdyn_endtime"): XrmBase.WebResourceControl;
            get(name: "WebResource_msdyn_starttime"): XrmBase.WebResourceControl;
            get(name: string): undefined;
            get(): XrmBase.BaseControl[];
            get(index: number): XrmBase.BaseControl;
            get(chooser: (item: XrmBase.BaseControl, index: number) => boolean): XrmBase.BaseControl[];
        }
        interface Tabs extends XrmBase.TabCollectionBase {
            get(name: "{b9c0a537-7a90-4140-9d0a-0fc166dde719}"): XrmBase.PageTab<Tabs.b9c0a5377a9041409d0a0fc166dde719>;
            get(name: "NotesTab"): XrmBase.PageTab<Tabs.NotesTab>;
            get(name: string): undefined;
            get(): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
            get(index: number): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>;
            get(chooser: (item: XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>, index: number) => boolean): XrmBase.PageTab<XrmBase.Collection<XrmBase.PageSection>>[];
        }
    }
    interface Information extends XrmBase.PageBase<Information.Attributes, Information.Tabs, Information.Controls> {
        getAttribute(attributeName: "msdyn_name"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_timegroupid"): XrmBase.LookupAttribute<"msdyn_timegroup">;
        getAttribute(attributeName: "msdyn_starttime"): XrmBase.DateAttribute;
        getAttribute(attributeName: "msdyn_endtime"): XrmBase.DateAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_name"): XrmBase.StringControl;
        getControl(controlName: "msdyn_timegroupid"): XrmBase.LookupControl<"msdyn_timegroup">;
        getControl(controlName: "WebResource_msdyn_starttime"): XrmBase.WebResourceControl;
        getControl(controlName: "WebResource_msdyn_endtime"): XrmBase.WebResourceControl;
        getControl(controlName: "msdyn_starttime"): XrmBase.BaseControl;
        getControl(controlName: "msdyn_endtime"): XrmBase.BaseControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "notescontrol"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
