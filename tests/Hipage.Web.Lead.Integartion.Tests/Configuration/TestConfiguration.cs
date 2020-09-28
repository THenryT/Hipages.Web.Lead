using System;
using System.IO;
using Microsoft.Extensions.Configuration;

namespace Hipage.Web.Lead.Integartion.Tests.Configuration
{
    public static class TestConfiguration
    {
        private const string ConfigRetryAttempts = "Tests:RetryAttempts";
        private const string ConfigRetryInterval = "Tests:RetryInterval";

        static TestConfiguration()
        {
            Configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("testsettings.json", optional: false, reloadOnChange: false)
                .AddEnvironmentVariables()
                .Build();
        }

        public static IConfiguration Configuration { get; }

        public static int RetryAttempts => int.TryParse(Configuration[ConfigRetryAttempts], out var value)
            ? value
            : throw new Exception($"{ConfigRetryAttempts} not configured");

        public static int RetryInterval => int.TryParse(Configuration[ConfigRetryInterval], out var value)
            ? value
            : throw new Exception($"{ConfigRetryInterval} not configured");
    }
}
