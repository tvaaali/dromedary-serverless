var AWS  = require('aws-sdk');
var lambdaExpress = require('lambda-express');

exports.handler = function( event, context ) {
    process.env.DROMEDARY_DDB_TABLE_NAME = event.ddbTableName;
    console.log("DROMEDARY_DDB_TABLE_NAME = "+event.ddbTableName);

    process.env.AWS_DEFAULT_REGION = AWS.config.region;
    console.log("AWS ENV = "+AWS.config.region);

    var app = require('dromedary');
    lambdaExpress.toApp(event,context,app);
};


