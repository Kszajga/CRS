using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using Xunit;
using CRS.Controllers;
using CRS.Data;

namespace ApiUnitTest
{
    [TestClass]
    public class CustomerTest
    {
        
        //_context = new ApplicationDbContext(options.Options);
        var options = new DbContextOptionsBuilder<CRSContext>();
        options.UseSqlServer(System.Configuration.GetConnectionStringSecureValue("DefaultConnection"));
        CRSContext context = new CRSContext(options);

        [TestMethod]
        public void GetCustomerById()
        {
            var controller = new CustomerController(context);
            var result = controller.GetCustomerByID(1);
        }
    }
}
