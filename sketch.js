function preload() {
  bg = loadImage("./bg_1920x1080.png");
  bClaw = loadImage("./bowserMoves/bowserClaw.png");
  bStomp = loadImage("./bowserMoves/bowserStomp.png");
  bWave = loadImage("./bowserMoves/bowserStarWave.png");
  bFire = loadImage("./bowserMoves/bowserFireBreath.png");
  bShield = loadImage("./bowserMoves/bowserStarShield.png");
  bHeal = loadImage("./bowserMoves/bowserHeal.png");
  hMario = loadImage("./hud/heartMario.png");
  fMario = loadImage("./hud/flower.png");
  hBowser = loadImage("./hud/heartBowser.png");
}

function setup() {
  // document.getElementById("bMove").style.visibility = "hidden";
  createCanvas(1920, 1080);
}

function draw() {
  imageMode(CORNER)
  background(bg);
  rectMode(CENTER);
  imageMode(CENTER);
  strokeWeight(7);
  fill("#FF3300");
  rect(600, 650, 200, 200, 30);
  rect(955, 650, 200, 200, 30);
  rect(1310, 650, 200, 200, 30);
  rect(600, 950, 200, 200, 30);
  rect(955, 950, 200, 200, 30);
  rect(1310, 950, 200, 200, 30);
  rect(224, 460, 396, 372, 30);
  fill("#FFBB00");
  rect(600, 650, 150, 150, 15);
  rect(955, 650, 150, 150, 15);
  rect(1310, 650, 150, 150, 15);
  rect(600, 950, 150, 150, 15);
  rect(955, 950, 150, 150, 15);
  rect(1310, 950, 150, 150, 15);
  rect(224, 372, 364, 160, 15);
  rect(224, 550, 364, 160, 15);
  image(b, 300, 300);
  image(bClaw, 600, 650);
  image(bWave, 600, 950);
  image(bStomp, 955, 650);
  image(bShield, 955, 950);
  image(bFire, 1310, 650);
  image(bHeal, 1310, 950);
  // button = createButton("yuyu");
  // button.position(100, 100);
  // button.mousePressed(yui);
}

function bMove(move) {
  switch (move) {
    case(0):
      alert("Claw");
      break;
    case(1):
      alert("Stomp");
      break;
    case(2):
      alert("Fire");
      break;
    case(3):
      alert("Wave");
      break;
    case(4):
      alert("Shield");
      break;
    case(5):
      alert("Heal");
  }
}

// function yui() {
//   alert(width);
// }
