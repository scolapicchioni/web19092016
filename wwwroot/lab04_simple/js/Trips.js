!function(){
    var _trips = [];
    _trips.push({id: 1, destination: "Roma", description: "bla", date: "01/01/01",rating: 9});
    _trips.push({id:2,  destination:"Paris", description:"yada",  date:"01/01/01",rating: 8});
    _trips.push({id:3,  destination:"Madrid", description:"blah",  date:"01/01/01",rating: 5});
    _trips.push({id:4,  destination:"Budapest", description:"yadah",  date:"01/01/01",rating: 9});

    window.addEventListener("load",function(){
        var target = document.getElementById("trips").children[0];
        var template = document.getElementById("template");
        for(var i=0; i< _trips.length;i++){
            var trip = _trips[i];
            var newTripElement=template.cloneNode(true);
            template.removeAttribute("id");
            newTripElement.children[0].children[0].innerHTML = trip.destination;
            newTripElement.children[1].children[0].innerHTML = trip.description;
            newTripElement.children[2].children[0].innerHTML = trip.date;
            newTripElement.children[2].children[1].innerHTML = trip.rating.toString();
            target.appendChild(newTripElement);
        }
    });
}();