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
using System.Web.Http.Cors;

namespace resttest.Controllers
{
    [EnableCors(origins: "http://madmvrest.azurewebsites.net", headers: "*", methods: "*")]
    public class CRMresttestController : ApiController
    {
        static string strConnectionString = System.Configuration.ConfigurationManager.ConnectionStrings["MyCDSServer"].ToString();
        static CrmServiceClient svc = new CrmServiceClient(strConnectionString);

        [HttpGet]
        //[Route("{ltype}")]
        public List<dmvapp> Getappl()
        {
            List<dmvapp> lst = new List<dmvapp>();
            QueryExpression query = new QueryExpression("madmv_ma_application");
            //  query.ColumnSet.AllColumns = true;
            query.ColumnSet.AddColumns("madmv_ma_applicationid", "madmv_ownerinfo", "madmv_appid", "madmv_applicationtype", "madmv_applicationsubject", "statuscode");
            //ConditionExpression condition1 = new ConditionExpression();
            //condition1.AttributeName = "madmv_applicationtype";
            //condition1.Operator = ConditionOperator.Equal;
            //condition1.Values.Add(madmv_applicationtype); //876,570,001
            //FilterExpression filter1 = new FilterExpression();
            //filter1.Conditions.Add(condition1);
            // ColumnSet objColSet = new ColumnSet(new string[] { "ss_name" });
            //  query.ColumnSet = objColSet;
            //query.Criteria.AddFilter(filter1);
            EntityCollection result1 = svc.RetrieveMultiple(query);
            foreach (Entity a in result1.Entities)
            {
                dmvapp obj = new dmvapp();


                
                

                Guid madmv_appguid = a.Id;
                obj.madmv_appguid = madmv_appguid;

                if (a.Contains("madmv_ownerinfo"))
                {
                    EntityReference entityRef = (EntityReference)a.Attributes["madmv_ownerinfo"];
                    Guid madmv_ownerinfo = entityRef.Id;
                    obj.madmv_ownerinfo = madmv_ownerinfo; // this will give you id of the purcheaser.
                    obj.madmv_ownername = entityRef.Name;
                }

                obj.madmv_appid = a.Attributes["madmv_appid"].ToString();

                if (a.Contains("madmv_applicationsubject"))
                {
                    obj.madmv_applicationsubject = a.Attributes["madmv_applicationsubject"].ToString();
                }
                if (a.Contains("statuscode"))
                {
                    obj.statuscode = a.FormattedValues["statuscode"].ToString();
                }
                if (a.Contains("madmv_applicationtype"))
                {
                    obj.madmv_applicationtype = a.FormattedValues["madmv_applicationtype"].ToString();
                }
                //obj.madmv_applicationtype = a.FormattedValues["madmv_applicationtype"].ToString();
                //obj.ss_leavetype = a.FormattedValues["ss_leavetype"].ToString();
                lst.Add(obj);
            }
            return lst;
        }


/*
        [HttpGet]
       //[Route("{ltype}")]
       public List<dmvapp> Getappl(int madmv_applicationtype)
        {
            List<dmvapp> lst = new List<dmvapp>();
            QueryExpression query = new QueryExpression("madmv_ma_application");
            //  query.ColumnSet.AllColumns = true;
            query.ColumnSet.AddColumns("madmv_appid", "madmv_applicationtype", "madmv_applicationsubject");
            ConditionExpression condition1 = new ConditionExpression();
            condition1.AttributeName = "madmv_applicationtype";
            condition1.Operator = ConditionOperator.Equal;
            condition1.Values.Add(madmv_applicationtype); //876,570,001
            FilterExpression filter1 = new FilterExpression();
            filter1.Conditions.Add(condition1);
            // ColumnSet objColSet = new ColumnSet(new string[] { "ss_name" });
            //  query.ColumnSet = objColSet;
            query.Criteria.AddFilter(filter1);
            EntityCollection result1 = svc.RetrieveMultiple(query);
            foreach (Entity a in result1.Entities)
            {
                dmvapp obj = new dmvapp();

                obj.madmv_appid = a.Attributes["madmv_appid"].ToString();

                if (a.Contains("madmv_applicationsubject"))
                {
                    obj.madmv_applicationsubject = a.Attributes["madmv_applicationsubject"].ToString();
                }
                if (a.Contains("madmv_applicationtype"))
                {
                    obj.madmv_applicationtype = a.FormattedValues["madmv_applicationtype"].ToString();
                }
                //obj.madmv_applicationtype = a.FormattedValues["madmv_applicationtype"].ToString();
                //obj.ss_leavetype = a.FormattedValues["ss_leavetype"].ToString();
                lst.Add(obj);
            }
            return lst;
        }
        */

        [HttpPost]
        //[Route("{ltype}")]
        public void insertapp(string madmv_applicationsubject, int madmv_applicationtype, Guid madmv_ownerinfo)
        {
            dmvapp obj1 = new dmvapp();
            obj1.madmv_applicationsubject = madmv_applicationsubject;
            //obj1.madmv_ownerinfo = madmv_ownerinfo;

            OptionSetValue oleavetype = new OptionSetValue();
            oleavetype.Value = madmv_applicationtype;

            Entity entDmvApp = new Entity("madmv_ma_application");
            entDmvApp.Attributes["madmv_applicationsubject"] = obj1.madmv_applicationsubject;
            entDmvApp.Attributes["madmv_applicationtype"] = oleavetype;// "717800000"
            //entDmvApp["madmv_ownerinfo"] = new EntityReference("madmv_ma_customer", madmv_ownerinfo);

            svc.Create(entDmvApp);
        }


        [HttpPut]
        //[Route("{ltype}")]
        public void updateapp(string madmv_applicationsubject, Guid dmvAppGuid)
        {
            //List<leaveapplication> lst = new List<leaveapplication>();
            dmvapp obj1 = new dmvapp();
            obj1.madmv_applicationsubject = madmv_applicationsubject;
            Entity entDmvApp = new Entity("madmv_ma_application");
            entDmvApp.Attributes["madmv_applicationsubject"] = obj1.madmv_applicationsubject;
            entDmvApp.Attributes["madmv_ma_applicationid"] = dmvAppGuid;
            svc.Update(entDmvApp);
            //return;
        }

    }
}
