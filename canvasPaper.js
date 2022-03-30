// Get our canvas

// var canvas = document.getElementById('canvas').getContext("2d");

// // var canvas = $('#canvas')[0].getContext("2d");
// // Draw a circle
// canvas.beginPath();
// canvas.arc(100, 100, 15, 0, Math.PI*2, true);

// // Close the path
// canvas.closePath();

// // Fill it in
// canvas.fill();


// var path = new Path();
// path.strokeColor = '#567e37';
// path.strokeWidth = 5;

// var firstPoint = new Point(0, 550);
// path.add(firstPoint);

// var throughPoint = new Point(75, 400);
// var toPoint = new Point(100, 250);
// path.arcTo(throughPoint, toPoint);

// path.fullySelected = true;

// var circle = new Path.Circle(throughPoint, 5);
// circle.fillColor = '#CC0000';

// var bulb = new Path.Circle(toPoint, 10);
// bulb.fillColor = '#567e37';




// Tutorial Implementation
// // Create a Paper.js Path to draw a line into it:
var path = new Path();
// Give the stroke a color
path.strokeColor = 'black';
var start = new Point(100, 100);
// Move to start and draw a line from there
path.moveTo(start);
path.lineTo(start + [100, -50]);


// Create a circle shaped path with its center at the center of the view and a radius of 30:
// var path = new Path.Circle({
//     center: view.center,
//     radius: 30,
//     strokeColor: 'black'
// });

function onResize(event) {
    // Whenever the window is resized, recenter the path:
    path.position = view.center;
}

// Only executed our code once the DOM is ready.
window.onload = function () {
    // Get a reference to the canvas object
    var canvas = document.getElementById('myCanvas');
    // Create an empty project and a view for the canvas:
    paper.setup(canvas);
    // Create a Paper.js Path to draw a line into it:
    var path = new paper.Path();
    // Give the stroke a color
    path.strokeColor = 'black';
    var start = new paper.Point(100, 100);
    // Move to start and draw a line from there
    path.moveTo(start);
    // Note that the plus operator on Point objects does not work
    // in JavaScript. Instead, we need to call the add() function:
    path.lineTo(start.add([200, -50]));
    // Draw the view now:
    paper.view.draw();
}


// Make the paper scope global, by injecting it into window:
paper.install(window);
window.onload = function () {
    // Setup directly from canvas id:
    paper.setup('myCanvas');
    var path = new Path();
    path.strokeColor = 'black';
    var start = new Point(100, 100);
    path.moveTo(start);
    path.lineTo(start.add([200, -50]));
    view.draw();
}

// OR

window.onload = function () {
    paper.setup('myCanvas');
    with (paper) {
        var path = new Path();
        path.strokeColor = 'black';
        var start = new Point(100, 100);
        path.moveTo(start);
        path.lineTo(start.add([200, -50]));
        view.draw();
    }
}

// Installing event handlers on view class
console.log('above onload function');
paper.install(window);
window.onload = function () {
    paper.setup('myCanvas');
    var path = new Path.Rectangle([75, 75], [100, 100]);
    path.strokeColor = 'black';

    view.onFrame = function (event) {
        // On each frame, rotate the path by 3 degrees:
        path.rotate(3);
    }
}
console.log('outside onload function');

// Tool object
paper.install(window);
window.onload = function () {
    paper.setup('myCanvas');
    // Create a simple drawing tool:
    var tool = new Tool();
    var path;

    // Define a mousedown and mousedrag handler
    tool.onMouseDown = function (event) {
        path = new Path();
        path.strokeColor = 'black';
        path.add(event.point);
    }

    tool.onMouseDrag = function (event) {
        path.add(event.point);
    }
}

// Multiple Tools

paper.install(window);
// Keep global references to both tools, so the HTML
// links below can access them.
var tool1, tool2;

