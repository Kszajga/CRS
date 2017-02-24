using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Angular2Application2.Data
{
    public static class DbInitializer
    {
        public static void Initialize(CRSContext context)
        {
            context.Database.EnsureCreated();

            if (context.Customer.Any())
            {
                return;
            }

            var customers = new Customer[]
            {
                new Customer {Birthday = DateTime.Parse("1990.06.08."), Birthplace = "Kapuvár", Deleted = false, FirstName = "Ádám", LastName = "Horváth", LastModified = DateTime.Parse("2017.02.18."), IDNumber = "458068LA", NameOfMother = "Jakab Márta", RegisterDate = DateTime.Parse("2017.02.13.")  }
            };

            foreach ( Customer c in customers)
            {
                context.Customer.Add(c);
            }
            context.SaveChanges();
            
            var carmakes = new CarMake[]
            {
                new CarMake {CarMakeName = "Suzuki" },
                new CarMake {CarMakeName = "Mazda" }
            };

            foreach (CarMake c in carmakes)
            {
                context.CarMake.Add(c);
            }
            context.SaveChanges();

            var carmodels = new CarModel[]
            {
                new CarModel {CarModelName = "Swift", CarMakeID = 1 },
                new CarModel {CarModelName = "6", CarMakeID = 2 }
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
                new Car {CarModelID = 1, Color = "zöld", CustomerID = 1, EngineNumber = "G13BA", FuelTypeID = 1, VIN = "TSMMA"},
                new Car {CarModelID = 2, Color = "kék", CustomerID = 1, EngineNumber = "RF5C", FuelTypeID = 2, VIN = "J"}
            };

            foreach (Car c in cars)
            {
                context.Car.Add(c);
            }
            context.SaveChanges();
        }
    }
}
