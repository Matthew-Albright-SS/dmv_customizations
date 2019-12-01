using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ServiceModel;
using Microsoft.Xrm.Sdk;

namespace customEntityErrorDump
{
    public class ErrorDump : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            // Obtain the tracing service
            ITracingService tracingService =
            (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            // Obtain the execution context from the service provider.  
            IPluginExecutionContext context = (IPluginExecutionContext)
                serviceProvider.GetService(typeof(IPluginExecutionContext));

            // The InputParameters collection contains all the data passed in the message request.  
            if (context.InputParameters.Contains("Target") &&
                context.InputParameters["Target"] is Entity)
            {
                // Obtain the target entity from the input parameters.  
                Entity entity = (Entity)context.InputParameters["Target"];

                // Obtain the organization service reference which you will need for  
                // web service calls.  
                IOrganizationServiceFactory serviceFactory =
                    (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
                IOrganizationService service = serviceFactory.CreateOrganizationService(context.UserId);

                try
                {
                    object m = null;
                    string s = m.ToString();
                    // Create a task activity to follow up with the account customer in 7 days. 
                    Entity followup = new Entity("tasksss");

                    followup["subject"] = "Application was Created (Task created by plugin).";
                    followup["description"] =
                        "The application was created so this task was created.";
                    followup["scheduledstart"] = DateTime.Now.AddDays(7);
                    followup["scheduledend"] = DateTime.Now.AddDays(7);
                    followup["category"] = context.PrimaryEntityName;

                    // Refer to the account in the task activity.
                    if (context.OutputParameters.Contains("id"))
                    {
                        Guid regardingobjectid = new Guid(context.OutputParameters["id"].ToString());
                        string regardingobjectidType = "madmv_ma_application";

                        followup["regardingobjectid"] =
                        new EntityReference(regardingobjectidType, regardingobjectid);
                    }

                    // Create the task in Microsoft Dynamics CRM.
                    tracingService.Trace("FollowupPlugin: Creating the task activity.");
                    service.Create(followup);
                }

                catch (FaultException<OrganizationServiceFault> ex)
                {
                    Entity errorDump = new Entity("madmv_ma_errordump");

                    errorDump["madmv_name"] = "error Dump on " + DateTime.Now.ToString();
                    errorDump["madmv_errormessage"] = ex.ToString();


                    // Create the task in Microsoft Dynamics CRM.
                    tracingService.Trace("Ran Into Error: Creating the Error Dump.");
                    service.Create(errorDump);
                    throw new InvalidPluginExecutionException("An error occurred in FollowUpPlugin.", ex);
                }

                catch (Exception ex)
                {
                    tracingService.Trace("FollowUpPlugin: {0}", ex.ToString());
                    Entity errorDump = new Entity("madmv_ma_errordump");

                    errorDump["madmv_name"] = "error Dump on " + DateTime.Now.ToString();
                    errorDump["madmv_errormessage"] = ex.ToString();


                    // Create the task in Microsoft Dynamics CRM.
                    tracingService.Trace("Ran Into Error: Creating the Error Dump.");
                    service.Create(errorDump);
                    throw;
                }
            }
        }
    }
}
