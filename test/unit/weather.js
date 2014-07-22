/* global describe, it */
/* jshint expr:true */

'use strict';

var expect = require('chai').expect;
var Weather = require('../../app/models/weather');

describe('Weather', function(){
  describe('constructor', function(){
    it('should create a weather object', function(){
      expect(Weather).to.be.ok;
    });
  });
  describe('.high', function(){
    it('should return the high temp for today for a Zip', function(done){
      Weather.high(37204, function(temp){
        expect(temp).to.be.ok;
        expect(typeof temp).to.equal('string');
        expect(temp.length).to.be.above(2);
        //console.log(temp);
        done();
      });
    });
  });
  describe('.low', function(){
    it('should return the low temp for today for a Zip', function(done){
      Weather.low(37204, function(temp){
        expect(temp).to.be.ok;
        expect(typeof temp).to.equal('string');
        expect(temp.length).to.be.above(2);
        //console.log(temp);
        done();
      });
    });
  });
  describe('.avgHigh', function(){
    it('should average the high temperatures over a ten day period', function(done){
      Weather.avgHigh( 37204, function(temp){
        expect(temp).to.be.ok;
        expect(typeof temp).to.equal('string');
        expect(temp.length).to.be.above(2);
        //console.log(temp);
        done();
      });

    });
  });
  describe('.avgLow', function(){
    it('should average the low temperatures over a ten day period', function(done){
      Weather.avgLow(37204, function(temp){
        expect(temp).to.be.ok;
        expect(typeof temp).to.equal('string');
        expect(temp.length).to.be.above(2);
        //console.log(temp);
        done();
      });
    });
  });
  describe('.stdevHigh', function(){
    it('should be the standard deviation of the high temp for ten days', function(done){
      Weather.stdevHigh(37204, function(temp){
        expect(temp).to.be.ok;
        expect(typeof temp).to.equal('string');
        expect(temp.length).to.be.above(2);
        //console.log(temp);
        done();
      });
    });
  });
  describe('.stdevLow', function(){
    it('should be the standard deviation of the low temp for ten days', function(done){
      Weather.stdevLow(37204, function(temp){
        expect(temp).to.be.ok;
        expect(typeof temp).to.equal('string');
        expect(temp.length).to.be.above(2);
        //console.log(temp);
        done();
      });
    });
  });
  describe('.highs', function(){
    it('should be an array of the 10day high values', function(done){
      Weather.highs(37204, function(highs){
        expect(highs).to.be.ok;
        expect(typeof highs).to.equal('object');
        expect(highs).to.have.length(10);
       //console.log(highs);
        done();
      });
    });
  });
  describe('.lows', function(){
    it('should be an array of the 10day low values', function(done){
      Weather.lows(37204, function(lows){
        expect(lows).to.be.ok;
        expect(typeof lows).to.equal('object');
        expect(lows).to.have.length(10);
        //console.log(lows);
        done();
      });
    });
  });
  describe('.deltas', function(){
    it('should be an array of the difference between the 10day highs & lows', function(done){
      Weather.deltas(37204, function(deltas){
        expect(deltas).to.be.ok;
        expect(typeof deltas).to.equal('object');
        expect(deltas).to.have.length(10);
        //console.log(deltas);
        done();
      });
    });
  });
  
});


