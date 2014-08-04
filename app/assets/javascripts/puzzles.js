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
      if(puzzle.blocks[i] !== "white") {solved = false;}
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
        this.blocks[blockId] = "white";
      }
    },

    {
      section: "puzzle-1",
      blocks: [0, 0, 0, 0],
      toggle: function(blockId) {
        for(var i = 0; i < this.blocks.length; i++) {
          if(i !== blockId) {
            this.blocks[i] = this.blocks[i] == 0 ? "white" : 0;
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
            this.blocks[i] = this.blocks[i] == 0 ? "white" : 0;
          }
        }
      }
    },

    {
      section: "puzzle-3",
      blocks: [0, 1, 0, 1],
      toggle: function(blockId) {
        for(var i = 0; i < this.blocks.length; i++) {
          if(i !== blockId) {
            if(this.blocks[i] === 0) {
              this.blocks[i] = 1;
            } else if (this.blocks[i] === 1) {
              this.blocks[i] = "white";
            } else if (this.blocks[i] === "white") {
              this.blocks[i] = 0;
            }
          }
        }
      }
    }
  ],

  updateDisplay: function() {
    for(var i = 0; i < gameApp.currentPuzzle().blocks.length; i++) {
      $("#puzzle-" + gameApp.currentPuzzleId.toString() + " .block:eq(" + i.toString() + ")").removeClass("block-white").removeClass("block-0").removeClass("block-1");
      $("#puzzle-" + gameApp.currentPuzzleId.toString() + " .block:eq(" + i.toString() + ")").addClass("block-" + gameApp.currentPuzzle().blocks[i]);
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

      $(this).fadeOut("fast", function() {
        $(this).fadeIn("fast", function() {
          gameApp.updateDisplay();
        });
      });

      if(gameApp.solvedPuzzle(gameApp.currentPuzzle())) {
        gameApp.advanceToNextLevel();
      }

    });

  }

}


