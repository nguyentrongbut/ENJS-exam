const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');
const webRoutes = require('./routes/web');

const app = express();
const PORT = 3000;

// MongoDB connection setup
mongoose.connect('mongodb://localhost/productdb', { useNewUrlParser: true, useUnifiedTopology: true });

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// EJS setup
app.set('view engine', 'ejs');

// API routes
app.use('/api', apiRoutes);

// Web routes
app.use('/', webRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
