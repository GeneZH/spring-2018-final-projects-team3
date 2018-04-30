const fs = require("fs");
const csv = require("fast-csv");
const filesPath = './data/stops/';

exports.getRoutesStopById = function (id, callback) {
  let stream = fs.createReadStream(filesPath + id.toString() + '.csv');
  let stops = [];
  let csvStream = csv()
    .on("data", function (data) {
      stops.push({latitude: parseFloat(data[0]), longitude: parseFloat(data[1])});
    })
    .on("end", function () {
      console.log("done");
      callback(stops);
    });
  stream.pipe(csvStream);

};