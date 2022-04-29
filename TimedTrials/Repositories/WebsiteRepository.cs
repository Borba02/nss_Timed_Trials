using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.Configuration;
using TimedTrials.Models;
using Microsoft.Data.SqlClient;
using TimedTrials.Utils;

namespace TimedTrials.Repositories
{

    public class WebsiteRepository : BaseRepository, IWebsiteRepository
    {
        public WebsiteRepository(IConfiguration configuration) : base(configuration) { }
        public List<Website> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT Id, [Name], Url AS WebsiteUrl FROM Website";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var websites = new List<Website>();
                        while (reader.Read())
                        {
                            websites.Add(new Website()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Name = DbUtils.GetString(reader, "Name"),
                                Url = DbUtils.GetString(reader, "WebsiteUrl")


                            });
                        }
                        return websites;

                    }
                }
            }
        }
    }

}