function initMap() {
    var denver_cord = {lat: 39.754136, lng: -105.001440};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 20,
        center: denver_cord
      });

    //draw bus routes
    var directionsService = new google.maps.DirectionsService();
    var start = [{lat: 40.017105,lng:  -105.276563}];
    var end = [{lat: 39.7552, lng: -105.00255 }];

    for(var i = 0; i < start.length; i++) {
        console.log(start[i]);
        requestDirections(start[i], end[i]);
    }

    //draw realtime bus
    bus_cord = [{lat:  39.98578,lng:   -105.23454}];
    displayBus(bus_cord[0])

    function renderDirections(result, status) {
      var directionsRenderer = new google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);
      if (status == 'OK') {
         directionsRenderer.setDirections(result);
      }
    }

    /*  Route FF2
    40.017105, -105.276563

    40.005428, -105.27168
    40.003173, -105.267222
    39.999344, -105.263297
    39.989015, -105.25559
    39.985739, -105.247903
    39.98578, -105.23454
    39.958022, -105.168041
    39.759506, -104.994238

    39.7552, -105.00255
    */

    var wp = [
        {
            location: {lat: 40.005428,lng:  -105.27168},
            stopover: true
        },
        {
             location: {lat: 40.003173,lng:  -105.267222},
             stopover: true
        },
        {
            location: {lat: 39.999344,lng:  -105.263297},
            stopover: true
        },
        {
             location: {lat: 39.989015,lng:  -105.25559},
             stopover: true
        },
        {
            location: {lat: 39.985739,lng:  -105.247903},
            stopover: true
        },
        {
             location: {lat:  39.98578,lng:   -105.23454},
             stopover: true
        },
        {
            location: {lat: 39.958022,lng:  -105.168041},
            stopover: true
        },
        {
            location: {lat: 39.759506,lng:  -104.994238},
            stopover: true
        }
        ];

    function requestDirections(start, end) {
      directionsService.route({
        origin: start,
        destination: end,
        travelMode: 'TRANSIT',
        waypoints: wp,
        transitOptions: {
          modes: ['BUS'],
        }
      }, function(result, status) {
        renderDirections(result, status);
      });
    }

    function displayBus(bus_cord) {
        icon = 'bus.png';
        features = [{
            position: bus_cord,
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
