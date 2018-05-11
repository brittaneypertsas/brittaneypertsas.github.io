$(document).ready(function(){
    $("button").click(function(){

        $("#box2").fadeIn("3000");
        $("#box3").fadeIn("5000");

    });
    $("button").click(function(){

        $("#box2").fadeOut("3000");
        $("#box3").fadeOut("5000");

});

    $("#showstuff").hover(function(){
      $("ul").show();
  });

  $("#hidestuff").hover(function(){
    $("ul").hide();
});

$("#togglebox").toggle(8000);

$("#target").on("click", function() {
  alert("Enjoy your food!");
});

$("#replacetext").hover(function(){
$("#replace").html("<p>Enjoy! Come back soon for more recipes!</p>");
});

$(".background").hover(function(){
    $(".background").css("background-color", "pink");
    $(".background").css("color", "white");
});

});
