'use strict';

var request = require('request');

function Weather(){}

Weather.high = function(zip, cb){
  var url = 'http://api.wunderground.com/api/048afdd382673bba/forecast/q/' + zip + '.json';

  request(url, function(error, response, body){
    debugger;
    body = JSON.parse(body);
    cb(body.forecast.simpleforecast.forecastday[0].high.fahrenheit + ' F');
  });

};

Weather.low = function(zip, cb){
  var url = 'http://api.wunderground.com/api/048afdd382673bba/forecast/q/' + zip + '.json';

  request(url, function(error, response, body){
    debugger;
    body = JSON.parse(body);
    cb(body.forecast.simpleforecast.forecastday[0].low.fahrenheit + ' F');
  });

};

Weather.avgHigh = function(zip, cb){
  var url = 'http://api.wunderground.com/api/048afdd382673bba/forecast10day/q/' + zip + '.json';

  request(url, function(error, response, body){
    debugger;
    body = JSON.parse(body);
    var avgHigh = 0;
    var dailyForecasts = body.forecast.simpleforecast.forecastday;
    for(var i = 0; i < dailyForecasts.length; i++){
      avgHigh += parseFloat(dailyForecasts[i].high.fahrenheit);
    }
    avgHigh /= dailyForecasts.length;

    cb(avgHigh.toFixed(0) + ' F');
  });

};

Weather.avgLow = function(zip, cb){
  var url = 'http://api.wunderground.com/api/048afdd382673bba/forecast10day/q/' + zip + '.json';

  request(url, function(error, response, body){
    debugger;
    body = JSON.parse(body);
    var avgLow = 0;
    var dailyForecasts = body.forecast.simpleforecast.forecastday;
    for(var i = 0; i < dailyForecasts.length; i++){
      avgLow += parseFloat(dailyForecasts[i].low.fahrenheit);
    }
    avgLow /= dailyForecasts.length;

    cb(avgLow.toFixed(0) + ' F');
  });

};

module.exports = Weather;