window.onload = function () {
    paper.setup('myCanvas');

    // Create two drawing tools.
    // tool1 will draw straight lines,
    // tool2 will draw clouds.

    // Both share the mouseDown event:
    var path;
    function onMouseDown(event) {
        path = new Path();
        path.strokeColor = 'black';
        path.add(event.point);
    }

    tool1 = new Tool();
    tool1.onMouseDown = onMouseDown;

    tool1.onMouseDrag = function (event) {
        path.add(event.point);
    }

    tool2 = new Tool();
    tool2.minDistance = 20;
    tool2.onMouseDown = onMouseDown;

    tool2.onMouseDrag = function (event) {
        // Use the arcTo command to draw cloudy lines
        path.arcTo(event.point);
    }
}
// onload();
// Point object
var myPoint = new Point(10, 20);
console.log(myPoint);

var myPath = new Path();
myPath.add(myPoint);

// Creating a Point object
var myPoint = new Point();
console.log(myPoint);

// add a value in it
myPoint.x = 10;
myPoint.y = myPoint.x + 10;
console.log(myPoint);

// Creating a Point 
var myPoint = new Point(20, 40);
console.log(myPoint); // { x: 20, y: 40 }

// Now we are doubling the x coordinate by multiplying it with 2.
myPoint.x = myPoint.x * 2;
console.log(myPoint); // { x: 40, y: 40 }


var firstPoint = new Point(20, 40);
var secondPoint = new Point(firstPoint);
console.log(secondPoint); // { x: 20, y: 40 }

secondPoint.y = 20;
console.log(secondPoint); // { x: 20, y: 20 }

// Note that firstPoint has not changed:
console.log(firstPoint); // { x: 20, y: 40 }

// Changing both points
var firstPoint = new Point(20, 40);
var secondPoint = firstPoint;
secondPoint.y = 20;
console.log(secondPoint); // { x: 20, y: 20 }

// Note that firstPoint has changed as well:
console.log(firstPoint); // { x: 20, y: 20 }

var firstPoint = new Point(20, 40);
var secondPoint = firstPoint.clone();

// Size Object
var mySize = new Size();
console.log(mySize); // { width: 0, height: 0 }

mySize.width = 10;
mySize.height = mySize.width + 10;
console.log(mySize); // { width: 10, height: 20 }

// another size object
var mySize = new Size(20, 40);
console.log(mySize); // { width: 20, height: 40 }

mySize.width = mySize.width * 2;
console.log(mySize); // { width: 40, height: 40 }

// Rectangle
var topLeft = new Point(10, 40);
var rectSize = new Size(200, 100);
var rect = new Rectangle(topLeft, rectSize);
console.log(rect); // { x: 10, y: 20, width: 200, height: 100 }
console.log(rect.point); // { x: 10, y: 20 }
console.log(rect.size); // { width: 200, height: 100 }

// OR

var rect = new Rectangle(10, 30, 200, 100);
console.log(rect);

// OR
var rect1 = new Rectangle(new Point(10, 120), new Point(210, 20));
console.log(rect1);

// Rectangle Properties : center, topLeft, topRight, bottomLeft, bottomRight, leftCenter, topCenter, rightCenter and bottomCenter.
// We start by creating a rectangle of dimension and
// location set to 0
var rect = new Rectangle();
console.log(rect); // { x: 0, y: 0, width: 0, height: 0 }

// Now we can for example define its size...
rect.size = new Size(100, 200);

// and its center
rect.center = new Point(100, 100);
console.log(rect);

var rect = new Rectangle();
rect.left = 100;
rect.right = 200;
rect.bottom = 400;
rect.top = 200;
console.log(rect);

// object conversion
// Create a rectangle from a JS object description:
var rect2 = new Rectangle({ x: 10, y: 20, width: 100, height: 200 });
console.log(rect2); // { x: 10, y: 20, width: 100, height: 200 }

// Define the size as an array containing [width, height]:
rect2.size = [200, 300];
console.log(rect2); // { x: 10, y: 20, width: 200, height: 300 }

// Change its point to a new one described by a JS object:
rect2.point = { x: 20, y: 40 };
console.log(rect2)

// converting size to point and vice versa
var rect = new Rectangle();
rect.point = { width: 100, height: 200 };
console.log(rect); // { x: 100, y: 200, width: 0, height: 0 }

rect.size = { x: 200, y: 400 };
console.log(rect);


// Mathematical Operations
// Define a point to start with
var point1 = new Point(10, 20);

