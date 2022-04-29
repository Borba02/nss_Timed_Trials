using System.Collections.Generic;
using TimedTrials.Models;

namespace TimedTrials.Repositories
{
    public interface IWebsiteRepository
    {
        List<Website> GetAll();
    }
}