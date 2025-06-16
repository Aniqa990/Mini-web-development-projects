var xPositions = [100, 200];

var draw = function() {
    if (mouseIsPressed) {
        xPositions[2] = mouseX;
    }
    noStroke();
    background(212, 254, 255);
    
    stroke(64, 117, 207);
    fill(196, 33, 255);
    for (var i = 0; i < xPositions.length; i++) { 
        line(xPositions[i], 120, 194, 285);
        ellipse(xPositions[i], 104, 32, 46);
    }
}

var paintBrush = {
    x: 100,
    y: 300,
    img: getImage("space/plus")
};

var paintCanvas = function() {
    imageMode(CENTER);
    image(paintBrush.img, paintBrush.x, paintBrush.y);
};

mouseMoved = function() {
    paintBrush.x = mouseX;
    paintBrush.y = mouseY;
    paintCanvas();
    
};