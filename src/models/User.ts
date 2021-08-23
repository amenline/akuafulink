import mongoose, { Schema } from 'mongoose';
import { AccountType, Location } from '../Types';

export interface IUser extends mongoose.Document {
  name: string;
  mobile: string;
  email: string;
  password: string;
  picture?: string;
  location: Location;
  account: AccountType;
  profile: IProfile;
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
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Profile,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>('user', UserSchema);

export default User;
