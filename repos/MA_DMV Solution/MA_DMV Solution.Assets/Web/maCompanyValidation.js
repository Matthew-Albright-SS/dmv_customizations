var madmv = window.madmv || {};
(function () {
    // Define some global variables
    var myUniqueId = "_myUniqueId"; // Define an ID for the notification
    var currentUserName = Xrm.Utility.getGlobalContext().userSettings.userName; // get current user name
    var zipInvalidMessage = currentUserName + ": Your ZIP code is not A valid format";

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