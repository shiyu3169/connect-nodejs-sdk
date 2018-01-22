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
var V1Merchant = require('../model/V1Merchant');

/**
 * V1Locations service.
 * @module api/V1LocationsApi
 * @version 2.5.4
 */

/**
 * Constructs a new V1LocationsApi. 
 * @alias module:api/V1LocationsApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;



  /**
   * Provides details for a business&#39;s locations, including their IDs.
   * Provides details for a business&#39;s locations, including their IDs.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/V1Merchant>} and HTTP response
   */
  this.listLocationsWithHttpInfo = function() {
    var postBody = null;


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = [V1Merchant];

    return this.apiClient.callApi(
      '/v1/me/locations', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * Provides details for a business&#39;s locations, including their IDs.
   * Provides details for a business&#39;s locations, including their IDs.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/V1Merchant>}
   */
  this.listLocations = function() {
    return this.listLocationsWithHttpInfo()
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * Get a business&#39;s information.
   * Get a business&#39;s information.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V1Merchant} and HTTP response
   */
  this.retrieveBusinessWithHttpInfo = function() {
    var postBody = null;


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = V1Merchant;

    return this.apiClient.callApi(
      '/v1/me', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * Get a business&#39;s information.
   * Get a business&#39;s information.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V1Merchant}
   */
  this.retrieveBusiness = function() {
    return this.retrieveBusinessWithHttpInfo()
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
