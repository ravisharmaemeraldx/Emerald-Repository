cube(`OrderHistoriesHeader`, {
  sql: `SELECT * FROM gold.order_histories_header`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [accountName, locationName, repName, clientFieldsIvendixOrderId, orderDate]
    }
  },
  
  dimensions: {
    erpOrderNumber: {
      sql: `erp_order_number`,
      type: `string`,
      primaryKey: true
    },
    
    elasticOrderNumber: {
      sql: `elastic_order_number`,
      type: `string`
    },
    
    accountName: {
      sql: `account_name`,
      type: `string`
    },
    
    accountNumber: {
      sql: `account_number`,
      type: `string`
    },
    
    locationName: {
      sql: `location_name`,
      type: `string`
    },
    
    locationNumber: {
      sql: `location_number`,
      type: `string`
    },
    
    orderType: {
      sql: `order_type`,
      type: `string`
    },
    
    po: {
      sql: `po`,
      type: `string`
    },
    
    repName: {
      sql: `rep_name`,
      type: `string`
    },
    
    clientFieldsCatalog: {
      sql: `client_fields_catalog`,
      type: `string`
    },
    
    clientFieldsClientOrderStatus: {
      sql: `client_fields_client_order_status`,
      type: `string`
    },
    
    clientFieldsCompany: {
      sql: `client_fields_company`,
      type: `string`
    },
    
    clientFieldsDivision: {
      sql: `client_fields_division`,
      type: `string`
    },
    
    clientFieldsIvendixOrderId: {
      sql: `client_fields_ivendix_order_id`,
      type: `string`
    },
    
    clientFieldsOrderNotes: {
      sql: `client_fields_order_notes`,
      type: `string`
    },
    
    hive: {
      sql: `hive`,
      type: `string`
    },
    
    hiveRegion: {
      sql: `hive_region`,
      type: `string`
    },
    
    supplierCode: {
      sql: `${CUBE}.\`Supplier_code\``,
      type: `string`
    },
    
    orderDate: {
      sql: `order_date`,
      type: `time`
    }
  }
});
