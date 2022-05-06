using System.Collections.Generic;
using TimedTrials.Models;

namespace TimedTrials.Repositories
{
    public interface IWebsiteRepository
    {
        void AddWebsite(Website website);
        void DeleteWebsite(int id);
        void EditWebsite(Website website);
        List<Website> GetAll();
        Website GetById(int id);
    }
}