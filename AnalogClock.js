var namespace = "http://www.w3.org/2000/svg";
var pi = Math.PI;
var svg;

var clockContainer = document.getElementById("clockContainer");

// Add the clock svg
var svg = document.createElementNS(namespace, "svg");
svg.setAttributeNS(null, "id", "oClockSVG")
svg.setAttributeNS(null, "width", 1000);
svg.setAttributeNS(null, "height", 700);
clockContainer.appendChild(svg);

// Add the clock
var oClock = document.createElementNS(namespace, "circle");
oClock.setAttributeNS(null, "id", "oClock");
oClock.setAttributeNS(null, "cx", 500);
oClock.setAttributeNS(null, "cy", 350);
oClock.setAttributeNS(null, "r", 300);
oClock.setAttributeNS(null, "stroke", "black");
oClock.setAttributeNS(null, "stroke-width", 2);
oClock.setAttributeNS(null, "fill", "none");
svg.appendChild(oClock);

// Add the clock center
var oClockCenter = document.createElementNS(namespace, "circle");
oClockCenter.setAttributeNS(null, "id", "oClock");
oClockCenter.setAttributeNS(null, "cx", 500);
oClockCenter.setAttributeNS(null, "cy", 350);
oClockCenter.setAttributeNS(null, "r", 4);
oClockCenter.setAttributeNS(null, "stroke", "black");
oClockCenter.setAttributeNS(null, "stroke-width", 2);
oClockCenter.setAttributeNS(null, "fill", "black");
svg.appendChild(oClockCenter);

// Add the minute marks
var initX1 = 500, initY1 = 50, initX2 = 500, initY2 = 60;
var shiftedX1 = 0, shiftedY1 = 300, shiftedX2 = 0, shiftedY2 = 290;
var theta = 6;
var oLine = document.createElementNS(namespace, "line");
oLine.setAttributeNS(null, "x1", 500);
oLine.setAttributeNS(null, "y1", 50);
oLine.setAttributeNS(null, "x2", 500);
oLine.setAttributeNS(null, "y2", 60);
oLine.setAttributeNS(null, "stroke", "black");
oLine.setAttributeNS(null, "stroke-width", 5);
oLine.setAttributeNS(null, "fill", "black");
svg.appendChild(oLine);
for (var index = 1; index < 60; index++) {
    var newShiftedX1 = 500 + (shiftedY1 * Math.sin(theta * (Math.PI / 180)));
    var newShiftedY1 = 350 + (shiftedY1 * Math.cos((180-theta) * (Math.PI / 180)));
    var newShiftedX2 = 500 + (shiftedY2 * Math.sin(theta * (Math.PI / 180)));
    var newShiftedY2 = 350 + (shiftedY2 * Math.cos((180-theta) * (Math.PI / 180)));
    var oMarkLine = document.createElementNS(namespace, "line");
    oMarkLine.setAttributeNS(null, "id", "oMarkLine" + index);
    oMarkLine.setAttributeNS(null, "x1", newShiftedX1);
    oMarkLine.setAttributeNS(null, "y1", newShiftedY1);
    oMarkLine.setAttributeNS(null, "x2", newShiftedX2);
    oMarkLine.setAttributeNS(null, "y2", newShiftedY2);
    oMarkLine.setAttributeNS(null, "stroke", "black");
    oMarkLine.setAttributeNS(null, "fill", "black");
    if (index % 5 === 0) {
        oMarkLine.setAttributeNS(null, "stroke-width", 5);
    } else {
        oMarkLine.setAttributeNS(null, "stroke-width", 2);
    }
    svg.appendChild(oMarkLine);
    theta += 6;
}
theta = 6;

// Add hour, minute and second hand
var updateClock, oSecondHand, oMinuteHand, oHourHand;

updateClock = function () {
    var currentTime = new Date();
    var hours = (currentTime.getHours() > 12) ? (currentTime.getHours() - 12) : currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var secondHandLength = 275, minuteHandLength = 270, hourHandLength = 175;

    if (oSecondHand) {
        svg.removeChild(oSecondHand);
    }
    oSecondHand = document.createElementNS(namespace, "line");
    oSecondHand.setAttributeNS(null, "id", "oSecondHand");
    oSecondHand.setAttributeNS(null, "x1", 500);
    oSecondHand.setAttributeNS(null, "y1", 350);
    oSecondHand.setAttributeNS(null, "x2", 500 + (secondHandLength * Math.sin((theta * seconds) * (Math.PI / 180))));
    oSecondHand.setAttributeNS(null, "y2", 350 + (secondHandLength * Math.cos((180 - (theta * seconds)) * (Math.PI / 180))));
    oSecondHand.setAttributeNS(null, "stroke", "red");
    oSecondHand.setAttributeNS(null, "stroke-width", 3);
    oSecondHand.setAttributeNS(null, "fill", "red");
    svg.appendChild(oSecondHand);

    if (oMinuteHand) {
        svg.removeChild(oMinuteHand)
    }
    oMinuteHand = document.createElementNS(namespace, "line");
    oMinuteHand.setAttributeNS(null, "id", "oMinuteHand");
    oMinuteHand.setAttributeNS(null, "x1", 500);
    oMinuteHand.setAttributeNS(null, "y1", 350);
    oMinuteHand.setAttributeNS(null, "x2", 500 + (minuteHandLength * Math.sin(((theta * minutes) + (seconds * 1 / 10)) * (Math.PI / 180))));
    oMinuteHand.setAttributeNS(null, "y2", 350 + (minuteHandLength * Math.cos((180 - (theta * minutes) - (seconds * 1 / 10)) * (Math.PI / 180))));
    oMinuteHand.setAttributeNS(null, "stroke", "black");
    oMinuteHand.setAttributeNS(null, "stroke-width", 6);
    oMinuteHand.setAttributeNS(null, "fill", "black");
    svg.appendChild(oMinuteHand);

    if (oHourHand) {
        svg.removeChild(oHourHand);
    }
    oHourHand = document.createElementNS(namespace, "line");
    oHourHand.setAttributeNS(null, "id", "oHourHand");
    oHourHand.setAttributeNS(null, "x1", 500);
    oHourHand.setAttributeNS(null, "y1", 350);
    oHourHand.setAttributeNS(null, "x2", 500 + (hourHandLength * Math.sin(((30 * hours) + (minutes / 2) + (seconds * 1 / 120)) * (Math.PI / 180))));
    oHourHand.setAttributeNS(null, "y2", 350 + (hourHandLength * Math.cos((180 - (30 * hours) - (minutes / 2) - (seconds * 1 / 120)) * (Math.PI / 180))));
    oHourHand.setAttributeNS(null, "stroke", "black");
    oHourHand.setAttributeNS(null, "stroke-width", 10);
    oHourHand.setAttributeNS(null, "fill", "black");
    svg.appendChild(oHourHand);
}

setInterval(function () {
    updateClock();
}, 1000);