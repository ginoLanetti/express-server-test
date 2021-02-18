const Subscriber = require('./models/subscriber');
const path = require('path');
const createError = require('http-errors');

module.exports = function routes(app) {

  app.get('/', function(req, res) {
    return res.sendFile(path.join(__dirname + '/public/index.html'));
  });

  app.post('/subscribe', async (req, res) => {
    const add = await Subscriber.create({
      name: req.body.name,
      hairColor: req.body.hairColor
    });
    return res.send(process.env.NODE_ENV);
  });

  app.get('/subscribe', async (req, res) => {
    const get = await Subscriber.find().lean();
    return res.send(get);
  });
  app.use(function(req, res, next) {
    next(createError(404));
  });
  app.use(function(err, req, res, next) {
    console.log(err); 
    res.status(err);
  });
}

