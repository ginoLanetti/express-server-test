const Subscriber = require('./models/subscriber');
const path = require('path');


module.exports = function routes(app) {

  app.get('/', function(req, res) {
    return res.sendFile(path.join(__dirname + '/public/index.html'));
  });

  app.post('/subscribe', async (req, res) => {
    const add = await Subscriber.create({
      name: req.body.name,
      hairColor: req.body.hairColor
    });
    return res.send(200);
  });

  app.get('/subscribe', async (req, res) => {
    const get = await Subscriber.find().lean();
    return res.send(get);
  });
}

