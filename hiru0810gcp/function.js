let google = require('googleapis').google;
let _auth = require('./Authorizer');
const datastore = google.datastore('v1');

exports.handler = function (request, response) {


    

    datastore.projects.commit({
        projectId: process.env.GCP_PROJECT,
        resource: {
            mode: "TRANSACTIONAL",
            mutations: [
                {
                    insert: {
                        key: {
                            path: {
                                kind: "tee",
                                name: "12"
                            }
                        }
                    }
                }
            ],
            transaction: "sample"
        }
    }).then(response => {
        console.log(response.data);           // successful response
        /*
        response.data = {
            "mutationResults": [
                {
                    "version": "<version-timestamp-or-id>"
                }
            ],
            "indexUpdates": 8,
            "commitVersion": "<commit-timestamp>"
        }
        */
    })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });


    datastore.projects.beginTransaction({
        projectId: process.env.GCP_PROJECT,
        resource: {
            transactionOptions: {
                readWrite: {}
            }
        }
    }).then(response => {
        datastore.projects.commit({
            projectId: process.env.GCP_PROJECT,
            resource: {
                mode: "TRANSACTIONAL",
                mutations: [{
                    update: {
                        key: {
                            path: {
                                kind: "dd",
                                name: "ddk"
                            }
                        },
                        properties: {
                            ddfgg: {
                                stringValue: "ddd"
                            }
                        }
                    }
                }],
                transaction: response.data.transaction
            }
        }).then(response => {
            console.log(response.data);           // successful response
            /*
            response.data = {
                "mutationResults": [
                    {
                        "version": "<version-timestamp-or-id>"
                    }
                ],
                "indexUpdates": 8,
                "commitVersion": "<commit-timestamp>"
            }
            */
        })
            .catch(err => {
                console.log(err, err.stack); // an error occurred
            });
    })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });

    datastore.projects.beginTransaction({
        projectId: process.env.GCP_PROJECT,
        resource: {
            transactionOptions: {
                readWrite: {}
            }
        }
    }).then(response => {
        datastore.projects.commit({
            projectId: process.env.GCP_PROJECT,
            resource: {
                mode: "TRANSACTIONAL",
                mutations: [],
                transaction: response.data.transaction
            }
        }).then(response => {
            console.log(response.data);           // successful response
            /*
            response.data = {
                "mutationResults": [
                    {
                        "version": "<version-timestamp-or-id>"
                    }
                ],
                "indexUpdates": 8,
                "commitVersion": "<commit-timestamp>"
            }
            */
        })
            .catch(err => {
                console.log(err, err.stack); // an error occurred
            });
    })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });


    datastore.projects.beginTransaction({
        projectId: process.env.GCP_PROJECT,
        resource: {
            transactionOptions: {
                readWrite: {}
            }
        }
    }).then(response => {
        console.log(response.data);           // successful response
        /*
        response.data = {
            "transaction": "<transaction ID>"
        }
        */
    })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });




    datastore.projects.beginTransaction({
        projectId: process.env.GCP_PROJECT,
        resource: {
            transactionOptions: {
                readWrite: {}
            }
        }
    }).then(response => {
        datastore.projects.commit({
            projectId: process.env.GCP_PROJECT,
            resource: {
                mode: "TRANSACTIONAL",
                mutations: [
                    {
                        insert: {
                            key: {
                                path: {
                                    kind: "ID",
                                    name: "identity"
                                }
                            }
                        }
                    }
                ],
                transaction: response.data.transaction
            }
        }).then(response => {
            console.log(response.data);           // successful response
            /*
            response.data = {
                "mutationResults": [
                    {
                        "version": "<version-timestamp-or-id>"
                    }
                ],
                "indexUpdates": 8,
                "commitVersion": "<commit-timestamp>"
            }
            */
        })
            .catch(err => {
                console.log(err, err.stack); // an error occurred
            });
    })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
            datastore.projects.rollback({
                projectId: process.env.GCP_PROJECT,
                resource: {
                    transaction: undefined
                }
            }).then(response => {
                console.log(response.data);           // successful response
                /*
                response.data = {}
                */
            })
                .catch(err => {
                    console.log(err, err.stack); // an error occurred
                });
        });






    datastore.projects.runQuery({
        projectId: process.env.GCP_PROJECT,
        resource: {
            gqlQuery: {
                queryString: undefined,
                allowLiterals: true,
                namedBindings: {
                    test: {
                        value: {
                            stringValue: "123"
                        }
                    }
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