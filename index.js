// index.js
const express = require("express");
const app = express();

app.get("/api/health", (req, res) => {
  res.json({ status: "Backend is running" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
