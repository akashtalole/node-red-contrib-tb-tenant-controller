'use strict';
var lib = require('./lib.js');

module.exports = function (RED) {
    function TbTenantControllerNode(config) {
        RED.nodes.createNode(this, config);
        this.method = config.method;
        this.saveTenantUsingPOST_body = config.saveTenantUsingPOST_body;
        this.saveTenantUsingPOST_bodyType = config.saveTenantUsingPOST_bodyType || 'str';
        this.getTenantInfoByIdUsingGET_tenantId = config.getTenantInfoByIdUsingGET_tenantId;
        this.getTenantInfoByIdUsingGET_tenantIdType = config.getTenantInfoByIdUsingGET_tenantIdType || 'str';
        this.getTenantByIdUsingGET_tenantId = config.getTenantByIdUsingGET_tenantId;
        this.getTenantByIdUsingGET_tenantIdType = config.getTenantByIdUsingGET_tenantIdType || 'str';
        this.deleteTenantUsingDELETE_tenantId = config.deleteTenantUsingDELETE_tenantId;
        this.deleteTenantUsingDELETE_tenantIdType = config.deleteTenantUsingDELETE_tenantIdType || 'str';
        this.getTenantInfosUsingGET_pageSize = config.getTenantInfosUsingGET_pageSize;
        this.getTenantInfosUsingGET_pageSizeType = config.getTenantInfosUsingGET_pageSizeType || 'str';
        this.getTenantInfosUsingGET_page = config.getTenantInfosUsingGET_page;
        this.getTenantInfosUsingGET_pageType = config.getTenantInfosUsingGET_pageType || 'str';
        this.getTenantInfosUsingGET_textSearch = config.getTenantInfosUsingGET_textSearch;
        this.getTenantInfosUsingGET_textSearchType = config.getTenantInfosUsingGET_textSearchType || 'str';
        this.getTenantInfosUsingGET_sortProperty = config.getTenantInfosUsingGET_sortProperty;
        this.getTenantInfosUsingGET_sortPropertyType = config.getTenantInfosUsingGET_sortPropertyType || 'str';
        this.getTenantInfosUsingGET_sortOrder = config.getTenantInfosUsingGET_sortOrder;
        this.getTenantInfosUsingGET_sortOrderType = config.getTenantInfosUsingGET_sortOrderType || 'str';
        this.getTenantsUsingGET_pageSize = config.getTenantsUsingGET_pageSize;
        this.getTenantsUsingGET_pageSizeType = config.getTenantsUsingGET_pageSizeType || 'str';
        this.getTenantsUsingGET_page = config.getTenantsUsingGET_page;
        this.getTenantsUsingGET_pageType = config.getTenantsUsingGET_pageType || 'str';
        this.getTenantsUsingGET_textSearch = config.getTenantsUsingGET_textSearch;
        this.getTenantsUsingGET_textSearchType = config.getTenantsUsingGET_textSearchType || 'str';
        this.getTenantsUsingGET_sortProperty = config.getTenantsUsingGET_sortProperty;
        this.getTenantsUsingGET_sortPropertyType = config.getTenantsUsingGET_sortPropertyType || 'str';
        this.getTenantsUsingGET_sortOrder = config.getTenantsUsingGET_sortOrder;
        this.getTenantsUsingGET_sortOrderType = config.getTenantsUsingGET_sortOrderType || 'str';
        var node = this;

        node.on('input', function (msg) {
            var errorFlag = false;
            var client = new lib.TbTenantController();
            if (!errorFlag) {
                client.body = msg.payload;
            }

            var result;
            if (!errorFlag && node.method === 'saveTenantUsingPOST') {
                var saveTenantUsingPOST_parameters = [];
                var saveTenantUsingPOST_nodeParam;
                var saveTenantUsingPOST_nodeParamType;

                if (typeof msg.payload === 'object') {
                    saveTenantUsingPOST_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                                result = client.saveTenantUsingPOST(saveTenantUsingPOST_parameters);
            }
            if (!errorFlag && node.method === 'getTenantInfoByIdUsingGET') {
                var getTenantInfoByIdUsingGET_parameters = [];
                var getTenantInfoByIdUsingGET_nodeParam;
                var getTenantInfoByIdUsingGET_nodeParamType;

                getTenantInfoByIdUsingGET_nodeParam = node.getTenantInfoByIdUsingGET_tenantId;
                getTenantInfoByIdUsingGET_nodeParamType = node.getTenantInfoByIdUsingGET_tenantIdType;
                if (getTenantInfoByIdUsingGET_nodeParamType === 'str') {
                    getTenantInfoByIdUsingGET_parameters.tenantId = getTenantInfoByIdUsingGET_nodeParam || '';
                } else {
                    getTenantInfoByIdUsingGET_parameters.tenantId = RED.util.getMessageProperty(msg, getTenantInfoByIdUsingGET_nodeParam);
                }
                getTenantInfoByIdUsingGET_parameters.tenantId = !!getTenantInfoByIdUsingGET_parameters.tenantId ? getTenantInfoByIdUsingGET_parameters.tenantId : msg.payload;
                                result = client.getTenantInfoByIdUsingGET(getTenantInfoByIdUsingGET_parameters);
            }
            if (!errorFlag && node.method === 'getTenantByIdUsingGET') {
                var getTenantByIdUsingGET_parameters = [];
                var getTenantByIdUsingGET_nodeParam;
                var getTenantByIdUsingGET_nodeParamType;

                getTenantByIdUsingGET_nodeParam = node.getTenantByIdUsingGET_tenantId;
                getTenantByIdUsingGET_nodeParamType = node.getTenantByIdUsingGET_tenantIdType;
                if (getTenantByIdUsingGET_nodeParamType === 'str') {
                    getTenantByIdUsingGET_parameters.tenantId = getTenantByIdUsingGET_nodeParam || '';
                } else {
                    getTenantByIdUsingGET_parameters.tenantId = RED.util.getMessageProperty(msg, getTenantByIdUsingGET_nodeParam);
                }
                getTenantByIdUsingGET_parameters.tenantId = !!getTenantByIdUsingGET_parameters.tenantId ? getTenantByIdUsingGET_parameters.tenantId : msg.payload;
                                result = client.getTenantByIdUsingGET(getTenantByIdUsingGET_parameters);
            }
            if (!errorFlag && node.method === 'deleteTenantUsingDELETE') {
                var deleteTenantUsingDELETE_parameters = [];
                var deleteTenantUsingDELETE_nodeParam;
                var deleteTenantUsingDELETE_nodeParamType;

                deleteTenantUsingDELETE_nodeParam = node.deleteTenantUsingDELETE_tenantId;
                deleteTenantUsingDELETE_nodeParamType = node.deleteTenantUsingDELETE_tenantIdType;
                if (deleteTenantUsingDELETE_nodeParamType === 'str') {
                    deleteTenantUsingDELETE_parameters.tenantId = deleteTenantUsingDELETE_nodeParam || '';
                } else {
                    deleteTenantUsingDELETE_parameters.tenantId = RED.util.getMessageProperty(msg, deleteTenantUsingDELETE_nodeParam);
                }
                deleteTenantUsingDELETE_parameters.tenantId = !!deleteTenantUsingDELETE_parameters.tenantId ? deleteTenantUsingDELETE_parameters.tenantId : msg.payload;
                                result = client.deleteTenantUsingDELETE(deleteTenantUsingDELETE_parameters);
            }
            if (!errorFlag && node.method === 'getTenantInfosUsingGET') {
                var getTenantInfosUsingGET_parameters = [];
                var getTenantInfosUsingGET_nodeParam;
                var getTenantInfosUsingGET_nodeParamType;

                getTenantInfosUsingGET_nodeParam = node.getTenantInfosUsingGET_pageSize;
                getTenantInfosUsingGET_nodeParamType = node.getTenantInfosUsingGET_pageSizeType;
                if (getTenantInfosUsingGET_nodeParamType === 'str') {
                    getTenantInfosUsingGET_parameters.pageSize = getTenantInfosUsingGET_nodeParam || '';
                } else {
                    getTenantInfosUsingGET_parameters.pageSize = RED.util.getMessageProperty(msg, getTenantInfosUsingGET_nodeParam);
                }
                getTenantInfosUsingGET_parameters.pageSize = !!getTenantInfosUsingGET_parameters.pageSize ? getTenantInfosUsingGET_parameters.pageSize : msg.payload;
                
                getTenantInfosUsingGET_nodeParam = node.getTenantInfosUsingGET_page;
                getTenantInfosUsingGET_nodeParamType = node.getTenantInfosUsingGET_pageType;
                if (getTenantInfosUsingGET_nodeParamType === 'str') {
                    getTenantInfosUsingGET_parameters.page = getTenantInfosUsingGET_nodeParam || '';
                } else {
                    getTenantInfosUsingGET_parameters.page = RED.util.getMessageProperty(msg, getTenantInfosUsingGET_nodeParam);
                }
                getTenantInfosUsingGET_parameters.page = !!getTenantInfosUsingGET_parameters.page ? getTenantInfosUsingGET_parameters.page : msg.payload;
                
                getTenantInfosUsingGET_nodeParam = node.getTenantInfosUsingGET_textSearch;
                getTenantInfosUsingGET_nodeParamType = node.getTenantInfosUsingGET_textSearchType;
                if (getTenantInfosUsingGET_nodeParamType === 'str') {
                    getTenantInfosUsingGET_parameters.textSearch = getTenantInfosUsingGET_nodeParam || '';
                } else {
                    getTenantInfosUsingGET_parameters.textSearch = RED.util.getMessageProperty(msg, getTenantInfosUsingGET_nodeParam);
                }
                getTenantInfosUsingGET_parameters.textSearch = !!getTenantInfosUsingGET_parameters.textSearch ? getTenantInfosUsingGET_parameters.textSearch : msg.payload;
                
                getTenantInfosUsingGET_nodeParam = node.getTenantInfosUsingGET_sortProperty;
                getTenantInfosUsingGET_nodeParamType = node.getTenantInfosUsingGET_sortPropertyType;
                if (getTenantInfosUsingGET_nodeParamType === 'str') {
                    getTenantInfosUsingGET_parameters.sortProperty = getTenantInfosUsingGET_nodeParam || '';
                } else {
                    getTenantInfosUsingGET_parameters.sortProperty = RED.util.getMessageProperty(msg, getTenantInfosUsingGET_nodeParam);
                }
                getTenantInfosUsingGET_parameters.sortProperty = !!getTenantInfosUsingGET_parameters.sortProperty ? getTenantInfosUsingGET_parameters.sortProperty : msg.payload;
                
                getTenantInfosUsingGET_nodeParam = node.getTenantInfosUsingGET_sortOrder;
                getTenantInfosUsingGET_nodeParamType = node.getTenantInfosUsingGET_sortOrderType;
                if (getTenantInfosUsingGET_nodeParamType === 'str') {
                    getTenantInfosUsingGET_parameters.sortOrder = getTenantInfosUsingGET_nodeParam || '';
                } else {
                    getTenantInfosUsingGET_parameters.sortOrder = RED.util.getMessageProperty(msg, getTenantInfosUsingGET_nodeParam);
                }
                getTenantInfosUsingGET_parameters.sortOrder = !!getTenantInfosUsingGET_parameters.sortOrder ? getTenantInfosUsingGET_parameters.sortOrder : msg.payload;
                                result = client.getTenantInfosUsingGET(getTenantInfosUsingGET_parameters);
            }
            if (!errorFlag && node.method === 'getTenantsUsingGET') {
                var getTenantsUsingGET_parameters = [];
                var getTenantsUsingGET_nodeParam;
                var getTenantsUsingGET_nodeParamType;

                getTenantsUsingGET_nodeParam = node.getTenantsUsingGET_pageSize;
                getTenantsUsingGET_nodeParamType = node.getTenantsUsingGET_pageSizeType;
                if (getTenantsUsingGET_nodeParamType === 'str') {
                    getTenantsUsingGET_parameters.pageSize = getTenantsUsingGET_nodeParam || '';
                } else {
                    getTenantsUsingGET_parameters.pageSize = RED.util.getMessageProperty(msg, getTenantsUsingGET_nodeParam);
                }
                getTenantsUsingGET_parameters.pageSize = !!getTenantsUsingGET_parameters.pageSize ? getTenantsUsingGET_parameters.pageSize : msg.payload;
                
                getTenantsUsingGET_nodeParam = node.getTenantsUsingGET_page;
                getTenantsUsingGET_nodeParamType = node.getTenantsUsingGET_pageType;
                if (getTenantsUsingGET_nodeParamType === 'str') {
                    getTenantsUsingGET_parameters.page = getTenantsUsingGET_nodeParam || '';
                } else {
                    getTenantsUsingGET_parameters.page = RED.util.getMessageProperty(msg, getTenantsUsingGET_nodeParam);
                }
                getTenantsUsingGET_parameters.page = !!getTenantsUsingGET_parameters.page ? getTenantsUsingGET_parameters.page : msg.payload;
                
                getTenantsUsingGET_nodeParam = node.getTenantsUsingGET_textSearch;
                getTenantsUsingGET_nodeParamType = node.getTenantsUsingGET_textSearchType;
                if (getTenantsUsingGET_nodeParamType === 'str') {
                    getTenantsUsingGET_parameters.textSearch = getTenantsUsingGET_nodeParam || '';
                } else {
                    getTenantsUsingGET_parameters.textSearch = RED.util.getMessageProperty(msg, getTenantsUsingGET_nodeParam);
                }
                getTenantsUsingGET_parameters.textSearch = !!getTenantsUsingGET_parameters.textSearch ? getTenantsUsingGET_parameters.textSearch : msg.payload;
                
                getTenantsUsingGET_nodeParam = node.getTenantsUsingGET_sortProperty;
                getTenantsUsingGET_nodeParamType = node.getTenantsUsingGET_sortPropertyType;
                if (getTenantsUsingGET_nodeParamType === 'str') {
                    getTenantsUsingGET_parameters.sortProperty = getTenantsUsingGET_nodeParam || '';
                } else {
                    getTenantsUsingGET_parameters.sortProperty = RED.util.getMessageProperty(msg, getTenantsUsingGET_nodeParam);
                }
                getTenantsUsingGET_parameters.sortProperty = !!getTenantsUsingGET_parameters.sortProperty ? getTenantsUsingGET_parameters.sortProperty : msg.payload;
                
                getTenantsUsingGET_nodeParam = node.getTenantsUsingGET_sortOrder;
                getTenantsUsingGET_nodeParamType = node.getTenantsUsingGET_sortOrderType;
                if (getTenantsUsingGET_nodeParamType === 'str') {
                    getTenantsUsingGET_parameters.sortOrder = getTenantsUsingGET_nodeParam || '';
                } else {
                    getTenantsUsingGET_parameters.sortOrder = RED.util.getMessageProperty(msg, getTenantsUsingGET_nodeParam);
                }
                getTenantsUsingGET_parameters.sortOrder = !!getTenantsUsingGET_parameters.sortOrder ? getTenantsUsingGET_parameters.sortOrder : msg.payload;
                                result = client.getTenantsUsingGET(getTenantsUsingGET_parameters);
            }
            if (!errorFlag && result === undefined) {
                node.error('Method is not specified.', msg);
                errorFlag = true;
            }
            var setData = function (msg, data) {
                if (data) {
                    if (data.response) {
                        if (data.response.statusCode) {
                            msg.statusCode = data.response.statusCode;
                        }
                        if (data.response.headers) {
                            msg.headers = data.response.headers;
                        }
                        if (data.response.request && data.response.request.uri && data.response.request.uri.href) {
                            msg.responseUrl = data.response.request.uri.href;
                        }
                    }
                    if (data.body) {
                        msg.payload = data.body;
                    }
                }
                return msg;
            };
            if (!errorFlag) {
                node.status({ fill: 'blue', shape: 'dot', text: 'TbTenantController.status.requesting' });
                result.then(function (data) {
                    node.send(setData(msg, data));
                    node.status({});
                }).catch(function (error) {
                    var message = null;
                    if (error && error.body && error.body.message) {
                        message = error.body.message;
                    }
                    node.error(message, setData(msg, error));
                    node.status({ fill: 'red', shape: 'ring', text: 'node-red:common.status.error' });
                });
            }
        });
    }

    RED.nodes.registerType('tb-tenant-controller', TbTenantControllerNode);
};
