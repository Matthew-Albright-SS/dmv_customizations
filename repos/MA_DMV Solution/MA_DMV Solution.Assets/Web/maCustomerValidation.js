var madmv = window.madmv || {};
(function () {
    // Define some global variables
    var myUniqueId = "_myUniqueId"; // Define an ID for the notification
    var currentUserName = Xrm.Utility.getGlobalContext().userSettings.userName; // get current user name
    var nameInvalidMessage = currentUserName + ": The name field has invalid characters";
    var ssnInvalidMessage = currentUserName + ": Your SSN is not A valid format";
    var zipInvalidMessage = currentUserName + ": Your ZIP code is not A valid format";

    this.combineNames = function (executionContext) {
        var formContext = executionContext.getFormContext();

        var firstName = formContext.getAttribute("madmv_firstname").getValue();
        var lastName = formContext.getAttribute("madmv_lastname").getValue();

        var fullName = firstName.concat(' ', lastName); 

        formContext.getAttribute("madmv_fullname").setValue(fullName);
    }

    this.validateFirstName = function (executionContext) {
        var formContext = executionContext.getFormContext();

        var name = formContext.getAttribute("madmv_firstname").getValue();
        var regName = /^[A-zÀ-ú\s\-\']+$/;

        if (regName.test(name)) {
            formContext.getControl("madmv_firstname").clearNotification(myUniqueId);
        } else {
            formContext.getControl("madmv_firstname").setNotification(nameInvalidMessage, myUniqueId);
        }
    }

    this.validateLastName = function (executionContext) {
        var formContext = executionContext.getFormContext();

        var name = formContext.getAttribute("madmv_lastname").getValue();
        var regName = /^[A-zÀ-ú\s\-\']+$/;

        if (regName.test(name)) {
            formContext.getControl("madmv_lastname").clearNotification(myUniqueId);
        } else {
            formContext.getControl("madmv_lastname").setNotification(nameInvalidMessage, myUniqueId);
        }
    }

    this.validateSSN = function (executionContext) {
        var formContext = executionContext.getFormContext();

        var ssn = formContext.getAttribute("madmv_cssn").getValue();

        var ssnPattern = /^[0-9]{3}\-?[0-9]{2}\-?[0-9]{4}$/;
        if (ssnPattern.test(ssn)) {
            formContext.getControl("madmv_cssn").clearNotification(myUniqueId);
        } else {
            formContext.getControl("madmv_cssn").setNotification(ssnInvalidMessage, myUniqueId);
        }
    }

    this.validateZip = function (executionContext) {
        var formContext = executionContext.getFormContext();

        var zip = formContext.getAttribute("madmv_zippostalcode").getValue();

        var zipPostalPattern = /^[0-9]{5}(\-[0-9]{4})?$/;

        if (zipPostalPattern.test(zip)) {
            formContext.getControl("madmv_zippostalcode").clearNotification(myUniqueId);
        } else {
            formContext.getControl("madmv_zippostalcode").setNotification(zipInvalidMessage, myUniqueId);
        }
    }

}).call(madmv);