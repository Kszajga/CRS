using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Angular2Application2.Data
{
    public class ServiceIncidenceName
    {
        public int ServiceIncidenceNameID { get; set; }
        public string IncidenceName { get; set; }

        public ICollection<ServiceIncidence> ServiceIncidences { get; set; }
    }
}
