import {Trip} from "./Trip";

export interface IDataLayer{
    getAllTrips():Trip[];
    getTripById(id:number):Trip;
    addTrip(trip:Trip):Trip;
    editTrip(trip:Trip):Trip;
    removeTrip(id:number):void;
}