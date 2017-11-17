const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


// The Firebase Admin SDK to access the Firebase Realtime Database. 
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.categoryKeys = functions.database.ref('/categories/{pushId}')
    .onCreate(event => {
      const keyId = event.params.pushId;
      return admin.database().ref("/categories-keys").child(keyId).set(true); 
    });

exports.categoryRemove = functions.database.ref('/categories/{pushId}')
    .onDelete(event => {
      const keyId = event.params.pushId;
      return admin.database().ref("/categories-keys").child(keyId).remove(); 
    });    