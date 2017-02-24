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
    public class CustomerController : Controller
    {
        private CRSContext _context;

        public CustomerController([FromServices] Data.CRSContext context)
        {
            _context = context;
        }

        [HttpGet("[action]")]
        [Route("")]
        [ProducesResponseType(typeof(IEnumerable<Customer>), 200)]
        public async Task<IActionResult> GetCustomerByID(int customerID)
        {
            var data = await _context.Customer
                .Where(c => c.CustomerID == customerID)
                .Include(car => car.Cars)
                    .ThenInclude(car => car.FuelType)
                .Include(car => car.Cars)
                    .ThenInclude(car2 => car2.CarModel)
                        .ThenInclude(car3 => car3.CarMake)
                .Include(car => car.Cars)
                    .ThenInclude(car4 => car4.ServiceIncidences)
                        .ThenInclude(s => s.ServiceIncidenceName)
                .ToListAsync();
            return Ok(data);
        }

        [HttpGet("[action]")]
        [Route("")]
        [ProducesResponseType(typeof(IEnumerable<Customer>), 200)]
        public async Task<IActionResult> GetAllCustomer()
        {
            var data = await _context.Customer
                .Include(car => car.Cars)
                    .ThenInclude(car => car.FuelType)
                .Include(car => car.Cars)
                    .ThenInclude(car2 => car2.CarModel)
                        .ThenInclude(car3 => car3.CarMake)
                .Include(car => car.Cars)
                    .ThenInclude(car4 => car4.ServiceIncidences)
                        .ThenInclude(s => s.ServiceIncidenceName)
                .ToListAsync();
            return Ok(data);
        }
    }
}
