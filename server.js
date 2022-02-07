require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const datamodelRoutes = require('./app/routes/datamodel.routes');
const datasetRoutes = require('./app/routes/dataset.routes');
const userRoutes = require('./app/routes/user.routes');
const categoryRoutes = require('./app/routes/category.routes');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors())

// Routes Api
app.use('/api/v1/datasets', datasetRoutes);
app.use('/api/v1/datamodels', datamodelRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/categories', categoryRoutes);

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