const mongoose = require('mongoose');

const flyerSchema = new mongoose.Schema({
  title: String,
  image_url: String, // This will be the link from DigitalOcean Spaces
  user_email: String,
  createdAt: { type: Date, default: Date.now },
  capacity: Number,
  timeOfEvent: String,
  location: String
});

module.exports = mongoose.model('Flyer', flyerSchema);