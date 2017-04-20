using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace CRS.Data
{
    public class ServiceIncidenceName
    {
        public int ServiceIncidenceNameID { get; set; }
        public string IncidenceName { get; set; }

        public ICollection<ServiceIncidence> ServiceIncidences { get; set; }
    }
}
