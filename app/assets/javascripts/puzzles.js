$(document).ready(function(){

  $("#begin-btn").click(function(){
    $("#begin-btn").hide();
    $("#puzzle-1").show();
  });

  // Puzzle 1

    $("#puzzle-1 .block").click(function() {
      $(this).addClass("clicked");

      var clickedBlocks = 0;

      $("#puzzle-1 .block").each(function() {
        if($(this).hasClass("clicked")) {
          clickedBlocks = clickedBlocks + 1;
        }
      });

      if(clickedBlocks == 3) {
        alert("You win!");
      }

    });

});
