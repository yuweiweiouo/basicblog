if (localStorage.getItem('user')) {
    $(".nickNameBar").text("暱稱：" + localStorage.getItem('user'));
    $("#nickName").val(localStorage.getItem('user'))
    $(".changeNameBtn").show();
    $("#nickName").hide();
    $("#txtbar").val("");
    $("#txtbar")[0].placeholder = "可以留言囉!";
}

$(".changeNameBtn").click(function() {
    $(this).hide();
    localStorage.removeItem('user');
    $(".nickNameBar").text("");
    $("#nickName").show();
    $("#txtbar")[0].placeholder = "先輸入暱稱在留言";
});

function waitForSend() {
    var msg = {
        user: $("#nickName").val(),
        txt: $("#txtbar").val()
    }
    changePattern(msg.txt);
    if (msg.user != "" && msg.txt != "") {
        sendMsg(msg);
        if (!localStorage.getItem('user')) {
            localStorage.setItem('user', msg.user);
            $(".changeNameBtn").show();
            $(".nickNameBar").text("暱稱：" + msg.user);
            $("#nickName").hide();
            $("#txtbar")[0].placeholder = "可以留言囉!";
        }
        $("#txtbar").val("");
    } else if (msg.user == "") {
        $("#txtbar").val("");
    }
}

function changePattern(txt) {
    switch (txt) {
        case 'snow':
            pattern = snow;
            break;
        case 'flower':
            pattern = flower;
            break;
        case 'love':
            pattern = love;
            break;
        case 'sun':
            pattern = sun;
            break;
        case 'note':
            pattern = note;
            break;
        case 'star':
            pattern = star;
            break;
    }
}

$("#txtbar").keypress(function(k) {
    if (k.keyCode == 13) {
        waitForSend();
    }
});

$("#txtbtn").click(function() {
    waitForSend();
});