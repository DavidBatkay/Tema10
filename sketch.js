let side = 1;
function drawStairs(n) {
  strokeWeight(1.5)
  if (side > 300) return null;
  push()
  noFill()
  rotate((PI / 5) * n)
  side = side - n / 0.9;
  square(0, 0, side);
  pop()
  return drawStairs(n - 0.5);
}
function setup() {
  createCanvas(innerWidth, innerHeight);
}
function draw() {
  translate(innerWidth / 2, innerHeight / 2)
  drawStairs(1);
  debugger;
}