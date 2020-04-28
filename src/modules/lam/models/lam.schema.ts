import { Schema } from 'mongoose';

export const LamSchema = new Schema({
  createAt: Date,
  content: String,
  uuid: String,
  userName: String,
});
