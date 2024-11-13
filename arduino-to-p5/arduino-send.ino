int sensorPin = A3; //sensor connected to analog pin 3
int sensorValue = 0;       

void setup() {
  Serial.begin(9600);  
}

void loop() {
  sensorValue = analogRead(sensorPin);            // Read the potentiometer value (0-1023)
  int mappedValue = map(sensorValue, 0, 1023, 10, 300);  // Map it to a range for the circle size
  Serial.println(mappedValue);                    // Send the mapped value over Serial
  delay(100);                                     // Delay to avoid flooding Serial
}
