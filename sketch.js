
let shapes = [];
let ctx;
let colors = ['#d63230', '#f7d002', '#1A53C0', '#332434', '#e85625', '#55bbed', '#f595ad'];

function setup() {
	createCanvas(1900, 1000);
	rectMode(CENTER);
	strokeCap(PROJECT);
	ctx = drawingContext;
	let side = max(width , height); 
	let count = 30;
	let cellSize = side / count;
	for (let j = 0; j < count; j++) {
		for (let i = 0; i < count; i++) {
			let x = cellSize * i + (cellSize / 2) + (width - side) / 2;
			let y = cellSize * j + (cellSize / 2) + (height - side) / 2;
			shapes.push(new Shape(x, y, cellSize * 0.5));
		}
	}
}

function draw() {
	// background('#ffffff');
	for (let i of shapes) {
		i.run();
	}
}

function drawShape(x, y, w, n, clr1, clr2) {
	push();
	translate(x, y);
	noStroke();
	noFill();
	if (n == 0) {
		fill(clr1);
		circle(0, 0, w);
		fill(clr2);
		circle(0, 0, w * 0.5);
		fill(clr1);
	} else if (n == 1) {
		fill(clr1);
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				let xx = map(i, 0, 2, -w * 0.375, w * 0.375);
				let yy = map(j, 0, 2, -w * 0.375, w * 0.375);
				circle(xx, yy, w * 0.25);
			}
		}
		fill(clr2);
		circle(0, 0, w * 0.25);
	} else if (n == 2) {
		fill(clr1);
		circle(0, 0, w * 0.7);
		fill(clr2);
		square(-w * 0.4, -w * 0.4, w * 0.2);
		square(-w * 0.4, w * 0.4, w * 0.2);
		square(w * 0.4, -w * 0.4, w * 0.2);
		square(w * 0.4, w * 0.4, w * 0.2);
	} else if (n == 3) {
		fill(clr1);
		arc(0, 0, w, w, 0, TAU * 0.75, PIE);
		fill(clr2);
		square(w * 0.25, -w * 0.25, w * 0.5);
	} else if (n == 4) {
		fill(clr1);
		rect(0, 0, w * 0.5, w);
		fill(clr2);
		circle(w * 0.375, 0, w * 0.25);
		circle(-w * 0.375, 0, w * 0.25);
	} else if (n == 5) {
		fill(clr1);
		beginShape();
		vertex(0, -w / 2);
		vertex(w / 2, 0);
		vertex(0, w / 2);
		vertex(-w / 2, 0);
		endShape();
		fill(clr2);
		circle(0, 0, w * 0.25);
	} else if (n == 6) {
		fill(clr1);
		arc(0, 0, w * 0.5, w * 0.5, 0, PI);
		fill(clr2);
		beginShape();
		vertex(-w / 2, 0);
		for (let a = PI; a < TAU; a += TAU / 360) {
			vertex(w * 0.25 * cos(a), w * 0.25 * sin(a));
		}
		vertex(w / 2, 0);
		vertex(w / 2, -w / 2);
		vertex(-w / 2, -w / 2);
		endShape();
	} else if (n == 7) {
		fill(clr1);
		arc(0, 0, w, w, 0, PI / 2);
		arc(0, 0, w, w, PI, PI + PI / 2);
		fill(clr2);
		rect(w / 4, -w / 4, w / 2, w / 2);
		rect(-w / 4, w / 4, w / 2, w / 2);
	} else if (n == 8) {
		fill(clr1);
		arc(0, 0, w, w, 0, PI);
		circle(0, -w * 0.25, w * 0.3);
		fill(clr2);
		circle(0, w * 0.25, w * 0.3);
	} else if (n == 9) {
		fill(clr1);
		rect(0, 0, w * 0.6, w * 0.6);
		fill(clr2);
		circle(w * 0.35, w * 0.35, w * 0.3);
		circle(-w * 0.35, w * 0.35, w * 0.3);
		circle(w * 0.35, -w * 0.35, w * 0.3);
		circle(-w * 0.35, -w * 0.35, w * 0.3);
	} else if (n == 10) {
		stroke(clr1);
		strokeWeight(w * 0.2);
		arc(0, 0, w * 0.5, w * 0.5, 0, PI * 1.5);
		noStroke();
		fill(clr2);
		circle(w * 0.25, -w * 0.25, w * 0.5);
	} else if (n == 11) {
		stroke(clr1);
		strokeWeight(w * 0.25);
		arc(0, 0, w * 0.75, w * 0.75, 0, PI);
		stroke(clr2);
		arc(0, 0, w * 0.75, w * 0.75, PI, TAU);
	} else if (n == 12) {
		fill(clr1);
		beginShape();
		vertex(-w / 2, -w / 2);
		vertex(w / 2, -w / 2);
		vertex(-w / 2, w / 2);
		beginContour();
		for (let a = TAU; a > 0; a -= TAU / 180) {
			vertex(-w * 0.25 + w * 0.15 * cos(a), -w * 0.25 + w * 0.15 * sin(a));
		}
		endContour();
		endShape();
		fill(clr2);
		circle(w * 0.25, w * 0.25, w * 0.25);
	} else if (n == 13) {
		stroke(clr1);
		strokeWeight(w * 0.2);
		rect(0, 0, w * 0.8, w * 0.8);
		noStroke();
		fill(clr2);
		circle(0, 0, w * 0.3);
	} else if (n == 14) {
		fill(clr1);
		triangle(-w * 0.5, -w * 0.5, -w * 0.5, w * 0.5, w * 0.1, 0);
		fill(clr2);
		circle(w * 0.3, 0, w * 0.4);
	} else if (n == 15) {
		fill(clr1);
		circle(0, 0, w);
		fill(clr2);
		beginShape();
		vertex(w * 0.25, 0);
		vertex(0, -w * 0.25);
		vertex(-w * 0.25, 0);
		vertex(0, w * 0.25);
		endShape();
	} else if (n == 16) {
		fill(clr1);
		square(-w / 4, -w / 4, w / 2);
		square(w / 4, w / 4, w / 2);
		fill(clr2);
		rect(-w * 0.25, 0, w * 0.2, w * 0.4);
		rect(w * 0.25, 0, w * 0.2, w * 0.4);
	} else if (n == 17) {
		fill(clr1);
		for (let i = 0; i < 4; i++) {
			rotate(TAU / 4);
			arc(-w / 2, -w / 2, w, w, 0, PI / 2);
		}
		fill(clr2);
		circle(0, 0, w * 0.25);
	} else if (n == 18) {
		fill(clr1);
		square(w * 0.1, w * 0.1, w * 0.8);
		fill(clr2);
		circle(-w * 0.25, -w * 0.25, w * 0.5);
	} else if (n == 19) {
		fill(clr1);
		arc(-w / 2, -w / 2, w * 2, w * 2, 0, PI / 2);
		fill(clr2);
		circle(0, 0, -w * 0.5);
	} else if (n == 20) {
		stroke(clr1);
		strokeWeight(w * 0.25);
		beginShape();
		vertex(0, -w * 0.375);
		vertex(w * 0.375, -w * 0.375);
		vertex(w * 0.375, w * 0.375);
		vertex(0, w * 0.375);
		endShape();
		noStroke();
		fill(clr2);
		rect(-w * 0.125, 0, w * 0.25, w * 0.5);
	} else if (n == 21) {
		fill(clr1);
		circle(-w * 0.25, -w * 0.25, w * 0.5);
		circle(w * 0.25, w * 0.25, w * 0.5);
		fill(clr2);
		square(-w * 0.25, w * 0.25, w * 0.5);
		square(w * 0.25, -w * 0.25, w * 0.5);
	} else if (n == 22) {
		fill(clr1);
		beginShape();
		vertex(-w / 2, -w / 2);
		vertex(0, -w / 2);
		vertex(-w / 2, 0);
		endShape();
		beginShape();
		vertex(w / 2, w / 2);
		vertex(0, w / 2);
		vertex(w / 2, 0);
		endShape();
		fill(clr2);
		circle(0, 0, w * 0.4);
	} else if (n == 23) {
		fill(clr1);
		square(0, 0, w / 3);
		circle(w / 3, -w / 3, w / 3);
		circle(-w / 3, w / 3, w / 3);
		fill(clr2);
		square(w / 3, w / 3, w / 3);
		square(-w / 3, -w / 3, w / 3);
	} else if (n == 24) {
		fill(clr1);
		rect(w / 4, 0, w * 0.5, w);
		fill(clr2);
		circle(-w / 4, -w / 4, w / 2);
		circle(-w / 4, w / 4, w / 2);
	}
	pop();
}

