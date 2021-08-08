import mongoose, { Schema } from 'mongoose';

export interface ICollection extends mongoose.Document {
  name: string;
  contents: string[];
  price: string;
  measure?: string;
  stock?: number;
  pictures?: string[];
  description: string;
  date?: Date;
}

const CollectionSchema: Schema = new Schema(
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
      type: String,
      required: true,
    },
    measure: {
      type: Schema.Types.ObjectId,
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
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Collection = mongoose.model<ICollection>('collection', CollectionSchema);

export default Collection;
