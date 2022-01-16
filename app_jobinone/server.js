require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const adminSourcesRoutes = require('./app/routes/source.routes');
const apiUserRoutes = require('./app/routes/user.routes');
const apijobRoutes = require('./app/routes/job.routes');

const app = express();

const PORT = process.env.NODE_DOCKER_PORT || 8080;

app.use(bodyParser.json());

// Routes Admin
app.use('/admin/sources', adminSourcesRoutes);

// Routes Api
app.use('/api/users', apiUserRoutes);
app.use('/api/jobs', apijobRoutes);

app.get('/', (req, res) => {
    res.send("Welcome on Jobinone API")
})

app.listen(PORT, () => {
    console.log(`Server running on : http://localhost:${PORT}`)
})