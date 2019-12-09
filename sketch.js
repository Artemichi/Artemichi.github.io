function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB);
  n = 3;
  d = 66.75;
  na = 0.00001;
  da = 0.002;
  a = 0;
  if (window.innerWidth == 320) {
    vScale = 0.5;
  } else if (window.innerWidth < 767) {
    vScale = 0.6;
  } else if (window.innerWidth < 1199) {
    vScale = 0.9;
  } else {
    vScale = 1;
  }
}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  for (let i = 0; i < 3; i++) {
    rotate(a + i);
    stroke(100 * i, 100, 100);
    fill(0);
    beginShape();
    for (let i = 0; i < 300; i++) {
      let k = i * d;
      let r = i * sin(n * k) * vScale;
      let x = r * cos(k);
      let y = r * sin(k);
      vertex(x, y);
    }
    endShape(CLOSE);
  }

  n += na;
  d += da;
  a += 0.1;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setup();
  draw();
}
