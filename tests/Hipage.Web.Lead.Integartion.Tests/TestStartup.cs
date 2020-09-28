using System.Threading.Tasks;
using Hipage.Web.Lead.Integartion.Tests.Configuration;
using Hipage.Web.Lead.Integartion.Tests.Fixtures;
using Xunit;
using Xunit.Extensions.Ordering;

namespace Hipage.Web.Lead.Integartion.Tests
{
    public class TestStartup : IClassFixture<ApiFixture<Startup>>
    {
        private readonly ApiFixture<Startup> _api;

        public TestStartup(ApiFixture<Startup> api)
        {
            _api = api;
        }

        [Order(-1)]
        [Theory]
        [InlineData("/health/alive")]
        [InlineData("/health/ready")]
        public async Task Verify_service_is_alive_and_ready(string url) =>
            await PollyConfiguration.RetryAsync.ExecuteAsync(async () =>
                (await _api.CreateClient().GetAsync(url)).EnsureSuccessStatusCode());
    }
}
