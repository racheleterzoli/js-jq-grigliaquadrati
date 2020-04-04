$(document).ready(function(){
  var redpoint=0;
  var greenpoint=0;
$(".square").click(function(){

if ($(this).hasClass("red")) {
 //se rosso uso le proprietà di jqury per gestire il backgroud rossso
 $(this).css("background-color", "red");
 redpoint++;
 $(".prosso").html("punteggio rosso: " + redpoint);
}else{
  $(this).addClass("green");
  greenpoint=greenpoint+1;
   $(".pverde").html("punteggio verde: " + greenpoint);
  //se verde aggingo la scallde "verde" all'elemnto cliccata definita a class

}

});



});
