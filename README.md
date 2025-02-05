# Number Classifier API

This API classifies numbers based on mathematical properties and provides a fun fact.

## Features

- Checks if a number is prime, perfect, or an Armstrong number.
- Identifies whether the number is odd or even.
- Computes the sum of digits.
- Fetches a fun fact from the Numbers API.

## Endpoints

### **GET /api/classify-number**

#### **Query Parameters**

- `number` (integer) - The number to classify.

#### **Example Request**

- http://localhost:3000/api/classify-number?number=371

#### **Example Response**

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is a narcissistic number."
}
```
