let google = require('googleapis').google;
let _auth = require('./Authorizer');
const datastore = google.datastore('v1');

exports.handler = function (request, response) {

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
        });


    response.send({ "message": "Successfully executed" });
}