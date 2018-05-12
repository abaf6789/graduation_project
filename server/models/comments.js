import mongoose from 'mongoose';

const { Schema } = mongoose;

// To fix https://github.com/Automattic/mongoose/issues/4291
mongoose.Promise = global.Promise;

const commentSchema = new Schema({
  parentId:String,
  userId: String,
  content: String,
  canReply:Boolean,
  updated: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('comments', commentSchema);