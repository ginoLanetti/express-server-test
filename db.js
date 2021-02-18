const mongoose = require('mongoose');

const dbPath = process.env.NODE_ENV === 'production' ? 'mongodb+srv://express-test:VHCH84cY0c6e51yV@cluster0.8j0fb.mongodb.net/subscribers?retryWrites=true&w=majority' : 'mongodb://127.0.0.1:27017/subscribers';

const serverOptions = {
  auto_reconnect: true,
  poolSize: 10,
  useNewUrlParser: true,
  useUnifiedTopology: true
};


mongoose.connect(dbPath, serverOptions);
const db = mongoose.connection;
mongoose.set('useCreateIndex', true);

mongoose.set('useFindAndModify', false);

db.on('error', function () {
  console.log('error occured from db');
});

db.once('openUri', function dbOpen() {
  console.log('successfully opened the db');
});

exports.mongoose = mongoose;