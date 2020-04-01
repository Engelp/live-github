const express = require('express');

const app = express()

<<<<<<< HEAD
app.get('/teste2', (req, res) => {
  return res.json({ hello: 'World 2'})
=======
app.get('/teste3', (req, res) => {
  return res.json({ hello: 'World 3'})
>>>>>>> master
});

app.listen(3333);