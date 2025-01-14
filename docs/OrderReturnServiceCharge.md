# SquareConnect.OrderReturnServiceCharge

### Description

The service charge applied to the original order.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uid** | **String** | Unique ID that identifies the return service charge only within this order.  This field is read-only. | [optional] 
**source_service_charge_uid** | **String** | &#x60;uid&#x60; of the Service Charge from the Order which contains the original charge of this service charge, null for unlinked returns. | [optional] 
**name** | **String** | The name of the service charge. | [optional] 
**catalog_object_id** | **String** | The ID referencing the service charge [CatalogObject](#type-catalogobject) | [optional] 
**percentage** | **String** | The percentage of the service charge, as a string representation of a decimal number.  A value of &#x60;7.25&#x60; corresponds to a percentage of 7.25%.  Exactly one of percentage or amount_money should be set. | [optional] 
**amount_money** | [**Money**](Money.md) | The amount of a non-percentage based service charge.  Exactly one of percentage or amount_money should be set. | [optional] 
**applied_money** | [**Money**](Money.md) | The amount of money applied to the order by the service charge, as calculated by the server.  For fixed-amount service charges, &#x60;applied_money&#x60; is equal to &#x60;amount_money&#x60;.  For percentage-based service charges, &#x60;applied_money&#x60; is the money calculated using the percentage. The &#x60;applied_money&#x60; field will include any inclusive tax amounts as well.  This field is read-only. | [optional] 
**total_money** | [**Money**](Money.md) | The total amount of money to collect for the service charge.  Note that &#x60;total_money&#x60; does not equal &#x60;applied_money&#x60; plus &#x60;total_tax_money&#x60; if an inclusive tax is applied to the service charge since the inclusive tax amount will be included in both &#x60;applied_money&#x60; and &#x60;total_tax_money&#x60;.  This field is read-only. | [optional] 
**total_tax_money** | [**Money**](Money.md) | The total amount of tax money to collect for the service charge.  This field is read-only. | [optional] 
**calculation_phase** | **String** | The calculation phase after which to apply the service charge.  This field is read-only. See [OrderServiceChargeCalculationPhase](#type-orderservicechargecalculationphase) for possible values | [optional] 
**taxable** | **Boolean** | Indicates whether the surcharge can be taxed. Service charges calculated in the &#x60;TOTAL_PHASE&#x60; cannot be marked as taxable. | [optional] 
**return_taxes** | [**[OrderReturnTax]**](OrderReturnTax.md) | The taxes which apply to the service charge. Return-level taxes apply by default to service charge calculated in the &#x60;SUBTOTAL_PHASE&#x60; if the service charge is marked as taxable. | [optional] 


<a name="CalculationPhaseEnum"></a>
## Enum: CalculationPhaseEnum


* `SUBTOTAL_PHASE` (value: `"SUBTOTAL_PHASE"`)

* `TOTAL_PHASE` (value: `"TOTAL_PHASE"`)




