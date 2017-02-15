using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2Application2.Data
{
    public class CRSContext : DbContext
    {

        public CRSContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Customer> Customer { get; set; }
        public DbSet<Car> Car { get; set; }
        public DbSet<CarMake> CarMake {get;set;}
        public DbSet<CarModel> CarModel { get; set; }
        public DbSet<FuelType> FuelType { get; set; }

        public DbSet<ServiceIncidence> ServiceIncidence { get; set; }
        public DbSet<ServiceIncidenceName> ServiceIncidenceName { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            var customerTableModel = modelBuilder.Entity<Customer>();
            customerTableModel.HasKey(p => new { p.CustomerID });
            customerTableModel.HasMany(c => c.Cars);
            customerTableModel.Property(p => p.CustomerID).UseSqlServerIdentityColumn();
            customerTableModel.Property(p => p.FirstName).IsRequired();

            var carTableModel = modelBuilder.Entity<Car>();
            carTableModel.HasKey(p => p.CarID);
            carTableModel.HasOne(s => s.Customer);
            carTableModel.HasOne(s => s.FuelType);
            carTableModel.HasOne(s => s.CarMake);
            carTableModel.HasOne(s => s.CarModel);
            carTableModel.Property(p => p.CarID).UseSqlServerIdentityColumn();
            carTableModel.Property(p => p.VIN).IsRequired();
            carTableModel.HasMany(s => s.ServiceIncidences);

            var serviceIncidenceTableMdoel = modelBuilder.Entity<ServiceIncidence>();
            serviceIncidenceTableMdoel.HasKey(p => p.ServiceIncidenceID);
            serviceIncidenceTableMdoel.Property(p => p.ServiceIncidenceID).UseSqlServerIdentityColumn();
            serviceIncidenceTableMdoel.HasOne(p => p.Car);

            var incidencename = modelBuilder.Entity<ServiceIncidenceName>();
            incidencename.HasKey(p => p.ServiceIncidenceNameID);
            incidencename.Property(p => p.ServiceIncidenceNameID).UseSqlServerIdentityColumn();
            incidencename.HasMany(p => p.ServiceIncidences);

            var fuelTypeTableModel = modelBuilder.Entity<FuelType>();
            fuelTypeTableModel.HasKey(p => p.FuelTypeID);
            fuelTypeTableModel.Property(p => p.FuelTypeID).UseSqlServerIdentityColumn();
            fuelTypeTableModel.HasMany(s => s.Cars);

            var carMakeTableModel = modelBuilder.Entity<CarMake>();
            carMakeTableModel.HasKey(p => p.CarMakeID);
            carMakeTableModel.Property(p => p.CarMakeID).UseSqlServerIdentityColumn();
            //carMakeTableModel.HasMany(s => s.Cars);

            var carModelTableModel = modelBuilder.Entity<CarModel>();
            carModelTableModel.HasKey(p => p.CarModelID);
            carModelTableModel.Property(p => p.CarModelID).UseSqlServerIdentityColumn();
            carModelTableModel.HasMany(s => s.Cars);

        }
    }
}
