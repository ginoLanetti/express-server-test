require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', (error) => console.log('connected to db'))


const app = express();
const port = process.env.PORT || 3010;


app.use(express.static('public'));

app.use(express.json())
app.use(express.urlencoded({ extended: false }));


const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)




app.listen(port, () => console.log(`Dude, I'm listening on port ${port}`))
