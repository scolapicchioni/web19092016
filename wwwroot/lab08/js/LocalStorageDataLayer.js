import {Trip} from "./Trip";

export class LocalStorageDataLayer{
   constructor(){
       if(window.localStorage){
           if(localStorage.length===0){
               const _trips = [];
                _trips.push(new Trip(1, "Roma", "Ciao Bella! Lasagna! Mamma!", "01/01/01",9));
                _trips.push(new Trip(2, "Paris", "Landjaeger ham beef short ribs jowl salami meatball. Jowl spare ribs pastrami fatback capicola. Pig shankle drumstick tri-tip short ribs. Spare ribs venison leberkas jerky. Fatback frankfurter tri-tip venison. Filet mignon cupim drumstick bresaola, doner tenderloin pork chop.", "01/01/01",8));
                _trips.push(new Trip(3, "Madrid", "Los tres caballeros.", "01/01/01",5));
                _trips.push(new Trip(4, "Budapest", "owl pork loin cow, doner shoulder ribeye capicola beef spare ribs frankfurter chicken porchetta brisket leberkas drumstick. Jerky alcatra cow ham hock. Tenderloin doner tail fatback. Shankle beef rump pork loin filet mignon.", "01/01/01",9));

                for(const trip of _trips){
                    localStorage.setItem(trip.id.toString(), JSON.stringify(trip));    
                }         
           }
       }       
   }
    
    getAllTrips(){
        const _trips = [];
        for(let i = 0; i<localStorage.length; i++){
            const obj = JSON.parse(localStorage[localStorage.key(i)]);
            _trips.push(new Trip(obj._id, obj._destination,obj._description,obj._date,obj._rating));
        }
        return _trips;
    }
    addTrip(trip){
        if(localStorage.length===0){
            trip.id=1;
        }else{
            trip.id = +localStorage.key(localStorage.length-1) + 1;
        }
        localStorage.setItem(trip.id.toString(), JSON.stringify(trip));
        return trip;
    }
    getTripById(id){
        return JSON.parse(localStorage[id.toString()],(key,value)=>new Trip(value._id, value._destination,value._description,value._date,value._rating));
    }
    
    editTrip(trip){
        localStorage.setItem(trip.id.toString(), JSON.stringify(trip));
        return trip; 
    }
    removeTrip(id){
        localStorage.removeItem(id.toString());
    }
}