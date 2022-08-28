import { model, Schema, Document } from 'mongoose';
import { User } from '../interfaces/user.interface';

const userSchema: Schema = new Schema({
  name: {
    type: String,
    index: true,
  },
  username: {
    type: String,
    index: true,
    unique: true,
  },
  birthDate: {
    type: Date,
  },
  email: {
    type: String,
    index: true,
  },
  phone: {
    type: String,
  },
  company: {
    type: String,
  },
});

const userModel = model<User & Document>('User', userSchema);

export default userModel;
