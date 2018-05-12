import mongoose from 'mongoose';

const { Schema } = mongoose;

// To fix https://github.com/Automattic/mongoose/issues/4291
mongoose.Promise = global.Promise;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  password: String,
  role: String,
  updated: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Users', UserSchema);
