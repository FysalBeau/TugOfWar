
$(document).ready(function() {
    // $.fn.randomMoveFunc = function(idTag, propertyName){
    //   var string = $(idTag).css(propertyName)
    //   var sub = string.substring(0,string.length-2); 
    //   let x = Math.floor((Math.random() * 100) + 1);
    //   return sub;
    // }

    $("#btn1").click(function() {
        var string = $("#ropeKnot").css("top")
        var sub = string.substring(0, string.length-2);
      $('#ropeKnot').css(
        "top", ((parseInt(sub) - 10) +"px")
      );
    });
    $("#btn2").click(function() {
        var string = $("#ropeKnot").css("top")
        var sub = string.substring(0, string.length-2);
      $('#ropeKnot').css(
        "top", ((parseInt(sub) + 10) +"px")
      );
      // $("#btn2").css(randomMoveFunc("top"))
    });
  });