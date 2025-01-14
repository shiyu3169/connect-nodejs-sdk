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
 * The Error model module.
 * @module model/Error
 */

/**
 * Constructs a new <code>Error</code>.
 * Represents an error encountered during a request to the Connect API.
 * @alias module:model/Error
 * @class
 * @param category {module:model/Error.CategoryEnum} The error's high-level category. See [ErrorCategory](#type-errorcategory) for possible values
 * @param code {module:model/Error.CodeEnum} The error's specific code. See [ErrorCode](#type-errorcode) for possible values
 */
var exports = function(category, code) {
  var _this = this;

  _this['category'] = category;
  _this['code'] = code;


};

/**
 * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Error} obj Optional instance to populate.
 * @return {module:model/Error} The populated <code>Error</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('category')) {
      obj['category'] = ApiClient.convertToType(data['category'], 'String');
    }
      if (data.hasOwnProperty('code')) {
      obj['code'] = ApiClient.convertToType(data['code'], 'String');
    }
      if (data.hasOwnProperty('detail')) {
      obj['detail'] = ApiClient.convertToType(data['detail'], 'String');
    }
      if (data.hasOwnProperty('field')) {
      obj['field'] = ApiClient.convertToType(data['field'], 'String');
    }
    }
  return obj;
}

/**
 * The error's high-level category. See [ErrorCategory](#type-errorcategory) for possible values
 * @member {module:model/Error.CategoryEnum} category
 */
exports.prototype['category'] = undefined;
/**
 * The error's specific code. See [ErrorCode](#type-errorcode) for possible values
 * @member {module:model/Error.CodeEnum} code
 */
exports.prototype['code'] = undefined;
/**
 * A human-readable description of the error for debugging purposes.
 * @member {String} detail
 */
exports.prototype['detail'] = undefined;
/**
 * The name of the field provided in the original request that the error pertains to, if any.
 * @member {String} field
 */
