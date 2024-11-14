let port;        // Variable to hold serial port object
let connectBtn;  // Button to connect/disconnect from Arduino
let circleSize = 0; // Variable to hold the circle size

function setup() {
  createCanvas(400, 400);  
  background(220);         

  port = createSerial();

  connectBtn = createButton('Connect to Arduino');
  connectBtn.position(20, 360);
  connectBtn.mousePressed(connectBtnClick);
}

function draw() {
  background(220);  

  let val = port.readUntil("\n"); //read each line

  if (val.length > 0) {
    circleSize = val; // Update circle size with new value
    text(val, 20, 20);
  }

  circle(200, 200, circleSize); // Draw the circle with the stored size

  connectBtn.html(port.opened() ? 'Disconnect' : 'Connect to Arduino');
}

function connectBtnClick() {
  if (!port.opened()) {
    port.open('Arduino', 9600);
  } else {
    port.close();
  }
}
