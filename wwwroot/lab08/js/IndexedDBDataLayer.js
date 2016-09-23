import {Trip} from "./Trip";

const dbVersion = 3,
      dbName = `TripsDB`,
      objectStoreName = `Trips`,
      keyPathName = `_id`;

export class IndexedDBDataLayer{
   constructor(){
       if(window.indexedDB){
           const request = window.indexedDB.open(dbName, dbVersion);

            request.onerror = event => {
                // Do something with request.errorCode!
                console.log(event.errorCode);
            };
            request.onsuccess = event => {
                // Do something with request.result!
                console.log(`opened`);
            };
            request.onupgradeneeded = event =>{
                const db = event.target.result;
                if(db.objectStoreNames.contains(objectStoreName)){
                    db.deleteObjectStore(objectStoreName);
                }
                // Create an objectStore for this database
                const objectStore = db.createObjectStore(objectStoreName, { keyPath: keyPathName });

                objectStore.transaction.oncomplete = function(event) {
                    // Store values in the newly created objectStore.
                    const objectStore = db.transaction(objectStoreName, "readwrite").objectStore(objectStoreName);
                    
                    const _trips = [];
                    _trips.push(new Trip(1, "Roma", "Quanto sei bella Roma quando e' sera", "01/01/01",9));
                    _trips.push(new Trip(2, "Paris", "Oh la la. Landjaeger ham beef short ribs jowl salami meatball. Jowl spare ribs pastrami fatback capicola. Pig shankle drumstick tri-tip short ribs. Spare ribs venison leberkas jerky. Fatback frankfurter tri-tip venison. Filet mignon cupim drumstick bresaola, doner tenderloin pork chop.", "01/01/01",8));
                    _trips.push(new Trip(3, "Madrid", "Andale andale! Los tres caballeros.", "01/01/01",5));
                    _trips.push(new Trip(4, "Budapest", "owl pork loin cow, doner shoulder ribeye capicola beef spare ribs frankfurter chicken porchetta brisket leberkas drumstick. Jerky alcatra cow ham hock. Tenderloin doner tail fatback. Shankle beef rump pork loin filet mignon.", "01/01/01",9));

                    putNext();
                    
                    let i = 0;
                    function putNext() {
                        if (i<_trips.length) {
                            objectStore.put(_trips[i]).onsuccess = putNext;
                            ++i;
                        } else {   // complete
                            console.log('populate complete');
                            db.close();
                        }
                    }                                 
                };
            }
       }       
   }
    
    getAllTrips(){ 
        return new Promise((resolve,reject)=>{
            
            const _trips = [];
            const request = window.indexedDB.open(dbName, dbVersion);
            
            request.onsuccess = event => {
                const db = event.target.result;
                const objectStore = db.transaction(objectStoreName).objectStore(objectStoreName);

                objectStore.openCursor().onsuccess = event => {
                    const cursor = event.target.result;
                    if (cursor) {
                        _trips.push(new Trip(cursor.value._id, cursor.value._destination,cursor.value._description,cursor.value._date,cursor.value._rating));
                        cursor.continue();
                    } else {
                        db.close();
                        resolve(_trips);
                    }
                };
            }
        });
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