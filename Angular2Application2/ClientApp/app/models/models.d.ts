declare module App.Models {

    interface ICar {
        carID: number;
        carMakeID: number;
        carModelID: number;
        color: string;
        customerID: number;
        engineNumber: string;
        fuelTypeID: number;
        vin: string;
        licensePlate: string;
        productionDate: Date;
        firstRegistrationDate: Date;
        technicalExamDate: Date;
    }

    interface ICarMake {
        CarMakeID: number;
        CarMakeName: string;
    }

    interface ICarModel {
        CarModelID: number;
        CarModelName: string;
    }

    interface ICustomer {
        customerID: number;
        firstName: string;
        lastName: string;
        birthplace: string;
        birthday: Date;
        address: string;
        idNubmer: string;
        phoneNumber: string;
        nameOfMother: string;
        //RegisterDate: Date;
        LastModified: Date;
    }

    interface IFuelType {
        FuelTypeID: number;
        FuelTypeName: string;
    }

    interface IServiceIncidence {
        ServiceIncidenceID: number;
        ServiceIncidenceNameID: number;
        ServiceIncidenceName: string;
        CarID: number;
        ManHour: number;
        Mileage: number;
    }

}

