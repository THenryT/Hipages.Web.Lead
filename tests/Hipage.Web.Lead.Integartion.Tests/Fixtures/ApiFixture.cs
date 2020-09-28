using System;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Extensions.DependencyInjection;

namespace Hipage.Web.Lead.Integartion.Tests.Fixtures
{
    public class ApiFixture<TStartup> : WebApplicationFactory<TStartup>
        where TStartup : class
    {
        private readonly IServiceScope _scope;

        public ApiFixture()
        {
            // HACK Force HTTP server startup
            using (CreateDefaultClient())
            {
            }

            // used to provide scoped service resolution
            _scope = Server.Services.CreateScope();
        }

        protected override void ConfigureWebHost(IWebHostBuilder builder)
        {
            var environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
            builder.UseEnvironment("environment");
            base.ConfigureWebHost(builder);
        }

        protected override void Dispose(bool disposing)
        {
            _scope?.Dispose();
            base.Dispose(disposing);
        }
    }
}
