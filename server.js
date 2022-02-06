require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const datamodelRoutes = require('./routes/datamodel.routes');
const datasetRoutes = require('./routes/dataset.routes');
const roleRoutes = require('./routes/role.routes');
const userRoutes = require('./routes/user.routes');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors())

// Routes Admin
app.use('/admin/roles', roleRoutes);
app.use('/admin/users', userRoutes);

// Routes Api
app.use('/api/datasets', datasetRoutes);
app.use('/api/datamodels', datamodelRoutes);
app.use('/api/users', userRoutes);

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