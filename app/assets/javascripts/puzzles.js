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

      if(clickedBlocks === 3) {
        $("#puzzle-1").hide();
        $("#puzzle-2").show();
      }

    });

  // Puzzle 2

    $("#puzzle-2 .block").click(function() {
      var clickedBlockId = $(this).attr("id");

      $("#puzzle-2 .block").each(function() {
        if($(this).attr("id") !== clickedBlockId) {
          $(this).toggleClass("clicked");
        }
      });

      var clickedBlocks = 0;

      $("#puzzle-2 .block").each(function() {
        if($(this).hasClass("clicked")) {
          clickedBlocks = clickedBlocks + 1;
        }
      });

      if(clickedBlocks === 4) {
        alert("You win!");
      }

    });

});
