var madmv = window.madmv || {};
(function () {
    // Define some global variables
    var myUniqueId = "_myUniqueId"; // Define an ID for the notification
    var currentUserName = Xrm.Utility.getGlobalContext().userSettings.userName; // get current user name
    var vinInvalidMessage = currentUserName + ": Your VIN is not A valid format";

    this.validateVIN = function (executionContext) {
        var formContext = executionContext.getFormContext();

        var vin = formContext.getAttribute("madmv_vehicleidnumber").getValue();

        function transliterate(c) {
            return '0123456789.ABCDEFGH..JKLMN.P.R..STUVWXYZ'.indexOf(c) % 10;
        }


        function get_check_digit(vin) {
            var map = '0123456789X';
            var weights = '8765432X098765432';
            var sum = 0;
            for (var i = 0; i < 17; ++i)
                sum += transliterate(vin[i]) * map.indexOf(weights[i]);
            return map[sum % 11];
        }

        function validate(vin) {
            if (vin.length !== 17) return false;
            return get_check_digit(vin) === vin[8];
        }

        if (validate(vin)) {
            formContext.getControl("madmv_vehicleidnumber").clearNotification(myUniqueId);
        } else {
            formContext.getControl("madmv_vehicleidnumber").setNotification(vinInvalidMessage, myUniqueId);
        }
    }

    this.setYear = function (executionContext) {
        var formContext = executionContext.getFormContext();

        var vin = formContext.getAttribute("madmv_vehicleidnumber").getValue();

        var today = new Date();

        'ABCDEFGHJKLMNPRSTVWXY123456789ABCDEFGHJKLMNPRSTVWXY123456789'.lastIndexOf(vin[9]);

        var year = 1980 + 'ABCDEFGHJKLMNPRSTVWXY123456789ABCDEFGHJKLMNPRSTVWXY123456789'.lastIndexOf(vin[9]);
        if (year > today.getFullYear() + 1)
            year = 1980 + 'ABCDEFGHJKLMNPRSTVWXY123456789ABCDEFGHJKLMNPRSTVWXY123456789'.indexOf(vin[9]);

        formContext.getAttribute("madmv_yearmodel").setValue(year.toString());
    }


    /*
    this.validateYear = function (executionContext) {
        var formContext = executionContext.getFormContext();
        var vin = formContext.getAttribute("madmv_vehicleidnumber").getValue();

        var map = 'ABCDEFGHJKLMNPRSTVWXY123456789';

        var year1 = 1980 + 'map'.indexOf(vin[9]);
        var year2 = 1980 + 'map'.indexOf(vin[9]);
    }
    */
}).call(madmv);