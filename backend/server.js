const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, images, etc.)
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/getRoute', (req, res) => {
  // Assuming you have obtained the destination coordinates from MapmyIndia
  const destinationCoords = req.body.destinationCoords;
console.log("UNIT 1")
  // Use destinationCoords and current location to generate a Google Maps route link
  const googleMapsLink = `https://www.google.com/maps/dir/?api=1&origin=${req.body.currentCoords}&destination=${destinationCoords}`;
  console.log("UNIT 2")
  // Send the link back to the frontend using an alert
  res.send(`${googleMapsLink}`);
  console.log("UNIT 3")
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
