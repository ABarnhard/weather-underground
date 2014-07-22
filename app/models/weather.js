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

Weather.stdevHigh = function(zip, cb){
  var url = 'http://api.wunderground.com/api/048afdd382673bba/forecast10day/q/' + zip + '.json';

  request(url, function(error, response, body){
    debugger;
    body = JSON.parse(body);
    var nums = [];
    var dailyForecasts = body.forecast.simpleforecast.forecastday;

    for(var i = 0; i < dailyForecasts.length; i++){
      nums.push(parseFloat(dailyForecasts[i].high.fahrenheit));
    }
    var stdevHigh = stdev(nums);

    cb(stdevHigh.toFixed(0) + ' F');
  });

};

Weather.stdevLow = function(zip, cb){
  var url = 'http://api.wunderground.com/api/048afdd382673bba/forecast10day/q/' + zip + '.json';

  request(url, function(error, response, body){
    debugger;
    body = JSON.parse(body);
    var nums = [];
    var dailyForecasts = body.forecast.simpleforecast.forecastday;

    for(var i = 0; i < dailyForecasts.length; i++){
      nums.push(parseFloat(dailyForecasts[i].low.fahrenheit));
    }
    var stdevLow = stdev(nums);

    cb(stdevLow.toFixed(0) + ' F');
  });

};

// Helper Functions //

function mean(nums){
  var sum = 0;
  for(var i = 0; i < nums.length; i++){
    sum += nums[i];
  }

  return sum / nums.length;
}


function stdev(nums){
  var squares = [];
  var mean1 = mean(nums);

  for(var i = 0; i < nums.length; i++){
    squares.push(Math.pow((nums[i] - mean1), 2));
  }

  var variance = mean(squares);
  var sigma = Math.sqrt(variance);
  return sigma;
}


module.exports = Weather;
