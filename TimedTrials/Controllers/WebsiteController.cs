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
        [HttpGet("{id}")]
        public IActionResult GetWebsiteById(int id)
        {
            return Ok(_websiteRepository.GetById(id));
        }
        [HttpPost]
        public IActionResult Add(Website website)
        {
            _websiteRepository.AddWebsite(website);
            return Ok(website);
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {

            _websiteRepository.DeleteWebsite(id);
            return NoContent();

        }
        [HttpPut]
        public IActionResult Edit(Website website)
        {
            _websiteRepository.EditWebsite(website);
            return Ok(website);
        }
    }
}
