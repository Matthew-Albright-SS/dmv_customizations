using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using resttest.Models;
using Microsoft.Xrm.Tooling.Connector;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Sdk;

namespace resttest.Controllers
{
    public class DMVVehicleController : ApiController
    {

        static string strConnectionString = System.Configuration.ConfigurationManager.ConnectionStrings["MyCDSServer"].ToString();
        static CrmServiceClient svc = new CrmServiceClient(strConnectionString);

        [HttpGet]
        public List<dmvveh> GetVehl()
        {
            List<dmvveh> lst = new List<dmvveh>();
            QueryExpression query = new QueryExpression("madmv_ma_vehicle");
            query.ColumnSet.AddColumns("madmv_vehicleidnumber", "madmv_vehiclemake", "madmv_yearmodel", "madmv_bodytypemodel");
            EntityCollection result1 = svc.RetrieveMultiple(query);
            foreach (Entity a in result1.Entities)
            {
                dmvveh obj = new dmvveh();
                obj.madmv_vehicleidnumber = a.Attributes["madmv_vehicleidnumber"].ToString();
                if (a.Contains("madmv_vehiclemake"))
                {
                    obj.madmv_vehiclemake = a.Attributes["madmv_vehiclemake"].ToString();
                }
                if (a.Contains("madmv_yearmodel"))
                {
                    obj.madmv_yearmodel = a.Attributes["madmv_yearmodel"].ToString();
                }
                if (a.Contains("madmv_bodytypemodel"))
                {
                    obj.madmv_bodytypemodel = a.Attributes["madmv_bodytypemodel"].ToString();
                }
                lst.Add(obj);
            }
            return lst;
        }
    }
}