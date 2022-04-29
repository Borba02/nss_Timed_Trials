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
    public class TrialController : ControllerBase
    {
        private readonly ITrialRepository _trialRepository;

        public TrialController(
            ITrialRepository trialRepository)
        {
            _trialRepository = trialRepository;
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_trialRepository.GetAll());
        }
    }
}
