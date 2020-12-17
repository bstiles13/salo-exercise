const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Middleware
// ----------------------------------------------------------------------------

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

// Routes
// ----------------------------------------------------------------------------

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));

// Start server
// ----------------------------------------------------------------------------

app.listen(PORT, () => {
  console.log(`Successful connection on port ${PORT}`);
});
