require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const sourcesAdminRoutes = require('./routes/sourceAdmin.routes');
const userAdminRoutes = require('./routes/userAdmin.routes');
const userPublicRoutes = require('./routes/userPublic.routes');
const jobPublicRoutes = require('./routes/jobPublic.routes');

const app = express();

const PORT = process.env.NODE_PORT || 8080;

app.use(bodyParser.json());

// Routes Admin
app.use('/admin/sources', sourcesAdminRoutes);
app.use('/admin/users', userAdminRoutes);

// Routes Api
app.use('/api/users', userPublicRoutes);
app.use('/api/jobs', jobPublicRoutes);

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