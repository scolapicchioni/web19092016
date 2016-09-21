import {Trip} from "./Trip";
import {IDataLayer} from "./IDataLayer";
import {ArrayDataLayer} from "./ArrayDataLayer";

export class ViewModel{
    private _dataLayer : IDataLayer;
    constructor(dataLayer: IDataLayer){
        this._dataLayer = dataLayer;

        window.addEventListener("load",this.init);
    }

    init(){
        const trips = this._dataLayer.getAllTrips();
        const target = document.getElementById("trips").children[0];
        const template = document.getElementById("template");
        for(const trip of trips){
            const newTripElement = template.cloneNode(true);
            template.removeAttribute("id");
            newTripElement.children[0][0].innerHTML = trip.destination;
            newTripElement.children[1][0].innerHTML = trip.description;
            newTripElement.children[2][0].innerHTML = trip.date;
            newTripElement.children[2][1].innerHTML = trip.rating;
            target.appendChild(newTripElement);
        }
        
    }

}
