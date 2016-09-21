import {Trip} from "./Trip";

export interface IDataLayer{
    getAllTrips():Trip[];
    addTrip(trip:Trip):Trip;
}