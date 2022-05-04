using System.Collections.Generic;
using TimedTrials.Models;

namespace TimedTrials.Repositories
{
    public interface IUserTrialRepository
    {
        void AddUserTrial(UserTrial userTrial);
        List<UserTrial> GetActiveUserTrials(int id);
    }
}