declare module App.Models {

    interface ICar {
        CarMakeID: number;
        CarModelID: number;
        CarModelID1: number;
        Color: string;
        CustomerID: number;
        EngineNumber: string;
        FuelTypeID: number;
        FuelTypeID1: number;
        VIN: string;
    }

    interface ICarMake {
        CarMakeID: number;
        CarMakeName: string;
    }

    interface ICarModel {
        CarModelID: number;
        CarModelName: string;
    }

    interface IUser {
        userID: number;
        userName: string;
    }

}

