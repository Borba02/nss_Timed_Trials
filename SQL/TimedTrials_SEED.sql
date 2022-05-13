insert into UserProfile (Name, FirebaseUserId, Email) values ('Jury Byrd', 'tXnYX3wT7mUpBKxavgYnRLc8sp02', 'jaybyrd@nss.com');
insert into UserProfile (Name, FirebaseUserId, Email) values ('Bryce Borba', 'R5kFnNqaWvfQBAeD87x7OkhHeS82', 'borba@nss.com');

insert into Website (Name, Url) values ('Netflix', 'https://www.netflix.com/');
insert into Website (Name, Url) values ('Hulu', 'https://www.hulu.com/');
insert into Website (Name, Url) values ('DisneyPlus', 'https://www.disneyplus.com/');
insert into Website (Name, Url) values ('Crunchyroll', 'https://www.crunchyroll.com/');
insert into Website (Name, Url) values ('Peacock', 'https://www.peacocktv.com/');

insert into Trial (WebsiteId, TrialDuration, TrialExpirationDate, SubscriptionPrice) values (1, '30', '5/30/2022', 12.99);
insert into Trial (WebsiteId, TrialDuration, TrialExpirationDate, SubscriptionPrice) values (2, '30', '6/1/2022', 14.99);
insert into Trial (WebsiteId, TrialDuration, TrialExpirationDate, SubscriptionPrice) values (3, '14', '5/31/2022', 9.99);
insert into Trial (WebsiteId, TrialDuration, TrialExpirationDate, SubscriptionPrice) values (4, '30', '6/15/2022', 14.99);
insert into Trial (WebsiteId, TrialDuration, TrialExpirationDate, SubscriptionPrice) values (5, '30', '5/31/2022', 12.99);
insert into Trial (WebsiteId, TrialDuration, TrialExpirationDate, SubscriptionPrice) values (1, '30', '4/15/2022', 24.99);

insert into UserTrial (UserId, TrialId, TrialStartDate, SubscriptionActive) values (2, 4, '4/27/2022', 1);
insert into UserTrial (UserId, TrialId, TrialStartDate, SubscriptionActive) values (2, 2, '4/26/2022', 1);
insert into UserTrial (UserId, TrialId, TrialStartDate, SubscriptionActive) values (2, 1, '4/24/2022', 1);
insert into UserTrial (UserId, TrialId, TrialStartDate, SubscriptionActive) values (1, 5, '4/26/2022', 1);
insert into UserTrial (UserId, TrialId, TrialStartDate, SubscriptionActive) values (1, 3, '5/6/2022', 1);

