const express = require('express');
const path = require('path');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient

const connectionString = 'mongodb+srv://express-test:Qmez6NZEOwjRsibM@cluster0.8j0fb.mongodb.net/<dbname>?retryWrites=true&w=majority'


MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('express-server-db')
    const greetingsCollection = db.collection('greetings')

    app.set('view engine', 'ejs')

    app.get('/', (req, res) => {
      greetingsCollection.find().toArray()
        .then(results => {
          res.render('index.ejs', {greetings: results})
        })
        .catch(error => console.error(error))
        
    })

    app.post('/greetings', (req, res) => {
      greetingsCollection.insertOne(req.body)
        .then( res.redirect('/'))
        .catch(err => console.error(err))
    })

  })
  .catch(err => console.error(err))

const app = express();
const port = process.env.PORT || 3010;


app.use(bodyParser.urlencoded({ extended: true }))


app.listen(port, () => console.log(`I'm listening on port ${port}`))
