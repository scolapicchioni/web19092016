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
        this.refreshUI();
        
        document.getElementById("add-trip").addEventListener("click", ()=>this.addTrip());
        document.getElementById("save-trip").addEventListener("click", ()=>this.saveTrip());
    }

    refreshUI(){
        const trips = this._dataLayer.getAllTrips();
        const target = document.getElementById("trips").children[0];
        target.innerHTML = "";
        const template = document.getElementById("template");
        for(const trip of trips){
            const newTripElement : HTMLElement = <HTMLElement>template.cloneNode(true);
            newTripElement.removeAttribute("id");
            (<HTMLElement>newTripElement.children[0]).children[0].innerHTML = trip.destination;
            (<HTMLElement>newTripElement.children[1]).children[0].innerHTML = trip.description;
            (<HTMLElement>newTripElement.children[1]).children[1].innerHTML = trip.date;
            (<HTMLElement>newTripElement.children[1]).children[2].innerHTML = trip.rating.toString();
            const btnEdit = (<HTMLElement>(<HTMLElement>newTripElement.children[2]).children[0]).children[0];
            btnEdit.setAttribute("data-trip-id", trip.id.toString());
            btnEdit.addEventListener("click", (event)=>this.editTrip(+event.srcElement.getAttribute("data-trip-id")));
            const btnDelete = (<HTMLElement>(<HTMLElement>newTripElement.children[2]).children[1]).children[0]
            btnDelete.setAttribute("data-trip-id", trip.id.toString());
            btnDelete.addEventListener("click", (event)=>this.deleteTrip(+event.srcElement.getAttribute("data-trip-id")));
            target.appendChild(newTripElement);
        }
    }

    addTrip(){
        const trip = new Trip();
        document.getElementById("save-trip").setAttribute("data-trip-id", trip.id.toString());
        (<HTMLInputElement>document.getElementById("destination-input")).value = trip.destination;
        (<HTMLInputElement>document.getElementById("description-input")).value = trip.description;
        (<HTMLInputElement>document.getElementById("date-input")).value = trip.date;
        (<HTMLInputElement>document.getElementById("rating-input")).value = trip.rating.toString();
    }
    deleteTrip(tripId:number){
        this._dataLayer.removeTrip(tripId);
        this.refreshUI();
    }
    editTrip(tripId : number){
        const trip = this._dataLayer.getTripById(tripId);
        document.getElementById("save-trip").setAttribute("data-trip-id", trip.id.toString());
        (<HTMLInputElement>document.getElementById("destination-input")).value = trip.destination;
        (<HTMLInputElement>document.getElementById("description-input")).value = trip.description;
        (<HTMLInputElement>document.getElementById("date-input")).value = trip.date;
        (<HTMLInputElement>document.getElementById("rating-input")).value = trip.rating.toString();
    }
    saveTrip():boolean{
        event.preventDefault();
        
        const trip = new Trip();
        trip.id = +document.getElementById("save-trip").getAttribute("data-trip-id");
        trip.destination = (<HTMLInputElement>document.getElementById("destination-input")).value;
        trip.description = (<HTMLInputElement>document.getElementById("description-input")).value;
        trip.date = (<HTMLInputElement>document.getElementById("date-input")).value;
        trip.rating = +(<HTMLInputElement>document.getElementById("rating-input")).value;

        if(trip.id===0){
            this._dataLayer.addTrip(trip);
        }else{
            this._dataLayer.editTrip(trip);
        }
        this.refreshUI();
        return false;
    }
}
