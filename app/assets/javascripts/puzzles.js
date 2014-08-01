$(function() {
  playGame();
});

function solvedPuzzle(puzzle) {
  var solved = true;

  for(i = 0; i < puzzle.blocks.length; i++) {
    if(puzzle.blocks[i] === 0) {solved = false;}
  }

  return solved;
  
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

function playGame() {

  var PuzzleOne = {
    section: "puzzle-1",
    level: 1,
    blocks: [0, 0, 0]
  }
  // Begin the game

  $("#begin-btn").click(function(){
    $("#begin-btn").fadeOut(function() {
      $("#puzzle-1").fadeIn();
    });
  });

  // Puzzle 1

  $("#puzzle-1 .block").click(function() {
    var clickedBlockId = parseInt($(this).attr("id"));

    PuzzleOne.blocks[clickedBlockId] = 1;
    $(this).addClass("clicked");

    if(solvedPuzzle(PuzzleOne)) {
      advanceToNextLevel(2);
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

    if(solvedPuzzle(2, 4)) {
      advanceToNextLevel(3);
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

    if(solvedPuzzle(3, 8)) {
      winTheGame();
    }

  });
}


