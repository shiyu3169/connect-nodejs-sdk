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
var Money = require('./Money');




/**
 * The CreateOrderRequestDiscount model module.
 * @module model/CreateOrderRequestDiscount
 * @version 2.6.1
 */

/**
 * Constructs a new <code>CreateOrderRequestDiscount</code>.
 * Represents a discount that can apply to either a single line item or an entire order.
 * @alias module:model/CreateOrderRequestDiscount
 * @class
 */
var exports = function() {
  var _this = this;





};

/**
 * Constructs a <code>CreateOrderRequestDiscount</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CreateOrderRequestDiscount} obj Optional instance to populate.
 * @return {module:model/CreateOrderRequestDiscount} The populated <code>CreateOrderRequestDiscount</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('catalog_object_id')) {
      obj['catalog_object_id'] = ApiClient.convertToType(data['catalog_object_id'], 'String');
    }
      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('percentage')) {
      obj['percentage'] = ApiClient.convertToType(data['percentage'], 'String');
    }
      if (data.hasOwnProperty('amount_money')) {
      obj['amount_money'] = Money.constructFromObject(data['amount_money']);
    }
    }
  return obj;
}

/**
 * Only used for catalog discounts. The catalog object ID for an existing [CatalogDiscount](#type-catalogdiscount).  Do not provide a value for this field if you provide values in other fields for an ad hoc discount.
 * @member {String} catalog_object_id
 */
exports.prototype['catalog_object_id'] = undefined;
/**
 * Only used for ad hoc discounts. The discount's name.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * Only used for ad hoc discounts. The percentage of the discount, as a string representation of a decimal number.  A value of `7.25` corresponds to a percentage of 7.25%. This value range between 0.0 up to 100.0
 * @member {String} percentage
 */
exports.prototype['percentage'] = undefined;
/**
 * Only used for ad hoc discounts. The monetary amount of the discount.
 * @member {module:model/Money} amount_money
 */
exports.prototype['amount_money'] = undefined;



module.exports = exports;



