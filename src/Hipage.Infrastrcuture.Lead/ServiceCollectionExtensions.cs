using Hipage.Infrastrcuture.Lead.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Hipage.Infrastrcuture.Lead
{
    public static class ServiceCollectionExtension
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services,IConfiguration configuration )
        {
            services.AddSingleton<ILeadService, LeadService>();
            return services;
        }
    }
}