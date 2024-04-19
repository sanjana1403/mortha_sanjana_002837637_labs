

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  type:{
  type:String,
  enum:['employee','admin'],
  required: true
  },
  imagePaths: {
    type: [String]
  }
});


module.exports = mongoose.model('User', userSchema);
