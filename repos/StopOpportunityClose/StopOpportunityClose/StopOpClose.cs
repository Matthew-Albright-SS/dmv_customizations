using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ServiceModel;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;

namespace StopOpportunityClose
{
    public class StopOpClose : IPlugin
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
            if (context.InputParameters.Contains("OpportunityClose") &&
                context.InputParameters["OpportunityClose"] is Entity)
            {
                // Obtain the target entity from the input parameters.  
                Entity entity = (Entity)context.InputParameters["OpportunityClose"];
                //String entString = entity.LogicalName;

                // Obtain the organization service reference which you will need for  
                // web service calls.  
                IOrganizationServiceFactory serviceFactory =
                    (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
                IOrganizationService service = serviceFactory.CreateOrganizationService(context.UserId);

                try
                {
                    Guid opportunityId = new Guid();
                    if (entity.Attributes.Contains("opportunityid") &&
                    entity.Attributes["opportunityid"] != null)
                    {
                        EntityReference entityRef = (EntityReference)entity.Attributes["opportunityid"];

                        if (entityRef.LogicalName == "opportunity")
                        {
                            opportunityId = entityRef.Id;
                        }
                    }

                    //if (context.OutputParameters.Contains("id"))
                    //{
                    //    regardingobjectid = new Guid(context.OutputParameters["id"].ToString());
                    //}
                    ConditionExpression condition1 = new ConditionExpression();
                    condition1.AttributeName = "regardingobjectid";
                    condition1.Operator = ConditionOperator.Like;
                    condition1.Values.Add(opportunityId);

                    ConditionExpression condition2 = new ConditionExpression();
                    condition2.AttributeName = "statecode";
                    condition2.Operator = ConditionOperator.Like;
                    condition2.Values.Add(0);

                    FilterExpression filter1 = new FilterExpression();
                    filter1.Conditions.Add(condition1);
                    filter1.Conditions.Add(condition2);

                    QueryExpression query = new QueryExpression("activitypointer");
                    query.ColumnSet.AddColumns("regardingobjectid", "statecode");
                    query.Criteria.AddFilter(filter1);

                    EntityCollection data = service.RetrieveMultiple(query);

                    if (data.Entities.Count > 0)
                    {
                       throw new InvalidPluginExecutionException("An Activity is still open for this opportunity.");
                    }
                }
                catch (FaultException<OrganizationServiceFault> ex)
                {
                    throw new InvalidPluginExecutionException("An error occurred in FollowUpPlugin.", ex);
                }

                catch (Exception ex)
                {
                    tracingService.Trace("FollowUpPlugin: {0}", ex.ToString());
                    throw;
                }
            }
        }
    }
}
