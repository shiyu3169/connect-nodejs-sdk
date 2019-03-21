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
 * Enum class V1SettlementStatus.
 * @enum {}
 * @readonly
 */
var exports = {
  /**
   * value: "FAILED"
   * @const
   */
  "FAILED": "FAILED",
  /**
   * value: "SENT"
   * @const
   */
  "SENT": "SENT"};

/**
 * Returns a <code>V1SettlementStatus</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/V1SettlementStatus} The enum <code>V1SettlementStatus</code> value.
 */
exports.constructFromObject = function(object) {
  return object;
}

module.exports = exports;

