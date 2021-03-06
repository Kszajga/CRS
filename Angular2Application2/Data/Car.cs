﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRS.Data
{
    public class Car
    {
        public int CarID { get; set; }
        //public int CarMakeID { get; set; }
        //public CarMake CarMake { get; set; }
        public int CarModelID { get; set; }
        public CarModel CarModel { get; set; }
        public int FuelTypeID { get; set; }
        public FuelType FuelType { get; set; }
        public string VIN { get; set; }
        public string EngineNumber { get; set; }
        public string Color { get; set; }
        public string LicensePlate { get; set; }
        public DateTime? ProductionDate { get; set; }
        public DateTime? FirstRegistrationDate { get; set; }
        public DateTime? TechnicalExamDate { get; set; }

        public bool Deleted { get; set; }

        public int CustomerID { get; set; }
        public Customer Customer { get; set; }

        
        public List<ServiceIncidence> ServiceIncidences { get; set; }
    }
}
