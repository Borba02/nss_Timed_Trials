using System.Collections.Generic;
using TimedTrials.Models;

namespace TimedTrials.Repositories
{
    public interface ITrialRepository
    {
        List<Trial> GetAll();
    }
}