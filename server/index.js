const express = require("express");

const PORT = process.env.PORT || 3001;

const exps = express();

exps.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

exps.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
