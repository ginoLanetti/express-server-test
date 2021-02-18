const mongoose = rootRequire('db').mongoose;

function subscriberSchema() {
  const schema = {
    name: {
      type: String,
      required: true
    },
    hairColor: {
      type: String,
      required: true
    },
    subscribeDate: {
      type: Date,
      required: true,
      default: Date.now
    }
  }
  const collectionName = 'subscriber';
  const mongoSchema = mongoose.Schema(schema);
  const Subscriber = mongoose.model(collectionName, mongoSchema);
  return Subscriber;
}
module.exports = subscriberSchema();