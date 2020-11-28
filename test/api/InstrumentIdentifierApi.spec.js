/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CyberSource);
  }
}(this, function(expect, CyberSource) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CyberSource.InstrumentIdentifierApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InstrumentIdentifierApi', function() {
    describe('deleteInstrumentIdentifier', function() {
      it('should call deleteInstrumentIdentifier successfully', function(done) {
        //uncomment below and update the code to test deleteInstrumentIdentifier
        //instance.deleteInstrumentIdentifier(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInstrumentIdentifier', function() {
      it('should call getInstrumentIdentifier successfully', function(done) {
        //uncomment below and update the code to test getInstrumentIdentifier
        //instance.getInstrumentIdentifier(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInstrumentIdentifierPaymentInstrumentsList', function() {
      it('should call getInstrumentIdentifierPaymentInstrumentsList successfully', function(done) {
        //uncomment below and update the code to test getInstrumentIdentifierPaymentInstrumentsList
        //instance.getInstrumentIdentifierPaymentInstrumentsList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchInstrumentIdentifier', function() {
      it('should call patchInstrumentIdentifier successfully', function(done) {
        //uncomment below and update the code to test patchInstrumentIdentifier
        //instance.patchInstrumentIdentifier(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postInstrumentIdentifier', function() {
      it('should call postInstrumentIdentifier successfully', function(done) {
        //uncomment below and update the code to test postInstrumentIdentifier
        //instance.postInstrumentIdentifier(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postInstrumentIdentifierEnrollment', function() {
      it('should call postInstrumentIdentifierEnrollment successfully', function(done) {
        //uncomment below and update the code to test postInstrumentIdentifierEnrollment
        //instance.postInstrumentIdentifierEnrollment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
