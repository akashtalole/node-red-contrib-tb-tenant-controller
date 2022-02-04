var should = require('should');
var helper = require('node-red-node-test-helper');
var node = require('../node.js');

helper.init(require.resolve('node-red'));

describe('tb-tenant-controller node', function () {

    before(function (done) {
        helper.startServer(done);
    });

    after(function (done) {
        helper.stopServer(done);
    });

    afterEach(function () {
        helper.unload();
    });

    it('should be loaded', function (done) {
        var flow = [{ id: 'n1', type: 'tb-tenant-controller', name: 'tb-tenant-controller' }];
        helper.load(node, flow, function () {
            var n1 = helper.getNode('n1');
            n1.should.have.property('name', 'tb-tenant-controller');
            done();
        });
    });

    it('should handle saveTenantUsingPOST()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-tenant-controller', name: 'tb-tenant-controller',
                method: 'saveTenantUsingPOST',
                saveTenantUsingPOST_body: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getTenantInfoByIdUsingGET()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-tenant-controller', name: 'tb-tenant-controller',
                method: 'getTenantInfoByIdUsingGET',
                getTenantInfoByIdUsingGET_tenantId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getTenantByIdUsingGET()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-tenant-controller', name: 'tb-tenant-controller',
                method: 'getTenantByIdUsingGET',
                getTenantByIdUsingGET_tenantId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteTenantUsingDELETE()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-tenant-controller', name: 'tb-tenant-controller',
                method: 'deleteTenantUsingDELETE',
                deleteTenantUsingDELETE_tenantId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getTenantInfosUsingGET()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-tenant-controller', name: 'tb-tenant-controller',
                method: 'getTenantInfosUsingGET',
                getTenantInfosUsingGET_pageSize: '<node property>', // (1) define node properties
                getTenantInfosUsingGET_page: '<node property>', // (1) define node properties
                getTenantInfosUsingGET_textSearch: '<node property>', // (1) define node properties
                getTenantInfosUsingGET_sortProperty: '<node property>', // (1) define node properties
                getTenantInfosUsingGET_sortOrder: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getTenantsUsingGET()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-tenant-controller', name: 'tb-tenant-controller',
                method: 'getTenantsUsingGET',
                getTenantsUsingGET_pageSize: '<node property>', // (1) define node properties
                getTenantsUsingGET_page: '<node property>', // (1) define node properties
                getTenantsUsingGET_textSearch: '<node property>', // (1) define node properties
                getTenantsUsingGET_sortProperty: '<node property>', // (1) define node properties
                getTenantsUsingGET_sortOrder: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
});
