let map;
let service;
let usersCurrentLocation;
let coffeeInfo;

//reload map and refresh users location
document.querySelector("#btn-locate").addEventListener("click", function (e) {
  initMap();
  e.preventDefault();
});

function initMap() {
  map = new google.maps.Map(document.querySelector("#map"), {
    center: {
      lat: -34.397,
      lng: 150.644,
    },
    zoom: 10,
  });
  usersCurrentLocation = new google.maps.InfoWindow();
  coffeeInfo = new google.maps.InfoWindow();

  //asks the user for location information and check if it/s been allowed
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        //setting the conditions for the geolocation
        usersCurrentLocation.setPosition(pos);
        usersCurrentLocation.setContent("You are here!");
        usersCurrentLocation.open(map);
        map.setCenter(pos);
        //setting the conditions for the automatic search of the cafes nearby
        let request = {
          location: pos,
          radius: 8000,
          type: ["cafe"]
        };
        //calling the google maps places and calling the nearby method
        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);

        function callback(results, status) {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            map.setZoom(12);
            for (let i = 0; i < results.length; i++) {
              createMarker(results[i], coffeeInfo);
            }
          }
        }
      },
      function () {
        handleLocationError(true, usersCurrentLocation, map.getCenter());
      }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, usersCurrentLocation, map.getCenter());
  }
}
//creating the markers and adding a drop animation to it
function createMarker(place, coffeeInfo) {
  let marker = new google.maps.Marker({
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP,
    position: place.geometry.location,
  });

  google.maps.event.addListener(marker, "click", function () {
    let cafeName = place.name;
    let cafeRating = place.rating;
    coffeeInfo.setContent("<strong>Name: </strong>" + cafeName + "<br>" + "<strong>Rating: </strong>" + cafeRating + "/5");
    coffeeInfo.open(map, this);
  });
}

function handleLocationError(browserHasGeolocation, usersCurrentLocation, pos) {
  usersCurrentLocation.setPosition(pos);
  usersCurrentLocation.setContent(
    browserHasGeolocation ?
    "Error: The Geolocation service failed." :
    "Error: Your browser doesn't support geolocation."
  );
  usersCurrentLocation.open(map);
}
initMap();