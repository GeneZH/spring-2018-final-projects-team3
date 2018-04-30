function initMap() {
    var denver_cord = {lat: 39.754136, lng: -105.001440};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: denver_cord
      });

    //draw bus routes
    var directionsService = new google.maps.DirectionsService();
    var start = [{lat: 39.745485,lng:  -105.003603}, {lat: 39.738037, lng: -105.026520}];
    var end = [{lat: 39.707838, lng: -104.818461 }, {lat: 39.726484, lng:  -104.850277}];
    for(var i = 0; i < start.length; i++) {
        console.log(start[i]);
        requestDirections(start[i], end[i]);
    }

    //draw realtime bus
    bus_cord = [{lat: 39.745485, lng: -105.003603}];
    displayBus(bus_cord[0])

    function renderDirections(result, status) {
      var directionsRenderer = new google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);
      if (status == 'OK') {
         directionsRenderer.setDirections(result);
      }
    }

    function requestDirections(start, end) {
      directionsService.route({
        origin: start,
        destination: end,
        travelMode: 'TRANSIT',
        transitOptions: {
          modes: ['BUS'],
        }
      }, function(result, status) {
        renderDirections(result, status);
      });
    }

    function displayBus(cord) {
        icon = 'bus_red.png';
        features = [{
            position: cord,
            type: 'info'
        }];
        // Create markers.
        features.forEach(function(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            icon: icon,
            map: map
          });
        });
    }
}
