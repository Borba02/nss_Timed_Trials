using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.Configuration;
using TimedTrials.Models;
using Microsoft.Data.SqlClient;
using TimedTrials.Utils;

namespace TimedTrials.Repositories
{

    public class TrialRepository : BaseRepository, ITrialRepository
    {
        public TrialRepository(IConfiguration configuration) : base(configuration) { }
        public List<Trial> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT t.Id AS TrialId, t.TrialDuration, t.TrialExpirationDate, t.SubscriptionPrice, t.WebsiteId,
                                               w.Id AS WebsiteId, w.Name AS WebsiteName, w.Url AS WebsiteUrl
                                        FROM Trial t
                                        JOIN Website w ON t.WebsiteId = w.Id
                                        WHERE t.TrialExpirationDate > CURRENT_TIMESTAMP
                                        ORDER BY t.TrialExpirationDate ASC
                                                ";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var trials = new List<Trial>();
                        while (reader.Read())
                        {
                            trials.Add(new Trial()
                            {
                                Id = DbUtils.GetInt(reader, "TrialId"),
                                TrialDuration = DbUtils.GetInt(reader, "TrialDuration"),
                                TrialExpirationDate = DbUtils.GetDateTime(reader, "TrialExpirationDate"),
                                SubscriptionPrice = reader.GetDecimal(reader.GetOrdinal("SubscriptionPrice")),
                                WebsiteId = DbUtils.GetInt(reader, "WebsiteId"),
                                Website = new Website()
                                {
                                    Id = DbUtils.GetInt(reader, "WebsiteId"),
                                    Name = DbUtils.GetString(reader, "WebsiteName"),
                                    Url = DbUtils.GetString(reader, "WebsiteUrl")
                                }
                            });
                        }
                        return trials;

                    }
                }
            }
        }
        public Trial GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT TrialDuration, TrialExpirationDate, SubscriptionPrice, WebsiteId 
                                        FROM Trial 
                                        WHERE Id = @id;";
                    DbUtils.AddParameter(cmd, "@id", id);

                    Trial trial = null;
                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        trial = new Trial()
                        {
                            
                            TrialDuration = DbUtils.GetInt(reader, "TrialDuration"),
                            TrialExpirationDate = DbUtils.GetDateTime(reader, "TrialExpirationDate"),
                            SubscriptionPrice = reader.GetDecimal(reader.GetOrdinal("SubscriptionPrice")),
                            WebsiteId = DbUtils.GetInt(reader, "WebsiteId"),
                        };
                    }
                    reader.Close();
                    return trial;

                }

            }
        }
        public void AddTrial(Trial trial)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Trial (WebsiteId, TrialDuration, TrialExpirationDate, SubscriptionPrice)
                                        OUTPUT Inserted.Id
                                        VALUES (@WebsiteId, @TrialDuration, @TrialExpirationDate, @SubscriptionPrice)";

                    DbUtils.AddParameter(cmd, "@WebsiteId", trial.WebsiteId);
                    DbUtils.AddParameter(cmd, "@TrialDuration", trial.TrialDuration);
                    DbUtils.AddParameter(cmd, "@TrialExpirationDate", trial.TrialExpirationDate);
                    DbUtils.AddParameter(cmd, "@SubscriptionPrice", trial.SubscriptionPrice);

                    trial.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
    }
}