let port;              // Variable to hold serial port object
let connectBtn;        // Button to connect/disconnect from Arduino

function setup() {
  createCanvas(400, 400);
  background(220);

  port = createSerial();

  // Creates a connect button for user to open/close the serial port connection
  connectBtn = createButton('Connect to Arduino');
  connectBtn.position(20, 360);
  connectBtn.mousePressed(connectBtnClick);
}

function draw() {
  background(150);

  port.write(your value + '\n');   // Send brightness with newline

  // Update button label based on connection status
  connectBtn.html(port.opened() ? 'Disconnect' : 'Connect to Arduino');
}

function connectBtnClick() {
  // Toggle connection to Arduino
  if (!port.opened()) {
    port.open('Arduino', 9600);               // Open serial port at 9600 baud
  } else {
    port.close();                              // Close serial port
  }
}