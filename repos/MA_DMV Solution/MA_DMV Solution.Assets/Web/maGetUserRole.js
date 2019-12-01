function getsecurityrole() {
    //debugger;
    var role = Xrm.Page.context.getUserRoles();
    for (var j = 0; j < role.length; j++) {
        var userRoleId = role[j];
        //
        var odataUri = Xrm.Page.context.getClientUrl() + "/api/data/v9.1/roles?$select=name,roleid&$filter=roleid eq " + role[j];
        var req = new XMLHttpRequest();
        req.open("GET", encodeURI(odataUri), false);
        req.setRequestHeader("Accept", "application/json");
        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        req.send(null);
        var requestResults = JSON.parse(req.responseText);
        if (requestResults != null) {
            var isManager = false
            for (var i = 0; i < requestResults.value.length; i++) {
                var name = requestResults.value[i]["name"];
                var roleid = requestResults.value[i]["roleid"];

                

                if (name.Contains("Supervisor"))
                    isManager = true;       

                
            }
            return isManager;
        }
    }
}