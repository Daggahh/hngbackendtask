const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/classify-number", async (req, res) => {
  const { number } = req.query;

  if (!number || isNaN(number)) {
    return res.status(400).json({
      number: number,
      error: true,
    });
  }

  const num = parseInt(number);

  // Function to check if prime
  const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  // Function to check if perfect number
  const isPerfect = (n) => {
    let sum = 1;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        sum += i;
        if (i !== n / i) sum += n / i;
      }
    }
    return sum === n && n !== 1;
  };

  // Function to check Armstrong number
  const isArmstrong = (n) => {
    const digits = n.toString().split("").map(Number);
    const power = digits.length;
    return digits.reduce((sum, d) => sum + Math.pow(d, power), 0) === n;
  };

  // Sum of digits
  const digitSum = num
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);

  // Number properties
  const properties = [];
  if (isArmstrong(num)) properties.push("armstrong");
  properties.push(num % 2 === 0 ? "even" : "odd");

  try {
    // Fetch fun fact from Numbers API
    const { data: funFact } = await axios.get(
      `http://numbersapi.com/${num}/math`
    );

    res.json({
      number: num,
      is_prime: isPrime(num),
      is_perfect: isPerfect(num),
      properties: properties,
      digit_sum: digitSum,
      fun_fact: funFact,
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch fun fact.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
