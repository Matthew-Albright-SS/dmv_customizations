function executewfonBclick() {

    // new code START
    // get the id of the record and remove the curly bracket part
    // id will be used in Web API url
    var Id = Xrm.Page.data.entity.getId().replace('{', '').replace('}', '');
    //var serverURL = Xrm.Page.context.getClientUrl();
    //var parameters = {};
    //parameters.wfname = "wfname";
    // pass the id as inpurt parameter
    var data = {
        "recordid": Id
    };

    var req = new XMLHttpRequest();
    req.open("POST", Xrm.Page.context.getClientUrl() + "/api/data/v9.1/madmv_ma_applications(" + Id + ")/Microsoft.Dynamics.CRM.madmv_MA_CommandManagersetapprove", true);
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    req.onreadystatechange = function () {
        if (this.readyState === 4) {
            req.onreadystatechange = null;
            if (this.status === 200) {
                var results = JSON.parse(this.response);
            } else {
                Xrm.Utility.alertDialog(this.statusText);
            }
        }
    };
    req.send();

    Xrm.Page.data.entity.save();
    Xrm.Page.data.entity.refresh();

}