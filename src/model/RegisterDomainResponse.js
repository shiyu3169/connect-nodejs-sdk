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
var Error = require('./Error');




/**
 * The RegisterDomainResponse model module.
 * @module model/RegisterDomainResponse
 */

/**
 * Constructs a new <code>RegisterDomainResponse</code>.
 * Defines the fields that are included in the response body of a request to the RegisterDomain endpoint.  Either &#x60;errors&#x60; or &#x60;status&#x60; will be present in a given response (never both).
 * @alias module:model/RegisterDomainResponse
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>RegisterDomainResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/RegisterDomainResponse} obj Optional instance to populate.
 * @return {module:model/RegisterDomainResponse} The populated <code>RegisterDomainResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('status')) {
      obj['status'] = ApiClient.convertToType(data['status'], 'String');
    }
    }
  return obj;
}

/**
 * Any errors that occurred during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;
/**
 * Status of the domain registration. See [RegisterDomainResponseStatus](#type-registerdomainresponsestatus) for possible values
 * @member {module:model/RegisterDomainResponse.StatusEnum} status
 */
exports.prototype['status'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "PENDING"
     * @const
     */
    "PENDING": "PENDING",
    /**
     * value: "VERIFIED"
     * @const
     */
    "VERIFIED": "VERIFIED"  };


module.exports = exports;



