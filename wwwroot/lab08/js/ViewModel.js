import {Trip} from "./Trip";
import {Chart} from "./Chart";

export class ViewModel{
    
    constructor(dataLayer){
        this._dataLayer = dataLayer;

        window.addEventListener("load",()=>this.init());
    }

    init(){
        this.refreshUI();

        document.getElementById("add-trip").addEventListener("click", ()=>this.addTrip());
        document.getElementById("save-trip").addEventListener("click", ()=>this.saveTrip());
    }

    drawBarChart(trips = []){
        const chart = new Chart();
        const options = {
            data : trips.map(t=>t.rating),
            labels : trips.map(t=>t.destination),
            canvasId : "chart"
        };
        chart.drawBarChart(options);
    }

    refreshUI(){
        this._dataLayer.getAllTrips().then(trips=>{
            const target = document.getElementById("trips");
            target.innerHTML = "";
            const template = document.getElementById("template");
            for(const trip of trips){
                const newTripElement = template.cloneNode(true);
                newTripElement.removeAttribute("id");
                newTripElement.querySelector(".panel-title").innerHTML = trip.destination;
                newTripElement.querySelector(".trip-description").innerHTML = trip.description;
                newTripElement.querySelector(".trip-date").innerHTML = trip.date;
                newTripElement.querySelector(".trip-rating").innerHTML = trip.rating.toString();
                const btnEdit = newTripElement.querySelector(".edit-trip");
                btnEdit.setAttribute("data-trip-id", trip.id.toString());
                btnEdit.addEventListener("click", (event)=>this.editTrip(+event.srcElement.getAttribute("data-trip-id")));
                const btnDelete = newTripElement.querySelector(".delete-trip");
                btnDelete.setAttribute("data-trip-id", trip.id.toString());
                btnDelete.addEventListener("click", (event)=>this.deleteTrip(+event.srcElement.getAttribute("data-trip-id")));
                target.appendChild(newTripElement);
            }
            this.drawBarChart(trips);
        });
    }

    showForm(trip){
        document.getElementById("add-trip-container").classList.remove("invisible");
        document.getElementById("save-trip").setAttribute("data-trip-id", trip.id.toString());
        document.getElementById("destination-input").value = trip.destination;
        document.getElementById("description-input").value = trip.description;
        document.getElementById("date-input").value = trip.date;
        document.getElementById("rating-input").value = trip.rating.toString();
    }
    addTrip(){
        const trip = new Trip();
        this.showForm(trip);
    }
    deleteTrip(tripId){
        this._dataLayer.removeTrip(tripId);
        this.refreshUI();
    }
    editTrip(tripId){
        const trip = this._dataLayer.getTripById(tripId);
        this.showForm(trip);
    }
    saveTrip(){
        event.preventDefault();
        
        const trip = new Trip();
        trip.id = +document.getElementById("save-trip").getAttribute("data-trip-id");
        trip.destination = document.getElementById("destination-input").value;
        trip.description = document.getElementById("description-input").value;
        trip.date = document.getElementById("date-input").value;
        trip.rating = +document.getElementById("rating-input").value;

        if(trip.id===0){
            this._dataLayer.addTrip(trip);
        }else{
            this._dataLayer.editTrip(trip);
        }

        document.getElementById("add-trip-container").classList.add("invisible");

        this.refreshUI();
        return false;
    }
}
