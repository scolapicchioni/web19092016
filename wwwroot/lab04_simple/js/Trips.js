!function(){
    var _trips = [];
    _trips.push({id: 1, destination: "Roma", description: "bla", date: "01/01/01",rating: 9});
    _trips.push({id:2,  destination:"Paris", description:"yada",  date:"01/01/01",rating: 8});
    _trips.push({id:3,  destination:"Madrid", description:"blah",  date:"01/01/01",rating: 5});
    _trips.push({id:4,  destination:"Budapest", description:"yadah",  date:"01/01/01",rating: 9});

    window.addEventListener("load",function(){
        const target = document.getElementById("trips").children[0];
        const template = document.getElementById("template");
        for(const trip of _trips){
            const newTripElement=template.cloneNode(true);
            template.removeAttribute("id");
            newTripElement.children[0].children[0].innerHTML = trip.destination;
            newTripElement.children[1].children[0].innerHTML = trip.description;
            newTripElement.children[2].children[0].innerHTML = trip.date;
            newTripElement.children[2].children[1].innerHTML = trip.rating.toString();
            target.appendChild(newTripElement);
        }
    });
}();