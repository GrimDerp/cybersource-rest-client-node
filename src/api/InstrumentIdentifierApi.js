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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse400', 'model/PatchInstrumentIdentifierRequest', 'model/PaymentInstrumentList', 'model/PostInstrumentIdentifierEnrollmentRequest', 'model/PostInstrumentIdentifierRequest', 'model/Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse400'), require('../model/PatchInstrumentIdentifierRequest'), require('../model/PaymentInstrumentList'), require('../model/PostInstrumentIdentifierEnrollmentRequest'), require('../model/PostInstrumentIdentifierRequest'), require('../model/Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InstrumentIdentifierApi = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse400, root.CyberSource.PatchInstrumentIdentifierRequest, root.CyberSource.PaymentInstrumentList, root.CyberSource.PostInstrumentIdentifierEnrollmentRequest, root.CyberSource.PostInstrumentIdentifierRequest, root.CyberSource.Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier);
  }
}(this, function(ApiClient, InlineResponse400, PatchInstrumentIdentifierRequest, PaymentInstrumentList, PostInstrumentIdentifierEnrollmentRequest, PostInstrumentIdentifierRequest, Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier) {
  'use strict';

  /**
   * InstrumentIdentifier service.
   * @module api/InstrumentIdentifierApi
   * @version 0.0.1
   */

  /**
   * Constructs a new InstrumentIdentifierApi. 
   * @alias module:api/InstrumentIdentifierApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the deleteInstrumentIdentifier operation.
     * @callback module:api/InstrumentIdentifierApi~deleteInstrumentIdentifierCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an Instrument Identifier
     * @param {String} instrumentIdentifierTokenId The TokenId of a Instrument Identifier.
     * @param {Object} opts Optional parameters
     * @param {String} opts.profileId The id of a profile containing user specific TMS configuration.
     * @param {module:api/InstrumentIdentifierApi~deleteInstrumentIdentifierCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteInstrumentIdentifier = function(instrumentIdentifierTokenId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      if ('DELETE' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'instrumentIdentifierTokenId' is set
      if (instrumentIdentifierTokenId === undefined || instrumentIdentifierTokenId === null) {
        throw new Error("Missing the required parameter 'instrumentIdentifierTokenId' when calling deleteInstrumentIdentifier");
      }


      var pathParams = {
        'instrumentIdentifierTokenId': instrumentIdentifierTokenId
      };
      var queryParams = {
      };
      var headerParams = {
        'profile-id': opts['profileId']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = null;

      return this.apiClient.callApi(
        '/tms/v1/instrumentidentifiers/{instrumentIdentifierTokenId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInstrumentIdentifier operation.
     * @callback module:api/InstrumentIdentifierApi~getInstrumentIdentifierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an Instrument Identifier
     * @param {String} instrumentIdentifierTokenId The TokenId of a Instrument Identifier.
     * @param {Object} opts Optional parameters
     * @param {String} opts.profileId The id of a profile containing user specific TMS configuration.
     * @param {module:api/InstrumentIdentifierApi~getInstrumentIdentifierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier}
     */
    this.getInstrumentIdentifier = function(instrumentIdentifierTokenId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'instrumentIdentifierTokenId' is set
      if (instrumentIdentifierTokenId === undefined || instrumentIdentifierTokenId === null) {
        throw new Error("Missing the required parameter 'instrumentIdentifierTokenId' when calling getInstrumentIdentifier");
      }


      var pathParams = {
        'instrumentIdentifierTokenId': instrumentIdentifierTokenId
      };
      var queryParams = {
      };
      var headerParams = {
        'profile-id': opts['profileId']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier;

      return this.apiClient.callApi(
        '/tms/v1/instrumentidentifiers/{instrumentIdentifierTokenId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInstrumentIdentifierPaymentInstrumentsList operation.
     * @callback module:api/InstrumentIdentifierApi~getInstrumentIdentifierPaymentInstrumentsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentInstrumentList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Payment Instruments for an Instrument Identifier
     * @param {String} instrumentIdentifierTokenId The TokenId of a Instrument Identifier.
     * @param {Object} opts Optional parameters
     * @param {String} opts.profileId The id of a profile containing user specific TMS configuration.
     * @param {Number} opts.offset Starting record in zero-based dataset that should be returned as the first object in the array. Default is 0. (default to 0)
     * @param {Number} opts.limit The maximum number that can be returned in the array starting from the offset record in zero-based dataset. Default is 20, maximum is 100. (default to 20)
     * @param {module:api/InstrumentIdentifierApi~getInstrumentIdentifierPaymentInstrumentsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaymentInstrumentList}
     */
    this.getInstrumentIdentifierPaymentInstrumentsList = function(instrumentIdentifierTokenId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'instrumentIdentifierTokenId' is set
      if (instrumentIdentifierTokenId === undefined || instrumentIdentifierTokenId === null) {
        throw new Error("Missing the required parameter 'instrumentIdentifierTokenId' when calling getInstrumentIdentifierPaymentInstrumentsList");
      }


      var pathParams = {
        'instrumentIdentifierTokenId': instrumentIdentifierTokenId
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit']
      };
      var headerParams = {
        'profile-id': opts['profileId']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = PaymentInstrumentList;

      return this.apiClient.callApi(
        '/tms/v1/instrumentidentifiers/{instrumentIdentifierTokenId}/paymentinstruments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchInstrumentIdentifier operation.
     * @callback module:api/InstrumentIdentifierApi~patchInstrumentIdentifierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an Instrument Identifier
     * @param {String} instrumentIdentifierTokenId The TokenId of a Instrument Identifier.
     * @param {module:model/PatchInstrumentIdentifierRequest} patchInstrumentIdentifierRequest Specify the previous transaction ID to update.
     * @param {Object} opts Optional parameters
     * @param {String} opts.profileId The id of a profile containing user specific TMS configuration.
     * @param {String} opts.ifMatch Contains an ETag value from a GET request to make the request conditional.
     * @param {module:api/InstrumentIdentifierApi~patchInstrumentIdentifierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier}
     */
    this.patchInstrumentIdentifier = function(instrumentIdentifierTokenId, patchInstrumentIdentifierRequest, opts, callback) {
      opts = opts || {};
      var postBody = patchInstrumentIdentifierRequest;

      // verify the required parameter 'instrumentIdentifierTokenId' is set
      if (instrumentIdentifierTokenId === undefined || instrumentIdentifierTokenId === null) {
        throw new Error("Missing the required parameter 'instrumentIdentifierTokenId' when calling patchInstrumentIdentifier");
      }

      // verify the required parameter 'patchInstrumentIdentifierRequest' is set
      if (patchInstrumentIdentifierRequest === undefined || patchInstrumentIdentifierRequest === null) {
        throw new Error("Missing the required parameter 'patchInstrumentIdentifierRequest' when calling patchInstrumentIdentifier");
      }


      var pathParams = {
        'instrumentIdentifierTokenId': instrumentIdentifierTokenId
      };
      var queryParams = {
      };
      var headerParams = {
        'profile-id': opts['profileId'],
        'if-match': opts['ifMatch']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier;

      return this.apiClient.callApi(
        '/tms/v1/instrumentidentifiers/{instrumentIdentifierTokenId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postInstrumentIdentifier operation.
     * @callback module:api/InstrumentIdentifierApi~postInstrumentIdentifierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an Instrument Identifier
     * @param {module:model/PostInstrumentIdentifierRequest} postInstrumentIdentifierRequest Specify either a Card, Bank Account or Enrollable Card
     * @param {Object} opts Optional parameters
     * @param {String} opts.profileId The id of a profile containing user specific TMS configuration.
     * @param {module:api/InstrumentIdentifierApi~postInstrumentIdentifierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier}
     */
    this.postInstrumentIdentifier = function(postInstrumentIdentifierRequest, opts, callback) {
      opts = opts || {};
      var postBody = postInstrumentIdentifierRequest;

      // verify the required parameter 'postInstrumentIdentifierRequest' is set
      if (postInstrumentIdentifierRequest === undefined || postInstrumentIdentifierRequest === null) {
        throw new Error("Missing the required parameter 'postInstrumentIdentifierRequest' when calling postInstrumentIdentifier");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'profile-id': opts['profileId']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier;

      return this.apiClient.callApi(
        '/tms/v1/instrumentidentifiers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postInstrumentIdentifierEnrollment operation.
     * @callback module:api/InstrumentIdentifierApi~postInstrumentIdentifierEnrollmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enroll an Instrument Identifier for Network Tokenization
     * @param {String} instrumentIdentifierTokenId The TokenId of a Instrument Identifier.
     * @param {module:model/PostInstrumentIdentifierEnrollmentRequest} postInstrumentIdentifierEnrollmentRequest Specify Enrollable Card details
     * @param {Object} opts Optional parameters
     * @param {String} opts.profileId The id of a profile containing user specific TMS configuration.
     * @param {module:api/InstrumentIdentifierApi~postInstrumentIdentifierEnrollmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.postInstrumentIdentifierEnrollment = function(instrumentIdentifierTokenId, postInstrumentIdentifierEnrollmentRequest, opts, callback) {
      opts = opts || {};
      var postBody = postInstrumentIdentifierEnrollmentRequest;

      // verify the required parameter 'instrumentIdentifierTokenId' is set
      if (instrumentIdentifierTokenId === undefined || instrumentIdentifierTokenId === null) {
        throw new Error("Missing the required parameter 'instrumentIdentifierTokenId' when calling postInstrumentIdentifierEnrollment");
      }

      // verify the required parameter 'postInstrumentIdentifierEnrollmentRequest' is set
      if (postInstrumentIdentifierEnrollmentRequest === undefined || postInstrumentIdentifierEnrollmentRequest === null) {
        throw new Error("Missing the required parameter 'postInstrumentIdentifierEnrollmentRequest' when calling postInstrumentIdentifierEnrollment");
      }


      var pathParams = {
        'instrumentIdentifierTokenId': instrumentIdentifierTokenId
      };
      var queryParams = {
      };
      var headerParams = {
        'profile-id': opts['profileId']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = null;

      return this.apiClient.callApi(
        '/tms/v1/instrumentidentifiers/{instrumentIdentifierTokenId}/enrollment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
