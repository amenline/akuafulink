import mongoose, { Schema } from 'mongoose';
import { ShopItemType } from '../Types';

export interface ICommodity extends mongoose.Document {
  name: string;
  variety?: string[];
  price: number;
  measure?: string;
  stock?: number;
  pictures?: string[];
  categories: string[];
  description: string;
  type: ShopItemType;
  date?: Date;
}

const CommoditySchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    variety: {
      type: [String],
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
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
      },
    ],
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      default: ShopItemType.commodity,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Commodity = mongoose.model<ICommodity>('commodity', CommoditySchema);

export default Commodity;
