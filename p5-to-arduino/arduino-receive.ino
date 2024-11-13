String data = "";
int ledPin = 9;  

void setup() {
  Serial.begin(115200);
  pinMode(ledPin, OUTPUT); 

}

void loop() {
  // Read serial input:
  if (Serial.available() > 0) { //if serial is available
    data = Serial.readStringUntil('\n'); //read until a newline
    if (data.length() > 0) {

      // this would be the place to use the incoming value to drive an output
      int brightness = data.toInt(); //convert the String to an int
      analogWrite(ledPin, brightness);
      delay(15);
    }
  }
}
