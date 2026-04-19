const mongoose = require('mongoose');

const flyerSchema = new mongoose.Schema({
  title: String,
  description: String,
  organizer: String,
  image_url: String, // link send to digital ocean spaces
  user_email: String,
  createdAt: { type: Date, default: Date.now },
  capacity: Number,
  timeOfEvent: String,
  dateOfEvent: String,
  city: String,
  usersInterested: {type: Number, default: 0},
  location: String
});

module.exports = mongoose.model('Flyer', flyerSchema);