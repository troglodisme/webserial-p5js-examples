let port;        // Variable to hold serial port object
let connectBtn;  // Button to connect/disconnect from Arduino

function setup() {
  createCanvas(400, 400);  

  port = createSerial();

  connectBtn = createButton('Connect to Arduino');
  connectBtn.position(20, 360);
  connectBtn.mousePressed(connectBtnClick);
}

function draw() {
  background(220);

  text("let's get values from arduino", 50, 50);
}

function connectBtnClick() {
  if (!port.opened()) {
    port.open('Arduino', 9600);
  } else {
    port.close();
  }
}
