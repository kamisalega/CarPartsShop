const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  first: { type: String, required: true },
  last: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  createOn: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
