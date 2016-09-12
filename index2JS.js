$(document).ready(function() {

$(".glyphicon").fadeOut(2000,function(){

    $(".glyphicon-eye-open").delay(1000).fadeIn(3000);
    $(".glyphicon-fire").delay(4000).fadeIn(3000);
    $(".glyphicon-folder-open").delay(6000).fadeIn(3000);
    $(".glyphicon-check").delay(8000).fadeIn(3000, function(){

        $(".glyphicon-eye-open").css("color","cadetblue").fadeIn(3000);
        $(".glyphicon-fire").css("color","maroon").fadeIn(3000);
        $(".glyphicon-folder-open").css("color","indigo").fadeIn(3000);
        $(".glyphicon-check").css("color","darkgreen").fadeIn(3000);
        });

    });
      
});











