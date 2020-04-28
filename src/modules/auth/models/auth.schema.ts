import { Schema } from 'mongoose';

export const AuthSchema = new Schema({
  name: String,
  password: String,
  createdAt: Date,
  lastActivited: Date,
  posts: Array,
  comments: Array,
  phone: String,
  uuid: String,
});
