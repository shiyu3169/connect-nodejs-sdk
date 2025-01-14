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
 * The OrderLineItemModifier model module.
 * @module model/OrderLineItemModifier
 */

/**
 * Constructs a new <code>OrderLineItemModifier</code>.
 * A [CatalogModifier](#type-catalogmodifier).
 * @alias module:model/OrderLineItemModifier
 * @class
 */
var exports = function() {
  var _this = this;






};

/**
 * Constructs a <code>OrderLineItemModifier</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/OrderLineItemModifier} obj Optional instance to populate.
 * @return {module:model/OrderLineItemModifier} The populated <code>OrderLineItemModifier</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('uid')) {
      obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
    }
      if (data.hasOwnProperty('catalog_object_id')) {
      obj['catalog_object_id'] = ApiClient.convertToType(data['catalog_object_id'], 'String');
    }
      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('base_price_money')) {
      obj['base_price_money'] = Money.constructFromObject(data['base_price_money']);
    }
      if (data.hasOwnProperty('total_price_money')) {
      obj['total_price_money'] = Money.constructFromObject(data['total_price_money']);
    }
    }
  return obj;
}

/**
 * Unique ID that identifies the modifier only within this order.  This field is read-only.
 * @member {String} uid
 */
exports.prototype['uid'] = undefined;
/**
 * The catalog object id referencing [CatalogModifier](#type-catalogmodifier).
 * @member {String} catalog_object_id
 */
exports.prototype['catalog_object_id'] = undefined;
/**
 * The name of the item modifier.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * The base price for the modifier.  `base_price_money` is required for ad hoc modifiers. If both `catalog_object_id` and `base_price_money` are set, `base_price_money` will override the predefined [CatalogModifier](#type-catalogmodifier) price.
 * @member {module:model/Money} base_price_money
 */
exports.prototype['base_price_money'] = undefined;
/**
 * The total price of the item modifier for its line item. This is the modifier's `base_price_money` multiplied by the line item's quantity.
 * @member {module:model/Money} total_price_money
 */
exports.prototype['total_price_money'] = undefined;



module.exports = exports;



