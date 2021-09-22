$(document).ready(function(){
    $("button").click(function(){
      alert("Image width: " + $("img").attr("width"));
    });


    $( "p" ).addClass( "myClass yourClass" );
    $("p").attr("role", "presentation")


    $(":header:empty").attr("role", "presentation")


  });