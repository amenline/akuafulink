import mongoose, { Schema } from 'mongoose';

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  mobile: string;
  picture?: string;
  cart?: string[];
  shopped?: string[];
  date?: Date;
}

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
    },
    cart: [
      {
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
    shopped: [
      {
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>('user', UserSchema);

export default User;
