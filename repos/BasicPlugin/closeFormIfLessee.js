// JavaScript source code
// A namespace defined for the sample code
// As a best practice, you should always define 
// a unique namespace for your libraries
var ssdmv = window.ssdmv || {};
(function () {
    // Define some global variables
    var myUniqueId = "_myUniqueId"; // Define an ID for the notification
    var currentUserName = Xrm.Utility.getGlobalContext().userSettings.userName; // get current user name
    //var message = currentUserName + ": Your JavaScript code in action!";

    // Code to run in the form OnLoad event
    /*this.formOnLoad = function (executionContext) {
        var formContext = executionContext.getFormContext();

        // display the form level notification as an INFO
        formContext.ui.setFormNotification(message, "INFO", myUniqueId);

        // Wait for 5 seconds before clearing the notification
        window.setTimeout(function () { formContext.ui.clearFormNotification(myUniqueId); }, 5000);
    }
*/
    // Code to run in the attribute OnChange event 
    this.attributeOnChange = function (executionContext) {
        var formContext = executionContext.getFormContext();

        // Automatically set some field values if the account name contains "Contoso"
        var accountName = formContext.getAttribute("dmv_lesseeowner").getValue();
        if (accountName.length != 0) {
            Xrm.Page.ui.close();
        }
    }

    // Code to run in the form OnSave event 
    /*this.formOnSave = function () {
        // Display an alert dialog
        Xrm.Navigation.openAlertDialog({ text: "Record saved." });
    }*/
}).call(ssdmv);