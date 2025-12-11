function setup() {
  createCanvas(612, 792);
  background(255);
}

function star(x, y, num_points, inner_radius, outer_radius) {
  const angle = TWO_PI / num_points;
  const halfAngle = angle / 2.0;

  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * outer_radius;
    let sy = y + sin(a) * outer_radius;
    vertex(sx, sy);

    sx = x + cos(a + halfAngle) * inner_radius;
    sy = y + sin(a + halfAngle) * inner_radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function draw() {
  fill('#006838');
  stroke('black');
  strokeWeight(1);
  star(168, 90, 5, 50, 100);

  fill('#00A651');
  stroke('black');
  strokeWeight(1);
  star(496, 739, 5, 40, 90);

  fill('#00A651');
  stroke('black');
  strokeWeight(1);
  beginShape();
  vertex(460, 790);
  vertex(334, 573);
  vertex(263, 584);
  vertex(210, 539);
  vertex(0, 592);
  vertex(0, 794);
  endShape(CLOSE);

  fill(255);
  stroke('black');
  strokeWeight(1);
  beginShape();
  vertex(214, 540);
  vertex(238, 501);
  vertex(243, 547);
  vertex(379, 478);
  vertex(340, 577);
  endShape(CLOSE);
  
  fill('#8B5E3C');
  stroke('black');
  strokeWeight(1);
  beginShape();
  vertex(475, 276);
  vertex(532, 238);
  vertex(464, 147);
  vertex(379, 130);
  vertex(350, 68);
  vertex(125, 89);
  vertex(94, 155);
  vertex(62, 236); 
  vertex(179, 409); 
  vertex(112, 469); 
  vertex(197, 488); 
  vertex(158, 527); 
  vertex(285, 416); 
  vertex(274, 263); 
  vertex(458, 199); 
  endShape(CLOSE);
  
  fill(255);
  stroke('black');
  strokeWeight(1);
  beginShape();
  vertex(476, 281);
  vertex(475, 302);
  vertex(498, 362);
  vertex(466, 369);
  vertex(463, 386);
  vertex (469, 399); 
  vertex(415, 421); 
  vertex(464, 425); 
  vertex(454, 443); 
  vertex(456, 479);
  vertex(274, 451); 
  vertex(283, 292);
  endShape(CLOSE);
  
  fill(255);
  stroke('black');
  strokeWeight(1);
  beginShape();
  vertex(426, 329);
  vertex(413, 296);
  vertex(386, 291);
  vertex(358, 306);
  vertex(391, 327);
  vertex(412, 327); 
  endShape(CLOSE);
  
  fill('black');
  stroke('#8B5E3C');
  strokeWeight(5);
  ellipse(401, 309, 17, 17);
  
  fill(255);
  stroke('black');
  strokeWeight(1);
  beginShape();
  vertex(214, 266);
  vertex(162, 237);
  vertex(142, 301);
  vertex(162, 333);
  vertex(172, 358);
  vertex(210, 308); 
  endShape(CLOSE);
  
  noLoop(); 
}
