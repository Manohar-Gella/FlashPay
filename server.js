const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Handle form submission
app.post('/transfer', (req, res) => {
    const { recipient, amount, message } = req.body;
    // Perform money transfer logic here
    // For demo purposes, just log the received data
    console.log('Recipient:', recipient);
    console.log('Amount:', amount);
    console.log('Message:', message);
    // Send response
    res.send('Money transfer request received!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
