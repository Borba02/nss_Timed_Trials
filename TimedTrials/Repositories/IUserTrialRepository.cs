using System.Collections.Generic;
using TimedTrials.Models;

namespace TimedTrials.Repositories
{
    public interface IUserTrialRepository
    {
        List<UserTrial> GetActiveUserTrials(int id);
    }
}