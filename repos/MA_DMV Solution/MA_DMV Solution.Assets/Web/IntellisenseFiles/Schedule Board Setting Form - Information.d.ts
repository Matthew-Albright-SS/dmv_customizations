declare namespace Form.msdyn_scheduleboardsetting.Main {
    namespace Information {
        namespace Tabs {
        }
        interface Attributes extends XrmBase.AttributeCollectionBase {
            get(name: "msdyn_bookbasedon"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_customtabname"): XrmBase.StringAttribute;
            get(name: "msdyn_customtabwebresource"): XrmBase.StringAttribute;
            get(name: "msdyn_fullybookedcolor"): XrmBase.StringAttribute;
            get(name: "msdyn_hidecancelled"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_issynchronizeresources"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_mapviewtabplacement"): XrmBase.OptionSetAttribute<boolean>;
            get(name: "msdyn_notbookedcolor"): XrmBase.StringAttribute;
            get(name: "msdyn_ordernumber"): XrmBase.NumberAttribute;
            get(name: "msdyn_organizationalunittooltipsviewid"): XrmBase.StringAttribute;
            get(name: "msdyn_organizationalunitviewid"): XrmBase.StringAttribute;
            get(name: "msdyn_overbookedcolor"): XrmBase.StringAttribute;
            get(name: "msdyn_partiallybookedcolor"): XrmBase.StringAttribute;
            get(name: "msdyn_saavailableicon"): XrmBase.StringAttribute;
            get(name: "msdyn_sapartiallyavailableicon"): XrmBase.StringAttribute;
            get(name: "msdyn_saunavailableicon"): XrmBase.StringAttribute;
            get(name: "msdyn_scheduleralertsview"): XrmBase.StringAttribute;
            get(name: "msdyn_schedulerresourcedetailsview"): XrmBase.StringAttribute;
            get(name: "msdyn_schedulerresourcetooltipview"): XrmBase.StringAttribute;
            get(name: "msdyn_settings"): XrmBase.StringAttribute;
            get(name: "msdyn_sharetype"): XrmBase.OptionSetAttribute<msdyn_scheduleboardsetting_msdyn_sharetype>;
            get(name: "msdyn_tabname"): XrmBase.StringAttribute;
            get(name: "msdyn_unscheduledrequirementsviewid"): XrmBase.StringAttribute;
            get(name: "msdyn_unscheduledwopagereccount"): XrmBase.NumberAttribute;
            get(name: "msdyn_workinghourscolor"): XrmBase.StringAttribute;
            get(name: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
            get(name: string): undefined;
            get(): XrmBase.Attribute<any>[];
            get(index: number): XrmBase.Attribute<any>;
            get(chooser: (item: XrmBase.Attribute<any>, index: number) => boolean): XrmBase.Attribute<any>[];
        }
        interface Controls extends XrmBase.ControlCollectionBase {
            get(name: "msdyn_bookbasedon"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_customtabname"): XrmBase.StringControl;
            get(name: "msdyn_customtabwebresource"): XrmBase.StringControl;
            get(name: "msdyn_fullybookedcolor"): XrmBase.StringControl;
            get(name: "msdyn_hidecancelled"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_issynchronizeresources"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_mapviewtabplacement"): XrmBase.OptionSetControl<any>;
            get(name: "msdyn_notbookedcolor"): XrmBase.StringControl;
            get(name: "msdyn_ordernumber"): XrmBase.NumberControl;
            get(name: "msdyn_organizationalunittooltipsviewid"): XrmBase.StringControl;
            get(name: "msdyn_organizationalunitviewid"): XrmBase.StringControl;
            get(name: "msdyn_overbookedcolor"): XrmBase.StringControl;
            get(name: "msdyn_partiallybookedcolor"): XrmBase.StringControl;
            get(name: "msdyn_saavailableicon"): XrmBase.StringControl;
            get(name: "msdyn_sapartiallyavailableicon"): XrmBase.StringControl;
            get(name: "msdyn_saunavailableicon"): XrmBase.StringControl;
            get(name: "msdyn_scheduleralertsview"): XrmBase.StringControl;
            get(name: "msdyn_schedulerresourcedetailsview"): XrmBase.StringControl;
            get(name: "msdyn_schedulerresourcetooltipview"): XrmBase.StringControl;
            get(name: "msdyn_settings"): XrmBase.StringControl;
            get(name: "msdyn_sharetype"): XrmBase.OptionSetControl<msdyn_scheduleboardsetting_msdyn_sharetype>;
            get(name: "msdyn_tabname"): XrmBase.StringControl;
            get(name: "msdyn_unscheduledrequirementsviewid"): XrmBase.StringControl;
            get(name: "msdyn_unscheduledwopagereccount"): XrmBase.NumberControl;
            get(name: "msdyn_workinghourscolor"): XrmBase.StringControl;
            get(name: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
            get(name: "WebResource_FullyBookedColor"): XrmBase.WebResourceControl;
            get(name: "WebResource_NotBookedColor"): XrmBase.WebResourceControl;
            get(name: "WebResource_OverbookedColor"): XrmBase.WebResourceControl;
            get(name: "WebResource_PartiallyBookedColor"): XrmBase.WebResourceControl;
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
        getAttribute(attributeName: "msdyn_tabname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_sharetype"): XrmBase.OptionSetAttribute<msdyn_scheduleboardsetting_msdyn_sharetype>;
        getAttribute(attributeName: "msdyn_ordernumber"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "ownerid"): XrmBase.LookupAttribute<"systemuser" | "team">;
        getAttribute(attributeName: "msdyn_workinghourscolor"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_issynchronizeresources"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_hidecancelled"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_customtabwebresource"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_customtabname"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_scheduleralertsview"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_unscheduledwopagereccount"): XrmBase.NumberAttribute;
        getAttribute(attributeName: "msdyn_schedulerresourcetooltipview"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_schedulerresourcedetailsview"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_organizationalunittooltipsviewid"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_organizationalunitviewid"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_unscheduledrequirementsviewid"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_mapviewtabplacement"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_fullybookedcolor"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_partiallybookedcolor"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_overbookedcolor"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_notbookedcolor"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_saavailableicon"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_bookbasedon"): XrmBase.OptionSetAttribute<boolean>;
        getAttribute(attributeName: "msdyn_sapartiallyavailableicon"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_saunavailableicon"): XrmBase.StringAttribute;
        getAttribute(attributeName: "msdyn_settings"): XrmBase.StringAttribute;
        getAttribute(attributeName: string): undefined;
        getControl(controlName: "msdyn_tabname"): XrmBase.StringControl;
        getControl(controlName: "msdyn_sharetype"): XrmBase.OptionSetControl<msdyn_scheduleboardsetting_msdyn_sharetype>;
        getControl(controlName: "msdyn_ordernumber"): XrmBase.NumberControl;
        getControl(controlName: "ownerid"): XrmBase.LookupControl<"systemuser" | "team">;
        getControl(controlName: "msdyn_workinghourscolor"): XrmBase.StringControl;
        getControl(controlName: "msdyn_issynchronizeresources"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_hidecancelled"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_customtabwebresource"): XrmBase.StringControl;
        getControl(controlName: "msdyn_customtabname"): XrmBase.StringControl;
        getControl(controlName: "msdyn_scheduleralertsview"): XrmBase.StringControl;
        getControl(controlName: "msdyn_unscheduledwopagereccount"): XrmBase.NumberControl;
        getControl(controlName: "msdyn_schedulerresourcetooltipview"): XrmBase.StringControl;
        getControl(controlName: "msdyn_schedulerresourcedetailsview"): XrmBase.StringControl;
        getControl(controlName: "msdyn_organizationalunittooltipsviewid"): XrmBase.StringControl;
        getControl(controlName: "msdyn_organizationalunitviewid"): XrmBase.StringControl;
        getControl(controlName: "msdyn_unscheduledrequirementsviewid"): XrmBase.StringControl;
        getControl(controlName: "msdyn_mapviewtabplacement"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "WebResource_FullyBookedColor"): XrmBase.WebResourceControl;
        getControl(controlName: "WebResource_PartiallyBookedColor"): XrmBase.WebResourceControl;
        getControl(controlName: "WebResource_OverbookedColor"): XrmBase.WebResourceControl;
        getControl(controlName: "WebResource_NotBookedColor"): XrmBase.WebResourceControl;
        getControl(controlName: "msdyn_fullybookedcolor"): XrmBase.StringControl;
        getControl(controlName: "msdyn_partiallybookedcolor"): XrmBase.StringControl;
        getControl(controlName: "msdyn_overbookedcolor"): XrmBase.StringControl;
        getControl(controlName: "msdyn_notbookedcolor"): XrmBase.StringControl;
        getControl(controlName: "msdyn_saavailableicon"): XrmBase.StringControl;
        getControl(controlName: "msdyn_bookbasedon"): XrmBase.OptionSetControl<any>;
        getControl(controlName: "msdyn_sapartiallyavailableicon"): XrmBase.StringControl;
        getControl(controlName: "msdyn_saunavailableicon"): XrmBase.StringControl;
        getControl(controlName: "msdyn_settings"): XrmBase.StringControl;
        getControl(controlName: string): undefined;
    }
}
