/* PHOTO FRAME MOUNT BOARD CALCULATOR JAVASCRIPT */
/* Version 0.3 */

// v0.3 2025-06-22

// v0.2 2025-06-22
// 1. Changed calculateMountBoard() to convert centimetres and inches user input to millimeters.
// 2. Changed "Horizontal" to "Width" and "Vertical" to "Height" in HTML and JS.
// 3. Added variables to display distance to cut window from left and top edges of mount board.
// 4. Added function to reset variables to default after calculation run.
// Gemini checked code showing error in some functions, which were corrected.


// VARIABLES
var boardUnits;
var mediaUnits;
var unitSelected;
var boardHeight; // user entered number
var boardWidth; // user entered number
var mediaHeight; // user entered number
var mediaWidth; // user entered number
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
    // Set unitSelected var to user unitSelected

    unitSelected = document.getElementById(inputID).value;

    // console.log("unitSelected: " + unitSelected + " is a " + typeof(unitSelected));
}

function getUnitsBoardWidth() {
    boardWidth = document.getElementById("boardWidthEntry").value;
    console.log("RUNNING: getUnitsBoardWidth");
    console.log("boardWidth: " + boardWidth);
}

function getUnitsBoardHeight() {
    boardHeight = document.getElementById("boardHeightEntry").value;
    console.log("RUNNING: getUnitsBoardHeight");
    console.log("boardHeight: " + boardHeight);
}

function getUnitsMediaWidth() {
    mediaWidth = document.getElementById("mediaWidthEntry").value;
    console.log("RUNNING: getUnitsMediaWidth");
    console.log("mediaWidth: " + mediaWidth);
}

function getUnitsMediaHeight() {
    mediaHeight = document.getElementById("mediaHeightEntry").value;
    console.log("RUNNING: getUnitsMediaHeight");
    console.log("mediaHeight: " + mediaHeight);
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

    getBoardUnits();
    getMediaUnits();
    getUnitsBoardWidth();
    getUnitsBoardHeight();
    getUnitsMediaWidth();
    getUnitsMediaHeight();

    if (mediaUnits == "in") {
        console.log("--- Converting imperial media units to millimetres ---");
        console.log("Imperial mediaWidth:" + mediaWidth + "in");
        console.log("Imperial mediaHeight:" + mediaHeight + "in");
        mediaWidth = Number(mediaWidth) * 25.4;
        mediaHeight = Number(mediaHeight) * 25.4;
        console.log("Metric mediaWidth:" + mediaWidth + "mm");
        console.log("Metric mediaHeight:" + mediaHeight + "mm");
    } else if (mediaUnits == "cm") {
        console.log("---Converting centimeters media units to millimetres--");
        console.log("Imperial mediaWidth:" + mediaWidth + "cm");
        console.log("Imperial mediaHeight:" + mediaHeight + "cm");
        mediaWidth = Number(mediaWidth) * 10;
        mediaHeight = Number(mediaHeight) * 10;
        console.log("Metric mediaWidth:" + mediaWidth + "cm");
        console.log("Metric mediaHeight:" + mediaHeight) + "cm";
    }

    // Calculate size of frame borders for displaying in millimeters

    borderTop = ((Number(boardHeight) - Number(mediaHeight)) / 2);
    windowTopEdge = borderTop.toFixed(0) + "mm";

    borderBottom = Number(boardHeight) - Number(borderTop);
    windowBottomEdge = borderBottom.toFixed(0) + "mm";

    borderLeft = ((Number(boardWidth) - Number(mediaWidth)) / 2);
    windowLeftEdge = borderLeft.toFixed(0) + "mm";

    borderRight = Number(boardWidth) - Number(borderLeft);
    windowRightEdge = borderRight.toFixed(0) + "mm";

    console.log("borderTop: " + borderTop);
    console.log("windowTopEdge: " + windowTopEdge);
    console.log("borderBottom: " + borderBottom);
    console.log("windowBottomEdge: " + windowBottomEdge);
    console.log("borderLeft: " + borderLeft);
    console.log("windowLeftEdge: " + windowLeftEdge);
    console.log("borderRight: " + borderLeft);
    console.log("windowRightEdge: " + windowLeftEdge);

    document.getElementById("borderTop").innerHTML = borderTop.toFixed(0) + "mm";
    document.getElementById("windowTopEdge").innerHTML = windowTopEdge;

    document.getElementById("borderBottom").innerHTML = borderTop.toFixed(0) + "mm";
    document.getElementById("windowBottomEdge").innerHTML = windowBottomEdge;

    document.getElementById("borderLeft").innerHTML = borderLeft.toFixed(0) + "mm";
    document.getElementById("windowLeftEdge").innerHTML = windowLeftEdge;

    document.getElementById("borderRight").innerHTML = borderLeft.toFixed(0) + "mm";
    document.getElementById("windowRightEdge").innerHTML = windowRightEdge;

    resetVariables();

}

function resetVariables() {
    boardUnits = "mm";
    mediaUnits = "in";
    unitSelected = "mm";
    boardWidth = 0; // user entered number
    boardHeight = 0; // user entered number
    mediaWidth = 0; // user entered number
    mediaHeight = 0; // user entered number
    borderTop = 0;
    borderBottom = 0;
    borderLeft = 0;
    borderRight = 0;
    windowTopEdge = 0;
    windowBottomEdge = 0;
    windowLeftEdge = 0;
    windowRightEdge = 0;
}