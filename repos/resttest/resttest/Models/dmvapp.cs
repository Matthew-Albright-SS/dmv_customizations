using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace resttest.Models
{
    public class dmvapp
    {
        public string madmv_appid { get; set; }
        public string madmv_applicationtype { get; set; }
        public string madmv_applicationsubject { get; set; }
        public Guid madmv_ownerinfo { get; set; }
        public string madmv_ownername { get; set; }
        public Guid madmv_appguid { get; set; }
        public string statuscode { get; set; }

        //public string ss_LeaveApplicationReason { get; set; }
        //public DateTime ss_startdate { get; set; }
        //public DateTime ss_enddate { get; set; }
    }
}