// Initialize Firebase
var config = {
    apiKey: "AIzaSyDIvGlbeFCi3Jo3I9-uNv5qqjHu-qONd3w",
    authDomain: "my-project-1492012958680.firebaseapp.com",
    databaseURL: "https://my-project-1492012958680.firebaseio.com",
    projectId: "my-project-1492012958680",
    storageBucket: "",
    messagingSenderId: "377007134663"
};
firebase.initializeApp(config);

var database = firebase.database();

var dbRef = firebase.database().ref('test/');

console.log("ok");