// Create a second point that is 4 times the first one.
// This is the same as creating a new point with x and y
// of point1 multiplied by 4:
var point2 = point1 * 4;
console.log(point2); // { x: 40, y: 80 }

// Now we calculate the difference between the two.
var point3 = point2 - point1;
console.log(point3); // { x: 30, y: 60 }

// Create yet another point, with a numeric value added to point3:
var point4 = point3 + 30;
console.log(point4); // { x: 60, y: 90 }

// How about a third of that?
var point5 = point4 / 3;
console.log(point5); // { x: 20, y: 30 }

// Multiplying two points with each other multiplies each 
// coordinate seperately
var point6 = point5 * new Point(3, 2);
console.log(point6); // { x: 60, y: 60 }

var point1 = new Point(10, 20);
var point2 = point1 + { x: 100, y: 100 };
console.log(point2); // { x: 110, y: 120 }

// Adding size objects to points work too,
// forcing them to be converted to a point first
var point3 = point2 + new Size(50, 100);
console.log(point3); // { x: 160, y: 220 }

// And using the object notation for size works just as well:
var point4 = point3 + { width: 40, height: 80 };
console.log(point4); // { x: 200, y: 300 }

// How about adding a point in array notation instead?
var point5 = point4 + [100, 0];
console.log(point5); // { x: 300, y: 300 }

// Math Function
var point = new Point(1.2, 1.8);

// Round the point:
var rounded = point.round();
console.log(rounded); // { x: 1, y: 2 }

// Round the point up:
var ceiled = point.ceil();
console.log(ceiled); // { x: 2, y: 2 }

// Round the point down:
var floored = point.floor();
console.log(floored); // { x: 1, y: 1 }

// Random Values
// Create a point whose x is between 0 and 50,
// and y is between 0 and 100
var point = new Point(50, 100) * Point.random();
console.log(point);
// Create a size whose width is between 0 and 50,
// and height is between 0 and 100
var size = new Size(50, 100) * Size.random();
console.log(size);

// VECTOR GEOMETRY
var point1 = new Point(50, 50);
var point2 = new Point(110, 200);
var x = point2.x - point1.x; // = 110 - 50 = 60
var y = point2.y - point1.y; // = 200 - 50 = 150;
var vector = point2 - point1;
// = { x: 110, y: 200 } - { x: 50, y: 50 }
// = { x: 60, y: 150 }

//Points and Vector Addition
var point1 = new Point(50, 0);
var point2 = new Point(40, 100);

var point3 = new Point(5, 135);
var point4 = new Point(75, 170);

var vector1 = point2 - point1;
// = { x: 40, y: 100 } - { x: 50, y: 0 }
// = { x: -10, y: 100 }

var vector2 = point4 - point3;
// = { x: 75, y: 170 } - { x: 5, y: 135 }
// = { x: 70, y: 35 }

startPoint = new Point();
var tempPoint = startPoint + vector1;
var endPoint = tempPoint + vector2;
var vector = vector1 + vector2;
var vector = vector1 - vector2;

// var bigVector = smallVector * 3;

var vector = new Point(24, 60);
console.log(vector.length);
// 64.62198
vector.length = vector.length * 3;
console.log(vector.length);
// 193.86593
vector.length = 100;

// Normalising
var vector = new Point(24, 60);
var normalizedVector = vector.normalize();
console.log(vector.length);
// 64.62198
console.log(normalizedVector.length);
// 1

var normalizedVector = vector.normalize(10);
console.log(normalizedVector.length);
// 10

var normalizedVector = vector.normalize() * 10;
console.log(normalizedVector.length);
// 10

// Rotating Vectors
var vector = new Point(100, 100);
console.log(vector.angle);

console.log(vector.length);
// 141.42136

vector.angle = 135;
console.log(vector.length);
// 141.42136

console.log(vector);
// { x: -100, y: 100 }

// vector.angle = vector.angle + 90;
vector.angle += 90;

console.log(vector.angle);


// VIKTOR
// console.log('Viktor started');

// var values = {
//     fixLength: false,
//     fixAngle: false,
//     showCircle: false,
//     showAngleLength: true,
//     showCoordinates: false
// };

