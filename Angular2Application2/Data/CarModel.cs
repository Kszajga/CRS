using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2Application2.Data
{
    public class CarModel
    {
        public int CarModelID { get; set; }
        public string CarModelName { get; set; }

        public int CarMakeID { get; set; }
        public CarMake CarMake { get; set; }
        public ICollection<Car> Cars { get; set; }
    }
}
