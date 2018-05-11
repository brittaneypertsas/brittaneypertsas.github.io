$(document).ready(function(){

  $("#showstuff").hover(function(){
    $("ul").show();
});

$("#hidestuff").hover(function(){
  $("ul").hide();
});

$("button").click(function(){

 $("#fadein1").fadeIn(1000);

 $("#fadein2").fadeIn(2000);

 $("#fadein3").fadeIn(3000);

 $("fadein4").fadeIn(4000);
});


});
