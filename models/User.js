import mongoose from 'mongoose';

let userSchema = new mongoose.Schema({
  name: String,
  password: String,
  roles: [Schema.Types.ObjectId]
});

let User = mongoose.model('User', userSchema)

module.exports = User;
