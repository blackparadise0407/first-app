const express = require('express');

const server = express()

server.get('/', (req, res) => {
  res.send('Welcome to Kyle Pham')
})

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`))