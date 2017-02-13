using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Angular2Application2.Data;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Angular2Application2.Controllers
{
    [Route("api/[controller]")]
    public class CarController : Controller
    {
        private CRSContext _context;

        public CarController([FromServices] Data.CRSContext context)
        {
            _context = context;
        }

        [HttpGet("[action]")]
        [Route("")]
        [ProducesResponseType(typeof(IEnumerable<Car>), 200)]
        public async Task<IActionResult> GetCarsByCustomerID(int customerID)
        {
            var data = await _context.Car
                .Where(c => c.CustomerID == customerID)
                .Include(si => si.ServiceIncidences)
                .Include(si => si.FuelType)
                //.Include(customer => customer.Customer)
                .ToListAsync();
            return Ok(data);
        }
    }
}
