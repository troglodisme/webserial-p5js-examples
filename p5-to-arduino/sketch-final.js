let port;              // Variable to hold serial port object
let connectBtn;        // Button to connect/disconnect from Arduino
let brightness = 0;    // Variable to store the brightness value to send
let slider;

function setup() {
  createCanvas(400, 400);
  background(220);

  port = createSerial();
  
  slider = createSlider(0, 255);
  slider.position(10, 10);
  slider.size(80);

  // Creates a connect button for user to open/close the serial port connection
  connectBtn = createButton('Connect to Arduino');
  connectBtn.position(20, 360);
  connectBtn.mousePressed(connectBtnClick);
}

function draw() {
  background(150);

  let brightness = slider.value();

  // Map `mouseX` to a brightness value and display an ellipse with this brightness
  console.log(brightness);
  fill(255, brightness);
  ellipse(200, 200, 100);

  // Send brightness value to Arduino every 10 frames (to slow down data rate)
  if (frameCount % 10 == 0) {
    let brightnessStr = String(brightness);    // Convert brightness to string
    port.write(brightnessStr + '\n');          // Send brightness with newline
  }

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