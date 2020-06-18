     const mapFunc = () => {
         // referenced from google maps api documentation
         var map;
         var infoWindow;
         var service;

         function initMap() {
             map = new google.maps.Map(document.getElementById('map'), {
                 center: {
                     lat: -34.397,
                     lng: 150.644
                 },
                 zoom: 15,
             });
             infoWindow = new google.maps.InfoWindow;
             map.setOptions({
                 center: pos,
                 zoom: 15
             });

             //HTML5 geolocation.
             if (navigator.geolocation) {
                 navigator.geolocation.getCurrentPosition(function (position) {
                     var pos = {
                         lat: position.coords.latitude,
                         lng: position.coords.longitude
                     };

                     infoWindow.setPosition(pos);
                     infoWindow.setContent('You are here!');
                     infoWindow.open(map);
                     map.setCenter(pos);
                 }, function () {
                     handleLocationError(true, infoWindow, map.getCenter());
                     search();
                 });
             } else {
                 // Browser doesn't support Geolocation
                 handleLocationError(false, infoWindow, map.getCenter());
             }
         }

         function handleLocationError(browserHasGeolocation, infoWindow, pos) {
             infoWindow.setPosition(pos);
             infoWindow.setContent(browserHasGeolocation ?
                 'Error: The Geolocation service failed.' :
                 'Error: Your browser doesn\'t support geolocation.');
             infoWindow.open(map);
         }

         //get coffee shops nearby
         function initialize() {
             var pyront = new google.maps.LatLng(navigator.geolocation.position.coords.latitude, navigator.geolocation.position.coords.longitude);
             map = new google.maps.Map(document.getElementById("map"), {
                 center: pyront,
                 zoom: 15
             });
             var request = {
                 location: pyront,
                 radius: "500",
                 type: ["cafe"]
             };
             service = new google.maps.places.PlacesService(map);
             service.nearbySearch(request, callback);
         }
         

         function callback(results, status) {
             if (status == google.maps.places.PlacesService.OK) {
                 for (var i = 0; i < results.length; i++) {
                     createMarker(results[i]);
                 }
             }
         }
         document.querySelector("#btn-locate").addEventListener("click", function (e) {
             initialize();
             e.preventDefault();
         })
         initMap();
         initialize();
     }

     mapFunc();