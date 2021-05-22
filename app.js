require('./models/db')
const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')
const PORT = process.env.PORT || 8080

app.get('/leta/:temperature/:humidity/:position/:gas',routes.leta)
app.get('/pata',routes.pata)
app.listen(PORT,()=>console.log("Listening to the port " + PORT))