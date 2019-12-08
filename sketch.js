function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  // n = 3.77;
  // d = 33.56;
  n = 0;
  d = 70;
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
  alp = 100;
  colors = [
    {
      r: 238,
      g: 252,
      b: 87
    },
    {
      r: 227,
      g: 101,
      b: 136
    },
    {
      r: 255,
      g: 34,
      b: 12
    },
    {
      r: 243,
      g: 66,
      b: 19
    }
  ];
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  for (let i = 0; i < 4; i++) {
    rotate(a + i);
    stroke(colors[i].r, colors[i].g, colors[i].b, alp);
    noFill();
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
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setup();
  draw();
}
