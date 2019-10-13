
function setup() {
	createCanvas(windowWidth, windowHeight)
	angleMode(DEGREES)
	n = random(1, 10)
	d = random(1,200)
	scale = width * 0.25
}

function draw() {

	background(0)
	translate(width/2, height/2)

	stroke(222,0,0)
	strokeWeight(0.5)
	noFill()

	beginShape()
	for (let i = 0; i < 722; i++) {
		let k = i * d
		let r = scale * sin(n*k)
		let x = r * cos(k)
		let y = r * sin(k)
		vertex(x, y)
	}
	endShape(CLOSE)

	n+=0.0000001
	d+=0.0001
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}