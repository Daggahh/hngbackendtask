const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    email: "odidihope@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/Daggahh/hngbackendtask",
  });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
