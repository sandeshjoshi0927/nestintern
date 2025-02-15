import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  published: Date,
});
