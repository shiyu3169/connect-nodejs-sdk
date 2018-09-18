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
var SourceApplication = require('./SourceApplication');




/**
 * The InventoryAdjustment model module.
 * @module model/InventoryAdjustment
 */

/**
 * Constructs a new <code>InventoryAdjustment</code>.
 * Represents a change in state or quantity of product inventory at a particular time and location.
 * @alias module:model/InventoryAdjustment
 * @class
 */
var exports = function() {
  var _this = this;


















};

/**
 * Constructs a <code>InventoryAdjustment</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/InventoryAdjustment} obj Optional instance to populate.
 * @return {module:model/InventoryAdjustment} The populated <code>InventoryAdjustment</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('reference_id')) {
      obj['reference_id'] = ApiClient.convertToType(data['reference_id'], 'String');
    }
      if (data.hasOwnProperty('from_state')) {
      obj['from_state'] = ApiClient.convertToType(data['from_state'], 'String');
    }
      if (data.hasOwnProperty('to_state')) {
      obj['to_state'] = ApiClient.convertToType(data['to_state'], 'String');
    }
      if (data.hasOwnProperty('location_id')) {
      obj['location_id'] = ApiClient.convertToType(data['location_id'], 'String');
    }
      if (data.hasOwnProperty('catalog_object_id')) {
      obj['catalog_object_id'] = ApiClient.convertToType(data['catalog_object_id'], 'String');
    }
      if (data.hasOwnProperty('catalog_object_type')) {
      obj['catalog_object_type'] = ApiClient.convertToType(data['catalog_object_type'], 'String');
    }
      if (data.hasOwnProperty('quantity')) {
      obj['quantity'] = ApiClient.convertToType(data['quantity'], 'String');
    }
      if (data.hasOwnProperty('total_price_money')) {
      obj['total_price_money'] = Money.constructFromObject(data['total_price_money']);
    }
      if (data.hasOwnProperty('occurred_at')) {
      obj['occurred_at'] = ApiClient.convertToType(data['occurred_at'], 'String');
    }
      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
    }
      if (data.hasOwnProperty('source')) {
      obj['source'] = SourceApplication.constructFromObject(data['source']);
    }
      if (data.hasOwnProperty('employee_id')) {
      obj['employee_id'] = ApiClient.convertToType(data['employee_id'], 'String');
    }
      if (data.hasOwnProperty('transaction_id')) {
      obj['transaction_id'] = ApiClient.convertToType(data['transaction_id'], 'String');
    }
      if (data.hasOwnProperty('refund_id')) {
      obj['refund_id'] = ApiClient.convertToType(data['refund_id'], 'String');
    }
      if (data.hasOwnProperty('purchase_order_id')) {
      obj['purchase_order_id'] = ApiClient.convertToType(data['purchase_order_id'], 'String');
    }
      if (data.hasOwnProperty('goods_receipt_id')) {
      obj['goods_receipt_id'] = ApiClient.convertToType(data['goods_receipt_id'], 'String');
    }
    }
  return obj;
}

/**
 * A unique ID generated by Square for the [InventoryAdjustment](#type-inventoryadjustment).
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * An optional ID provided by the application to tie the [InventoryAdjustment](#type-inventoryadjustment) to an external system.
 * @member {String} reference_id
 */
exports.prototype['reference_id'] = undefined;
/**
 * The [InventoryState](#type-inventorystate) of the related quantity of items before the adjustment.
 * @member {module:model/InventoryAdjustment.FromStateEnum} from_state
 */
exports.prototype['from_state'] = undefined;
/**
 * The [InventoryState](#type-inventorystate) of the related quantity of items after the adjustment.
 * @member {module:model/InventoryAdjustment.ToStateEnum} to_state
 */
exports.prototype['to_state'] = undefined;
/**
 * The Square ID of the [Location](#type-location) where the related quantity of items are being tracked.
 * @member {String} location_id
 */
exports.prototype['location_id'] = undefined;
/**
 * The Square generated ID of the [CatalogObject](#type-catalogobject) being tracked.
 * @member {String} catalog_object_id
 */
exports.prototype['catalog_object_id'] = undefined;
/**
 * The [CatalogObjectType](#type-catalogobjecttype) of the [CatalogObject](#type-catalogobject) being tracked. Tracking is only supported for the `ITEM_VARIATION` type.
 * @member {String} catalog_object_type
 */
exports.prototype['catalog_object_type'] = undefined;
/**
 * The number of items affected by the adjustment as a decimal string. Fractional quantities are not supported.
 * @member {String} quantity
 */
exports.prototype['quantity'] = undefined;
/**
 * The read-only total price paid for goods associated with the adjustment. Present if and only if `to_state` is `SOLD`. Always non-negative.
 * @member {module:model/Money} total_price_money
 */
exports.prototype['total_price_money'] = undefined;
/**
 * A client-generated timestamp in RFC 3339 format that indicates when the adjustment took place. For write actions, the `occurred_at` timestamp cannot be older than 24 hours or in the future relative to the time of the request.
 * @member {String} occurred_at
 */
