var madmv = window.madmv || {};
(function () {

    this.bringOwnerAge = function (executionContext) {
        var formContext = executionContext.getFormContext();

        //sContactID = "bc5370c9-73e0-e911-a833-000d3a3b1dde";

        if (formContext.getAttribute("madmv_ownerinfo").getValue()) {
            var vcontactid = new Array;
            vcontactid = formContext.getAttribute("madmv_ownerinfo").getValue();
            var sContactID = vcontactid[0].id;
            sContactID = sContactID.replace("{", "");
            sContactID = sContactID.replace("}", "");


            var req = new XMLHttpRequest();
            req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v9.1/madmv_ma_customers(" + sContactID + ")?$select=madmv_age", true);
            req.setRequestHeader("OData-MaxVersion", "4.0");
            req.setRequestHeader("OData-Version", "4.0");
            req.setRequestHeader("Accept", "application/json");
            req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
            req.onreadystatechange = function () {
                if (this.readyState === 4) {
                    req.onreadystatechange = null;
                    if (this.status === 200) {
                        var result = JSON.parse(this.response);
                        if (result["madmv_age"])
                            var madmv_age = result["madmv_age"];
                        //var madmv_age_formatted = result["madmv_age@OData.Community.Display.V1.FormattedValue"];

                        formContext.getAttribute("madmv_age").setValue(madmv_age);

                        formContext.data.entity.save();

                    } else {
                        Xrm.Utility.alertDialog(this.statusText);
                    }
                }
            };
            req.send();
        }
    }

    this.bringCoOwnerAge = function (executionContext) {
        var formContext = executionContext.getFormContext();

        //sContactID = "bc5370c9-73e0-e911-a833-000d3a3b1dde";

        if (formContext.getAttribute("madmv_coownerinfo").getValue()) {
            var vcontactid = new Array;
            vcontactid = formContext.getAttribute("madmv_coownerinfo").getValue();
            var sContactID = vcontactid[0].id;
            sContactID = sContactID.replace("{", "");
            sContactID = sContactID.replace("}", "");



            var req = new XMLHttpRequest();
            req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v9.1/madmv_ma_customers(" + sContactID + ")?$select=madmv_age", true);
            req.setRequestHeader("OData-MaxVersion", "4.0");
            req.setRequestHeader("OData-Version", "4.0");
            req.setRequestHeader("Accept", "application/json");
            req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
            req.onreadystatechange = function () {
                if (this.readyState === 4) {
                    req.onreadystatechange = null;
                    if (this.status === 200) {
                        var result = JSON.parse(this.response);
                        if (result["madmv_age"])
                            var madmv_age = result["madmv_age"];
                        //var madmv_age_formatted = result["madmv_age@OData.Community.Display.V1.FormattedValue"];
                        formContext.getAttribute("madmv_coownerage").setValue(madmv_age);

                        formContext.data.entity.save();
                    } else {
                        Xrm.Utility.alertDialog(this.statusText);
                    }
                }
            };
            req.send();
        }
    }
    
}).call(madmv);









