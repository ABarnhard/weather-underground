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
        done();
      });
    });
  });
});


