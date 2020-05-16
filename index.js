const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const data = {
  playbackId: process.env.PLAYBACKID || 'NULL'
}
app.set('view engine', 'pug')
app.set("views", path.join(__dirname, "views"));
app.get('/', function (req, res) {
    res.render('index',data)
  })

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))