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
    public class DMVContactController : ApiController
    {
    
    static string strConnectionString = System.Configuration.ConfigurationManager.ConnectionStrings["MyCDSServer"].ToString();
    static CrmServiceClient svc = new CrmServiceClient(strConnectionString);

        [HttpGet]
        public List<dmvcon> GetConl()
        {
            List<dmvcon> lst = new List<dmvcon>();
            QueryExpression query = new QueryExpression("madmv_ma_customer");
            query.ColumnSet.AddColumns("madmv_cssn", "madmv_firstname", "madmv_lastname", "madmv_fullname", "madmv_phonenumber", "madmv_email");
            EntityCollection result1 = svc.RetrieveMultiple(query);
            foreach (Entity a in result1.Entities)
            {
                dmvcon obj = new dmvcon();
                if (a.Contains("madmv_cssn"))
                {
                    obj.madmv_cssn = a.Attributes["madmv_cssn"].ToString();
                }
                if (a.Contains("madmv_fullname"))
                {
                    obj.madmv_fullname = a.Attributes["madmv_fullname"].ToString();
                }
                if (a.Contains("madmv_firstname"))
                {
                    obj.madmv_firstname = a.Attributes["madmv_firstname"].ToString();
                }
                if (a.Contains("madmv_lastname"))
                {
                    obj.madmv_lastname = a.Attributes["madmv_lastname"].ToString();
                }
                if (a.Contains("madmv_phonenumber"))
                {
                    obj.madmv_phonenumber = a.Attributes["madmv_phonenumber"].ToString();
                }
                if (a.Contains("madmv_email"))
                {
                    obj.madmv_email = a.Attributes["madmv_email"].ToString();
                }
                lst.Add(obj);
            }
            return lst;
        }

        [HttpPost]
        //[Route("{ltype}")]
        public void insertContact(string madmv_cssn, string madmv_firstname, string madmv_lastname, string madmv_phonenumber, string madmv_email)
        {
            Entity entDmvCon = new Entity("madmv_ma_customer");
            entDmvCon.Attributes["madmv_cssn"] = madmv_cssn;
            entDmvCon.Attributes["madmv_firstname"] = madmv_firstname;
            entDmvCon.Attributes["madmv_lastname"] = madmv_lastname;
            entDmvCon.Attributes["madmv_phonenumber"] = madmv_phonenumber;
            entDmvCon.Attributes["madmv_email"] = madmv_email;

            svc.Create(entDmvCon);
        }
    }
}
