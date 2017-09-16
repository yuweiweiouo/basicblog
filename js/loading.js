var today = new Date();
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

var articleRef = firebase.database().ref('article').once('value');

var chatRef = firebase.database().ref('chat/' + (today.getMonth() + 1) + '月/' + today.getDate() + '日');

function snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(child) {
        var item = child.val();
        returnArr.push(item);
    });
    return returnArr;
}

function loadArticle() {
    articleRef.then(function(snapshot) {
        var articles = snapshotToArray(snapshot);
        var artArr = [];
        articles.forEach(function(article) {
            if (!article.img) article.img = "./img/noPhoto.jpg";
            var oneOfArticle = `
            <div class="article">
            <div class="article-title">
            <div class="article-title-icon">
            <img src="./img/title.png">
            </div>
            <div class="article-title-txt">
            ${article.title}
            </div>
            </div>
            <div class="article-content">
            <img src="${article.img}" onerror="this.src='./img/noPhoto.jpg'" >
            <div class="article-content-txt">
            ${article.content}
            </div>
            </div>
            <div class="article-bottom">
            <div class="article-bottom-l">
            <img src="./img/calendar.png"> 
            ${article.date}
            </div>
            <div class="article-bottom-r">
            <img src="./img/more.png">
            </div>
            </div>
            </div>
            `;
            artArr.push(oneOfArticle);
        });
        artArr.forEach(function(a) {
            $(".-home").append(a);
        });
    });
}

loadArticle();

function sendMsg(msgPackage) {
    chatRef.push({
        user: msgPackage.user,
        content: msgPackage.txt,
        time: today.getHours() + ":" + today.getMinutes()
    }, function(err) {
        if (err) {
            $("#txtbox").append("----留言失敗,請重新整理頁面----\n");
        }
    });
};

chatRef.limitToLast(100).on('value', function(snapshot) {
    var msgArr = snapshotToArray(snapshot);
    $("#txtbox").text("");
    msgArr.forEach(function(m) {
        $("#txtbox").append(m.user + "：" + m.content + "\n");
    });
    $("#txtbox").scrollTop($('#txtbox')[0].scrollHeight);
});

var provider = new firebase.auth.FacebookAuthProvider();
firebase.auth().languageCode = 'fr_FR';

firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
}).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorMessage);
});