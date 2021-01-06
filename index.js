const express = require('express');

const server = express()

server.get('/', (req, res) => {
  res.send('Anh yeu Dzung nhiu lam')
})

const PORT = process.env.PORT || 3443;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`))