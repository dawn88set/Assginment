import * as mongoose from 'mongoose';

export const FeedSchema = new mongoose.Schema({
  content: String,
  timestamp: Number,
  likeCount: Number,
});
