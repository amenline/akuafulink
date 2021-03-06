import mongoose, { Schema } from 'mongoose';
import { ShopItemType } from '../Types';

export interface IMealBox extends mongoose.Document {
  name: string;
  contents: string[];
  price: number;
  measure?: string;
  stock?: number;
  pictures?: string[];
  description: string;
  type: ShopItemType;
  date?: Date;
}

const mealBoxSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contents: {
      type: [String],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    measure: {
      type: String,
    },
    stock: {
      type: Number,
    },
    pictures: {
      type: [String],
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      default: ShopItemType.mealBox,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const mealBox = mongoose.model<IMealBox>('mealBox', mealBoxSchema);

export default mealBox;
