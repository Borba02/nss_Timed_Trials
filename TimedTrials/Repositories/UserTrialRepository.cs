using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.Configuration;
using TimedTrials.Models;
using Microsoft.Data.SqlClient;
using TimedTrials.Utils;

namespace TimedTrials.Repositories
{
    public class UserTrialRepository : BaseRepository, IUserTrialRepository
    {
        public UserTrialRepository(IConfiguration configuration) : base(configuration) { }
        public List<UserTrial> GetActiveUserTrials(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT ut.Id AS UserTrialID, ut.UserId, up.Name AS UserName, ut.TrialId, t.Id, ut.TrialStartDate, ut.SubscriptionActive,
                                           t.TrialDuration, t.TrialExpirationDate, t.SubscriptionPrice,
                                           t.WebsiteId, w.Id, w.Name AS WebsiteName, w.Url AS WebsiteUrl, 
                                           up.FirebaseUserId, up.Email
                                                
                                    FROM UserTrial ut
                                    JOIN Trial t ON ut.TrialId = t.Id
                                    JOIN Website w ON t.WebsiteId = w.Id
                                    JOIN UserProfile up ON ut.UserId = up.Id
                                        WHERE up.Id = @Id AND ut.SubscriptionActive = 1
                                    ";
                    DbUtils.AddParameter(cmd, "@Id", id);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var userTrials = new List<UserTrial>();
                        while (reader.Read())
                        {
                            userTrials.Add(new UserTrial()
                            {
                                Id = DbUtils.GetInt(reader, "UserTrialId"),
                                UserId = id,
                                UserProfile = new UserProfile()
                                {
                                    Id = id,
                                    Name = DbUtils.GetString(reader, "UserName"),
                                    Email = DbUtils.GetString(reader, "Email")
                                },                                
                                TrialId = DbUtils.GetInt(reader, "TrialId"),
                                TrialStartDate = DbUtils.GetDateTime(reader, "TrialStartDate"),
                                SubscriptionActive = DbUtils.GetBool(reader, "SubscriptionActive"),
                                Trial = new Trial()
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
                                }
                            });
                        }
                        return userTrials;
                    }
                }
            }
        }
    }
}