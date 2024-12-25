int pin;
bool value;
float time;
void setup() {
  pin= 13;
  pinMode(pin, OUTPUT);
}

void loop() {
  time=2.5;
  value = 1;
  digitalWrite(pin, value);
  delay(time*100);
  value = 0;
  digitalWrite(pin, value);
  delay(time*100);
}
