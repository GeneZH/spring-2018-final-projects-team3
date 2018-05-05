

  

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

    // displayStops(wp);

    //draw realtime bus
    //var bus_cord = {lat:  39.98578, lng:   -105.23454};
    //displayBus(bus_cord)

/*
    function displayBus(bus_cord) {
        icon = 'bus_red.png';
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
    */
/*
    function displayStops(stops) {
        icon = 'bus_stop.png';
        features = [{
            position: bus_cord,
            type: 'info'
        }];
        // Create markers.
        stops.forEach(function(stop) {
          var marker = new google.maps.Marker({
            position: stop.location,
            icon: icon,
            map: map
          });
        });
    }

*/


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#D9';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
