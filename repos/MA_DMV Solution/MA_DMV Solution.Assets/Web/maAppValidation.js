var madmv = window.madmv || {};
(function () {
    // Define some global variables
    var myUniqueId = "_myUniqueId"; // Define an ID for the notification
    var myUniqueIdTwo = "_myUniqueIdTwo";
    var currentUserName = Xrm.Utility.getGlobalContext().userSettings.userName; // get current user name
    //var message = currentUserName + ": Your JavaScript code in action!";
    var ageInvalidMessage = currentUserName + ": Contact's Age must be at least 16";
    var ssnNotMatch = currentUserName + ": The SSN you entered does not match the customer's SSN";
    var ssnInvalidMessage = currentUserName + ": The SSN format is invalid";
    var zipInvalidMessage = currentUserName + ": Your ZIP code is not A valid format";


    this.hideTabs = function (executionContext) {
        var formContext = executionContext.getFormContext();

        if (formContext.getAttribute("madmv_applicationtype")) {

            var applicationType = formContext.getAttribute("madmv_applicationtype").getValue();
            formContext.ui.tabs.get("vehicleRegistrationTab").setVisible(false);
            formContext.ui.tabs.get("addressChangeTab").setVisible(false);
            formContext.ui.tabs.get("newDrivingLicenseTab").setVisible(false);
            formContext.ui.tabs.get("drivingLicenseRenewelTab").setVisible(false);


            if (applicationType == 876570000) {
                formContext.ui.tabs.get("vehicleRegistrationTab").setVisible(true);
            } else if (applicationType == 876570001) {
                formContext.ui.tabs.get("addressChangeTab").setVisible(true);
            } else if (applicationType == 876570002) {
                formContext.ui.tabs.get("newDrivingLicenseTab").setVisible(true);
            } else if (applicationType == 876570003) {
                formContext.ui.tabs.get("drivingLicenseRenewelTab").setVisible(true);
            }

        } else {
            setTimeout(madmv.hideTabs(executionContext), 2500);
        }
    }
    
    this.hideOther = function (executionContext) {
        var formContext = executionContext.getFormContext();

        if (formContext.getAttribute("madmv_registrationtype")) {
            var registrationType = formContext.getAttribute("madmv_registrationtype").getValue();

            if (registrationType == 876570006) {
                formContext.getControl("madmv_describeother").setVisible(true);
                formContext.getControl("header_process_madmv_describeother").setVisible(true);
                formContext.getAttribute("madmv_describeother").setRequiredLevel("required");
            } else {
                formContext.getControl("madmv_describeother").setVisible(false);
                formContext.getControl("header_process_madmv_describeother").setVisible(false);
                formContext.getAttribute("madmv_describeother").setValue(null);
                formContext.getAttribute("madmv_describeother").setRequiredLevel("none");

            }
        } else {
            setTimeout(madmv.showFieldIfRegOther(executionContext), 2500);
        }

    }

    this.validateSSN = function (executionContext) {
        var formContext = executionContext.getFormContext();

        var ssn = formContext.getAttribute("madmv_ssn").getValue();
        var hiddenSsn = formContext.getAttribute("madmv_hiddenssntocompare").getValue();

        var ssnPattern = /^[0-9]{3}\-?[0-9]{2}\-?[0-9]{4}$/;
        if (ssnPattern.test(ssn)) {
            formContext.getControl("madmv_ssn").clearNotification(myUniqueId);
        } else {
            formContext.getControl("madmv_ssn").setNotification(ssnInvalidMessage, myUniqueId);
        }

        if (ssn == hiddenSsn) {
            formContext.getControl("madmv_ssn").clearNotification(myUniqueIdTwo);
        } else {
            formContext.getControl("madmv_ssn").setNotification(ssnNotMatch, myUniqueIdTwo);
        }
    }

    this.validateAge = function (executionContext) {
        var formContext = executionContext.getFormContext();

        var age = formContext.getAttribute("madmv_age").getValue();

        if (age = "" || age <= 15) {
            formContext.getControl("madmv_age").setNotification(ageInvalidMessage, myUniqueId);
            formContext.getAttribute("madmv_contactinfoverification").setValue(false);
        } else {
            formContext.getControl("madmv_age").clearNotification(myUniqueId);
        }
    }

    this.validateZip = function (executionContext) {
        var formContext = executionContext.getFormContext();

        var zip = formContext.getAttribute("madmv_newzip").getValue();

        var zipPostalPattern = /^[0-9]{5}(\-[0-9]{4})?$/;

        if (zipPostalPattern.test(zip)) {
            formContext.getControl("madmv_newzip").clearNotification(myUniqueId);
        } else {
            formContext.getControl("madmv_newzip").setNotification(zipInvalidMessage, myUniqueId);
        }
    }

    this.resetCoOwnerAge = function (executionContext) {
        var formContext = executionContext.getFormContext();

        formContext.getAttribute("madmv_coownerage").setValue(null);
        formContext.getControl("madmv_coownerage").clearNotification(myUniqueId);
        formContext.getAttribute("madmv_contactinfoverification").setValue(false);
    }

    this.resetOwnerAge = function (executionContext) {
        var formContext = executionContext.getFormContext();

        formContext.getAttribute("madmv_age").setValue(null);
        formContext.getControl("madmv_age").clearNotification(myUniqueId);
        formContext.getAttribute("madmv_contactinfoverification").setValue(false);
    }

    this.shareWithManager = function() {
        //var formContext = executionContext.getFormContext();

        //TODO check if already shared

        var Id = Xrm.Page.data.entity.getId().replace('{', '').replace('}', '');
        console.log(Xrm.Page.context.getUserId());
        //var managerId = getCurrentUserManagerId();

        var parameters = {
            "Target":{
               "madmv_ma_applicationid":Id, // Opp ID
               "@odata.type":"Microsoft.Dynamics.CRM.madmv_ma_application"
            },
            "PrincipalAccess":{
               "Principal":{
                  "systemuserid":"C5A7CBD3-F806-EA11-A825-000D3A33469E", // User ID
                  //put teamid here and Guid of team if you want to share with team
                  "@odata.type":"Microsoft.Dynamics.CRM.systemuser"
               },
               "AccessMask":"ReadAccess, WriteAccess, AppendAccess, AppendToAccess,  CreateAccess, DeleteAccess, ShareAccess, AssignAccess"
             //full list of privileges is "ReadAccess, WriteAccess, AppendAccess, AppendToAccess,  CreateAccess, DeleteAccess, ShareAccess, AssignAccess"
            }
         };

         console.log(Id);
         console.log(parameters);
 
         var context;
 
         if (typeof GetGlobalContext === "function") {
             context = GetGlobalContext();
         } else {
             context = Xrm.Page.context;
         }
          
         var req = new XMLHttpRequest();
         req.open("POST", context.getClientUrl() + "/api/data/v9.0/GrantAccess", true);
            req.setRequestHeader("OData-MaxVersion", "4.0");
            req.setRequestHeader("OData-Version", "4.0");
            req.setRequestHeader("Accept", "application/json");
            req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            req.onreadystatechange = function () {
                if (this.readyState === 4) {
                    req.onreadystatechange = null;
                    if (this.status === 204) {
                        //Success - No Return Data - Do Something
                    } else {
                        var errorText = this.responseText;
                        //Error and errorText variable contains an error - do something with it
                    }
                }
            };
            req.send(JSON.stringify(parameters));
    }



    function getCurrentUserManagerId() {
        var serverUrl;
        if (Xrm.Page.context.getClientUrl !== undefined) {
            serverUrl = Xrm.Page.context.getClientUrl();
        } else {
            serverUrl = Xrm.Page.context.getServerUrl();
        }
        var ODataPath = serverUrl + "/XRMServices/2011/OrganizationData.svc"; 
        var userRequest = new XMLHttpRequest(); 
        userRequest.open("GET", ODataPath + "/SystemUserSet(guid'" + Xrm.Page.context.getUserId() + "')", false); 
        userRequest.setRequestHeader("Accept", "application/json"); 
        userRequest.setRequestHeader("Content-Type", "application/json; charset=utf-8"); 
        userRequest.send();
        if (userRequest.status === 200) {
            var retrievedUser = JSON.parse(userRequest.responseText).d; 
            var userManagerName = retrievedUser.Id;
            return userManagerName;
        }
        else {
            return "error";
        }
    }
     
    



    this.callCustomAction = function () {
        var actionName = "madmv_MA_CallPlugin";

        var req = new XMLHttpRequest();
        req.open("POST", encodeURI(Xrm.Page.context.getClientUrl() + "/api/data/v8.2/" + actionName), true);
        req.setRequestHeader("Accept", "application/json");
        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        req.setRequestHeader("OData-MaxVersion", "4.0");
        req.setRequestHeader("OData-Version", "4.0");
        req.onreadystatechange = function () {
            if (this.readyState == 4) {
                req.onreadystatechange = null;

                if (this.status == 200) {
                    var result = JSON.parse(this.response);
                    //alert(this.status);
                } else {
                    var error = JSON.parse(this.response).error;
                    alert(error.message);
                    //alert(this.status);
                }
            };

            req.send();
        }
    }
}).call(madmv);