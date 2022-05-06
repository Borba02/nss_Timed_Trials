using System;
using System.Collections.Generic;
using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;
using TimedTrials.Repositories;
using TimedTrials.Models;
using Microsoft.AspNetCore.Authorization;

namespace TimedTrials.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserTrialController : ControllerBase
    {
        private readonly IUserTrialRepository _userTrialRepository;
        private readonly IUserProfileRepository _userProfileRepository;
        private readonly ITrialRepository _trialRepository;

        public UserTrialController(
            IUserTrialRepository userTrialRepository,
            IUserProfileRepository userProfileRepository,
            ITrialRepository trialRepository)
        {
            _userTrialRepository = userTrialRepository;
            _userProfileRepository = userProfileRepository;
            _trialRepository = trialRepository;
        }
        [HttpGet]
        public IActionResult Get()
        {
            var currentUserProfile = GetCurrentUserProfile();
            var userId = currentUserProfile.Id;
            return Ok(_userTrialRepository.GetActiveUserTrials(userId));
        }
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(_userTrialRepository.GetUserTrialById(id));
        }

        [HttpPost("{trialId}")]
        public IActionResult Add(int trialId)
        {
            UserTrial userTrial = new UserTrial();
            var currentUserProfile = GetCurrentUserProfile();
            userTrial.TrialId = trialId;
            userTrial.Trial = _trialRepository.GetById(trialId);
            userTrial.UserId = currentUserProfile.Id;
            userTrial.TrialStartDate = DateTime.Now;
            userTrial.SubscriptionActive = true;
            _userTrialRepository.AddUserTrial(userTrial);
            return Ok(userTrial);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _userTrialRepository.DeleteUserTrial(id);
            return Ok(id);
        }
        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        }
    }
}