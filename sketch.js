function draw() {
    background(237, 34, 93);
    fill(0);
  
    if (mouseIsPressed === true) {
      ellipse(50, 50, 50, 50);
    } else {
      rect(25, 25, 50, 50);
    }
  
    print(mouseIsPressed);
    describe(`black 50-by-50 rect becomes ellipse with mouse click/press.
      fuchsia background.`);
  }