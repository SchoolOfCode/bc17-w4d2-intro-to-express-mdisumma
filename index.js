import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World with Express.js!");
});

// Adding new routes is as simple as adding new app.get() calls
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
