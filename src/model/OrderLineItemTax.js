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
 * The OrderLineItemTax model module.
 * @module model/OrderLineItemTax
 */

/**
 * Constructs a new <code>OrderLineItemTax</code>.
 * Represents a tax that applies to one or more line items in an order.
 * @alias module:model/OrderLineItemTax
 * @class
 */
var exports = function() {
  var _this = this;








};

/**
 * Constructs a <code>OrderLineItemTax</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/OrderLineItemTax} obj Optional instance to populate.
 * @return {module:model/OrderLineItemTax} The populated <code>OrderLineItemTax</code> instance.
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
      if (data.hasOwnProperty('type')) {
      obj['type'] = ApiClient.convertToType(data['type'], 'String');
    }
      if (data.hasOwnProperty('percentage')) {
      obj['percentage'] = ApiClient.convertToType(data['percentage'], 'String');
    }
      if (data.hasOwnProperty('applied_money')) {
      obj['applied_money'] = Money.constructFromObject(data['applied_money']);
    }
      if (data.hasOwnProperty('scope')) {
      obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
    }
    }
  return obj;
}

/**
 * Unique ID that identifies the tax only within this order.  This field is read-only.
 * @member {String} uid
 */
exports.prototype['uid'] = undefined;
/**
 * The catalog object id referencing [CatalogTax](#type-catalogtax).
 * @member {String} catalog_object_id
 */
exports.prototype['catalog_object_id'] = undefined;
/**
 * The tax's name.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * Indicates the calculation method used to apply the tax. See [OrderLineItemTaxType](#type-orderlineitemtaxtype) for possible values
 * @member {module:model/OrderLineItemTax.TypeEnum} type
 */
exports.prototype['type'] = undefined;
/**
 * The percentage of the tax, as a string representation of a decimal number.  A value of `7.25` corresponds to a percentage of 7.25%.
 * @member {String} percentage
 */
exports.prototype['percentage'] = undefined;
/**
 * The amount of the money applied by the tax in an order.
 * @member {module:model/Money} applied_money
 */
exports.prototype['applied_money'] = undefined;
/**
 * Indicates the level at which the tax applies. This field is set by the server. If set in a CreateOrder request, it will be ignored on write. See [OrderLineItemTaxScope](#type-orderlineitemtaxscope) for possible values
 * @member {module:model/OrderLineItemTax.ScopeEnum} scope
 */
exports.prototype['scope'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "UNKNOWN_TAX"
     * @const
     */
    "UNKNOWN_TAX": "UNKNOWN_TAX",
    /**
     * value: "ADDITIVE"
     * @const
     */
    "ADDITIVE": "ADDITIVE",
    /**
     * value: "INCLUSIVE"
     * @const
     */
    "INCLUSIVE": "INCLUSIVE"  };

  /**
   * Allowed values for the <code>scope</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ScopeEnum = {
    /**
     * value: "OTHER_TAX_SCOPE"
     * @const
     */
    "OTHER_TAX_SCOPE": "OTHER_TAX_SCOPE",
    /**
     * value: "LINE_ITEM"
     * @const
     */
    "LINE_ITEM": "LINE_ITEM",
    /**
     * value: "ORDER"
     * @const
     */
    "ORDER": "ORDER"  };


module.exports = exports;



