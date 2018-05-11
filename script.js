$(document).ready(function(){

  $("#showstuff").hover(function(){
    $("ul").show();
});

$("#hidestuff").hover(function(){
  $("ul").hide();
});

$("button").click(function(){

    $("#pic").fadeIn("10000");

      });
      $("button").click(function(){

      $("#pic").fadeOut("10000");

  });

$(".togglebox").toggle(8000);

$("#target").on("click", function() {
  alert("Thanks for visiting! Hope to see you again in the French Horn world :)");
});


});
