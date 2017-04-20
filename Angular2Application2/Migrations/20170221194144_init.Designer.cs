using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using CRS.Data;

namespace CRS.Migrations
{
    [DbContext(typeof(CRSContext))]
    [Migration("20170221194144_init")]
    partial class init
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.0-rtm-22752")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("CRS.Data.Car", b =>
                {
                    b.Property<int>("CarID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CarModelID");

                    b.Property<int?>("CarModelID1");

                    b.Property<string>("Color");

                    b.Property<int>("CustomerID");

                    b.Property<string>("EngineNumber");

                    b.Property<int>("FuelTypeID");

                    b.Property<int?>("FuelTypeID1");

                    b.Property<string>("VIN")
                        .IsRequired();

                    b.HasKey("CarID");

                    b.HasIndex("CarModelID");

                    b.HasIndex("CarModelID1");

                    b.HasIndex("CustomerID");

                    b.HasIndex("FuelTypeID");

                    b.HasIndex("FuelTypeID1");

                    b.ToTable("Car");
                });

            modelBuilder.Entity("CRS.Data.CarMake", b =>
                {
                    b.Property<int>("CarMakeID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CarMakeName");

                    b.HasKey("CarMakeID");

                    b.ToTable("CarMake");
                });

            modelBuilder.Entity("CRS.Data.CarModel", b =>
                {
                    b.Property<int>("CarModelID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CarMakeID");

                    b.Property<string>("CarModelName");

                    b.HasKey("CarModelID");

                    b.HasIndex("CarMakeID");

                    b.ToTable("CarModel");
                });

            modelBuilder.Entity("CRS.Data.Customer", b =>
                {
                    b.Property<int>("CustomerID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("Birthday");

                    b.Property<string>("Birthplace");

                    b.Property<bool>("Deleted");

                    b.Property<string>("FirstName")
                        .IsRequired();

                    b.Property<string>("IDNumber");

                    b.Property<DateTime>("LastModified");

                    b.Property<string>("LastName");

                    b.Property<string>("NameOfMother");

                    b.Property<DateTime>("RegisterDate");

                    b.HasKey("CustomerID");

                    b.ToTable("Customer");
                });

            modelBuilder.Entity("CRS.Data.FuelType", b =>
                {
                    b.Property<int>("FuelTypeID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("FuelTypeName");

                    b.HasKey("FuelTypeID");

                    b.ToTable("FuelType");
                });

            modelBuilder.Entity("CRS.Data.ServiceIncidence", b =>
                {
                    b.Property<int>("ServiceIncidenceID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CarID");

                    b.Property<DateTime>("RepairDate");

                    b.Property<int>("ServiceIncidenceNameID");

                    b.HasKey("ServiceIncidenceID");

                    b.HasIndex("CarID");

                    b.HasIndex("ServiceIncidenceNameID");

                    b.ToTable("ServiceIncidence");
                });

            modelBuilder.Entity("CRS.Data.ServiceIncidenceName", b =>
                {
                    b.Property<int>("ServiceIncidenceNameID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("IncidenceName");

                    b.HasKey("ServiceIncidenceNameID");

                    b.ToTable("ServiceIncidenceName");
                });

            modelBuilder.Entity("CRS.Data.Car", b =>
                {
                    b.HasOne("CRS.Data.CarModel", "CarModel")
                        .WithMany()
                        .HasForeignKey("CarModelID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("CRS.Data.CarModel")
                        .WithMany("Cars")
                        .HasForeignKey("CarModelID1");

                    b.HasOne("CRS.Data.Customer", "Customer")
                        .WithMany("Cars")
                        .HasForeignKey("CustomerID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("CRS.Data.FuelType", "FuelType")
                        .WithMany()
                        .HasForeignKey("FuelTypeID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("CRS.Data.FuelType")
                        .WithMany("Cars")
                        .HasForeignKey("FuelTypeID1");
                });

            modelBuilder.Entity("CRS.Data.CarModel", b =>
                {
                    b.HasOne("CRS.Data.CarMake", "CarMake")
                        .WithMany("CarModel")
                        .HasForeignKey("CarMakeID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("CRS.Data.ServiceIncidence", b =>
                {
                    b.HasOne("CRS.Data.Car", "Car")
                        .WithMany("ServiceIncidences")
                        .HasForeignKey("CarID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("CRS.Data.ServiceIncidenceName", "ServiceIncidenceName")
                        .WithMany("ServiceIncidences")
                        .HasForeignKey("ServiceIncidenceNameID")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
