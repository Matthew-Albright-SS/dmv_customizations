using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ServiceModel;
using Microsoft.Xrm.Sdk;

namespace InfiniteLoopDepth
{
    public class DepthChecker : IPlugin
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

                if (context.Depth > 1)
                {
                    return;
                }

                try
                {
                    

                    

                    // Create a task activity to follow up with the account customer in 7 days. 
                    Entity followup = new Entity("madmv_ma_application");

                    followup["madmv_applicationsubject"] = "Application was Created by plugin.";


                    // Create the task in Microsoft Dynamics CRM.
                    tracingService.Trace("depthchecker: Creating the task activity.");
                    service.Create(followup);
                }

                catch (FaultException<OrganizationServiceFault> ex)
                {

                    throw new InvalidPluginExecutionException("An error occurred in depthchecker.", ex);
                }

                catch (Exception ex)
                {
                    tracingService.Trace("depthchecker: {0}", ex.ToString());
                    throw;
                }
            }
        }
    }
}