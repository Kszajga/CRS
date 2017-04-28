using Microsoft.VisualStudio.TestTools.UnitTesting;

using CRS.Controllers;
using CRS.Data;

namespace ApiUnitTest
{
    [TestClass]
    public class CustomerTest
    {
        //DbContextOptions options;
        CRSContext context = new CRSContext();
        [TestMethod]
        public void GetCustomerById()
        {
            var controller = new CustomerController(context);
        }
    }
}
