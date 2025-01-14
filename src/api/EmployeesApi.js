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
var ListEmployeesResponse = require('../model/ListEmployeesResponse');
var RetrieveEmployeeResponse = require('../model/RetrieveEmployeeResponse');

/**
 * Employees service.
 * @module api/EmployeesApi
 */

/**
 * Constructs a new EmployeesApi. 
 * @alias module:api/EmployeesApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;



  /**
   * ListEmployees
   * Gets a list of &#x60;Employee&#x60; objects for a business.
   * @param {Object} opts Optional parameters
   * @param {String} opts.locationId Filter employees returned to only those that are associated with the specified location.
   * @param {module:model/String} opts.status Specifies the EmployeeStatus to filter the employee by.
   * @param {Number} opts.limit The number of employees to be returned on each page.
   * @param {String} opts.cursor The token required to retrieve the specified page of results.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListEmployeesResponse} and HTTP response
   */
  this.listEmployeesWithHttpInfo = function(opts) {
    opts = opts || {};
    var postBody = null;


    var pathParams = {
    };
    var queryParams = {
      'location_id': opts['locationId'],
      'status': opts['status'],
      'limit': opts['limit'],
      'cursor': opts['cursor']
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-06-12';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = ListEmployeesResponse;

    return this.apiClient.callApi(
      '/v2/employees', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * ListEmployees
   * Gets a list of &#x60;Employee&#x60; objects for a business.
   * @param {Object} opts Optional parameters
   * @param {String} opts.locationId Filter employees returned to only those that are associated with the specified location.
   * @param {module:model/String} opts.status Specifies the EmployeeStatus to filter the employee by.
   * @param {Number} opts.limit The number of employees to be returned on each page.
   * @param {String} opts.cursor The token required to retrieve the specified page of results.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListEmployeesResponse}
   */
  this.listEmployees = function(opts) {
    return this.listEmployeesWithHttpInfo(opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * RetrieveEmployee
   * Gets an &#x60;Employee&#x60; by Square-assigned employee &#x60;ID&#x60; (UUID)
   * @param {String} id UUID for the employee that was requested.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RetrieveEmployeeResponse} and HTTP response
   */
  this.retrieveEmployeeWithHttpInfo = function(id) {
    var postBody = null;

    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling retrieveEmployee");
    }


    var pathParams = {
      'id': id
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-06-12';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = RetrieveEmployeeResponse;

    return this.apiClient.callApi(
      '/v2/employees/{id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * RetrieveEmployee
   * Gets an &#x60;Employee&#x60; by Square-assigned employee &#x60;ID&#x60; (UUID)
   * @param {String} id UUID for the employee that was requested.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RetrieveEmployeeResponse}
   */
  this.retrieveEmployee = function(id) {
    return this.retrieveEmployeeWithHttpInfo(id)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
