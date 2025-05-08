// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
applyFilterNoBackground(decreaseBlue);
applyFilterNoBackground(increaseGreenByBlue);
render();
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
// 1a: Create the applyFilter function
// Constants

// 3: Filter function that modifies the red value
function reddify(rgbArray) {
rgbArray[RED] = 200;
}

// 1, 2, 4: applyFilter as a higher-order function
function applyFilter(filterFunction) {
for (var row = 0; row < image.length; row++) {
for (var col = 0; col < image[row].length; col++) {

var rgbString = image[row][col];

var rgbNumbers = rgbStringToArray(rgbString);

filterFunction(rgbNumbers);

rgbString = rgbArrayToString(rgbNumbers);


image[row][col] = rgbString;
}
}
}
function applyAndRender() {
applyFilter(increaseGreenByBlue);
render();
}



// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {

const backgroundColor = image[0][0];

for (var row = 0; row < image.length; row++) {
for (var col = 0; col < image[row].length; col++) {

let rgbString = image[row][col];

if (rgbString !== backgroundColor) {
let rgbNumbers = rgbStringToArray(rgbString);
filterFunction(rgbNumbers);
rgbString = rgbArrayToString(rgbNumbers);
image[row][col] = rgbString;
}
}
}
}

// TODO 5: Create the keepInBounds function
function keepInBounds(value){
  return Math.min(255, Math.max(0, value));
}

// TODO 3: Create reddify function
function reddify(rgbArray) {
  rgbArray[RED] = 200
}

// TODO 6: Create more filter functions
function increaseGreenByBlue(rgbArray){
  rgbArray[GREEN] = keepInBounds(rgbArray[GREEN] + rgbArray[BLUE]);
}


// CHALLENGE code goes below here
