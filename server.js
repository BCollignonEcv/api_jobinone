require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const adminSourcesRoutes = require('./routes/source.routes');
const apiUserRoutes = require('./routes/user.routes');
const apijobRoutes = require('./routes/job.routes');

const app = express();

const PORT = process.env.NODE_PORT || 8080;

app.use(bodyParser.json());

// Routes Admin
app.use('/admin/sources', adminSourcesRoutes);

// Routes Api
app.use('/api/users', apiUserRoutes);
app.use('/api/jobs', apijobRoutes);

app.get('/', (req, res) => {
    res.send("Welcome on Jobinone")
})

app.get('/api', (req, res) => {
    res.send("Welcome on Jobinone API")
})

app.get('/admin', (req, res) => {
    res.send("Welcome on Jobinone Admin")
})

app.listen(PORT, () => {
    console.log(`Server running on : http://localhost:${PORT}`)
})