exports.prototype['field'] = undefined;


  /**
   * Allowed values for the <code>category</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CategoryEnum = {
    /**
     * value: "API_ERROR"
     * @const
     */
    "API_ERROR": "API_ERROR",
    /**
     * value: "AUTHENTICATION_ERROR"
     * @const
     */
    "AUTHENTICATION_ERROR": "AUTHENTICATION_ERROR",
    /**
     * value: "INVALID_REQUEST_ERROR"
     * @const
     */
    "INVALID_REQUEST_ERROR": "INVALID_REQUEST_ERROR",
    /**
     * value: "RATE_LIMIT_ERROR"
     * @const
     */
    "RATE_LIMIT_ERROR": "RATE_LIMIT_ERROR",
    /**
     * value: "PAYMENT_METHOD_ERROR"
     * @const
     */
    "PAYMENT_METHOD_ERROR": "PAYMENT_METHOD_ERROR",
    /**
     * value: "REFUND_ERROR"
     * @const
     */
    "REFUND_ERROR": "REFUND_ERROR"  };

  /**
   * Allowed values for the <code>code</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CodeEnum = {
    /**
     * value: "INTERNAL_SERVER_ERROR"
     * @const
     */
    "INTERNAL_SERVER_ERROR": "INTERNAL_SERVER_ERROR",
    /**
     * value: "UNAUTHORIZED"
     * @const
     */
    "UNAUTHORIZED": "UNAUTHORIZED",
    /**
     * value: "ACCESS_TOKEN_EXPIRED"
     * @const
     */
    "ACCESS_TOKEN_EXPIRED": "ACCESS_TOKEN_EXPIRED",
    /**
     * value: "ACCESS_TOKEN_REVOKED"
     * @const
     */
    "ACCESS_TOKEN_REVOKED": "ACCESS_TOKEN_REVOKED",
    /**
     * value: "FORBIDDEN"
     * @const
     */
    "FORBIDDEN": "FORBIDDEN",
    /**
     * value: "INSUFFICIENT_SCOPES"
     * @const
     */
    "INSUFFICIENT_SCOPES": "INSUFFICIENT_SCOPES",
    /**
     * value: "APPLICATION_DISABLED"
     * @const
     */
    "APPLICATION_DISABLED": "APPLICATION_DISABLED",
    /**
     * value: "V1_APPLICATION"
     * @const
     */
    "V1_APPLICATION": "V1_APPLICATION",
    /**
     * value: "V1_ACCESS_TOKEN"
     * @const
     */
    "V1_ACCESS_TOKEN": "V1_ACCESS_TOKEN",
    /**
     * value: "CARD_PROCESSING_NOT_ENABLED"
     * @const
     */
    "CARD_PROCESSING_NOT_ENABLED": "CARD_PROCESSING_NOT_ENABLED",
    /**
     * value: "BAD_REQUEST"
     * @const
     */
    "BAD_REQUEST": "BAD_REQUEST",
    /**
     * value: "MISSING_REQUIRED_PARAMETER"
     * @const
     */
    "MISSING_REQUIRED_PARAMETER": "MISSING_REQUIRED_PARAMETER",
    /**
     * value: "INCORRECT_TYPE"
     * @const
     */
    "INCORRECT_TYPE": "INCORRECT_TYPE",
    /**
     * value: "INVALID_TIME"
     * @const
     */
    "INVALID_TIME": "INVALID_TIME",
    /**
     * value: "INVALID_TIME_RANGE"
     * @const
     */
    "INVALID_TIME_RANGE": "INVALID_TIME_RANGE",
    /**
     * value: "INVALID_VALUE"
     * @const
     */
    "INVALID_VALUE": "INVALID_VALUE",
    /**
     * value: "INVALID_CURSOR"
     * @const
     */
    "INVALID_CURSOR": "INVALID_CURSOR",
    /**
     * value: "UNKNOWN_QUERY_PARAMETER"
     * @const
     */
    "UNKNOWN_QUERY_PARAMETER": "UNKNOWN_QUERY_PARAMETER",
    /**
     * value: "CONFLICTING_PARAMETERS"
     * @const
     */
    "CONFLICTING_PARAMETERS": "CONFLICTING_PARAMETERS",
    /**
     * value: "EXPECTED_JSON_BODY"
     * @const
     */
    "EXPECTED_JSON_BODY": "EXPECTED_JSON_BODY",
    /**
     * value: "INVALID_SORT_ORDER"
     * @const
     */
    "INVALID_SORT_ORDER": "INVALID_SORT_ORDER",
    /**
     * value: "VALUE_REGEX_MISMATCH"
     * @const
     */
    "VALUE_REGEX_MISMATCH": "VALUE_REGEX_MISMATCH",
    /**
     * value: "VALUE_TOO_SHORT"
     * @const
     */
    "VALUE_TOO_SHORT": "VALUE_TOO_SHORT",
    /**
     * value: "VALUE_TOO_LONG"
     * @const
     */
    "VALUE_TOO_LONG": "VALUE_TOO_LONG",
    /**
     * value: "VALUE_TOO_LOW"
     * @const
     */
    "VALUE_TOO_LOW": "VALUE_TOO_LOW",
    /**
     * value: "VALUE_TOO_HIGH"
     * @const
     */
    "VALUE_TOO_HIGH": "VALUE_TOO_HIGH",
    /**
     * value: "VALUE_EMPTY"
     * @const
     */
    "VALUE_EMPTY": "VALUE_EMPTY",
    /**
     * value: "ARRAY_LENGTH_TOO_LONG"
     * @const
     */
    "ARRAY_LENGTH_TOO_LONG": "ARRAY_LENGTH_TOO_LONG",
    /**
     * value: "ARRAY_LENGTH_TOO_SHORT"
     * @const
     */
    "ARRAY_LENGTH_TOO_SHORT": "ARRAY_LENGTH_TOO_SHORT",
    /**
     * value: "ARRAY_EMPTY"
     * @const
     */
    "ARRAY_EMPTY": "ARRAY_EMPTY",
    /**
     * value: "EXPECTED_BOOLEAN"
     * @const
     */
    "EXPECTED_BOOLEAN": "EXPECTED_BOOLEAN",
    /**
     * value: "EXPECTED_INTEGER"
     * @const
     */
    "EXPECTED_INTEGER": "EXPECTED_INTEGER",
    /**
     * value: "EXPECTED_FLOAT"
     * @const
     */
    "EXPECTED_FLOAT": "EXPECTED_FLOAT",
    /**
     * value: "EXPECTED_STRING"
     * @const
     */
    "EXPECTED_STRING": "EXPECTED_STRING",
    /**
     * value: "EXPECTED_OBJECT"
     * @const
     */
    "EXPECTED_OBJECT": "EXPECTED_OBJECT",
    /**
     * value: "EXPECTED_ARRAY"
     * @const
     */
    "EXPECTED_ARRAY": "EXPECTED_ARRAY",
    /**
     * value: "EXPECTED_MAP"
     * @const
     */
    "EXPECTED_MAP": "EXPECTED_MAP",
    /**
     * value: "EXPECTED_BASE64_ENCODED_BYTE_ARRAY"
     * @const
     */
    "EXPECTED_BASE64_ENCODED_BYTE_ARRAY": "EXPECTED_BASE64_ENCODED_BYTE_ARRAY",
    /**
     * value: "INVALID_ARRAY_VALUE"
     * @const
     */
    "INVALID_ARRAY_VALUE": "INVALID_ARRAY_VALUE",
    /**
     * value: "INVALID_ENUM_VALUE"
     * @const
     */
    "INVALID_ENUM_VALUE": "INVALID_ENUM_VALUE",
    /**
     * value: "INVALID_CONTENT_TYPE"
     * @const
     */
    "INVALID_CONTENT_TYPE": "INVALID_CONTENT_TYPE",
    /**
     * value: "INVALID_FORM_VALUE"
     * @const
     */
    "INVALID_FORM_VALUE": "INVALID_FORM_VALUE",
    /**
     * value: "ONE_INSTRUMENT_EXPECTED"
     * @const
     */
    "ONE_INSTRUMENT_EXPECTED": "ONE_INSTRUMENT_EXPECTED",
    /**
     * value: "NO_FIELDS_SET"
     * @const
     */
    "NO_FIELDS_SET": "NO_FIELDS_SET",
    /**
     * value: "DEPRECATED_FIELD_SET"
     * @const
     */
    "DEPRECATED_FIELD_SET": "DEPRECATED_FIELD_SET",
    /**
     * value: "RETIRED_FIELD_SET"
     * @const
     */
    "RETIRED_FIELD_SET": "RETIRED_FIELD_SET",
    /**
     * value: "CARD_EXPIRED"
     * @const
     */
    "CARD_EXPIRED": "CARD_EXPIRED",
    /**
     * value: "INVALID_EXPIRATION"
     * @const
     */
    "INVALID_EXPIRATION": "INVALID_EXPIRATION",
    /**
     * value: "INVALID_EXPIRATION_YEAR"
     * @const
     */
    "INVALID_EXPIRATION_YEAR": "INVALID_EXPIRATION_YEAR",
    /**
     * value: "INVALID_EXPIRATION_DATE"
     * @const
     */
    "INVALID_EXPIRATION_DATE": "INVALID_EXPIRATION_DATE",
    /**
     * value: "UNSUPPORTED_CARD_BRAND"
     * @const
     */
    "UNSUPPORTED_CARD_BRAND": "UNSUPPORTED_CARD_BRAND",
    /**
     * value: "UNSUPPORTED_ENTRY_METHOD"
     * @const
     */
    "UNSUPPORTED_ENTRY_METHOD": "UNSUPPORTED_ENTRY_METHOD",
    /**
     * value: "INVALID_ENCRYPTED_CARD"
     * @const
     */
    "INVALID_ENCRYPTED_CARD": "INVALID_ENCRYPTED_CARD",
    /**
     * value: "INVALID_CARD"
     * @const
     */
    "INVALID_CARD": "INVALID_CARD",
    /**
     * value: "DELAYED_TRANSACTION_EXPIRED"
     * @const
     */
    "DELAYED_TRANSACTION_EXPIRED": "DELAYED_TRANSACTION_EXPIRED",
    /**
     * value: "DELAYED_TRANSACTION_CANCELED"
     * @const
     */
    "DELAYED_TRANSACTION_CANCELED": "DELAYED_TRANSACTION_CANCELED",
    /**
     * value: "DELAYED_TRANSACTION_CAPTURED"
     * @const
     */
    "DELAYED_TRANSACTION_CAPTURED": "DELAYED_TRANSACTION_CAPTURED",
    /**
     * value: "DELAYED_TRANSACTION_FAILED"
     * @const
     */
    "DELAYED_TRANSACTION_FAILED": "DELAYED_TRANSACTION_FAILED",
    /**
     * value: "CARD_TOKEN_EXPIRED"
     * @const
     */
    "CARD_TOKEN_EXPIRED": "CARD_TOKEN_EXPIRED",
    /**
     * value: "CARD_TOKEN_USED"
     * @const
     */
    "CARD_TOKEN_USED": "CARD_TOKEN_USED",
    /**
     * value: "AMOUNT_TOO_HIGH"
     * @const
     */
    "AMOUNT_TOO_HIGH": "AMOUNT_TOO_HIGH",
    /**
     * value: "UNSUPPORTED_INSTRUMENT_TYPE"
     * @const
     */
    "UNSUPPORTED_INSTRUMENT_TYPE": "UNSUPPORTED_INSTRUMENT_TYPE",
    /**
     * value: "REFUND_AMOUNT_INVALID"
     * @const
     */
    "REFUND_AMOUNT_INVALID": "REFUND_AMOUNT_INVALID",
    /**
     * value: "REFUND_ALREADY_PENDING"
     * @const
     */
    "REFUND_ALREADY_PENDING": "REFUND_ALREADY_PENDING",
    /**
     * value: "PAYMENT_NOT_REFUNDABLE"
     * @const
     */
    "PAYMENT_NOT_REFUNDABLE": "PAYMENT_NOT_REFUNDABLE",
    /**
     * value: "INVALID_CARD_DATA"
     * @const
     */
    "INVALID_CARD_DATA": "INVALID_CARD_DATA",
    /**
     * value: "LOCATION_MISMATCH"
     * @const
     */
    "LOCATION_MISMATCH": "LOCATION_MISMATCH",
    /**
     * value: "IDEMPOTENCY_KEY_REUSED"
     * @const
     */
    "IDEMPOTENCY_KEY_REUSED": "IDEMPOTENCY_KEY_REUSED",
    /**
     * value: "UNEXPECTED_VALUE"
     * @const
     */
    "UNEXPECTED_VALUE": "UNEXPECTED_VALUE",
    /**
     * value: "SANDBOX_NOT_SUPPORTED"
     * @const
     */
    "SANDBOX_NOT_SUPPORTED": "SANDBOX_NOT_SUPPORTED",
    /**
     * value: "INVALID_EMAIL_ADDRESS"
     * @const
     */
    "INVALID_EMAIL_ADDRESS": "INVALID_EMAIL_ADDRESS",
    /**
     * value: "INVALID_PHONE_NUMBER"
     * @const
     */
    "INVALID_PHONE_NUMBER": "INVALID_PHONE_NUMBER",
    /**
     * value: "CHECKOUT_EXPIRED"
     * @const
     */
    "CHECKOUT_EXPIRED": "CHECKOUT_EXPIRED",
    /**
     * value: "BAD_CERTIFICATE"
     * @const
     */
    "BAD_CERTIFICATE": "BAD_CERTIFICATE",
    /**
     * value: "INVALID_SQUARE_VERSION_FORMAT"
     * @const
     */
    "INVALID_SQUARE_VERSION_FORMAT": "INVALID_SQUARE_VERSION_FORMAT",
    /**
     * value: "API_VERSION_INCOMPATIBLE"
     * @const
     */
    "API_VERSION_INCOMPATIBLE": "API_VERSION_INCOMPATIBLE",
    /**
     * value: "CARD_DECLINED"
     * @const
     */
    "CARD_DECLINED": "CARD_DECLINED",
    /**
     * value: "VERIFY_CVV_FAILURE"
     * @const
     */
    "VERIFY_CVV_FAILURE": "VERIFY_CVV_FAILURE",
    /**
     * value: "VERIFY_AVS_FAILURE"
     * @const
     */
    "VERIFY_AVS_FAILURE": "VERIFY_AVS_FAILURE",
    /**
     * value: "CARD_DECLINED_CALL_ISSUER"
     * @const
     */
    "CARD_DECLINED_CALL_ISSUER": "CARD_DECLINED_CALL_ISSUER",
    /**
     * value: "NOT_FOUND"
     * @const
     */
    "NOT_FOUND": "NOT_FOUND",
    /**
     * value: "APPLE_PAYMENT_PROCESSING_CERTIFICATE_HASH_NOT_FOUND"
     * @const
     */
    "APPLE_PAYMENT_PROCESSING_CERTIFICATE_HASH_NOT_FOUND": "APPLE_PAYMENT_PROCESSING_CERTIFICATE_HASH_NOT_FOUND",
    /**
     * value: "METHOD_NOT_ALLOWED"
     * @const
     */
    "METHOD_NOT_ALLOWED": "METHOD_NOT_ALLOWED",
    /**
     * value: "NOT_ACCEPTABLE"
     * @const
     */
    "NOT_ACCEPTABLE": "NOT_ACCEPTABLE",
    /**
     * value: "REQUEST_TIMEOUT"
     * @const
     */
    "REQUEST_TIMEOUT": "REQUEST_TIMEOUT",
    /**
     * value: "CONFLICT"
     * @const
     */
    "CONFLICT": "CONFLICT",
    /**
     * value: "REQUEST_ENTITY_TOO_LARGE"
     * @const
     */
    "REQUEST_ENTITY_TOO_LARGE": "REQUEST_ENTITY_TOO_LARGE",
    /**
     * value: "UNSUPPORTED_MEDIA_TYPE"
     * @const
     */
    "UNSUPPORTED_MEDIA_TYPE": "UNSUPPORTED_MEDIA_TYPE",
    /**
     * value: "RATE_LIMITED"
     * @const
     */
    "RATE_LIMITED": "RATE_LIMITED",
    /**
     * value: "NOT_IMPLEMENTED"
     * @const
     */
    "NOT_IMPLEMENTED": "NOT_IMPLEMENTED",
    /**
     * value: "SERVICE_UNAVAILABLE"
     * @const
     */
    "SERVICE_UNAVAILABLE": "SERVICE_UNAVAILABLE",
    /**
     * value: "GATEWAY_TIMEOUT"
     * @const
     */
    "GATEWAY_TIMEOUT": "GATEWAY_TIMEOUT"  };


module.exports = exports;



