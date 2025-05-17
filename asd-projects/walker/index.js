/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

  var KEY = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN:40
}
  
  // Game Item Objects
var walker = {
  x: 0,
  y: 0,
  speedX: 0,
  speedY: 0,
};
function repoistionGameItem(){
  walker.x += walker.speedX;
  walker.y += walker.speedY;
}
function redrawGameItem() {
 $("#walker").css("left", walker.x);
$("#walker").css("top", walker.y);
$("#walker").css("down", walker.y);
$("#walker").css("right", walker.x);
}
$(document).on("keyup", handleKeyUp);
function handleKeyUp(event){
}if (event.which === KEY.LEFT){
    walker.speedX = 0;
  }if(event.which === KEY.DOWN)
    walker.speedY = 0;
  if(event.which === KEY.UP){
    walker.speedY = 0;
  }if(event.which === KEY.RIGHT){
    walker.speedX = 0;
  }

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
 
  
  $(document).on('keydown', handleKeyDown);
  
  
  function handleKeyDown(event) {
  console.log(event.which); 

  }

    

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
   let walkerSize = 50;

  function newFrame() {
    repoistionGameItem();
    wallCollision();
    redrawGameItem();
    

  }
  
  /* 
  Called in response to events.
  */
 function handleKeyDown(event) {
  console.log(event.which)
     if (event.which === KEY.LEFT) {
       walker.speedX = -5;
     } if (event.which === KEY.UP){
       walker.speedX = 5;
     }if(event.which === KEY.RIGHT){
       walker.speedX = 5;
     }if(event.which === KEY.DOWN){
       walker.speedX = -5;
   }
 }


  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function wallCollision(){
    var boardWidth = $("#board").width();
    var boardHeight= $("#board").height();
    var boardSize = $("#walker").width();
    if (walker.x < 0) walker.x = 0;
    if (walker.y < 0) walker.y = 0;
    if (walker.x + walkerSize > boardWidth) walker.x = boardWidth - walkerSize;
    if (walker.y + walkerSize > boardWidth)
      walker.y = boardWidth - walkerSize;
  }

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}


