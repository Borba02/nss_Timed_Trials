using System.Collections.Generic;
using TimedTrials.Models;

namespace TimedTrials.Repositories
{
    public interface ITrialRepository
    {
        void AddTrial(Trial trial);
        void DeleteTrial(int id);
        List<Trial> GetAll();
        Trial GetById(int id);
    }
}