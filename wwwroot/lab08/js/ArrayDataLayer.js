import {Trip} from "./Trip";

export class ArrayDataLayer{
   constructor(){
       this._trips = [];
       this._trips.push(new Trip(1, "Roma", "bla", "01/01/01",9));
       this._trips.push(new Trip(2, "Paris", "Landjaeger ham beef short ribs jowl salami meatball. Jowl spare ribs pastrami fatback capicola. Pig shankle drumstick tri-tip short ribs. Spare ribs venison leberkas jerky. Fatback frankfurter tri-tip venison. Filet mignon cupim drumstick bresaola, doner tenderloin pork chop.", "01/01/01",8));
       this._trips.push(new Trip(3, "Madrid", "blah", "01/01/01",5));
       this._trips.push(new Trip(4, "Budapest", "owl pork loin cow, doner shoulder ribeye capicola beef spare ribs frankfurter chicken porchetta brisket leberkas drumstick. Jerky alcatra cow ham hock. Tenderloin doner tail fatback. Shankle beef rump pork loin filet mignon.", "01/01/01",9));
   }
    
    getAllTrips(){
        return this._trips;
    }
    addTrip(trip){
        if(this._trips.length===0){
            trip.id=1;
        }else{
            trip.id = this._trips.reduce((prev, curr)=>prev.id>curr.id?prev:curr).id + 1;
        }
        this._trips.push(trip);
        return trip;
    }
    getTripById(id){
        return this._trips.filter(t=>t.id===id)[0];
    }
    
    editTrip(trip){
        const original = this.getTripById(trip.id);
        original.description = trip.description;
        original.destination = trip.destination;
        original.date = trip.date;
        original.rating = trip.rating;
        return original; 
    }
    removeTrip(id){
        this._trips.splice(this._trips.indexOf(this.getTripById(id)),1);
    }
}