// var vectorStart, vector, vectorPrevious;
// var vectorItem, items, dashedItems;

// function processVector(event, drag) {
//     vector = event.point - vectorStart;
//     if (vectorPrevious) {
//         if (values.fixLength && values.fixAngle) {
//             vector = vectorPrevious;
//         } else if (values.fixLength) {
//             vector.length = vectorPrevious.length;
//         } else if (values.fixAngle) {
//             vector = vector.project(vectorPrevious);
//         }
//     }
//     drawVector(drag);
// }

// function drawVector(drag) {
//     if (items) {
//         for (var i = 0, l = items.length; i < l; i++) {
//             items[i].remove();
//         }
//     }
//     if (vectorItem)
//         vectorItem.remove();
//     items = [];
//     var arrowVector = vector.normalize(10);
//     var end = vectorStart + vector;
//     vectorItem = new Group([
//         new Path([vectorStart, end]),
//         new Path([
//             end + arrowVector.rotate(135),
//             end,
//             end + arrowVector.rotate(-135)
//         ])
//     ]);
//     vectorItem.strokeWidth = 0.75;
//     vectorItem.strokeColor = '#e4141b';
//     // Display:
//     dashedItems = [];
//     // Draw Circle
//     if (values.showCircle) {
//         dashedItems.push(new Path.Circle({
//             center: vectorStart,
//             radius: vector.length
//         }));
//     }
//     // Draw Labels
//     if (values.showAngleLength) {
//         drawAngle(vectorStart, vector, !drag);
//         if (!drag)
//             drawLength(vectorStart, end, vector.angle < 0 ? -1 : 1, true);
//     }
//     var quadrant = vector.quadrant;
//     if (values.showCoordinates && !drag) {
//         drawLength(vectorStart, vectorStart + [vector.x, 0],
//             [1, 3].indexOf(quadrant) != -1 ? -1 : 1, true, vector.x, 'x: ');
//         drawLength(vectorStart, vectorStart + [0, vector.y],
//             [1, 3].indexOf(quadrant) != -1 ? 1 : -1, true, vector.y, 'y: ');
//     }
//     for (var i = 0, l = dashedItems.length; i < l; i++) {
//         var item = dashedItems[i];
//         item.strokeColor = 'black';
//         item.dashArray = [1, 2];
//         items.push(item);
//     }
//     // Update palette
//     values.x = vector.x;
//     values.y = vector.y;
//     values.length = vector.length;
//     values.angle = vector.angle;
// }

// function drawAngle(center, vector, label) {
//     var radius = 25, threshold = 10;
//     if (vector.length < radius + threshold || Math.abs(vector.angle) < 15)
//         return;
//     var from = new Point(radius, 0);
//     var through = from.rotate(vector.angle / 2);
//     var to = from.rotate(vector.angle);
//     var end = center + to;
//     dashedItems.push(new Path.Line(center,
//         center + new Point(radius + threshold, 0)));
//     dashedItems.push(new Path.Arc(center + from, center + through, end));
//     var arrowVector = to.normalize(7.5).rotate(vector.angle < 0 ? -90 : 90);
//     dashedItems.push(new Path([
//         end + arrowVector.rotate(135),
//         end,
//         end + arrowVector.rotate(-135)
//     ]));
//     if (label) {
//         // Angle Label
//         var text = new PointText(center
//             + through.normalize(radius + 10) + new Point(0, 3));
//         text.content = Math.floor(vector.angle * 100) / 100 + '°';
//         text.fillColor = 'black';
//         items.push(text);
//     }
// }

