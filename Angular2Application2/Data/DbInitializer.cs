using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace CRS.Data
{
    public static class DbInitializer
    {
        public static void Initialize(CRSContext context)
        {
            if (!context.Database.EnsureCreated())
            {
                context.Database.Migrate();
            }
            

            if (context.ServiceIncidenceCarPart.Any())
            {
                return;
            }

            var customers = new Customer[]
            {
                new Customer {Birthday = DateTime.Parse("1990.06.08."), PhoneNumber = "06308636059", Address = "Beled city", Birthplace = "Kapuvár", Deleted = false, FirstName = "Ádám", LastName = "Horváth", IDNumber = "458068LA", NameOfMother = "Jakab Márta"}
            };

            foreach ( Customer c in customers)
            {
                context.Customer.Add(c);
            }
            context.SaveChanges();
            
            var carmakes = new CarMake[]
            {
                new CarMake {CarMakeName = "Acura" },
                new CarMake {CarMakeName = "Alfa Romeo" },
                new CarMake {CarMakeName = "AMC" },
                new CarMake {CarMakeName = "Aston Martin" },
                new CarMake {CarMakeName = "Audi" },
                new CarMake {CarMakeName = "Avanti" },
                new CarMake {CarMakeName = "Bentley" },
                new CarMake {CarMakeName = "BMW" },
                new CarMake {CarMakeName = "Buick" },
                new CarMake {CarMakeName = "Cadillac" },
                new CarMake {CarMakeName = "Chevrolet" },
                new CarMake {CarMakeName = "Chrysler" },
                new CarMake {CarMakeName = "Daewoo" },
                new CarMake {CarMakeName = "Daihatsu" },
                new CarMake {CarMakeName = "Datsun" },
                new CarMake {CarMakeName = "DeLorean" },
                new CarMake {CarMakeName = "Dodge" },
                new CarMake {CarMakeName = "Eagle" },
                new CarMake {CarMakeName = "Ferrari" },
                new CarMake {CarMakeName = "Fiat" },
                new CarMake {CarMakeName = "Fisker" },
                new CarMake {CarMakeName = "Ford" },
                new CarMake {CarMakeName = "Freightliner" },
                new CarMake {CarMakeName = "Geo" },
                new CarMake {CarMakeName = "GMC" },
                new CarMake {CarMakeName = "Honda" },
                new CarMake {CarMakeName = "Hummer" },
                new CarMake {CarMakeName = "Hyundai" },
                new CarMake {CarMakeName = "Infiniti" },
                new CarMake {CarMakeName = "Isuzu" },
                new CarMake {CarMakeName = "Jaguar" },
                new CarMake {CarMakeName = "Jeep" },
                new CarMake {CarMakeName = "Kia" },
                new CarMake {CarMakeName = "Lamborghini" },
                new CarMake {CarMakeName = "Lancia" },
                new CarMake {CarMakeName = "Land Rover" },
                new CarMake {CarMakeName = "Lexus" },
                new CarMake {CarMakeName = "Lincoln" },
                new CarMake {CarMakeName = "Lotus" },
                new CarMake {CarMakeName = "Maserati" },
                new CarMake {CarMakeName = "Maybach" },
                new CarMake {CarMakeName = "Mazda" },
                new CarMake {CarMakeName = "McLaren" },
                new CarMake {CarMakeName = "Mercedes-Benz" },
                new CarMake {CarMakeName = "Mercury" },
                new CarMake {CarMakeName = "Merkur" },
                new CarMake {CarMakeName = "Mini" },
                new CarMake {CarMakeName = "Mitsubishi" },
                new CarMake {CarMakeName = "Nissan" },
                new CarMake {CarMakeName = "Oldsmobile" },
                new CarMake {CarMakeName = "Peugeot" },
                new CarMake {CarMakeName = "Plymouth" },
                new CarMake {CarMakeName = "Pontiac" },
                new CarMake {CarMakeName = "Porsche" },
                new CarMake {CarMakeName = "RAM" },
                new CarMake {CarMakeName = "Renault" },
                new CarMake {CarMakeName = "Rolls-Royce" },
                new CarMake {CarMakeName = "Saab" },
                new CarMake {CarMakeName = "Saturn" },
                new CarMake {CarMakeName = "Scion" },
                new CarMake {CarMakeName = "Smart" },
                new CarMake {CarMakeName = "SRT" },
                new CarMake {CarMakeName = "Sterling" },
                new CarMake {CarMakeName = "Subaru" },
                new CarMake {CarMakeName = "Suzuki" },
                new CarMake {CarMakeName = "Tesla" },
                new CarMake {CarMakeName = "Toyota" },
                new CarMake {CarMakeName = "Triumph" },
                new CarMake {CarMakeName = "Volkswagen" },
                new CarMake {CarMakeName = "Volvo" },
                new CarMake {CarMakeName = "Yugo" },
                new CarMake {CarMakeName = "Egyéb" },

            };

            foreach (CarMake c in carmakes)
            {
                context.CarMake.Add(c);
            }
            context.SaveChanges();

            var carmodels = new CarModel[]
            {
                new CarModel {CarModelName = "Swift", CarMakeID = 65 },
                new CarModel {CarModelName = "6", CarMakeID = 42 }
            };

            foreach (CarModel c in carmodels)
            {
                context.CarModel.Add(c);
            }
            context.SaveChanges();

            var fueltypes = new FuelType[]
            {
                new FuelType {FuelTypeName = "Benzin" },
                new FuelType {FuelTypeName = "Dízel" }
            };

            foreach (FuelType c in fueltypes)
            {
                context.FuelType.Add(c);
            }
            context.SaveChanges();

            var cars = new Car[]
            {
                new Car {CarModelID = 1, Color = "zöld", CustomerID = 1, EngineNumber = "G13BA", FuelTypeID = 1, VIN = "TSMMA", LicensePlate="FCB-225"},
                new Car {CarModelID = 2, Color = "kék", CustomerID = 1, EngineNumber = "RF5C", FuelTypeID = 2, VIN = "J", LicensePlate="JZM-110"}
            };

            foreach (Car c in cars)
            {
                context.Car.Add(c);
            }
            context.SaveChanges();

            var carparts = new CarPart[]
            {
                new CarPart {CarPartName = "kuplung", Price = 84000},
                new CarPart {CarPartName = "hátsó féknyereg", Price = 39500}
            };

            foreach (CarPart c in carparts)
            {
                context.CarPart.Add(c);
            }
            context.SaveChanges();

            var serviceincidencenames = new ServiceIncidenceName[]
            {
                new ServiceIncidenceName {IncidenceName = "javítás?" }
            };
            foreach (ServiceIncidenceName c in serviceincidencenames)
            {
                context.ServiceIncidenceName.Add(c);
            }
            context.SaveChanges();

            var serviceincidences = new ServiceIncidence[]
            {
                new ServiceIncidence { CarID = 1, RepairDate = DateTime.Parse("2017.03.01."), ServiceIncidenceNameID = 1}
            };
            foreach (ServiceIncidence c in serviceincidences)
            {
                context.ServiceIncidence.Add(c);
            }
            context.SaveChanges();

            var serviceincidencecarparts = new ServiceIncidenceCarPart[]
            {
                new ServiceIncidenceCarPart { CarPartID = 1, ServiceIncidenceID = 1 },
                new ServiceIncidenceCarPart { CarPartID = 2, ServiceIncidenceID = 1 }
            };
            foreach (ServiceIncidenceCarPart c in serviceincidencecarparts)
            {
                context.ServiceIncidenceCarPart.Add(c);
            }
            context.SaveChanges();
        }
    }
}
