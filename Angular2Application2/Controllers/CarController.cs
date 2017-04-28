using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CRS.Data;
using Microsoft.EntityFrameworkCore;
using System;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace CRS.Controllers
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
        public async Task<IActionResult> GetCarByCarID(int carID)
        {
            var data = await _context.Car
                .Where(c => c.CarID == carID)
                .Include(e => e.CarModel)
                    .ThenInclude(f => f.CarMake)
                .Include(e => e.FuelType)
                .ToListAsync();
            return Ok(data);
        }
        
        [HttpGet("[action]")]
        [Route("")]
        [ProducesResponseType(typeof(IEnumerable<Car>), 200)]
        public async Task<IActionResult> GetCarsForSearch(string firstName, string lastName, string licensePlate, int carmakeselected, int carmodelselected)
        {
            var query = (from car in _context.Car
                         .Include(car => car.Customer)
                         .Include(car => car.CarModel)
                            .ThenInclude( car=> car.CarMake)
                        //.Include(e => e.FuelType)
                        //.Include(e => e.ServiceIncidences)
                        //    .ThenInclude(c => c.ServiceIncidenceName)
                        //.Include(e => e.ServiceIncidences)
                        //    .ThenInclude(e => e.ServiceIncidenceCarPart)
                        //        .ThenInclude(e => e.CarPart)
                        select car);
            
            if (firstName != null)
                query = query.Where(car => car.Customer.FirstName.Contains(firstName));
            
            if (lastName != null)
                query = query.Where(car => car.Customer.LastName.Contains(lastName));
            
            if (licensePlate != null)
                query = query.Where(car => car.LicensePlate.Contains(licensePlate));
            
            if (carmakeselected > 0)
                query = query.Where(car => car.CarModel.CarMakeID.Equals(carmakeselected));
            
            if (carmodelselected > 0)
                query = query.Where(car => car.CarModelID.Equals(carmodelselected));
            
            await query.ToListAsync();
            return Ok(query);
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

        [HttpPut]
        [Route("")]
        public async Task<IActionResult> Update([FromBody] Car car)
        {
            if (ModelState.IsValid)
            {
                _context.Update(car);
                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    return NotFound(car);
                }

                return new NoContentResult();
            }
            return BadRequest(ModelState);
        }
    }
}
