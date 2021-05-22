const functions = require("firebase-functions");
const routes = require("./routes/index");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.api = functions.https.onRequest(routes);
