using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CRS.Data;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace CRS.Controllers
{
    [Route("api/[controller]")]
    public class ServiceIncidenceController : Controller
    {
        private CRSContext _context;

        public ServiceIncidenceController([FromServices] Data.CRSContext context)
        {
            _context = context;
        }

        [HttpGet("[action]")]
        [Route("")]
        [ProducesResponseType(typeof(IEnumerable<ServiceIncidence>), 200)]
        public async Task<IActionResult> GetIncidencesByCarID(int carID)
        {
            var data = await _context.ServiceIncidence
                    .Include(s => s.ServiceIncidenceName)
                    .Include(s => s.ServiceIncidenceCarPart)
                    .Where(s=> s.CarID == carID)
                .ToListAsync();
            return Ok(data);
        }

        [HttpGet("[action]")]
        [Route("")]
        [ProducesResponseType(typeof(IEnumerable<ServiceIncidence>), 200)]
        public async Task<IActionResult> GetIncidenceByIncidenceID(int incidenceID)
        {
            var data = await _context.ServiceIncidence
                    .Include(s => s.ServiceIncidenceName)
                    .Include(s => s.ServiceIncidenceCarPart)
                        .ThenInclude(s => s.CarPart)
                    .Where(s => s.ServiceIncidenceID == incidenceID)
                .ToListAsync();
            return Ok(data);
        }

        [HttpPost]
        [Route("")]
        [ProducesResponseType(typeof(Customer), 200)]
        public async Task<IActionResult> Insert([FromBody] ServiceIncidence incidence)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    _context.Entry(incidence).State = EntityState.Added;
                    await _context.SaveChangesAsync();
                    //return Created("", customer);
                    return Ok(incidence);
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                    throw;
                }

            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        [Route("")]
        public async Task<IActionResult> Update([FromBody] ServiceIncidence incidence)
        {
            if (ModelState.IsValid)
            {
                _context.Update(incidence);
                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    return NotFound(incidence);
                }

                return new NoContentResult();
            }
            return BadRequest(ModelState);
        }
    }
}
