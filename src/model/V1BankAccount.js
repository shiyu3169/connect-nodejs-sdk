/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');




/**
 * The V1BankAccount model module.
 * @module model/V1BankAccount
 * @version 2.5.4
 */

/**
 * Constructs a new <code>V1BankAccount</code>.
 * @alias module:model/V1BankAccount
 * @class
 */
var exports = function() {
  var _this = this;









};

/**
 * Constructs a <code>V1BankAccount</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1BankAccount} obj Optional instance to populate.
 * @return {module:model/V1BankAccount} The populated <code>V1BankAccount</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('merchant_id')) {
      obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
    }
      if (data.hasOwnProperty('bank_name')) {
      obj['bank_name'] = ApiClient.convertToType(data['bank_name'], 'String');
    }
      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('routing_number')) {
      obj['routing_number'] = ApiClient.convertToType(data['routing_number'], 'String');
    }
      if (data.hasOwnProperty('account_number_suffix')) {
      obj['account_number_suffix'] = ApiClient.convertToType(data['account_number_suffix'], 'String');
    }
      if (data.hasOwnProperty('currency_code')) {
      obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
    }
      if (data.hasOwnProperty('type')) {
      obj['type'] = ApiClient.convertToType(data['type'], 'String');
    }
    }
  return obj;
}

/**
 * The bank account's Square-issued ID.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The Square-issued ID of the merchant associated with the bank account.
 * @member {String} merchant_id
 */
exports.prototype['merchant_id'] = undefined;
/**
 * The name of the bank that manages the account.
 * @member {String} bank_name
 */
exports.prototype['bank_name'] = undefined;
/**
 * The name associated with the bank account.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * The bank account's routing number.
 * @member {String} routing_number
 */
exports.prototype['routing_number'] = undefined;
/**
 * The last few digits of the bank account number.
 * @member {String} account_number_suffix
 */
exports.prototype['account_number_suffix'] = undefined;
/**
 * The currency code of the currency associated with the bank account, in ISO 4217 format. For example, the currency code for US dollars is USD.
 * @member {String} currency_code
 */
exports.prototype['currency_code'] = undefined;
/**
 * The bank account's type (for example, savings or checking).
 * @member {module:model/V1BankAccount.TypeEnum} type
 */
exports.prototype['type'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "BUSINESS_CHECKING"
     * @const
     */
    "BUSINESS_CHECKING": "BUSINESS_CHECKING",
    /**
     * value: "CHECKING"
     * @const
     */
    "CHECKING": "CHECKING",
    /**
     * value: "INVESTMENT"
     * @const
     */
    "INVESTMENT": "INVESTMENT",
    /**
     * value: "LOAN"
     * @const
     */
    "LOAN": "LOAN",
    /**
     * value: "SAVINGS"
     * @const
     */
    "SAVINGS": "SAVINGS",
    /**
     * value: "OTHER"
     * @const
     */
    "OTHER": "OTHER"  };


module.exports = exports;



