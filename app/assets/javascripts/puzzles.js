$(function() {
  gameApp.playGame();
});

var gameApp = {

  currentPuzzleId: 0,

  currentPuzzle: function() {
    return gameApp.puzzles[gameApp.currentPuzzleId];
  },

  solvedPuzzle: function(puzzle) {
    var solved = true;

    for(var i = 0; i < puzzle.blocks.length; i++) {
      if(puzzle.blocks[i] === 0) {solved = false;}
    }

    return solved;
    
  },

  advanceToNextLevel: function() {
    $("#puzzle-" + (gameApp.currentPuzzleId).toString()).fadeOut(function() {

      gameApp.currentPuzzleId += 1;

      if(gameApp.currentPuzzleId === gameApp.puzzles.length) {
        gameApp.winTheGame();
      }
      else {
        $("#puzzle-" + gameApp.currentPuzzleId.toString()).fadeIn();
      }  
    });
  },

  winTheGame: function() {
    $("#win-1").fadeIn("slow", function(){
      $("#win-2").fadeIn("slow");
    });
  },

  puzzles: [
    {
      section: "puzzle-0",
      blocks: [0, 0, 0],
      toggle: function(blockId) {
        this.blocks[blockId] = 1;
      }
    },

    {
      section: "puzzle-1",
      blocks: [0, 0, 0, 0],
      toggle: function(blockId) {
        for(var i = 0; i < this.blocks.length; i++) {
          if(i !== blockId) {
            this.blocks[i] = this.blocks[i] == 0 ? 1 : 0;
          }
        }
      }
    },

    {
      section: "puzzle-2",
      blocks: [0, 0, 0, 0, 0, 0, 0, 0],
      toggle: function(blockId) {
        for(var i = 0; i < this.blocks.length; i++) {
          if(i !== blockId) {
            this.blocks[i] = this.blocks[i] == 0 ? 1 : 0;
          }
        }
      }
    }
  ],

  updateDisplay: function() {
    for(var i = 0; i < gameApp.currentPuzzle().blocks.length; i++) {
      if (gameApp.currentPuzzle().blocks[i] === 0) {
        $("#puzzle-" + gameApp.currentPuzzleId.toString() + " .block:eq(" + i.toString() + ")").removeClass("clicked");
      } else {
        $("#puzzle-" + gameApp.currentPuzzleId.toString() + " .block:eq(" + i.toString() + ")").addClass("clicked");
      }
    }
  },

  playGame: function() {

    $("#begin-btn").click(function(){
      $("#begin-btn").fadeOut(function() {
        $("#puzzle-0").fadeIn();
      });
    });

    $(".block").click(function() {
      var clickedBlockId = $("#puzzle-" + gameApp.currentPuzzleId.toString() + " .block").index($(this));

      gameApp.currentPuzzle().toggle(clickedBlockId);
      gameApp.updateDisplay();

      if(gameApp.solvedPuzzle(gameApp.currentPuzzle())) {
        gameApp.advanceToNextLevel();
      }

    });

  }

}


