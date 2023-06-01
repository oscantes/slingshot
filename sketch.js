//v0.10 to v0.12:
//added Ball class & balls array
//added x-axis movement
//added drag and release

//inelastic collision physics should be implemented
//edges can act like a huge mass in an inelastic collision?
//if constructional changes will be made, make them quick
//mouse_released=false are these necessary?

let balls = [];
let air_friction_x; //related to speed_x //does this have to be global var?
let air_friction_y; //related to speed_y
let gravity = 0.25; //always there for y-axis
let line_start_x;
let line_start_y;
let ball_release_x; //ball fire start pos?
let ball_release_y;
let mouse_released = false;
let v1;
let v2;

function setup() {
  //frameRate(10);
  createCanvas(500, 600);
}

function draw() {
  background(230);

  for (var i of balls) {
    i.display();
    i.move();
    i.bounce();
  }

  if (mouseIsPressed) {
    mouse_released = false;
    //do not create if mouse isn't inside canvas
    stroke(150, 150, 150);
    strokeWeight(3);
    line(line_start_x, line_start_y, mouseX, mouseY);

    //ball
    noStroke();
    fill(200, 100, 120, 150);
    ellipse(mouseX, mouseY, 30);
  }
  //console.log(v1);
}

function mousePressed() {
  mouse_released = false;
  line_start_x = mouseX;
  line_start_y = mouseY;
  //v1 = createVector(line_start_x, line_start_y);
}

function mouseReleased() {
  mouse_released = true;
  //ball_release doesn't seem necessary
  ball_release_x = mouseX;
  ball_release_y = mouseY;
  //v2 = createVector(ball_release_x, ball_release_y);
  balls.push(
    new Ball(
      ball_release_x,
      ball_release_y,
      -(ball_release_x - line_start_x),
      -(ball_release_y - line_start_y)
    )
  );
  //calculate angle and speed according to line_start & ball_release
  //or make that line a vector, reverse it and add to ball
  //how to reference an abject or get an object of a class from another js file
}
