/* PHOTO FRAME MOUNT BOARD CALCULATOR JAVASCRIPT */
/* Version 0.1 */

// VARIABLES
var boardUnits = "cm";
var mediaUnits = "in";
var boardHorizontal = 40; // user entered number
var boardVertical = 30; // user entered number
var mediaHorizontal = 10; // user entered number
var mediaVertical = 8; // user entered number
var borderTop = 0;
var borderBottom = 0;
var borderLeft = 0;
var borderRight = 0;
var borderTopAndBottom = 0;
var borderLeftAndRight = 0;

window.onload = (event) => {
  console.log("---JAVASCRIPT LOADED---");
};

// FUNCTIONS

function getUnitValue(inputID) {
    // GET VALUE FROM SPAN WITH MATCHING ID AND ADD TO VARIABLE
    // Set rankSelected var to user rankSelected

    // console.log("---RUNNING getPowerRank(inputID)---");

    // console.log("input ID: " + inputID + " is a " + typeof(inputID));

    rankSelected = document.getElementById(inputID).value;

    // // console.log("rankSelected: " + rankSelected + " is a " + typeof(rankSelected));
}

function getUnitsBoardHorizontal() {
    boardHorizontal = document.getElementById(mountBoardSizeHorizontal).value;
	console.log("RUNNING: getUnitsBoardHorizontal");
	console.log("boardHorizontal: " + boardHorizontal);
}

function getUnitsBoardVertical() {
    boardVertical = document.getElementById(mountBoardSizeVertical).value;
	console.log("RUNNING: getUnitsBoardVertical");
	console.log("boardVertical: " + boardVertical);
}

function getUnitsMediaHorizontal() {
    mediaHorizontal = document.getElementById(mediaSizeHorizontal).value;
	console.log("RUNNING: getUnitsMediaHorizontal");
	console.log("mediaHorizontal: " + mediaHorizontal);
}

function getUnitsMediaVertical() {
    mediaVertical = document.getElementById(mediaSizeVertical).value;
	console.log("RUNNING: getUnitsMediaVertical");
	console.log("mediaVertical: " + mediaVertical);
}

function getBoardUnits(inputID) {
    boardUnits = document.getElementById(inputID).value;
	console.log("RUNNING: getBoardUnits");
	console.log("boardUnits: " + boardUnits);
}

function getMediaUnits(inputID) {
    mediaUnits = document.getElementById(inputID).value;
	console.log("RUNNING: getMediaUnits");
	console.log("mediaUnits: " + mediaUnits);
}

function calculateMountBoard(inputID) {
	console.log("RUNNING: calculateMountBoard");

    if (mediaUnits == "in") {
	console.log("Converting media units to metric");
 	console.log("Imperial mediaHorizontal:" + mediaHorizontal);
 	console.log("Imperial mediaVertical:" + mediaVertical);
        mediaHorizontal = Number(mediaHorizontal) * 2.54;
        mediaVertical = Number(mediaVertical) * 2.54;
 	console.log("Metric mediaHorizontal:" + mediaHorizontal);
 	console.log("Metric mediaVertical:" + mediaVertical);
    }

    borderTopAndBottom = ((Number(boardHorizontal) - Number(mediaHorizontal)) / 2) * 10;
    borderTopAndBottom = borderTopAndBottom.toFixed(0) + "mm";

    borderLeftAndRight = ((Number(boardVertical) - Number(mediaVertical)) / 2) * 10;
    borderLeftAndRight = borderLeftAndRight.toFixed(0) + "mm";

	console.log("borderTopAndBottom: " + borderTopAndBottom);
	console.log("borderLeftAndRight: " + borderLeftAndRight);

    document.getElementById("borderTop").innerHTML = borderTopAndBottom;
    document.getElementById("borderBottom").innerHTML = borderTopAndBottom;
    document.getElementById("borderLeft").innerHTML = borderLeftAndRight;
    document.getElementById("borderRight").innerHTML = borderLeftAndRight;

}