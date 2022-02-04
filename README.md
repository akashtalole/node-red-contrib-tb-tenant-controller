node-red-contrib-tb-tenant-controller
================

Node-RED node for tb-tenant-controller

 ThingsBoard open-source IoT platform REST API documentation.

## Install

To install the stable version use the `Menu - Manage palette - Install` 
option and search for node-red-contrib-tb-tenant-controller, or run the following 
command in your Node-RED user directory, typically `~/.node-red`

    npm install node-red-contrib-tb-tenant-controller

## Usage

### Methods

#### POST /api/tenant

Create or update the Tenant. When creating tenant, platform generates Tenant Id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). Default Rule Chain and Device profile are also generated for the new tenants automatically. The newly created Tenant Id will be present in the response. Specify existing Tenant Id id to update the Tenant. Referencing non-existing Tenant Id will cause 'Not Found' error.

Available for users with 'SYS_ADMIN' authority.

    body : 
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /api/tenant/info/{tenantId}

Fetch the Tenant Info object based on the provided Tenant Id. The Tenant Info object extends regular Tenant object and includes Tenant Profile name. 

Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.

    tenantId : string
     
    Accept : 'application/json'

#### GET /api/tenant/{tenantId}

Fetch the Tenant object based on the provided Tenant Id. 

Available for users with 'SYS_ADMIN' or 'TENANT_ADMIN' authority.

    tenantId : string
     
    Accept : 'application/json'

#### DELETE /api/tenant/{tenantId}

Deletes the tenant, it's customers, rule chains, devices and all other related entities. Referencing non-existing tenant Id will cause an error.

Available for users with 'SYS_ADMIN' authority.

    tenantId : string
     
    Accept : 'application/json'

#### GET /api/tenantInfos{?page,pageSize,sortOrder,sortProperty,textSearch}

Returns a page of tenant info objects registered in the platform. The Tenant Info object extends regular Tenant object and includes Tenant Profile name. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. 

Available for users with 'SYS_ADMIN' authority.

    pageSize : integer
    page : integer
    textSearch : string
    sortProperty : string
    sortOrder : string
     
    Accept : 'application/json'

#### GET /api/tenants{?page,pageSize,sortOrder,sortProperty,textSearch}

Returns a page of tenants registered in the platform. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. 

Available for users with 'SYS_ADMIN' authority.

    pageSize : integer
    page : integer
    textSearch : string
    sortProperty : string
    sortOrder : string
     
    Accept : 'application/json'


## License

#### Apache License Version 2.0

https://github.com/thingsboard/thingsboard/blob/master/LICENSE