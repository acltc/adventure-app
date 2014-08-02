$(function() {
  gameApp.playGame();
});

var gameApp = {

  currentPuzzle: 0,

  solvedPuzzle: function(puzzle) {
    var solved = true;

    for(i = 0; i < puzzle.blocks.length; i++) {
      if(puzzle.blocks[i] === 0) {solved = false;}
    }

    return solved;
    
  },

  advanceToNextLevel: function(nextLevel) {
    $("#puzzle-" + (nextLevel - 1).toString()).fadeOut(function() {
      $("#puzzle-" + nextLevel.toString()).fadeIn();
    });
  },


  winTheGame: function() {
    $("#puzzle-3").fadeOut(function() {
      $("#win-1").fadeIn("slow", function(){
        $("#win-2").fadeIn("slow");
      });
    });
  },

  puzzles: [
    {
      section: "puzzle-0",
      blocks: [0, 0, 0],
      toggle: function(n) {
        this.blocks[n] = 1;
      }
    },

    {
      section: "puzzle-1",
      blocks: [0, 0, 0, 0]
    },

    {
      section: "puzzle-2",
      blocks: [0, 0, 0, 0, 0, 0, 0, 0]
    }
  ],

  playGame: function() {

    // Begin the game

    $("#begin-btn").click(function(){
      $("#begin-btn").fadeOut(function() {
        $("#puzzle-0").fadeIn();
      });
    });

    // Puzzle 0

    $("#puzzle-0 .block").click(function() {
      var clickedBlockId = parseInt($(this).attr("id"));
      gameApp.puzzles[0].toggle(clickedBlockId);


      // gameApp.puzzleOne.blocks[clickedBlockId] = 1;
      $(this).addClass("clicked");

      if(gameApp.solvedPuzzle(gameApp.puzzles[gameApp.currentPuzzle])) {
        gameApp.advanceToNextLevel(1);
      }

    });

    // Puzzle 1

    $("#puzzle-1 .block").click(function() {
      var clickedBlockId = $(this).attr("id");

      $("#puzzle-2 .block").each(function() {
        if($(this).attr("id") !== clickedBlockId) {
          $(this).toggleClass("clicked");
        }
      });

      if(solvedPuzzle(2, 4)) {
        advanceToNextLevel(2);
      }

    });

    // Puzzle 2

    $("#puzzle-2 .block").click(function() {
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

}


