const express = require('express');

const app = express();
const port = process.env.PORT || 3010;

//GET, PUT, POST, DELETE endpoints

//(location, middleware[optional], callback)
app.get('/', (req, res) =>{
  res.send('<h1> Hi there, folks345! </h1>')
}) 

app.listen(port, () => console.log(`I'm listening on port ${port}`))
