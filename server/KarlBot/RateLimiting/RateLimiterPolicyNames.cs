namespace KarlBot.RateLimiting
{
    /// <summary>
    /// Names of the rate limiter policies.
    /// </summary>
    public static class RateLimiterPolicyNames
    {
        /// <summary>
        /// Limits the authentication endpoints.
        /// </summary>
        public const string Authentication = "Authentication";

        /// <summary>
        /// Limits the endpoints running a challenge evaluation.
        /// </summary>
        public const string ChallengeEvaluation = "ChallengeEvaluation";
    }
}
