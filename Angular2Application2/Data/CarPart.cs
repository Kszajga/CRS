using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2Application2.Data
{
    public class CarPart
    {
        public int CarPartID { get; set; }
        public string CarPartName { get; set; }
        public int Price { get; set; }

        public List<ServiceIncidenceCarPart> ServiceIncidenceCarPart { get; set; }
    }
}
