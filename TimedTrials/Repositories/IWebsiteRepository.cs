using System.Collections.Generic;
using TimedTrials.Models;

namespace TimedTrials.Repositories
{
    public interface IWebsiteRepository
    {
        void AddWebsite(Website website);
        List<Website> GetAll();
    }
}