function easeInOutExpo(x) {
	return x === 0
		? 0
		: x === 1
			? 1
			: x < 0.5 ? Math.pow(2, 20 * x - 10) / 2
				: (2 - Math.pow(2, -20 * x + 10)) / 2;
}

class Shape {
	constructor(x, y, w) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.t1 = 30;
		this.t2 = this.t1 + 5;
		this.t3 = this.t2 + 30;
		this.t4 = this.t3 + 5;
		this.shift1 = 0;
		this.shift2 = this.w;
		this.init();
		this.t = -int((dist(width/2, height/2, this.x, this.y)/4));

		this.scaleY1 = 1;
		this.scaleY2 = 1;
		this.direction1 = int(random(4)) * (TAU / 4);
		this.shapeType1 = int(random(25));
		this.angle1 = int(random(4)) * (TAU / 4);
		this.color1 = random(colors);
		this.color2 = random(colors);
		while (this.color1 == this.color2) {
			this.color1 = random(colors);
			this.color2 = random(colors);
		}
	}

	show() {
		push();
		translate(this.x, this.y);
		stroke(0);
		strokeWeight(0);
		noFill();
		rect(0, 0, this.w, this.w);
		ctx.clip();
		fill(0);

		push();
		translate(this.shift1 * cos(this.direction1), this.shift1 * sin(this.direction1));
		if (this.direction1 == 0 || this.direction1 == PI) {
			scale(1, this.scaleY1);
		} else {
			scale(this.scaleY1, 1);
		}
		rotate(this.angle1);
		drawShape(0, 0, this.w, this.shapeType1, this.color1, this.color2);
		pop();

		push();
		translate(this.shift2 * cos(this.direction2), this.shift2 * sin(this.direction2));
		if (this.direction2 == 0 || this.direction2 == PI) {
			scale(1, this.scaleY2);
		} else {
			scale(this.scaleY2, 1);
		}
		rotate(this.angle2);
		drawShape(0, 0, this.w, this.shapeType2, this.color3, this.color4);
		pop();

		pop();
	}

	move() {
		this.t++;
		if (0 < this.t && this.t < this.t2) {
			let n = norm(this.t, 0, this.t2 - 1);
			this.shift1 = lerp(0, this.w * 1.5, easeInOutExpo(n));
			this.scaleY1 = lerp(1, 0.0, sin(easeInOutExpo(n) * PI));
		} else if (this.t1 < this.t && this.t < this.t3) {
			let n = norm(this.t, this.t1, this.t3 - 1);
			this.shift2 = lerp(this.w * 1.5, 0, easeInOutExpo(n));
			this.scaleY2 = lerp(1, 0.0, sin(easeInOutExpo(n) * PI));
		} else if (this.t > this.t3) {
			this.init();
		}
	}

    windowResize(){
        resizeCanvas(windowWidth, windowHeight);
        shapes = [];
        setup();
    }
	run() {
		this.show();
		this.move();
	}

	init() {
		this.t = -150;
		this.shift1 = 0;
		this.shift2 = this.w * 1.5;
		this.direction1 = this.direction2;
		this.direction2 = int(random(4)) * (TAU / 4);
		this.shapeType1 = this.shapeType2;
		this.shapeType2 = int(random(25));
		this.angle1 = this.angle2;
		this.angle2 = int(random(4)) * (TAU / 4);
		this.color1 = this.color3;
		this.color2 = this.color4;
		this.color3 = random(colors);
		this.color4 = random(colors);
		while (this.color3 == this.color4) {
			this.color3 = random(colors);
			this.color4 = random(colors);
		}
	}
}