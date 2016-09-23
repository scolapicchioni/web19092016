import {Trip} from "./Trip";
import {IDataLayer} from "./IDataLayer";

export class ArrayDataLayer implements IDataLayer{
    
    private _trips : Trip[];
   
   constructor(){
       this._trips = [];
       this._trips.push(new Trip(1, "Roma", "bla", "01/01/01",9));
       this._trips.push(new Trip(2, "Paris", "yada", "01/01/01",8));
       this._trips.push(new Trip(3, "Madrid", "blah", "01/01/01",5));
       this._trips.push(new Trip(4, "Budapest", "yadah", "01/01/01",9));
   }
    
    getAllTrips():Trip[]{
        return this._trips;
    }
    addTrip(trip:Trip):Trip{
        if(this._trips.length===0){
            trip.id=1;
        }else{
            trip.id = this._trips.reduce((prev:Trip, curr:Trip)=>prev.id>curr.id?prev:curr).id + 1;
        }
        this._trips.push(trip);
        return trip;
    }

    
    getTripById(id:number):Trip{
        return this._trips.filter(t=>t.id===id)[0];
    }
    
    editTrip(trip:Trip):Trip{
        const original : Trip = this.getTripById(trip.id);
        original.description = trip.description;
        original.destination = trip.destination;
        original.date = trip.date;
        original.rating = trip.rating;
        return original; 
    }
    removeTrip(id:number):void{
        this._trips.splice(this._trips.indexOf(this.getTripById(id)),1);
    }
}