exports.prototype['occurred_at'] = undefined;
/**
 * A read-only timestamp in RFC 3339 format that indicates when Square received the adjustment.
 * @member {String} created_at
 */
exports.prototype['created_at'] = undefined;
/**
 * Read-only information about the application that caused the inventory adjustment.
 * @member {module:model/SourceApplication} source
 */
exports.prototype['source'] = undefined;
/**
 * The Square ID of the [Employee](#type-employee) responsible for the inventory adjustment.
 * @member {String} employee_id
 */
exports.prototype['employee_id'] = undefined;
/**
 * The read-only Square ID of the [Transaction][#type-transaction] that caused the adjustment. Only relevant for payment-related state transitions.
 * @member {String} transaction_id
 */
exports.prototype['transaction_id'] = undefined;
/**
 * The read-only Square ID of the [Refund][#type-refund] that caused the adjustment. Only relevant for refund-related state transitions.
 * @member {String} refund_id
 */
exports.prototype['refund_id'] = undefined;
/**
 * The read-only Square ID of the purchase order that caused the adjustment. Only relevant for state transitions from the Square for Retail app.
 * @member {String} purchase_order_id
 */
exports.prototype['purchase_order_id'] = undefined;
/**
 * The read-only Square ID of the Square goods receipt that caused the adjustment. Only relevant for state transitions from the Square for Retail app.
 * @member {String} goods_receipt_id
 */
exports.prototype['goods_receipt_id'] = undefined;


  /**
   * Allowed values for the <code>from_state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FromStateEnum = {
    /**
     * value: "CUSTOM"
     * @const
     */
    "CUSTOM": "CUSTOM",
    /**
     * value: "IN_STOCK"
     * @const
     */
    "IN_STOCK": "IN_STOCK",
    /**
     * value: "SOLD"
     * @const
     */
    "SOLD": "SOLD",
    /**
     * value: "RETURNED_BY_CUSTOMER"
     * @const
     */
    "RETURNED_BY_CUSTOMER": "RETURNED_BY_CUSTOMER",
    /**
     * value: "RESERVED_FOR_SALE"
     * @const
     */
    "RESERVED_FOR_SALE": "RESERVED_FOR_SALE",
    /**
     * value: "SOLD_ONLINE"
     * @const
     */
    "SOLD_ONLINE": "SOLD_ONLINE",
    /**
     * value: "ORDERED_FROM_VENDOR"
     * @const
     */
    "ORDERED_FROM_VENDOR": "ORDERED_FROM_VENDOR",
    /**
     * value: "RECEIVED_FROM_VENDOR"
     * @const
     */
    "RECEIVED_FROM_VENDOR": "RECEIVED_FROM_VENDOR",
    /**
     * value: "IN_TRANSIT_TO"
     * @const
     */
    "IN_TRANSIT_TO": "IN_TRANSIT_TO",
    /**
     * value: "NONE"
     * @const
     */
    "NONE": "NONE",
    /**
     * value: "WASTE"
     * @const
     */
    "WASTE": "WASTE",
    /**
     * value: "UNLINKED_RETURN"
     * @const
     */
    "UNLINKED_RETURN": "UNLINKED_RETURN"  };

  /**
   * Allowed values for the <code>to_state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ToStateEnum = {
    /**
     * value: "CUSTOM"
     * @const
     */
    "CUSTOM": "CUSTOM",
    /**
     * value: "IN_STOCK"
     * @const
     */
    "IN_STOCK": "IN_STOCK",
    /**
     * value: "SOLD"
     * @const
     */
    "SOLD": "SOLD",
    /**
     * value: "RETURNED_BY_CUSTOMER"
     * @const
     */
    "RETURNED_BY_CUSTOMER": "RETURNED_BY_CUSTOMER",
    /**
     * value: "RESERVED_FOR_SALE"
     * @const
     */
    "RESERVED_FOR_SALE": "RESERVED_FOR_SALE",
    /**
     * value: "SOLD_ONLINE"
     * @const
     */
    "SOLD_ONLINE": "SOLD_ONLINE",
    /**
     * value: "ORDERED_FROM_VENDOR"
     * @const
     */
    "ORDERED_FROM_VENDOR": "ORDERED_FROM_VENDOR",
    /**
     * value: "RECEIVED_FROM_VENDOR"
     * @const
     */
    "RECEIVED_FROM_VENDOR": "RECEIVED_FROM_VENDOR",
    /**
     * value: "IN_TRANSIT_TO"
     * @const
     */
    "IN_TRANSIT_TO": "IN_TRANSIT_TO",
    /**
     * value: "NONE"
     * @const
     */
    "NONE": "NONE",
    /**
     * value: "WASTE"
     * @const
     */
    "WASTE": "WASTE",
    /**
     * value: "UNLINKED_RETURN"
     * @const
     */
    "UNLINKED_RETURN": "UNLINKED_RETURN"  };


module.exports = exports;


