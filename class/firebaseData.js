var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyCPixKmOkVpyG4joX1vxEELqSC95Y7j_pM",
    authDomain: "table-f4a19.firebaseapp.com",
    databaseURL: "https://table-f4a19.firebaseio.com",
    projectId: "table-f4a19",
    storageBucket: "table-f4a19.appspot.com",
    messagingSenderId: "204648096010"
  };
var firebaseData = firebase.initializeApp(config);

module.exports = firebaseData;