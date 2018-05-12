import mongoose from 'mongoose';

const { Schema } = mongoose;

// To fix https://github.com/Automattic/mongoose/issues/4291
mongoose.Promise = global.Promise;

const kechengSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  details: String,
  contents: Array,
  vidoe: Array,
  progress:Number,
  works:Array,
  updated: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('kecheng', kechengSchema);
