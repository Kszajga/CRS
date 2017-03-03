using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Angular2Application2.Data;
using Microsoft.EntityFrameworkCore;
using System;

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
                .Include(e => e.CarModel)
                    .ThenInclude(f => f.CarMake)
                .Include(e => e.FuelType)
                .Include(e => e.ServiceIncidences)
                    .ThenInclude(c => c.ServiceIncidenceName)
                .ToListAsync();
            return Ok(data);
        }

        [HttpGet("[action]")]
        [Route("")]
        [ProducesResponseType(typeof(IEnumerable<Car>), 200)]
        public async Task<IActionResult> GetCars()
        {
            var data = await _context.Car
                .Include(e => e.CarModel)
                    .ThenInclude(f => f.CarMake)
                .Include(e => e.FuelType)
                .Include(e => e.ServiceIncidences)
                    .ThenInclude(c => c.ServiceIncidenceName)
                .Include(e => e.ServiceIncidences)
                    .ThenInclude(e=>e.ServiceIncidenceCarPart)
                        .ThenInclude(e => e.CarPart)
                .ToListAsync();
            return Ok(data);
        }

        [HttpGet("[action]")]
        [Route("")]
        [ProducesResponseType(typeof(IEnumerable<CarMake>), 200)]
        public async Task<IActionResult> GetAllCarMakes()
        {
            var data = await _context.CarMake
                .ToListAsync();
            return Ok(data);
        }
        
        [HttpGet("[action]")]
        [Route("")]
        [ProducesResponseType(typeof(IEnumerable<CarModel>), 200)]
        public async Task<IActionResult> GetCarModelByCarMakeID(int carmakeid)
        {
            var data = await _context.CarModel
                .Where(c => c.CarMakeID == carmakeid)
                .ToListAsync();
            return Ok(data);
        }

        [HttpGet("[action]")]
        [Route("")]
        [ProducesResponseType(typeof(IEnumerable<FuelType>), 200)]
        public async Task<IActionResult> GetFuelTypes()
        {
            var data = await _context.FuelType
                .ToListAsync();
            return Ok(data);
        }

        [HttpPost]
        [Route("")]
        [ProducesResponseType(typeof(Car), 200)]
        public async Task<IActionResult> Insert([FromBody] Car car)
        {
            Console.Write(car);
            if (ModelState.IsValid)
            {
                try
                {
                    _context.Entry(car).State = EntityState.Added;
                    await _context.SaveChangesAsync();
                    return Created("", car);
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                    throw;
                }
                
            }
            return BadRequest(ModelState);
        }
    }
}
