$(document).ready(function(){

  $("#begin-btn").click(function(){
    $("#begin-btn").fadeOut(function() {
      $("#puzzle-1").fadeIn();
    });
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
        $("#puzzle-1").fadeOut(function() {
          $("#puzzle-2").fadeIn();
        });
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
        $("#puzzle-2").fadeOut(function() {
          $("#puzzle-3").fadeIn();
        });
      }

    });

  // Puzzle 3

    $("#puzzle-3 .block").click(function() {
      var clickedBlockId = $(this).attr("id");

      $("#puzzle-3 .block").each(function() {
        if($(this).attr("id") !== clickedBlockId) {
          $(this).toggleClass("clicked");
        }
      });

      var clickedBlocks = 0;

      $("#puzzle-3 .block").each(function() {
        if($(this).hasClass("clicked")) {
          clickedBlocks = clickedBlocks + 1;
        }
      });

      if(clickedBlocks === 8) {
        $("#win").show();
        $("#puzzle-3").fadeOut(function() {
          $("#win-1").fadeIn("slow", function(){
            $("#win-2").fadeIn("slow");
          });
        });
      }

    });

});
