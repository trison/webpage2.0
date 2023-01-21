const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;

const exps = express();


// Access React client files
exps.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle API requests
exps.get("/api", (req, res) => {
  res.json({ message: "Trison Nguyen :)" });
});

exps.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// Listen on port
exps.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
