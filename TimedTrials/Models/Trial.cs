using System;

namespace TimedTrials.Models
{
    public class Trial
    {
        public int Id { get; set; }
        public int TrialDuration { get; set; }
        public DateTime TrialExpirationDate { get; set; }
        public decimal SubscriptionPrice { get; set; }
        public int WebsiteId { get; set; }
        public Website Website { get; set; }
    }
}
