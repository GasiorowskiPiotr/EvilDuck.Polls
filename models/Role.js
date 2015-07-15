import mongoose from 'mongoose';

let roleSchema = new mongoose.Schema({
  name: String
});

let Role = mongoose.model('Role', roleSchema)

module.exports = Role;
