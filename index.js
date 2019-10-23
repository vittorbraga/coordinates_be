const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const api = require('./api');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const port = 3000;
const app = express(api);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '50mb'}))
app.use(morgan('dev'));
app.use(api);

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
});
mongoose.connect('mongodb+srv://candidate:motorateste@cluster0-pmgte.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise
app.listen(port, () => console.info(`Server is running on port ${port}!`));