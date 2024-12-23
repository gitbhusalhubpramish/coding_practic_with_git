# Arduino Uno Datatypes

This document explains the various datatypes available in Arduino Uno, their uses, and examples of how to implement them.

---

## Overview
In Arduino Uno, datatypes specify the kind of data a variable can hold. Choosing the correct datatype ensures efficient memory usage and proper functioning of your program.

### Common Datatypes

1. **Integer (`int`)**
   - Stores whole numbers.
   - Range: -32,768 to 32,767.
   - Memory: 2 bytes.

   **Example:**
   ```cpp
   int myNumber = 100;
   ```

2. **Long (`long`)**
   - Stores larger whole numbers.
   - Range: -2,147,483,648 to 2,147,483,647.
   - Memory: 4 bytes.

   **Example:**
   ```cpp
   long bigNumber = 123456789;
   ```

3. **Float (`float`)**
   - Stores decimal numbers.
   - Range: +/- 3.4028235E+38 (7 significant digits).
   - Memory: 4 bytes.

   **Example:**
   ```cpp
   float pi = 3.14;
   ```

4. **Character (`char`)**
   - Stores a single character.
   - Memory: 1 byte.

   **Example:**
   ```cpp
   char myChar = 'A';
   ```

5. **Boolean (`boolean`)**
   - Stores `true` or `false`.
   - Memory: 1 byte.

   **Example:**
   ```cpp
   boolean isOn = true;
   ```

6. **String (`String`)**
   - Stores a sequence of characters.
   - Dynamic memory usage based on string length.

   **Example:**
   ```cpp
   String myString = "Hello, Arduino!";
   ```

---

## Practical Example

### Code Example Using Multiple Datatypes
```cpp
void setup() {
  Serial.begin(9600);

  int age = 25;
  float temperature = 36.6;
  char grade = 'A';
  boolean isPassed = true;
  String message = "Welcome to Arduino!";

  Serial.println(age);
  Serial.println(temperature);
  Serial.println(grade);
  Serial.println(isPassed);
  Serial.println(message);
}

void loop() {
  // Nothing here
}
```

---

## Tips for Using Datatypes
- Use `int` or `byte` for small numbers to save memory.
- Use `long` for large integer values.
- Use `float` only when fractional values are required, as it is slower and uses more memory.
- Always initialize your variables to avoid unexpected behavior.

---

This guide provides a basic understanding of Arduino Uno datatypes. Experiment with different datatypes to understand their behavior and applications!
