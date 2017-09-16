 //❅✿❤
 console.log("在聊天室留言以下單字可開啟彩蛋");
 console.log("snow\nflower\nlove\nnote\nsun\nstar")

 var snow = "❅";
 var flower = "✿";
 var love = "❤";
 var sun = "☀";
 var note = "♪";
 var star = "★";
 var pattern = "❅";
 var color = "white";
 snowing = function() {
     switch (pattern) {
         case '❅':
             color = "white";
             break;
         case '✿':
             color = "pink";
             break;
         case '❤':
             color = "red";
             break;
         case '☀':
             color = "gold";
             break;
         case '★':
             color = "yellow";
             break;
         case '♪':
         case '♫':
         case '♯':         
             color = "mediumpurple";
             var randonNum = Math.floor(Math.random() * (3));
             if(randonNum == 0)pattern = '♪';
             if(randonNum == 1)pattern = '♫';
             if(randonNum == 2)pattern = '♯';
             break;
     }

     var d = `<div class='snow' style="color:${color};">${pattern}<div>`;

     var f = $(document).width();

     var e = Math.random() * f - 100;

     var o = 0.3 + Math.random();

     var fon = 10 + Math.random() * 30;

     var l = e - 100 + 200 * Math.random();

     var k = 2000 + 5000 * Math.random();

     $(d).clone().appendTo(".body").css({

         left: e + "px",

         opacity: o,

         "font-size": fon,

     }).animate({

         top: "400px",

         left: l + "px",

         opacity: 0.1,

     }, k, "linear", function() { $(this).remove() })

 };


 var onSnow = false;

 $("#snow").click(function() {
     if (onSnow == true) {
         clearInterval(interval);
         onSnow = false;
     } else {
         interval = setInterval(snowing, 200);
         onSnow = true;
     }

 });