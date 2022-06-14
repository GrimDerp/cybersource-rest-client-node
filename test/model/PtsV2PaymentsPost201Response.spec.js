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
    instance = new CyberSource.PtsV2PaymentsPost201Response();
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

  describe('PtsV2PaymentsPost201Response', function() {
    it('should create an instance of PtsV2PaymentsPost201Response', function() {
      // uncomment below and update the code to test PtsV2PaymentsPost201Response
      //var instane = new CyberSource.PtsV2PaymentsPost201Response();
      //expect(instance).to.be.a(CyberSource.PtsV2PaymentsPost201Response);
    });

    it('should have the property links (base name: "_links")', function() {
      // uncomment below and update the code to test the property links
      //var instane = new CyberSource.PtsV2PaymentsPost201Response();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new CyberSource.PtsV2PaymentsPost201Response();
      //expect(instance).to.be();
    });

    it('should have the property submitTimeUtc (base name: "submitTimeUtc")', function() {
      // uncomment below and update the code to test the property submitTimeUtc
      //var instane = new CyberSource.PtsV2PaymentsPost201Response();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new CyberSource.PtsV2PaymentsPost201Response();
      //expect(instance).to.be();
    });

    it('should have the property reconciliationId (base name: "reconciliationId")', function() {
      // uncomment below and update the code to test the property reconciliationId
      //var instane = new CyberSource.PtsV2PaymentsPost201Response();
      //expect(instance).to.be();
    });

    it('should have the property errorInformation (base name: "errorInformation")', function() {
      // uncomment below and update the code to test the property errorInformation
      //var instane = new CyberSource.PtsV2PaymentsPost201Response();
      //expect(instance).to.be();
    });

    it('should have the property clientReferenceInformation (base name: "clientReferenceInformation")', function() {
      // uncomment below and update the code to test the property clientReferenceInformation
      //var instane = new CyberSource.PtsV2PaymentsPost201Response();
      //expect(instance).to.be();
    });

    it('should have the property processingInformation (base name: "processingInformation")', function() {
      // uncomment below and update the code to test the property processingInformation
      //var instane = new CyberSource.PtsV2PaymentsPost201Response();
      //expect(instance).to.be();
    });

    it('should have the property processorInformation (base name: "processorInformation")', function() {
      // uncomment below and update the code to test the property processorInformation
      //var instane = new CyberSource.PtsV2PaymentsPost201Response();
      //expect(instance).to.be();
    });

    it('should have the property issuerInformation (base name: "issuerInformation")', function() {
      // uncomment below and update the code to test the property issuerInformation
      //var instane = new CyberSource.PtsV2PaymentsPost201Response();
      //expect(instance).to.be();
    });

    it('should have the property paymentAccountInformation (base name: "paymentAccountInformation")', function() {
      // uncomment below and update the code to test the property paymentAccountInformation
      //var instane = new CyberSource.PtsV2PaymentsPost201Response();
      //expect(instance).to.be();
    });

    it('should have the property paymentInformation (base name: "paymentInformation")', function() {
      // uncomment below and update the code to test the property paymentInformation
      //var instane = new CyberSource.PtsV2PaymentsPost201Response();
      //expect(instance).to.be();
    });

    it('should have the property paymentInsightsInformation (base name: "paymentInsightsInformation")', function() {
      // uncomment below and update the code to test the property paymentInsightsInformation
      //var instane = new CyberSource.PtsV2PaymentsPost201Response();
      //expect(instance).to.be();
    });

    it('should have the property orderInformation (base name: "orderInformation")', function() {
      // uncomment below and update the code to test the property orderInformation
      //var instane = new CyberSource.PtsV2PaymentsPost201Response();
      //expect(instance).to.be();
    });

    it('should have the property pointOfSaleInformation (base name: "pointOfSaleInformation")', function() {
      // uncomment below and update the code to test the property pointOfSaleInformation
      //var instane = new CyberSource.PtsV2PaymentsPost201Response();
      //expect(instance).to.be();
    });

    it('should have the property installmentInformation (base name: "installmentInformation")', function() {
      // uncomment below and update the code to test the property installmentInformation
      //var instane = new CyberSource.PtsV2PaymentsPost201Response();
      //expect(instance).to.be();
    });

    it('should have the property tokenInformation (base name: "tokenInformation")', function() {
      // uncomment below and update the code to test the property tokenInformation
      //var instane = new CyberSource.PtsV2PaymentsPost201Response();
      //expect(instance).to.be();
    });

    it('should have the property buyerInformation (base name: "buyerInformation")', function() {
      // uncomment below and update the code to test the property buyerInformation
      //var instane = new CyberSource.PtsV2PaymentsPost201Response();
      //expect(instance).to.be();
    });

    it('should have the property riskInformation (base name: "riskInformation")', function() {
      // uncomment below and update the code to test the property riskInformation
      //var instane = new CyberSource.PtsV2PaymentsPost201Response();
      //expect(instance).to.be();
    });

    it('should have the property consumerAuthenticationInformation (base name: "consumerAuthenticationInformation")', function() {
      // uncomment below and update the code to test the property consumerAuthenticationInformation
      //var instane = new CyberSource.PtsV2PaymentsPost201Response();
      //expect(instance).to.be();
    });

  });

}));
