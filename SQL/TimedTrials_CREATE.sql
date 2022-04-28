USE [master]

IF db_id('TimedTrials') IS NULl
  CREATE DATABASE [TimedTrials]
GO

USE [TimedTrials]
GO


DROP TABLE IF EXISTS [UserTrial];
DROP TABLE IF EXISTS [Trial];
DROP TABLE IF EXISTS [Website];
DROP TABLE IF EXISTS [UserProfile];

GO

CREATE TABLE [UserProfile] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [FirebaseUserId] nvarchar(255) NOT NULL,
  [Name] nvarchar(255) NOT NULL,
  [Email] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [UserTrial] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [UserId] int NOT NULL,
  [TrialId] int NOT NULL,
  [TrialStartDate] datetime NOT NULL,
  [SubscriptionActive] bit
)
GO

CREATE TABLE [Trial] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [WebsiteId] int NOT NULL,
  [TrialDuration] int NOT NULL,
  [TrialExpirationDate] datetime NOT NULL,
  [SubscriptionPrice] decimal NOT NULL
)
GO

CREATE TABLE [Website] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [Name] nvarchar(255) NOT NULL,
  [Url] nvarchar(255) NOT NULL
)
GO

ALTER TABLE [UserTrial] ADD FOREIGN KEY ([UserId]) REFERENCES [UserProfile] ([Id]) ON DELETE CASCADE
GO

ALTER TABLE [UserTrial] ADD FOREIGN KEY ([TrialId]) REFERENCES [Trial] ([Id])
GO

ALTER TABLE [Trial] ADD FOREIGN KEY ([WebsiteId]) REFERENCES [Website] ([Id])
GO
