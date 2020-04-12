import { Schema } from 'mongoose';

export const AuthSchema = new Schema({
  name: String,
  password: String,
  created_at: Date,
  last_activited: Date,
  posts: Array,
  comments: Array,
  phone: String,
});
