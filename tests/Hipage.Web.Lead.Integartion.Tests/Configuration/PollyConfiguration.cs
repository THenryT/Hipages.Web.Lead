using System;
using System.Diagnostics;
using Polly;
using Polly.Retry;

namespace Hipage.Web.Lead.Integartion.Tests.Configuration
{
    public static class PollyConfiguration
    {
        static PollyConfiguration()
        {
            RetryAttempts = TestConfiguration.RetryAttempts;
            RetryInterval = TestConfiguration.RetryInterval;

            RetryAsync = Policy
                .Handle<Exception>()
                .WaitAndRetryAsync(
                    RetryAttempts,
                    retryAttempt => TimeSpan.FromMilliseconds(RetryInterval),
                    (exception, timeSpan, attempt, context) =>
                        Trace.WriteLine($"Attempt {attempt} of {RetryAttempts} failed with exception {exception.Message}. Delaying {timeSpan.TotalMilliseconds}ms"));
        }

        public static int RetryInterval { get; }

        public static int RetryAttempts { get; }

        public static AsyncRetryPolicy RetryAsync { get; }
    }
}
