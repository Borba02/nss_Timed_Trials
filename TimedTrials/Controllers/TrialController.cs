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
        [HttpPost]
        public IActionResult Add(Trial trial)
        {
            _trialRepository.AddTrial(trial);
            return Ok(trial);
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            {
                _trialRepository.DeleteTrial(id);
                return NoContent();
            }
        }
        [HttpGet("{id}")]
        public IActionResult GetTrialById(int id)
        {
            return Ok(_trialRepository.GetById(id));
        }
    }
}
