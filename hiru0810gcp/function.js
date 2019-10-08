let google = require('googleapis').google;
let _auth = require('./Authorizer');
const datastore = google.datastore('v1');

exports.handler = function (request, response) {

    datastore.projects.runQuery({
        projectId: process.env.GCP_PROJECT,
        resource: {
            gqlQuery: {
                queryString: undefined,
                allowLiterals: true,
                namedBindings: {

                },
                positionalBindings: [

                ]
            }
        }
    }).then(response => {
        console.log(response.data);           // successful response
        /*
        response.data = {
            "batch": {
                "entityResultType": "FULL",
                "endCursor": "<base64-encoded>",
                "entityResults": [
                    {
                        "entity": {
                            "key": {
                                "partitionId": {
                                    "projectId": "<project>"
                                },
                                "path": [{
                                        "kind": "<kind>",
                                        "name": "<name>"
                                    }
                                ]
                            },
                            "properties": {
                                "<key-1>": {
                                    "<type-1>": "<value-1>"
                                },
                                ...
                            }
                        },
                        "cursor": "<cursor>",
                        "version": "<version-timestamp>"
                    },
                    ...
                ]
            },
            "query": {
                "kind": <kind-spec>,
                "filter": {
                    "propertyFilter": <property-spec; property, op and value>
                }
            }
        }
        */
    })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });

    response.send({ "message": "Successfully executed" });
}