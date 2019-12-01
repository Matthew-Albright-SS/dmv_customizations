using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ServiceModel;
using Microsoft.Xrm.Sdk;
using System.Activities;
using Microsoft.Xrm.Sdk.Workflow;

namespace SubjectChangePlugin
{
    public class SubjectChange : CodeActivity
    {
        // retrieve string from owner lookup field
        [Input("string ownerName")]
        public InArgument<string> ownerName { get; set; }

        // retrieve string value matching label of option set value
        [Input("string appType")]
        public InArgument<string> appType { get; set; }

        // both receive and output subject so that we only set subject if field is null
        [Input("string inSubject")]
        [Output("string outSubject")]
        public InOutArgument<string> subjectValue { get; set; }


        protected override void Execute(CodeActivityContext context)
        {
            // Getting OrganizationService from Context  
            var workflowContext = context.GetExtension<IWorkflowContext>();
            var serviceFactory = context.GetExtension<IOrganizationServiceFactory>();
            var orgService = serviceFactory.CreateOrganizationService(workflowContext.UserId);
            var tracingService = context.GetExtension<ITracingService>();

            // check if the subject was not entered
            if (subjectValue.Get(context) == null)
            {
                // tracing for debug
                tracingService.Trace("{0} {1} {2}.", appType.Get(context), "your", ownerName.Get(context));

                // set new subject to combine app type and owner name and send back to action
                string newSubject = appType.Get(context) + " for " + ownerName.Get(context);
                subjectValue.Set(context, newSubject);
            }

            
        }
    }
}