// function drawLength(from, to, sign, label, value, prefix) {
//     var lengthSize = 5;
//     if ((to - from).length < lengthSize * 4)
//         return;
//     var vector = to - from;
//     var awayVector = vector.normalize(lengthSize).rotate(90 * sign);
//     var upVector = vector.normalize(lengthSize).rotate(45 * sign);
//     var downVector = upVector.rotate(-90 * sign);
//     var lengthVector = vector.normalize(
//         vector.length / 2 - lengthSize * Math.sqrt(2));
//     var line = new Path();
//     line.add(from + awayVector);
//     line.lineBy(upVector);
//     line.lineBy(lengthVector);
//     line.lineBy(upVector);
//     var middle = line.lastSegment.point;
//     line.lineBy(downVector);
//     line.lineBy(lengthVector);
//     line.lineBy(downVector);
//     dashedItems.push(line);
//     if (label) {
//         // Length Label
//         var textAngle = Math.abs(vector.angle) > 90
//             ? textAngle = 180 + vector.angle : vector.angle;
//         // Label needs to move away by different amounts based on the
//         // vector's quadrant:
//         var away = (sign >= 0 ? [1, 4] : [2, 3]).indexOf(vector.quadrant) != -1
//             ? 8 : 0;
//         value = value || vector.length;
//         var text = new PointText({
//             point: middle + awayVector.normalize(away + lengthSize),
//             content: (prefix || '') + Math.floor(value * 1000) / 1000,
//             fillColor: 'black',
//             justification: 'center'
//         });
//         text.rotate(textAngle);
//         items.push(text);
//     }
// }

// var dashItem;

// function onMouseDown(event) {
//     var end = vectorStart + vector;
//     var create = false;
//     if (event.modifiers.shift && vectorItem) {
//         vectorStart = end;
//         create = true;
//     } else if (vector && (event.modifiers.option
//         || end && end.getDistance(event.point) < 10)) {
//         create = false;
//     } else {
//         vectorStart = event.point;
//     }
//     if (create) {
//         dashItem = vectorItem;
//         vectorItem = null;
//     }
//     processVector(event, true);
//     //	document.redraw();
// }

// function onMouseDrag(event) {
//     if (!event.modifiers.shift && values.fixLength && values.fixAngle)
//         vectorStart = event.point;
//     processVector(event, event.modifiers.shift);
// }

// function onMouseUp(event) {
//     processVector(event, false);
//     if (dashItem) {
//         dashItem.dashArray = [1, 2];
//         dashItem = null;
//     }
//     vectorPrevious = vector;
// }
// console.log('Viktor started');  

// var path = new Path.Circle({
//     center: view.center,
//     radius: 50,
//     strokeColor: 'black'
// });

// Path Items
var myPath = new Path();
myPath.strokeColor = 'Violet';
myPath.add(new Point(0,0));
myPath.add(new Point(100,50));

// Using Multiple arguments in the add function
myPath.add(new Point(100,50), new Point(0,100)); 

// Inserting Path to existing Path
var myPath = new Path();
myPath.strokeColor = 'black';
myPath.add(new Point(0, 0), new Point(100, 50));

// insert a segment between the two existing
// segments in the path:
myPath.insert(1, new Point(30, 40));

// Smoothing Paths
var path = new Path();
path.strokeColor = 'black';
path.add(new Point(30, 75)); 
path.add(new Point(30, 25)); 
path.add(new Point(80, 25));
path.add(new Point(80, 75));
path.closed = true;

// Select the path, so we can see its handles:
path.fullySelected = true;

// Create a copy of the path and move it 100pt to the right:
var copy = path.clone();
copy.fullySelected = true;
copy.position.x += 100;

// Smooth the segments of the copy:
copy.smooth();

var myPath = new Path();
myPath.strokeColor = 'black';
myPath.add(new Point(40, 90));
myPath.add(new Point(90, 40));
myPath.add(new Point(140, 90));

myPath.closed = true;

// Removing Segments and Paths
var myCircle = new Path.Circle(new Point(750, 50), 40);
myCircle.strokeColor = 'black';
myCircle.selected = true;

// myCircle.removeSegment(0);
// myCircle.remove();


// Creating Predefined Shapes
// Circle Shaped Paths
var myCircle = new Path.Circle(new Point(750,50), 20);
myCircle.fillColor = 'violet';
myCircle.strokeColor = 'black';

// Rectangle shaped Paths
var rectangle = new Path.Rectangle(new Point(720,190), new Point(780,100));
rectangle.strokeColor = 'brown';
rectangle.fillColor = '#e9e9ff';
// rectangle.selected = true;

