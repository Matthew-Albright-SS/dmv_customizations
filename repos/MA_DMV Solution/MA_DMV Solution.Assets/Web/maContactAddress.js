var madmv = window.madmv || {};
(function () {
    // Define some global variables
    var myUniqueId = "_myUniqueId"; // Define an ID for the notification
    //var currentUserName = Xrm.Utility.getGlobalContext().userSettings.userName; // get current user name
    //var message = currentUserName + ": Your JavaScript code in action!";


    this.SubmitAddress = function (PrimaryControl) {
        var formContext = PrimaryControl;

        var Id = Xrm.Page.data.entity.getId().replace('{', '').replace('}', '');

        var vcontactid = new Array;
        vcontactid = formContext.getAttribute("madmv_ownerinfo").getValue();
        var sContactID = vcontactid[0].id;

        sContactID = sContactID.replace("{", "").replace("}", "");;

        //var applicationType = formContext.getAttribute("madmv_applicationtype").getValue();
        var appId = formContext.getAttribute("madmv_appid").getValue();
        var newStreetOne = formContext.getAttribute("madmv_newstreet1").getValue();
        var newStreetTwo = formContext.getAttribute("madmv_newstreet2").getValue();
        var newCity = formContext.getAttribute("madmv_newcity").getValue();
        var newState = formContext.getAttribute("madmv_newstate").getValue();
        var newZip = formContext.getAttribute("madmv_newzip").getValue();
        var newCountry = formContext.getAttribute("madmv_newcountry").getValue();




        var entity = {};
        entity.madmv_street1 = newStreetOne;
        entity.madmv_street2 = newStreetTwo;
        entity.madmv_city = newCity;
        entity.madmv_stateprovince = newState;
        entity.madmv_zippostalcode = newZip;
        entity.madmv_country = newCountry;

        var req = new XMLHttpRequest();
        req.open("PATCH", Xrm.Page.context.getClientUrl() + "/api/data/v9.1/madmv_ma_customers(" + sContactID + ")", true);
        req.setRequestHeader("OData-MaxVersion", "4.0");
        req.setRequestHeader("OData-Version", "4.0");
        req.setRequestHeader("Accept", "application/json");
        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        req.onreadystatechange = function () {
            if (this.readyState === 4) {
                req.onreadystatechange = null;
                if (this.status === 204) {
                    var entity2 = {};
                    entity2.madmv_street1 = newStreetOne;
                    entity2.madmv_street2 = newStreetTwo;
                    entity2.madmv_city = newCity;
                    entity2.madmv_state = newState;
                    entity2.madmv_zippostalcode = newZip;
                    entity2.madmv_country = newCountry;
                    //entity2.madmv_name = appId;

                    var req2 = new XMLHttpRequest();
                    req2.open("POST", Xrm.Page.context.getClientUrl() + "/api/data/v9.1/madmv_ma_contactaddresshistories", true);
                    req2.setRequestHeader("OData-MaxVersion", "4.0");
                    req2.setRequestHeader("OData-Version", "4.0");
                    req2.setRequestHeader("Accept", "application/json");
                    req2.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                    req2.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            req2.onreadystatechange = null;
                            if (this.status === 204) {
                                var uri = this.getResponseHeader("OData-EntityId");
                                var regExp = /\(([^)]+)\)/;
                                var matches = regExp.exec(uri);
                                var newEntityId = matches[1];
                                var association = {
                                    "@odata.id": Xrm.Page.context.getClientUrl() + "/api/data/v9.1/madmv_ma_contactaddresshistories(" + newEntityId + ")"
                                };
                                var req3 = new XMLHttpRequest();
                                req3.open("POST", Xrm.Page.context.getClientUrl() + "/api/data/v9.1/madmv_ma_customers(" + sContactID + ")/madmv_madmv_ma_customer_madmv_ma_contactaddresshistory_Contact/$ref", true);
                                req3.setRequestHeader("Accept", "application/json");
                                req3.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                                req3.setRequestHeader("OData-MaxVersion", "4.0");
                                req3.setRequestHeader("OData-Version", "4.0");
                                req3.onreadystatechange = function () {
                                    if (this.readyState === 4) {
                                        req3.onreadystatechange = null;
                                        if (this.status === 204 || this.status === 1223) {
                                            //Success - No Return Data - Do Something
                                        } else {
                                            Xrm.Utility.alertDialog(this.statusText);
                                        }
                                    }
                                };
                                req3.send(JSON.stringify(association));

                            } else {
                                Xrm.Utility.alertDialog(this.statusText);
                            }
                        }
                    };
                    req2.send(JSON.stringify(entity2));
                } else {
                    Xrm.Utility.alertDialog(this.statusText);
                }
            }
        };
        req.send(JSON.stringify(entity));



        var entity = {};
        //entity["regardingobjectid@odata.bind"] = "/madmv_ma_applications(7c3f130b-d9e5-e911-a833-000d3a3b1dde)";
        entity.subject = "Address change has been processed";

        var req4 = new XMLHttpRequest();
        req4.open("POST", Xrm.Page.context.getClientUrl() + "/api/data/v9.1/tasks", true);
        req4.setRequestHeader("OData-MaxVersion", "4.0");
        req4.setRequestHeader("OData-Version", "4.0");
        req4.setRequestHeader("Accept", "application/json");
        req4.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        req4.onreadystatechange = function () {
            if (this.readyState === 4) {
                req4.onreadystatechange = null;
                if (this.status === 204) {
                    var uri = this.getResponseHeader("OData-EntityId");
                    var regExp = /\(([^)]+)\)/;
                    var matches = regExp.exec(uri);
                    var newEntityId = matches[1];

                    var association = {
                        "@odata.id": Xrm.Page.context.getClientUrl() + "/api/data/v9.1/tasks(" + newEntityId + ")"
                    };
                    var req = new XMLHttpRequest();
                    req.open("POST", Xrm.Page.context.getClientUrl() + "/api/data/v9.1/madmv_ma_applications(" + Id + ")/madmv_ma_application_Tasks/$ref", true);
                    req.setRequestHeader("Accept", "application/json");
                    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                    req.setRequestHeader("OData-MaxVersion", "4.0");
                    req.setRequestHeader("OData-Version", "4.0");
                    req.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            req.onreadystatechange = null;
                            if (this.status === 204 || this.status === 1223) {
                                //Success - No Return Data - Do Something
                            } else {
                                Xrm.Utility.alertDialog(this.statusText);
                            }
                        }
                    };
                    req.send(JSON.stringify(association));
                } else {
                    Xrm.Utility.alertDialog(this.statusText);
                }
            }
        };
        req4.send(JSON.stringify(entity));
    }
}).call(madmv);

