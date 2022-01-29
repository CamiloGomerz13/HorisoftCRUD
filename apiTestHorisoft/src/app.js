const express = require('express');
const usuarioRoute = require('./routes/usuario.route')
const app = express();

app.use(express.json());
app.use('/usuarios', usuarioRoute)

module.exports = {app};