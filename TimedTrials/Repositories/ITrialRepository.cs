using System.Collections.Generic;
using TimedTrials.Models;

namespace TimedTrials.Repositories
{
    public interface ITrialRepository
    {
        void AddTrial(Trial trial);
        List<Trial> GetAll();
    }
}