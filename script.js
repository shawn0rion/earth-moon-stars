var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const STAR_COUNT = 100;
const STAR_SIZE = 2;
let stars = [];

class Star {
  constructor(x, y, size, color, angle) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.angle = angle;
  }

  draw() {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.size, this.size);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

const earth = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 80,
  color: "blue",
};

const moon = {
  gap: 200,
  x: canvas.width / 2 + 100,
  y: canvas.height / 2,
  angle: Math.random() * 360,
  radius: 20,
  color: "white",
  rate: 0.005,
};

function generateStars() {
  for (let star = 0; star < STAR_COUNT; star++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * STAR_SIZE;
    const color = "yellow";
    const angle = Math.random() * 90;
    stars.push(new Star(x, y, size, color, angle));
    // while loop (always true)
    // new star with random x, y, and size

    // check if the stars contains some overlapping star
  }
}

function drawBall(x, y, radius, startAngle, endAngle, color) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}

function updateMoon() {
  moon.x = earth.x + moon.gap * Math.cos(moon.angle);
  moon.y = earth.y + moon.gap * Math.sin(moon.angle);

  moon.angle += moon.rate;
}
function drawStars() {
  stars.forEach((star) => star.draw());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  updateMoon();

  drawStars();
  drawBall(earth.x, earth.y, earth.radius, 0, Math.PI * 2, earth.color);
  drawBall(moon.x, moon.y, moon.radius, 0, Math.PI * 2, moon.color);
}

generateStars();
setInterval(animate, 10);
