
function setup() {
	createCanvas(windowWidth, windowHeight)
	angleMode(DEGREES)
	n = 8
	d = 67
	a = 0
	scale = width * 0.2
}

function draw() {

	background(0)
	
	translate(width/2, height/2)
	rotate(a)
	stroke(222,0,0)
	noFill()

	beginShape()
	for (let i = 0; i < 361; i++) {
		let k = i * d
		let r = scale * sin(n*k)
		let x = r * cos(k)
		let y = r * sin(k)
		vertex(x, y)
	}
	endShape(CLOSE)

	n+=0.000001
	d+=0.0001
	
	a += 0.1
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}