using System;
using System.Collections.Generic;
using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;
using TimedTrials.Repositories;
using TimedTrials.Models;
using Microsoft.AspNetCore.Authorization;

namespace TimedTrials.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserTrialController : ControllerBase
    {
        private readonly IUserTrialRepository _userTrialRepository;
        private readonly IUserProfileRepository _userProfileRepository;

        public UserTrialController(
            IUserTrialRepository userTrialRepository,
            IUserProfileRepository userProfileRepository)
        {
            _userTrialRepository = userTrialRepository;
            _userProfileRepository = userProfileRepository;
        }
        [HttpGet]
        public IActionResult Get()
        {
            var currentUserProfile = GetCurrentUserProfile();
            var userId = currentUserProfile.Id;
            return Ok(_userTrialRepository.GetActiveUserTrials(userId));
        }

        [HttpPost("{trialId}")]
        public IActionResult Add(int trialId)
        {
            UserTrial userTrial = new UserTrial();
            var currentUserProfile = GetCurrentUserProfile();
            userTrial.TrialId = trialId;
            userTrial.UserId = currentUserProfile.Id;
            userTrial.TrialStartDate = DateTime.Now;
            userTrial.SubscriptionActive = true;
            _userTrialRepository.AddUserTrial(userTrial);
            return Ok(userTrial);
        }

        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        }
    }
}