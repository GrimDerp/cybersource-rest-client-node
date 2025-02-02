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
    define(['ApiClient', 'model/PtsV2PaymentsPost201ResponsePaymentAccountInformationCard', 'model/PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures', 'model/PtsV2PaymentsPost201ResponsePaymentInformationBank', 'model/PtsV2PaymentsPost201ResponsePaymentInformationInstrumentIdentifier', 'model/PtsV2PaymentsPost201ResponsePaymentInformationTokenizedCard', 'model/Ptsv2paymentsPaymentInformationCustomer', 'model/Ptsv2paymentsPaymentInformationPaymentInstrument', 'model/Ptsv2paymentsPaymentInformationShippingAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV2PaymentsPost201ResponsePaymentAccountInformationCard'), require('./PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures'), require('./PtsV2PaymentsPost201ResponsePaymentInformationBank'), require('./PtsV2PaymentsPost201ResponsePaymentInformationInstrumentIdentifier'), require('./PtsV2PaymentsPost201ResponsePaymentInformationTokenizedCard'), require('./Ptsv2paymentsPaymentInformationCustomer'), require('./Ptsv2paymentsPaymentInformationPaymentInstrument'), require('./Ptsv2paymentsPaymentInformationShippingAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PtsV2PaymentsPost201ResponsePaymentInformation = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2PaymentsPost201ResponsePaymentAccountInformationCard, root.CyberSource.PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures, root.CyberSource.PtsV2PaymentsPost201ResponsePaymentInformationBank, root.CyberSource.PtsV2PaymentsPost201ResponsePaymentInformationInstrumentIdentifier, root.CyberSource.PtsV2PaymentsPost201ResponsePaymentInformationTokenizedCard, root.CyberSource.Ptsv2paymentsPaymentInformationCustomer, root.CyberSource.Ptsv2paymentsPaymentInformationPaymentInstrument, root.CyberSource.Ptsv2paymentsPaymentInformationShippingAddress);
  }
}(this, function(ApiClient, PtsV2PaymentsPost201ResponsePaymentAccountInformationCard, PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures, PtsV2PaymentsPost201ResponsePaymentInformationBank, PtsV2PaymentsPost201ResponsePaymentInformationInstrumentIdentifier, PtsV2PaymentsPost201ResponsePaymentInformationTokenizedCard, Ptsv2paymentsPaymentInformationCustomer, Ptsv2paymentsPaymentInformationPaymentInstrument, Ptsv2paymentsPaymentInformationShippingAddress) {
  'use strict';




  /**
   * The PtsV2PaymentsPost201ResponsePaymentInformation model module.
   * @module model/PtsV2PaymentsPost201ResponsePaymentInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsPost201ResponsePaymentInformation</code>.
   * @alias module:model/PtsV2PaymentsPost201ResponsePaymentInformation
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>PtsV2PaymentsPost201ResponsePaymentInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsPost201ResponsePaymentInformation} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsPost201ResponsePaymentInformation} The populated <code>PtsV2PaymentsPost201ResponsePaymentInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('card')) {
        obj['card'] = PtsV2PaymentsPost201ResponsePaymentAccountInformationCard.constructFromObject(data['card']);
      }
      if (data.hasOwnProperty('tokenizedCard')) {
        obj['tokenizedCard'] = PtsV2PaymentsPost201ResponsePaymentInformationTokenizedCard.constructFromObject(data['tokenizedCard']);
      }
      if (data.hasOwnProperty('accountFeatures')) {
        obj['accountFeatures'] = PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures.constructFromObject(data['accountFeatures']);
      }
      if (data.hasOwnProperty('bank')) {
        obj['bank'] = PtsV2PaymentsPost201ResponsePaymentInformationBank.constructFromObject(data['bank']);
      }
      if (data.hasOwnProperty('customer')) {
        obj['customer'] = Ptsv2paymentsPaymentInformationCustomer.constructFromObject(data['customer']);
      }
      if (data.hasOwnProperty('paymentInstrument')) {
        obj['paymentInstrument'] = Ptsv2paymentsPaymentInformationPaymentInstrument.constructFromObject(data['paymentInstrument']);
      }
      if (data.hasOwnProperty('instrumentIdentifier')) {
        obj['instrumentIdentifier'] = PtsV2PaymentsPost201ResponsePaymentInformationInstrumentIdentifier.constructFromObject(data['instrumentIdentifier']);
      }
      if (data.hasOwnProperty('shippingAddress')) {
        obj['shippingAddress'] = Ptsv2paymentsPaymentInformationShippingAddress.constructFromObject(data['shippingAddress']);
      }
      if (data.hasOwnProperty('scheme')) {
        obj['scheme'] = ApiClient.convertToType(data['scheme'], 'String');
      }
      if (data.hasOwnProperty('bin')) {
        obj['bin'] = ApiClient.convertToType(data['bin'], 'String');
      }
      if (data.hasOwnProperty('accountType')) {
        obj['accountType'] = ApiClient.convertToType(data['accountType'], 'String');
      }
      if (data.hasOwnProperty('issuer')) {
        obj['issuer'] = ApiClient.convertToType(data['issuer'], 'String');
      }
      if (data.hasOwnProperty('binCountry')) {
        obj['binCountry'] = ApiClient.convertToType(data['binCountry'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PtsV2PaymentsPost201ResponsePaymentAccountInformationCard} card
   */
  exports.prototype['card'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponsePaymentInformationTokenizedCard} tokenizedCard
   */
  exports.prototype['tokenizedCard'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures} accountFeatures
   */
  exports.prototype['accountFeatures'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponsePaymentInformationBank} bank
   */
  exports.prototype['bank'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsPaymentInformationCustomer} customer
   */
  exports.prototype['customer'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsPaymentInformationPaymentInstrument} paymentInstrument
   */
  exports.prototype['paymentInstrument'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponsePaymentInformationInstrumentIdentifier} instrumentIdentifier
   */
  exports.prototype['instrumentIdentifier'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsPaymentInformationShippingAddress} shippingAddress
   */
  exports.prototype['shippingAddress'] = undefined;
  /**
   * Subtype of card account. This field can contain one of the following values: - Maestro International - Maestro UK Domestic - MasterCard Credit - MasterCard Debit - Visa Credit - Visa Debit - Visa Electron  **Note** Additional values may be present.  For all possible values, see the `score_card_scheme` field description in the _Decision Manager Using the SCMP API Developer Guide_ on the [CyberSource Business Center.](https://ebc2.cybersource.com/ebc2/) Click **Decision Manager** > **Documentation** > **Guides** > _Decision Manager Using the SCMP API Developer Guide_ (PDF link). 
   * @member {String} scheme
   */
  exports.prototype['scheme'] = undefined;
  /**
   * Credit card BIN (the first six digits of the credit card).Derived either from the `cc_bin` request field or from the first six characters of the `customer_cc_num` field.  For all possible values, see the `score_cc_bin` field description in the _Decision Manager Using the SCMP API Developer Guide_ on the [CyberSource Business Center.](https://ebc2.cybersource.com/ebc2/) Click **Decision Manager** > **Documentation** > **Guides** > _Decision Manager Using the SCMP API Developer Guide_ (PDF link). 
   * @member {String} bin
   */
  exports.prototype['bin'] = undefined;
  /**
   * Type of payment card account. This field can refer to a credit card, debit card, or prepaid card account type.  For all possible values, see the `score_card_account_type` field description in the _Decision Manager Using the SCMP API Developer Guide_ on the [CyberSource Business Center.](https://ebc2.cybersource.com/ebc2/) Click **Decision Manager** > **Documentation** > **Guides** > _Decision Manager Using the SCMP API Developer Guide_ (PDF link). 
   * @member {String} accountType
   */
  exports.prototype['accountType'] = undefined;
  /**
   * Name of the bank or entity that issued the card account.  For all possible values, see the `score_card_issuer` field description in the _Decision Manager Using the SCMP API Developer Guide_ on the [CyberSource Business Center.](https://ebc2.cybersource.com/ebc2/) Click **Decision Manager** > **Documentation** > **Guides** > _Decision Manager Using the SCMP API Developer Guide_ (PDF link). 
   * @member {String} issuer
   */
  exports.prototype['issuer'] = undefined;
  /**
   * Country (two-digit country code) associated with the BIN of the customer’s card used for the payment. Returned if the information is available. Use this field for additional information when reviewing orders. This information is also displayed in the details page of the CyberSource Business Center.  For all possible values, see the `bin_country` field description in the _Decision Manager Using the SCMP API Developer Guide_ on the [CyberSource Business Center.](https://ebc2.cybersource.com/ebc2/) Click **Decision Manager** > **Documentation** > **Guides** > _Decision Manager Using the SCMP API Developer Guide_ (PDF link). 
   * @member {String} binCountry
   */
  exports.prototype['binCountry'] = undefined;



  return exports;
}));


