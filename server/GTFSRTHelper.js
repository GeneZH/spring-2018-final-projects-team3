const axios = require('axios');
const protobuf = require("protobufjs");

//var protobuf = require('protocol-buffers');

exports.getVehiclePosition = function (callback) {
  const config = {
    url: 'http://www.rtd-denver.com/google_sync/VehiclePosition.pb',
    auth: {
      username: 'RTDgtfsRT',
      password: 'realT!m3Feed'
    },
    responseType: 'arraybuffer'
  };
  axios(config)
    .then(function (response, body) {
      //console.log(response);

      protobuf.load("./GTFS-realtime.proto", function (err, root) {
        let TripUpdate = root.lookupType("transit_realtime.FeedMessage");
        try {
          let decodedMessage = TripUpdate.decode(response.data);
          let objects = TripUpdate.toObject(decodedMessage);
          console.log(objects.entity[0]);
          let veh =[];
          objects.entity.forEach(function(ent){
            if(!ent.vehicle.trip) return;
            ent.vehicle.position.routeId= ent.vehicle.trip.routeId;
            veh.push(ent.vehicle.position);
          });
          //console.log(veh);
          callback(veh);
        } catch (e) {
          throw e;
        }
      });
    });
};
