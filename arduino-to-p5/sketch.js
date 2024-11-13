let port;        // Variable to hold serial port object
let connectBtn;  // Button to connect/disconnect from Arduino

function setup() {
  createCanvas(400, 400);  
  background(220);         

  // Initialize the serial port object
  port = createSerial();

  // Create a button to connect/disconnect the serial port
  connectBtn = createButton('Connect to Arduino');
  connectBtn.position(80, 200);
  connectBtn.mousePressed(connectBtnClick); // Event listener for button click
}

function draw() {
  background(220);  

  // Read serial data until a newline character ("\n")
  let val = port.readUntil("\n");
  if (val.length > 0) {
    // Display the incoming data at the bottom of the canvas
    text(val, 10, height - 20);

    // Add any further actions with the incoming data here
    // For example, update the size of an element on the canvas

    circle(100, 100, val);
  }

  // Update button label based on connection status
  connectBtn.html(port.opened() ? 'Disconnect' : 'Connect to Arduino');
}

// Function to handle connect/disconnect button clicks
function connectBtnClick() {
  if (!port.opened()) {
    port.open('Arduino', 9600); // Open port at 57600 baud if closed
  } else {
    port.close();                 // Close port if already open
  }
}