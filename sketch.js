let dragX, dragY, moveX, moveY;
var backgroundImage;
let drawWonderland = false; 
function preload() {
  backgroundImage = loadImage('assets/windows-xp-bliss.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // since we're going to be drawing the background image at the same size each
  // frame, we re-size it once here in setup()
  backgroundImage.resize(windowWidth, windowHeight);
}

function draw() {
  // this `image()` function call is just an example---you should change (or
  // remove) it in your submitted assignment
  colorMode(RGB);

  //wallpaper
  background(201, 200, 167);
  drawWallpaper(50, 110);
  drawWallpaper(150, 110);
  drawWallpaper(250, 110);
  drawWallpaper(350, 110);
  drawWallpaper(450, 110);
  drawWallpaper(550, 110);
  drawWallpaper(650, 110);
  drawWallpaper(750, 110);
  drawWallpaper(850, 110);
  drawWallpaper(950, 110);
  drawWallpaper(1050, 110);
  drawWallpaper(1150, 110);
  drawWallpaper(1250, 110);
  drawWallpaper(1350, 110);

  //floorboard
  fill(84, 58, 17);
  rect(40, 540, 1570, 330);

  //rug
  fill(110, 23, 13);
  rect(170, 560, 1100, 140);
  fill(19, 17, 74);
  rect(190, 570, 1060, 110);
  fill(173, 171, 111);
  rect(240, 585, 960, 65);
  fill(176, 18, 18);
  drawFlower(500,600);
  fill(176, 18, 18);
  drawFlower(300,650);
  fill(176, 18, 18);
  drawFlower(900,610);
  fill(176, 18, 18);
  drawFlower(600,650);
  fill(176, 18, 18);
  drawFlower(800,600);
  fill(176, 18, 18);
  drawFlower(1100,630);
  fill(255);
  drawFlower(220, 610);
  fill(255);
  drawFlower(390, 610);
  fill(255);
  drawFlower(989, 590);
  fill(255);
  drawFlower(700, 640);
  
  //mirror
  fill(43, 30, 21);
  rect(218, 150, 260, 190);
  fill(64, 44, 31);
  rect(226, 158, 244, 173);
  fill(153, 173, 172);
  rect(238, 168, 220, 150);

  cheshireCat();
  
  stroke(216, 237, 240);
  strokeWeight(3);
  line(280, 185, 320, 225);
  line(258, 190, 295, 225);   
  line(253, 215, 293, 255);
  strokeWeight(1);
  noStroke()

  //clock
  fill(59, 33, 15);
  rect(1150, 240, 97, 300);
  rect(1129, 510, 137, 15);
  rect(1123, 520, 150, 20);
  stroke(173, 114, 75);
  noFill();
  rect(1160, 260, 79, 245);
  rect(1167, 265, 65, 231);
  line(1135, 516, 1259, 516);
  line(1129, 530, 1267, 530);
  noStroke();

  fill(173, 114, 75);
  ellipse(1222, 364, 10);

  fill(59, 33, 15); 
  ellipse(1200, 134, 30, 20);

  stroke(173, 114, 75);
  strokeWeight(3);
  noFill();
  ellipse(1200, 134, 20, 10);
  strokeWeight(1);
  noStroke();
  
  fill(59, 33, 15);
  ellipse(1200, 150, 50, 30);

  stroke(173, 114, 75);
  strokeWeight(3);
  noFill();
  ellipse(1200, 150, 35, 15);
  strokeWeight(1);
  noStroke();

  fill(59, 33, 15);
  ellipse(1200, 220, 150);
  fill(227, 224, 222);   
  ellipse(1200, 220, 116);

  stroke(0);
  strokeWeight(3);
  line(1200, 220, 1200, 190);
  strokeWeight(1);

  //clock hands
  strokeWeight(3);
  stroke(0, 0, 0);
  line(1200, 220, dragX, dragY);
  stroke(0, 0, 0, 10);
  line(1200, 220, moveX, moveY);

  stroke(173, 114, 75);
  strokeWeight(3);
  noFill();
  ellipse(1200, 220, 132);
  strokeWeight(1);
  noStroke();

  //middle chairs
  fill(48, 38, 23);
  drawChair(380, 300);
  drawChair(630,300);
  drawChair(900,300);
  
  //back legs
  fill(64, 50, 31);
  rect(285, 433, 15, 150);
  rect(1150, 433, 15, 150);
  
  //side chair left
  fill(48, 38, 23);
  rect(170, 530, 140, 20);
  rect(160, 350, 20, 300);
  rect(290, 530, 20, 120);
 
  //side chair right
  fill(48, 38, 23);
  rect(1120, 530, 140, 20);
  rect(1240, 350, 20, 300);
  rect(1110, 530, 20, 120);

  //front legs
  fill(64, 50, 31);
  rect(260, 433, 20, 245);
  rect(1135, 433, 20, 245);
 
  //alice hair
  fill(209, 172, 38);
  ellipse(460, 370, 90, 120);
  
  //alice face
  fill(245, 231, 215);
  ellipse(460, 360, 75, 80);
  ellipse(430, 360, 30);
  ellipse(490, 360, 30);
 
  //lips
  fill(125, 48, 37);
  ellipse(460, 380, 20, 15);

  fill(245, 231, 215);
  ellipse(451.5, 376.8, 10, 8);
  ellipse(459.5, 376.2, 3, 5);
  ellipse(467.5, 376.8, 10, 8);
 
  ellipse(460, 370, 50, 15);
  ellipse(460, 389, 50, 15);

  //alice hair, fringe
  fill(209, 172, 38);
  rotate(0.8);
  ellipse(545, -78, 30, 58);
  rotate(-1.6)
  ellipse(93, 580, 30, 58);
  rotate(0.8);

  //alice body
  fill(245, 231, 215);
  rect(455, 388, 8, 70);
  ellipse(459, 449, 40, 90);

  //alice arms
  fill(245, 231, 215);
  rect(426, 420, 10, 60);
  rect(475, 420, 10, 60);
  ellipse(431, 480, 15);
  ellipse(480, 480, 15);
 
  //legs
  fill(245, 231, 215);
  rect(435, 490, 10, 80);
  rect(475, 490, 10, 80);

  //clothes, dress
  fill(70, 159, 207);
  ellipse(459, 449, 40, 90);
  ellipse(440, 426, 30, 35);
  ellipse(476, 426, 30, 35);
  quad(463, 447, 453, 447, 410, 518, 506, 518);
 
  fill(255);
  rect(444, 409, 6, 50);
  rect(468, 409, 6, 50);
  rect(450, 420, 20, 50);
  ellipse(459, 476, 42, 52);

  //clothes, socks, shoes
  fill(255);
  rect(435, 550, 10, 20);
  rect(475, 550, 10, 20);

  fill(0);
  ellipse(440, 575, 18, 35);
  ellipse(480, 575, 18, 35);
 
  fill(255);
  ellipse(440, 565, 9, 25);
  ellipse(480, 565, 9, 25);

  fill(0);
  rect(435, 560, 10, 4);
  rect(475, 560, 10, 4);

  //table
  fill(64, 50, 31);
  rect(260, 433, 900, 30);

  //food
  fill(242, 145, 193);
  drawCake(435, 410, 40, 20);
  stroke(252, 215, 111);
  strokeWeight(2);
  line(455, 410, 455, 430);
  line(455, 410, 465, 400);
  noStroke();

  //plate
  fill(230, 243, 252);
  drawPlate(414, 420);

  //chandelier string
  fill(233, 235, 211);
  stroke(233, 235, 211);
  strokeWeight(3);
  line(586, 10, 586, 80);
  line(858, 10, 858, 80);
  line(610, 90, 610, 120);
  line(820, 90, 820, 120);
  line(655, 130, 655, 160);
  line(775, 130, 775, 160);
  line(690, 170, 690, 200);
  line(746, 170, 746, 200);

  //chandelier rings
  noStroke();
  strokeWeight(1);
  rect(570, 80, 300, 15);
  rect(590, 120, 250, 15);
  rect(640, 160, 150, 15);
  rect(673, 200, 90, 15);

  //chandelier beads
  fill(230);
  ellipse(587, 105, 15);
  ellipse(607, 105, 15);
  ellipse(627, 105, 15);
  ellipse(647, 105, 15);
  ellipse(667, 105, 15);
  ellipse(687, 105, 15);
  ellipse(707, 105, 15);
  ellipse(727, 105, 15);
  ellipse(747, 105, 15);
  ellipse(767, 105, 15);
  ellipse(787, 105, 15);
  ellipse(807, 105, 15);
  ellipse(827, 105, 15);
  ellipse(847, 105, 15);

  ellipse(607, 145, 15);
  ellipse(627, 145, 15);
  ellipse(647, 145, 15);
  ellipse(667, 145, 15);
  ellipse(687, 145, 15);
  ellipse(707, 145, 15);
  ellipse(727, 145, 15);
  ellipse(747, 145, 15);
  ellipse(767, 145, 15);
  ellipse(787, 145, 15);
  ellipse(807, 145, 15);
  ellipse(827, 145, 15);

  ellipse(654, 185, 15);
  ellipse(674, 185, 15);
  ellipse(694, 185, 15);
  ellipse(714, 185, 15);
  ellipse(734, 185, 15);
  ellipse(754, 185, 15);
  ellipse(774, 185, 15);
 
  ellipse(690, 225, 15);
  ellipse(710, 225, 15);
  ellipse(730, 225, 15);
  ellipse(750, 225, 15);
 
  //light else dark
  lightsOn();

  //curtains
  
  if(drawWonderland == true){
    //sky
    fill(187, 128, 196);
    rect(10, 10, 1600, 800);
    drawClouds(210, 170);
    drawClouds(250, 200);
    drawClouds(821, 271);
    drawClouds(127, 328);
    drawClouds(981, 217);
    drawClouds(1182, 170);
    drawClouds(621, 90);
    drawClouds(1230, 400);

    //grass
    fill(57, 145, 45);
    rect(10, 450, 1600, 800);

    //back bush
    fill(34, 82, 13);
    ellipse(150, 430, 200, 120);
    ellipse(100, 400, 200, 130);
    ellipse(1150, 450, 200, 90);
    ellipse(1400, 450, 200, 100);
    ellipse(1280, 400, 200, 120);
    ellipse(400, 430, 400, 190);
    ellipse(400, 330, 200, 100);
    ellipse(600, 400, 500, 220);
    ellipse(850, 400, 500, 140);
    ellipse(1100, 400, 250, 90);

    scale(4);
    fill(84, 79, 232);
    drawFlower(50, 100);
    fill(255, 118, 97);
    drawFlower(250, 100);
    fill(242, 128, 208);
    drawFlower(320, 110);
    fill(111, 164, 237);
    drawFlower(140, 90);
    fill(237, 151, 111);
    drawFlower(210, 90);
    scale(1/4);

    //pavement
    fill(181, 174, 156);
    ellipse(670, 600, 1000, 100);

    //middle chairs
    fill(255);
    drawChair(380, 300);
    drawChair(630,300);
    drawChair(900,300);
  
    //back legs
    fill(255);
    rect(285, 433, 15, 150);
    rect(1150, 433, 15, 150);
  
    //side chair left
    fill(255);
    rect(170, 530, 140, 20);
    rect(160, 350, 20, 300);
    rect(290, 530, 20, 120);
 
    //side chair right
    fill(255);
    rect(1120, 530, 140, 20);
    rect(1240, 350, 20, 300);
    rect(1110, 530, 20, 120);

    //front legs
    fill(255);
    rect(260, 433, 20, 245);
    rect(1135, 433, 20, 245);

    //alice hair
    fill(209, 172, 38);
    ellipse(460, 370, 90, 120);
  
    //alice face
    fill(245, 231, 215);
    ellipse(460, 360, 75, 80);
    ellipse(430, 360, 30);
    ellipse(490, 360, 30);
  
    //lips
    fill(125, 48, 37);
    ellipse(460, 380, 20, 15);

    fill(245, 231, 215);
    ellipse(451.5, 376.8, 10, 8);
    ellipse(459.5, 376.2, 3, 5);
    ellipse(467.5, 376.8, 10, 8);
    ellipse(460, 375, 50, 15);
 
    //alice hair, fringe
    fill(209, 172, 38);
    rotate(0.8);
    ellipse(545, -78, 30, 58);
    rotate(-1.6)
    ellipse(93, 580, 30, 58);
    rotate(0.8);

    //alice body
    fill(245, 231, 215);
    rect(455, 388, 8, 70);
    ellipse(459, 449, 40, 90);

    //alice arms
    fill(245, 231, 215);
    rect(426, 420, 10, 60);
    rect(475, 420, 10, 60);
    ellipse(431, 480, 15);
    ellipse(480, 480, 15);
 
    //legs
    fill(245, 231, 215);
    rect(435, 490, 10, 80);
    rect(475, 490, 10, 80);

    //clothes, dress
    fill(70, 159, 207);
    ellipse(459, 449, 40, 90);
    ellipse(440, 426, 30, 35);
    ellipse(476, 426, 30, 35);
    quad(463, 447, 453, 447, 410, 518, 506, 518);
 
    fill(255);
    rect(444, 409, 6, 50);
    rect(468, 409, 6, 50);
    rect(450, 420, 20, 50);
    ellipse(459, 476, 42, 52);

    //clothes, socks, shoes
    fill(255);
    rect(435, 550, 10, 20);
    rect(475, 550, 10, 20);

    fill(0);
    ellipse(440, 575, 18, 35);
    ellipse(480, 575, 18, 35);
 
    fill(255);
    ellipse(440, 565, 9, 25);
    ellipse(480, 565, 9, 25);

    fill(0);
    rect(435, 560, 10, 4);
    rect(475, 560, 10, 4);

    //mad hatter
    //MH hair
    scale(1.5);
    fill(196, 47, 6);
    ellipse(460+18, 370-160, 120, 90);
  
    //MH face
    fill(245, 231, 215);
    ellipse(460+18, 360-160, 75, 80);
    ellipse(430+18, 360-160, 30);
    ellipse(490+18, 360-160, 30);
  
    //lips
    fill(125, 48, 37);
    ellipse(460+18, 380-160, 20, 15);

    fill(245, 231, 215);
    ellipse(451.5+18, 376.8-160, 10, 8);
    ellipse(459.5+18, 376.2-160, 3, 5);
    ellipse(467.5+18, 376.8-160, 10, 8);
 
    ellipse(460+18, 370-160, 50, 15);
    ellipse(460+18, 389-160, 50, 15);

    //hat
    scale(1/1.5);
    fill(38, 10, 74);
    ellipse(715, 265, 200, 50);
    rect(665, 145, 100, 130);
    ellipse(715, 145, 100, 60);
    fill(240, 176, 0);
    rect(665, 216, 100, 30);

    //MH body
    scale(1.5);
    fill(245, 231, 215);
    rect(455+18, 388-160, 8, 70);
    ellipse(459+18, 449-160, 40, 90);

    //MH arms
    fill(38, 10, 74);
    rect(426+18, 420-160, 10, 60);
    rect(475+18, 420-160, 10, 60);
    ellipse(431+18, 480-160, 15);
    ellipse(480+18, 480-160, 15);
 
    //legs
    fill(65, 5, 107);
    rect(435+18, 490-160, 10, 80);
    rect(475+18, 490-160, 10, 80);

    //clothes, dress
    fill(38, 10, 74);
    ellipse(459+18, 449-160, 40, 90);
    ellipse(440+18, 426-160, 30, 35);
    ellipse(476+18, 426-160, 30, 35);
    rect(435+18, 447-160, 50, 50);
 
    fill(188, 179, 199);
    rect(444+18, 409-160, 6, 50);
    rect(468+18, 409-160, 6, 50);
    rect(450+18, 420-160, 20, 50);

    //clothes, tie 
    scale(1/1.5);
    fill(33, 74, 10);
    ellipse(715, 380, 30, 20);
    quad(715, 380, 705, 420, 715, 460, 725, 420);
    scale(1.5)

    //clothes, socks, shoes
    fill(255);
    rect(435+18, 550-160, 10, 10);
    rect(475+18, 550-160, 10, 10);

    fill(0);
    ellipse(440+18, 575-160, 18, 35);
    ellipse(480+18, 575-160, 18, 35);
 
    fill(255);
    ellipse(440+18, 565-160, 9, 25);
    ellipse(480+18, 565-160, 9, 25);

    fill(0);
    rect(435+18, 560-160, 10, 4);
    rect(475+18, 560-160, 10, 4);
    scale(1/1.5);

    //table
    fill(255);
    rect(260, 433, 900, 30);

    //plate
    fill(215, 237, 245);
    rect(570, 355, 5, 70);
    rect(884, 355, 5, 70);

    //food
    fill(242, 145, 193);
    drawCake(420, 400, 40, 20);

    fill(228, 215, 245);
    drawCake(320, 400, 20, 20);
    drawCake(330, 380, 20, 20);
    drawCake(340, 400, 20, 20);

    fill(214, 86, 122);
    drawCake(545, 410, 15, 15);
    drawCake(563, 410, 15, 15);
    drawCake(583, 410, 15, 15);
    drawCake(545, 372, 15, 15);
    drawCake(565, 372, 15, 15);
    drawCake(578, 372, 15, 15);
    
    fill(235, 215, 68);
    drawCake(650, 400, 60, 20)

    fill(133, 184, 201);
    drawCake(765, 400, 40, 20);
    drawCake(770, 380, 30, 20);

    fill(235, 90,68);
    drawCake(855, 400, 60, 20);
    drawCake(855, 371, 60, 20);

    //plates
    fill(85, 99, 163);
    drawPlate(300, 420);
    drawPlate(400, 420);

    drawPlate(530, 420);
    drawPlate(530, 385);

    drawPlate(640, 420);

    drawPlate(745, 420);

    drawPlate(844, 420);
    drawPlate(844, 385);
    
    //teapot
    fill(85, 99, 163);
    ellipse(1010, 400, 80, 70);

    quad(1010, 430, 950, 380, 950, 350, 950, 400);

    noFill();
    stroke(85, 99, 163);
    strokeWeight(6);
    ellipse(1040, 400, 50, 30);
    noStroke();

    fill(51, 70, 156);
    ellipse(1010, 380, 60, 30);
    fill(22, 36, 99);
    ellipse(1010, 365, 30);
    

    //bush
    fill(34, 82, 13);
    ellipse(150, 700, 300, 180);
    ellipse(100, 600, 300, 180);
    ellipse(1150, 700, 400, 180);
    ellipse(1400, 700, 300, 500);
    ellipse(1300, 600, 300, 180);

    fill(255);
    drawFlower(210, 600);
    fill(255);
    drawFlower(100, 680);
    fill(176, 18, 18);
    drawFlower(145, 550);
    fill(255);
    drawFlower(210, 600);
    fill(176, 18, 18);
    drawFlower(1310, 680);
    fill(255);
    drawFlower(1110, 640);
    fill(176, 18, 18);
    drawFlower(1280, 580);

  }

  // you can keep this `drawWindow()` function call in your final sketch
  drawWindow();
}

function lightsOn(){
  if(mouseX < 920 && mouseX > 420 && mouseY < 240 && mouseY > 50){
    fill(252, 252, 146, 5);
    ellipse(730, 100, 1000, 800);
    fill(252, 252, 146, 10);
    ellipse(730, 100, 900, 600);
    fill(252, 252, 146, 15);
    ellipse(730, 100, 800, 500);
    fill(252, 252, 146, 20);
    ellipse(730, 100, 700, 400);
    fill(252, 252, 146, 25);
    ellipse(730, 100, 600, 300);
    fill(252, 252, 146, 30);
    ellipse(730, 100, 500, 200);
  }

  else{
    fill(0,0, 0, 40);
    rect(0, 0, 1800, 900);
  }
}

function mouseMoved(){
  if(mouseX < 1266 && mouseX > 1130 && mouseY < 285 && mouseY > 155){
    moveX = mouseX;
    moveY = mouseY;
  }
 
}

function mousePressed(){
   if(mouseX < 1266 && mouseX > 1130 && mouseY < 285 && mouseY > 155){
     dragX = mouseX;
     dragY = mouseY;
   }
 }

function cheshireCat(){
  if(mouseX < 480 && mouseX > 218 && mouseY < 340 && mouseY > 150){
    fill(255, 234, 94);
    ellipse(350, 260, 90, 40);

    fill(153, 173, 172);
    rect(300, 220, 100, 40);

    fill(255, 234, 94);
    ellipse(325, 234, 30, 10);

    fill(153, 173, 172);
    ellipse(325, 240, 30, 10);

    fill(255, 234, 94);
    ellipse(370, 234, 30, 10);

    fill(153, 173, 172);
    ellipse(370, 240, 30, 10);

  }
  
}

function drawPlate(x, y) {
  quad(x, y, x+10, y+13, x+70, y+13, x+80, y);

}

function drawCake(x, y, a, b){
  rect(x, y, a, b, 5, 5, 5, 5);

}

function drawWallpaper(x, y){
  strokeWeight(2);
  fill(189, 179, 149);
  noStroke();
  quad(x, y, x+50, y-65, x+100, y, x+50, y+65);
  quad(x, y + 130, x+50, (y-65) + 130, x+100, y + 130, x+50, (y+65)+130);
  quad(x, y + 260, x+50, (y-65) + 260, x+100, y + 260, x+50, (y+65)+260);
  quad(x, y + 390, x+50, (y-65) + 390, x+100, y + 390, x+50, (y+65)+390);
}

function drawFlower(a, b){
  noStroke();
  ellipse(a+15, b, 30, 10);
  ellipse(a-15, b, 30, 10);
  ellipse(a, b+18, 10, 30);
  ellipse(a, b-12, 10, 30);
  fill(255, 193, 5);
  ellipse(a, b, 10, 10);
}

function drawClouds(x, y){
  fill(237, 201, 242);
  ellipse(x, y, 280, 50);
  ellipse(x-30, y-20, 100, 60);
  ellipse(x-70, y-20, 80, 40);
  ellipse(x+60, y-20, 90, 40);
}

function drawChair(x, y){
  rect(1120, 530, 140, 20);
  rect(1240, 350, 20, 300);
  rect(1110, 530, 20, 120);

  rect(x, y, 20, 300);
  rect(x+140, y, 20, 300);
  
  rect(x, y, 140, 20);
  rect(x, y+180, 140, 25);

  rect(x+50, y, 20, 180);
  rect(x+90, y, 20, 180);
}

function keyPressed(){
  if((key == 'w') || (key == 'W')){
    drawWonderland = true;
  }
}

function keyReleased(){
  drawWonderland = false;
}

function drawWindow() {
  // start with a "push" so that we can go back to the current drawing state
  // (e.g. fill/stroke colour) at the end of the function
  push();
  fill(230);
  noStroke();

  // the width (and height) of the window "edge"
  var edge = 50;

  // draw the background "walls"
  rect(0, 0, edge, height);
  rect(0, 0, width, edge);
  rect(0, height-edge, width, edge);
  rect(width-edge, 0, edge, height);

  // now draw the window (including bars & sill)
  stroke(130, 82, 1);
  noFill();
  strokeWeight(10);
  rect(edge, edge, width-edge*2, height-edge*2);
  line(edge, height/2, width-edge, height/2);
  line(width/2, edge, width/2, height-edge);
  fill(150, 92, 1);
  rect(0+edge/2, height-edge*1.5, width-edge, edge/2);

  // pop drawing context back to original state (i.e. when `push()` was called)
  pop();
}

// when you hit the spacebar, what's currently on the canvas will be saved (as a
// "thumbnail.png" file) to your downloads folder
function keyTyped() {
  if (key === " ") {
    saveCanvas("thumbnail.png");
  }
}