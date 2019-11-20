function setup() {
	createCanvas(windowWidth, windowHeight)
	angleMode(DEGREES)
	n = 3
	d = 29.55
	na = 0.0001
	da = 0.001
	a = 0

	if (window.innerWidth == 320) {
		vScale = 0.5
	} else if (window.innerWidth < 767) {
		vScale = 0.6
	} else if (window.innerWidth < 1199) {
		vScale = 0.9
	} else {
		vScale = 1
	}
	invert = false
	alp = 100

	colors = [{
			r: 38,
			g: 70,
			b: 83
		},
		{
			r: 42,
			g: 157,
			b: 143
		},
		{
			r: 231,
			g: 200,
			b: 10
		},
		{
			r: 21,
			g: 20,
			b: 110
		}
	]
}

function draw() {
	background(0)
	translate(width / 2, height / 2)

	for (let i = 0; i < 4; i++) {
		rotate(a + i)
		stroke(
			colors[i].r,
			colors[i].g,
			colors[i].b,
			alp)
		noFill()
		beginShape()
		for (let i = 0; i < 300; i++) {
			let k = i * d
			let r = i * sin(n * k) * vScale
			let x = r * cos(k)
			let y = r * sin(k)
			vertex(x, y)
		}
		endShape(CLOSE)
	}

	if (n > 3.037) {
		invert = true
	}

	if (n < 3) {
		invert = false
	}

	if (!invert) {
		n += na
		d += da
	} else {
		n -= na
		d -= da
	}
	a += 0.1
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
	setup()
	draw()
}