using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Angular2Application2.Data;

namespace Angular2Application2.Migrations
{
    [DbContext(typeof(CRSContext))]
    [Migration("20170403185200_akármi2")]
    partial class akármi2
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.0-rtm-22752")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Angular2Application2.Data.Car", b =>
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

                    b.Property<string>("LicensePlate");

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

            modelBuilder.Entity("Angular2Application2.Data.CarMake", b =>
                {
                    b.Property<int>("CarMakeID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CarMakeName");

                    b.HasKey("CarMakeID");

                    b.ToTable("CarMake");
                });

            modelBuilder.Entity("Angular2Application2.Data.CarModel", b =>
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

            modelBuilder.Entity("Angular2Application2.Data.CarPart", b =>
                {
                    b.Property<int>("CarPartID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CarPartName");

                    b.Property<int>("Price");

                    b.HasKey("CarPartID");

                    b.ToTable("CarPart");
                });

            modelBuilder.Entity("Angular2Application2.Data.Customer", b =>
                {
                    b.Property<int>("CustomerID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address");

                    b.Property<DateTime?>("Birthday");

                    b.Property<string>("Birthplace");

                    b.Property<bool>("Deleted");

                    b.Property<string>("FirstName")
                        .IsRequired();

                    b.Property<string>("IDNumber");

                    b.Property<DateTime?>("LastModified")
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<string>("LastName")
                        .IsRequired();

                    b.Property<string>("NameOfMother");

                    b.Property<string>("PhoneNumber");

                    b.Property<DateTime?>("RegisterDate")
                        .ValueGeneratedOnAdd()
                        .HasDefaultValueSql("GetUtcDate()");

                    b.HasKey("CustomerID");

                    b.ToTable("Customer");
                });

            modelBuilder.Entity("Angular2Application2.Data.FuelType", b =>
                {
                    b.Property<int>("FuelTypeID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("FuelTypeName");

                    b.HasKey("FuelTypeID");

                    b.ToTable("FuelType");
                });

            modelBuilder.Entity("Angular2Application2.Data.ServiceIncidence", b =>
                {
                    b.Property<int>("ServiceIncidenceID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CarID");

                    b.Property<int>("ManHour");

                    b.Property<int>("Mileage");

                    b.Property<DateTime>("RepairDate");

                    b.Property<int>("ServiceIncidenceNameID");

                    b.HasKey("ServiceIncidenceID");

                    b.HasIndex("CarID");

                    b.HasIndex("ServiceIncidenceNameID");

                    b.ToTable("ServiceIncidence");
                });

            modelBuilder.Entity("Angular2Application2.Data.ServiceIncidenceCarPart", b =>
                {
                    b.Property<int>("CarPartID");

                    b.Property<int>("ServiceIncidenceID");

                    b.HasKey("CarPartID", "ServiceIncidenceID");

                    b.HasIndex("ServiceIncidenceID");

                    b.ToTable("ServiceIncidenceCarPart");
                });

            modelBuilder.Entity("Angular2Application2.Data.ServiceIncidenceName", b =>
                {
                    b.Property<int>("ServiceIncidenceNameID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("IncidenceName");

                    b.HasKey("ServiceIncidenceNameID");

                    b.ToTable("ServiceIncidenceName");
                });

            modelBuilder.Entity("Angular2Application2.Data.Car", b =>
                {
                    b.HasOne("Angular2Application2.Data.CarModel", "CarModel")
                        .WithMany()
                        .HasForeignKey("CarModelID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Angular2Application2.Data.CarModel")
                        .WithMany("Cars")
                        .HasForeignKey("CarModelID1");

                    b.HasOne("Angular2Application2.Data.Customer", "Customer")
                        .WithMany("Cars")
                        .HasForeignKey("CustomerID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Angular2Application2.Data.FuelType", "FuelType")
                        .WithMany()
                        .HasForeignKey("FuelTypeID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Angular2Application2.Data.FuelType")
                        .WithMany("Cars")
                        .HasForeignKey("FuelTypeID1");
                });

            modelBuilder.Entity("Angular2Application2.Data.CarModel", b =>
                {
                    b.HasOne("Angular2Application2.Data.CarMake", "CarMake")
                        .WithMany("CarModel")
                        .HasForeignKey("CarMakeID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Angular2Application2.Data.ServiceIncidence", b =>
                {
                    b.HasOne("Angular2Application2.Data.Car", "Car")
                        .WithMany("ServiceIncidences")
                        .HasForeignKey("CarID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Angular2Application2.Data.ServiceIncidenceName", "ServiceIncidenceName")
                        .WithMany("ServiceIncidences")
                        .HasForeignKey("ServiceIncidenceNameID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Angular2Application2.Data.ServiceIncidenceCarPart", b =>
                {
                    b.HasOne("Angular2Application2.Data.CarPart", "CarPart")
                        .WithMany("ServiceIncidenceCarPart")
                        .HasForeignKey("CarPartID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Angular2Application2.Data.ServiceIncidence", "ServiceIncidence")
                        .WithMany("ServiceIncidenceCarPart")
                        .HasForeignKey("ServiceIncidenceID")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
