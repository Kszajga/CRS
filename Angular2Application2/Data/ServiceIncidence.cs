using System;
using System.Collections.Generic;

namespace Angular2Application2.Data
{
    public class ServiceIncidence
    {
        public ServiceIncidence() { }
        public int ServiceIncidenceID { get; set; }

        public int CarID { get; set; }
        public Car Car { get; set; }


        public int ServiceIncidenceNameID { get; set; }
        public ServiceIncidenceName ServiceIncidenceName { get; set; }

        public List<ServiceIncidenceCarPart> ServiceIncidenceCarPart { get; set; }

        public DateTime RepairDate { get; set; }
    }
}
