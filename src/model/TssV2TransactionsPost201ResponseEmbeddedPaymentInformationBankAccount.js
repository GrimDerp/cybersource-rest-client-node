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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TssV2TransactionsPost201ResponseEmbeddedPaymentInformationBankAccount = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TssV2TransactionsPost201ResponseEmbeddedPaymentInformationBankAccount model module.
   * @module model/TssV2TransactionsPost201ResponseEmbeddedPaymentInformationBankAccount
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsPost201ResponseEmbeddedPaymentInformationBankAccount</code>.
   * @alias module:model/TssV2TransactionsPost201ResponseEmbeddedPaymentInformationBankAccount
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TssV2TransactionsPost201ResponseEmbeddedPaymentInformationBankAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsPost201ResponseEmbeddedPaymentInformationBankAccount} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsPost201ResponseEmbeddedPaymentInformationBankAccount} The populated <code>TssV2TransactionsPost201ResponseEmbeddedPaymentInformationBankAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('suffix')) {
        obj['suffix'] = ApiClient.convertToType(data['suffix'], 'String');
      }
      if (data.hasOwnProperty('prefix')) {
        obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
      }
    }
    return obj;
  }

  /**
   * Last four digits of the customer’s payment account number. 
   * @member {String} suffix
   */
  exports.prototype['suffix'] = undefined;
  /**
   * Bank Identification Number (BIN). This is the initial four to six numbers on a credit card account number. 
   * @member {String} prefix
   */
  exports.prototype['prefix'] = undefined;



  return exports;
}));


