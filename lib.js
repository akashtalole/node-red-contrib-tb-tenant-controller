/*jshint -W069 */
/**
 *  ThingsBoard open-source IoT platform REST API documentation.
 * @class TbTenantController
 * @param {(string|object)} [domainOrOptions] - The project domain or options object. If object, see the object's optional properties.
 * @param {string} [domainOrOptions.domain] - The project domain
 * @param {object} [domainOrOptions.token] - auth token - object with value property and optional headerOrQueryName and isQuery properties
 */
var TbTenantController = (function(){
    'use strict';

    var request = require('request');
    var Q = require('q');
    var fileType = require('file-type');

    function TbTenantController(options){
        var domain = (typeof options === 'object') ? options.domain : options;
        this.domain = domain ? domain : 'https://demo.thingsboard.io:443';
        if(this.domain.length === 0) {
            throw new Error('Domain parameter must be specified as a string.');
        }
    }

    function mergeQueryParams(parameters, queryParameters) {
        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                  .forEach(function(parameterName) {
                      var parameter = parameters.$queryParameters[parameterName];
                      queryParameters[parameterName] = parameter;
            });
        }
        return queryParameters;
    }

    /**
     * HTTP Request
     * @method
     * @name TbTenantController#request
     * @param {string} method - http method
     * @param {string} url - url to do request
     * @param {object} parameters
     * @param {object} body - body parameters / object
     * @param {object} headers - header parameters
     * @param {object} queryParameters - querystring parameters
     * @param {object} form - form data object
     * @param {object} deferred - promise object
     */
    TbTenantController.prototype.request = function(method, url, parameters, body, headers, queryParameters, form, deferred){
        var req = {
            method: method,
            uri: url,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if(Object.keys(form).length > 0) {
            if (req.headers['Content-Type'] && req.headers['Content-Type'][0] === 'multipart/form-data') {
                delete req.body;
                var keyName = Object.keys(form)[0]
                req.formData = {
                    [keyName]: {
                        value: form[keyName],
                        options: {
                            filename: (fileType(form[keyName]) != null ? `file.${ fileType(form[keyName]).ext }` : `file` )
                        }
                    }
                };
            } else {
                req.form = form;
            }
        }
        if(typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body){
            if(error) {
                deferred.reject(error);
            } else {
                if(/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch(e) {}
                }
                if(response.statusCode === 204) {
                    deferred.resolve({ response: response });
                } else if(response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({ response: response, body: body });
                } else {
                    deferred.reject({ response: response, body: body });
                }
            }
        });
    };


/**
 * Create or update the Tenant. When creating tenant, platform generates Tenant Id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). Default Rule Chain and Device profile are also generated for the new tenants automatically. The newly created Tenant Id will be present in the response. Specify existing Tenant Id id to update the Tenant. Referencing non-existing Tenant Id will cause 'Not Found' error.

Available for users with 'SYS_ADMIN' authority.
 * @method
 * @name TbTenantController#saveTenantUsingPOST
 * @param {object} parameters - method options and parameters
     * @param {} parameters.body -  ThingsBoard open-source IoT platform REST API documentation.
 */
 TbTenantController.prototype.saveTenantUsingPOST = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/tenant';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
        
        
            if(parameters['body'] !== undefined){
                body = parameters['body'];
            }


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Fetch the Tenant Info object based on the provided Tenant Id. The Tenant Info object extends regular Tenant object and includes Tenant Profile name. 

Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
 * @method
 * @name TbTenantController#getTenantInfoByIdUsingGET
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.tenantId - A string value representing the tenant id. For example, '784f394c-42b6-435a-983c-b7beff2784f9'
 */
 TbTenantController.prototype.getTenantInfoByIdUsingGET = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/tenant/info/{tenantId}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];

        
            path = path.replace('{tenantId}', parameters['tenantId']);
        
        


        if(parameters['tenantId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: tenantId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Fetch the Tenant object based on the provided Tenant Id. 

Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.
 * @method
 * @name TbTenantController#getTenantByIdUsingGET
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.tenantId - A string value representing the tenant id. For example, '784f394c-42b6-435a-983c-b7beff2784f9'
 */
 TbTenantController.prototype.getTenantByIdUsingGET = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/tenant/{tenantId}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];

        
            path = path.replace('{tenantId}', parameters['tenantId']);
        
        


        if(parameters['tenantId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: tenantId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Deletes the tenant, it's customers, rule chains, devices and all other related entities. Referencing non-existing tenant Id will cause an error.

Available for users with 'SYS_ADMIN' authority.
 * @method
 * @name TbTenantController#deleteTenantUsingDELETE
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.tenantId - A string value representing the tenant id. For example, '784f394c-42b6-435a-983c-b7beff2784f9'
 */
 TbTenantController.prototype.deleteTenantUsingDELETE = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/tenant/{tenantId}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];

        
            path = path.replace('{tenantId}', parameters['tenantId']);
        
        


        if(parameters['tenantId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: tenantId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a page of tenant info objects registered in the platform. The Tenant Info object extends regular Tenant object and includes Tenant Profile name. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. 

Available for users with 'SYS_ADMIN' authority.
 * @method
 * @name TbTenantController#getTenantInfosUsingGET
 * @param {object} parameters - method options and parameters
     * @param {integer} parameters.pageSize - Maximum amount of entities in a one page
     * @param {integer} parameters.page - Sequence number of page starting from 0
     * @param {string} parameters.textSearch - The case insensitive 'substring' filter based on the tenant name.
     * @param {string} parameters.sortProperty - Property of entity to sort by
     * @param {string} parameters.sortOrder - Sort order. ASC (ASCENDING) or DESC (DESCENDING)
 */
 TbTenantController.prototype.getTenantInfosUsingGET = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/tenantInfos{?page,pageSize,sortOrder,sortProperty,textSearch}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];


                if(parameters['pageSize'] !== undefined){
                    queryParameters['pageSize'] = parameters['pageSize'];
                }
        
        
        


        if(parameters['pageSize'] === undefined){
            deferred.reject(new Error('Missing required  parameter: pageSize'));
            return deferred.promise;
        }
 

                if(parameters['page'] !== undefined){
                    queryParameters['page'] = parameters['page'];
                }
        
        
        


        if(parameters['page'] === undefined){
            deferred.reject(new Error('Missing required  parameter: page'));
            return deferred.promise;
        }
 

                if(parameters['textSearch'] !== undefined){
                    queryParameters['textSearch'] = parameters['textSearch'];
                }
        
        
        


 

                if(parameters['sortProperty'] !== undefined){
                    queryParameters['sortProperty'] = parameters['sortProperty'];
                }
        
        
        


 

                if(parameters['sortOrder'] !== undefined){
                    queryParameters['sortOrder'] = parameters['sortOrder'];
                }
        
        
        


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a page of tenants registered in the platform. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. 

Available for users with 'SYS_ADMIN' authority.
 * @method
 * @name TbTenantController#getTenantsUsingGET
 * @param {object} parameters - method options and parameters
     * @param {integer} parameters.pageSize - Maximum amount of entities in a one page
     * @param {integer} parameters.page - Sequence number of page starting from 0
     * @param {string} parameters.textSearch - The case insensitive 'substring' filter based on the tenant name.
     * @param {string} parameters.sortProperty - Property of entity to sort by
     * @param {string} parameters.sortOrder - Sort order. ASC (ASCENDING) or DESC (DESCENDING)
 */
 TbTenantController.prototype.getTenantsUsingGET = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/tenants{?page,pageSize,sortOrder,sortProperty,textSearch}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];


                if(parameters['pageSize'] !== undefined){
                    queryParameters['pageSize'] = parameters['pageSize'];
                }
        
        
        


        if(parameters['pageSize'] === undefined){
            deferred.reject(new Error('Missing required  parameter: pageSize'));
            return deferred.promise;
        }
 

                if(parameters['page'] !== undefined){
                    queryParameters['page'] = parameters['page'];
                }
        
        
        


        if(parameters['page'] === undefined){
            deferred.reject(new Error('Missing required  parameter: page'));
            return deferred.promise;
        }
 

                if(parameters['textSearch'] !== undefined){
                    queryParameters['textSearch'] = parameters['textSearch'];
                }
        
        
        


 

                if(parameters['sortProperty'] !== undefined){
                    queryParameters['sortProperty'] = parameters['sortProperty'];
                }
        
        
        


 

                if(parameters['sortOrder'] !== undefined){
                    queryParameters['sortOrder'] = parameters['sortOrder'];
                }
        
        
        


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };

    return TbTenantController;
})();

exports.TbTenantController = TbTenantController;
