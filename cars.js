$(document).ready(function()
{
  $("button").click(function()
  {
    setTimeout(function()
      {
        alert("START");
      }, 999);
  })
});

$("body").on("keydown", function(event){
  if(event.keyCode == 39){
    if($("#player1_strip td").eq(8).finish().hasClass("active")){
      alert("finish");
    }
    $("#player1_strip td.active").next().addClass("active");
    $("#player1_strip td.active").first().removeClass("active");
  };
});
