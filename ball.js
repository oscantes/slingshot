class Ball {
  constructor(x, y, z, t) {
    this.pos = createVector(x, y);
    this.speed = createVector(z, t);
    this.r = 30;
  }

  display() {
    //speedometer function should be in sketch.js, not in ball.js
    noStroke();
    fill(50, 80, 50);
    textSize(20);
    text("speed.y: " + abs(ceil(this.speed.y)), 270, 370);
    text("bottom: " + (400 - ceil(this.pos.y) - this.r / 2), 270, 390);

    //ball
    noStroke();
    fill(200, 100, 120, 200);
    ellipse(this.pos.x, this.pos.y, this.r);
  }

  move() {
    //0.1-0.01 to multipy, if higher, drop speed gets lower
    air_friction_x = this.speed.x * 0.006;
    air_friction_y = this.speed.y * 0.01;

    //there is something not natural with acceleration of drop?
    this.speed.x = this.speed.x - air_friction_x;
    this.speed.y = this.speed.y + gravity - air_friction_y;

    this.pos.x = this.pos.x + this.speed.x;
    this.pos.y = this.pos.y + this.speed.y;
  }

  bounce() {
    //x.axis bounce
    if (this.pos.x + this.r / 2 >= width || this.pos.x - this.r / 2 <= 0) {
      this.speed.x = -this.speed.x;
      //(height-r/2)-(pos_x) this much elasticity happens

      //if it hits left & right border
      // if (this.speed.x > 0) {
      //   this.pos.x = width - this.r / 2;
      // }

      if (abs(this.speed.x) < 0.5) {
        //stops moving below 0.5
        this.speed.x = 0;
      }
    }

    //y.axis bounce
    if (this.pos.y + this.r / 2 >= height) {
      this.speed.y = -this.speed.y;
      //(height-r/2)-(pos_y) this much elasticity happens

      //if it hits ground with positive speed
      this.pos.y = height - this.r / 2;

      //if it hits sky with positive speed?
      //if (this.pos.y + this.r / 2 >= height || this.pos.y - this.r / 2 <= 0)

      if (abs(this.speed.y) < 0.5) {
        //stops moving below 0.5
        this.speed.y = 0;
      }
    }
  }
}
