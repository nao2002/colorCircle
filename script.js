let positionsX = [];
let positionsY = [];
let distances = [];
let colors = [];
let drawPosX = [];
let drawPosY = [];

function draw() {
  stroke(0);
  background(0);

  fill(255);
  
  for (let c=0;c<positionsX.length;c++) {
    if (distances[c] >= 0) {
      for (let i=0;i<((width/10)+1);i++){
        for (let j=0;j<((height/10)+1);j++){
          //２点間の距離三平方ver
          // let d = Math.sqrt((i*10 - positionsX[c])**2 + (j*10 - positionsY[c])**2)
          //2点間の距離関数ver
          let d = dist(i*10,j*10,positionsX[c],positionsY[c]);
          if (d <= distances[c] && distances[c] >= 0) {
            let alpha = 255-(d-distances[c])*-3;
            if (alpha > 0 && i*10 > -11 && i*10 < width+11 && j * 10 > -11 && j * 10 < height+11) { 
              fill(colors[0+c*3],colors[1+c*3],colors[2+c*3],255 - (d - distances[c])*-3);
              ellipse(i*10, j*10, 10);
            }
          }
        }
      }
      distances[c] += 5;
      if (distances[c] > Math.sqrt(windowWidth**2+windowHeight**2)+50) {
        distances.splice(c,1);
        positionsX.splice(c,1);
        positionsY.splice(c,1);
        colors.splice(c,3);
      }
    }
  }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
  
    background(0, 0, 0); 
  
    noStroke();
}

function mousePressed() {
    positionsX.push(mouseX)
    positionsY.push(mouseY)
    distances.push(0);
    colors.push(random(255),random(255),random(255));
}