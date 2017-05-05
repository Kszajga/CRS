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
                    .ThenInclude(fuel => fuel.FuelType)
                .Include(car => car.Cars)
                    .ThenInclude(model => model.CarModel)
                        .ThenInclude(make => make.CarMake)
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

        [HttpPost]
        [Route("")]
        [ProducesResponseType(typeof(Customer), 200)]
        public async Task<IActionResult> Insert([FromBody] Customer customer)
        {
            Console.Write(customer);
            if (ModelState.IsValid)
            {
                try
                {
                    _context.Entry(customer).State = EntityState.Added;
                    await _context.SaveChangesAsync();
                    //return Created("", customer);
                    return Ok(customer);
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
        public async Task<IActionResult> Update([FromBody] Customer customer)
        {
            if (ModelState.IsValid)
            {
                _context.Update(customer);
                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    return NotFound(customer);
                }

                return new NoContentResult();
            }
            return BadRequest(ModelState);
        }
    }
}
