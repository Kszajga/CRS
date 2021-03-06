﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRS.Data
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
        public DbSet<ServiceIncidenceCarPart> ServiceIncidenceCarPart { get; set; }
        public DbSet<CarPart> CarPart { get; set; }

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
            customerTableModel.Property(p => p.LastName).IsRequired();
            customerTableModel.Property(p => p.RegisterDate).ValueGeneratedOnAdd().HasDefaultValueSql("GetUtcDate()");
            customerTableModel.Property(p => p.LastModified).Metadata.IsReadOnlyBeforeSave = false;
            customerTableModel.Property(p => p.LastModified).ValueGeneratedOnAddOrUpdate();
            customerTableModel.Property(p => p.LastModified).Metadata.IsReadOnlyAfterSave = false;

            var carTableModel = modelBuilder.Entity<Car>();
            carTableModel.HasKey(p => p.CarID);
            carTableModel.HasOne(s => s.Customer);
            carTableModel.HasOne(s => s.FuelType);
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
            carMakeTableModel.HasMany(p => p.CarModel);

            var carModelTableModel = modelBuilder.Entity<CarModel>();
            carModelTableModel.HasKey(p => p.CarModelID);
            carModelTableModel.Property(p => p.CarModelID).UseSqlServerIdentityColumn();
            carModelTableModel.HasOne(s => s.CarMake);
            carModelTableModel.HasMany(s => s.Cars);

            modelBuilder.Entity<ServiceIncidenceCarPart>()
            .HasKey(t => new { t.CarPartID, t.ServiceIncidenceID });

            modelBuilder.Entity<ServiceIncidenceCarPart>()
                .HasOne(pt => pt.ServiceIncidence)
                .WithMany(p => p.ServiceIncidenceCarPart)
                .HasForeignKey(pt => pt.ServiceIncidenceID);

            modelBuilder.Entity<ServiceIncidenceCarPart>()
                .HasOne(pt => pt.CarPart)
                .WithMany(t => t.ServiceIncidenceCarPart)
                .HasForeignKey(pt => pt.CarPartID);
        }
    }
}
