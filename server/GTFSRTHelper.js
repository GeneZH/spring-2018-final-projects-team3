const axios = require('axios');
const protobuf = require("protobufjs");

//var protobuf = require('protocol-buffers');

exports.test = function () {
  const config = {
    url: 'http://www.rtd-denver.com/google_sync/TripUpdate.pb',
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
          console.log(decodedMessage);
        } catch (e) {
          throw e;
        }
      });
    });
};
