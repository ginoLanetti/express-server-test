const express = require('express');

const app = express();
const port = process.env.PORT || 3010;


app.use(express.static('public'))
//GET, PUT, POST, DELETE endpoints

//(location, middleware[optional], callback)




app.listen(port, () => console.log(`I'm listening on port ${port}`))
