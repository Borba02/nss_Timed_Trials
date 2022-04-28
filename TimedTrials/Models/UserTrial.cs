using System;

namespace TimedTrials.Models
{
    public class UserTrial
    {
        public int Id { get; set; }
        public DateTime TrialStartDate { get; set; }
        public bool SubscriptionActive { get; set; }
        public int UserId { get; set; }
        public UserProfile UserProfile { get; set; }
        public int TrialId { get; set; }
        public Trial Trial { get; set; }
    }
}
