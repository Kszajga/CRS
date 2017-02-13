using System;
using System.Collections.Generic;

namespace Angular2Application2.Data
{
    public class Customer
    {

        public int CustomerID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string IDNumber { get; set; }
        public string  NameOfMother { get; set; }
        public DateTime Birthday { get; set; }
        public string Birthplace { get; set; }


        public DateTime RegisterDate { get; set; }
        public DateTime LastModified { get; set; }

        public ICollection<Car> Cars { get; set; }


        public bool Deleted { get; set; }
    }
}
