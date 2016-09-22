import {Trip} from "./Trip";
import {IDataLayer} from "./IDataLayer";
import {ArrayDataLayer} from "./ArrayDataLayer";

export class ViewModel{
    private _dataLayer : IDataLayer;
    constructor(dataLayer: IDataLayer){
        this._dataLayer = dataLayer;

        window.addEventListener("load",()=>this.init());
    }

    init(){
        const trips = this._dataLayer.getAllTrips();
        const target = document.getElementById("trips").children[0];
        const template = document.getElementById("template");
        for(const trip of trips){
            const newTripElement : HTMLElement = <HTMLElement>template.cloneNode(true);
            template.removeAttribute("id");
            (<HTMLElement>newTripElement.children[0]).children[0].innerHTML = trip.destination;
            (<HTMLElement>newTripElement.children[1]).children[0].innerHTML = trip.description;
            (<HTMLElement>newTripElement.children[2]).children[0].innerHTML = trip.date;
            (<HTMLElement>newTripElement.children[2]).children[1].innerHTML = trip.rating.toString();
            target.appendChild(newTripElement);
        }
        
    }

}