// Rectangle shape with rounded corner
var rectangle = new Rectangle(new Point(850, 850), new Point(720, 790));
var radius = new Size(10, 10);
var path = new Path.Rectangle(rectangle, radius);
path.fillColor = 'orange';
path.strokeColor = 'black';

// Regular Polygon shaped path
// Create a triangle shaped path 
var triangle = new Path.RegularPolygon(new Point(750, 260), 3, 50);
triangle.fillColor = '#e9e9ff';
triangle.selected = true;

// Create a decagon shaped path 
var decagon = new Path.RegularPolygon(new Point(750, 350), 10, 50);
decagon.fillColor = '#e9e9ff';
decagon.selected = true;

// Using Color and Style
var myPath = new Path({
	segments: [[540, 315], [580, 380], [700, 220]],
	selected: true
});

// strokeColor
// myPath.strokeColor = 'orange'; // Or
myPath.strokeColor = new Color(0.5, 0, 0.5);

// fill Color
// myPath.fillColor = '#000055'

// StrokeWidth
myPath.strokeWidth = 5;

// StrokeCap
myPath.strokeCap = 'round';

// strokeJoin
myPath.strokeJoin = 'round';

// Dashed Stroke
myPath.dashArray = [10, 12];

var myStyle = {
	strokeColor: '#00ffff',
	fillColor: '#000000',
	strokeWidth: 50
};

var myCircle = new Path.Circle({
	center: [600, 150],
	radius: 50
});
myCircle.style = myStyle;


// var path;

// // The mouse has to drag at least 20pt
// // before the next drag event is fired:
// tool.minDistance = 20;

// function onMouseDown(event) {
// 	if (path) {
// 		path.selected = false;
// 	};
// 	path = new Path();
// 	path.strokeColor = 'black';
// 	path.fullySelected = true;
// }

// function onMouseDrag(event) {
// 	path.add(event.point);
// }

// function onMouseUp(event) {
// 	path.selected = false;
// 	path.smooth();
// }

// Drawing plus in rectangle using paperScript
var path = new Path();
path.strokeColor = 'black';

path.moveTo(new Point(0,200));   
path.lineTo(new Point(800,200));

var myPath = new Path();
myPath.strokeColor = 'black';
myPath.moveTo(new Point(400,400));
myPath.lineTo(new Point(400,0));
console.log(myPath);
// path.moveTo(new Point(400,400));
// path.lineTo(new Point(400,0));

// Drawing plus in rectangle using JavaScript
var canvas = document.getElementById("myCanvas2");
var ctx = canvas.getContext("2d");
ctx.moveTo(0,100);
ctx.lineTo(400,100);
ctx.moveTo(200,200);
ctx.lineTo(200,0);
ctx.stroke();
// ctx.strokeWidth('5px');
ctx.font = "18px Arial";
ctx.fillStyle = 'purple';
// ctx.fillText("Enstchuldigung",50,50);
// ctx.strokeText("Bis Bald",50,150);
// ctx.strokeColor = 'purple';

// Smoothing Simplifying and Flattening

var path = new Path({
	segments: [[130, 275], [130, 225], [180, 225], [180, 275]],
	strokeColor: 'black',
	closed: true 
});

// Select the path, so we can see its handles:
path.fullySelected = true;

var copy = path.clone();
copy.fullySelected = true;
copy.position.x += 380;

// copy.strokeColor = 'black';
copy.smooth();


// Flattening Paths
// with a radius of 35:
var path = new Path.Circle({
	center: [80, 350],
	radius: 35
});

// Select the path, so we can inspect its segments:
path.selected = true;

// Create a copy of the path and move it by 150 points:
var copy = path.clone();
copy.position.x += 50;

// Flatten the copied path, with a maximum error of 4 points:
copy.flatten(4);

// Create a rectangle shaped path with its top left point at
// {x: 75, y: 75} and a size of {width: 75, height: 75}
var path = new Path.Rectangle({
	point: [75, 75],
	size: [75, 75],
	strokeColor: 'black'
});

function onFrame(event) {
	// Each frame, rotate the path by 3 degrees:
	path.rotate(3);
}

// var path = new Path.Circle(new Point(180, 150), 35);

// project.activeLayer.lastChild.fillColor = 'red';

