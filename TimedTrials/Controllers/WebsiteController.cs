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
    public class WebsiteController : ControllerBase
    {
        private readonly IWebsiteRepository _websiteRepository;

        public WebsiteController(
            IWebsiteRepository websiteRepository)
        {
            _websiteRepository = websiteRepository;
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_websiteRepository.GetAll());
        }
        [HttpPost]
        public IActionResult Add(Website website)
        {
            _websiteRepository.AddWebsite(website);
            return Ok(website);
        }
    }
}
