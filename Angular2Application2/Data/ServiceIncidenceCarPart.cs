using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRS.Data
{
    public class ServiceIncidenceCarPart
    {
        public int CarPartID { get; set; }
        public CarPart CarPart { get; set; }

        public int ServiceIncidenceID { get; set; }
        public ServiceIncidence ServiceIncidence { get; set; }

    }
}
