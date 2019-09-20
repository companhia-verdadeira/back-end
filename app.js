const env = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.header("Content-Type", "text/plain");
    res.send('Hello, world!')
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}`));
