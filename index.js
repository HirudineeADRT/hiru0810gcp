// This file is used to register all your cloud functions in GCP.
// DO NOT EDIT/DELETE THIS, UNLESS YOU KNOW WHAT YOU ARE DOING.

exports.hiru0810gcpfunction = require("./hiru0810gcp/function.js").handler;
exports.hiru0810gcpdatastore = require("./hiru0810gcp/datastore.js").handler;