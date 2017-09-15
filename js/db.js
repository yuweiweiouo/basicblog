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

firebase.auth().createUserWithEmailAndPassword(account.value, pwd.value).then(function() {
    //登入成功後，取得登入使用者資訊

    loginUser = firebase.auth().currentUser;
    console.log("登入使用者為", loginUser);
    firebase.database().ref('users/' + loginUser.uid).set({
        email: loginUser.email,
        name: name.value,
        age: age.value
    }).catch(function(error) {
        console.error("寫入使用者資訊錯誤", error);
    });
})