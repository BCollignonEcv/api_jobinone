require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const sourcesRoutes = require('./routes/source.routes');
const userRoutes = require('./routes/user.routes');
const jobRoutes = require('./routes/job.routes');

const app = express();

const PORT = process.env.NODE_PORT || 8080;

app.use(bodyParser.json());

// Routes Admin
app.use('/admin/sources', sourcesRoutes);
app.use('/admin/users', userRoutes);

// Routes Api
app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);

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