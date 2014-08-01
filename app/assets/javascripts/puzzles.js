$(document).ready(function(){

  function solvedLevel(puzzleId, numberOfBlocks) {

    var clickedBlocks = 0;

    $("#puzzle-" + puzzleId.toString() + " .block").each(function() {
      if($(this).hasClass("clicked")) {
        clickedBlocks = clickedBlocks + 1;
      }
    });

    return (clickedBlocks === numberOfBlocks);
  }

  function advanceToNextLevel(nextLevel) {
    $("#puzzle-" + (nextLevel - 1).toString()).fadeOut(function() {
      $("#puzzle-" + nextLevel.toString()).fadeIn();
    });
  }

  function winTheGame() {
    $("#puzzle-3").fadeOut(function() {
      $("#win-1").fadeIn("slow", function(){
        $("#win-2").fadeIn("slow");
      });
    });
  }

  // Begin the game

  $("#begin-btn").click(function(){
    $("#begin-btn").fadeOut(function() {
      $("#puzzle-1").fadeIn();
    });
  });

  // Puzzle 1

  $("#puzzle-1 .block").click(function() {
    $(this).addClass("clicked");

    if(solvedLevel(1, 3)) {
      advanceToNextLevel(2)
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

    if(solvedLevel(2, 4)) {
      advanceToNextLevel(3)
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

    if(solvedLevel(3, 8)) {
      winTheGame();
    }

  });

});
