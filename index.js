require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const sourceRoutes = require('./routes/source.routes');
const userRoutes = require('./routes/user.routes');
const jobRoutes = require('./routes/job.routes');
const docsRoutes = require('./routes/docs.routes');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors())


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

// Routes Admin
app.use('/admin/sources', sourceRoutes);
app.use('/admin/users', userRoutes);

// Routes Api
app.use('/api/jobs', jobRoutes);

// Routes Docs
app.use('/docs', docsRoutes);

app.get('*', function(req, res) {
    res.status(404).json({
        status: 404,
        error: 'Endpoint not found'
    });
});


app.listen(PORT, () => {
    console.log(`Server running on : http://localhost:${PORT}`)
})