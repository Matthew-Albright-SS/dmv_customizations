using System;
using System.ServiceModel;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Crm.Sdk.Messages;

namespace OpportunityAccessTeam
{
    public class OpAccessTeam : IPlugin
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
                    // get account guid from entity reference from lookup field in opportunity
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

                    ColumnSet columns = new ColumnSet("owninguser");

                    // get the account so that we can access the owning user
                    Entity reAccount = service.Retrieve(entityRef.LogicalName, entityRef.Id, columns);

                    // get guid of both owners to compare
                    Guid oppOwnerId = ((EntityReference)entity.Attributes["ownerid"]).Id;
                    Guid accountOwnerId = ((EntityReference)reAccount.Attributes["owninguser"]).Id;

                    if (accountOwnerId != oppOwnerId)
                    {
                        // if guid is not the same then add the account owner to the opportunity access team
                        AddUserToRecordTeamRequest adduser = new AddUserToRecordTeamRequest()
                        {
                            Record = new EntityReference(entity.LogicalName, entity.Id),
                            SystemUserId = accountOwnerId,
                            TeamTemplateId = new Guid("B3228218-B8F6-4A1B-A18D-552C6F980831")
                        };
                        service.Execute(adduser);
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
