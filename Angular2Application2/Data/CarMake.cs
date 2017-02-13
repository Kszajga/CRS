using System.Collections.Generic;

namespace Angular2Application2.Data
{
    public class CarMake
    {
        public int CarMakeID { get; set; }
        public string CarMakeName { get; set; }

        public ICollection<Car> Cars { get; set; }
        //public ICollection<CarModel> CarModel { get; set; }
    }
}
