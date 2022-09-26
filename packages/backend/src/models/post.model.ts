import { model, Schema, Document } from 'mongoose';
import { Post } from '../interfaces/post.interface';

const postSchema: Schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true,
  },
  reviewerUserId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const postModel = model<Post & Document>('Post', postSchema);

export default postModel;
