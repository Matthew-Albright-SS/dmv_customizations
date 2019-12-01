using System;
using System.Collections.Generic;
using System.ServiceModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Client;

namespace OpportunityOwnership
{
    public class ChangeOppOwner : IPlugin
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
                //String entString = entity.LogicalName;

                // Obtain the organization service reference which you will need for  
                // web service calls.  
                IOrganizationServiceFactory serviceFactory =
                    (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
                IOrganizationService service = serviceFactory.CreateOrganizationService(context.UserId);

                try
                {
                    // get account id from opportunity lookup
                    Guid accountId = new Guid();
                    EntityReference entityRef = new EntityReference();
                    if (entity.Attributes.Contains("parentaccountid") &&
                    entity.Attributes["parentaccountid"] != null)
                    {
                        entityRef = (EntityReference)entity.Attributes["parentaccountid"];

                        if (entityRef.LogicalName == "account")
                        {
                            accountId = entityRef.Id;
                        }
                    }

                    // get the account entity corresponding to the id with owner info
                    ColumnSet columns = new ColumnSet("owninguser");
                    Entity reAccount = service.Retrieve(entityRef.LogicalName, entityRef.Id, columns);

                    // get the guid of both records from the entity references.
                    Guid oppOwnerId = ((EntityReference)entity.Attributes["ownerid"]).Id;
                    Guid accountOwnerId = ((EntityReference)reAccount.Attributes["owninguser"]).Id;

                    if (accountOwnerId != oppOwnerId)
                    {
                        //change who owns the opportunity.
                        entity["ownerid"] = new EntityReference("systemuser", accountOwnerId);
                        service.Update(entity);
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