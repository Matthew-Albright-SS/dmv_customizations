using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Activities;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;

namespace sampleWorkflow
{
    public class DmvCustomWorkflow : CodeActivity
    {
        [RequiredArgument]
        [Input("Application Type")]
        public InArgument<String> AppType { get; set; }

        //[Input("Application Type")]
        //public InArgument<String> RegistrationPeriod { get; set; }

        [Output("Total Fee")]
        public OutArgument<decimal> TotalFee { get; set; }



        protected override void Execute(CodeActivityContext context)
        {
            String AppType1 = context.GetValue(this.AppType);
            //int RegistrationPeriod1 = context.GetValue(this.RegistrationPeriod);

            if (AppType1 == "Vehicle Registration")
            {
                this.TotalFee.Set(context, 100/* * RegistrationPeriod1*/);
            }
            if (AppType1 == "Address Change")
            {
                this.TotalFee.Set(context, 50);
            }


            //throw new NotImplementedException();
        }
    }
}
