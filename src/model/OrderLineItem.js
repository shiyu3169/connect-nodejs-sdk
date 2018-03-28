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
var OrderLineItemDiscount = require('./OrderLineItemDiscount');
var OrderLineItemModifier = require('./OrderLineItemModifier');
var OrderLineItemTax = require('./OrderLineItemTax');




/**
 * The OrderLineItem model module.
 * @module model/OrderLineItem
 * @version 2.6.1
 */

/**
 * Constructs a new <code>OrderLineItem</code>.
 * Represents a line item in an order. Each line item describes a different product to purchase, with its own quantity and price details.
 * @alias module:model/OrderLineItem
 * @class
 * @param quantity {String} The quantity purchased, as a string representation of a number.
 */
var exports = function(quantity) {
  var _this = this;


  _this['quantity'] = quantity;











};

/**
 * Constructs a <code>OrderLineItem</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/OrderLineItem} obj Optional instance to populate.
 * @return {module:model/OrderLineItem} The populated <code>OrderLineItem</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('quantity')) {
      obj['quantity'] = ApiClient.convertToType(data['quantity'], 'String');
    }
      if (data.hasOwnProperty('note')) {
      obj['note'] = ApiClient.convertToType(data['note'], 'String');
    }
      if (data.hasOwnProperty('catalog_object_id')) {
      obj['catalog_object_id'] = ApiClient.convertToType(data['catalog_object_id'], 'String');
    }
      if (data.hasOwnProperty('variation_name')) {
      obj['variation_name'] = ApiClient.convertToType(data['variation_name'], 'String');
    }
      if (data.hasOwnProperty('modifiers')) {
      obj['modifiers'] = ApiClient.convertToType(data['modifiers'], [OrderLineItemModifier]);
    }
      if (data.hasOwnProperty('taxes')) {
      obj['taxes'] = ApiClient.convertToType(data['taxes'], [OrderLineItemTax]);
    }
      if (data.hasOwnProperty('discounts')) {
      obj['discounts'] = ApiClient.convertToType(data['discounts'], [OrderLineItemDiscount]);
    }
      if (data.hasOwnProperty('base_price_money')) {
      obj['base_price_money'] = Money.constructFromObject(data['base_price_money']);
    }
      if (data.hasOwnProperty('gross_sales_money')) {
      obj['gross_sales_money'] = Money.constructFromObject(data['gross_sales_money']);
    }
      if (data.hasOwnProperty('total_tax_money')) {
      obj['total_tax_money'] = Money.constructFromObject(data['total_tax_money']);
    }
      if (data.hasOwnProperty('total_discount_money')) {
      obj['total_discount_money'] = Money.constructFromObject(data['total_discount_money']);
    }
      if (data.hasOwnProperty('total_money')) {
      obj['total_money'] = Money.constructFromObject(data['total_money']);
    }
    }
  return obj;
}

/**
 * The name of the line item.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * The quantity purchased, as a string representation of a number.
 * @member {String} quantity
 */
exports.prototype['quantity'] = undefined;
/**
 * The note of the line item.
 * @member {String} note
 */
exports.prototype['note'] = undefined;
/**
 * The [CatalogItemVariation](#type-catalogitemvariation) id applied to this line item.
 * @member {String} catalog_object_id
 */
exports.prototype['catalog_object_id'] = undefined;
/**
 * The name of the variation applied to this line item.
 * @member {String} variation_name
 */
exports.prototype['variation_name'] = undefined;
/**
 * The [CatalogModifier](#type-catalogmodifier)s applied to this line item.
 * @member {Array.<module:model/OrderLineItemModifier>} modifiers
 */
exports.prototype['modifiers'] = undefined;
/**
 * The taxes applied to this line item.
 * @member {Array.<module:model/OrderLineItemTax>} taxes
 */
exports.prototype['taxes'] = undefined;
/**
 * The discounts applied to this line item.
 * @member {Array.<module:model/OrderLineItemDiscount>} discounts
 */
exports.prototype['discounts'] = undefined;
/**
 * The base price for a single unit of the line item.
 * @member {module:model/Money} base_price_money
 */
exports.prototype['base_price_money'] = undefined;
/**
 * The gross sales amount of money calculated as (item base price + modifiers price) * quantity.
 * @member {module:model/Money} gross_sales_money
 */
exports.prototype['gross_sales_money'] = undefined;
/**
 * The total tax amount of money to collect for the line item.
 * @member {module:model/Money} total_tax_money
 */
exports.prototype['total_tax_money'] = undefined;
/**
 * The total discount amount of money to collect for the line item.
 * @member {module:model/Money} total_discount_money
 */
exports.prototype['total_discount_money'] = undefined;
/**
 * The total amount of money to collect for this line item.
 * @member {module:model/Money} total_money
 */
exports.prototype['total_money'] = undefined;



module.exports = exports;



