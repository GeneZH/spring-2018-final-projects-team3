process.title = 'rtd_s';
const express = require('express');
const bodyParser = require('body-parser');
const gtfsrtHelper = require('./GTFSRTHelper');
const dataHelper = require('./DataHelper');

let app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up on port 3000');
});


app.get('/vehiclePosition', function (req, res) {
  //console.log('get vehicle position');
  gtfsrtHelper.getVehiclePosition(function (vehicles) {
    res.send(vehicles);
  });
});

app.get('/routeStops', function (req, res) {
  if (req.query.routeId) {
    dataHelper.getRoutesStopById(req.query.routeId,function(stops){
      res.send(stops);
    });
  }
  else{
    res.status(400).send('Require parameter: routeId');
  }
});
