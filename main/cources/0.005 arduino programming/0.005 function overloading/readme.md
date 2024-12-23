# Function Overloading in Arduino Uno

Function overloading in Arduino Uno allows you to define multiple functions with the same name but different parameters. It enables you to use the same function name for different purposes depending on the type and number of arguments passed to the function.

### What is Function Overloading?

Function overloading is a feature that allows you to create multiple functions with the same name, but the function signature (the number or type of parameters) must be different. The correct function to be invoked is determined by the number and type of arguments passed.

In Arduino programming, function overloading is commonly used when you want to perform similar tasks with different types of input. For example, you might want a function to handle both integer and float values without needing to create separate function names.

---

### Syntax for Function Overloading

Function overloading is implemented by defining functions with the same name but different parameter lists. For example:

```cpp
int add(int a, int b) {
  return a + b;
}

float add(float a, float b) {
  return a + b;
}

void setup() {
  Serial.begin(9600);
  int intSum = add(5, 3);          // Calls int version
  float floatSum = add(5.5, 3.3);  // Calls float version
  
  Serial.print("Int sum: ");
  Serial.println(intSum);
  Serial.print("Float sum: ");
  Serial.println(floatSum);
}

void loop() {
  // Nothing to do here
}
