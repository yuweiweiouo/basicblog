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

var articleRef = firebase.database().ref('article').once('value');

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
			<img src="${article.img}">
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
