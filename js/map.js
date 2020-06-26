let map;
let service;
let usersCurrentLocation;
let coffeeInfo;

//reload map and refresh users location
document.querySelector("#btn-locate").addEventListener("click", function(e){
    initMap();
    e.preventDefault()
})
function initMap() {
    map = new google.maps.Map(document.querySelector('#map'), {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 10
    });
    usersCurrentLocation = new google.maps.InfoWindow;
    coffeeInfo = new google.maps.infoWindow;

    //asks the user for location information and check if it/s been allowed
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            let pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
//you were here before saving
            usersCurrentLocation.setPosition(pos);
            usersCurrentLocation.setContent('You are here!');
            usersCurrentLocation.open(map);
            map.setCenter(pos);
        }, function () {
            handleLocationError(true, usersCurrentLocation, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, usersCurrentLocation, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    usersCurrentLocation.setPosition(pos);
    usersCurrentLocation.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    usersCurrentLocation.open(map);
}
initMap()