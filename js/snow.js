 //❅✿❤
 var flower = "✿";
 var love = "❤";
 var snow = "❅";
 var pattern = "❅";
 snowing = function() {

     var d = `<div class='snow'>${pattern}<div>`;

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

 var interval = setInterval(snowing, 200);

 var onSnow = true;

 $("#snow").click(function() {
     if (onSnow == true) {
         clearInterval(interval);
         onSnow = false;
     } else {
         interval = setInterval(snowing, 200);
         onSnow = true;
     }

 });