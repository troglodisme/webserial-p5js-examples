const int sensorPin = A0;  // Analog pin connected to the potentiometer
int sensorValue = 0;       // Variable to store the sensor reading
int mappedValue = 0;       // Variable to store the mapped value for circle size

void setup() {
  Serial.begin(57600);  // Start Serial at 57600 baud
}

void loop() {
  sensorValue = analogRead(sensorPin);            // Read the potentiometer value (0-1023)
  mappedValue = map(sensorValue, 0, 1023, 10, 300);  // Map it to a range for the circle size
  Serial.println(mappedValue);                    // Send the mapped value over Serial
  delay(100);                                     // Delay to avoid flooding Serial
}