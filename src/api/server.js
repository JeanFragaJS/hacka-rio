// require('dotenv').config()
const path = require('path');
const express =  require('express')
const routes = require('./routes-config.js')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.get('/uploads', express.static(path.join(__dirname, 'uploads')));

routes(app)

const port =  process.env.PORT || 8080;
app.listen(port, () => console.log(`API run on ${port}`))

module.exports = app