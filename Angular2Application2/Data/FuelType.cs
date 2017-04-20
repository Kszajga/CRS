using System.Collections.Generic;

namespace CRS.Data
{
    public class FuelType
    {
        public int FuelTypeID { get; set; }
        public string FuelTypeName { get; set; }

        public ICollection<Car> Cars { get; set; }
    }
}
