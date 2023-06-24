function setup() {
  createCanvas(displayWidth, displayHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(displayWidth/2, displayHeight/2);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();
  let ampm = '';
  strokeWeight(8);
  stroke(255, 100, 150);
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  stroke(150, 100, 255);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);

  stroke(150, 255, 100);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke(255, 100, 150);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke(150, 100, 255);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(150, 255, 100);
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0, 0);

  rotate(90);

  fill(255);
  noStroke();
   ampm = hr> 12 ? ' PM' : ' AM'
   hr = hr<10? '0' + hr : hr
   mn = mn<10? '0' + mn : mn
   textSize(32);
   textAlign(CENTER,CENTER);
  text(hr + ':' + mn + ':' + sc + ampm, -15, displayHeight/ 4);


}
